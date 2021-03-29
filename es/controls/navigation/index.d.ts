declare const _default: import("vue").DefineComponent<{
    compassOpts: {
        type: import("vue").PropType<boolean>;
        default: () => import("@vue-cesium/utils/types").AnyObject;
    };
    zoomOpts: {
        type: import("vue").PropType<boolean>;
        default: () => import("@vue-cesium/utils/types").AnyObject;
    };
    printOpts: {
        type: import("vue").PropType<boolean>;
        default: () => import("@vue-cesium/utils/types").AnyObject;
    };
    locationOpts: {
        type: import("vue").PropType<boolean>;
        default: () => import("@vue-cesium/utils/types").AnyObject;
    };
    otherOpts: {
        type: import("vue").PropType<boolean>;
        default: () => {
            position: string;
            offset: number[];
            locationbarOpts: import("@vue-cesium/utils/types").AnyObject;
            distancelegendOpts: import("@vue-cesium/utils/types").AnyObject;
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
}, () => any[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "zoomEvt" | "compassEvt" | "locationEvt" | "printEvt" | "locationBarEvt" | "distanceLegendEvt")[], "beforeLoad" | "ready" | "destroyed" | "zoomEvt" | "compassEvt" | "locationEvt" | "printEvt" | "locationBarEvt" | "distanceLegendEvt", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    compassOpts: boolean;
    zoomOpts: boolean;
    printOpts: boolean;
    locationOpts: boolean;
    otherOpts: boolean;
    position: string;
} & {
    offset?: unknown[];
}>, {
    compassOpts: boolean;
    zoomOpts: boolean;
    printOpts: boolean;
    locationOpts: boolean;
    otherOpts: boolean;
    position: string;
}>;
export default _default;
