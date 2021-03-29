declare const _default: import("vue").DefineComponent<{
    gridFileUrl: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: any) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    showCameraInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showMouseInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showPerformanceInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tooltip: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: () => {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "locationBarEvt")[], "beforeLoad" | "ready" | "destroyed" | "locationBarEvt", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    gridFileUrl: string;
    position: string;
    color: string;
    background: string;
    showCameraInfo: boolean;
    showMouseInfo: boolean;
    showPerformanceInfo: boolean;
    tooltip: {
        delay: number;
        anchor: string;
        offset: number[];
    };
} & {
    offset?: unknown[];
}>, {
    gridFileUrl: string;
    position: string;
    color: string;
    background: string;
    showCameraInfo: boolean;
    showMouseInfo: boolean;
    showPerformanceInfo: boolean;
    tooltip: {
        delay: number;
        anchor: string;
        offset: number[];
    };
}>;
export default _default;
