import {
  defineComponent,
  getCurrentInstance,
  createCommentVNode,
  ref,
  h,
  reactive,
  CSSProperties,
  ExtractPropTypes,
  provide,
  nextTick,
} from 'vue'
import {
  defaultProps,
  defaultOptions,
  mainFabDefault,
  distanceActionDefault,
  componentDistanceActionDefault,
  distanceMeasurementDefault,
  componentDistanceMeasurementDefault,
  clearActionDefault,
  polylineActionDefault,
  polylineMeasurementDefault,
  horizontalActionDefault,
  horizontalMeasurementDefault,
  verticalActionDefault,
  verticalMeasurementDefault,
  heightActionDefault,
  heightMeasurementDefault,
  areaActionDefault,
  areaMeasurementDefault,
  pointActionDefault,
  pointMeasurementDefault
} from './defaultProps'
import { useCommon, useHandler } from '@vue-cesium/composables'
import { camelize } from '@vue-cesium/utils/util'
import { $ } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcFab, VcFabAction, VcTooltip } from '@vue-cesium/ui'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { MeasurementInstanceOpts } from './measure.types'
import { t } from '@vue-cesium/locale'
import { vcKey } from '@vue-cesium/utils/config'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { VisibilityState } from '@vue-cesium/shared'
import VcMeasurementDistance from './distance'
import VcMeasurementPolyline from './polyline'
import VcMeasurementHorizontal from './horizontal'
import VcMeasurementVertical from './vertical'
import VcMeasurementHeight from './height'
import VcMeasurementPoint from './point'
import VcMeasurementArea from './area'

import { restoreViewerCursor, setViewerCursor } from '@vue-cesium/utils/cesium-helpers'

