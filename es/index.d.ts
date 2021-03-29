import type { App } from 'vue';
import VcViewer from './vc-viewer';
import { VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcLocationBar, VcDistanceLegend, VcNavigation } from './vc-controls';
import VcEntity from './vc-entity';
import { VcGraphicsBillboard } from './vc-graphics';
import type { InstallOptions } from './utils/config';
declare const version = "3.0.0-beta";
declare const locale: (l: import("./vc-locale").Language) => void;
declare const install: (app: App, opt: InstallOptions) => void;
export { VcViewer, VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcLocationBar, VcDistanceLegend, VcNavigation, VcEntity, VcGraphicsBillboard, version, install, locale };
export * from './vc-composables';
declare const _default: {
    version: string;
    install: (app: App<any>, opt: InstallOptions) => void;
};
export default _default;
