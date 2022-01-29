/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-28 10:49:53
 * @LastEditTime: 2022-01-29 10:15:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\cloud-collection\index.ts
 */
import type { ExtractPropTypes, PropType, WatchStopHandle } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import type { VcComponentInternalInstance, VcPosition } from '@vue-cesium/utils/types'
import { usePrimitiveCollections } from '@vue-cesium/composables'
import { cloneDeep, differenceBy } from 'lodash-es'
import { show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { addCustomProperty, kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'
import type { VcCumulusCloudProps } from '../cloud'
import VcCumulusCloud from '../cloud'

export const cloudCollectionProps = {
  ...show,
  // ...enableMouseEvent,
  noiseDetail: {
    type: Number,
    default: 16.0
  },
  noiseOffset: {
    type: Object as PropType<VcPosition>
  },
  debugBillboards: {
    type: Boolean,
    default: false
  },
  debugEllipsoids: {
    type: Boolean,
    default: false
  },
  clouds: {
    type: Array as PropType<Array<VcCumulusCloudProps>>,
    default: () => []
  }
}
export default defineComponent({
  name: 'VcCollectionCloud',
  props: cloudCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CloudCollection'
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance)

    if (primitiveCollectionsState === void 0) {
      return
    }

    // watcher
    instance.alreadyListening.push('clouds')
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => cloneDeep(props.clouds),
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }

          const cloudCollection = instance.cesiumObject as Cesium.CloudCollection

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
              const modifyCloud = cloudCollection._clouds.find(v => v.id === modify.oldOptions.id)
              modifyCloud &&
                Object.keys(modify.newOptions).forEach(prop => {
                  if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                    modifyCloud[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop])
                  }
                })
            })
          } else {
            const addeds: any = differenceBy(newVal, oldVal, 'id')
            const deletes: any = differenceBy(oldVal, newVal, 'id')
            const deleteClouds: Array<Cesium.CumulusCloud> = []
            for (let i = 0; i < deletes.length; i++) {
              const deleteCloud = cloudCollection._clouds.find(v => v.id === deletes[i].id)
              deleteCloud && deleteClouds.push(deleteCloud)
            }

            deleteClouds.forEach(v => {
              cloudCollection.remove(v)
            })

            addClouds(cloudCollection, addeds)
          }
        },
        {
          deep: true
        }
      )
    )
    // methods
    const addClouds = (cloudCollection: Cesium.CloudCollection, clouds) => {
      for (let i = 0; i < clouds.length; i++) {
        const cloudOptions = clouds[i] as Cesium.CumulusCloud
        cloudOptions.id = Cesium.defined(cloudOptions.id) ? cloudOptions.id : Cesium.createGuid()
        const cloudOptionsTransform = primitiveCollectionsState.transformProps(cloudOptions, VcCumulusCloud.props)
        const cloud = cloudCollection.add(cloudOptionsTransform)
        addCustomProperty(cloud, cloudOptionsTransform)
      }
    }

    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props, VcCumulusCloud.props)
      const cloudCollection = new Cesium.CloudCollection(options as any)
      addClouds(cloudCollection, props.clouds)
      return cloudCollection
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

export type VcCollectionCloudProps = ExtractPropTypes<typeof cloudCollectionProps>
