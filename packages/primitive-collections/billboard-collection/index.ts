import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import differenceWith from 'lodash/differenceWith'
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
import {
  scene,
  blendOption,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcCollectionBillboard',
  props: {
    ...scene,
    ...blendOption,
    ...enableMouseEvent,
    billboards: {
      type: Array,
      default: () => []
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BillboardCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    // watcher
    let unwatchFns = []
    unwatchFns.push(watch(
      () => cloneDeep(props.billboards),
      (newVal, oldVal) => {
        if (!instance.mounted) {
          return
        }
        const billboardCollection = instance.cesiumObject as Cesium.BillboardCollection
        const adds = differenceWith(newVal, oldVal, isEqual)
        const deletes = differenceWith(oldVal, newVal, isEqual)

        if (newVal.length === oldVal.length && adds.length === deletes.length) {
          // 视为修改操作
          // Treated as modified
          for (let i = 0; i < adds.length; i++) {
            const options = adds[i] as Cesium.Billboard
            const modifyBillboard = billboardCollection._billboards.find(v => v.id === deletes[i].id)
            modifyBillboard && Object.keys(options).forEach(prop => {
              modifyBillboard[prop] = primitiveCollectionsState.transformProp(prop, options[prop])
            })
          }
        } else {
          const deleteBillboards = []
          for (let i = 0; i < deletes.length; i++) {
            const deleteBillboard = billboardCollection._billboards.find(v => v.id === deletes[i].id)
            deleteBillboard && deleteBillboards.push(deleteBillboard)
          }

          deleteBillboards.forEach(v => {
            billboardCollection.remove(v)
          })

          for (let i = 0; i < adds.length; i++) {
            const billboardOptions = newVal[i] as Cesium.Billboard
            const billboardOptionsTransform = primitiveCollectionsState.transformProps(billboardOptions)
            const billboardAdded = billboardCollection.add(billboardOptionsTransform)
            billboardAdded.id !== billboardOptions.id && (billboardOptions.id = billboardAdded.id)
          }
        }
      },
      {
        deep: true
      }
    ))
    instance.alreadyListening.push('billboards')
    // methods
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props)
      const billboardCollection = new Cesium.BillboardCollection(options)

      for (let i = 0; i < props.billboards.length; i++) {
        const billboardOptions = props.billboards[i] as Cesium.Billboard
        const billboardOptionsTransform = primitiveCollectionsState.transformProps(billboardOptions)
        const billboard = billboardCollection.add(billboardOptionsTransform)
        billboardOptions.id !== billboard.id && (billboardOptions.id = billboard.id)
      }
      return billboardCollection
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
