import { defineComponent, getCurrentInstance, ref, ExtractPropTypes } from 'vue'
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
    const clearActionOpts = Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts) as typeof clearActionDefault
    const mainFabOpts = Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts) as typeof mainFabDefault
    const pointActionOpts = Object.assign({}, defaultOptions.pointActionOpts, props.pointActionOpts) as typeof pointDrawingActionDefault
    const pointDrawingOpts = Object.assign({}, defaultOptions.pointDrawingOpts, props.pointDrawingOpts) as typeof pointDrawingDefault
    const polylineActionOpts = Object.assign({}, defaultOptions.polylineActionOpts, props.polylineActionOpts) as typeof polylineDrawingActionDefault
    const polylineDrawingOpts = Object.assign({}, defaultOptions.polylineDrawingOpts, props.polylineDrawingOpts) as typeof polylineDrawingDefault
    const polygonActionOpts = Object.assign({}, defaultOptions.polygonActionOpts, props.polygonActionOpts) as typeof polygonDrawingActionDefault
    const polygonDrawingOpts = Object.assign({}, defaultOptions.polygonDrawingOpts, props.polygonDrawingOpts) as typeof polygonDrawingDefault
    const rectangleActionOpts = Object.assign(
      {},
      defaultOptions.rectangleActionOpts,
      props.rectangleActionOpts
    ) as typeof rectangleDrawingActionDefault
    const rectangleDrawingOpts = Object.assign({}, defaultOptions.rectangleDrawingOpts, props.rectangleDrawingOpts) as typeof rectangleDrawingDefault
    const circleActionOpts = Object.assign({}, defaultOptions.circleActionOpts, props.circleActionOpts) as typeof circleDrawingActionDefault
    const circleDrawingOpts = Object.assign({}, defaultOptions.circleDrawingOpts, props.circleDrawingOpts) as typeof circleDrawingDefault
    const regularActionOpts = Object.assign({}, defaultOptions.regularActionOpts, props.regularActionOpts) as typeof regularDrawingActionDefault
    const regularDrawingOpts = Object.assign({}, props.regularDrawingOpts, defaultOptions.regularDrawingOpts) as typeof regularDrawingDefault
    const pinActionOpts = Object.assign({}, props.pinActionOpts, defaultOptions.pinActionOpts) as typeof pinDrawingActionDefault
    const pinDrawingOpts = Object.assign({}, props.pinDrawingOpts, defaultOptions.pinDrawingOpts) as typeof pinDrawingDefault

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
