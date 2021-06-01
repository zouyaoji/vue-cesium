import { defineComponent, getCurrentInstance, ref, h, computed, nextTick } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive } from '@vue-cesium/primitives'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { makeMaterial, restoreViewerCursor, setViewerCursor } from '@vue-cesium/utils/cesium-helpers'
import { VerticalMeasurementPolylineSegment } from '../measure.types'
import { DrawStatus } from '@vue-cesium/shared'
import VcInstanceGeometry from '@vue-cesium/geometry-instance'
import { VcGeometryPolyline } from '@vue-cesium/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { MeasureUnits } from '@vue-cesium/shared'

export default defineComponent({
  name: 'VcMeasurementVertical',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'measureEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurementVertical'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    const polylines = ref<Array<VerticalMeasurementPolylineSegment>>([])
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

    // methods
    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }

    // computed
    const polylinesRender = computed<Array<VerticalMeasurementPolylineSegment>>(() => {
      const results: Array<VerticalMeasurementPolylineSegment> = []
      const { Cartesian3 } = Cesium
      polylines.value.forEach((polylineSegment, index) => {
        const startPosition = polylineSegment.positions[0]
        const endPosition = polylineSegment.positions[1]
        const distance = Cartesian3.distance(startPosition, endPosition)
        const labelPosition = Cartesian3.midpoint(startPosition, endPosition, {} as any)
        const polyline: VerticalMeasurementPolylineSegment = {
          ...polylineSegment,
          distance,
          labelPosition
        }

        results.push(polyline)
      })
      return results
    })

    const startNew = () => {
      const { Cartesian3, Plane } = Cesium
      const polyline: VerticalMeasurementPolylineSegment = {
        positions: [new Cartesian3(), new Cartesian3()],
        drawStatus: DrawStatus.BeforeDraw,
        draggingPlane: new Plane(Cartesian3.UNIT_X, 0),
        surfaceNormal: new Cartesian3(),
        show: false
      }

      polylines.value.push(polyline)
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = true
      drawTip.value = props.drawtip.drawingTip1 || t('vc.measurement.vertical.drawTip1')
    }

    const stop = () => {
      if (drawStatus.value === DrawStatus.Drawing) {
        polylines.value.pop()
      }
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = false
      drawTipPosition.value = [0, 0, 0]
    }

    const handleMouseClick = (movement, options?) => {
      const { viewer, measurementVm, selectedMeasurementOption, getWorldPosition } = $services

      if (options.button === 2 && options.ctrl) {
        const measurementsOption = (measurementVm.proxy as any).measurementsOptions.find(v => v.name === 'vertical')
        ;(measurementVm.proxy as any).toggleAction(measurementsOption)
        return
      }

      if (drawStatus.value === DrawStatus.AfterDraw) {
        startNew()
      }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: VerticalMeasurementPolylineSegment = polylines.value[index]
      const positions = polyline.positions

      if (options.button === 2 && editingPoint.value) {
        (measurementVm.proxy as any).editingMeasurementName = undefined
        restoreViewerCursor(viewer)
        polyline.positions[editingPoint.value._index] = restorePosition
        drawStatus.value = DrawStatus.AfterDraw
        polyline.drawStatus = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.vertical.drawTip1')
        return
      }

      if (options.button !== 0) {
        return
      }

      const { defined } = Cesium

      if (drawStatus.value === DrawStatus.BeforeDraw) {
        const scene = viewer.scene
        const position = getWorldPosition(scene, movement, {} as any)
        const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid

        if (!defined(position)) {
          return
        }
        positions[0] = position
        positions[1] = position
        polyline.show = true
        polyline.drawStatus = DrawStatus.Drawing
        drawStatus.value = DrawStatus.Drawing
        polyline.surfaceNormal = ellipsoid.geodeticSurfaceNormal(position, polyline.surfaceNormal)
        drawTip.value = props.drawtip.drawingTip2 || t('vc.measurement.vertical.drawTip2')
        nextTick(() => {
          emit('measureEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: 'vertical',
            finished: false,
            position: position,
            windowPoistion: movement
          }, polylinesRender.value[index]))
        })
      } else {
        drawStatus.value = DrawStatus.AfterDraw
        polyline.drawStatus = DrawStatus.AfterDraw

        if (editingPoint.value) {
          editingPoint.value = undefined
          ; (measurementVm.proxy as any).editingMeasurementName = undefined
          restoreViewerCursor(viewer)
          canShowDrawTip.value = false
        }

        if (selectedMeasurementOption) {
          drawTip.value = t('vc.measurement.vertical.drawTip1')
          canShowDrawTip.value = true
        }

        nextTick(() => {
          emit('measureEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: 'vertical',
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
      const { defined } = Cesium
      if (!defined(position)) {
        return
      }

      drawTipPosition.value = position

      if (drawStatus.value !== DrawStatus.Drawing) {
        return
      }
      if (scene.mode === Cesium.SceneMode.SCENE2D) {
        return
      }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: VerticalMeasurementPolylineSegment = polylines.value[index]
      const heightPostion = getHeightPosition(polyline, movement)

      if (defined(heightPostion)) {
        const positions = polyline.positions
        positions[editingPoint.value ? editingPoint.value._index : 1] = heightPostion

        nextTick(() => {
          emit('measureEvt', Object.assign({
            index: index,
            polylines: polylines,
            type: 'vertical',
            finished: false,
            position: position,
            windowPoistion: movement
          }, polylinesRender.value[index]))
        })
      }
    }

    const getHeightPosition = (polyline: VerticalMeasurementPolylineSegment, movement: Cesium.Cartesian2) => {
      const { defined, SceneMode, Cartesian3, IntersectionTests, Plane, SceneTransforms, Ray } = Cesium
      const { viewer } = $services
      const scene = viewer.scene
      const camera = scene.camera
      const direction = camera.direction
      const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
      const positions = polyline.positions
      const p1 = positions[0]
      let startPoint = p1
      let endPoint = positions[1]
      let draggingPlane = polyline.draggingPlane
      let surfaceNormal = polyline.surfaceNormal
      let normal = surfaceNormal

      if (scene.mode === SceneMode.COLUMBUS_VIEW) {
        normal = Cartesian3.UNIT_X
        const startPointCartographic = ellipsoid.cartesianToCartographic(p1, {} as any)
        startPoint = scene.mapProjection.project(startPointCartographic, {} as any)
        Cartesian3.fromElements(startPoint.z, startPoint.x, startPoint.y, startPoint)
      }

      let forward = Cartesian3.cross(normal, direction, {} as any) // m
      forward = Cartesian3.cross(normal, forward, forward)
      forward = Cartesian3.normalize(forward, forward)
      draggingPlane = Plane.fromPointNormal(startPoint, forward, draggingPlane)
      const ray = camera.getPickRay(movement, new Ray())
      endPoint = IntersectionTests.rayPlane(ray, draggingPlane, {} as any)
      if (defined(endPoint)) {
        if (scene.mode === SceneMode.COLUMBUS_VIEW) {
          endPoint = Cartesian3.fromElements(endPoint.y, endPoint.z, endPoint.x, endPoint)
          const endPointCartographic = scene.mapProjection.unproject(endPoint, {} as any)
          endPoint = ellipsoid.cartographicToCartesian(endPointCartographic, endPoint)
        }

        if (SceneTransforms.wgs84ToWindowCoordinates(scene, positions[0], {} as any).y < movement.y) {
          surfaceNormal = Cartesian3.negate(surfaceNormal, {} as any)
        }
        let diffrence = Cartesian3.subtract(endPoint, p1, {} as any)
        diffrence = Cartesian3.projectVector(diffrence, surfaceNormal, diffrence)
        endPoint = Cartesian3.add(p1, diffrence, endPoint)
        return endPoint
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
        const { viewer, selectedMeasurementOption } = $services
        e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.0
        editorPosition.value = [0, 0, 0]
        mouseoverPoint.value = undefined
        showEditor.value = false

        if (!editingPoint.value && drawStatus.value !== DrawStatus.Drawing) {
          restoreViewerCursor(viewer)
        }

        selectedMeasurementOption && (canShowDrawTip.value = true)
      }
    }

    const onEditorClick = e => {
      editorPosition.value = [0, 0, 0]
      showEditor.value = false

      if (!props.editable) {
        return
      }

      const { viewer, measurementVm } = $services
      if (e === 'move') {
        drawTip.value = t('vc.measurement.vertical.drawTip3')
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        canShowDrawTip.value = true
        restorePosition = polylines.value[editingPoint.value._vcPolylineIndx].positions[editingPoint.value._index]
        ; (measurementVm.proxy as any).editingMeasurementName = 'vertical'
        setViewerCursor(viewer, 'move')
      } else if (e === 'remove') {
        const index = mouseoverPoint.value._vcPolylineIndx
        const polyline = polylines.value[index]
        polyline.positions.splice(mouseoverPoint.value._index, 1)
        // restoreViewerCursor(viewer)
      } else if (e === 'removeAll') {
        const index = mouseoverPoint.value._vcPolylineIndx
        polylines.value.splice(index, 1)
        // restoreViewerCursor(viewer)
      }
    }

    const clear = () => {
      polylines.value = []
      stop()
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcMeasurementVertical'
    }

    // expose public methods
    const publicMethods = { polylines, polylinesRender, startNew, stop, clear, handleMouseClick, handleMouseMove }
    Object.assign(instance.proxy, publicMethods)

    return () => {
      const { PolylineMaterialAppearance, Ellipsoid, createGuid, defaultValue } = Cesium

      const polylineOpts = {
        width: props.polylineOpts.width,
        vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT,
        ellipsoid: defaultValue(props.polylineOpts.ellipsoid, Ellipsoid.WGS84),
        arcType: props.polylineOpts.arcType
      }
      const children = []
      polylinesRender.value.forEach((polyline, index) => {
        if (polyline.positions.length > 1) {
          // polyline
          children.push(h(VcPrimitive, {
            show: polyline.show,
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
          }, () => h(VcGeometryPolyline, {
            positions: polyline.positions,
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
            ...props.pointOpts
          })),
          onMouseover: onMouseoverPoints,
          onMouseout: onMouseoutPoints
        }))

        // label
        const labels = []
        labels.push({
          position: polyline.labelPosition,
          id: createGuid(),
          text: MeasureUnits.distanceToString(polyline.distance, props.measureUnits.distanceUnits, props.locale, props.decimals.distance),
          ...props.labelOpts
        })

        children.push(h(VcCollectionLabel, {
          enableMouseEvent: props.enableMouseEvent,
          show: polyline.show,
          labels: labels
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
                }, () => h('strong', null, editorOpts[key].tooltip?.tip || t(`vc.measurement.editor.${key}`))))
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
