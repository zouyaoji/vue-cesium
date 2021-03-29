declare const _default: import("vue").DefineComponent<{
    percentage: NumberConstructor;
    darkPercentage: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    label: (StringConstructor | NumberConstructor)[];
    icon: StringConstructor;
    iconRight: StringConstructor;
    round: BooleanConstructor;
    outline: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    rounded: BooleanConstructor;
    push: BooleanConstructor;
    glossy: BooleanConstructor;
    size: StringConstructor;
    fab: BooleanConstructor;
    fabMini: BooleanConstructor;
    padding: StringConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    noCaps: BooleanConstructor;
    noWrap: BooleanConstructor;
    dense: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
    ripple: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    align: {
        default: string;
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    stack: BooleanConstructor;
    stretch: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    disable: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "keydown" | "touchstart" | "mousedown" | "keyup")[], "click" | "keydown" | "touchstart" | "mousedown" | "keyup", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    stretch: boolean;
    darkPercentage: boolean;
    type: string;
    round: boolean;
    outline: boolean;
    flat: boolean;
    unelevated: boolean;
    rounded: boolean;
    push: boolean;
    glossy: boolean;
    fab: boolean;
    fabMini: boolean;
    noCaps: boolean;
    noWrap: boolean;
    dense: boolean;
    ripple: boolean;
    align: string;
    stack: boolean;
    loading: boolean;
    disable: boolean;
} & {
    percentage?: number;
    label?: string | number;
    icon?: string;
    iconRight?: string;
    size?: string;
    padding?: string;
    color?: string;
    textColor?: string;
    tabindex?: string | number;
}>, {
    stretch: boolean;
    darkPercentage: boolean;
    type: string;
    round: boolean;
    outline: boolean;
    flat: boolean;
    unelevated: boolean;
    rounded: boolean;
    push: boolean;
    glossy: boolean;
    fab: boolean;
    fabMini: boolean;
    noCaps: boolean;
    noWrap: boolean;
    dense: boolean;
    ripple: boolean;
    align: string;
    stack: boolean;
    loading: boolean;
    disable: boolean;
}>;
export default _default;
