import { defineComponent, computed, h, getCurrentInstance, ref, onBeforeUnmount, Transition, watch, onMounted } from 'vue';
import useSize, { useSizeProps, useSizeDefaults } from '../composables/private/use-size';
import { hSlot, hMergeSlot, hDir } from '../utils/private/render';
import { Ripple } from '../directives';
import useAlign, { useAlignProps } from '../composables/private/use-align';
import { stopAndPrevent, prevent, stop, listenOpts, cleanEvt, addEvt } from '../utils/private/event';
import { getTouchTarget } from '../utils/private/touch';
import { isKeyCode } from '../utils/private/key-composition';
import useAnchor, { useAnchorProps } from '../composables/private/use-anchor';
import useScrollTarget from '../composables/private/use-scroll-target';
import useModelToggle, { useModelToggleProps, useModelToggleEmits } from '../composables/private/use-model-toggle';
import usePortal from '../composables/private/use-portal';
import useTransition, { useTransitionProps } from '../composables/private/use-transition';
import useTick from '../composables/private/use-tick';
import useTimeout from '../composables/private/use-timeout';
import { getScrollTarget } from '../utils/private/scroll';
import { clearSelection } from '../utils/private/selection';
import { validatePosition, validateOffset, parsePosition, setPosition } from '../utils/private/position-engine';
import { platform } from '../utils/platform';
import { between } from '../utils/private/format';
import useDark, { useDarkProps } from '../composables/private/use-dark';

var VcIcon = defineComponent({
    name: 'VcIcon',
    props: Object.assign(Object.assign({}, useSizeProps), { tag: {
            type: String,
            default: 'i'
        }, name: String, color: String, hoverColor: String, left: Boolean, right: Boolean }),
    setup(props, { slots }) {
        const sizeStyle = useSize(props);
        const style = computed(() => {
            const css = sizeStyle.value;
            if (!css) {
                return undefined;
            }
            props.color && (css.color = props.color);
            props.hoverColor && (css['--hover-color'] = props.hoverColor);
            return css;
        });
        const classes = computed(() => 'vc-icon' +
            (props.left === true ? ' on-left' : '') +
            (props.right === true ? ' on-right' : '') +
            (props.color !== void 0 ? ` text-${props.color}` : ''));
        const type = computed(() => {
            let cls;
            let icon = props.name;
            if (!icon) {
                return {
                    none: true,
                    cls: classes.value
                };
            }
            if (icon.startsWith('M') === true) {
                const [def, viewBox] = icon.split('|');
                return {
                    svg: true,
                    cls: classes.value,
                    nodes: def.split('&&').map(path => {
                        const [d, style, transform] = path.split('@@');
                        return h('path', {
                            style,
                            d,
                            transform
                        });
                    }),
                    viewBox: viewBox !== void 0 ? viewBox : '0 0 24 24'
                };
            }
            if (icon.startsWith('img:') === true) {
                return {
                    img: true,
                    cls: classes.value,
                    src: icon.substring(4)
                };
            }
            if (icon.startsWith('svguse:') === true) {
                const [def, viewBox] = icon.split('|');
                return {
                    svguse: true,
                    cls: classes.value,
                    src: def.substring(7),
                    viewBox: viewBox !== void 0 ? viewBox : '0 0 24 24'
                };
            }
            let content = ' ';
            if (/^[l|f]a[s|r|l|b|d]{0,1} /.test(icon) || icon.startsWith('icon-') === true) {
                cls = icon;
            }
            else if (icon.startsWith('bt-') === true) {
                cls = `bt ${icon}`;
            }
            else if (icon.startsWith('eva-') === true) {
                cls = `eva ${icon}`;
            }
            else if (/^ion-(md|ios|logo)/.test(icon) === true) {
                cls = `ionicons ${icon}`;
            }
            else if (icon.startsWith('ion-') === true) {
                cls = `ionicons ion-md${icon.substr(3)}`;
            }
            else if (icon.startsWith('mdi-') === true) {
                cls = `mdi ${icon}`;
            }
            else if (icon.startsWith('iconfont ') === true) {
                cls = `${icon}`;
            }
            else if (icon.startsWith('ti-') === true) {
                cls = `themify-icon ${icon}`;
            }
            else if (icon.startsWith('vc-') === true) {
                cls = `vc-icons ${icon}`;
            }
            else {
                cls = 'notranslate material-icons';
                if (icon.startsWith('o_') === true) {
                    icon = icon.substring(2);
                    cls += '-outlined';
                }
                else if (icon.startsWith('r_') === true) {
                    icon = icon.substring(2);
                    cls += '-round';
                }
                else if (icon.startsWith('s_') === true) {
                    icon = icon.substring(2);
                    cls += '-sharp';
                }
                content = icon;
            }
            return {
                cls: cls + ' ' + classes.value,
                content
            };
        });
        return () => {
            const data = {
                class: type.value.cls,
                style: style.value,
                'aria-hidden': 'true',
                role: 'presentation',
                viewBox: undefined,
                src: undefined
            };
            if (type.value.none === true) {
                return h(props.tag, data, hSlot(slots.default));
            }
            if (type.value.img === true) {
                data.src = type.value.src;
                if (data.style) {
                    data.style.width = data.style.fontSize;
                    data.style.height = data.style.fontSize;
                }
                return h('img', data);
            }
            if (type.value.svg === true) {
                data.viewBox = type.value.viewBox;
                data['aria-hidden'] = 'true';
                if (data.style) {
                    data.style.width = data.style.fontSize;
                    data.style.height = data.style.fontSize;
                }
                return h('svg', data, hMergeSlot(slots.default, type.value.nodes));
            }
            if (type.value.svguse === true) {
                data.viewBox = type.value.viewBox;
                data['aria-hidden'] = 'true';
                if (data.style) {
                    data.style.width = data.style.fontSize;
                    data.style.height = data.style.fontSize;
                }
                return h('svg', data, hMergeSlot(slots.default, [h('use', { 'xlink:href': type.value.src })]));
            }
            return h(props.tag, data, hMergeSlot(slots.default, [type.value.content]));
        };
    }
});

