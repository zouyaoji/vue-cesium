import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import differenceWith from 'lodash/differenceWith'
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
import {
  modelMatrix,
  debugShowBoundingVolume,
  scene,
  blendOption,
  show,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcCollectionLabel',
  props: {
    ...modelMatrix,
    ...debugShowBoundingVolume,
    ...scene,
    ...blendOption,
    ...show,
    ...enableMouseEvent,
    labels: {
      type: Array,
      default: () => []
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'LabelCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    // watcher
    instance.alreadyListening.push('labels')
    let unwatchFns = []
    unwatchFns.push(watch(
      () => cloneDeep(props.labels),
      (newVal, oldVal) => {
        if (!instance.mounted) {
          return
        }
        const labelCollection = instance.cesiumObject as Cesium.LabelCollection
        const adds = differenceWith(newVal, oldVal, isEqual)
        const deletes = differenceWith(oldVal, newVal, isEqual)

        if (newVal.length === oldVal.length && adds.length === deletes.length) {
          // 视为修改操作
          // Treated as modified
          for (let i = 0; i < adds.length; i++) {
            const options = adds[i] as Cesium.Billboard
            const modifyLabel = labelCollection._labels.find(v => v.id === deletes[i].id)
            modifyLabel && Object.keys(options).forEach(prop => {
              modifyLabel[prop] = primitiveCollectionsState.transformProp(prop, options[prop])
            })
          }
        } else {
          const deleteLabels = []
          for (let i = 0; i < deletes.length; i++) {
            const deleteLabel = labelCollection._labels.find(v => v.id === deletes[i].id)
            deleteLabel && deleteLabels.push(deleteLabel)
          }

          deleteLabels.forEach(v => {
            labelCollection.remove(v)
          })

          for (let i = 0; i < adds.length; i++) {
            const labelOptions = newVal[i] as Cesium.Billboard
            const labelOptionsTransform = primitiveCollectionsState.transformProps(labelOptions)
            const labelAdded = labelCollection.add(labelOptionsTransform)
            labelAdded.id !== labelOptions.id && (labelOptions.id = labelAdded.id)
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
      const labelCollection = new Cesium.LabelCollection(options)

      for (let i = 0; i < props.labels.length; i++) {
        const labelOptions = props.labels[i] as Cesium.Label
        const labelOptionsTransform = primitiveCollectionsState.transformProps(labelOptions)
        const label = labelCollection.add(labelOptionsTransform)
        labelOptions.id !== label.id && (labelOptions.id = label.id)
      }
      return labelCollection
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
