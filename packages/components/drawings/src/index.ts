import { defineComponent, getCurrentInstance, ref, ExtractPropTypes, reactive } from 'vue'
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
    const clearActionOpts = reactive<typeof clearActionDefault>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))
    const mainFabOpts = reactive<typeof mainFabDefault>(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts))
    const pointActionOpts = reactive<typeof pointDrawingActionDefault>(Object.assign({}, defaultOptions.pointActionOpts, props.pointActionOpts))
    const pointDrawingOpts = reactive<typeof pointDrawingDefault>(Object.assign({}, defaultOptions.pointDrawingOpts, props.pointDrawingOpts))
    const polylineActionOpts = reactive<typeof polylineDrawingActionDefault>(
      Object.assign({}, defaultOptions.polylineActionOpts, props.polylineActionOpts)
    )
    const polylineDrawingOpts = reactive<typeof polylineDrawingDefault>(
      Object.assign({}, defaultOptions.polylineDrawingOpts, props.polylineDrawingOpts)
    )
    const polygonActionOpts = reactive<typeof polygonDrawingActionDefault>(
      Object.assign({}, defaultOptions.polygonActionOpts, props.polygonActionOpts)
    )
    const polygonDrawingOpts = reactive<typeof polygonDrawingDefault>(Object.assign({}, defaultOptions.polygonDrawingOpts, props.polygonDrawingOpts))
    const rectangleActionOpts = reactive<typeof rectangleDrawingActionDefault>(
      Object.assign({}, defaultOptions.rectangleActionOpts, props.rectangleActionOpts)
    )
    const rectangleDrawingOpts = reactive<typeof rectangleDrawingDefault>(
      Object.assign({}, defaultOptions.rectangleDrawingOpts, props.rectangleDrawingOpts)
    )
    const circleActionOpts = reactive<typeof circleDrawingActionDefault>(Object.assign({}, defaultOptions.circleActionOpts, props.circleActionOpts))
    const circleDrawingOpts = reactive<typeof circleDrawingDefault>(Object.assign({}, defaultOptions.circleDrawingOpts, props.circleDrawingOpts))
    const regularActionOpts = reactive<typeof regularDrawingActionDefault>(
      Object.assign({}, defaultOptions.regularActionOpts, props.regularActionOpts)
    )
    const regularDrawingOpts = reactive<typeof regularDrawingDefault>(Object.assign({}, props.regularDrawingOpts, defaultOptions.regularDrawingOpts))
    const pinActionOpts = reactive<typeof pinDrawingActionDefault>(Object.assign({}, props.pinActionOpts, defaultOptions.pinActionOpts))
    const pinDrawingOpts = reactive<typeof pinDrawingDefault>(Object.assign({}, props.pinDrawingOpts, defaultOptions.pinDrawingOpts))

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