const useSpinnerProps = {
    size: {
        type: [Number, String],
        default: '1em'
    },
    color: String
};
function useSpinner(props) {
    return {
        cSize: computed(() => (props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size)),
        classes: computed(() => 'vc-spinner' + (props.color ? ` text-${props.color}` : ''))
    };
}

const svg = [
    h('g', {
        transform: 'translate(1 1)',
        'stroke-width': '2',
        fill: 'none',
        'fill-rule': 'evenodd'
    }, [
        h('circle', {
            cx: '5',
            cy: '50',
            r: '5'
        }, [
            h('animate', {
                attributeName: 'cy',
                begin: '0s',
                dur: '2.2s',
                values: '50;5;50;50',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'cx',
                begin: '0s',
                dur: '2.2s',
                values: '5;27;49;5',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            })
        ]),
        h('circle', {
            cx: '27',
            cy: '5',
            r: '5'
        }, [
            h('animate', {
                attributeName: 'cy',
                begin: '0s',
                dur: '2.2s',
                from: '5',
                to: '5',
                values: '5;50;50;5',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'cx',
                begin: '0s',
                dur: '2.2s',
                from: '27',
                to: '27',
                values: '27;49;5;27',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            })
        ]),
        h('circle', {
            cx: '49',
            cy: '50',
            r: '5'
        }, [
            h('animate', {
                attributeName: 'cy',
                begin: '0s',
                dur: '2.2s',
                values: '50;50;5;50',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'cx',
                from: '49',
                to: '49',
                begin: '0s',
                dur: '2.2s',
                values: '49;5;27;49',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            })
        ])
    ])
];
var spinnerBall = defineComponent({
    name: 'VcSpinnerBall',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            stroke: 'currentColor',
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 57 57',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg);
    }
});

const svg$1 = [
    h('rect', {
        y: '10',
        width: '15',
        height: '120',
        rx: '6'
    }, [
        h('animate', {
            attributeName: 'height',
            begin: '0.5s',
            dur: '1s',
            values: '120;110;100;90;80;70;60;50;40;140;120',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        }),
        h('animate', {
            attributeName: 'y',
            begin: '0.5s',
            dur: '1s',
            values: '10;15;20;25;30;35;40;45;50;0;10',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        })
    ]),
    h('rect', {
        x: '30',
        y: '10',
        width: '15',
        height: '120',
        rx: '6'
    }, [
        h('animate', {
            attributeName: 'height',
            begin: '0.25s',
            dur: '1s',
            values: '120;110;100;90;80;70;60;50;40;140;120',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        }),
        h('animate', {
            attributeName: 'y',
            begin: '0.25s',
            dur: '1s',
            values: '10;15;20;25;30;35;40;45;50;0;10',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        })
    ]),
    h('rect', {
        x: '60',
        width: '15',
        height: '140',
        rx: '6'
    }, [
        h('animate', {
            attributeName: 'height',
            begin: '0s',
            dur: '1s',
            values: '120;110;100;90;80;70;60;50;40;140;120',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        }),
        h('animate', {
            attributeName: 'y',
            begin: '0s',
            dur: '1s',
            values: '10;15;20;25;30;35;40;45;50;0;10',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        })
    ]),
    h('rect', {
        x: '90',
        y: '10',
        width: '15',
        height: '120',
        rx: '6'
    }, [
        h('animate', {
            attributeName: 'height',
            begin: '0.25s',
            dur: '1s',
            values: '120;110;100;90;80;70;60;50;40;140;120',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        }),
        h('animate', {
            attributeName: 'y',
            begin: '0.25s',
            dur: '1s',
            values: '10;15;20;25;30;35;40;45;50;0;10',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        })
    ]),
    h('rect', {
        x: '120',
        y: '10',
        width: '15',
        height: '120',
        rx: '6'
    }, [
        h('animate', {
            attributeName: 'height',
            begin: '0.5s',
            dur: '1s',
            values: '120;110;100;90;80;70;60;50;40;140;120',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        }),
        h('animate', {
            attributeName: 'y',
            begin: '0.5s',
            dur: '1s',
            values: '10;15;20;25;30;35;40;45;50;0;10',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        })
    ])
];
var spinnerBars = defineComponent({
    name: 'VcSpinnerBars',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            fill: 'currentColor',
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 135 140',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$1);
    }
});

const svg$2 = [
    h('circle', {
        cx: '15',
        cy: '15',
        r: '15'
    }, [
        h('animate', {
            attributeName: 'r',
            from: '15',
            to: '15',
            begin: '0s',
            dur: '0.8s',
            values: '15;9;15',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        }),
        h('animate', {
            attributeName: 'fill-opacity',
            from: '1',
            to: '1',
            begin: '0s',
            dur: '0.8s',
            values: '1;.5;1',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        })
    ]),
    h('circle', {
        cx: '60',
        cy: '15',
        r: '9',
        'fill-opacity': '.3'
    }, [
        h('animate', {
            attributeName: 'r',
            from: '9',
            to: '9',
            begin: '0s',
            dur: '0.8s',
            values: '9;15;9',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        }),
        h('animate', {
            attributeName: 'fill-opacity',
            from: '.5',
            to: '.5',
            begin: '0s',
            dur: '0.8s',
            values: '.5;1;.5',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        })
    ]),
    h('circle', {
        cx: '105',
        cy: '15',
        r: '15'
    }, [
        h('animate', {
            attributeName: 'r',
            from: '15',
            to: '15',
            begin: '0s',
            dur: '0.8s',
            values: '15;9;15',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        }),
        h('animate', {
            attributeName: 'fill-opacity',
            from: '1',
            to: '1',
            begin: '0s',
            dur: '0.8s',
            values: '1;.5;1',
            calcMode: 'linear',
            repeatCount: 'indefinite'
        })
    ])
];
var spinnerDots = defineComponent({
    name: 'VcSpinnerDots',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            fill: 'currentColor',
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 120 30',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$2);
    }
});

