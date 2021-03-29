import { ReadyObj, VcComponentInternalInstance, VcViewerProvider } from '@vue-cesium/utils/types';
export default function (props: any, { emit }: {
    emit: any;
}, vcInstance: VcComponentInternalInstance): {
    $services: VcViewerProvider;
    load: () => Promise<boolean | ReadyObj>;
    unload: () => Promise<boolean>;
    reload: () => Promise<boolean | ReadyObj>;
    createPromise: Promise<boolean | ReadyObj>;
};
