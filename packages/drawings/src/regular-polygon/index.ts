import { defineComponent, getCurrentInstance, ref, h, computed, nextTick } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive, VcPrimitiveGround, VcPrimitiveGroundPolyline } from '@vue-cesium/primitives'
import { VcCollectionPoint, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { makeMaterial, setViewerCursor, restoreViewerCursor, getGeodesicDistance, getHeadingPitchRoll, getPolylineSegmentEndpoint } from '@vue-cesium/utils/cesium-helpers'
import { DrawStatus } from '@vue-cesium/shared'
import VcInstanceGeometry from '@vue-cesium/geometry-instance'
import { VcGeometryPolygon, VcGeometryPolyline, VcGeometryPolylineGround } from '@vue-cesium/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { PolygonDrawing } from '../drawing.types'

export default defineComponent({
  name: 'VcDrawingRegularPolygon',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcDrawingRegularPolygon'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    const polylines = ref<Array<PolygonDrawing>>([])
    const drawStatus = ref(DrawStatus.BeforeDraw)
    const canShowDrawTip = ref(false)
    const drawTipPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
    const drawTip = ref('')
    const showEditor = ref(false)
    const editorPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
    const mouseoverPoint = ref(null)
    const editingPoint = ref(null)
    const primitiveCollectionRef = ref<VcComponentPublicInstance>(null)
    let restorePosition = undefined
    let drawName = 'rectangle'
    if (props.edge === 4) {
      drawName = 'rectangle'
    } else if (props.edge === 360) {
      drawName = 'circle'
    }
    // computed
    const polylinesRender = computed<Array<PolygonDrawing>>(() => {
      const results: Array<PolygonDrawing> = []
      const { defined, Cartographic } = Cesium
      polylines.value.forEach((polylineSegment, index) => {
        const startPosition = polylineSegment.positions[0]
        const endPosition = polylineSegment.positions[1]

        const hpr = getHeadingPitchRoll(startPosition, endPosition, $services.viewer.scene)
        if (defined(hpr)) {
          const positions = []
          const startCartographic = Cartographic.fromCartesian(startPosition)
          const endCartographic = Cartographic.fromCartesian(endPosition)

          !props.clampToGround && (endCartographic.height = startCartographic.height)
          positions.push(Cartographic.toCartesian(endCartographic))
          const distance = getGeodesicDistance(startPosition, endPosition)
          for (let i = 0; i < props.edge - 1; i++) {
            const position = getPolylineSegmentEndpoint(startPosition, hpr[0] += Math.PI * 2 / props.edge, distance)
            positions.push(position)
          }

          const cartographic = Cartographic.fromCartesian(startPosition)

          const polyline: PolygonDrawing = {
            ...polylineSegment,
            polygonPositions: positions,
            height: cartographic.height
          }

          results.push(polyline)
        }
      })
      return results
    })
    // methods
    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }

    const startNew = () => {
      const polyline: PolygonDrawing = {
        positions: [],
        polygonPositions: [],
        show: false,
        drawStatus: DrawStatus.BeforeDraw
      }

      polylines.value.push(polyline)
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = true
      drawTip.value = props.drawtip.drawTip1 || t(`vc.drawing.${drawName}.drawTip1`)
    }

    const stop = () => {
      if (drawStatus.value === DrawStatus.Drawing) {
        polylines.value.pop()
      }
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = false
      drawTipPosition.value = [0, 0, 0]
    }

    const handleMouseClick = (movement: Cesium.Cartesian2, options?) => {
      const { viewer, drawingVm: drawingVm, selectedDrawingOption, getWorldPosition } = $services

      if (options.button === 2 && options.ctrl) {
        const drawingsOption = (drawingVm.proxy as any).drawingsOptions.find(v => v.name === drawName)
          ; (drawingVm.proxy as any).toggleAction(drawingsOption)
        return
      }

      if (drawStatus.value === DrawStatus.AfterDraw) {
        startNew()
      }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: PolygonDrawing = polylines.value[index]
      const positions = polyline.positions

      if (options.button === 2 && editingPoint.value) {
        (drawingVm.proxy as any).editingDrawingName = undefined
        restoreViewerCursor(viewer)
        polyline.positions[editingPoint.value._index] = restorePosition
        drawStatus.value = DrawStatus.AfterDraw
        polyline.drawStatus = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip.drawTip1 || t(`vc.drawing.${drawName}.drawTip1`)
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
        positions[0] = position
        positions[1] = position
        polyline.show = true
        drawStatus.value = DrawStatus.Drawing
        polyline.drawStatus = DrawStatus.Drawing
        drawTip.value = props.drawtip.drawTip2 || t(`vc.drawing.${drawName}.drawTip2`)
        nextTick(() => {
          emit('drawEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: drawName,
            finished: false,
            position: position,
            windowPoistion: movement
          }, polylinesRender.value[index]))
        })
      } else {
        polyline.drawStatus = DrawStatus.AfterDraw
        drawStatus.value = DrawStatus.AfterDraw

        if (editingPoint.value) {
          editingPoint.value = undefined
          ; (drawingVm.proxy as any).editingDrawingName = undefined
          restoreViewerCursor(viewer)
          canShowDrawTip.value = false
          drawTipPosition.value = [0, 0, 0]
        }

        if (selectedDrawingOption) {
          drawTip.value = props.drawtip.drawTip1 || t(`vc.drawing.${drawName}.drawTip1`)
          canShowDrawTip.value = true
        }

        nextTick(() => {
          emit('drawEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: drawName,
            finished: true,
            position: polyline.positions[1],
            windowPoistion: movement
          }, polylinesRender.value[index]))
        })
      }
    }

    const handleMouseMove = movement => {
      if (!canShowDrawTip.value) {
        return
      }

      const { viewer, getWorldPosition } = $services
      const scene = viewer.scene
      const position = getWorldPosition(scene, movement, {} as any)
      const { defined, Cartographic } = Cesium
      if (!defined(position)) {
        return
      }

      drawTipPosition.value = position

      if (drawStatus.value !== DrawStatus.Drawing) {
        return
      }

      if (defined(position)) {
        const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
        const polyline: PolygonDrawing = polylines.value[index]
        const positions = polyline.positions
        const startPosition = positions[0]
        const startCartographic = Cartographic.fromCartesian(startPosition)
        const endCartographic = Cartographic.fromCartesian(position)
        !props.clampToGround && (endCartographic.height = startCartographic.height)
        positions[editingPoint.value ? editingPoint.value._index : 1] = Cartographic.toCartesian(endCartographic)

        nextTick(() => {
          emit('drawEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: drawName,
            finished: false,
            position: polyline.positions[1],
            windowPoistion: movement
          }, polylinesRender.value[index]))
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
        drawTipPosition.value = [0, 0, 0]
        setViewerCursor(viewer, 'pointer')
      }
    }

    const onMouseoutPoints = e => {
      if (props.editable) {
        const { viewer, selectedDrawingOption } = $services

        if (!editingPoint.value && drawStatus.value !== DrawStatus.Drawing) {
          restoreViewerCursor(viewer)
          e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.0
          editorPosition.value = [0, 0, 0]
          mouseoverPoint.value = undefined
          showEditor.value = false
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
        drawTip.value = props.drawtip.drawTip3 || t(`vc.drawing.${drawName}.drawTip3`)
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        restorePosition = polylines.value[editingPoint.value._vcPolylineIndx].positions[editingPoint.value._index]
        canShowDrawTip.value = true
        ; (drawingVm.proxy as any).editingDrawingName = drawName
        // restoreViewerCursor(viewer)
        setViewerCursor(viewer, 'move')
      } else if (e === 'remove') {
        const index = mouseoverPoint.value._vcPolylineIndx
        const polyline = polylines.value[index]
        polyline.positions.splice(mouseoverPoint.value._index, 1)
      } else if (e === 'removeAll') {
        restoreViewerCursor(viewer)
        const index = mouseoverPoint.value._vcPolylineIndx
        polylines.value.splice(index, 1)
      }
    }

    const clear = () => {
      polylines.value = []
      stop()
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcDrawingRegularPolygon'
    }

    // expose public methods
    const publicMethods = { polylines, polylinesRender, startNew, stop, clear, handleMouseClick, handleMouseMove }
    Object.assign(instance.proxy, publicMethods)

    return () => {
      const { PolylineMaterialAppearance, MaterialAppearance, createGuid } = Cesium

      const polylineOpts: any = {
        ...props.polylineOpts,
        vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT
      }
      props.clampToGround && delete polylineOpts.arcType
      const children = []
      polylinesRender.value.forEach((polyline, index) => {
        if (polyline.polygonPositions.length > 1) {
          // polyline
          const positions = polyline.polygonPositions.slice()
          positions.push(positions[0])
          children.push(
            h(props.clampToGround ? VcPrimitiveGroundPolyline : VcPrimitive, {
              show: polyline.show && polylineOpts.show,
              enableMouseEvent: props.enableMouseEvent,
              appearance: new PolylineMaterialAppearance({
                material: makeMaterial.call(instance, props.polylineOpts.material) as Cesium.Material
              }),
              depthFailAppearance: new PolylineMaterialAppearance({
                material: makeMaterial.call(instance, props.polylineOpts.depthFailMaterial) as Cesium.Material
              }),
              asynchronous: false,
            }, () => h(VcInstanceGeometry, {
              id: createGuid()
            }, () => h(props.clampToGround ? VcGeometryPolylineGround : VcGeometryPolyline, {
              positions: positions,
              ...polylineOpts
            }))))
        }
        // point
        children.push(h(VcCollectionPoint, {
          enableMouseEvent: props.enableMouseEvent,
          show: polyline.show,
          points: polyline.positions.map(position => ({
            position: position,
            id: createGuid(),
            _vcPolylineIndx: index, // for editor
            ...props.pointOpts,
            show: props.pointOpts.show || props.editable || polyline.drawStatus === DrawStatus.Drawing
          })),
          onMouseover: onMouseoverPoints,
          onMouseout: onMouseoutPoints
        }))
        if (polyline.polygonPositions.length > 2) {
          // polygon
          children.push(
            h(props.clampToGround ? VcPrimitiveGround : VcPrimitive, {
              show: polyline.show && props.polygonOpts.show,
              enableMouseEvent: props.enableMouseEvent,
              appearance: new MaterialAppearance({
                material: makeMaterial.call(instance, props.polygonOpts.material) as Cesium.Material,
                renderState: {
                  cull: {
                    enabled: false
                  }
                }
              }),
              depthFailAppearance: new MaterialAppearance({
                material: makeMaterial.call(instance, props.polygonOpts.depthFailMaterial) as Cesium.Material,
                renderState: {
                  cull: {
                    enabled: false
                  }
                }
              }),
              asynchronous: false,
            }, () => h(VcInstanceGeometry, {
              id: createGuid(),
            }, () => h(VcGeometryPolygon, {
              polygonHierarchy: polyline.polygonPositions,
              ...props.polygonOpts
            })))
          )
        }
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
