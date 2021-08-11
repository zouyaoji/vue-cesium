import { defineComponent, getCurrentInstance, ref, h, computed, nextTick } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive } from '@vue-cesium/primitives'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { makeMaterial, makeCartesian2, getGeodesicDistance, setViewerCursor, restoreViewerCursor } from '@vue-cesium/utils/cesium-helpers'
import { DistanceMeasurementPolylineSegment, PolylineSegment } from '../measure.types'
import { DrawStatus } from '@vue-cesium/shared'
import VcInstanceGeometry from '@vue-cesium/geometry-instance'
import { VcGeometryPolyline } from '@vue-cesium/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { MeasureUnits } from '@vue-cesium/shared'

export default defineComponent({
  name: 'VcMeasurementDistance',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'measureEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurementDistance'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    const polylines = ref<Array<PolylineSegment>>([])
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
    // computed
    const polylinesRender = computed<Array<DistanceMeasurementPolylineSegment>>(() => {
      const results: Array<DistanceMeasurementPolylineSegment> = []
      const { Cartesian3 } = Cesium
      polylines.value.forEach((polylineSegment, index) => {
        const startPosition = polylineSegment.positions[0]
        const endPosition = polylineSegment.positions[1]
        const distance = props.polylineOpts.arcType === 0 ? Cartesian3.distance(startPosition, endPosition)
          : getGeodesicDistance(startPosition, endPosition, $services.viewer.scene.globe.ellipsoid)
        const labelPosition = Cartesian3.midpoint(startPosition, endPosition, {} as any)
        const polyline: DistanceMeasurementPolylineSegment = {
          ...polylineSegment,
          distance,
          labelPosition
        }
        if (props.showComponentLines) {
          Object.assign(polyline, {
            xyPolylinePositions: [new Cartesian3(), new Cartesian3(), new Cartesian3()],
            xyBoxPositions: [new Cartesian3(), new Cartesian3(), new Cartesian3()],
            xDistance: 0,
            yDistance: 0,
            xAngle: 0,
            yAngle: 0
          })
          updateComponents(polyline)
        }

        results.push(polyline)
      })
      return results
    })
    // methods
    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }
    instance.mount = async () => {
      const { viewer } = $services
      viewer.scene.preRender.addEventListener(updateLabelPosition)
      return true
    }
    instance.unmount = async () => {
      const { viewer } = $services
      viewer.scene.preRender.removeEventListener(updateLabelPosition)
      return true
    }

    const startNew = () => {
      const { Cartesian3 } = Cesium
      const polyline: PolylineSegment = {
        positions: [new Cartesian3(), new Cartesian3()],
        show: false,
        drawStatus: DrawStatus.BeforeDraw
      }

      polylines.value.push(polyline)
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = true
      drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.distance.drawTip1')
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
      const { viewer, measurementVm, selectedMeasurementOption, getWorldPosition } = $services

      if (options.button === 2 && options.ctrl) {
        const measurementsOption = (measurementVm.proxy as any).measurementsOptions.find(
          v => v.name === (props.showComponentLines ? 'component-distance' : 'distance')
        )
        ;(measurementVm.proxy as any).toggleAction(measurementsOption)
        return
      }

      if (drawStatus.value === DrawStatus.AfterDraw) {
        startNew()
      }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: PolylineSegment = polylines.value[index]
      const positions = polyline.positions

      if (options.button === 2 && editingPoint.value) {
        (measurementVm.proxy as any).editingMeasurementName = undefined
        restoreViewerCursor(viewer)
        polyline.positions[editingPoint.value._index] = restorePosition
        drawStatus.value = DrawStatus.AfterDraw
        polyline.drawStatus = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.distance.drawTip1')
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
        drawTip.value = props.drawtip.drawTip2 || t('vc.measurement.distance.drawTip2')
        nextTick(() => {
          emit('measureEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: props.showComponentLines ? 'component-distance' : 'distance',
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
          ; (measurementVm.proxy as any).editingMeasurementName = undefined
          restoreViewerCursor(viewer)
          canShowDrawTip.value = false
          drawTipPosition.value = [0, 0, 0]
        }

        if (selectedMeasurementOption) {
          drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.distance.drawTip1')
          canShowDrawTip.value = true
        }

        nextTick(() => {
          emit('measureEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: props.showComponentLines ? 'component-distance' : 'distance',
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

      if (defined(position)) {
        const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
        const polyline: PolylineSegment = polylines.value[index]
        const positions = polyline.positions
        positions[editingPoint.value ? editingPoint.value._index : 1] = position

        nextTick(() => {
          emit('measureEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: props.showComponentLines ? 'component-distance' : 'distance',
            finished: false,
            position: polyline.positions[1],
            windowPoistion: movement
          }, polylinesRender.value[index]))
        })
      }
    }

    const updateComponents = (polyline: DistanceMeasurementPolylineSegment) => {
      const { Cartesian3, Math: CesiumMath, defined } = Cesium
      const { viewer } = $services
      const ellipsoid = viewer.scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
      const startPosition = polyline.positions[0]
      const endPosition = polyline.positions[1]
      const startCartographic = ellipsoid.cartesianToCartographic(startPosition, {} as any)

      if (!defined(startCartographic)) {
        return
      }
      const endCartographic = ellipsoid.cartesianToCartographic(endPosition, {} as any)

      const startHeight = startCartographic.height
      const endHeight = endCartographic.height

      let startPoint, endPoint, height1, height2

      if (startHeight < endHeight) {
        startPoint = startPosition
        endPoint = endPosition
        height2 = endHeight
        height1 = startHeight
      } else {
        startPoint = endPosition
        endPoint = startPosition
        height2 = startHeight
        height1 = endHeight
      }

      const xyPolylinePositions = polyline.xyPolylinePositions
      xyPolylinePositions[0] = startPoint
      xyPolylinePositions[2] = endPoint
      let normal = ellipsoid.geodeticSurfaceNormal(startPoint, {} as any)
      normal = Cartesian3.multiplyByScalar(normal, height2 - height1, normal)
      const xyPoint = Cartesian3.add(startPoint, normal, xyPolylinePositions[1])
      if (!(Cartesian3.equalsEpsilon(xyPoint, endPoint, CesiumMath.EPSILON10) && Cartesian3.equalsEpsilon(xyPoint, startPoint, CesiumMath.EPSILON10))) {
        let diffrenceX = Cartesian3.subtract(endPoint, xyPoint, {} as any)
        let diffrenceY = Cartesian3.subtract(startPoint, xyPoint, {} as any)
        const distanceMin = Math.min(Cartesian3.magnitude(diffrenceX), Cartesian3.magnitude(diffrenceY))
        const factor = 15 < distanceMin ? .15 * distanceMin : .25 * distanceMin
        diffrenceX = Cartesian3.normalize(diffrenceX, diffrenceX)
        diffrenceY = Cartesian3.normalize(diffrenceY, diffrenceY)
        diffrenceX = Cartesian3.multiplyByScalar(diffrenceX, factor, diffrenceX)
        diffrenceY = Cartesian3.multiplyByScalar(diffrenceY, factor, diffrenceY)
        const xyBoxPositions = polyline.xyBoxPositions
        Cartesian3.add(xyPoint, diffrenceX, xyBoxPositions[0])
        Cartesian3.add(xyBoxPositions[0], diffrenceY, xyBoxPositions[1])
        Cartesian3.add(xyPoint, diffrenceY, xyBoxPositions[2])

        polyline.xLabelPosition = Cartesian3.midpoint(xyPoint, endPoint, {} as any)
        polyline.yLabelPosition = Cartesian3.midpoint(startPoint, xyPoint, {} as any)
        polyline.xAnglePosition = endPoint
        polyline.yAnglePosition = startPoint
        const diffrence1 = Cartesian3.subtract(xyPoint, endPoint, {} as any)
        const diffrence2 = Cartesian3.subtract(xyPoint, startPoint, {} as any)
        let diffrence3 = Cartesian3.subtract(endPoint, startPoint, {} as any)
        polyline.yAngle = Cartesian3.angleBetween(diffrence2, diffrence3)
        diffrence3 = Cartesian3.negate(diffrence3, diffrence3)
        polyline.xAngle = Cartesian3.angleBetween(diffrence1, diffrence3)
        polyline.xDistance = Cartesian3.magnitude(diffrence1)
        polyline.yDistance = Cartesian3.magnitude(diffrence2)
      }
    }

    const updateLabelPosition = () => {
      polylines.value.forEach((polyline, index) => {
        const { defined, SceneTransforms, HorizontalOrigin } = Cesium
        const { viewer } = $services
        const scene = viewer.scene
        const primitiveCollection = primitiveCollectionRef.value.cesiumObject as Cesium.PrimitiveCollection
        const positions = polyline.positions
        const startPosition = positions[0]
        const endPosition = positions[1]
        const startPositionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, startPosition, {} as any)
        const endPositionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, endPosition, {} as any)
        if (defined(startPositionWindow) && defined(endPositionWindow)) {
          const labelCollection: Array<Cesium.LabelCollection> = (primitiveCollection as any)._primitives.filter(v => v instanceof Cesium.LabelCollection)
          if (labelCollection.length) {
            const label = labelCollection[index].get(0)
            let yLabel: Cesium.Label, xAngleLabel: Cesium.Label, yPixelOffset: Cesium.Cartesian2, xPixelOffset: Cesium.Cartesian2
            if (props.showComponentLines) {
              yLabel = labelCollection[index].get(2)
              xAngleLabel = labelCollection[index].get(3)
              yPixelOffset = makeCartesian2(props.yLabelOpts.pixelOffset) as Cesium.Cartesian2
              xPixelOffset = makeCartesian2(props.xAngleLabelOpts.pixelOffset) as Cesium.Cartesian2
            }

            if ((startPositionWindow.y - endPositionWindow.y) / (endPositionWindow.x - startPositionWindow.x) > 0) {
              if (defined(yLabel)) {
                yPixelOffset.x = -9
                yLabel.pixelOffset = yPixelOffset
                yLabel.horizontalOrigin = HorizontalOrigin.RIGHT
              }

              if (defined(xAngleLabel)) {
                xPixelOffset.x = 12
                xAngleLabel.pixelOffset = xPixelOffset
                xAngleLabel.horizontalOrigin = HorizontalOrigin.LEFT
              }

              label.horizontalOrigin = HorizontalOrigin.LEFT
            } else {

              if (defined(yLabel)) {
                yPixelOffset.x = 9
                yLabel.pixelOffset = yPixelOffset
                yLabel.horizontalOrigin = HorizontalOrigin.LEFT
              }

              if (defined(xAngleLabel)) {
                xPixelOffset.x = -12
                xAngleLabel.pixelOffset = xPixelOffset
                xAngleLabel.horizontalOrigin = HorizontalOrigin.RIGHT
              }

              label.horizontalOrigin = HorizontalOrigin.RIGHT
            }
          }
        }
      })
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
        const { viewer, selectedMeasurementOption } = $services

        if (!editingPoint.value && drawStatus.value !== DrawStatus.Drawing) {
          restoreViewerCursor(viewer)
          e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.0
          editorPosition.value = [0, 0, 0]
          mouseoverPoint.value = undefined
          showEditor.value = false
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
        drawTip.value = props.drawtip.drawTip3 || t('vc.measurement.distance.drawTip3')
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        restorePosition = polylines.value[editingPoint.value._vcPolylineIndx].positions[editingPoint.value._index]
        canShowDrawTip.value = true
        ; (measurementVm.proxy as any).editingMeasurementName = props.showComponentLines ? 'component-distance' : 'distance'
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
      cesiumObject._vcId = props.showComponentLines ? 'VcMeasurementComponentDistance' : 'VcMeasurementDistance'
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
        if (polyline.xyPolylinePositions?.length > 1) {
          // xyPolyline
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
            positions: polyline.xyPolylinePositions,
            ...polylineOpts
          }))))
        }
        if (polyline.xyBoxPositions?.length > 1) {
          // xyBox
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
            positions: polyline.xyBoxPositions,
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
        if (props.showComponentLines) {
          labels.push({
            position: polyline.xLabelPosition,
            id: createGuid(),
            text: MeasureUnits.distanceToString(polyline.xDistance, props.measureUnits.distanceUnits, props.locale, props.decimals.distance),
            ...props.xLabelOpts
          })

          labels.push({
            position: polyline.yLabelPosition,
            id: createGuid(),
            text: MeasureUnits.distanceToString(polyline.yDistance, props.measureUnits.distanceUnits, props.locale, props.decimals.distance),
            ...props.yLabelOpts
          })

          labels.push({
            position: polyline.xAnglePosition,
            id: createGuid(),
            text: MeasureUnits.angleToString(polyline.xAngle, props.measureUnits.angleUnits, props.locale, props.decimals.angle),
            ...props.xAngleLabelOpts
          })

          labels.push({
            position: polyline.yAnglePosition,
            id: createGuid(),
            text: MeasureUnits.angleToString(polyline.yAngle, props.measureUnits.angleUnits, props.locale, props.decimals.angle),
            ...props.yAngleLabelOpts
          })
        }
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
