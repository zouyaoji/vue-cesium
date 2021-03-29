declare const defaultProps: {
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
};
declare const defaultOptions: import("@vue-cesium/utils/types").AnyObject;
export { defaultProps, defaultOptions };
