declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    name: StringConstructor;
    availability: ObjectConstructor;
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    description: (ObjectConstructor | StringConstructor)[];
    orientation: ObjectConstructor;
    viewFrom: ObjectConstructor;
    parent: ObjectConstructor;
    billboard: ObjectConstructor;
    corridor: ObjectConstructor;
    cylinder: ObjectConstructor;
    ellipse: ObjectConstructor;
    ellipsoid: ObjectConstructor;
    box: ObjectConstructor;
    label: ObjectConstructor;
    model: ObjectConstructor;
    tileset: ObjectConstructor;
    path: ObjectConstructor;
    point: ObjectConstructor;
    polygon: ObjectConstructor;
    polyline: ObjectConstructor;
    properties: ObjectConstructor;
    polylineVolume: ObjectConstructor;
    rectangle: ObjectConstructor;
    wall: ObjectConstructor;
    enableEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    plane: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../vc-utils/cesium-helpers").makePlane;
        };
    };
    position: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        validator: (val: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../vc-utils/cesium-helpers").makeCartesian3;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "update:billboard" | "update:box" | "update:corridor" | "update:cylinder" | "update:ellipse" | "update:ellipsoid" | "update:label" | "update:model" | "update:path" | "update:plane" | "update:point" | "update:polygon" | "update:polyline" | "update:polylineVolume" | "update:rectangle" | "update:tileset" | "update:wall")[], "beforeLoad" | "ready" | "destroyed" | "update:billboard" | "update:box" | "update:corridor" | "update:cylinder" | "update:ellipse" | "update:ellipsoid" | "update:label" | "update:model" | "update:path" | "update:plane" | "update:point" | "update:polygon" | "update:polyline" | "update:polylineVolume" | "update:rectangle" | "update:tileset" | "update:wall", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show: boolean;
    enableEvent: boolean;
} & {
    id?: string;
    name?: string;
    availability?: Record<string, any>;
    description?: unknown;
    orientation?: Record<string, any>;
    viewFrom?: Record<string, any>;
    parent?: Record<string, any>;
    billboard?: Record<string, any>;
    corridor?: Record<string, any>;
    cylinder?: Record<string, any>;
    ellipse?: Record<string, any>;
    ellipsoid?: Record<string, any>;
    box?: Record<string, any>;
    label?: Record<string, any>;
    model?: Record<string, any>;
    tileset?: Record<string, any>;
    path?: Record<string, any>;
    point?: Record<string, any>;
    polygon?: Record<string, any>;
    polyline?: Record<string, any>;
    properties?: Record<string, any>;
    polylineVolume?: Record<string, any>;
    rectangle?: Record<string, any>;
    wall?: Record<string, any>;
    plane?: unknown;
    position?: unknown;
}>, {
    show: boolean;
    enableEvent: boolean;
}>;
export default _default;
