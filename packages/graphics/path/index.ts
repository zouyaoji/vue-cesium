import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import { show, width, material, distanceDisplayCondition } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGraphicsPath',
  props: {
    ...show,
    leadTime: [Number, Object, Function],
    trailTime: [Number, Object, Function],
    ...width,
    resolution: {
      type: [Number, Object, Function],
      default: 60
    },
    ...material,
    ...distanceDisplayCondition
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PathGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
