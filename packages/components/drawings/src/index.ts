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
  VNode
} from 'vue'
import {
  defaultProps,
  defaultOptions,
  mainFabDefault,
  pointActionDefault,
  pointDrawingDefault,
  polylineActionDefault,
  polylineDrawingDefault,
  polygonActionDefault,
  polygonDrawingDefault,
  clearActionDefault,
  rectangleActionDefault,
  rectangleDrawingDefault,
  circleActionDefault,
  circleDrawingDefault
} from './defaultProps'
import { useCommon, useHandler } from '@vue-cesium/composables'
import { camelize, isString, isUndefined } from '@vue-cesium/utils/util'
import { $ } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcFab, VcFabAction, VcTooltip } from '@vue-cesium/components/ui'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { DrawingInstanceOpts } from './drawing.types'
import { t } from '@vue-cesium/locale'
import { vcKey } from '@vue-cesium/utils/config'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { VcCollectionPrimitive } from '@vue-cesium/components/primitive-collections'
import { VisibilityState } from '@vue-cesium/shared'
import VcDrawingPoint from './point'
import VcDrawingPolyline from './polyline'
import VcDrawingPolygon from './polygon'
import VcDrawingRegularPolygon from './regular-polygon'
import VcDrawingRectangle from './rectangle'

