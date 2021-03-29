import { PropType } from 'vue';
declare const defaultProps: {
    compassOpts: {
        type: PropType<boolean>;
        default: () => import("@vue-cesium/utils/types").AnyObject;
    };
    zoomOpts: {
        type: PropType<boolean>;
        default: () => import("@vue-cesium/utils/types").AnyObject;
    };
    printOpts: {
        type: PropType<boolean>;
        default: () => import("@vue-cesium/utils/types").AnyObject;
    };
    locationOpts: {
        type: PropType<boolean>;
        default: () => import("@vue-cesium/utils/types").AnyObject;
    };
    otherOpts: {
        type: PropType<boolean>;
        default: () => {
            position: string;
            offset: number[];
            locationbarOpts: import("@vue-cesium/utils/types").AnyObject;
            distancelegendOpts: import("@vue-cesium/utils/types").AnyObject;
        };
    };
    position: {
        type: PropType<string>;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: any) => boolean;
    };
};
declare const defaultOptions: import("@vue-cesium/utils/types").AnyObject;
export { defaultProps, defaultOptions };
