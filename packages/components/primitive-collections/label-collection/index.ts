import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch, WatchStopHandle } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import cloneDeep from 'lodash/cloneDeep'
import differenceBy from 'lodash/differenceBy'
import { modelMatrix, debugShowBoundingVolume, scene, blendOption, show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
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
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'LabelCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    if (primitiveCollectionsState === void 0) {
      return
    }

    // watcher
    instance.alreadyListening.push('labels')
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => cloneDeep(props.labels),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }
          const labelCollection = instance.cesiumObject as Cesium.LabelCollection

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
              const modifyLabel = labelCollection._labels.find(v => v.id === modify.oldOptions.id)
              modifyLabel &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyLabel[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const adds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deleteLabels: Array<Cesium.Label> = []
            for (let i = 0; i < deletes.length; i++) {
              const deleteLabel = labelCollection._labels.find(v => v.id === deletes[i].id)
              deleteLabel && deleteLabels.push(deleteLabel)
            }

            deleteLabels.forEach(v => {
              labelCollection.remove(v)
            })

            for (let i = 0; i < adds.length; i++) {
              const labelOptions = newVal[i] as Cesium.Billboard
              labelOptions.id = Cesium.defined(labelOptions.id) ? labelOptions.id : Cesium.createGuid()
              const labelOptionsTransform = primitiveCollectionsState.transformProps(labelOptions)
              const label = labelCollection.add(labelOptionsTransform)
              primitiveCollectionsState.addCustomProp(label, labelOptionsTransform)
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
      const labelCollection = new Cesium.LabelCollection(options)

      for (let i = 0; i < props.labels.length; i++) {
        const labelOptions = props.labels[i] as Cesium.Label
        labelOptions.id = Cesium.defined(labelOptions.id) ? labelOptions.id : Cesium.createGuid()
        const labelOptionsTransform = primitiveCollectionsState.transformProps(labelOptions)
        const label = labelCollection.add(labelOptionsTransform)
        primitiveCollectionsState.addCustomProp(label, labelOptionsTransform)
      }
      return labelCollection
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
