import { PropType } from 'vue';
export declare const skeletonTypes: string[];
export declare const skeletonAnimations: string[];
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (v: string) => boolean;
        default: string;
    };
    animation: {
        type: StringConstructor;
        validator: (v: string) => boolean;
        default: string;
    };
    square: BooleanConstructor;
    bordered: BooleanConstructor;
    size: PropType<string>;
    width: StringConstructor;
    height: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tag: string;
    type: string;
    animation: string;
    square: boolean;
    bordered: boolean;
    dark: boolean;
} & {
    size?: string;
    width?: string;
    height?: string;
}>, {
    tag: string;
    type: string;
    animation: string;
    square: boolean;
    bordered: boolean;
    dark: boolean;
}>;
export default _default;
