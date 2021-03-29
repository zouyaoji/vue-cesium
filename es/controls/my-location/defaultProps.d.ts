declare const _default: {
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
};
export default _default;
