import { VcComponentInternalInstance } from '@vue-cesium/utils/types';
export default function (props: any, ctx: any, vcInstance: VcComponentInternalInstance): {
    createPromise: Promise<boolean | import("@vue-cesium/utils/types").ReadyObj>;
    load: () => Promise<boolean | import("@vue-cesium/utils/types").ReadyObj>;
    unload: () => Promise<boolean>;
    reload: () => Promise<boolean | import("@vue-cesium/utils/types").ReadyObj>;
    getCesiumObject: () => import("@vue-cesium/utils/types").AnyObject | HTMLElement;
};
