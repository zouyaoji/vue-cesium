import { Cesium as CesiumNative } from './types';
export interface InstallOptions {
    cesiumPath?: string;
    accessToken?: string;
    lang?: any;
    i18n?: (...args: any[]) => string;
    scriptPromise?: Promise<unknown>;
    pickScreenSpaceEventHandler?: CesiumNative.ScreenSpaceEventHandler;
    viewerScreenSpaceEventHandler?: CesiumNative.ScreenSpaceEventHandler;
    viewerUnloadingPromise?: Promise<boolean>;
}
declare const setConfig: (option: InstallOptions) => void;
declare const getConfig: (key: keyof InstallOptions) => unknown;
declare const vcKey: string | symbol;
export { getConfig, setConfig, vcKey };
