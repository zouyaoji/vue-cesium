/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-30 22:11:18
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\post-processes\post-process-stage-collection\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, PropType, ref, watch, WatchStopHandle } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables/index'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcPostProcessStageCollection',
  props: {
    postProcesses: {
      type: Array,
      default: () => []
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PostProcessStage'
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
