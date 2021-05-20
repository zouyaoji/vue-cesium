
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
  measurementFabDefault,
  distanceActionDefault,
  componentDistanceActionDefault,
  distanceMeasurementDefault,
  componentDistanceMeasurementDefault,
  clearActionDefault
} from './defaultProps'
import { useCommon, useHandler } from '@vue-cesium/composables'
import { camelize } from '@vue-cesium/utils/util'
import { $ } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcFab, VcFabAction, VcTooltip } from '@vue-cesium/ui'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import VcMeasurementDistance from './distance'
import { MeasurementsOption } from './measure.types'
import { t } from '@vue-cesium/locale'
import { vcKey } from '@vue-cesium/utils/config'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { VcCollectionPrimitive } from '@vue-cesium/primitive-collections'

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
    const rootStyle = reactive<CSSProperties>({})
    const positionState = usePosition(props, $services)
    const rootRef = ref<HTMLElement>(null)
    const fabRef = ref<typeof VcFab>(null)

    let selectedMeasurementOption: MeasurementsOption = undefined
    const fabExtanded = ref(false)
    const mounted = ref(false)

    const options: any = {}
    // computed
    const measurementFabOptions = reactive<typeof measurementFabDefault>(
      Object.assign({}, defaultOptions.measurementFabOptions, props.measurementFabOptions)
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
    const clearActionOpts = reactive<typeof clearActionDefault>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))

    options.distanceActionOpts = distanceActionOpts
    options.distanceMeasurementOpts = distanceMeasurementOpts
    options.componentDistanceActionOpts = componentDistanceActionOpts
    options.componentDistanceMeasurementOpts = componentDistanceMeasurementOpts

    const measurementsOptions: Array<MeasurementsOption> = props.measurements.map(measurement => ({
      name: measurement,
      actionRef: ref<typeof VcFabAction>(null),
      actionOpts: options[`${camelize(measurement)}ActionOpts`],
      measurementRef: ref<typeof VcMeasurementDistance>(null),
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

    const { activate, deactivate, destroy: destroyHandler, isActive } = useHandler($services, {
      handleMouseClick,
      handleMouseMove
    })

    instance.createCesiumObject = async () => {
      canRender.value = true
      return measurementsOptions
    }

    instance.mount = async () => {
      updateRootStyle()
      mounted.value = true
      nextTick(() => {
        measurementFabOptions.autoExpand && fabRef.value?.toggle()
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
        default:
          return void 0
      }
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform

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

      Object.assign(rootStyle, css)
    }

    const restoreColor = ref(null)
    const restoreCursor = ref(null)
    const toggleAction = (measurementOption: MeasurementsOption) => {
      const { viewer } = $services
      if (selectedMeasurementOption !== void 0) {
        selectedMeasurementOption.actionOpts.color = restoreColor.value
        const measurementCmp: any = (selectedMeasurementOption.measurementRef.value || selectedMeasurementOption.measurementRef)
        measurementCmp.stop()
        selectedMeasurementOption.isActive = false
        emit('activeEvt', {
          type: selectedMeasurementOption.name,
          isActive: false
        })
      }
      if (selectedMeasurementOption?.name === measurementOption.name) {
        selectedMeasurementOption = undefined
        viewer.canvas.setAttribute('style', `cursor: ${restoreCursor.value}`)
        measurementOption.actionOpts.color = restoreColor.value
      } else {
        selectedMeasurementOption = measurementOption
        const measurementCmp: any = (selectedMeasurementOption.measurementRef.value || selectedMeasurementOption.measurementRef)
        measurementCmp.startNew()
        restoreColor.value = selectedMeasurementOption.actionOpts.color
        selectedMeasurementOption.actionOpts.color = props.activeColor
        restoreCursor.value = getComputedStyle(viewer.canvas).cursor
        viewer.canvas.setAttribute('style', 'cursor: crosshair')
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
        measurementsOption.measurementRef.value.clear()
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
        get isActive () {
          return isActive
        }
      })
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
              ref: rootRef,
              class: 'vc-measurements-container ' + positionState.classes.value,
              style: rootStyle
            }, ctx.slots.body !== void 0 ? ctx.slots.body() : h(VcFab, {
              ref: fabRef,
              class: 'vc-measure-button',
              style: {
                background: measurementFabOptions.color,
                color: measurementFabOptions.textColor
              },
              'onUpdate:modelValue': onUpdateFab,
              ...measurementFabOptions
            }, {
              default: () => fabActionChildren,
              tooltip: () =>
                h(VcTooltip, {
                  ...measurementFabOptions.tooltip
                }, () => h(
                  'strong',
                  null,
                  measurementFabOptions.tooltip.tip || (fabExtanded.value ? t('vc.measurement.collapse') : t('vc.measurement.expand'))))
            }))
          )
        }
        root.push(h(VcCollectionPrimitive, {
          show: props.show
        }, () => measurementChilden))

        return root
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
