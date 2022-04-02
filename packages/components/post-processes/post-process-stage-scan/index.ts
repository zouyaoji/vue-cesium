/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-24 22:38:56
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\post-processes\post-process-stage-scan\index.ts
 */
import type { ExtractPropTypes, PropType, WatchStopHandle } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import type { VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from '@vue-cesium/utils/types'
import { computed, defineComponent, getCurrentInstance, h, onUnmounted, ref, watch } from 'vue'
import VcPostProcessStage from '../post-process-stage'
import useRadar from './use-radar-scan'
import useCircle from './use-circle-scan'
import { commonEmits } from '@vue-cesium/utils/emits'
const defaultOptions = {
  position: [0, 0],
  radius: 1500,
  interval: 3500,
  color: [0, 0, 0, 255]
}

export type VcPostProcessStageScanOpts = {
  position?: VcPosition
  radius: number
  interval: number
  color: VcColor
}

export const postProcessStageScanProps = {
  type: {
    type: String,
    default: 'radar' // radar, circle
  },
  options: Object as PropType<VcPostProcessStageScanOpts>
}

export default defineComponent({
  name: 'VcPostProcessStageScan',
  props: postProcessStageScanProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcPostProcessStageScan'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const fragmentShader = ref('')
    const uniforms = ref<any>(null)
    const { $services } = commonState
    const useRadarState = useRadar($services)
    const useCircleState = useCircle($services)
    let unwatchFns: Array<WatchStopHandle> = []
    // computed
    const options = computed(() => {
      return Object.assign({}, defaultOptions, props.options)
    })
    // watch
    unwatchFns.push(
      watch(
        () => options,
        val => {
          if (instance.mounted) {
            ;(instance.proxy as VcComponentPublicInstance).reload()
          }
        },
        { deep: true }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      const opts = commonState.transformProps(options.value)
      let result
      if (props.type === 'radar') {
        result = useRadarState.webgl(opts)
      } else if (props.type === 'circle') {
        result = useCircleState.webgl(opts)
      }
      fragmentShader.value = result.shaderSource
      uniforms.value = result.uniforms
      return true
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () => {
      return h(VcPostProcessStage, {
        fragmentShader: fragmentShader.value,
        uniforms: uniforms.value
      })
    }
  }
})

export type VcPostProcessStageScanProps = {
  /**
   * Specify the scan type, optional values are'radar','circle'.
   */
  type?: 'radar' | 'circle'
  /**
   * Specify optional parameters.
   */
  options?: VcPostProcessStageScanOpts
  /**
   * Triggers before the component is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the component is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcPostProcessStageScanRef = VcComponentPublicInstance<VcPostProcessStageScanProps>
