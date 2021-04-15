import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userDatasources } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, options, data } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcDatasourceGeojson',
  props: {
    ...show,
    enableEvent: {
      type: Boolean,
      default: true
    },
    entities: {
      type: Array,
      default: () => []
    },
    ...data,
    ...options
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'definitionChanged', 'clusterEvent', 'collectionChanged', 'changedEvent', 'errorEvent', 'loadingEvent'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GeoJsonDataSource'
    const datasourceState = userDatasources(props, ctx, instance)

    instance.createCesiumObject = async () => {
      const options = datasourceState.transformProps(props)
      return Cesium.GeoJsonDataSource.load(props.data, options.options)
    }

    return () => ctx.slots.default ? (
      h('i', {
        class: kebabCase(instance.proxy.$options.name),
        style: { display: 'none !important' }
      }, hSlot(ctx.slots.default))
    ) : createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
