import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  pixelSize,
  heightReference,
  color,
  outlineColor,
  outlineWidth,
  scaleByDistance,
  translucencyByDistance,
  distanceDisplayCondition,
  disableDepthTestDistance
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcGraphicsPoint',
  props: {
    ...show,
    ...pixelSize,
    ...heightReference,
    ...color,
    ...outlineColor,
    ...outlineWidth,
    ...scaleByDistance,
    ...translucencyByDistance,
    ...distanceDisplayCondition,
    ...disableDepthTestDistance
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PointGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
