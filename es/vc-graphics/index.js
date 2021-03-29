import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import { useGraphics } from '../composables';
import { image, scale, pixelOffset, eyeOffset, horizontalOrigin, verticalOrigin, heightReference, color, rotation, alignedAxis, sizeInMeters, width, height, scaleByDistance, translucencyByDistance, pixelOffsetScaleByDistance, disableDepthTestDistance, show, distanceDisplayCondition, imageSubRegion } from '../utils/cesium-props';

var VcGraphicsBillboard = defineComponent({
    name: 'VcGraphicsBillboard',
    props: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, image), scale), pixelOffset), eyeOffset), horizontalOrigin), verticalOrigin), heightReference), color), rotation), alignedAxis), sizeInMeters), width), height), scaleByDistance), translucencyByDistance), pixelOffsetScaleByDistance), disableDepthTestDistance), show), distanceDisplayCondition), imageSubRegion),
    emits: ['beforeLoad', 'ready', 'destroyed'],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'BillboardGraphics';
        const graphicsState = useGraphics(props, ctx, instance);
        Object.assign(instance.proxy, {
            createPromise: graphicsState.createPromise,
            load: graphicsState.load,
            unload: graphicsState.unload,
            reload: graphicsState.reload,
            getCesiumObject: () => instance.cesiumObject,
        });
        return () => createCommentVNode(instance.proxy.$options.name);
    }
});

const components = [VcGraphicsBillboard];
const install = (app) => {
    components.forEach(cmp => {
        app.component(cmp.name, cmp);
    });
};
var index = {
    install
};

export default index;
export { VcGraphicsBillboard };
