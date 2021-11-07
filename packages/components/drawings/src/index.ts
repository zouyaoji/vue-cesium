import { defineComponent, getCurrentInstance, ref, reactive, ExtractPropTypes } from 'vue'
import {
  defaultProps,
  defaultOptions,
  pointDrawingActionDefault,
  polylineDrawingActionDefault,
  polygonDrawingActionDefault,
  rectangleDrawingActionDefault,
  mainFabDefault,
  pinDrawingActionDefault,
  pinDrawingDefault
} from './defaultProps'
import { camelize } from '@vue-cesium/utils/util'
import { VcFabAction } from '@vue-cesium/components/ui'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import VcDrawingPin from './pin'
import VcDrawingPoint from './point'
import VcDrawingPolyline from './polyline'
import VcDrawingPolygon from './polygon'
import VcDrawingRegular from './regular'
import VcDrawingRectangle from './rectangle'
import {
  clearActionDefault,
  pointDrawingDefault,
  polygonDrawingDefault,
  polylineDrawingDefault,
  rectangleDrawingDefault,
  circleDrawingDefault,
  regularDrawingActionDefault,
  regularDrawingDefault,
  circleDrawingActionDefault
} from '@vue-cesium/composables/use-drawing/defaultOpts'
import { DrawingActionCmpOpts, DrawingActionCmpRef, DrawingActionOpts, VcDrawingActionInstance } from '@vue-cesium/utils/drawing-types'
import useDrawingFab from '@vue-cesium/composables/use-drawing/use-drawing-fab'
import { defaultsDeep } from 'lodash'
import { useLocaleInject } from '@vue-cesium/composables'

export default defineComponent({
  name: 'VcDrawings',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'activeEvt', 'editorEvt', 'drawEvt', 'mouseEvt', 'fabUpdated'],
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcDrawings'
    const { t } = useLocaleInject()

    const options: any = {}
    // computed
    const clearActionOpts = reactive<typeof clearActionDefault>(defaultsDeep({}, props.clearActionOpts, defaultOptions.clearActionOpts))
    const mainFabOpts = reactive<typeof mainFabDefault>(defaultsDeep({}, props.mainFabOpts, defaultOptions.mainFabOpts))
    const pointActionOpts = reactive<typeof pointDrawingActionDefault>(defaultsDeep({}, props.pointActionOpts, defaultOptions.pointActionOpts))
    const pointDrawingOpts = reactive<typeof pointDrawingDefault>(defaultsDeep({}, props.pointDrawingOpts, defaultOptions.pointDrawingOpts))
    const polylineActionOpts = reactive<typeof polylineDrawingActionDefault>(
      defaultsDeep({}, props.polylineActionOpts, defaultOptions.polylineActionOpts)
    )
    const polylineDrawingOpts = reactive<typeof polylineDrawingDefault>(
      defaultsDeep({}, props.polylineDrawingOpts, defaultOptions.polylineDrawingOpts)
    )
    const polygonActionOpts = reactive<typeof polygonDrawingActionDefault>(
      defaultsDeep({}, props.polygonActionOpts, defaultOptions.polygonActionOpts)
    )
    const polygonDrawingOpts = reactive<typeof polygonDrawingDefault>(defaultsDeep({}, props.polygonDrawingOpts, defaultOptions.polygonDrawingOpts))
    const rectangleActionOpts = reactive<typeof rectangleDrawingActionDefault>(
      defaultsDeep({}, props.rectangleActionOpts, defaultOptions.rectangleActionOpts)
    )
    const rectangleDrawingOpts = reactive<typeof rectangleDrawingDefault>(
      defaultsDeep({}, props.rectangleDrawingOpts, defaultOptions.rectangleDrawingOpts)
    )
    const circleActionOpts = reactive<typeof circleDrawingActionDefault>(defaultsDeep({}, props.circleActionOpts, defaultOptions.circleActionOpts))
    const circleDrawingOpts = reactive<typeof circleDrawingDefault>(defaultsDeep({}, props.circleDrawingOpts, defaultOptions.circleDrawingOpts))
    const regularActionOpts = reactive<typeof regularDrawingActionDefault>(
      defaultsDeep({}, props.regularActionOpts, defaultOptions.regularActionOpts)
    )
    const regularDrawingOpts = reactive<typeof regularDrawingDefault>(defaultsDeep({}, props.regularDrawingOpts, defaultOptions.regularDrawingOpts))
    const pinActionOpts = reactive<typeof pinDrawingActionDefault>(defaultsDeep({}, props.pinActionOpts, defaultOptions.pinActionOpts))
    const pinDrawingOpts = reactive<typeof pinDrawingDefault>(defaultsDeep({}, props.pinDrawingOpts, defaultOptions.pinDrawingOpts))

    options.pointActionOpts = pointActionOpts
    options.pointDrawingOpts = pointDrawingOpts
    options.polylineActionOpts = polylineActionOpts
    options.polylineDrawingOpts = polylineDrawingOpts
    options.polygonActionOpts = polygonActionOpts
    options.polygonDrawingOpts = polygonDrawingOpts
    options.rectangleActionOpts = rectangleActionOpts
    options.rectangleDrawingOpts = rectangleDrawingOpts
    options.circleActionOpts = circleActionOpts
    options.circleDrawingOpts = circleDrawingOpts
    options.regularActionOpts = regularActionOpts
    options.regularDrawingOpts = regularDrawingOpts
    options.pinActionOpts = pinActionOpts
    options.pinDrawingOpts = pinDrawingOpts
    options.clearActionOpts = clearActionOpts

    const drawingActionInstances: Array<VcDrawingActionInstance> = props.drawings.map(drawing => ({
      name: drawing,
      type: 'drawing',
      actionStyle: {
        background: options[`${camelize(drawing)}ActionOpts`].color,
        color: options[`${camelize(drawing)}ActionOpts`].textColor
      },
      actionClass: `vc-draw-${drawing} vc-draw-button${drawing === (instance.proxy as any).selectedDrawingActionInstance?.name ? ' active' : ''}`,
      actionRef: ref<typeof VcFabAction>(null!),
      actionOpts: options[`${camelize(drawing)}ActionOpts`] as DrawingActionOpts,
      cmp: getDrawingCmp(drawing),
      cmpRef: ref<DrawingActionCmpRef>(null!),
      cmpOpts: options[`${camelize(drawing)}DrawingOpts`] as DrawingActionCmpOpts,
      tip: options[`${camelize(drawing)}ActionOpts`].tooltip.tip || t(`vc.drawing.${camelize(drawing)}.tip`),
      isActive: false
    }))

    function getDrawingCmp(name) {
      switch (name) {
        case 'pin':
          return VcDrawingPin
        case 'point':
          return VcDrawingPoint
        case 'polyline':
          return VcDrawingPolyline
        case 'polygon':
          return VcDrawingPolygon
        case 'rectangle':
          if (rectangleDrawingOpts.regular) {
            return VcDrawingRegular
          } else {
            return VcDrawingRectangle
          }
        case 'circle':
        case 'regular':
          return VcDrawingRegular
        default:
          return void 0
      }
    }

    return useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, 'VcDrawings')?.renderContent
  }
})

export { VcDrawingPoint, VcDrawingPolygon, VcDrawingPolyline, VcDrawingRectangle, VcDrawingRegular }
