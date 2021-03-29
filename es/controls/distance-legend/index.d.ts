declare const _default: import("vue").DefineComponent<{
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
    width: {
        type: NumberConstructor;
        default: number;
    };
    barBackground: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "distanceLegendEvt")[], "beforeLoad" | "ready" | "destroyed" | "distanceLegendEvt", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color: string;
    position: string;
    background: string;
    width: number;
    barBackground: string;
} & {
    offset?: unknown[];
}>, {
    color: string;
    position: string;
    background: string;
    width: number;
    barBackground: string;
}>;
export default _default;
