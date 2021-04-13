import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  positions,
  width,
  granularity,
  material,
  depthFailMaterial,
  arcType,
  clampToGround,
  shadows,
  distanceDisplayCondition,
  classificationType,
  zIndex
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcGraphicsPolyline',
  props: {
    ...show,
    ...positions,
    ...width,
    ...granularity,
    ...material,
    ...depthFailMaterial,
    ...arcType,
    ...clampToGround,
    ...shadows,
    ...distanceDisplayCondition,
    ...classificationType,
    ...zIndex
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode()
  }
})
