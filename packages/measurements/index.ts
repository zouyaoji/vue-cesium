import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode, ref, h, reactive, CSSProperties, computed, ExtractPropTypes, provide, nextTick } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import { isString, kebabCase, camelize } from '@vue-cesium/utils/util'
import { VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { $ } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcFab, VcFabAction, VcTooltip } from '@vue-cesium/ui'
import { defaultProps, defaultOptions, measurementFabDefault, distanceActionDefault, componentDistanceActionDefault } from './defaultProps'
import VcMeasurementDistance from './distance'
import { MeasurementsOption } from './measure.types'
import { t } from '@vue-cesium/locale'
import { vcKey } from '@vue-cesium/utils/config'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
export default defineComponent({
  name: 'VcMeasurements',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed'],
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
    const measurementMouseHandler = ref<Cesium.ScreenSpaceEventHandler>(null)
    const selectedMeasurementOption = ref<MeasurementsOption>(void 0)
    const fabExtanded = ref(false)
    const mounted = ref(false)

    const options: any = {}
    // computed
    const measurementFabOptions = computed<typeof measurementFabDefault>(() => {
      return Object.assign({}, defaultOptions.measurementFabOptions, props.measurementFabOptions)
    })

    const distanceActionOpts = computed<typeof distanceActionDefault>(() => {
      return Object.assign({}, defaultOptions.distanceActionOpts, props.distanceActionOpts)
    })

    const distanceMeasurementOpts = computed(() => {
      return Object.assign({}, defaultOptions.distanceMeasurementOpts, props.distanceMeasurementOpts)
    })

    const componentDistanceActionOpts = computed<typeof componentDistanceActionDefault>(() => {
      return Object.assign({}, defaultOptions.componentDistanceActionOpts, props.componentDistanceActionOpts)
    })

    const componentDistanceMeasurementOpts = computed(() => {
      return Object.assign({}, defaultOptions.componentDistanceMeasurementOpts, props.componentDistanceMeasurementOpts)
    })

    const clearActionOpts = computed(() => {
      return Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts)
    })



    options.distanceActionOpts = distanceActionOpts
    options.distanceMeasurementOpts = distanceMeasurementOpts
    options.componentDistanceActionOpts = componentDistanceActionOpts
    options.componentDistanceMeasurementOpts = componentDistanceMeasurementOpts

    const measurementsOptions = computed<Array<MeasurementsOption>>(() => {
      return props.measurements.map(measurement => ({
        name: measurement,
        actionRef: ref<typeof VcFabAction>(null),
        actionOpts: options[`${camelize(measurement)}ActionOpts`],
        measurementRef: ref<typeof VcMeasurementDistance>(null),
        measurementOpts: options[`${camelize(measurement)}MeasurementOpts`],
        actionStyle: {
          background: options[`${camelize(measurement)}ActionOpts`].value.color,
          color: options[`${camelize(measurement)}ActionOpts`].value.textColor
        },
        actionClass: computed<string>(() => {
          return `vc-measure-${measurement} vc-measure-button${measurement === selectedMeasurementOption.value?.name ? ' active' : ''}`
        }),
        tip: options[`${camelize(measurement)}ActionOpts`].value.tooltip.tip || t(`vc.measurement.${camelize(measurement)}.tip`)
      }))
    })

    const fabStyle = computed(() => {
      return {
        background: measurementFabOptions.value.color,
        color: measurementFabOptions.value.textColor
      }
    })

    // methods
    instance.createCesiumObject = async () => {
      const { viewer } = $services
      canRender.value = true

      measurementMouseHandler.value = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
      return true
    }

    instance.mount = async () => {
      updateRootStyle()
      mounted.value = true
      nextTick(() => {
        measurementFabOptions.value.autoExpand && fabRef.value.toggle()
      })
      return true
    }

    instance.unmount = async () => {
      if (selectedMeasurementOption.value) {
        toggleAction(selectedMeasurementOption.value.name)
        selectedMeasurementOption.value = undefined
      }

      deactivate()
      measurementMouseHandler.value.destroy()
      mounted.value = false
      return true
    }

    /**
     *
     * @param movement 屏幕坐标
     * @param button 鼠标按键 0 左键, 1 中键, 2 右键
     * @param shift
     */
    const handleClick = (movement, options?) => {
      selectedMeasurementOption.value?.measurementRef.handleClick?.(movement.position, options)

      let measurementVm
      if ((instance.proxy as any).editingMeasurementName) {
        measurementVm = measurementsOptions.value.find(v => v.name === (instance.proxy as any).editingMeasurementName)
      }

      if (measurementVm !== selectedMeasurementOption.value) {
        measurementVm?.measurementRef.value.handleClick?.(movement.position, options)
      }
    }

    const clearAll = () => {
      measurementsOptions.value.forEach(measurementsOption => {
        measurementsOption.measurementRef.value.clear()
      })
    }

    const handleMouseMove = (movement, options?) => {
      selectedMeasurementOption.value?.measurementRef.handleMouseMove?.(movement.endPosition, options)

      let measurementVm
      if ((instance.proxy as any).editingMeasurementName) {
        measurementVm = measurementsOptions.value.find(v => v.name === (instance.proxy as any).editingMeasurementName)
      }

      if (measurementVm !== selectedMeasurementOption.value) {
        measurementVm?.measurementRef.value.handleMouseMove?.(movement.endPosition, options)
      }
    }

    const onLeftClick = movement => {
      handleClick(movement, {
        button: 0
      })
    }

    const onLeftClickShift = movement => {
      handleClick(movement, {
        button: 0,
        shift: true
      })
    }

    const onLeftClickCtrl = movement => {
      handleClick(movement, {
        button: 0,
        ctrl: true
      })
    }

    const onRightClick = movement => {
      handleClick(movement, {
        button: 2
      })
    }

    const onRightClickCtrl = movement => {
      handleClick(movement, {
        button: 2,
        ctrl: true
      })
    }

    const onMouseMove = movement => {
      handleMouseMove(movement)
    }

    const onMouseMoveShift = movement => {
      handleMouseMove(movement, {
        shift: true
      })
    }

    const onLeftDown = movement => {
      selectedMeasurementOption.value?.measurementRef.handleLeftDown?.(movement.position)
    }

    const onLeftUp = movement => {
      selectedMeasurementOption.value?.measurementRef.handleLeftUp?.(movement.position)
    }

    const onDoubleClick = movement => {
      selectedMeasurementOption.value?.measurementRef.handleDoubleClick?.(movement.position)
    }

    const activate = () => {
      const { ScreenSpaceEventType, KeyboardEventModifier } = Cesium
      const sseh = measurementMouseHandler.value
      sseh.setInputAction(onLeftClick, ScreenSpaceEventType.LEFT_CLICK)
      sseh.setInputAction(onLeftClickShift, ScreenSpaceEventType.LEFT_CLICK, KeyboardEventModifier.SHIFT)
      sseh.setInputAction(onLeftClickCtrl, ScreenSpaceEventType.LEFT_CLICK, KeyboardEventModifier.CTRL)
      sseh.setInputAction(onRightClick, ScreenSpaceEventType.RIGHT_CLICK)
      sseh.setInputAction(onRightClickCtrl, ScreenSpaceEventType.RIGHT_CLICK, KeyboardEventModifier.CTRL)
      sseh.setInputAction(onMouseMove, ScreenSpaceEventType.MOUSE_MOVE)
      sseh.setInputAction(onMouseMoveShift, ScreenSpaceEventType.MOUSE_MOVE, KeyboardEventModifier.SHIFT)
      sseh.setInputAction(onLeftDown, ScreenSpaceEventType.LEFT_DOWN)
      sseh.setInputAction(onLeftUp, ScreenSpaceEventType.LEFT_UP)
      sseh.setInputAction(onDoubleClick, ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
    }

    const deactivate = () => {
      const { ScreenSpaceEventType, KeyboardEventModifier } = Cesium
      const sseh = measurementMouseHandler.value
      sseh.removeInputAction(ScreenSpaceEventType.LEFT_CLICK)
      sseh.removeInputAction(ScreenSpaceEventType.LEFT_CLICK, KeyboardEventModifier.SHIFT)
      sseh.removeInputAction(ScreenSpaceEventType.LEFT_CLICK, KeyboardEventModifier.CTRL)
      sseh.removeInputAction(ScreenSpaceEventType.RIGHT_CLICK)
      sseh.removeInputAction(ScreenSpaceEventType.RIGHT_CLICK, KeyboardEventModifier.CTRL)
      sseh.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE)
      sseh.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE, KeyboardEventModifier.SHIFT)
      sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOWN)
      sseh.removeInputAction(ScreenSpaceEventType.LEFT_UP)
      sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
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
    const toggleAction = e => {
      const { viewer } = $services
      if (isString(e)) {
        e = measurementsOptions.value.find(v => v.name === e)
      }
      if (selectedMeasurementOption.value !== void 0) {
        selectedMeasurementOption.value.actionOpts.color = restoreColor.value
        selectedMeasurementOption.value.measurementRef.stop?.()
        e.measurementRef.value.stop?.()
        // e.actionOpts.value.color = restoreColor.value
      }
      if (selectedMeasurementOption.value?.name === e.name) {
        // deactivate()
        selectedMeasurementOption.value = undefined
        viewer.canvas.setAttribute('style', `cursor: ${restoreCursor.value}`)
        e.actionOpts.value.color = restoreColor.value
      } else {
        // activate()
        selectedMeasurementOption.value = e
        e.measurementRef.value.startNew?.()
        restoreColor.value = e.actionOpts.value.color
        e.actionOpts.value.color = props.activeColor
        restoreCursor.value = getComputedStyle(viewer.canvas).cursor
        viewer.canvas.setAttribute('style', 'cursor: crosshair')
      }
    }

    const onUpdateFab = value => {
      fabExtanded.value = value
      if (value) {
        activate()
      } else {
        selectedMeasurementOption.value = undefined
        deactivate()
      }
    }

    const getMeasurementCmp = name => {
      switch (name) {
        case 'distance':
        case 'component-distance':
          return VcMeasurementDistance
      }
    }

    const getServices = () => {
      return mergeDescriptors(commonState.getServices(), {
        get measurementVm () {
          return instance
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

        measurementsOptions.value.forEach(measurementOptions => {
          const measurement = camelize(measurementOptions.name)
          if (options[`${measurement}ActionOpts`]) {
            fabActionChildren.push(h(VcFabAction, {
              ref: measurementOptions.actionRef,
              style: measurementOptions.actionStyle,
              class: measurementOptions.actionClass.value,
              ...measurementOptions.actionOpts.value,
              onClick: toggleAction.bind(undefined, measurementOptions)
            }, () => h(VcTooltip, {
              ...measurementOptions.actionOpts.tooltip
            }, () => h('strong', null, measurementOptions.tip))
            ))

            measurementChilden.push(h(getMeasurementCmp(measurementOptions.name), {
              ref: measurementOptions.measurementRef,
              editable: props.editable,
              ...measurementOptions.measurementOpts.value
            }))
          }
        })

        if (measurementsOptions.value.length) {
          fabActionChildren.push(h(VcFabAction, {
            // ref: clearActionOpts.value.actionRef,
            style: {
              background: clearActionOpts.value.color,
              color: clearActionOpts.value.textColor
            },
            class: 'vc-measure-button vc-measure-clear',
            ...clearActionOpts.value,
            onClick: clearAll,
          }, () => h(VcTooltip, {
            ...clearActionOpts.value.tooltip
          }, () => h('strong', null, clearActionOpts.value.tooltip.tip || t('vc.measurement.clear')))
          ))
        }

        const root = []
        if (mounted.value) {
          root.push(h('div', {
            ref: rootRef,
            class: 'vc-measurements-container ' + positionState.classes.value,
            style: rootStyle
          }, h(VcFab, {
            ref: fabRef,
            class: 'vc-measure-button',
            style: fabStyle.value,
            'onUpdate:modelValue': onUpdateFab,
            ...measurementFabOptions.value
          }, {
            default: () => fabActionChildren,
            tooltip: () => h(VcTooltip, {
              ...measurementFabOptions.value.tooltip
            }, () => h('strong', null, measurementFabOptions.value.tooltip.tip || (fabExtanded.value ? t('vc.measurement.collapse') : t('vc.measurement.expand'))))
          })))
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
