import { defineComponent, getCurrentInstance, ref, reactive, computed, VNode } from 'vue'
import { measurementsProps, defaultOptions, VcMeasurementsProps } from './defaultProps'
import { camelize, deepMerge } from '@vue-cesium/utils/util'
import { VcFabActionRef, VcFabProps, VcFabRef } from '@vue-cesium/components/ui'
import VcMeasurementDistance from './distance'
import VcMeasurementPolyline from './polyline'
import VcMeasurementHorizontal from './horizontal'
import VcMeasurementVertical from './vertical'
import VcMeasurementHeight from './height'
import VcMeasurementPoint from './point'
import VcMeasurementArea from './area'
import VcMeasurementRectangle from './rectangle'
import VcMeasurementRegular from './regular'
import type {
  MeasurementActionCmpRef,
  VcComponentDistanceMeasurementOpts,
  VcDrawingActionInstance,
  VcHorizontalMeasurementOpts,
  VcMeasurementOpts,
  VcPolylineMeasurementOpts,
  VcRegularMeasurementOpts
} from '@vue-cesium/utils/drawing-types'
import type { VcActionTooltipProps, VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useLocale } from '@vue-cesium/composables'
import useDrawingFab from '@vue-cesium/composables/use-drawing/use-drawing-fab'
import { drawingEmit } from '@vue-cesium/utils/emits'
import { isEqual } from 'lodash-es'

