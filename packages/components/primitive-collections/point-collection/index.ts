import type { PropType, VNode, WatchStopHandle } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import { cloneDeep, differenceBy } from 'lodash-unified'
import { modelMatrix, debugShowBoundingVolume, blendOption, show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'
import { VcPointProps } from '../point'

export const pointCollectionProps = {
  ...modelMatrix,
  ...debugShowBoundingVolume,
  ...blendOption,
  ...show,
  ...enableMouseEvent,
  points: {
    type: Array as PropType<Array<VcPointProps>>,
    default: () => []
  }
}
export default defineComponent({
  name: 'VcCollectionPoint',
  props: pointCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PointPrimitiveCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)
    if (primitiveCollectionsState === void 0) {
      return
    }
    // watcher
    instance.alreadyListening.push('points')
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => cloneDeep(props.points),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const pointCollection = instance.cesiumObject as Cesium.PointPrimitiveCollection
          if (newVal.length === oldVal.length) {
            // 视为修改操作
            // Treated as modified
            const modifies: Array<{
              newOptions: any
              oldOptions: any
            }> = []
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
              const modifyPoint = pointCollection._pointPrimitives.find(v => v && v.id === modify.oldOptions.id)
              modifyPoint &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyPoint[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deletePoints: Array<Cesium.PointPrimitive> = []
            for (let i = 0; i < deletes.length; i++) {
              const deletePoint = pointCollection._pointPrimitives.find(v => v.id === deletes[i].id)
              deletePoint && deletePoints.push(deletePoint)
            }

            deletePoints.forEach(v => {
              pointCollection.remove(v)
            })

            addPoints(pointCollection, addeds)
          }
        },
        {
          deep: true
        }
      )
    )
    // methods
    const addPoints = (pointCollection: Cesium.PointPrimitiveCollection, points) => {
      for (let i = 0; i < points.length; i++) {
        const pointOptions = points[i] as Cesium.PointPrimitive
        pointOptions.id = Cesium.defined(pointOptions.id) ? pointOptions.id : Cesium.createGuid()
        const pointOptionsTransform = primitiveCollectionsState.transformProps(pointOptions)
        const point = pointCollection.add(pointOptionsTransform)

        addCustomProperty(point, pointOptionsTransform)
      }
    }

    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props)
      const pointCollection = new Cesium.PointPrimitiveCollection(options)
      addPoints(pointCollection, props.points)
      return pointCollection
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
              class: kebabCase(instance.proxy?.$options.name || ''),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcCollectionPointProps = {
  /**
   * The point blending option. The default is used for rendering both opaque and translucent points. However, if either all of the points are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x.
   */
  blendOption?: number | Cesium.BlendOption
  /**
   * Determines if the primitives in the collection will be shown.
   * Default Value: true
   */
  show?: boolean
  /**
   * The 4x4 transformation matrix that transforms each point from model to world coordinates.
   */
  modelMatrix?: Cesium.Matrix4
  /**
   * For debugging only. Determines if this primitive's commands' bounding spheres are shown.
   * Default Value: false
   */
  debugShowBoundingVolume?: boolean
  /**
   * Specifies whether to respond to mouse pick events.
   * Default Value: true
   */
  enableMouseEvent?: boolean
  /**
   * Specify an array of points collections. The structure of the array object is the same as the attribute of the [vc-point](http://localhost:8080/#/en-US/component/primitives/vc-collection-point#vcpoint-props) component.
   */
  points?: Array<VcPointProps>
  /**
   * Triggers before the VcCollectionPoint is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcCollectionPoint is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcCollectionPoint is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the mouse is pressed on this collection.
   */
  onMousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this collection.
   */
  onMouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this collection.
   */
  onClick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this collection.
   */
  onClickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this collection.
   */
  onDblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this collection.
   */
  onMousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this collection.
   */
  onMouseover?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves out of this collection.
   */
  onMouseout?: (evt: VcPickEvent) => void
}

export type VcCollectionPointRef = VcComponentPublicInstance<VcCollectionPointProps>

export interface VcCollectionPointSlots {
  /**
   * Slot for vc-point.
   */
  default: () => VNode[]
}
