<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  image,
  scale,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  color,
  rotation,
  alignedAxis,
  sizeInMeters,
  width,
  height,
  scaleByDistance,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  disableDepthTestDistance,
  show,
  distanceDisplayCondition,
  imageSubRegion
} from '@vue-cesium/utils/cesiumProps'
export default defineComponent({
  name: 'VcGraphicsBillboard',
  props: {
    ...image,
    ...scale,
    ...pixelOffset,
    ...eyeOffset,
    ...horizontalOrigin,
    ...verticalOrigin,
    ...heightReference,
    ...color,
    ...rotation,
    ...alignedAxis,
    ...sizeInMeters,
    ...width,
    ...height,
    ...scaleByDistance,
    ...translucencyByDistance,
    ...pixelOffsetScaleByDistance,
    ...disableDepthTestDistance,
    ...show,
    ...distanceDisplayCondition,
    ...imageSubRegion
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // init here
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BillboardGraphics'
    const graphicsState = useGraphics(props, ctx, instance)

    return {
      createPromise: graphicsState.createPromise,
      load: graphicsState.load,
      unload: graphicsState.unload,
      reload: graphicsState.reload,
      renderVNode: graphicsState.renderVNode,
      getCesiumObject: () => instance.cesiumObject
    }
  },
  render() {
    return this.renderVNode()
  },
  stubVNode: {
    comment(instance: VcComponentInternalInstance) {
      return instance.proxy.$options.name
    }
  }
})
</script>
