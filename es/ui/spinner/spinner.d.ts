declare const _default: import("vue").DefineComponent<{
    thickness: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    thickness: number;
    size: string | number;
} & {
    color?: string;
}>, {
    thickness: number;
    size: string | number;
}>;
export default _default;