const svg$3 = [
    h('g', {
        transform: 'translate(-20,-20)'
    }, [
        h('path', {
            d: 'M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z',
            fill: 'currentColor'
        }, [
            h('animateTransform', {
                attributeName: 'transform',
                type: 'rotate',
                from: '90 50 50',
                to: '0 50 50',
                dur: '1s',
                repeatCount: 'indefinite'
            })
        ])
    ]),
    h('g', {
        transform: 'translate(20,20) rotate(15 50 50)'
    }, [
        h('path', {
            d: 'M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z',
            fill: 'currentColor'
        }, [
            h('animateTransform', {
                attributeName: 'transform',
                type: 'rotate',
                from: '0 50 50',
                to: '90 50 50',
                dur: '1s',
                repeatCount: 'indefinite'
            })
        ])
    ])
];
var spinnerGears = defineComponent({
    name: 'VcSpinnerGears',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 100 100',
            preserveAspectRatio: 'xMidYMid',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$3);
    }
});

const svg$4 = [
    h('g', [
        h('path', {
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '5',
            'stroke-miterlimit': '10',
            d: 'M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z'
        }),
        h('clipPath', {
            id: 'uil-hourglass-clip1'
        }, [
            h('rect', {
                x: '15',
                y: '20',
                width: ' 70',
                height: '25'
            }, [
                h('animate', {
                    attributeName: 'height',
                    from: '25',
                    to: '0',
                    dur: '1s',
                    repeatCount: 'indefinite',
                    values: '25;0;0',
                    keyTimes: '0;0.5;1'
                }),
                h('animate', {
                    attributeName: 'y',
                    from: '20',
                    to: '45',
                    dur: '1s',
                    repeatCount: 'indefinite',
                    values: '20;45;45',
                    keyTimes: '0;0.5;1'
                })
            ])
        ]),
        h('clipPath', {
            id: 'uil-hourglass-clip2'
        }, [
            h('rect', {
                x: '15',
                y: '55',
                width: ' 70',
                height: '25'
            }, [
                h('animate', {
                    attributeName: 'height',
                    from: '0',
                    to: '25',
                    dur: '1s',
                    repeatCount: 'indefinite',
                    values: '0;25;25',
                    keyTimes: '0;0.5;1'
                }),
                h('animate', {
                    attributeName: 'y',
                    from: '80',
                    to: '55',
                    dur: '1s',
                    repeatCount: 'indefinite',
                    values: '80;55;55',
                    keyTimes: '0;0.5;1'
                })
            ])
        ]),
        h('path', {
            d: 'M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z',
            'clip-path': 'url(#uil-hourglass-clip1)',
            fill: 'currentColor'
        }),
        h('path', {
            d: 'M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z',
            'clip-path': 'url(#uil-hourglass-clip2)',
            fill: 'currentColor'
        }),
        h('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 50 50',
            to: '180 50 50',
            repeatCount: 'indefinite',
            dur: '1s',
            values: '0 50 50;0 50 50;180 50 50',
            keyTimes: '0;0.7;1'
        })
    ])
];
var spinnerHourglass = defineComponent({
    name: 'VcSpinnerHourglass',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 100 100',
            preserveAspectRatio: 'xMidYMid',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$4);
    }
});

const svg$5 = [
    h('g', {
        'stroke-width': '4',
        'stroke-linecap': 'round'
    }, [
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(180)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(210)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(240)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(270)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(300)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(330)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(0)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(30)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(60)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(90)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(120)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85',
                repeatCount: 'indefinite'
            })
        ]),
        h('line', {
            y1: '17',
            y2: '29',
            transform: 'translate(32,32) rotate(150)'
        }, [
            h('animate', {
                attributeName: 'stroke-opacity',
                dur: '750ms',
                values: '1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1',
                repeatCount: 'indefinite'
            })
        ])
    ])
];
var spinnerIos = defineComponent({
    name: 'VcSpinnerIos',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            width: cSize.value,
            height: cSize.value,
            stroke: 'currentColor',
            fill: 'currentColor',
            viewBox: '0 0 64 64'
        }, svg$5);
    }
});

const svg$6 = [
    h('circle', {
        cx: '50',
        cy: '50',
        r: '44',
        fill: 'none',
        'stroke-width': '4',
        'stroke-opacity': '.5',
        stroke: 'currentColor'
    }),
    h('circle', {
        cx: '8',
        cy: '54',
        r: '6',
        fill: 'currentColor',
        'stroke-width': '3',
        stroke: 'currentColor'
    }, [
        h('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 50 48',
            to: '360 50 52',
            dur: '2s',
            repeatCount: 'indefinite'
        })
    ])
];
var spinnerOrbit = defineComponent({
    name: 'VcSpinnerOrbit',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 100 100',
            preserveAspectRatio: 'xMidYMid',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$6);
    }
});

const svg$7 = [
    h('g', {
        transform: 'translate(1 1)',
        'stroke-width': '2',
        fill: 'none',
        'fill-rule': 'evenodd'
    }, [
        h('circle', {
            'stroke-opacity': '.5',
            cx: '18',
            cy: '18',
            r: '18'
        }),
        h('path', {
            d: 'M36 18c0-9.94-8.06-18-18-18'
        }, [
            h('animateTransform', {
                attributeName: 'transform',
                type: 'rotate',
                from: '0 18 18',
                to: '360 18 18',
                dur: '1s',
                repeatCount: 'indefinite'
            })
        ])
    ])
];
var spinnerOval = defineComponent({
    name: 'VcSpinnerOval',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            stroke: 'currentColor',
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 38 38',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$7);
    }
});

