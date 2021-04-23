import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import differenceWith from 'lodash/differenceWith'
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
import {
  modelMatrix,
  debugShowBoundingVolume,
  blendOption,
  show,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcCollectionPoint',
  props: {
    ...modelMatrix,
    ...debugShowBoundingVolume,
    ...blendOption,
    ...show,
    ...enableMouseEvent,
    points: {
      type: Array,
      default: () => []
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PointPrimitiveCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    // watcher
    instance.alreadyListening.push('points')
    let unwatchFns = []
    unwatchFns.push(watch(
      () => cloneDeep(props.points),
      (newVal, oldVal) => {
        if (!instance.mounted) {
          return
        }
        const pointCollection = instance.cesiumObject as Cesium.PointPrimitiveCollection
        const adds = differenceWith(newVal, oldVal, isEqual)
        const deletes = differenceWith(oldVal, newVal, isEqual)

        if (newVal.length === oldVal.length && adds.length === deletes.length) {
          // 视为修改操作
          // Treated as modified
          for (let i = 0; i < adds.length; i++) {
            const options = adds[i] as Cesium.Billboard
            const modifyPoint = pointCollection._points.find(v => v.id === deletes[i].id)
            modifyPoint && Object.keys(options).forEach(prop => {
              modifyPoint[prop] = primitiveCollectionsState.transformProp(prop, options[prop])
            })
          }
        } else {
          const deletePoints = []
          for (let i = 0; i < deletes.length; i++) {
            const deletePoint = pointCollection._points.find(v => v.id === deletes[i].id)
            deletePoint && deletePoints.push(deletePoint)
          }

          deletePoints.forEach(v => {
            pointCollection.remove(v)
          })

          for (let i = 0; i < adds.length; i++) {
            const pointOptions = newVal[i] as Cesium.Billboard
            const pointOptionsTransform = primitiveCollectionsState.transformProps(pointOptions)
            const pointAdded = pointCollection.add(pointOptionsTransform)
            pointAdded.id !== pointOptions.id && (pointOptions.id = pointAdded.id)
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
      const pointCollection = new Cesium.PointPrimitiveCollection(options)

      for (let i = 0; i < props.points.length; i++) {
        const pointOptions = props.points[i] as Cesium.PointPrimitive
        const pointOptionsTransform = primitiveCollectionsState.transformProps(pointOptions)
        const point = pointCollection.add(pointOptionsTransform)
        pointOptions.id !== point.id && (pointOptions.id = point.id)
      }
      return pointCollection
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
