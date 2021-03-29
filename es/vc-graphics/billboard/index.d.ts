declare const _default: import("vue").DefineComponent<{
    imageSubRegion: {
        type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    distanceDisplayCondition: {
        type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    show: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    disableDepthTestDistance: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    pixelOffsetScaleByDistance: {
        type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeNearFarScalar;
        };
    };
    translucencyByDistance: {
        type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeNearFarScalar;
        };
    };
    scaleByDistance: {
        type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeNearFarScalar;
        };
    };
    height: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    width: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    sizeInMeters: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    alignedAxis: {
        type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeCartesian3;
        };
    };
    rotation: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
    color: {
        type: (StringConstructor | ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeColor;
        };
    };
    heightReference: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
    verticalOrigin: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
    horizontalOrigin: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
    eyeOffset: {
        type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeCartesian3;
        };
    };
    pixelOffset: {
        type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("@vue-cesium/utils/cesium-helpers").makeCartesian2;
        };
    };
    scale: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
    image: (StringConstructor | ObjectConstructor | {
        new (): HTMLCanvasElement;
        prototype: HTMLCanvasElement;
    } | FunctionConstructor)[];
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed")[], "beforeLoad" | "ready" | "destroyed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show: boolean;
    sizeInMeters: boolean;
    alignedAxis: {
        x: number;
        y: number;
        z: number;
    };
    rotation: number;
    color: string;
    heightReference: number;
    verticalOrigin: number;
    horizontalOrigin: number;
    eyeOffset: {
        x: number;
        y: number;
        z: number;
    };
    pixelOffset: {
        x: number;
        y: number;
    };
    scale: number;
} & {
    imageSubRegion?: unknown;
    distanceDisplayCondition?: unknown;
    disableDepthTestDistance?: unknown;
    pixelOffsetScaleByDistance?: unknown;
    translucencyByDistance?: unknown;
    scaleByDistance?: unknown;
    height?: unknown;
    width?: unknown;
    image?: unknown;
}>, {
    show: boolean;
    sizeInMeters: boolean;
    alignedAxis: {
        x: number;
        y: number;
        z: number;
    };
    rotation: number;
    color: string;
    heightReference: number;
    verticalOrigin: number;
    horizontalOrigin: number;
    eyeOffset: {
        x: number;
        y: number;
        z: number;
    };
    pixelOffset: {
        x: number;
        y: number;
    };
    scale: number;
}>;
export default _default;
