import { defineComponent, getCurrentInstance, ref, h, computed, nextTick, watch, onUnmounted } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcCollectionPoint, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { restoreViewerCursor, setViewerCursor } from '@vue-cesium/utils/cesium-helpers'
import { DrawStatus } from '@vue-cesium/shared'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { PointDrawing } from '../drawing.types'

export default defineComponent({
  name: 'VcDrawingPoint',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt'],
  setup (props, ctx) {
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
    // watch
    unwatchFns.push(watch(
      () => props.editable,
      val => {
        const { drawingVm, selectedDrawingOption } = $services
        if (val && selectedDrawingOption?.name === 'point') {
          (drawingVm.proxy as any).toggleAction(selectedDrawingOption)
        }
      }
    ))

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
          ; (drawingVm.proxy as any).toggleAction(drawingsOption)
        return
      }

      // if (drawStatus.value === DrawStatus.AfterDraw) {
      //   startNew()
      // }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : points.value.length - 1
      const point: PointDrawing = points.value[index]

      if (options.button === 2 && editingPoint.value) {
        (drawingVm.proxy as any).editingDrawingName = undefined
        restoreViewerCursor(viewer)
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
          emit('drawEvt', {
            index: index,
            points: points,
            name: 'point',
            finished: true,
            position: position,
            windowPoistion: movement
          })
        })
      } else {
        drawStatus.value = DrawStatus.AfterDraw
        point.drawStatus = DrawStatus.AfterDraw

        if (editingPoint.value) {
          editingPoint.value = undefined
          ; (drawingVm.proxy as any).editingDrawingName = undefined
          restoreViewerCursor(viewer)
          canShowDrawTip.value = false
        }

        if (selectedDrawingOption) {
          drawTip.value = t('vc.drawing.point.drawTip1')
          canShowDrawTip.value = true
        }

        nextTick(() => {
          emit('drawEvt', {
            index: index,
            points: points,
            name: 'point',
            finished: true,
            position: points.value[index].position,
            windowPoistion: movement
          })
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

        point.position = position
        point.show = true

        nextTick(() => {
          emit('drawEvt', {
            index: index,
            points: point,
            name: 'point',
            finished: false,
            position: position,
            windowPoistion: movement
          })
        })
      }
    }

    const onMouseoverPoints = e => {
      const { drawingHandlerActive, viewer } = $services
      if (props.editable && drawStatus.value !== DrawStatus.Drawing && drawingHandlerActive) {
        e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.5
        mouseoverPoint.value = e.pickedFeature.primitive
        editorPosition.value = e.pickedFeature.primitive.position
        showEditor.value = true
        canShowDrawTip.value = false
        setViewerCursor(viewer, 'pointer')
      }
    }
    const onMouseoutPoints = e => {
      if (props.editable) {
        const { viewer, selectedDrawingOption } = $services
        e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.0
        editorPosition.value = [0, 0, 0]
        mouseoverPoint.value = undefined
        showEditor.value = false

        if (!editingPoint.value && drawStatus.value !== DrawStatus.Drawing) {
          restoreViewerCursor(viewer)
        }

        selectedDrawingOption && (canShowDrawTip.value = true)
      }
    }

    const onEditorClick = e => {
      editorPosition.value = [0, 0, 0]
      showEditor.value = false

      if (!props.editable) {
        return
      }

      const { viewer, drawingVm } = $services
      if (e === 'move') {
        drawTip.value = t('vc.drawing.point.drawTip3')
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        canShowDrawTip.value = true
        restorePoint = Object.assign({}, points.value[editingPoint.value._vcPolylineIndx])
        ; (drawingVm.proxy as any).editingDrawingName = 'point'
        setViewerCursor(viewer, 'move')
      } else if (e === 'remove') {
        const index = mouseoverPoint.value._vcPolylineIndx
        points.value.splice(index, 1)
      }
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
      points.value.forEach((point, index) => {

        // point
        children.push(h(VcCollectionPoint, {
          enableMouseEvent: props.enableMouseEvent,
          show: point.show,
          points: [{
            position: point.position,
            id: createGuid(),
            _vcPolylineIndx: index, // for editor
            ...props.pointOpts
          }],
          onMouseover: onMouseoverPoints,
          onMouseout: onMouseoutPoints
        }))
      })

      if (props.drawtip.show && canShowDrawTip.value) {
        const { viewer } = $services
        children.push(h(VcOverlayHtml, {
          position: drawTipPosition.value,
          pixelOffset: props.drawtip.pixelOffset,
          teleport: {
            to: viewer.container
          }
        }, () => h('div', {
          class: 'vc-drawtip vc-tooltip--style'
        }, drawTip.value)))
      }

      if (showEditor.value) {
        const buttons = []
        if (mouseoverPoint.value) {
          const editorOpts = props.editorOpts
          for (const key in editorOpts) {
            if (!Array.isArray(editorOpts[key])) {
              const opts = {
                ...editorOpts[key]
              }
              delete opts.color

              buttons.push(
                h(VcBtn, {
                  style: { color: editorOpts[key].color, background: editorOpts[key].background },
                  ...opts,
                  onclick: onEditorClick.bind(undefined, key)
                }, () => h(VcTooltip, {
                  ...editorOpts[key].tooltip
                }, () => h('strong', null, editorOpts[key].tooltip?.tip || t(`vc.drawing.editor.${key}`))))
              )
            }
          }
        }

        const { viewer } = $services
        children.push(h(VcOverlayHtml, {
          position: editorPosition.value,
          pixelOffset: props.editorOpts?.pixelOffset,
          teleport: {
            to: viewer.container
          }
        }, () => h('div', {
          class: 'vc-editor'
        }, buttons)))
      }
      return h(VcCollectionPrimitive, {
        ref: primitiveCollectionRef,
        show: props.show,
        onReady: onPrimitiveCollectionReady
      }, () => children)
    }
  }
})
