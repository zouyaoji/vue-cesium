declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: () => {
            delay: number;
            anchor: string;
            offset: number[];
        };
    };
    loadingType: {
        type: StringConstructor;
        default: string;
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
    geolocation: {
        type: ObjectConstructor;
        default: () => {
            enableHighAccuracy: boolean;
            timeout: number;
            maximumAge: number;
        };
    };
    amap: ObjectConstructor;
    id: {
        type: StringConstructor;
        default: string;
    };
    pointColor: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        default: string;
    };
    pixelSize: {
        type: NumberConstructor;
        default: number;
    };
    outlineWidth: {
        type: NumberConstructor;
        default: number;
    };
    outlineColor: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        default: string;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    factor: {
        type: NumberConstructor;
        default: number;
    };
    customAPI: FunctionConstructor;
    description: FunctionConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "locationEvt")[], "beforeLoad" | "ready" | "destroyed" | "locationEvt", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name: string;
    size: string;
    color: string;
    background: string;
    round: boolean;
    flat: boolean;
    stack: boolean;
    tooltip: {
        delay: number;
        anchor: string;
        offset: number[];
    };
    loadingType: string;
    position: string;
    geolocation: Record<string, any>;
    id: string;
    pointColor: string;
    pixelSize: number;
    outlineWidth: number;
    outlineColor: string;
    level: number;
    duration: number;
    factor: number;
} & {
    label?: string;
    offset?: unknown[];
    amap?: Record<string, any>;
    customAPI?: Function;
    description?: Function;
}>, {
    name: string;
    size: string;
    color: string;
    background: string;
    round: boolean;
    flat: boolean;
    stack: boolean;
    tooltip: {
        delay: number;
        anchor: string;
        offset: number[];
    };
    loadingType: string;
    position: string;
    geolocation: Record<string, any>;
    id: string;
    pointColor: string;
    pixelSize: number;
    outlineWidth: number;
    outlineColor: string;
    level: number;
    duration: number;
    factor: number;
}>;
export default _default;
