import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import type { EChartsOption, EChartsType } from 'echarts'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 15:52:55
 * @LastEditTime: 2023-04-15 14:05:13
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\components\overlays\echarts\index.ts
 */
import type { CSSProperties, PropType, WatchStopHandle } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import { commonEmits } from '@vue-cesium/utils/emits'
import { hSlot } from '@vue-cesium/utils/private/render'
import * as echarts from 'echarts'
import { createCommentVNode, defineComponent, getCurrentInstance, h, nextTick, onUnmounted, reactive, ref, watch } from 'vue'

export const echartsOverlayProps = {
  options: {
    type: Object as PropType<EChartsOption>,
    required: true
  },
  autoHidden: {
    type: Boolean,
    default: true
  },
  customClass: String,
  coordinateSystem: {
    type: String,
    default: 'cesium'
  }
}
const emits = {
  ...commonEmits,
  mouseenter: (evt: MouseEvent) => true,
  mouseleave: (evt: MouseEvent) => true,
  click: (evt: MouseEvent) => true
}
export default defineComponent({
  name: 'VcOverlayEcharts',
  props: echartsOverlayProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'mouseenter', 'mouseleave', 'click'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcOverlayEcharts'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const canRender = ref(false)
    const rootRef = ref<HTMLElement>()
    const rootStyle = reactive<CSSProperties>({
      left: '0px',
      top: '0px',
      pointerEvents: 'none',
      position: 'absolute'
    })
    let chart: EChartsType
    const visible = ref(true)
    // watcch
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => props.options,
        (val) => {
          commonState.reload()
        }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      return rootRef.value
    }
    instance.mount = async () => {
      const { viewer } = $services
      canRender.value = true

      nextTick(() => {
        echarts.registerCoordinateSystem(props.coordinateSystem, getE3CoordinateSystem(viewer))
        if (rootRef.value) {
          chart = echarts.init(rootRef.value)

          setCharts()
          viewer.scene.postRender.addEventListener(onPreRender)
        }
      })

      return true
    }

    instance.unmount = async () => {
      const { viewer } = $services
      viewer.scene.postRender.removeEventListener(onPreRender)
      canRender.value = false
      return true
    }

    const onPreRender = () => {
      if (visible.value) {
        const { viewer } = $services
        chart.resize({
          width: viewer.canvas.width,
          height: viewer.canvas.height
        })
      }
    }

    const setCharts = () => {
      if (visible.value && props.options) {
        chart.setOption(props.options)
      }
    }
    const getE3CoordinateSystem = (viewer: Cesium.Viewer) => {
      const CoordSystem = function CoordSystem(this: any, viewer) {
        this.viewer = viewer
        this._mapOffset = [0, 0]
      }

      CoordSystem.create = function (ecModel) {
        ecModel.eachSeries((seriesModel) => {
          if (seriesModel.get('coordinateSystem') === props.coordinateSystem) {
            seriesModel.coordinateSystem = new CoordSystem(viewer)
          }
        })
        return []
      }

      CoordSystem.getDimensionsInfo = function () {
        return ['x', 'y']
      }

      CoordSystem.dimensions = ['x', 'y']
      CoordSystem.prototype.dimensions = ['x', 'y']
      CoordSystem.prototype.setMapOffset = function setMapOffset(mapOffset) {
        this._mapOffset = mapOffset
      }
      CoordSystem.prototype.dataToPoint = function (data) {
        const result = []
        const cartesian3 = Cesium.Cartesian3.fromDegrees(data[0], data[1])
        if (!cartesian3) {
          return result
        }

        if (props.autoHidden) {
          const up = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(cartesian3, new Cesium.Cartesian3())
          const cd = this.viewer.camera.direction
          if (Cesium.Cartesian3.dot(up, cd) >= 0) {
            return result
          }
        }

        const coords = this.viewer.scene.cartesianToCanvasCoordinates(cartesian3)
        if (!coords) {
          return result
        }
        return [coords.x - this._mapOffset[0], coords.y - this._mapOffset[1]]
      }
      CoordSystem.prototype.pointToData = function (pt) {
        const mapOffset = this._mapOffset
        const ellipsoid = viewer.scene.globe.ellipsoid
        const car3 = new Cesium.Cartesian3(pt[1] + mapOffset[1], pt[2] + mapOffset[2], 0)
        const cart = ellipsoid.cartesianToCartographic(car3)
        return cart ? [cart.longitude, cart.latitude] : [0, 0]
      }
      CoordSystem.prototype.getviewerRect = function () {
        const canvas = this.viewer.canvas
        return new echarts.graphic.BoundingRect(0, 0, canvas.width, canvas.height)
      }
      CoordSystem.prototype.getRoamTransform = function () {
        return echarts.matrix.create()
      }

      return CoordSystem
    }

    const renderContent = () => {
      if (canRender.value) {
        return h(
          'div',
          {
            ref: rootRef,
            class: `vc-echart-container${props.customClass ? ` ${props.customClass}` : ''}`,
            style: rootStyle,
            onMouseenter,
            onMouseleave,
            onClick
          },
          hSlot(ctx.slots.default)
        )
      }
      else {
        return createCommentVNode('v-if')
      }
    }

    const onClick = (evt) => {
      ctx.emit('click', evt)
    }

    const onMouseenter = (evt) => {
      ctx.emit('mouseenter', evt)
    }

    const onMouseleave = (evt) => {
      ctx.emit('mouseleave', evt)
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () => renderContent()
  }
})

export type VcOverlayEchartsEmits = typeof emits
export interface VcOverlayEchartsProps {
  /**
   * Specify the configuration items of the Echarts.
   */
  options: EChartsOption
  /**
   * Specify whether Echart elements are automatically hidden when they are on the back of the viewer.
   * Default value: true
   */
  autoHidden?: boolean
  /**
   * Specify div class of echart.
   */
  customClass?: string
  /**
   * Specify the name of the custom coordinate system when Echart is initialized.
   * Default value: cesium
   */
  coordinateSystem?: string
  /**
   * Triggers before the VcOverlayEcharts is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcOverlayEcharts is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcOverlayEcharts is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcOverlayEchartsRef = VcComponentPublicInstance<VcOverlayEchartsProps>