export default defineComponent({
  name: 'VcMeasurements',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'activeEvt', 'measureEvt', 'updateFab'],
  setup (props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurements'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    const canRender = ref(false)
    const containerStyle = reactive<CSSProperties>({})
    const positionState = usePosition(props, $services)
    const containerRef = ref<HTMLElement>(null)
    const fabRef = ref<typeof VcFab>(null)

    let selectedMeasurementOption: MeasurementInstanceOpts = undefined
    const fabExtanded = ref(false)
    const mounted = ref(false)
    const primitiveCollection = ref(null)
    let visibilityState: VisibilityState = void 0

    const options: any = {}
    // computed
    const mainFabOpts = reactive<typeof mainFabDefault>(
      Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts)
    )
    const distanceActionOpts = reactive<typeof distanceActionDefault>(Object.assign({}, defaultOptions.distanceActionOpts, props.distanceActionOpts))
    const distanceMeasurementOpts = reactive<typeof distanceMeasurementDefault>(
      Object.assign({}, defaultOptions.distanceMeasurementOpts, props.distanceMeasurementOpts)
    )
    const componentDistanceActionOpts = reactive<typeof componentDistanceActionDefault>(
      Object.assign({}, defaultOptions.componentDistanceActionOpts, props.componentDistanceActionOpts)
    )
    const componentDistanceMeasurementOpts = reactive<typeof componentDistanceMeasurementDefault>(
      Object.assign({}, defaultOptions.componentDistanceMeasurementOpts, props.componentDistanceMeasurementOpts)
    )
    const polylineActionOpts = reactive<typeof polylineActionDefault>(
      Object.assign({}, defaultOptions.polylineActionOpts, props.polylineActionOpts)
    )
    const polylineMeasurementOpts = reactive<typeof polylineMeasurementDefault>(
      Object.assign({}, defaultOptions.polylineMeasurementOpts, props.polylineMeasurementOpts)
    )
    const horizontalActionOpts = reactive<typeof horizontalActionDefault>(
      Object.assign({}, defaultOptions.horizontalActionOpts, props.horizontalActionOpts)
    )
    const horizontalMeasurementOpts = reactive<typeof horizontalMeasurementDefault>(
      Object.assign({}, defaultOptions.horizontalMeasurementOpts, props.horizontalMeasurementOpts)
    )
    const verticalActionOpts = reactive<typeof verticalActionDefault>(
      Object.assign({}, defaultOptions.verticalActionOpts, props.verticalActionOpts)
    )
    const verticalMeasurementOpts = reactive<typeof verticalMeasurementDefault>(
      Object.assign({}, defaultOptions.verticalMeasurementOpts, props.verticalMeasurementOpts)
    )
    const heightActionOpts = reactive<typeof heightActionDefault>(
      Object.assign({}, defaultOptions.heightActionOpts, props.heightActionOpts)
    )
    const heightMeasurementOpts = reactive<typeof heightMeasurementDefault>(
      Object.assign({}, defaultOptions.heightMeasurementOpts, props.heightMeasurementOpts)
    )
    const areaActionOpts = reactive<typeof areaActionDefault>(
      Object.assign({}, defaultOptions.areaActionOpts, props.areaActionOpts)
    )
    const areaMeasurementOpts = reactive<typeof areaMeasurementDefault>(
      Object.assign({}, defaultOptions.areaMeasurementOpts, props.areaMeasurementOpts)
    )
    const pointActionOpts = reactive<typeof pointActionDefault>(
      Object.assign({}, defaultOptions.pointActionOpts, props.pointActionOpts)
    )
    const pointMeasurementOpts = reactive<typeof pointMeasurementDefault>(
      Object.assign({}, defaultOptions.pointMeasurementOpts, props.pointMeasurementOpts)
    )

    const clearActionOpts = reactive<typeof clearActionDefault>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))

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
    options.clearActionOpts = clearActionOpts

    const measurementsOptions: Array<MeasurementInstanceOpts> = props.measurements.map(measurement => ({
      name: measurement,
      actionRef: ref<typeof VcFabAction>(null),
      actionOpts: options[`${camelize(measurement)}ActionOpts`],
      measurementRef: ref<typeof VcMeasurementDistance | typeof VcMeasurementPolyline | typeof VcMeasurementHorizontal
      | typeof VcMeasurementVertical | typeof VcMeasurementHeight | typeof VcMeasurementArea | typeof VcMeasurementPoint>(null),
      measurementOpts: options[`${camelize(measurement)}MeasurementOpts`],
      actionStyle: {
        background: options[`${camelize(measurement)}ActionOpts`].color,
        color: options[`${camelize(measurement)}ActionOpts`].textColor
      },
      actionClass: `vc-measure-${measurement} vc-measure-button${measurement === selectedMeasurementOption?.name ? ' active' : ''}`,
      tip: options[`${camelize(measurement)}ActionOpts`].tooltip.tip || t(`vc.measurement.${camelize(measurement)}.tip`),
      cmp: getMeasurementCmp(measurement),
      isActive: false
    }))

    // methods
    /**
     *
     * @param movement 屏幕坐标
     * @param button 鼠标按键 0 左键, 1 中键, 2 右键
     * @param shift
     */
    const handleMouseClick = (movement, options?) => {
      const measurementCmp: any = (selectedMeasurementOption?.measurementRef.value || selectedMeasurementOption?.measurementRef)
      measurementCmp?.handleMouseClick?.(movement.position, options)

      let measurementOptions
      if ((instance.proxy as any).editingMeasurementName) {
        measurementOptions = measurementsOptions.find(v => v.name === (instance.proxy as any).editingMeasurementName)
      }

      if (measurementOptions !== selectedMeasurementOption) {
        const measurementCmp: any = (measurementOptions?.measurementRef.value || measurementOptions?.measurementRef)
        measurementCmp?.handleMouseClick?.(movement.position, options)
      }
    }

    const handleMouseMove = (movement, options?) => {
      const measurementCmp: any = (selectedMeasurementOption?.measurementRef.value || selectedMeasurementOption?.measurementRef)
      measurementCmp?.handleMouseMove?.(movement.endPosition, options)

      let measurementOptions
      if ((instance.proxy as any).editingMeasurementName) {
        measurementOptions = measurementsOptions.find(v => v.name === (instance.proxy as any).editingMeasurementName)
      }

      if (measurementOptions !== selectedMeasurementOption) {
        const measurementCmp: any = (measurementOptions?.measurementRef.value || measurementOptions?.measurementRef)
        measurementCmp?.handleMouseMove?.(movement.endPosition, options)
      }
    }

    const handleDoubleClick = (movement, options?) => {
      const measurementCmp: any = (selectedMeasurementOption?.measurementRef.value || selectedMeasurementOption?.measurementRef)
      measurementCmp?.handleDoubleClick?.(movement.position, options)

      let measurementOptions
      if ((instance.proxy as any).editingMeasurementName) {
        measurementOptions = measurementsOptions.find(v => v.name === (instance.proxy as any).editingMeasurementName)
      }

      if (measurementOptions !== selectedMeasurementOption) {
        const measurementCmp: any = (measurementOptions?.measurementRef.value || measurementOptions?.measurementRef)
        measurementCmp?.handleDoubleClick?.(movement.position, options)
      }
    }

    const { activate, deactivate, destroy: destroyHandler, isActive } = useHandler($services, {
      handleMouseClick,
      handleMouseMove,
      handleDoubleClick
    })

    instance.createCesiumObject = async () => {
      canRender.value = true
      visibilityState = new VisibilityState()
      return measurementsOptions
    }

    instance.mount = async () => {
      updateRootStyle()
      mounted.value = true
      nextTick(() => {
        mainFabOpts.autoExpand && fabRef.value?.toggle()
      })
      activate()
      return true
    }

    instance.unmount = async () => {
      if (selectedMeasurementOption) {
        toggleAction(selectedMeasurementOption)
        selectedMeasurementOption = undefined
      }

      deactivate()
      destroyHandler()
      mounted.value = false
      return true
    }

    function getMeasurementCmp (name) {
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
        default:
          return void 0
      }
    }

    const getWorldPosition = (scene: Cesium.Scene, windowPosition: Cesium.Cartesian2, result: Cesium.Cartesian3) => {
      const { Cesium3DTileFeature, Cesium3DTileset, Cartesian3, defined, Model, Ray } = Cesium
      let position = void 0
      const cartesianScratch: any = {}
      const rayScratch = new Ray()
      if (scene.pickPositionSupported) {
        visibilityState.hide(scene)
        const pickObj = scene.pick(windowPosition, 1, 1)
        visibilityState.restore(scene)
        if (defined(pickObj)) {
          if (pickObj instanceof Cesium3DTileFeature || pickObj.primitive instanceof Cesium3DTileset || pickObj.primitive instanceof Model) {
            position = scene.pickPosition(windowPosition, cartesianScratch)
            if (Cesium.defined(position)) {
              return Cartesian3.clone(position, result)
            }
          }
        }
      }
      if (defined(scene.globe)) {
        const ray = scene.camera.getPickRay(windowPosition, rayScratch)
        position = scene.globe.pick(ray, scene, cartesianScratch)
        return defined(position) ? Cartesian3.clone(position, result) : void 0
      }

      return void 0
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      containerStyle.left = css.left
      containerStyle.top = css.top
      containerStyle.transform = css.transform

      const side = positionState.attach.value
      const fabTarget = $(fabRef)?.$el as HTMLElement
      if (fabTarget !== void 0) {
        const clientRect = fabTarget.getBoundingClientRect()
        css.width = `${clientRect.width}px`
        css.height = `${clientRect.height}px`

        if ((side.bottom || side.top) && !side.left && !side.right) {
          css.left = '50%'
          css.transform = 'translate(-50%, 0)'
        }

        if ((side.left || side.right) && !side.top && !side.bottom) {
          css.top = '50%'
          css.transform = 'translate(0, -50%)'
        }
      }

      Object.assign(containerStyle, css)
    }

    const restoreColor = ref(null)
    const restoreCursor = ref(null)
    const toggleAction = (measurementOption: MeasurementInstanceOpts) => {
      const { viewer } = $services
      if (selectedMeasurementOption !== void 0) {
        selectedMeasurementOption.actionOpts.color = restoreColor.value
        const measurementCmp: any = (selectedMeasurementOption.measurementRef.value || selectedMeasurementOption.measurementRef)
        measurementCmp?.stop?.()
        selectedMeasurementOption.isActive = false
        emit('activeEvt', {
          type: selectedMeasurementOption.name,
          isActive: false
        })
      }
      if (selectedMeasurementOption?.name === measurementOption.name) {
        selectedMeasurementOption = undefined
        restoreViewerCursor(viewer)
        measurementOption.actionOpts.color = restoreColor.value
      } else {
        selectedMeasurementOption = measurementOption
        const measurementCmp: any = (selectedMeasurementOption.measurementRef.value || selectedMeasurementOption.measurementRef)
        measurementCmp.startNew()
        restoreColor.value = selectedMeasurementOption.actionOpts.color
        selectedMeasurementOption.actionOpts.color = props.activeColor
        restoreCursor.value = getComputedStyle(viewer.canvas).cursor
        setViewerCursor(viewer, 'crosshair')
        selectedMeasurementOption.isActive = true
        emit('activeEvt', {
          type: selectedMeasurementOption.name,
          isActive: true
        })
      }
    }

    const onUpdateFab = value => {
      fabExtanded.value = value
      if (value) {
        activate()
      } else {
        if (selectedMeasurementOption) {
          toggleAction(selectedMeasurementOption)
        }
        deactivate()
      }
      emit('updateFab', value)
    }


    const clearAll = () => {
      measurementsOptions.forEach(measurementsOption => {
        measurementsOption.measurementRef.value?.clear()
      })

      selectedMeasurementOption && toggleAction(selectedMeasurementOption)
    }

    const getServices = () => {
      return mergeDescriptors(commonState.getServices(), {
        get measurementVm () {
          return instance
        },
        get selectedMeasurementOption () {
          return selectedMeasurementOption
        },
        get getWorldPosition () {
          return getWorldPosition
        },
        get drawingHandlerActive () {
          return isActive
        }
      })
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcMeasurements'
    }

    provide(vcKey, getServices())

    // expose public methods
    Object.assign(instance.proxy, { measurementsOptions, selectedMeasurementOption, clearAll, deactivate, activate, toggleAction })

    return () => {
      if (canRender.value) {
        const fabActionChildren = []
        const measurementChilden = []

        measurementsOptions.forEach(measurementOptions => {
          const measurement = camelize(measurementOptions.name)
          if (options[`${measurement}ActionOpts`]) {
            fabActionChildren.push(
              h(VcFabAction, {
                ref: measurementOptions.actionRef,
                style: measurementOptions.actionStyle,
                class: measurementOptions.actionClass,
                ...measurementOptions.actionOpts,
                onClick: () => {
                  toggleAction(measurementOptions)
                }
              }, () => h(VcTooltip, {
                ...measurementOptions.actionOpts.tooltip
              }, () => h('strong', null, measurementOptions.tip)))
            )

            measurementOptions.cmp && measurementChilden.push(
              h(measurementOptions.cmp, {
                ref: measurementOptions.measurementRef,
                editable: props.editable,
                onMeasureEvt: e => {
                  emit('measureEvt', e)
                },
                ...measurementOptions.measurementOpts
              })
            )
          }
        })

        measurementsOptions.length && fabActionChildren.push(
          h(VcFabAction, {
            style: {
              background: clearActionOpts.color,
              color: clearActionOpts.textColor
            },
            class: 'vc-measure-button vc-measure-clear',
            ...clearActionOpts,
            onClick: clearAll
          }, () => h(VcTooltip, {
            ...clearActionOpts.tooltip
          }, () => h('strong', null, clearActionOpts.tooltip.tip || t('vc.measurement.clear.tip'))))
        )

        const root = []
        if (mounted.value) {
          root.push(
            h('div', {
              ref: containerRef,
              class: 'vc-measurements-container ' + positionState.classes.value,
              style: containerStyle
            }, ctx.slots.body !== void 0 ? ctx.slots.body() : h(VcFab, {
              ref: fabRef,
              class: 'vc-measure-button',
              style: {
                background: mainFabOpts.color,
                color: mainFabOpts.textColor
              },
              'onUpdate:modelValue': onUpdateFab,
              ...mainFabOpts
            }, {
              default: () => fabActionChildren,
              tooltip: () =>
                h(VcTooltip, {
                  ...mainFabOpts.tooltip
                }, () => h(
                  'strong',
                  null,
                  mainFabOpts.tooltip.tip || (fabExtanded.value ? t('vc.measurement.collapse') : t('vc.measurement.expand'))))
            }))
          )
        }
        root.push(h(VcCollectionPrimitive, {
          ref: primitiveCollection,
          show: props.show,
          onReady: onPrimitiveCollectionReady
        }, () => measurementChilden))

        return root
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
