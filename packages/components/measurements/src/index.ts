import { defineComponent, getCurrentInstance, ref, ExtractPropTypes } from 'vue'
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

    const clearActionOpts = Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts) as typeof clearActionDefault
    const mainFabOpts = Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts) as typeof mainFabDefault
    const distanceActionOpts = Object.assign(
      {},
      defaultOptions.distanceActionOpts,
      props.distanceActionOpts
    ) as typeof distanceMeasurementActionDefault

    const distanceMeasurementOpts = Object.assign(
      {},
      defaultOptions.distanceMeasurementOpts,
      props.distanceMeasurementOpts
    ) as typeof distanceMeasurementDefault

    const componentDistanceActionOpts = Object.assign(
      {},
      defaultOptions.componentDistanceActionOpts,
      props.componentDistanceActionOpts
    ) as typeof componentDistanceMeasurementActionDefault

    const componentDistanceMeasurementOpts = Object.assign(
      {},
      defaultOptions.componentDistanceMeasurementOpts,
      props.componentDistanceMeasurementOpts
    ) as typeof componentDistanceMeasurementDefault

    const polylineActionOpts = Object.assign(
      {},
      defaultOptions.polylineActionOpts,
      props.polylineActionOpts
    ) as typeof polylineMeasurementActionDefault

    const polylineMeasurementOpts = Object.assign(
      {},
      defaultOptions.polylineMeasurementOpts,
      props.polylineMeasurementOpts
    ) as typeof polylineMeasurementDefault

    const horizontalActionOpts = Object.assign(
      {},
      defaultOptions.horizontalActionOpts,
      props.horizontalActionOpts
    ) as typeof horizontalMeasurementActionDefault

    const horizontalMeasurementOpts = Object.assign(
      {},
      defaultOptions.horizontalMeasurementOpts,
      props.horizontalMeasurementOpts
    ) as typeof horizontalMeasurementDefault

    const verticalActionOpts = Object.assign(
      {},
      defaultOptions.verticalActionOpts,
      props.verticalActionOpts
    ) as typeof verticalMeasurementActionDefault

    const verticalMeasurementOpts = Object.assign(
      {},
      defaultOptions.verticalMeasurementOpts,
      props.verticalMeasurementOpts
    ) as typeof verticalMeasurementDefault

    const heightActionOpts = Object.assign({}, defaultOptions.heightActionOpts, props.heightActionOpts) as typeof heightMeasurementActionDefault

    const heightMeasurementOpts = Object.assign(
      {},
      defaultOptions.heightMeasurementOpts,
      props.heightMeasurementOpts
    ) as typeof heightMeasurementDefault

    const areaActionOpts = Object.assign({}, defaultOptions.areaActionOpts, props.areaActionOpts) as typeof areaMeasurementActionDefault
    const areaMeasurementOpts = Object.assign({}, defaultOptions.areaMeasurementOpts, props.areaMeasurementOpts) as typeof areaMeasurementDefault

    const pointActionOpts = Object.assign({}, defaultOptions.pointActionOpts, props.pointActionOpts) as typeof pointMeasurementActionDefault
    const pointMeasurementOpts = Object.assign({}, defaultOptions.pointMeasurementOpts, props.pointMeasurementOpts) as typeof pointMeasurementDefault

    const rectangleActionOpts = Object.assign(
      {},
      defaultOptions.rectangleActionOpts,
      props.rectangleActionOpts
    ) as typeof rectangleMeasurementActionDefault

    const rectangleMeasurementOpts = Object.assign(
      {},
      defaultOptions.rectangleMeasurementOpts,
      props.rectangleMeasurementOpts
    ) as typeof rectangleMeasurementDefault

    const regularActionOpts = Object.assign({}, defaultOptions.regularActionOpts, props.regularActionOpts) as typeof regularDrawingActionDefault

    const regularMeasurementOpts = Object.assign(
      {},
      defaultOptions.regularMeasurementOpts,
      props.regularMeasurementOpts
    ) as typeof regularMeasurementDefault

    const circleActionOpts = Object.assign({}, defaultOptions.circleActionOpts, props.circleActionOpts) as typeof circleDrawingActionDefault
    const circleMeasurementOpts = Object.assign(
      {},
      defaultOptions.circleMeasurementOpts,
      props.circleMeasurementOpts
    ) as typeof circleMeasurementDefault

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

    return useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, 'VcMeasurements')?.renderContent
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
