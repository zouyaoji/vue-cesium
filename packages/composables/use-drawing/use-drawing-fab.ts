/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-13 09:45:59
 * @LastEditTime: 2021-12-06 22:24:08
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-drawing\use-drawing-fab.ts
 */
import { VcCollectionPrimitive } from '@vue-cesium/components/primitive-collections'
import { VcFab, VcFabAction, VcTooltip } from '@vue-cesium/components/ui'
import { useCommon, useHandler } from '@vue-cesium/composables'
import { VisibilityState } from '@vue-cesium/shared'
import { VcDrawingActionInstance } from '@vue-cesium/utils/drawing-types'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { CSSProperties, nextTick, provide, reactive, ref, VNode, h, createCommentVNode } from 'vue'
import usePosition from '../private/use-position'
import { $ } from '@vue-cesium/utils/private/vm'
import { isString } from '@vue-cesium/utils/util'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { vcKey } from '@vue-cesium/utils/config'
import { useLocaleInject } from '../use-locale'
import { clearActionDefault } from './defaultOpts'
import { mainFabDefault } from '@vue-cesium/components/drawings/src/defaultProps'

export const DrawStatus = {
  BeforeDraw: 0,
  Drawing: 1,
  AfterDraw: 2
}

export default function (
  props,
  ctx,
  instance: VcComponentInternalInstance,
  drawingActionInstances: Array<VcDrawingActionInstance>,
  mainFabOpts: typeof mainFabDefault,
  clearActionOpts: typeof clearActionDefault,
  cmpName: string
) {
  instance.cesiumEvents = []
  const commonState = useCommon(props, ctx, instance)
  if (commonState === void 0) {
    return
  }

  const { t } = useLocaleInject()
  const { $services } = commonState
  const { emit } = ctx

  const canRender = ref(false)
  const containerStyle = reactive<CSSProperties>({})
  const positionState = usePosition(props, $services)
  const containerRef = ref<HTMLElement | null>(null)
  const fabRef = ref<typeof VcFab | null>(null)
  const fabExtanded = ref(false)
  const mounted = ref(false)
  const primitiveCollection = ref(null)
  let visibilityState: VisibilityState

  let selectedDrawingActionInstance: VcDrawingActionInstance = undefined!

  /**
   *
   * @param movement 屏幕坐标
   * @param button 鼠标按键 0 左键, 1 中键, 2 右键
   * @param shift
   */
  const handleMouseClick = (movement: Cesium.ScreenSpaceEventParamsType.LEFT_CLICK, options?) => {
    const cmp = selectedDrawingActionInstance?.cmpRef.value
    cmp?.handleMouseClick?.(movement.position, options)

    let drawingActionOpts
    if ((instance.proxy as any).editingActionName) {
      drawingActionOpts = drawingActionInstances.find(v => v.name === (instance.proxy as any).editingActionName)
    }

    if (drawingActionOpts && drawingActionOpts !== selectedDrawingActionInstance) {
      const cmp = drawingActionOpts.cmpRef.value
      cmp?.handleMouseClick?.(movement.position, options)
    }
  }

  const handleMouseMove = (movement: Cesium.ScreenSpaceEventParamsType.MOUSE_MOVE, options?) => {
    const cmp = selectedDrawingActionInstance?.cmpRef.value
    cmp?.handleMouseMove?.(movement.endPosition, options)

    let drawingActionOpts
    if ((instance.proxy as any).editingActionName) {
      drawingActionOpts = drawingActionInstances.find(v => v.name === (instance.proxy as any).editingActionName)
    }

    if (drawingActionOpts && drawingActionOpts !== selectedDrawingActionInstance) {
      const cmp = drawingActionOpts.cmpRef.value
      cmp?.handleMouseMove?.(movement.endPosition, options)
    }
  }

  const handleDoubleClick = (movement: Cesium.ScreenSpaceEventParamsType.LEFT_DOUBLE_CLICK, options?) => {
    const cmp = selectedDrawingActionInstance?.cmpRef.value
    cmp?.handleDoubleClick?.(movement.position, options)

    let drawingActionOpts
    if ((instance.proxy as any).editingActionName) {
      drawingActionOpts = drawingActionInstances.find(v => v.name === (instance.proxy as any).editingActionName)
    }

    if (drawingActionOpts && drawingActionOpts !== selectedDrawingActionInstance) {
      const cmp = drawingActionOpts.cmpRef.value
      cmp?.handleDoubleClick?.(movement.position, options)
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
    return drawingActionInstances
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
    if (selectedDrawingActionInstance) {
      toggleAction(selectedDrawingActionInstance)
      ;(selectedDrawingActionInstance as any) = undefined
    }

    deactivate()
    destroyHandler()
    mounted.value = false
    return true
  }

  const getWorldPosition = (scene: Cesium.Scene, windowPosition: Cesium.Cartesian2, result: Cesium.Cartesian3) => {
    const { Cesium3DTileFeature, Cesium3DTileset, Cartesian3, defined, Model, Ray } = Cesium
    let position
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

  const restoreColor = ref<string | null | undefined>(null)
  const toggleAction = (drawingOption: VcDrawingActionInstance | string | undefined) => {
    const { viewer } = $services
    if (isString(drawingOption)) {
      drawingOption = drawingActionInstances.find(v => v.name === drawingOption)
    }
    if (!drawingOption) {
      commonState.logger.error('Invalid drawingActionOption or drawingActionOption name')
      return
    }
    if (selectedDrawingActionInstance !== void 0) {
      selectedDrawingActionInstance.actionOpts.color = restoreColor.value || ''
      const cmp = selectedDrawingActionInstance.cmpRef.value
      cmp.stop?.()
      selectedDrawingActionInstance.isActive = false
      emit(
        'activeEvt',
        {
          type: selectedDrawingActionInstance.name,
          option: selectedDrawingActionInstance,
          isActive: false
        },
        viewer
      )
    }
    if (selectedDrawingActionInstance?.name === drawingOption?.name) {
      ;(selectedDrawingActionInstance as any) = undefined
      drawingOption.actionOpts.color = restoreColor.value || 'red'
    } else {
      selectedDrawingActionInstance = drawingOption
      const cmp = selectedDrawingActionInstance.cmpRef.value
      cmp.startNew()
      restoreColor.value = selectedDrawingActionInstance.actionOpts.color
      selectedDrawingActionInstance.actionOpts.color = props.activeColor
      selectedDrawingActionInstance.isActive = true
      emit(
        'activeEvt',
        {
          type: selectedDrawingActionInstance.name,
          option: selectedDrawingActionInstance,
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
      if (selectedDrawingActionInstance) {
        toggleAction(selectedDrawingActionInstance)
      }
      deactivate()
    }
    emit('fabUpdated', value)
  }

  const clearAll = () => {
    drawingActionInstances.forEach(drawingActionOpts => {
      drawingActionOpts.cmpRef.value?.clear()
    })

    selectedDrawingActionInstance && toggleAction(selectedDrawingActionInstance)
  }

  const getServices = () => {
    return mergeDescriptors(commonState.getServices(), {
      get drawingFabInstance() {
        return instance
      },
      get selectedDrawingActionInstance() {
        return selectedDrawingActionInstance
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
    cesiumObject._vcId = cmpName
  }

  provide(vcKey, getServices())

  // expose public methods
  Object.assign(instance.proxy, { drawingActionInstances, selectedDrawingActionInstance, clearAll, deactivate, activate, toggleAction })

  const renderContent = () => {
    if (canRender.value) {
      const fabActionChildren: Array<VNode> = []
      const drawingChildren: Array<VNode> = []
      drawingActionInstances.forEach(drawingActionInstance => {
        fabActionChildren.push(
          h(
            VcFabAction,
            {
              ref: drawingActionInstance.actionRef,
              style: drawingActionInstance.actionStyle,
              class: drawingActionInstance.actionClass,
              ...drawingActionInstance.actionOpts,
              onClick: () => {
                toggleAction(drawingActionInstance)
              }
            },
            () =>
              h(
                VcTooltip,
                {
                  ...drawingActionInstance.actionOpts.tooltip
                },
                () => h('strong', null, drawingActionInstance.tip)
              )
          )
        )

        drawingActionInstance.cmp &&
          drawingChildren.push(
            h(drawingActionInstance.cmp, {
              ref: drawingActionInstance.cmpRef,
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
              ...drawingActionInstance.cmpOpts
            })
          )
      })

      drawingActionInstances.length &&
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
  return {
    renderContent
  }
}
