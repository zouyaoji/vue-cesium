import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch, WatchStopHandle } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import cloneDeep from 'lodash/cloneDeep'
import differenceBy from 'lodash/differenceBy'
import { scene, blendOption, show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcCollectionBillboard',
  props: {
    ...scene,
    ...blendOption,
    ...show,
    ...enableMouseEvent,
    billboards: {
      type: Array,
      default: () => []
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
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
            const adds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deleteBillboards: Array<Cesium.Billboard> = []
            for (let i = 0; i < deletes.length; i++) {
              const deleteBillboard = billboardCollection._billboards.find(v => v.id === deletes[i].id)
              deleteBillboard && deleteBillboards.push(deleteBillboard)
            }

            deleteBillboards.forEach(v => {
              billboardCollection.remove(v)
            })

            for (let i = 0; i < adds.length; i++) {
              const billboardOptions = newVal[i] as Cesium.Billboard
              billboardOptions.id = Cesium.defined(billboardOptions.id) ? billboardOptions.id : Cesium.createGuid()
              const billboardOptionsTransform = primitiveCollectionsState?.transformProps(billboardOptions)
              const billboard = billboardCollection.add(billboardOptionsTransform)
              primitiveCollectionsState?.addCustomProp(billboard, billboardOptionsTransform)
            }
          }
        },
        {
          deep: true
        }
      )
    )
    instance.alreadyListening.push('billboards')
    // methods
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState?.transformProps(props)
      const billboardCollection = new Cesium.BillboardCollection(options)

      for (let i = 0; i < props.billboards.length; i++) {
        const billboardOptions = props.billboards[i] as Cesium.Billboard
        billboardOptions.id = Cesium.defined(billboardOptions.id) ? billboardOptions.id : Cesium.createGuid()
        const billboardOptionsTransform = primitiveCollectionsState?.transformProps(billboardOptions)
        const billboard = billboardCollection.add(billboardOptionsTransform)
        primitiveCollectionsState?.addCustomProp(billboard, billboardOptionsTransform)
      }
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
