import type { PropType, VNode, WatchStopHandle } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import { cloneDeep, differenceBy } from 'lodash-unified'
import { scene, blendOption, show, enableMouseEvent, debugShowBoundingVolume, modelMatrix } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'
import { VcBillboardProps } from '../billboard'

export const billboardCollectionProps = {
  ...scene,
  ...blendOption,
  ...show,
  ...enableMouseEvent,
  ...modelMatrix,
  ...debugShowBoundingVolume,
  billboards: {
    type: Array as PropType<Array<VcBillboardProps>>,
    default: () => []
  }
}
export default defineComponent({
  name: 'VcCollectionBillboard',
  props: billboardCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BillboardCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    // watcher
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => cloneDeep(props.billboards),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const billboardCollection = instance.cesiumObject as Cesium.BillboardCollection
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
              const modifyBillboard = billboardCollection._billboards.find(v => v.id === modify.oldOptions.id)
              modifyBillboard &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyBillboard[prop] = primitiveCollectionsState?.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deleteBillboards: Array<Cesium.Billboard> = []
            for (let i = 0; i < deletes.length; i++) {
              const deleteBillboard = billboardCollection._billboards.find(v => v.id === deletes[i].id)
              deleteBillboard && deleteBillboards.push(deleteBillboard)
            }

            deleteBillboards.forEach(v => {
              billboardCollection.remove(v)
            })
            addBillboards(billboardCollection, addeds)
          }
        },
        {
          deep: true
        }
      )
    )
    instance.alreadyListening.push('billboards')
    // methods
    const addBillboards = (billboardCollection: Cesium.BillboardCollection, billboards) => {
      for (let i = 0; i < billboards.length; i++) {
        const billboardOptions = billboards[i] as Cesium.Billboard
        billboardOptions.id = Cesium.defined(billboardOptions.id) ? billboardOptions.id : Cesium.createGuid()
        const billboardOptionsTransform = primitiveCollectionsState?.transformProps(billboardOptions)
        const billboard = billboardCollection.add(billboardOptionsTransform)
        addCustomProperty(billboard, billboardOptionsTransform)
      }
    }
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState?.transformProps(props)
      const billboardCollection = new Cesium.BillboardCollection(options)
      addBillboards(billboardCollection, props.billboards)
      return billboardCollection
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

export type VcCollectionBillboardProps = {
  /**
   * Must be passed in for billboards that use the height reference property or will be depth tested against the globe.
   */
  scene?: Cesium.Scene
  /**
   * The billboard blending option. The default is used for rendering both opaque and translucent billboards. However, if either all of the billboards are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x.
   */
  blendOption?: number | Cesium.BlendOption
  /**
   * Determines if the billboards in the collection will be shown.
   * Default Value: true
   */
  show?: boolean
  /**
   * The 4x4 transformation matrix that transforms each billboard from model to world coordinates.
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
   * Specify an array of billboard collections. The structure of the array object is the same as the attribute of the [vc-billboard](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-billboard#vcbillboard-props) component.
   */
  billboards?: Array<VcBillboardProps>
  /**
   * Triggers before the VcCollectionBillboard is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcCollectionBillboard is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcCollectionBillboard is destroyed.
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
   *  Triggers when the mouse moves out of this collection.
   */
  onMouseout?: (evt: VcPickEvent) => void
}

export type VcCollectionBillboardRef = VcComponentPublicInstance<VcCollectionBillboardProps>

export interface VcCollectionBillboardSlots {
  /**
   * Slot for vc-billboard.
   */
  default: () => VNode[]
}
