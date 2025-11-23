import type { VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcPolygonHierarchy, VcReadyObject } from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-31 10:30:21
 * @LastEditTime: 2022-08-22 20:31:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\analyses\flood\index.ts
 */
import type { PropType, WatchStopHandle } from 'vue'
import { VcGeometryPolygon } from '@vue-cesium/components/geometries'
import { VcGeometryInstance } from '@vue-cesium/components/geometry-instance'
import { VcPrimitiveClassification } from '@vue-cesium/components/primitives'
import { useCommon } from '@vue-cesium/composables'
import { makeColor } from '@vue-cesium/utils/cesium-helpers'
import { polygonHierarchy } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { createCommentVNode, defineComponent, getCurrentInstance, h, onUnmounted, ref, watch } from 'vue'

const emits = {
  ...commonEmits,
  stop: (evt: Cesium.ClassificationPrimitive) => true
}
export default defineComponent({
  name: 'VcAnalysisFlood',
  props: {
    minHeight: {
      type: Number,
      default: -1
    },
    maxHeight: {
      type: Number,
      default: 8888
    },
    speed: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: false
    },
    color: {
      type: [Object, Array, String] as PropType<VcColor>,
      default: 'rgba(40,150,200,0.6)'
    },
    ...polygonHierarchy
  },
  emits,
  setup(props: VcAnalysisFloodProps, ctx) {
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcAnalysisFlood'
    instance.cesiumEvents = []

    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }

    const { emit } = ctx

    const canRender = ref(false)

    const vcParent = getVcParentInstance(instance)
    ;(vcParent.proxy as VcComponentPublicInstance).creatingPromise?.then(() => {
      canRender.value = true
    })

    const flooding = ref(false)
    const attributes = ref<any>(null)
    const extrudedHeight = ref(-1)
    const childRef = ref<Cesium.ClassificationPrimitive>(null)
    let stoped = false

    // watcch
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => props.minHeight,
        (val) => {
          extrudedHeight.value = val
        }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      const { ColorGeometryInstanceAttribute } = Cesium

      attributes.value = {
        color: ColorGeometryInstanceAttribute.fromColor(makeColor(props.color) as Cesium.Color)
      }

      return childRef.value
    }

    instance.mount = async () => {
      const { viewer } = commonState.$services
      viewer.clock.onTick.addEventListener(onClockTick)
      return true
    }

    instance.unmount = async () => {
      const { viewer } = commonState.$services
      viewer.clock.onTick.removeEventListener(onClockTick)
      extrudedHeight.value = -1
      flooding.value = false
      return true
    }

    const onClockTick = () => {
      if (flooding.value) {
        if (extrudedHeight.value <= props.maxHeight) {
          extrudedHeight.value += props.speed
          stoped = false
        }
        else {
          const listener = getInstanceListener(instance, 'stop')
          listener && emit('stop', childRef.value)
          stoped = true
          if (props.loop) {
            extrudedHeight.value = props.minHeight
          }
          else {
            flooding.value = false
          }
        }
      }
    }

    const start = (height?: number) => {
      extrudedHeight.value = Cesium.defined(height) ? height : props.minHeight
      flooding.value = true
    }

    const pause = () => {
      flooding.value = !flooding.value
      if (stoped) {
        extrudedHeight.value = props.minHeight
      }
    }

    const stop = () => {
      extrudedHeight.value = -1
      flooding.value = false
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    // expose public methods
    Object.assign(instance.proxy, {
      start,
      pause,
      stop,
      getCurrentHeight: () => extrudedHeight.value
    })

    return () => {
      if (canRender.value) {
        const { createGuid } = Cesium

        return h(
          VcPrimitiveClassification,
          {
            asynchronous: false,
            ref: childRef
          },
          () =>
            h(
              VcGeometryInstance,
              {
                id: createGuid(),
                attributes: attributes.value
              },
              () =>
                h(VcGeometryPolygon, {
                  extrudedHeight: extrudedHeight.value,
                  polygonHierarchy: props.polygonHierarchy
                })
            )
        )
      }
      else {
        return createCommentVNode('v-if')
      }
    }
  }
})

export interface VcAnalysisFloodProps {
  /**
   * Specify the minimum elevation.
   * Default value: -1
   */
  minHeight?: number
  /**
   * Specify the maximum elevation.
   * Default value: 8888
   */
  maxHeight?: number
  /**
   * Specify the height to increase each frame.
   * Default value: 10
   */
  speed?: number
  /**
   * Specify whether to restart after reaching the maximum height.
   * Default value: false
   */
  loop?: boolean
  /**
   * Specify the VcColor of water.
   * Default value: rgba(40,150,200,0.6)
   */
  color?: VcColor
  /**
   * Specify ths VcPolygonHierarchy of polygon.
   */
  polygonHierarchy: VcPolygonHierarchy
  /**
   * Triggers before the VcAnalysisFlood is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcAnalysisFlood is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcAnalysisFlood is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the maxHeight is reached.
   */
  onStop?: (evt: Cesium.ClassificationPrimitive) => void
}

export interface VcAnalysisFloodRef extends VcComponentPublicInstance<VcAnalysisFloodProps> {
  /**
   * Start flood analysis
   */
  start: (height?: number) => void
  /**
   * Pause flood analysis
   */
  pause: () => void
  /**
   * Stop flood analysis
   */
  stop: (removeLatest?: boolean) => void
  /**
   * Get the extrudedHeight value.
   */
  getCurrentHeight: () => number
}
