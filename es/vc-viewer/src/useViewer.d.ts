import { ExtractPropTypes } from 'vue';
import defaultProps from './defaultProps';
import { VcComponentInternalInstance, ReadyObj } from '../../vc-utils/types';
export default function (props: ExtractPropTypes<typeof defaultProps>, ctx: any, vcInstance: VcComponentInternalInstance): {
    isReady: import("vue").Ref<boolean>;
    load: () => Promise<boolean | ReadyObj>;
    unload: () => Promise<boolean>;
    reload: () => Promise<boolean | ReadyObj>;
    getServices: () => any;
    viewerRef: import("vue").Ref<HTMLElement>;
    createPromise: Promise<ReadyObj>;
};
