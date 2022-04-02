import type { ExtractPropTypes, PropType, VNode, WatchStopHandle } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import { cloneDeep, differenceBy } from 'lodash-unified'
import { modelMatrix, debugShowBoundingVolume, show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'
import { VcPolylineProps } from '../polyline'

const polylineCollectionProps = {
  ...modelMatrix,
  ...debugShowBoundingVolume,
  ...show,
  ...enableMouseEvent,
  polylines: {
    type: Array as PropType<Array<VcPolylineProps>>,
    default: () => []
  }
}
export default defineComponent({
  name: 'VcCollectionPolyline',
  props: polylineCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    if (primitiveCollectionsState === void 0) {
      return
    }
    // watcher
    instance.alreadyListening.push('polylines')
    let unwatchFns: Array<WatchStopHandle> = []
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
            const modifies: Array<any> = []
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
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deletePolylines: Array<Cesium.Polyline> = []
            for (let i = 0; i < deletes.length; i++) {
              const deletePolyline = polylineCollection._polylines.find(v => v.id === deletes[i].id)
              deletePolyline && deletePolylines.push(deletePolyline)
            }

            deletePolylines.forEach(v => {
              polylineCollection.remove(v)
            })

            addPolylines(polylineCollection, addeds)
          }
        },
        {
          deep: true
        }
      )
    )
    // methods
    const addPolylines = (polylineCollection: Cesium.PolylineCollection, polylines) => {
      for (let i = 0; i < polylines.length; i++) {
        const polylineOptions = polylines[i] as Cesium.Polyline
        polylineOptions.id = Cesium.defined(polylineOptions.id) ? polylineOptions.id : Cesium.createGuid()
        const polylineOptionsTransform = primitiveCollectionsState.transformProps(polylineOptions)
        const polyline = polylineCollection.add(polylineOptionsTransform)
        addCustomProperty(polyline, polylineOptionsTransform)
      }
    }
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props)
      const polylineCollection = new Cesium.PolylineCollection(options)

      addPolylines(polylineCollection, props.polylines)
      return polylineCollection
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    const name = instance.proxy?.$options.name || ''
    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(name),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(name))
  }
})

export type VcCollectionPolylineProps = {
  /**
   * Determines if the polylines in the collection will be shown.
   * Default Value: true
   */
  show?: boolean
  /**
   * The 4x4 transformation matrix that transforms each polyline from model to world coordinates.
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
   * Specify an array of polylines collections. The structure of the array object is the same as the attribute of the [`vc-polyline`](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-polyline#vcpolyline-props) component.
   */
  polylines?: Array<VcPolylineProps>
  /**
   * Triggers before the VcCollectionPolyline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcCollectionPolyline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcCollectionPolyline is destroyed.
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

export type VcCollectionPolylineRef = VcComponentPublicInstance<VcCollectionPolylineProps>

export interface VcCollectionPolylineSlots {
  /**
   * Slot for vc-polyline.
   */
  default: () => VNode[]
}
