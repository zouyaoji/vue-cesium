declare const _default: import("vue").DefineComponent<{
    position: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    skipHijack: BooleanConstructor;
    reverse: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("start" | "stop")[], "start" | "stop", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    reverse: boolean;
    position: string;
    size: string;
    skipHijack: boolean;
} & {
    color?: string;
}>, {
    reverse: boolean;
    position: string;
    size: string;
    skipHijack: boolean;
}>;
export default _default;