const emits = {
  ...drawingEmit,
  fabUpdated: (value: boolean) => true
}
export default defineComponent({
  name: 'VcMeasurements',
  props: measurementsProps,
  emits: emits,
  setup(props: VcMeasurementsProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurements'
    const { t } = useLocale()

    const clearActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))
    const mainFabOpts = reactive<VcActionTooltipProps & VcFabProps>(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts))

    const fabActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.fabActionOpts, props.fabActionOpts))

    const distanceActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.distanceActionOpts, mergeActionOpts('distanceActionOpts'))
    )
    const distanceMeasurementOpts = reactive<VcMeasurementOpts>(
      deepMerge(defaultOptions.distanceMeasurementOpts, props.distanceMeasurementOpts)
    )

    const componentDistanceActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.componentDistanceActionOpts, mergeActionOpts('componentDistanceActionOpts'))
    )
    const componentDistanceMeasurementOpts = reactive<VcComponentDistanceMeasurementOpts>(
      deepMerge(defaultOptions.componentDistanceMeasurementOpts, props.componentDistanceMeasurementOpts)
    )

    const polylineActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.polylineActionOpts, mergeActionOpts('polylineActionOpts'))
    )
    const polylineMeasurementOpts = reactive<VcPolylineMeasurementOpts>(
      deepMerge(defaultOptions.polylineMeasurementOpts, props.polylineMeasurementOpts)
    )

    const horizontalActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.horizontalActionOpts, mergeActionOpts('horizontalActionOpts'))
    )
    const horizontalMeasurementOpts = reactive<VcHorizontalMeasurementOpts>(
      deepMerge(defaultOptions.horizontalMeasurementOpts, props.horizontalMeasurementOpts)
    )

    const verticalActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.verticalActionOpts, mergeActionOpts('verticalActionOpts'))
    )
    const verticalMeasurementOpts = reactive<VcMeasurementOpts>(
      deepMerge(defaultOptions.verticalMeasurementOpts, props.verticalMeasurementOpts)
    )

    const heightActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.heightActionOpts, mergeActionOpts('heightActionOpts')))
    const heightMeasurementOpts = reactive<VcMeasurementOpts>(deepMerge(defaultOptions.heightMeasurementOpts, props.heightMeasurementOpts))

    const areaActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.areaActionOpts, mergeActionOpts('areaActionOpts')))
    const areaMeasurementOpts = reactive<VcPolylineMeasurementOpts>(deepMerge(defaultOptions.areaMeasurementOpts, props.areaMeasurementOpts))

    const pointActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.pointActionOpts, mergeActionOpts('pointActionOpts')))
    const pointMeasurementOpts = reactive<VcMeasurementOpts>(deepMerge(defaultOptions.pointMeasurementOpts, props.pointMeasurementOpts))

    const rectangleActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.rectangleActionOpts, mergeActionOpts('rectangleActionOpts'))
    )
    const rectangleMeasurementOpts = reactive<VcRegularMeasurementOpts>(
      deepMerge(defaultOptions.rectangleMeasurementOpts, props.rectangleMeasurementOpts)
    )

    const regularActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.regularActionOpts, mergeActionOpts('regularActionOpts'))
    )
    const regularMeasurementOpts = reactive<VcRegularMeasurementOpts>(
      deepMerge(defaultOptions.regularMeasurementOpts, props.regularMeasurementOpts)
    )

    const circleActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.circleActionOpts, mergeActionOpts('circleActionOpts')))
    const circleMeasurementOpts = reactive<VcRegularMeasurementOpts>(
      deepMerge(defaultOptions.circleMeasurementOpts, props.circleMeasurementOpts)
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

    const drawingActionInstances = computed<Array<VcDrawingActionInstance>>(() => {
      return props.measurements.map(measurement => ({
        name: measurement,
        type: 'measurement',
        actionStyle: {
          background: options[`${camelize(measurement)}ActionOpts`].color,
          color: options[`${camelize(measurement)}ActionOpts`].textColor
        },
        actionClass: `vc-measure-${measurement} vc-measure-button`,
        actionRef: ref<VcFabActionRef>(null),
        actionOpts: options[`${camelize(measurement)}ActionOpts`] as VcActionTooltipProps,
        cmp: getMeasurementCmp(measurement),
        cmpRef: ref<MeasurementActionCmpRef>(null!),
        cmpOpts: options[`${camelize(measurement)}MeasurementOpts`] as VcMeasurementOpts,
        tip: options[`${camelize(measurement)}ActionOpts`].tooltip.tip || t(`vc.measurement.${measurement}.tip`),
        isActive: false
      }))
    })

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

    function mergeActionOpts(actionName) {
      return isEqual(defaultOptions[actionName], props[actionName]) ? fabActionOpts : Object.assign({}, fabActionOpts, props[actionName])
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
  VcMeasurementRectangle,
  VcMeasurementRegular,
  measurementsProps
}

export type { VcMeasurementsProps } from './defaultProps'
export type VcMeasurementsEmits = typeof emits
export type VcMeasurementsSlots = {
  /**
   * body slot content of the component
   */
  body: (drawingActionInstances: Array<VcDrawingActionInstance>) => VNode[]
}

export interface VcMeasurementsRef extends VcComponentPublicInstance<VcMeasurementsProps> {
  /**
   * Get or set the editingActionName.
   */
  editingActionName?: string
  /**
   * Get the drawing action instances.
   */
  drawingActionInstances: Array<VcDrawingActionInstance>
  /**
   * Get the selected drawing action instance.
   */
  selectedDrawingActionInstance: VcDrawingActionInstance
  /**
   * Clear all drawing results.
   */
  clearAll: () => void
  /**
   * End listening for the ScreenSpaceEventHandler event.
   */
  deactivate: () => void
  /**
   * Start listening for ScreenSpaceEventHandler events.
   */
  activate: () => void
  /**
   * Toggle drawing instance.
   * @param drawingOption drawing instance or drawing instance name.
   */
  toggleAction: (drawingOption: VcDrawingActionInstance | string) => void
  /**
   * Get the float action button template reference.
   */
  getFabRef: () => VcFabRef
  /**
   * Get the drawingActionInstance.
   */
  getDrawingActionInstance: (actionName: string) => VcDrawingActionInstance
  /**
   * Get the drawing action instances.
   */
  getDrawingActionInstances: () => Array<VcDrawingActionInstance>
  /**
   * Get the selected drawing action instance.
   */
  getSelectedDrawingActionInstance: () => VcDrawingActionInstance
}