export default defineComponent({
  name: 'VcDrawings',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'activeEvt', 'editorEvt', 'drawEvt', 'mouseEvt', 'fabUpdated'],
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcDrawings'
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
    const containerRef = ref<HTMLElement | null>(null)
    const fabRef = ref<typeof VcFab | null>(null)

    let selectedDrawingOption: DrawingInstanceOpts | undefined
    const fabExtanded = ref(false)
    const mounted = ref(false)
    const primitiveCollection = ref(null)
    let visibilityState: VisibilityState

    const options: any = {}
    // computed
    const mainFabOpts = reactive<typeof mainFabDefault>(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts))
    const pointActionOpts = reactive<typeof pointActionDefault>(Object.assign({}, defaultOptions.pointActionOpts, props.pointActionOpts))
    const pointDrawingOpts = reactive<typeof pointDrawingDefault>(Object.assign({}, defaultOptions.pointDrawingOpts, props.pointDrawingOpts))
    const polylineActionOpts = reactive<typeof polylineActionDefault>(Object.assign({}, defaultOptions.polylineActionOpts, props.polylineActionOpts))
    const polylineDrawingOpts = reactive<typeof polylineDrawingDefault>(
      Object.assign({}, defaultOptions.polylineDrawingOpts, props.polylineDrawingOpts)
    )
    const polygonActionOpts = reactive<typeof polygonActionDefault>(Object.assign({}, defaultOptions.polygonActionOpts, props.polygonActionOpts))
    const polygonDrawingOpts = reactive<typeof polygonDrawingDefault>(Object.assign({}, defaultOptions.polygonDrawingOpts, props.polygonDrawingOpts))
    const rectangleActionOpts = reactive<typeof rectangleActionDefault>(
      Object.assign({}, defaultOptions.rectangleActionOpts, props.rectangleActionOpts)
    )
    const rectangleDrawingOpts = reactive<typeof rectangleDrawingDefault>(
      Object.assign({}, defaultOptions.rectangleDrawingOpts, props.rectangleDrawingOpts)
    )
    const circleActionOpts = reactive<typeof circleActionDefault>(Object.assign({}, defaultOptions.circleActionOpts, props.circleActionOpts))
    const circleDrawingOpts = reactive<typeof circleDrawingDefault>(Object.assign({}, defaultOptions.circleDrawingOpts, props.circleDrawingOpts))

    const clearActionOpts = reactive<typeof clearActionDefault>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))

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
    options.clearActionOpts = clearActionOpts

    const drawingsOptions: Array<DrawingInstanceOpts> = props.drawings.map(drawing => ({
      name: drawing,
      actionRef: ref<typeof VcFabAction | null>(null),
      actionOpts: options[`${camelize(drawing)}ActionOpts`],
      drawingRef: ref<typeof VcDrawingPoint | typeof VcDrawingPolyline | typeof VcDrawingPolygon | null>(null),
      drawingOpts: options[`${camelize(drawing)}DrawingOpts`],
      actionStyle: {
        background: options[`${camelize(drawing)}ActionOpts`].color,
        color: options[`${camelize(drawing)}ActionOpts`].textColor
      },
      actionClass: `vc-draw-${drawing} vc-draw-button${drawing === selectedDrawingOption?.name ? ' active' : ''}`,
      tip: options[`${camelize(drawing)}ActionOpts`].tooltip.tip || t(`vc.drawing.${camelize(drawing)}.tip`),
      cmp: getDrawingCmp(drawing),
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
      const drawingCmp: any = selectedDrawingOption?.drawingRef.value || selectedDrawingOption?.drawingRef
      drawingCmp?.handleMouseClick?.(movement.position, options)

      let drawingOptions
      if ((instance.proxy as any).editingDrawingName) {
        drawingOptions = drawingsOptions.find(v => v.name === (instance.proxy as any).editingDrawingName)
      }

      if (drawingOptions !== selectedDrawingOption) {
        const drawingCmp: any = drawingOptions?.drawingRef.value || drawingOptions?.drawingRef
        drawingCmp?.handleMouseClick?.(movement.position, options)
      }
    }

    const handleMouseMove = (movement, options?) => {
      const drawingCmp: any = selectedDrawingOption?.drawingRef.value || selectedDrawingOption?.drawingRef
      drawingCmp?.handleMouseMove?.(movement.endPosition, options)

      let drawingOptions
      if ((instance.proxy as any).editingDrawingName) {
        drawingOptions = drawingsOptions.find(v => v.name === (instance.proxy as any).editingDrawingName)
      }

      if (drawingOptions !== selectedDrawingOption) {
        const drawingCmp: any = drawingOptions?.drawingRef.value || drawingOptions?.drawingRef
        drawingCmp?.handleMouseMove?.(movement.endPosition, options)
      }
    }

    const handleDoubleClick = (movement, options?) => {
      const drawingCmp: any = selectedDrawingOption?.drawingRef.value || selectedDrawingOption?.drawingRef
      drawingCmp?.handleDoubleClick?.(movement.position, options)

      let drawingOptions
      if ((instance.proxy as any).editingDrawingName) {
        drawingOptions = drawingsOptions.find(v => v.name === (instance.proxy as any).editingDrawingName)
      }

      if (drawingOptions !== selectedDrawingOption) {
        const drawingCmp: any = drawingOptions?.drawingRef.value || drawingOptions?.drawingRef
        drawingCmp?.handleDoubleClick?.(movement.position, options)
      }
    }

    const {
      activate,
      deactivate,
      destroy: destroyHandler,
      isActive
    } = useHandler($services, {
      handleMouseClick,
      handleMouseMove,
      handleDoubleClick
    })

    instance.createCesiumObject = async () => {
      canRender.value = true
      visibilityState = new VisibilityState()
      return drawingsOptions
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
      if (selectedDrawingOption) {
        toggleAction(selectedDrawingOption)
        selectedDrawingOption = undefined
      }

      deactivate()
      destroyHandler()
      mounted.value = false
      return true
    }

    function getDrawingCmp(name) {
      switch (name) {
        case 'point':
          return VcDrawingPoint
        case 'polyline':
          return VcDrawingPolyline
        case 'polygon':
          return VcDrawingPolygon
        case 'rectangle':
          if (rectangleDrawingOpts.regular) {
            return VcDrawingRegularPolygon
          } else {
            return VcDrawingRectangle
          }
        case 'circle':
          return VcDrawingRegularPolygon
        default:
          return void 0
      }
    }

    const getWorldPosition = (scene: Cesium.Scene, windowPosition: Cesium.Cartesian2, result: Cesium.Cartesian3) => {
      const { Cesium3DTileFeature, Cesium3DTileset, Cartesian3, defined, Model, Ray } = Cesium
      let position: Cesium.Cartesian3 | undefined = void 0
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
        return !isUndefined(position) && defined(position) ? Cartesian3.clone(position, result) : void 0
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

    const restoreColor = ref<string | null | undefined>(null)
    const toggleAction = (drawingOption: DrawingInstanceOpts | string | undefined) => {
      const { viewer } = $services
      if (isString(drawingOption)) {
        drawingOption = drawingsOptions.find(v => v.name === drawingOption)
      }
      if (!drawingOption) {
        commonState.logger.error('Invalid drawingOption or drawingOption name')
        return
      }
      if (selectedDrawingOption !== void 0) {
        selectedDrawingOption.actionOpts.color = restoreColor.value || ''
        const drawingCmp: any = selectedDrawingOption.drawingRef.value || selectedDrawingOption.drawingRef
        drawingCmp?.stop?.()
        selectedDrawingOption.isActive = false
        emit(
          'activeEvt',
          {
            type: selectedDrawingOption.name,
            option: selectedDrawingOption,
            isActive: false
          },
          viewer
        )
      }
      if (selectedDrawingOption?.name === drawingOption?.name) {
        selectedDrawingOption = undefined
        drawingOption.actionOpts.color = restoreColor.value || 'red'
      } else {
        selectedDrawingOption = drawingOption
        const drawingCmp: any = selectedDrawingOption?.drawingRef.value || selectedDrawingOption?.drawingRef
        drawingCmp.startNew()
        restoreColor.value = selectedDrawingOption?.actionOpts.color
        selectedDrawingOption.actionOpts.color = props.activeColor
        selectedDrawingOption.isActive = true
        emit(
          'activeEvt',
          {
            type: selectedDrawingOption.name,
            option: selectedDrawingOption,
            isActive: true
          },
          viewer
        )
      }
    }

    const onUpdateFab = value => {
      fabExtanded.value = value
      if (value) {
        activate()
      } else {
        if (selectedDrawingOption) {
          toggleAction(selectedDrawingOption)
        }
        deactivate()
      }
      emit('fabUpdated', value)
    }

    const clearAll = () => {
      drawingsOptions.forEach(drawingsOption => {
        drawingsOption.drawingRef.value?.clear()
      })

      selectedDrawingOption && toggleAction(selectedDrawingOption)
    }

    const getServices = () => {
      return mergeDescriptors(commonState.getServices(), {
        get drawingVm() {
          return instance
        },
        get selectedDrawingOption() {
          return selectedDrawingOption
        },
        get getWorldPosition() {
          return getWorldPosition
        },
        get drawingHandlerActive() {
          return isActive
        }
      })
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcDrawings'
    }

    provide(vcKey, getServices())

    // expose public methods
    Object.assign(instance.proxy, { drawingsOptions, clearAll, deactivate, activate, toggleAction })

    return () => {
      if (canRender.value) {
        const fabActionChildren: Array<VNode> = []
        const drawingChildren: Array<VNode> = []

        drawingsOptions.forEach(drawingOptions => {
          const drawing = camelize(drawingOptions.name)
          if (options[`${drawing}ActionOpts`]) {
            fabActionChildren.push(
              h(
                VcFabAction,
                {
                  ref: drawingOptions.actionRef,
                  style: drawingOptions.actionStyle,
                  class: drawingOptions.actionClass,
                  ...drawingOptions.actionOpts,
                  onClick: () => {
                    toggleAction(drawingOptions)
                  }
                },
                () =>
                  h(
                    VcTooltip,
                    {
                      ...drawingOptions.actionOpts.tooltip
                    },
                    () => h('strong', null, drawingOptions.tip)
                  )
              )
            )

            drawingOptions.cmp &&
              drawingChildren.push(
                h(drawingOptions.cmp, {
                  ref: drawingOptions.drawingRef,
                  editable: props.editable,
                  clampToGround: props.clampToGround,
                  mode: props.mode,
                  onDrawEvt: (e, viewer) => {
                    emit('drawEvt', e, viewer)
                  },
                  onEditorEvt: (e, viewer) => {
                    emit('editorEvt', e, viewer)
                  },
                  onMouseEvt: (e, viewer) => {
                    emit('mouseEvt', e, viewer)
                  },
                  ...drawingOptions.drawingOpts
                })
              )
          }
        })

        drawingsOptions.length &&
          fabActionChildren.push(
            h(
              VcFabAction,
              {
                style: {
                  background: clearActionOpts.color,
                  color: clearActionOpts.textColor
                },
                class: 'vc-draw-button vc-draw-clear',
                ...clearActionOpts,
                onClick: clearAll
              },
              () =>
                h(
                  VcTooltip,
                  {
                    ...clearActionOpts.tooltip
                  },
                  () => h('strong', null, clearActionOpts.tooltip.tip || t('vc.drawing.clear.tip'))
                )
            )
          )

        const root: Array<VNode> = []
        if (mounted.value) {
          root.push(
            h(
              'div',
              {
                ref: containerRef,
                class: 'vc-drawings-container ' + positionState.classes.value,
                style: containerStyle
              },
              ctx.slots.body !== void 0
                ? ctx.slots.body()
                : h(
                    VcFab,
                    {
                      ref: fabRef,
                      class: 'vc-draw-button',
                      style: {
                        background: mainFabOpts.color,
                        color: mainFabOpts.textColor
                      },
                      'onUpdate:modelValue': onUpdateFab,
                      ...mainFabOpts
                    },
                    {
                      default: () => fabActionChildren,
                      tooltip: () =>
                        h(
                          VcTooltip,
                          {
                            ...mainFabOpts.tooltip
                          },
                          () => h('strong', null, mainFabOpts.tooltip.tip || (fabExtanded.value ? t('vc.drawing.collapse') : t('vc.drawing.expand')))
                        )
                    }
                  )
            )
          )
        }
        root.push(
          h(
            VcCollectionPrimitive,
            {
              ref: primitiveCollection,
              show: props.show,
              onReady: onPrimitiveCollectionReady
            },
            () => drawingChildren
          )
        )

        return root
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