const svg$8 = [
    h('g', {
        fill: 'none',
        'fill-rule': 'evenodd',
        'stroke-width': '2'
    }, [
        h('circle', {
            cx: '22',
            cy: '22',
            r: '1'
        }, [
            h('animate', {
                attributeName: 'r',
                begin: '0s',
                dur: '1.8s',
                values: '1; 20',
                calcMode: 'spline',
                keyTimes: '0; 1',
                keySplines: '0.165, 0.84, 0.44, 1',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'stroke-opacity',
                begin: '0s',
                dur: '1.8s',
                values: '1; 0',
                calcMode: 'spline',
                keyTimes: '0; 1',
                keySplines: '0.3, 0.61, 0.355, 1',
                repeatCount: 'indefinite'
            })
        ]),
        h('circle', {
            cx: '22',
            cy: '22',
            r: '1'
        }, [
            h('animate', {
                attributeName: 'r',
                begin: '-0.9s',
                dur: '1.8s',
                values: '1; 20',
                calcMode: 'spline',
                keyTimes: '0; 1',
                keySplines: '0.165, 0.84, 0.44, 1',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'stroke-opacity',
                begin: '-0.9s',
                dur: '1.8s',
                values: '1; 0',
                calcMode: 'spline',
                keyTimes: '0; 1',
                keySplines: '0.3, 0.61, 0.355, 1',
                repeatCount: 'indefinite'
            })
        ])
    ])
];
var spinnerPuff = defineComponent({
    name: 'VcSpinnerPuff',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            stroke: 'currentColor',
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 44 44',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$8);
    }
});

const svg$9 = [
    h('g', {
        fill: 'none',
        'fill-rule': 'evenodd',
        transform: 'translate(1 1)',
        'stroke-width': '2'
    }, [
        h('circle', {
            cx: '22',
            cy: '22',
            r: '6'
        }, [
            h('animate', {
                attributeName: 'r',
                begin: '1.5s',
                dur: '3s',
                values: '6;22',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'stroke-opacity',
                begin: '1.5s',
                dur: '3s',
                values: '1;0',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'stroke-width',
                begin: '1.5s',
                dur: '3s',
                values: '2;0',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            })
        ]),
        h('circle', {
            cx: '22',
            cy: '22',
            r: '6'
        }, [
            h('animate', {
                attributeName: 'r',
                begin: '3s',
                dur: '3s',
                values: '6;22',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'stroke-opacity',
                begin: '3s',
                dur: '3s',
                values: '1;0',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            }),
            h('animate', {
                attributeName: 'stroke-width',
                begin: '3s',
                dur: '3s',
                values: '2;0',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            })
        ]),
        h('circle', {
            cx: '22',
            cy: '22',
            r: '8'
        }, [
            h('animate', {
                attributeName: 'r',
                begin: '0s',
                dur: '1.5s',
                values: '6;1;2;3;4;5;6',
                calcMode: 'linear',
                repeatCount: 'indefinite'
            })
        ])
    ])
];
var spinnerRings = defineComponent({
    name: 'VcSpinnerRings',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            stroke: 'currentColor',
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 45 45',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$9);
    }
});

const svg$a = [
    h('defs', [
        h('linearGradient', {
            x1: '8.042%',
            y1: '0%',
            x2: '65.682%',
            y2: '23.865%',
            id: 'a'
        }, [
            h('stop', {
                'stop-color': 'currentColor',
                'stop-opacity': '0',
                offset: '0%'
            }),
            h('stop', {
                'stop-color': 'currentColor',
                'stop-opacity': '.631',
                offset: '63.146%'
            }),
            h('stop', {
                'stop-color': 'currentColor',
                offset: '100%'
            })
        ])
    ]),
    h('g', {
        transform: 'translate(1 1)',
        fill: 'none',
        'fill-rule': 'evenodd'
    }, [
        h('path', {
            d: 'M36 18c0-9.94-8.06-18-18-18',
            stroke: 'url(#a)',
            'stroke-width': '2'
        }, [
            h('animateTransform', {
                attributeName: 'transform',
                type: 'rotate',
                from: '0 18 18',
                to: '360 18 18',
                dur: '0.9s',
                repeatCount: 'indefinite'
            })
        ]),
        h('circle', {
            fill: 'currentColor',
            cx: '36',
            cy: '18',
            r: '1'
        }, [
            h('animateTransform', {
                attributeName: 'transform',
                type: 'rotate',
                from: '0 18 18',
                to: '360 18 18',
                dur: '0.9s',
                repeatCount: 'indefinite'
            })
        ])
    ])
];
var spinnerTail = defineComponent({
    name: 'VcSpinnerTail',
    props: useSpinnerProps,
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value,
            width: cSize.value,
            height: cSize.value,
            viewBox: '0 0 38 38',
            xmlns: 'http://www.w3.org/2000/svg'
        }, svg$a);
    }
});

var VcSpinner = defineComponent({
    name: 'VcSpinner',
    props: Object.assign(Object.assign({}, useSpinnerProps), { thickness: {
            type: Number,
            default: 5
        } }),
    setup(props) {
        const { cSize, classes } = useSpinner(props);
        return () => h('svg', {
            class: classes.value + ' vc-spinner-mat',
            width: cSize.value,
            height: cSize.value,
            viewBox: '25 25 50 50'
        }, [
            h('circle', {
                class: 'path',
                cx: '50',
                cy: '50',
                r: '20',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': props.thickness,
                'stroke-miterlimit': '10'
            })
        ]);
    }
});

const padding = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
};
const defaultSizes = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24
};
const useBtnProps = Object.assign(Object.assign({}, useSizeProps), { type: {
        type: String,
        default: 'button'
    }, label: [Number, String], icon: String, iconRight: String, round: Boolean, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: {
        type: [Boolean, Object],
        default: true
    }, align: Object.assign(Object.assign({}, useAlignProps.align), { default: 'center' }), stack: Boolean, stretch: Boolean, loading: {
        type: Boolean,
        default: null
    }, disable: Boolean });
