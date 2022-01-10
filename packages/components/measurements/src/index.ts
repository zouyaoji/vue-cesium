import { defineComponent, getCurrentInstance, ref, ExtractPropTypes, reactive } from 'vue'
import {
  defaultProps,
  defaultOptions,
  distanceMeasurementActionDefault,
  componentDistanceMeasurementActionDefault,
  distanceMeasurementDefault,
  componentDistanceMeasurementDefault,
  polylineMeasurementActionDefault,
  polylineMeasurementDefault,
  horizontalMeasurementActionDefault,
  horizontalMeasurementDefault,
  verticalMeasurementActionDefault,
  verticalMeasurementDefault,
  heightMeasurementActionDefault,
  heightMeasurementDefault,
  areaMeasurementActionDefault,
  areaMeasurementDefault,
  pointMeasurementActionDefault,
  pointMeasurementDefault,
  rectangleMeasurementActionDefault,
  rectangleMeasurementDefault,
  regularMeasurementDefault,
  circleMeasurementDefault,
  mainFabDefault
} from './defaultProps'
import { camelize } from '@vue-cesium/utils/util'
import { VcFabAction } from '@vue-cesium/components/ui'
import VcMeasurementDistance from './distance'
import VcMeasurementPolyline from './polyline'
import VcMeasurementHorizontal from './horizontal'
import VcMeasurementVertical from './vertical'
import VcMeasurementHeight from './height'
import VcMeasurementPoint from './point'
import VcMeasurementArea from './area'
import VcMeasurementRectangle from './rectangle'
import VcMeasurementRegular from './regular'
import { MeasurementActionCmpOpts, MeasurementActionCmpRef, MeasurementActionOpts, VcDrawingActionInstance } from '@vue-cesium/utils/drawing-types'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useLocaleInject } from '@vue-cesium/composables'
import useDrawingFab from '@vue-cesium/composables/use-drawing/use-drawing-fab'
import { circleDrawingActionDefault, clearActionDefault, regularDrawingActionDefault } from '@vue-cesium/composables/use-drawing/defaultOpts'

