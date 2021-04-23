import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import differenceWith from 'lodash/differenceWith'
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
import {
  modelMatrix,
  debugShowBoundingVolume,
  show,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcCollectionPolyline',
  props: {
    ...modelMatrix,
    ...debugShowBoundingVolume,
    ...show,
    ...enableMouseEvent,
    polylines: {
      type: Array,
      default: () => []
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    // watcher
    instance.alreadyListening.push('polylines')
    let unwatchFns = []
    unwatchFns.push(watch(
      () => cloneDeep(props.polylines),
      (newVal, oldVal) => {
        if (!instance.mounted) {
          return
        }
        const polylineCollection = instance.cesiumObject as Cesium.PolylineCollection
        const adds = differenceWith(newVal, oldVal, isEqual)
        const deletes = differenceWith(oldVal, newVal, isEqual)

        if (newVal.length === oldVal.length && adds.length === deletes.length) {
          // 视为修改操作
          // Treated as modified
          for (let i = 0; i < adds.length; i++) {
            const options = adds[i] as Cesium.Billboard
            const modifyPolyline = polylineCollection._polylines.find(v => v.id === deletes[i].id)
            modifyPolyline && Object.keys(options).forEach(prop => {
              modifyPolyline[prop] = primitiveCollectionsState.transformProp(prop, options[prop])
            })
          }
        } else {
          const deletePolylines = []
          for (let i = 0; i < deletes.length; i++) {
            const deletePolyline = polylineCollection._polylines.find(v => v.id === deletes[i].id)
            deletePolyline && deletePolylines.push(deletePolyline)
          }

          deletePolylines.forEach(v => {
            polylineCollection.remove(v)
          })

          for (let i = 0; i < adds.length; i++) {
            const polylineOptions = newVal[i] as Cesium.Billboard
            const polylineOptionsTransform = primitiveCollectionsState.transformProps(polylineOptions)
            const polylineAdded = polylineCollection.add(polylineOptionsTransform)
            polylineAdded.id !== polylineOptions.id && (polylineOptions.id = polylineAdded.id)
          }
        }
      },
      {
        deep: true
      }
    ))
    // methods
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props)
      const polylineCollection = new Cesium.PolylineCollection(options)

      for (let i = 0; i < props.polylines.length; i++) {
        const polylineOptions = props.polylines[i] as Cesium.Polyline
        const polylineOptionsTransform = primitiveCollectionsState.transformProps(polylineOptions)
        const polyline = polylineCollection.add(polylineOptionsTransform)
        polylineOptions.id !== polyline.id && (polylineOptions.id = polyline.id)
      }
      return polylineCollection
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () => ctx.slots.default ? (
      h('i', {
        class: kebabCase(instance.proxy.$options.name),
        style: { display: 'none !important' }
      }, hSlot(ctx.slots.default))
    ) : createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
