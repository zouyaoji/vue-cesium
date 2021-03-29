import { AnyObject, VcComponentInternalInstance } from '@vue-cesium/utils/types';
export default function (props: any, vcInstance: VcComponentInternalInstance): {
    bindEvents: (cesiumObject: AnyObject, cesiumEvents: Array<string>, register?: boolean) => void;
    registerEvents: (register: any) => void;
};
declare const viewerScreenSpaceEvents: Array<string>;
declare const pickEvents: Array<string>;
export { pickEvents, viewerScreenSpaceEvents };