export default defineComponent({
  name: 'VcMeasurements',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'activeEvt', 'drawEvt', 'editorEvt', 'mouseEvt', 'fabUpdated'],
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurements'
    const { t } = useLocaleInject()

    const clearActionOpts = reactive<typeof clearActionDefault>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))
    const mainFabOpts = reactive<typeof mainFabDefault>(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts))
    const distanceActionOpts = reactive<typeof distanceMeasurementActionDefault>(
      Object.assign({}, defaultOptions.distanceActionOpts, props.distanceActionOpts)
    )

    const distanceMeasurementOpts = reactive<typeof distanceMeasurementDefault>(
      Object.assign({}, defaultOptions.distanceMeasurementOpts, props.distanceMeasurementOpts)
    )

    const componentDistanceActionOpts = reactive<typeof componentDistanceMeasurementActionDefault>(
      Object.assign({}, defaultOptions.componentDistanceActionOpts, props.componentDistanceActionOpts)
    )

    const componentDistanceMeasurementOpts = reactive<typeof componentDistanceMeasurementDefault>(
      Object.assign({}, defaultOptions.componentDistanceMeasurementOpts, props.componentDistanceMeasurementOpts)
    )

    const polylineActionOpts = reactive<typeof polylineMeasurementActionDefault>(
      Object.assign({}, defaultOptions.polylineActionOpts, props.polylineActionOpts)
    )

    const polylineMeasurementOpts = reactive<typeof polylineMeasurementDefault>(
      Object.assign({}, defaultOptions.polylineMeasurementOpts, props.polylineMeasurementOpts)
    )

    const horizontalActionOpts = reactive<typeof horizontalMeasurementActionDefault>(
      Object.assign({}, defaultOptions.horizontalActionOpts, props.horizontalActionOpts)
    )

    const horizontalMeasurementOpts = reactive<typeof horizontalMeasurementDefault>(
      Object.assign({}, defaultOptions.horizontalMeasurementOpts, props.horizontalMeasurementOpts)
    )

    const verticalActionOpts = reactive<typeof verticalMeasurementActionDefault>(
      Object.assign({}, defaultOptions.verticalActionOpts, props.verticalActionOpts)
    )

    const verticalMeasurementOpts = reactive<typeof verticalMeasurementDefault>(
      Object.assign({}, defaultOptions.verticalMeasurementOpts, props.verticalMeasurementOpts)
    )

    const heightActionOpts = reactive<typeof heightMeasurementActionDefault>(
      Object.assign({}, defaultOptions.heightActionOpts, props.heightActionOpts)
    )

    const heightMeasurementOpts = reactive<typeof heightMeasurementDefault>(
      Object.assign({}, defaultOptions.heightMeasurementOpts, props.heightMeasurementOpts)
    )

    const areaActionOpts = reactive<typeof areaMeasurementActionDefault>(Object.assign({}, defaultOptions.areaActionOpts, props.areaActionOpts))
    const areaMeasurementOpts = reactive<typeof areaMeasurementDefault>(
      Object.assign({}, defaultOptions.areaMeasurementOpts, props.areaMeasurementOpts)
    )

    const pointActionOpts = reactive<typeof pointMeasurementActionDefault>(Object.assign({}, defaultOptions.pointActionOpts, props.pointActionOpts))
    const pointMeasurementOpts = reactive<typeof pointMeasurementDefault>(
      Object.assign({}, defaultOptions.pointMeasurementOpts, props.pointMeasurementOpts)
    )

    const rectangleActionOpts = reactive<typeof rectangleMeasurementActionDefault>(
      Object.assign({}, defaultOptions.rectangleActionOpts, props.rectangleActionOpts)
    )

    const rectangleMeasurementOpts = reactive<typeof rectangleMeasurementDefault>(
      Object.assign({}, defaultOptions.rectangleMeasurementOpts, props.rectangleMeasurementOpts)
    )

    const regularActionOpts = reactive<typeof regularDrawingActionDefault>(
      Object.assign({}, defaultOptions.regularActionOpts, props.regularActionOpts)
    )

    const regularMeasurementOpts = reactive<typeof regularMeasurementDefault>(
      Object.assign({}, defaultOptions.regularMeasurementOpts, props.regularMeasurementOpts)
    )

    const circleActionOpts = reactive<typeof circleDrawingActionDefault>(Object.assign({}, defaultOptions.circleActionOpts, props.circleActionOpts))
    const circleMeasurementOpts = reactive<typeof circleMeasurementDefault>(
      Object.assign({}, defaultOptions.circleMeasurementOpts, props.circleMeasurementOpts)
    )

    const options: any = {}
    options.distanceActionOpts = distanceActionOpts
    options.distanceMeasurementOpts = distanceMeasurementOpts
    options.componentDistanceActionOpts = componentDistanceActionOpts
    options.componentDistanceMeasurementOpts = componentDistanceMeasurementOpts
    options.polylineActionOpts = polylineActionOpts
    options.polylineMeasurementOpts = polylineMeasurementOpts
    options.horizontalActionOpts = horizontalActionOpts
    options.horizontalMeasurementOpts = horizontalMeasurementOpts
    options.verticalActionOpts = verticalActionOpts
    options.verticalMeasurementOpts = verticalMeasurementOpts
    options.heightActionOpts = heightActionOpts
    options.heightMeasurementOpts = heightMeasurementOpts
    options.areaActionOpts = areaActionOpts
    options.areaMeasurementOpts = areaMeasurementOpts
    options.pointActionOpts = pointActionOpts
    options.pointMeasurementOpts = pointMeasurementOpts
    options.rectangleActionOpts = rectangleActionOpts
    options.rectangleMeasurementOpts = rectangleMeasurementOpts
    options.regularActionOpts = regularActionOpts
    options.regularMeasurementOpts = regularMeasurementOpts
    options.circleActionOpts = circleActionOpts
    options.circleMeasurementOpts = circleMeasurementOpts
    options.clearActionOpts = clearActionOpts

    const drawingActionInstances: Array<VcDrawingActionInstance> = props.measurements.map(measurement => ({
      name: measurement,
      type: 'measurement',
      actionStyle: {
        background: options[`${camelize(measurement)}ActionOpts`].color,
        color: options[`${camelize(measurement)}ActionOpts`].textColor
      },
      actionClass: `vc-measure-${measurement} vc-measure-button${
        measurement === (instance.proxy as any).selectedDrawingActionInstance?.name ? ' active' : ''
      }`,
      actionRef: ref<typeof VcFabAction>(null!),
      actionOpts: options[`${camelize(measurement)}ActionOpts`] as MeasurementActionOpts,
      cmp: getMeasurementCmp(measurement),
      cmpRef: ref<MeasurementActionCmpRef>(null!),
      cmpOpts: options[`${camelize(measurement)}MeasurementOpts`] as MeasurementActionCmpOpts,
      tip: options[`${camelize(measurement)}ActionOpts`].tooltip.tip || t(`vc.measurement.${measurement}.tip`),
      isActive: false
    }))

    function getMeasurementCmp(name) {
      switch (name) {
        case 'distance':
        case 'component-distance':
          return VcMeasurementDistance
        case 'polyline':
          return VcMeasurementPolyline
        case 'horizontal':
          return VcMeasurementHorizontal
        case 'vertical':
          return VcMeasurementVertical
        case 'height':
          return VcMeasurementHeight
        case 'point':
          return VcMeasurementPoint
        case 'area':
          return VcMeasurementArea
        case 'rectangle':
          return VcMeasurementRectangle
        case 'regular':
        case 'circle':
          return VcMeasurementRegular
        default:
          return undefined
      }
    }

    return useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, 'measurement')?.renderContent
  }
})

export {
  VcMeasurementDistance,
  VcMeasurementPolyline,
  VcMeasurementHorizontal,
  VcMeasurementVertical,
  VcMeasurementHeight,
  VcMeasurementPoint,
  VcMeasurementArea,
  VcMeasurementRectangle
}
