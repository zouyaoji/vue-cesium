import VcViewer from '../vc-viewer';
export { default as VcViewer } from '../vc-viewer';
import { VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcLocationBar, VcDistanceLegend, VcNavigation } from '../controls';
export { VcCompass, VcDistanceLegend, VcLocationBar, VcMyLocation, VcNavigation, VcPrint, VcZoomControl } from '../controls';
import VcEntity from '../vc-entity';
export { default as VcEntity } from '../vc-entity';
import { VcGraphicsBillboard } from '../vc-graphics';
export { VcGraphicsBillboard } from '../vc-graphics';
import { use, i18n } from '../locale';
import { setConfig } from '../utils/config';
export * from '../composables';

const version = '3.0.0-beta';

const version$1 = version;
const locale = use;
const defaultInstallOpt = {
    cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo',
};
const components = [VcViewer,
    VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcLocationBar, VcDistanceLegend, VcNavigation,
    VcEntity, VcGraphicsBillboard];
const install = (app, opt) => {
    const option = Object.assign(defaultInstallOpt, opt);
    locale(option.lang);
    if (option.i18n) {
        i18n(option.i18n);
    }
    app.config.globalProperties.$VueCesium = option;
    setConfig(option);
    components.forEach(component => {
        app.component(component.name, component);
    });
};
var index = {
    version: version$1,
    install,
};

export default index;
export { install, locale, version$1 as version };
