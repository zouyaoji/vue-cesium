import { VcBtnOptions } from '@vue-cesium/utils/types';
declare const _default: import("vue").DefineComponent<{
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: import("vue").PropType<VcBtnOptions>;
        default: () => {
            name: string;
            size: string;
            color: string;
            background: string;
            round: boolean;
            flat: boolean;
            label: any;
            stack: boolean;
            tooltip: {
                delay: number;
                anchor: string;
                offset: number[];
            };
        };
    };
    zoomOutOptions: {
        type: import("vue").PropType<VcBtnOptions>;
        default: () => {
            name: string;
            size: string;
            color: string;
            background: string;
            round: boolean;
            flat: boolean;
            label: any;
            stack: boolean;
            tooltip: {
                delay: number;
                anchor: string;
                offset: number[];
            };
        };
    };
    zoomResetOptions: {
        type: import("vue").PropType<VcBtnOptions>;
        default: () => {
            name: string;
            size: string;
            color: string;
            background: string;
            round: boolean;
            flat: boolean;
            label: any;
            stack: boolean;
            tooltip: {
                delay: number;
                anchor: string;
                offset: number[];
            };
        };
    };
    position: {
        type: import("vue").PropType<string>;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: any) => boolean;
    };
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: ObjectConstructor;
        default: () => {
            position: {
                lng: number;
                lat: number;
                height: number;
            };
        };
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "zoomEvt")[], "beforeLoad" | "ready" | "destroyed" | "zoomEvt", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    background: string;
    border: string;
    borderRadius: string;
    direction: string;
    zoomInOptions: {
        name: string;
        size: string;
        color: string;
        background: string;
        round: boolean;
        flat: boolean;
        label: any;
        stack: boolean;
        tooltip: {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
    zoomOutOptions: {
        name: string;
        size: string;
        color: string;
        background: string;
        round: boolean;
        flat: boolean;
        label: any;
        stack: boolean;
        tooltip: {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
    zoomResetOptions: {
        name: string;
        size: string;
        color: string;
        background: string;
        round: boolean;
        flat: boolean;
        label: any;
        stack: boolean;
        tooltip: {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
    position: string;
    enableResetButton: boolean;
    zoomAmount: number;
    duration: number;
    defaultResetView: Record<string, any>;
    overrideViewerCamera: boolean;
} & {
    offset?: unknown[];
    durationReset?: number;
}>, {
    background: string;
    border: string;
    borderRadius: string;
    direction: string;
    zoomInOptions: {
        name: string;
        size: string;
        color: string;
        background: string;
        round: boolean;
        flat: boolean;
        label: any;
        stack: boolean;
        tooltip: {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
    zoomOutOptions: {
        name: string;
        size: string;
        color: string;
        background: string;
        round: boolean;
        flat: boolean;
        label: any;
        stack: boolean;
        tooltip: {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
    zoomResetOptions: {
        name: string;
        size: string;
        color: string;
        background: string;
        round: boolean;
        flat: boolean;
        label: any;
        stack: boolean;
        tooltip: {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
    position: string;
    enableResetButton: boolean;
    zoomAmount: number;
    duration: number;
    defaultResetView: Record<string, any>;
    overrideViewerCamera: boolean;
}>;
export default _default;