function useBtn (props) {
    const sizeStyle = useSize(props, defaultSizes);
    const alignClass = useAlign(props);
    const style = computed(() => {
        const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
        return props.padding !== void 0
            ? Object.assign({}, obj, {
                padding: props.padding
                    .split(/\s+/)
                    .map(v => (v in padding ? padding[v] + 'px' : v))
                    .join(' '),
                minWidth: '0',
                minHeight: '0'
            })
            : obj;
    });
    const isRounded = computed(() => props.rounded === true || props.fab === true || props.fabMini === true);
    const isActionable = computed(() => props.disable !== true && props.loading !== true);
    const tabIndex = computed(() => (isActionable.value === true ? props.tabindex || 0 : -1));
    const design = computed(() => {
        if (props.flat === true)
            return 'flat';
        if (props.outline === true)
            return 'outline';
        if (props.push === true)
            return 'push';
        if (props.unelevated === true)
            return 'unelevated';
        return 'standard';
    });
    const attributes = computed(() => {
        const acc = { tabindex: tabIndex.value };
        if (props.type !== 'a') {
            acc.type = props.type;
        }
        acc.role = props.type === 'a' ? 'link' : 'button';
        if (props.loading === true && props.percentage !== void 0) {
            Object.assign(acc, {
                role: 'progressbar',
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-valuenow': props.percentage
            });
        }
        if (props.disable === true) {
            acc.disabled = '';
            acc['aria-disabled'] = 'true';
        }
        return acc;
    });
    const classes = computed(() => {
        let colors;
        if (props.color !== void 0) {
            if (props.flat === true || props.outline === true) {
                colors = `text-${props.textColor || props.color}`;
            }
            else {
                colors = `bg-${props.color} text-${props.textColor || 'white'}`;
            }
        }
        else if (props.textColor) {
            colors = `text-${props.textColor}`;
        }
        return (`vc-btn--${design.value} ` +
            `vc-btn--${props.round === true ? 'round' : `rectangle${isRounded.value === true ? ' vc-btn--rounded' : ''}`}` +
            (colors !== void 0 ? ' ' + colors : '') +
            (isActionable.value === true ? ' vc-btn--actionable vc-focusable vc-hoverable' : props.disable === true ? ' disabled' : '') +
            (props.fab === true ? ' vc-btn--fab' : props.fabMini === true ? ' vc-btn--fab-mini' : '') +
            (props.noCaps === true ? ' vc-btn--no-uppercase' : '') +
            (props.dense === true ? ' vc-btn--dense' : '') +
            (props.stretch === true ? ' no-border-radius self-stretch' : '') +
            (props.glossy === true ? ' glossy' : ''));
    });
    const innerClasses = computed(() => alignClass.value +
        (props.stack === true ? ' column' : ' row') +
        (props.noWrap === true ? ' no-wrap text-no-wrap' : '') +
        (props.loading === true ? ' vc-btn__content--hidden' : ''));
    return {
        classes,
        style,
        innerClasses,
        attributes,
        isActionable
    };
}

