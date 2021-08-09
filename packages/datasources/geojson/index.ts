import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useDatasources } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent, data, sourceUri, clampToGround, credit } from '@vue-cesium/utils/cesium-props'
import { makeColor } from '@vue-cesium/utils/cesium-helpers'
export default defineComponent({
  name: 'VcDatasourceGeojson',
  props: {
    ...show,
    ...enableMouseEvent,
    entities: {
      type: Array,
      default: () => []
    },
    ...data,
    ...sourceUri,
    describe: [Function, Object],
    markerSize: {
      type: Number,
      default: 48
    },
    markerSymbol: String,
    markerColor: {
      type: [Object, String, Array],
      default: () => ({ x: 0.2549019607843137, y: 0.4117647058823529, z: 0.8823529411764706 }),
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    },
    stroke: {
      type: [Object, String, Array],
      default: () => ({ x: 1, y: 1, z: 0 }),
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    },
    strokeWidth: {
      type: Number,
      default: 2
    },
    fill: {
      type: [Object, String, Array],
      default: () => ({ x: 1, y: 1, z: 0, w: 0.39215686274509803 }),
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    },
    ...clampToGround,
    ...credit,
    destroy: {
      type: Boolean,
      default: false
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'definitionChanged', 'clusterEvent', 'collectionChanged', 'changedEvent', 'errorEvent', 'loadingEvent'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GeoJsonDataSource'
    const datasourcesState = useDatasources(props, ctx, instance)

    instance.createCesiumObject = async () => {
      const options: any = datasourcesState.transformProps(props)
      return Cesium.GeoJsonDataSource.load(props.data, options)
    }

    return () => ctx.slots.default ? (
      h('i', {
        class: kebabCase(instance.proxy.$options.name),
        style: { display: 'none !important' }
      }, hSlot(ctx.slots.default))
    ) : createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
