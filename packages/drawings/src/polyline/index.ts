import { defineComponent, getCurrentInstance, ref, h, nextTick, toRef } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive, VcPrimitiveGroundPolyline } from '@vue-cesium/primitives'
import { VcCollectionPoint, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { makeMaterial } from '@vue-cesium/utils/cesium-helpers'
import VcInstanceGeometry from '@vue-cesium/geometry-instance'
import { VcGeometryPolyline, VcGeometryPolylineGround } from '@vue-cesium/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { usePolylineDrawing } from '@vue-cesium/composables'
import { DrawStatus } from '@vue-cesium/shared'

export default defineComponent({
  name: 'VcDrawingPolyline',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcDrawingPolyline'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx
    const drawTip = toRef(props, 'drawtip')
    drawTip.value.drawTip1 = drawTip.value.drawingTip1 || t('vc.drawing.polyline.drawTip1')
    drawTip.value.drawTip2 = drawTip.value.drawingTip2 || t('vc.drawing.polyline.drawTip2')
    drawTip.value.drawTip3 = drawTip.value.drawingTip3 || t('vc.drawing.polyline.drawTip3')
    const polylineDrawingState = usePolylineDrawing(props, $services, drawTip.value)
    const primitiveCollectionRef = ref<VcComponentPublicInstance>(null)

    // methods
    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }

    const handleMouseClick = (movement: Cesium.Cartesian2, options?) => {
      const result = polylineDrawingState.handleMouseClick(movement, options)
      const { defined } = Cesium

      if (defined(result)) {
        const { drawingVm, selectedDrawingOption } = $services
        if (defined(result.position)) {
          if (result.type !== 'new') {
            (drawingVm.proxy as any).editingDrawingName = undefined
            polylineDrawingState.canShowDrawTip.value = defined(selectedDrawingOption)
          }
          nextTick(() => {
            emit('drawEvt', Object.assign(result, {
              name: 'polyline'
            }))
          })
        } else {
          const drawingsOption = (drawingVm.proxy as any).drawingsOptions.find(v => v.name === 'polyline')
          ;(drawingVm.proxy as any).toggleAction(drawingsOption)
        }
      }
    }

    const handleMouseMove = (movement: Cesium.Cartesian2) => {
      const result = polylineDrawingState.handleMouseMove(movement)
      const { defined } = Cesium
      if (defined(result)) {
        if (defined(result.position)) {
          nextTick(() => {
            emit('drawEvt', Object.assign(result, {
              name: 'polyline'
            }))
          })
        }
      }
    }

    const handleDoubleClick = movement => {
      const result = polylineDrawingState.handleDoubleClick(movement)
      const { defined } = Cesium
      if (defined(result)) {
        if (defined(result.position)) {
          nextTick(() => {
            emit('drawEvt', Object.assign(result, {
              name: 'polyline'
            }))
          })
        }
      }
    }

    const startNew = () => {
      polylineDrawingState.startNew()
    }

    const stop = () => {
      polylineDrawingState.stop()
    }

    const clear = () => {
      polylineDrawingState.polylines.value = []
      stop()
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcDrawingPolyline'
    }

    const onEditorClick = e => {
      polylineDrawingState.onEditorClick(e)
      const { drawingVm } = $services
        ; (drawingVm.proxy as any).editingDrawingName = 'polyline'
    }

    // expose public methods
    const publicMethods = {
      polylines: polylineDrawingState.polylines, startNew, stop, clear, handleMouseClick, handleMouseMove, handleDoubleClick
    }
    Object.assign(instance.proxy, publicMethods)

    return () => {
      const { PolylineMaterialAppearance, Ellipsoid, createGuid, defaultValue } = Cesium

      const polylineOpts: any = {
        ...props.polylineOpts,
        vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT
      }
      props.clampToGround && delete polylineOpts.arcType
      const children = []
      polylineDrawingState.polylines.value.forEach((polyline, index) => {
        if (polyline.positions.length > 1) {
          // polyline
          children.push(
            h(props.clampToGround ? VcPrimitiveGroundPolyline : VcPrimitive, {
              show: polyline.show,
              enableMouseEvent: props.enableMouseEvent,
              appearance: new PolylineMaterialAppearance({
                material: makeMaterial.call(instance, props.polylineOpts.material) as Cesium.Material
              }),
              depthFailAppearance: new PolylineMaterialAppearance({
                material: makeMaterial.call(instance, props.polylineOpts.depthFailMaterial) as Cesium.Material
              }),
              asynchronous: false
            }, () => h(VcInstanceGeometry, {
              id: createGuid()
            }, () => h(props.clampToGround ? VcGeometryPolylineGround : VcGeometryPolyline, {
              positions: polyline.positions,
              ...polylineOpts
            })))
          )
        }
        // points
        children.push(
          h(VcCollectionPoint, {
            enableMouseEvent: props.enableMouseEvent,
            show: polyline.show,
            points: polyline.positions.map(position => ({
              position: position,
              id: createGuid(),
              _vcPolylineIndx: index, // for editor
              ...props.pointOpts,
              show: props.pointOpts.show || props.editable || polyline.drawStatus === DrawStatus.Drawing
            })),
            onMouseover: polylineDrawingState.onMouseoverPoints,
            onMouseout: polylineDrawingState.onMouseoutPoints
          })
        )
      })

      if (props.drawtip.show && polylineDrawingState.canShowDrawTip.value) {
        const { viewer } = $services
        children.push(
          h(VcOverlayHtml, {
            position: polylineDrawingState.drawTipPosition.value,
            pixelOffset: props.drawtip.pixelOffset,
            teleport: {
              to: viewer.container
            }
          }, () => h('div', {
            class: 'vc-drawtip vc-tooltip--style'
          }, polylineDrawingState.drawTip.value))
        )
      }

      if (polylineDrawingState.showEditor.value) {
        const buttons = []
        if (polylineDrawingState.mouseoverPoint.value) {
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
          position: polylineDrawingState.editorPosition.value,
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