const { passiveCapture } = listenOpts;
let touchTarget = null, keyboardTarget = null, mouseTarget = null;
var VcBtn = defineComponent({
    name: 'VcBtn',
    props: Object.assign(Object.assign({}, useBtnProps), { percentage: Number, darkPercentage: Boolean }),
    emits: ['click', 'keydown', 'touchstart', 'mousedown', 'keyup'],
    setup(props, { slots, emit }) {
        const { proxy } = getCurrentInstance();
        const { classes, style, innerClasses, attributes, isActionable } = useBtn(props);
        const rootRef = ref(null);
        const blurTargetRef = ref(null);
        let localTouchTargetEl = null, avoidMouseRipple, mouseTimer;
        const hasLabel = computed(() => props.label !== void 0 && props.label !== null && props.label !== '');
        const ripple = computed(() => (props.ripple === false
            ? false
            : Object.assign({ keyCodes: 13 }, (props.ripple === true ? {} : props.ripple))));
        const percentageStyle = computed(() => {
            const val = Math.max(0, Math.min(100, props.percentage));
            return val > 0
                ? { transition: 'transform 0.6s', transform: `translateX(${val - 100}%)` }
                : {};
        });
        const onEvents = computed(() => {
            if (props.loading === true) {
                return {
                    onMousedown: onLoadingEvt,
                    onTouchstart: onLoadingEvt,
                    onClick: onLoadingEvt,
                    onKeydown: onLoadingEvt,
                    onKeyup: onLoadingEvt
                };
            }
            else if (isActionable.value === true) {
                return {
                    onClick,
                    onKeydown,
                    onMousedown,
                    onTouchstart
                };
            }
            return {};
        });
        const directives = computed(() => {
            return [[
                    Ripple,
                    ripple.value,
                    void 0,
                    { center: props.round }
                ]];
        });
        const nodeProps = computed(() => (Object.assign(Object.assign({ ref: rootRef, class: 'vc-btn vc-btn-item non-selectable no-outline ' + classes.value, style: style.value }, attributes.value), onEvents.value)));
        function onClick(e) {
            if (e !== void 0) {
                if (e.defaultPrevented === true) {
                    return;
                }
                const el = document.activeElement;
                if (props.type === 'submit'
                    && el !== document.body
                    && rootRef.value.contains(el) === false
                    && el.contains(rootRef.value) === false) {
                    rootRef.value.focus();
                    const onClickCleanup = () => {
                        document.removeEventListener('keydown', stopAndPrevent, true);
                        document.removeEventListener('keyup', onClickCleanup, passiveCapture);
                        rootRef.value !== null && rootRef.value.removeEventListener('blur', onClickCleanup, passiveCapture);
                    };
                    document.addEventListener('keydown', stopAndPrevent, true);
                    document.addEventListener('keyup', onClickCleanup, passiveCapture);
                    rootRef.value.addEventListener('blur', onClickCleanup, passiveCapture);
                }
            }
            const go = () => {
            };
            emit('click', e, go);
        }
        function onKeydown(e) {
            if (isKeyCode(e, [13, 32]) === true) {
                stopAndPrevent(e);
                if (keyboardTarget !== rootRef.value) {
                    keyboardTarget !== null && cleanup();
                    rootRef.value.focus();
                    keyboardTarget = rootRef.value;
                    rootRef.value.classList.add('vc-btn--active');
                    document.addEventListener('keyup', onPressEnd, true);
                    rootRef.value.addEventListener('blur', onPressEnd, passiveCapture);
                }
            }
            emit('keydown', e);
        }
        function onTouchstart(e) {
            if (touchTarget !== rootRef.value) {
                touchTarget !== null && cleanup();
                touchTarget = rootRef.value;
                localTouchTargetEl = getTouchTarget(e.target);
                localTouchTargetEl.addEventListener('touchcancel', onPressEnd, passiveCapture);
                localTouchTargetEl.addEventListener('touchend', onPressEnd, passiveCapture);
            }
            avoidMouseRipple = true;
            clearTimeout(mouseTimer);
            mouseTimer = setTimeout(() => {
                avoidMouseRipple = false;
            }, 200);
            emit('touchstart', e);
        }
        function onMousedown(e) {
            if (mouseTarget !== rootRef.value) {
                mouseTarget !== null && cleanup();
                mouseTarget = rootRef.value;
                rootRef.value.classList.add('vc-btn--active');
                document.addEventListener('mouseup', onPressEnd, passiveCapture);
            }
            e.qSkipRipple = avoidMouseRipple === true;
            emit('mousedown', e);
        }
        function onPressEnd(e) {
            if (e !== void 0 && e.type === 'blur' && document.activeElement === rootRef.value) {
                return;
            }
            if (e !== void 0 && e.type === 'keyup') {
                if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
                    const evt = new MouseEvent('click', e);
                    evt.qKeyEvent = true;
                    e.defaultPrevented === true && prevent(evt);
                    e.cancelBubble === true && stop(evt);
                    rootRef.value.dispatchEvent(evt);
                    stopAndPrevent(e);
                    e.qKeyEvent = true;
                }
                emit('keyup', e);
            }
            cleanup();
        }
        function cleanup(destroying) {
            const blurTarget = blurTargetRef.value;
            if (destroying !== true
                && (touchTarget === rootRef.value || mouseTarget === rootRef.value)
                && blurTarget !== null
                && blurTarget !== document.activeElement) {
                blurTarget.setAttribute('tabindex', -1);
                blurTarget.focus();
            }
            if (touchTarget === rootRef.value) {
                if (localTouchTargetEl !== null) {
                    localTouchTargetEl.removeEventListener('touchcancel', onPressEnd, passiveCapture);
                    localTouchTargetEl.removeEventListener('touchend', onPressEnd, passiveCapture);
                }
                touchTarget = localTouchTargetEl = null;
            }
            if (mouseTarget === rootRef.value) {
                document.removeEventListener('mouseup', onPressEnd, passiveCapture);
                mouseTarget = null;
            }
            if (keyboardTarget === rootRef.value) {
                document.removeEventListener('keyup', onPressEnd, true);
                rootRef.value !== null && rootRef.value.removeEventListener('blur', onPressEnd, passiveCapture);
                keyboardTarget = null;
            }
            rootRef.value !== null && rootRef.value.classList.remove('vc-btn--active');
        }
        function onLoadingEvt(evt) {
            stopAndPrevent(evt);
            evt.qSkipRipple = true;
        }
        onBeforeUnmount(() => {
            cleanup(true);
        });
        Object.assign(proxy, {
            click: onClick
        });
        return () => {
            let inner = [];
            props.icon !== void 0 && inner.push(h(VcIcon, {
                name: props.icon,
                left: props.stack === false && hasLabel.value === true,
                role: 'img',
                'aria-hidden': 'true'
            }));
            hasLabel.value === true && inner.push(h('span', { class: 'block' }, [props.label]));
            inner = hMergeSlot(slots.default, inner);
            if (props.iconRight !== void 0 && props.round === false) {
                inner.push(h(VcIcon, {
                    name: props.iconRight,
                    right: props.stack === false && hasLabel.value === true,
                    role: 'img',
                    'aria-hidden': 'true'
                }));
            }
            const child = [
                h('span', {
                    class: 'vc-focus-helper',
                    ref: blurTargetRef
                })
            ];
            if (props.loading === true && props.percentage !== void 0) {
                child.push(h('span', {
                    class: 'vc-btn__progress absolute-full overflow-hidden'
                }, [
                    h('span', {
                        class: 'vc-btn__progress-indicator fit block' + (props.darkPercentage === true ? ' vc-btn__progress--dark' : ''),
                        style: percentageStyle.value
                    })
                ]));
            }
            child.push(h('span', {
                class: 'vc-btn__content text-center col items-center vc-anchor--skip ' + innerClasses.value
            }, inner));
            props.loading !== null && child.push(h(Transition, {
                name: 'vc-transition--fade'
            }, () => (props.loading === true
                ? [
                    h('span', {
                        key: 'loading',
                        class: 'absolute-full flex flex-center'
                    }, slots.loading !== void 0 ? slots.loading() : [h(VcSpinner)])
                ]
                : null)));
            return hDir('button', nodeProps.value, child, 'ripple', props.disable !== true && props.ripple !== false, () => directives.value);
        };
    }
});

