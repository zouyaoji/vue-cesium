import { defineComponent, getCurrentInstance, ref, h } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive } from '@vue-cesium/primitives'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { makeMaterial, makeCartesian2 } from '@vue-cesium/utils/cesium-helpers'
import VisibilityState from './VisibilityState'
import { DistanceMeasurementPolyline } from '../measure.types'
import DrawStatus from '../DrawStatus'
import VcInstanceGeometry from '@vue-cesium/geometry-instance'
import { VcGeometryPolyline } from '@vue-cesium/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import MeasureUnits from '../MeasureUnits'

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

    const polylines = ref<Array<DistanceMeasurementPolyline>>([])
    let visibilityState: VisibilityState = void 0
    let status = DrawStatus.BeforeDraw
    const canShowDrawTip = ref(false)
    const drawTipPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
    const drawTip = ref('')
    const showEditor = ref(false)
    const editorPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
    const mouseoverPoint = ref(null)
    // const mouseoverPolyline = ref(null)
    const editingPoint = ref(null)
    const primitiveCollectionRef = ref<VcComponentPublicInstance>(null)

    // methods
    instance.createCesiumObject = async () => {
      visibilityState = new VisibilityState()
      return true
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

    const getWorldPosition = (scene: Cesium.Scene, windowPosition: Cesium.Cartesian2, result: Cesium.Cartesian3) => {
      const { Cesium3DTileFeature, Cesium3DTileset, Cartesian3, defined, Model, Ray } = Cesium
      let position = void 0
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

    const startNew = () => {
      const { Cartesian3 } = Cesium
      const polyline: DistanceMeasurementPolyline = {
        positions: [new Cartesian3(), new Cartesian3()],
        distance: 0,
        show: false
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
      }

      polylines.value.push(polyline)
      status = DrawStatus.BeforeDraw
      canShowDrawTip.value = true
      drawTip.value = t('vc.measurement.distance.drawTip1')
    }

    const stop = () => {
      if (status === DrawStatus.Drawing) {
        polylines.value.pop()
      }
      status = DrawStatus.BeforeDraw
      canShowDrawTip.value = false
      drawTipPosition.value = [0, 0, 0]
    }

    const handleClick = (movement, options?) => {
      const { viewer, measurementVm, selectedMeasurementOption } = $services

      if (options.button === 2 && options.ctrl) {
        const measurementsOption = (measurementVm.proxy as any).measurementsOptions.find(v => v.name === 'distance')
        ;(measurementVm.proxy as any).toggleAction(measurementsOption)
        return
      }

      if (options.button !== 0) {
        return
      }

      if (status === DrawStatus.AfterDraw) {
        startNew()
      }

      const { defined } = Cesium
      const scene = viewer.scene
      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: DistanceMeasurementPolyline = polylines.value[index]
      const positions = polyline.positions

      if (status === DrawStatus.BeforeDraw) {
        const position = getWorldPosition(scene, movement, {} as any)

        if (!defined(position)) {
          return
        }
        positions[0] = position
        positions[1] = position
        polyline.show = true
        polyline.startPoint = position
        status = DrawStatus.Drawing
        drawTip.value = t('vc.measurement.distance.drawTip2')
        emit('measureEvt', {
          index: index,
          polylines: polylines,
          type: props.showComponentLines ? 'component-distance' : 'distance',
          finished: false,
          position: position,
          windowPoistion: movement
        })
      } else {
        if (status === DrawStatus.Drawing) {
          polyline.endPoint = polyline.positions[1]
        }
        status = DrawStatus.AfterDraw

        if (editingPoint.value) {
          editingPoint.value = undefined
          ; (measurementVm.proxy as any).editingMeasurementName = undefined
          viewer.canvas.setAttribute('style', `cursor: ${restoreCursor.value}`)
          canShowDrawTip.value = false
        }

        if (selectedMeasurementOption) {
          drawTip.value = t('vc.measurement.distance.drawTip1')
          canShowDrawTip.value = true
        }

        emit('measureEvt', {
          index: index,
          polylines: polylines,
          type: props.showComponentLines ? 'component-distance' : 'distance',
          finished: true,
          position: polyline.positions[1],
          windowPoistion: movement
        })
      }
    }

    const handleMouseMove = movement => {
      if (!canShowDrawTip.value) {
        return
      }

      const { viewer } = $services
      const scene = viewer.scene
      const position = getWorldPosition(scene, movement, {} as any)
      const { Cartesian3, defined } = Cesium
      if (!defined(position)) {
        return
      }

      drawTipPosition.value = position

      if (status !== DrawStatus.Drawing) {
        return
      }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: DistanceMeasurementPolyline = polylines.value[index]
      const positions = polyline.positions
      positions[editingPoint.value ? editingPoint.value._index : 1] = position

      if (defined(position)) {
        const startPosition = positions[0]
        const endPosition = positions[1]
        const difference = Cartesian3.subtract(startPosition, endPosition, {} as any)
        polyline.distance = Cartesian3.magnitude(difference)
        polyline.labelPosition = Cartesian3.midpoint(startPosition, endPosition, {} as any)

        if (props.showComponentLines) {
          updateComponents(polyline)
        }
      }

      emit('measureEvt', {
        index: index,
        polylines: polylines,
        type: props.showComponentLines ? 'component-distance' : 'distance',
        finished: false,
        position: position,
        windowPoistion: movement
      })
    }

    const updateComponents = (polyline: DistanceMeasurementPolyline) => {
      const { Cartesian3, Math: CesiumMath } = Cesium
      const { viewer } = $services
      const ellipsoid = viewer.scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
      const startPosition = polyline.positions[0]
      const endPosition = polyline.positions[1]
      const startCartographic = ellipsoid.cartesianToCartographic(startPosition, {} as any)
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

    const restoreCursor = ref(null)
    const onMouseoverPoints = e => {
      const { favActived, viewer } = $services
      if (props.editable && status !== DrawStatus.Drawing && favActived) {
        e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.5
        mouseoverPoint.value = e.pickedFeature.primitive
        editorPosition.value = e.pickedFeature.primitive.position
        showEditor.value = true
        canShowDrawTip.value = false
        restoreCursor.value = getComputedStyle(viewer.canvas).cursor
        viewer.canvas.setAttribute('style', 'cursor: pointer')
      }
    }
    const onMouseoutPoints = e => {
      if (props.editable) {
        const { viewer } = $services
        e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.0
        editorPosition.value = [0, 0, 0]
        mouseoverPoint.value = undefined
        showEditor.value = false

        if (!editingPoint.value && status !== DrawStatus.Drawing) {
          viewer.canvas.setAttribute('style', `cursor: ${restoreCursor.value}`)
          // drawTipPosition.value = [0, 0, 0]
        } else {
          canShowDrawTip.value = true
        }
      }
    }

    // const onMouseoverPolyline = e => {
    //   if (props.editable && status !== DrawStatus.Drawing) {
    //     mouseoverPolyline.value = e.pickedFeature.primitive
    //     editorPosition.value = e.surfacePosition
    //     showEditor.value = true
    //     canShowDrawTip.value = false
    //     const { viewer } = $services
    //     restoreCursor.value = getComputedStyle(viewer.canvas).cursor
    //     viewer.canvas.setAttribute('style', 'cursor: pointer')
    //   }
    // }

    // const onMouseoutPolyline = e => {
    //   if (props.editable) {
    //     mouseoverPolyline.value = undefined
    //     editorPosition.value = [0, 0, 0]
    //     showEditor.value = false
    //     const { viewer } = $services
    //     viewer.canvas.setAttribute('style', `cursor: ${restoreCursor.value}`)
    //   }
    // }

    const onEditorClick = e => {
      editorPosition.value = [0, 0, 0]
      showEditor.value = false

      if (!props.editable) {
        return
      }

      if (e === 'move') {
        const { viewer, measurementVm } = $services
        drawTip.value = t('vc.measurement.distance.drawTip3')
        status = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        canShowDrawTip.value = true
        ; (measurementVm.proxy as any).editingMeasurementName = props.showComponentLines ? 'component-distance' : 'distance'
        viewer.canvas.setAttribute('style', 'cursor: move')
      } else if (e === 'delete') {
        const index = mouseoverPoint.value._vcPolylineIndx
        const polyline = polylines.value[index]
        polyline.positions.splice(mouseoverPoint.value._index, 1)
      } else if (e === 'deleteLine') {

      }
    }

    const clear = () => {
      polylines.value = []
    }

    // expose public methods
    const publicMethods = { startNew, stop, clear, handleClick, handleMouseMove }
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
      polylines.value.forEach((polyline, index) => {
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
          text: MeasureUnits.distanceToString(polyline.distance, props.measureUnits.distanceUnits),
          ...props.labelOpts
        })
        if (props.showComponentLines) {
          labels.push({
            position: polyline.xLabelPosition,
            id: createGuid(),
            text: MeasureUnits.distanceToString(polyline.xDistance, props.measureUnits.distanceUnits),
            ...props.xLabelOpts
          })

          labels.push({
            position: polyline.yLabelPosition,
            id: createGuid(),
            text: MeasureUnits.distanceToString(polyline.yDistance, props.measureUnits.distanceUnits),
            ...props.yLabelOpts
          })

          labels.push({
            position: polyline.xAnglePosition,
            id: createGuid(),
            text: MeasureUnits.angleToString(polyline.xAngle, props.measureUnits.slopeUnits),
            ...props.xAngleLabelOpts
          })

          labels.push({
            position: polyline.yAnglePosition,
            id: createGuid(),
            text: MeasureUnits.angleToString(polyline.yAngle, props.measureUnits.slopeUnits),
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
        children.push(h(VcOverlayHtml, {
          position: drawTipPosition.value,
          pixelOffset: props.drawtip.pixelOffset,
          teleport: {
            to: '#cesiumContainer'
          }
        }, () => h('div', {
          class: 'vc-drawtip vc-tooltip vc-tooltip--style'
        }, drawTip.value)))
      }

      if (showEditor.value) {
        const buttons = []
        if (mouseoverPoint.value) {
          // move
          const btnOptsMove = {
            ...props.editorOpts.move
          }
          delete btnOptsMove.color
          buttons.push(h(VcBtn, {
            style: { color: props.editorOpts.move.color, background: props.editorOpts.move.background },
            ...btnOptsMove,
            onclick: onEditorClick.bind(undefined, 'move')
          }, () => h(VcTooltip, {
            ...props.editorOpts.move.tooltip
          }, () => h('strong', null, props.editorOpts.move.tooltip?.tip || t('vc.measurement.editor.move')))
          ))
        }
        // if (mouseoverPolyline.value) {
        //   // delete line
        //   const btnOptsDelete = {
        //     ...props.editorOpts.deleteLine
        //   }
        //   delete btnOptsDelete.color
        //   buttons.push(h(VcBtn, {
        //     style: { color: props.editorOpts.delete.color, background: props.editorOpts.delete.background },
        //     ...btnOptsDelete,
        //     onclick: onEditorClick.bind(undefined, 'deleteLine')
        //   }, () => h(VcTooltip, {
        //     ...props.editorOpts.delete.tooltip
        //   }, () => h('strong', null, props.editorOpts.delete.tooltip?.tip || t('vc.measurement.editor.deleteLine')))
        //   ))
        // }

        children.push(h(VcOverlayHtml, {
          position: editorPosition.value,
          pixelOffset: props.editorOpts?.pixelOffset,
          teleport: {
            to: '#cesiumContainer'
          }
        }, () => h('div', {
          class: 'vc-editor'
        }, buttons)))
      }
      return h(VcCollectionPrimitive, {
        ref: primitiveCollectionRef,
        show: props.show
      }, () => children)
    }
  }
})
