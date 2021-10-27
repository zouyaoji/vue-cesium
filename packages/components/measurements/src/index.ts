import { defineComponent, getCurrentInstance, ref, reactive, ExtractPropTypes } from 'vue'
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
import { t } from '@vue-cesium/locale'
import useDrawingFab from '@vue-cesium/composables/use-drawing/use-drawing-fab'
import { circleDrawingActionDefault, clearActionDefault, regularDrawingActionDefault } from '@vue-cesium/composables/use-drawing/defaultOpts'
import { defaultsDeep } from 'lodash'

export default defineComponent({
  name: 'VcMeasurements',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'activeEvt', 'drawEvt', 'editorEvt', 'mouseEvt', 'fabUpdated'],
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurements'

    const clearActionOpts = reactive<typeof clearActionDefault>(defaultsDeep({}, props.clearActionOpts, defaultOptions.clearActionOpts))
    const mainFabOpts = reactive<typeof mainFabDefault>(defaultsDeep({}, props.mainFabOpts, defaultOptions.mainFabOpts))
    const distanceActionOpts = reactive<typeof distanceMeasurementActionDefault>(
      defaultsDeep({}, props.distanceActionOpts, defaultOptions.distanceActionOpts)
    )
    const distanceMeasurementOpts = reactive<typeof distanceMeasurementDefault>(
      defaultsDeep({}, props.distanceMeasurementOpts, defaultOptions.distanceMeasurementOpts)
    )
    const componentDistanceActionOpts = reactive<typeof componentDistanceMeasurementActionDefault>(
      defaultsDeep({}, props.componentDistanceActionOpts, defaultOptions.componentDistanceActionOpts)
    )
    const componentDistanceMeasurementOpts = reactive<typeof componentDistanceMeasurementDefault>(
      defaultsDeep({}, props.componentDistanceMeasurementOpts, defaultOptions.componentDistanceMeasurementOpts)
    )
    const polylineActionOpts = reactive<typeof polylineMeasurementActionDefault>(
      defaultsDeep({}, props.polylineActionOpts, defaultOptions.polylineActionOpts)
    )
    const polylineMeasurementOpts = reactive<typeof polylineMeasurementDefault>(
      defaultsDeep({}, props.polylineMeasurementOpts, defaultOptions.polylineMeasurementOpts)
    )
    const horizontalActionOpts = reactive<typeof horizontalMeasurementActionDefault>(
      defaultsDeep({}, props.horizontalActionOpts, defaultOptions.horizontalActionOpts)
    )
    const horizontalMeasurementOpts = reactive<typeof horizontalMeasurementDefault>(
      defaultsDeep({}, props.horizontalMeasurementOpts, defaultOptions.horizontalMeasurementOpts)
    )
    const verticalActionOpts = reactive<typeof verticalMeasurementActionDefault>(
      defaultsDeep({}, props.verticalActionOpts, defaultOptions.verticalActionOpts)
    )
    const verticalMeasurementOpts = reactive<typeof verticalMeasurementDefault>(
      defaultsDeep({}, props.verticalMeasurementOpts, defaultOptions.verticalMeasurementOpts)
    )
    const heightActionOpts = reactive<typeof heightMeasurementActionDefault>(
      defaultsDeep({}, props.heightActionOpts, defaultOptions.heightActionOpts)
    )
    const heightMeasurementOpts = reactive<typeof heightMeasurementDefault>(
      defaultsDeep({}, props.heightMeasurementOpts, defaultOptions.heightMeasurementOpts)
    )
    const areaActionOpts = reactive<typeof areaMeasurementActionDefault>(defaultsDeep({}, props.areaActionOpts, defaultOptions.areaActionOpts))
    const areaMeasurementOpts = reactive<typeof areaMeasurementDefault>(
      defaultsDeep({}, props.areaMeasurementOpts, defaultOptions.areaMeasurementOpts)
    )
    const pointActionOpts = reactive<typeof pointMeasurementActionDefault>(defaultsDeep({}, props.pointActionOpts, defaultOptions.pointActionOpts))
    const pointMeasurementOpts = reactive<typeof pointMeasurementDefault>(
      defaultsDeep({}, props.pointMeasurementOpts, defaultOptions.pointMeasurementOpts)
    )
    const rectangleActionOpts = reactive<typeof rectangleMeasurementActionDefault>(
      defaultsDeep({}, props.rectangleActionOpts, defaultOptions.rectangleActionOpts)
    )
    const rectangleMeasurementOpts = reactive<typeof rectangleMeasurementDefault>(
      defaultsDeep({}, props.rectangleMeasurementOpts, defaultOptions.rectangleMeasurementOpts)
    )
    const regularActionOpts = reactive<typeof regularDrawingActionDefault>(
      defaultsDeep({}, props.regularActionOpts, defaultOptions.regularActionOpts)
    )
    const regularMeasurementOpts = reactive<typeof regularMeasurementDefault>(
      defaultsDeep({}, props.regularMeasurementOpts, defaultOptions.regularMeasurementOpts)
    )
    const circleActionOpts = reactive<typeof circleDrawingActionDefault>(defaultsDeep({}, props.circleActionOpts, defaultOptions.circleActionOpts))
    const circleMeasurementOpts = reactive<typeof circleMeasurementDefault>(
      defaultsDeep({}, props.circleMeasurementOpts, defaultOptions.circleMeasurementOpts)
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