var VcTooltip = defineComponent({
    name: 'VcTooltip',
    inheritAttrs: false,
    props: Object.assign(Object.assign(Object.assign(Object.assign({}, useAnchorProps), useModelToggleProps), useTransitionProps), { maxHeight: {
            type: String,
            default: null
        }, maxWidth: {
            type: String,
            default: null
        }, transitionShow: {
            type: String,
            default: 'jump-down'
        }, transitionHide: {
            type: String,
            default: 'jump-up'
        }, anchor: {
            type: String,
            default: 'bottom middle',
            validator: validatePosition
        }, self: {
            type: String,
            default: 'top middle',
            validator: validatePosition
        }, offset: {
            type: Array,
            default: () => [14, 14],
            validator: validateOffset
        }, scrollTarget: Object, delay: {
            type: Number,
            default: 0
        }, hideDelay: {
            type: Number,
            default: 0
        }, persistent: {
            type: Boolean
        } }),
    emits: [...useModelToggleEmits],
    setup(props, { slots, emit, attrs }) {
        let unwatchPosition, observer;
        const vm = getCurrentInstance();
        const innerRef = ref(null);
        const showing = ref(false);
        const anchorOrigin = computed(() => parsePosition(props.anchor, true));
        const selfOrigin = computed(() => parsePosition(props.self, true));
        const hideOnRouteChange = computed(() => props.persistent !== true);
        const { registerTick, removeTick, prepareTick } = useTick();
        const { registerTimeout, removeTimeout } = useTimeout();
        const { transition, transitionStyle } = useTransition(props, showing);
        const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
        const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl, avoidEmit: undefined });
        const { show, hide } = useModelToggle({
            showing,
            canShow,
            handleShow,
            handleHide,
            hideOnRouteChange,
            processOnMount: true
        });
        Object.assign(anchorEvents, { delayShow, delayHide });
        const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent);
        function handleShow(evt) {
            removeTick();
            removeTimeout();
            showPortal();
            registerTick(() => {
                observer = new MutationObserver(() => updatePosition());
                observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
                updatePosition();
                configureScrollTarget();
            });
            prepareTick();
            if (unwatchPosition === void 0) {
                unwatchPosition = watch(() => props.self + '|' + props.anchor, updatePosition);
            }
            registerTimeout(() => {
                emit('show', evt);
            }, props.transitionDuration);
        }
        function handleHide(evt) {
            removeTick();
            removeTimeout();
            anchorCleanup();
            registerTimeout(() => {
                hidePortal();
                emit('hide', evt);
            }, props.transitionDuration);
        }
        function anchorCleanup() {
            if (observer !== void 0) {
                observer.disconnect();
                observer = void 0;
            }
            if (unwatchPosition !== void 0) {
                unwatchPosition();
                unwatchPosition = void 0;
            }
            unconfigureScrollTarget();
            cleanEvt(anchorEvents, 'tooltipTemp');
        }
        function updatePosition() {
            const el = innerRef.value;
            if (anchorEl.value === void 0 || !el) {
                return;
            }
            setPosition({
                el,
                offset: props.offset,
                anchorEl: anchorEl.value,
                anchorOrigin: anchorOrigin.value,
                selfOrigin: selfOrigin.value,
                maxHeight: props.maxHeight,
                maxWidth: props.maxWidth
            });
        }
        function delayShow(evt) {
            if (platform().isPhone === true) {
                clearSelection();
                document.body.classList.add('non-selectable');
                const target = getTouchTarget(anchorEl.value);
                const evts = ['touchmove', 'touchcancel', 'touchend', 'click'].map(e => [target, e, '__delayHide', 'passiveCapture']);
                addEvt(anchorEvents, 'tooltipTemp', evts);
            }
            registerTimeout(() => {
                show(evt);
            }, props.delay);
        }
        function delayHide(evt) {
            removeTimeout();
            if (platform().isPhone === true) {
                cleanEvt(anchorEvents, 'tooltipTemp');
                clearSelection();
                setTimeout(() => {
                    document.body.classList.remove('non-selectable');
                }, 10);
            }
            registerTimeout(() => {
                hide(evt);
            }, props.hideDelay);
        }
        function configureAnchorEl() {
            if (props.noParentEvent === true || anchorEl.value === void 0) {
                return;
            }
            const evts = platform().isPhone === true
                ? [[anchorEl.value, 'touchstart', 'delayShow', 'passive']]
                : [
                    [anchorEl.value, 'mouseenter', 'delayShow', 'passive'],
                    [anchorEl.value, 'mouseleave', 'delayHide', 'passive']
                ];
            addEvt(anchorEvents, 'anchor', evts);
        }
        function configureScrollTarget() {
            if (anchorEl.value !== void 0 || props.scrollTarget !== void 0) {
                localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
                const fn = props.noParentEvent === true ? updatePosition : hide;
                changeScrollEvent(localScrollTarget.value, fn);
            }
        }
        function getTooltipContent() {
            return showing.value === true
                ? h('div', Object.assign(Object.assign({}, attrs), { ref: innerRef, class: ['vc-tooltip vc-tooltip--style vc-position-engine no-pointer-events', attrs.class], style: transitionStyle.value, role: 'complementary' }), hSlot(slots.default))
                : null;
        }
        function renderPortalContent() {
            return h(Transition, {
                name: transition.value,
                appear: true
            }, getTooltipContent);
        }
        onBeforeUnmount(anchorCleanup);
        Object.assign(vm.proxy, { updatePosition });
        return renderPortal;
    }
});

