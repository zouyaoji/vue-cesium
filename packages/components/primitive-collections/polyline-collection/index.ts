import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import cloneDeep from 'lodash/cloneDeep'
import differenceBy from 'lodash/differenceBy'
import { modelMatrix, debugShowBoundingVolume, show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
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
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    // watcher
    instance.alreadyListening.push('polylines')
    let unwatchFns = []
    unwatchFns.push(
      watch(
        () => cloneDeep(props.polylines),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const polylineCollection = instance.cesiumObject as Cesium.PolylineCollection

          if (newVal.length === oldVal.length) {
            // 视为修改操作
            // Treated as modified
            const modifies = []
            for (let i = 0; i < newVal.length; i++) {
              const options = newVal[i]
              const oldOptions = oldVal[i]

              if (JSON.stringify(options) !== JSON.stringify(oldOptions)) {
                modifies.push({
                  newOptions: options,
                  oldOptions: oldOptions
                })
              }
            }

            modifies.forEach(modify => {
              const modifyPolyline = polylineCollection._polylines.find(v => v.id === modify.oldOptions.id)
              modifyPolyline &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyPolyline[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const adds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
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
              polylineOptions.id = Cesium.defined(polylineOptions.id) ? polylineOptions.id : Cesium.createGuid()
              const polylineOptionsTransform = primitiveCollectionsState.transformProps(polylineOptions)
              const polyline = polylineCollection.add(polylineOptionsTransform)
              primitiveCollectionsState.addCustomProp(polyline, polylineOptionsTransform)
            }
          }
        },
        {
          deep: true
        }
      )
    )
    // methods
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props)
      const polylineCollection = new Cesium.PolylineCollection(options)

      for (let i = 0; i < props.polylines.length; i++) {
        const polylineOptions = props.polylines[i] as Cesium.Polyline
        polylineOptions.id = Cesium.defined(polylineOptions.id) ? polylineOptions.id : Cesium.createGuid()
        const polylineOptionsTransform = primitiveCollectionsState.transformProps(polylineOptions)
        const polyline = polylineCollection.add(polylineOptionsTransform)
        primitiveCollectionsState.addCustomProp(polyline, polylineOptionsTransform)
      }
      return polylineCollection
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(instance.proxy.$options.name),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
