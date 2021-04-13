import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  uri,
  scale,
  minimumPixelSize,
  maximumScale,
  incrementallyLoadTextures,
  runAnimations,
  clampAnimations,
  shadows,
  heightReference,
  silhouetteColor,
  silhouetteSize,
  color,
  colorBlendMode,
  colorBlendAmount,
  imageBasedLightingFactor,
  lightColor,
  distanceDisplayCondition,
  nodeTransformations,
  articulations,
  clippingPlanes
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
export default defineComponent({
  name: 'VcGraphicsModel',
  props: {
    ...show,
    ...uri,
    ...scale,
    ...minimumPixelSize,
    ...maximumScale,
    ...incrementallyLoadTextures,
    ...runAnimations,
    ...clampAnimations,
    ...shadows,
    ...heightReference,
    ...silhouetteColor,
    ...silhouetteSize,
    ...color,
    ...colorBlendMode,
    ...colorBlendAmount,
    ...imageBasedLightingFactor,
    ...lightColor,
    ...distanceDisplayCondition,
    ...nodeTransformations,
    ...articulations,
    ...clippingPlanes
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ModelGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
