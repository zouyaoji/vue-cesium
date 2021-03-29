declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    name: StringConstructor;
    color: StringConstructor;
    hoverColor: StringConstructor;
    left: BooleanConstructor;
    right: BooleanConstructor;
    size: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tag: string;
    left: boolean;
    right: boolean;
} & {
    name?: string;
    color?: string;
    hoverColor?: string;
    size?: string;
}>, {
    tag: string;
    left: boolean;
    right: boolean;
}>;
export default _default;
