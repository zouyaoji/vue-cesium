import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useDatasources } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent, options } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcDatasourceCzml',
  props: {
    ...show,
    ...enableMouseEvent,
    entities: {
      type: Array,
      default: () => []
    },
    czml: {
      type: [String, Object],
      required: true
    },
    ...options
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'definitionChanged', 'clusterEvent', 'collectionChanged', 'changedEvent', 'errorEvent', 'loadingEvent'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CzmlDataSource'
    useDatasources(props, ctx, instance)

    instance.createCesiumObject = async () => {
      return Cesium.CzmlDataSource.load(props.czml, props.options)
    }

    return () => ctx.slots.default ? (
      h('i', {
        class: kebabCase(instance.proxy.$options.name),
        style: { display: 'none !important' }
      }, hSlot(ctx.slots.default))
    ) : createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
