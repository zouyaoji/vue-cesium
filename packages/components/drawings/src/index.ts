import { defineComponent, getCurrentInstance, ref, reactive, VNode, computed } from 'vue'
import { drawingsProps, defaultOptions } from './defaultProps'
import { camelize, deepMerge } from '@vue-cesium/utils/util'
import type { VcFabActionRef, VcFabProps, VcFabRef } from '@vue-cesium/components/ui'
import type { VcActionTooltipProps, VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import VcDrawingPin from './pin'
import VcDrawingPoint from './point'
import VcDrawingPolyline from './polyline'
import VcDrawingPolygon from './polygon'
import VcDrawingRegular from './regular'
import VcDrawingRectangle from './rectangle'
import type { DrawingActionCmpRef, VcDrawingActionInstance, VcDrawingOpts } from '@vue-cesium/utils/drawing-types'
import useDrawingFab from '@vue-cesium/composables/use-drawing/use-drawing-fab'
import { useLocale } from '@vue-cesium/composables'
import { drawingEmit } from '@vue-cesium/utils/emits'
import { VcDrawingsProps } from '..'
import { cloneDeep, isEqual } from 'lodash-es'

const emits = {
  ...drawingEmit,
  fabUpdated: (value: boolean) => true
}
export default defineComponent({
  name: 'VcDrawings',
  props: drawingsProps,
  emits: emits,
  setup(props: VcDrawingsProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcDrawings'
    const { t } = useLocale()

    const options: any = {}
    // computed
    const clearActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))
    const mainFabOpts = reactive<VcActionTooltipProps & VcFabProps>(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts))
    const fabActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.fabActionOpts, props.fabActionOpts))
    const pointActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.pointActionOpts, mergeActionOpts('pointActionOpts')))
    const pointDrawingOpts = reactive<VcDrawingOpts>(deepMerge(cloneDeep(defaultOptions.pointDrawingOpts), props.pointDrawingOpts))
    const polylineActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.polylineActionOpts, mergeActionOpts('polylineActionOpts')))
    const polylineDrawingOpts = reactive<VcDrawingOpts>(deepMerge(cloneDeep(defaultOptions.polylineDrawingOpts), props.polylineDrawingOpts))
    const polygonActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.polygonActionOpts, mergeActionOpts('polygonActionOpts')))
    const polygonDrawingOpts = reactive<VcDrawingOpts>(deepMerge(cloneDeep(defaultOptions.polygonDrawingOpts), props.polygonDrawingOpts))
    const rectangleActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.rectangleActionOpts, mergeActionOpts('rectangleActionOpts')))
    const rectangleDrawingOpts = reactive<VcDrawingOpts>(deepMerge(cloneDeep(defaultOptions.rectangleDrawingOpts), props.rectangleDrawingOpts))
    const circleActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.circleActionOpts, mergeActionOpts('circleActionOpts')))
    const circleDrawingOpts = reactive<VcDrawingOpts>(deepMerge(cloneDeep(defaultOptions.circleDrawingOpts), props.circleDrawingOpts))
    const regularActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.regularActionOpts, mergeActionOpts('regularActionOpts')))
    const regularDrawingOpts = reactive<VcDrawingOpts>(deepMerge(cloneDeep(defaultOptions.regularDrawingOpts), props.regularDrawingOpts))
    const pinActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.pinActionOpts, mergeActionOpts('pinActionOpts')))
    const pinDrawingOpts = reactive<VcDrawingOpts>(deepMerge(cloneDeep(defaultOptions.pinDrawingOpts), props.pinDrawingOpts))

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

    const drawingActionInstances = computed<Array<VcDrawingActionInstance>>(() => {
      return props.drawings.map(drawing => ({
        name: drawing,
        type: 'drawing',
        actionStyle: {
          background: options[`${camelize(drawing)}ActionOpts`].color,
          color: options[`${camelize(drawing)}ActionOpts`].textColor
        },
        actionClass: `vc-draw-${drawing} vc-draw-button`,
        actionRef: ref<VcFabActionRef>(null!),
        actionOpts: options[`${camelize(drawing)}ActionOpts`] as VcActionTooltipProps,
        cmp: getDrawingCmp(drawing),
        cmpRef: ref<DrawingActionCmpRef>(null!),
        cmpOpts: options[`${camelize(drawing)}DrawingOpts`] as VcDrawingOpts,
        tip: options[`${camelize(drawing)}ActionOpts`].tooltip.tip || t(`vc.drawing.${camelize(drawing)}.tip`),
        isActive: false
      }))
    })

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

    function mergeActionOpts(actionName) {
      return isEqual(defaultOptions[actionName], props[actionName]) ? fabActionOpts : Object.assign({}, fabActionOpts, props[actionName])
    }

    return useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, 'drawing')?.renderContent
  }
})

export { VcDrawingPin, VcDrawingPoint, VcDrawingPolygon, VcDrawingPolyline, VcDrawingRectangle, VcDrawingRegular, drawingsProps }

export type { VcDrawingsProps } from './defaultProps'
export type VcDrawingsEmits = typeof emits
export type VcDrawingsSlots = {
  /**
   * body slot content of the component
   */
  body: (drawingActionInstances: Array<VcDrawingActionInstance>) => VNode[]
}
export interface VcDrawingsRef extends VcComponentPublicInstance<VcDrawingsProps> {
  /**
   * Get or set the editingActionName.
   */
  editingActionName?: string
  /**
   * Clear all drawing results.
   */
  clearAll: () => void
  /**
   * End listening for the ScreenSpaceEventHandler events.
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
   * Get the drawingActionInstance by action name.
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