const xhr = XMLHttpRequest, send = xhr.prototype.send, stackStart = [], stackStop = [];
let highjackCount = 0;
function translate({ p, pos, active, horiz, reverse, dir }) {
    let x = 1, y = 1;
    if (horiz) {
        if (reverse) {
            x = -1;
        }
        if (pos === 'bottom') {
            y = -1;
        }
        return { transform: `translate3d(${x * (p - 100)}%,${active ? 0 : y * -200}%,0)` };
    }
    if (reverse) {
        y = -1;
    }
    if (pos === 'right') {
        x = -1;
    }
    return { transform: `translate3d(${active ? 0 : dir * x * -200}%,${y * (p - 100)}%,0)`, opacity: 0 };
}
function inc(p, amount) {
    if (typeof amount !== 'number') {
        if (p < 25) {
            amount = Math.random() * 3 + 3;
        }
        else if (p < 65) {
            amount = Math.random() * 3;
        }
        else if (p < 85) {
            amount = Math.random() * 2;
        }
        else if (p < 99) {
            amount = 0.6;
        }
        else {
            amount = 0;
        }
    }
    return between(p + amount, 0, 100);
}
function highjackAjax(start, stop) {
    stackStart.push(start);
    stackStop.push(stop);
    highjackCount++;
    if (highjackCount > 1) {
        return;
    }
    function endHandler() {
        stackStop.forEach(fn => { fn(); });
    }
    xhr.prototype.send = function () {
        stackStart.forEach(fn => { fn(); });
        this.addEventListener('loadend', endHandler, false);
        send.apply(this, arguments);
    };
}
function restoreAjax(start, stop) {
    stackStart.splice(stackStart.indexOf(start), 1);
    stackStop.splice(stackStop.indexOf(stop), 1);
    highjackCount = Math.max(0, highjackCount - 1);
    if (highjackCount === 0) {
        xhr.prototype.send = send;
    }
}
var VcAjaxBar = defineComponent({
    name: 'QAjaxBar',
    props: {
        position: {
            type: String,
            default: 'top',
            validator: (val) => ['top', 'right', 'bottom', 'left'].includes(val)
        },
        size: {
            type: String,
            default: '2px'
        },
        color: String,
        skipHijack: Boolean,
        reverse: Boolean
    },
    emits: ['start', 'stop'],
    setup(props, { emit }) {
        const { proxy } = getCurrentInstance();
        const progress = ref(0);
        const onScreen = ref(false);
        const animate = ref(true);
        let calls = 0, timer, speed;
        const classes = computed(() => `vc-loading-bar vc-loading-bar--${props.position}` +
            (props.color !== void 0 ? ` bg-${props.color}` : '') +
            (animate.value === true ? '' : ' no-transition'));
        const horizontal = computed(() => props.position === 'top' || props.position === 'bottom');
        const sizeProp = computed(() => (horizontal.value === true ? 'height' : 'width'));
        const style = computed(() => {
            const active = onScreen.value;
            const obj = translate({
                p: progress.value,
                pos: props.position,
                active,
                horiz: horizontal.value,
                reverse: props.reverse,
                dir: 1
            });
            obj[sizeProp.value] = props.size;
            obj.opacity = active ? 1 : 0;
            return obj;
        });
        const attributes = computed(() => onScreen.value === true
            ? {
                role: 'progressbar',
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-valuenow': progress.value
            }
            : { 'aria-hidden': 'true' });
        function start(newSpeed = 300) {
            const oldSpeed = speed;
            speed = Math.max(0, newSpeed) || 0;
            calls++;
            if (calls > 1) {
                if (oldSpeed === 0 && newSpeed > 0) {
                    planNextStep();
                }
                else if (oldSpeed > 0 && newSpeed <= 0) {
                    clearTimeout(timer);
                }
                return;
            }
            clearTimeout(timer);
            emit('start');
            progress.value = 0;
            if (onScreen.value === true) {
                return;
            }
            onScreen.value = true;
            animate.value = false;
            timer = setTimeout(() => {
                animate.value = true;
                newSpeed > 0 && planNextStep();
            }, 100);
        }
        function increment(amount) {
            if (calls > 0) {
                progress.value = inc(progress.value, amount);
            }
        }
        function stop() {
            calls = Math.max(0, calls - 1);
            if (calls > 0) {
                return;
            }
            clearTimeout(timer);
            emit('stop');
            const end = () => {
                animate.value = true;
                progress.value = 100;
                timer = setTimeout(() => {
                    onScreen.value = false;
                }, 1000);
            };
            if (progress.value === 0) {
                timer = setTimeout(end, 1);
            }
            else {
                end();
            }
        }
        function planNextStep() {
            if (progress.value < 100) {
                timer = setTimeout(() => {
                    increment();
                    planNextStep();
                }, speed);
            }
        }
        let hijacked;
        onMounted(() => {
            if (props.skipHijack !== true) {
                hijacked = true;
                highjackAjax(start, stop);
            }
        });
        onBeforeUnmount(() => {
            clearTimeout(timer);
            hijacked === true && restoreAjax(start, stop);
        });
        Object.assign(proxy, { start, stop, increment });
        return () => h('div', Object.assign({ class: classes.value, style: style.value }, attributes.value));
    }
});

const skeletonTypes = [
    'text',
    'rect',
    'circle',
    'VcBtn',
    'VcBadge',
    'VcChip',
    'VcToolbar',
    'VcCheckbox',
    'VcRadio',
    'VcToggle',
    'VcSlider',
    'VcRange',
    'VcInput',
    'VcAvatar'
];
const skeletonAnimations = ['wave', 'pulse', 'pulse-x', 'pulse-y', 'fade', 'blink', 'none'];
var VcSkeleton = defineComponent({
    name: 'VcSkeleton',
    props: Object.assign(Object.assign({}, useDarkProps), { tag: {
            type: String,
            default: 'div'
        }, type: {
            type: String,
            validator: (v) => skeletonTypes.includes(v),
            default: 'rect'
        }, animation: {
            type: String,
            validator: (v) => skeletonAnimations.includes(v),
            default: 'wave'
        }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }),
    setup(props, { slots }) {
        const isDark = useDark(props);
        const style = computed(() => props.size !== void 0 ? { width: props.size, height: props.size } : { width: props.width, height: props.height });
        const classes = computed(() => `vc-skeleton vc-skeleton--${isDark.value === true ? 'dark' : 'light'} vc-skeleton--type-${props.type}` +
            (props.animation !== 'none' ? ` vc-skeleton--anim vc-skeleton--anim-${props.animation}` : '') +
            (props.square === true ? ' vc-skeleton--square' : '') +
            (props.bordered === true ? ' vc-skeleton--bordered' : ''));
        return () => h(props.tag, {
            class: classes.value,
            style: style.value
        }, hSlot(slots.default));
    }
});

const components = [VcBtn, VcIcon, VcSpinner, VcTooltip, VcAjaxBar, VcSkeleton];
const install = (app) => {
    components.forEach(cmp => {
        app.component(cmp.name, cmp);
    });
};
var index = {
    install
};

export default index;
export { VcAjaxBar, VcBtn, VcIcon, VcSkeleton, VcSpinner, spinnerBall as VcSpinnerBall, spinnerBars as VcSpinnerBars, spinnerDots as VcSpinnerDots, spinnerGears as VcSpinnerGears, spinnerHourglass as VcSpinnerHourglass, spinnerIos as VcSpinnerIos, spinnerOrbit as VcSpinnerOrbit, spinnerOval as VcSpinnerOval, spinnerPuff as VcSpinnerPuff, spinnerRings as VcSpinnerRings, spinnerTail as VcSpinnerTail, VcTooltip };
