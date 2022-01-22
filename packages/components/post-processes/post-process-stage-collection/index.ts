/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-19 23:52:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\post-processes\post-process-stage-collection\index.ts
 */
import type { ExtractPropTypes, WatchStopHandle, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, watch } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables/index'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { commonEmits } from '@vue-cesium/utils/emits'
import type { VcPostProcessStageProps } from '../post-process-stage'

export const postProcessStageCollectionProps = {
  postProcesses: {
    type: Array as PropType<Array<VcPostProcessStageProps>>,
    default: () => []
  }
}
export default defineComponent({
  name: 'VcPostProcessStageCollection',
  props: postProcessStageCollectionProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PostProcessStageCollection'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const stages: Array<Cesium.PostProcessStage | Cesium.PostProcessStageComposite> = []
    let unwatchFns: Array<WatchStopHandle> = []
    // watch
    unwatchFns.push(
      watch(
        () => props.postProcesses,
        val => {
          if (instance.mounted) {
            ;(instance.proxy as VcComponentPublicInstance).reload?.()
          }
        },
        { deep: true }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      return stages
    }

    instance.mount = async () => {
      const { postProcessStages } = $services
      props.postProcesses.forEach(postProcess => {
        const opts = commonState.transformProps(postProcess)
        stages.push(postProcessStages.add(new Cesium.PostProcessStage(opts as any)))
      })
      return true
    }

    instance.unmount = async () => {
      const { postProcessStages } = $services
      stages.forEach(stage => {
        postProcessStages.remove(stage)
      })
      stages.length = 0
      return true
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

export type VcPostProcessStageCollectionProps = ExtractPropTypes<typeof postProcessStageCollectionProps>
