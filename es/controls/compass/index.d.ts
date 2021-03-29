declare const _default: import("vue").DefineComponent<{
    outerOptions: {
        type: ObjectConstructor;
        default: () => {
            name: string;
            size: string;
            color: string;
            background: string;
            tooltip: {
                delay: number;
                anchor: string;
                offset: number[];
            };
        };
    };
    innerOptions: {
        type: ObjectConstructor;
        default: () => {
            name: string;
            size: string;
            color: string;
            background: string;
            tooltip: {
                delay: number;
                anchor: string;
                offset: number[];
            };
        };
    };
    markerOptions: {
        type: ObjectConstructor;
        default: () => {
            name: string;
            size: string;
            color: string;
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
    enableCompassOuterRing: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "compassEvt")[], "beforeLoad" | "ready" | "destroyed" | "compassEvt", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    outerOptions: Record<string, any>;
    innerOptions: Record<string, any>;
    markerOptions: Record<string, any>;
    position: string;
    enableCompassOuterRing: boolean;
    duration: number;
} & {
    offset?: unknown[];
}>, {
    outerOptions: Record<string, any>;
    innerOptions: Record<string, any>;
    markerOptions: Record<string, any>;
    position: string;
    enableCompassOuterRing: boolean;
    duration: number;
}>;
export default _default;
