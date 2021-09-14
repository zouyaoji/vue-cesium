import { defineComponent, getCurrentInstance, ref, h, nextTick, watch, onUnmounted } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcCollectionPoint, VcCollectionPrimitive } from '@vue-cesium/components/primitive-collections'
import { DrawStatus } from '@vue-cesium/shared'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/components/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import { PointDrawing } from '../drawing.types'
import useTimeout from '@vue-cesium/composables/private/use-timeout'
import useCustomUpdate from '@vue-cesium/composables/private/use-custom-update'

export default defineComponent({
  name: 'VcDrawingPoint',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'editorEvt', 'mouseEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcDrawingPoint'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    const points = ref<Array<PointDrawing>>([])
    const drawStatus = ref(DrawStatus.BeforeDraw)
    const canShowDrawTip = ref(false)
    const drawTipPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
    const drawTip = ref('')
    const showEditor = ref(false)
    const editorPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
    const mouseoverPoint = ref(null)
    const editingPoint = ref(null)
    const primitiveCollectionRef = ref<VcComponentPublicInstance>(null)
    let restorePoint = undefined
    let unwatchFns = []
    let editorType = ''
    const { registerTimeout, removeTimeout } = useTimeout()
    const { onVcCollectionPointReady } = useCustomUpdate()

    // watch
    unwatchFns.push(
      watch(
        () => props.editable,
        val => {
          const { drawingVm, selectedDrawingOption } = $services
          if (val && selectedDrawingOption?.name === 'point') {
            ;(drawingVm.proxy as any).toggleAction(selectedDrawingOption)
          }
        }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }

    const startNew = () => {
      const { Cartesian3 } = Cesium
      const point: PointDrawing = {
        drawStatus: DrawStatus.Drawing,
        show: false,
        position: new Cartesian3()
      }

      points.value.push(point)
      drawStatus.value = DrawStatus.Drawing
      canShowDrawTip.value = true
      drawTip.value = props.drawtip.drawingTip1 || t('vc.drawing.point.drawTip1')
    }

    const stop = () => {
      if (drawStatus.value === DrawStatus.Drawing) {
        points.value.pop()
      }
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = false
      drawTipPosition.value = [0, 0, 0]
    }

    const handleMouseClick = (movement, options?) => {
      const { viewer, drawingVm, getWorldPosition, selectedDrawingOption } = $services

      if (options.button === 2 && options.ctrl) {
        const drawingsOption = (drawingVm.proxy as any).drawingsOptions.find(v => v.name === 'point')
        ;(drawingVm.proxy as any).toggleAction(drawingsOption)
        return
      }

      // if (drawStatus.value === DrawStatus.AfterDraw) {
      //   startNew()
      // }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : points.value.length - 1
      const point: PointDrawing = points.value[index]

      if (options.button === 2 && editingPoint.value) {
        ;(drawingVm.proxy as any).editingDrawingName = undefined
        points.value[index] = restorePoint
        drawStatus.value = DrawStatus.AfterDraw
        points.value[index].drawStatus = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip.drawTip1 || t('vc.drawing.point.drawTip1')
        return
      }

      if (options.button !== 0) {
        return
      }

      const { defined } = Cesium
      let type = 'new'
      if (drawStatus.value === DrawStatus.BeforeDraw) {
        const scene = viewer.scene
        const position = getWorldPosition(scene, movement, {} as any)

        if (!defined(position)) {
          return
        }

        point.position = position
        point.show = true
        point.drawStatus = DrawStatus.AfterDraw
        drawStatus.value = DrawStatus.AfterDraw
        drawTip.value = props.drawtip.drawingTip1 || t('vc.drawing.point.drawTip1')

        nextTick(() => {
          emit(
            'drawEvt',
            {
              index: index,
              points: points,
              name: 'point',
              finished: true,
              position: position,
              windowPoistion: movement,
              type: type
            },
            viewer
          )
        })
      } else {
        drawStatus.value = DrawStatus.AfterDraw
        point.drawStatus = DrawStatus.AfterDraw

        if (editingPoint.value) {
          editingPoint.value = undefined
          ;(drawingVm.proxy as any).editingDrawingName = undefined
          canShowDrawTip.value = false
          type = editorType
        } else {
          if (props.mode === 1) {
            ;(drawingVm.proxy as any).toggleAction(selectedDrawingOption)
          }
        }

        if (selectedDrawingOption) {
          drawTip.value = t('vc.drawing.point.drawTip1')
          canShowDrawTip.value = true
        }

        nextTick(() => {
          emit(
            'drawEvt',
            {
              index: index,
              points: points,
              name: 'point',
              finished: true,
              position: points.value[index].position,
              windowPoistion: movement,
              type: type
            },
            viewer
          )
        })
      }
    }

    const handleMouseMove = movement => {
      if (!canShowDrawTip.value) {
        return
      }

      const { viewer, getWorldPosition } = $services
      const scene = viewer.scene
      const { defined, SceneMode } = Cesium

      if (scene.mode !== SceneMode.MORPHING) {
        const position = getWorldPosition(scene, movement, {} as any)

        if (!defined(position)) {
          return
        }

        drawTipPosition.value = position

        if (drawStatus.value === DrawStatus.AfterDraw) {
          startNew()
        }

        if (drawStatus.value !== DrawStatus.Drawing) {
          return
        }

        const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : points.value.length - 1
        const point: PointDrawing = points.value[index]
        const type = editingPoint.value ? editorType : 'new'

        point.position = position
        point.show = true

        nextTick(() => {
          emit(
            'drawEvt',
            {
              index: index,
              points: point,
              name: 'point',
              finished: false,
              position: position,
              windowPoistion: movement,
              type: type
            },
            viewer
          )
        })
      }
    }

    const onMouseoverPoints = e => {
      const { drawingHandlerActive, viewer } = $services
      if (props.editable && drawStatus.value !== DrawStatus.Drawing && drawingHandlerActive) {
        e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.5
        removeTimeout()
        registerTimeout(() => {
          mouseoverPoint.value = e.pickedFeature.primitive
          editorPosition.value = e.pickedFeature.primitive.position
          showEditor.value = true
          canShowDrawTip.value = false
          drawTipPosition.value = [0, 0, 0]
        }, props.editorOpts.delay)
      }

      emit(
        'mouseEvt',
        {
          type: e.type,
          name: 'point',
          target: e
        },
        viewer
      )
    }

    const onMouseoutPoints = e => {
      const { viewer, selectedDrawingOption } = $services
      if (props.editable) {
        e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.0
        removeTimeout()
        registerTimeout(() => {
          editorPosition.value = [0, 0, 0]
          mouseoverPoint.value = undefined
          showEditor.value = false
        }, props.editorOpts.hideDelay)
        selectedDrawingOption && (canShowDrawTip.value = true)
      }

      emit(
        'mouseEvt',
        {
          type: e.type,
          name: 'point',
          target: e
        },
        viewer
      )
    }

    const onMouseenterEditor = evt => {
      removeTimeout()
    }

    const onMouseleaveEditor = evt => {
      removeTimeout()
      registerTimeout(() => {
        editorPosition.value = [0, 0, 0]
        mouseoverPoint.value.pixelSize = props.pointOpts.pixelSize * 1.0
        mouseoverPoint.value = undefined
        showEditor.value = false
      }, props.editorOpts.hideDelay)
    }

    const onEditorClick = e => {
      editorPosition.value = [0, 0, 0]
      showEditor.value = false

      if (!props.editable) {
        return
      }
      editorType = e
      const { viewer, drawingVm } = $services
      if (e === 'move') {
        drawTip.value = t('vc.drawing.point.drawTip3')
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        canShowDrawTip.value = true
        restorePoint = Object.assign({}, points.value[editingPoint.value._vcPolylineIndx])
        ;(drawingVm.proxy as any).editingDrawingName = 'point'
      } else if (e === 'remove') {
        const index = mouseoverPoint.value._vcPolylineIndx
        points.value.splice(index, 1)
      }

      emit(
        'editorEvt',
        {
          type: e,
          name: 'point',
          points: points,
          index: mouseoverPoint.value._vcPolylineIndx
        },
        viewer
      )
    }

    const clear = () => {
      points.value = []
      stop()
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcDrawingPoint'
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    // expose public methods
    const publicMethods = { points, startNew, stop, clear, handleMouseClick, handleMouseMove }
    Object.assign(instance.proxy, publicMethods)

    return () => {
      const { createGuid } = Cesium

      const children = []
      const pointsRender = []
      points.value.forEach((point, index) => {
        pointsRender.push({
          show: point.show,
          position: point.position,
          id: createGuid(),
          _vcPolylineIndx: index, // for editor
          ...props.pointOpts
        })
      })
      children.push(
        h(VcCollectionPoint, {
          enableMouseEvent: props.enableMouseEvent,
          points: pointsRender,
          onMouseover: onMouseoverPoints,
          onMouseout: onMouseoutPoints,
          onReady: onVcCollectionPointReady
        })
      )

      if (props.drawtip.show && canShowDrawTip.value) {
        const { viewer } = $services
        children.push(
          h(
            VcOverlayHtml,
            {
              position: drawTipPosition.value,
              pixelOffset: props.drawtip.pixelOffset,
              teleport: {
                to: viewer.container
              }
            },
            () =>
              h(
                'div',
                {
                  class: 'vc-drawtip vc-tooltip--style'
                },
                drawTip.value
              )
          )
        )
      }

      if (showEditor.value) {
        const buttons = []
        if (mouseoverPoint.value) {
          const editorOpts = props.editorOpts
          for (const key in editorOpts) {
            if (!Array.isArray(editorOpts[key]) && typeof editorOpts[key] !== 'number') {
              const opts = {
                ...editorOpts[key]
              }
              delete opts.color

              buttons.push(
                h(
                  VcBtn,
                  {
                    style: { color: editorOpts[key].color, background: editorOpts[key].background },
                    ...opts,
                    onclick: onEditorClick.bind(undefined, key)
                  },
                  () =>
                    h(
                      VcTooltip,
                      {
                        ...editorOpts[key].tooltip
                      },
                      () => h('strong', null, editorOpts[key].tooltip?.tip || t(`vc.drawing.editor.${key}`))
                    )
                )
              )
            }
          }
        }

        const { viewer } = $services
        children.push(
          h(
            VcOverlayHtml,
            {
              position: editorPosition.value,
              pixelOffset: props.editorOpts?.pixelOffset,
              teleport: {
                to: viewer.container
              },
              onMouseenter: onMouseenterEditor,
              onMouseleave: onMouseleaveEditor
            },
            () =>
              h(
                'div',
                {
                  class: 'vc-editor'
                },
                buttons
              )
          )
        )
      }
      return h(
        VcCollectionPrimitive,
        {
          ref: primitiveCollectionRef,
          show: props.show,
          onReady: onPrimitiveCollectionReady
        },
        () => children
      )
    }
  }
})
