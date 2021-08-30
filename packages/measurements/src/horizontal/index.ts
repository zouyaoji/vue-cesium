import { defineComponent, getCurrentInstance, ref, h, computed, nextTick } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive } from '@vue-cesium/primitives'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { makeMaterial, getGeodesicDistance } from '@vue-cesium/utils/cesium-helpers'
import { HorizontalMeasurementDrawing } from '../measure.types'
import { DrawStatus } from '@vue-cesium/shared'
import VcInstanceGeometry from '@vue-cesium/geometry-instance'
import { VcGeometryPolyline } from '@vue-cesium/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { MeasureUnits } from '@vue-cesium/shared'
import useTimeout from '@vue-cesium/composables/private/use-timeout'

export default defineComponent({
  name: 'VcMeasurementHorizontal',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'measureEvt', 'mouseEvt', 'editorEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurementHorizontal'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx
    const polylines = ref<Array<HorizontalMeasurementDrawing>>([])
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
    let lastClickPosition: Cesium.Cartesian2 = undefined
    const mouseDelta = 10
    let editorType = ''
    const { registerTimeout, removeTimeout } = useTimeout()

    // computed
    const polylinesRender = computed<Array<HorizontalMeasurementDrawing>>(() => {
      const { Cartesian3, createGuid } = Cesium
      const result: Array<HorizontalMeasurementDrawing> = []
      polylines.value.forEach((polyline, index) => {
        const labels = []
        const distances = []
        const angles = []
        let distance = 0
        const dashedLines = []
        const positions = polyline.positions
        for (let i = 0; i < positions.length - 1; i++) {
          let s = 0
          if (props.polylineOpts.arcType === 0) {
            s = getGeodesicDistance(positions[i], positions[i + 1], $services.viewer.scene.globe.ellipsoid)
          } else {
            s = Cartesian3.distance(positions[i], positions[i + 1])
          }
          distances.push(s)
          distance = distance + s
          if (s > 0 && positions.length > 2) {
            labels.push({
              text: MeasureUnits.distanceToString(s, props.measureUnits.distanceUnits, props.locale, props.decimals.distance),
              position: Cartesian3.midpoint(positions[i], positions[i + 1], {} as any),
              id: createGuid(),
              ...props.labelsOpts
            })
          }
          if (i > 0 && positions.length > 2 && props.showAngleLabel) {
            const point0 = positions[i - 1]
            const point1 = positions[i]
            const point2 = positions[i + 1]
            const diffrence1 = Cartesian3.subtract(point0, point1, {} as any)
            const diffrence2 = Cartesian3.subtract(point2, point1, {} as any)
            let angle = 0
            if (!(Cartesian3.ZERO.equals(diffrence1) || Cartesian3.ZERO.equals(diffrence2))) {
              angle = Cartesian3.angleBetween(diffrence1, diffrence2)
            }
            angles.push(angle)
            labels.push({
              text: MeasureUnits.angleToString(angle, props.measureUnits.angleUnits, props.locale, props.decimals.angle),
              position: point1,
              id: createGuid(),
              ...props.labelsOpts
            })
          }

          if (props.showDashedLine) {
            dashedLines.push({
              positions: [positions[i], getEndPostion(positions[i])]
            })

            if (i === positions.length - 2) {
              dashedLines.push({
                positions: [positions[i + 1], getEndPostion(positions[i + 1])]
              })
            }
          }
        }
        labels.push({
          text: MeasureUnits.distanceToString(distance, props.measureUnits.distanceUnits, props.locale, props.decimals.distance),
          position: positions[positions.length - 1],
          id: createGuid(),
          ...props.labelOpts
        })
        result.push({
          ...polyline,
          labels,
          angles,
          distance,
          distances,
          dashedLines
        })
      })
      return result
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

    const getEndPostion = (position: Cesium.Cartesian3) => {
      const { defined, defaultValue } = Cesium
      const { viewer } = $services
      const scene = viewer.scene
      const globe = scene.globe
      const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
      const positionCartographic = ellipsoid.cartesianToCartographic(position)
      positionCartographic.height = defined(globe) ? defaultValue(globe.getHeight(positionCartographic), 0) : 0
      return ellipsoid.cartographicToCartesian(positionCartographic)
    }

    const handleMouseClick = (movement: Cesium.Cartesian2, options?) => {
      const { viewer, measurementVm, selectedMeasurementOption, getWorldPosition } = $services

      if (options.button === 2 && options.ctrl) {
        const measurementsOption = (measurementVm.proxy as any).measurementsOptions.find(v => v.name === 'horizontal')
          ; (measurementVm.proxy as any).toggleAction(measurementsOption)
        return
      }

      if (drawStatus.value === DrawStatus.AfterDraw) {
        startNew()
      }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: HorizontalMeasurementDrawing = polylines.value[index]
      const tempPositions = polyline.tempPositions

      if (options.button === 2 && editingPoint.value) {
        (measurementVm.proxy as any).editingMeasurementName = undefined
        polyline.positions[editingPoint.value._index] = restorePosition
        drawStatus.value = DrawStatus.AfterDraw
        polyline.drawStatus = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.horizontal.drawTip1')
        return
      }

      if (options.button === 2 && drawStatus.value === DrawStatus.Drawing) {
        if (tempPositions.length > 1) {
          tempPositions.pop()
          handleMouseMove(movement)
        }
      }

      if (options.button !== 0) {
        return
      }

      const { defined, Plane, Cartesian3, Cartesian2 } = Cesium

      lastClickPosition = lastClickPosition || new Cesium.Cartesian2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
      if (Cartesian2.magnitude(Cartesian2.subtract(lastClickPosition, movement, {} as any)) < mouseDelta) {
        return
      }

      if (editingPoint.value) {
        drawStatus.value = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.horizontal.drawTip1')
        ; (measurementVm.proxy as any).editingMeasurementName = undefined
        canShowDrawTip.value = defined(selectedMeasurementOption)
        nextTick(() => {
          emit('measureEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: 'horizontal',
            finished: true,
            position: polyline.positions[polyline.positions.length - 1],
            windowPoistion: movement,
            type: editorType,
          }, polylinesRender.value[index]), viewer)
        })
        return
      }

      if (tempPositions.length === 0) {
        const scene = viewer.scene
        const position = getWorldPosition(scene, movement, {} as any)
        if (!defined(position)) {
          return
        }
        const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
        // addPoint(polyline, position)
        tempPositions.push(position)
        polyline.positions = tempPositions
        polyline.heightPlane = Plane.fromPointNormal(position, ellipsoid.geodeticSurfaceNormal(position, {} as any), polyline.heightPlane)
        const positionCartographic = ellipsoid.cartesianToCartographic(position, {} as any)
        const positionProject = scene.mapProjection.project(positionCartographic, {} as any)
        const positionCV = Cartesian3.fromElements(positionProject.z, positionProject.x, positionProject.y, positionProject)
        polyline.heightPlaneCV = Plane.fromPointNormal(positionCV, Cartesian3.UNIT_X, polyline.heightPlaneCV)
        polyline.height = positionCartographic.height
        polyline.firstMove = true
        polyline.drawStatus = DrawStatus.Drawing
        polyline.show = true
        drawStatus.value = DrawStatus.Drawing
      } else {
        tempPositions.push(polyline.tempNextPos)
        polyline.positions = tempPositions
        polyline.firstMove = true
      }
      Cartesian2.clone(movement, lastClickPosition)
      drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.horizontal.drawTip2')
      nextTick(() => {
        emit('measureEvt', Object.assign({
          index: index,
          polylines: polylines,
          name: 'horizontal',
          finished: false,
          position: polyline.positions[polyline.positions.length - 1],
          windowPoistion: movement,
          type: 'new',
        }, polylinesRender.value[index]), viewer)
      })
    }

    const handleMouseMove = (movement: Cesium.Cartesian2, options?) => {
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

      const { SceneMode, IntersectionTests, Cartesian3 } = Cesium

      const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: HorizontalMeasurementDrawing = polylines.value[index]
      const positions = polyline.positions
      const cameraRay = scene.camera.getPickRay(movement)
      let intersectionPosition, unprojectPosition
      if (scene.mode === SceneMode.SCENE3D) {
        intersectionPosition = IntersectionTests.rayPlane(cameraRay, polyline.heightPlane)
      } else if (scene.mode === SceneMode.COLUMBUS_VIEW) {
        intersectionPosition = IntersectionTests.rayPlane(cameraRay, polyline.heightPlaneCV)
        intersectionPosition = Cartesian3.fromElements(intersectionPosition.y, intersectionPosition.z, intersectionPosition.x, intersectionPosition)
        unprojectPosition = scene.mapProjection.unproject(intersectionPosition)
        intersectionPosition = ellipsoid.cartographicToCartesian(unprojectPosition)
      } else {
        intersectionPosition = scene.camera.pickEllipsoid(movement, ellipsoid)
        if (defined(intersectionPosition)) {
          const cartographicPosition = ellipsoid.cartesianToCartographic(intersectionPosition)
          cartographicPosition.height = polyline.height
          intersectionPosition = ellipsoid.cartographicToCartesian(cartographicPosition, intersectionPosition)
        }
      }

      if (defined(intersectionPosition)) {
        if (!polyline.firstMove && options?.shift) {
          const lastPosition = positions[positions.length - 2]
          const tempNextPos = polyline.tempNextPos
          const d1 = Cartesian3.subtract(tempNextPos, lastPosition, {} as any)
          let d2 = Cartesian3.subtract(intersectionPosition, lastPosition, {} as any)
          d2 = Cartesian3.projectVector(d2, d1, d2)
          intersectionPosition = Cartesian3.add(lastPosition, d2, intersectionPosition)
        }

        let type = 'new'
        if (editingPoint.value) {
          const positions = polyline.positions
          positions.splice(editingPoint.value._index, 1, intersectionPosition)
          type = editorType
          drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.horizontal.drawTip1')
        } else {
          const tempPositions = polyline.tempPositions.slice()
          tempPositions.push(intersectionPosition)
          polyline.positions = tempPositions
          polyline.firstMove = false
          polyline.tempNextPos = Object.assign(intersectionPosition)
          drawTip.value = props.drawtip.drawingTip2 || t('vc.measurement.horizontal.drawTip2')
        }

        emit('measureEvt', Object.assign({
          index: index,
          polylines: polylines,
          name: 'horizontal',
          finished: false,
          position: polyline.positions[polyline.positions.length - 1],
          windowPoistion: movement,
          type,
        }, polylinesRender.value[index]), viewer)
      }
    }

    const handleDoubleClick = movement => {
      const { measurementVm, selectedMeasurementOption, viewer } = $services
      if (drawStatus.value === DrawStatus.Drawing) {
        const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
        const polyline: HorizontalMeasurementDrawing = polylines.value[index]
        polyline.positions = polyline.tempPositions
        polyline.drawStatus = DrawStatus.AfterDraw
        drawStatus.value = DrawStatus.AfterDraw
        drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.horizontal.drawTip1')

        nextTick(() => {
          emit('measureEvt', Object.assign({
            index: index,
            polylines: polylines,
            name: 'horizontal',
            finished: true,
            position: polyline.positions[polyline.positions.length - 1],
            windowPoistion: movement,
            type: 'new'
          }, polylinesRender.value[index]), viewer)

          if (props.mode === 1) {
            (measurementVm.proxy as any).toggleAction(selectedMeasurementOption)
          }
        })
      }
    }

    const startNew = () => {
      const { Cartesian3, Plane } = Cesium
      const polyline: HorizontalMeasurementDrawing = {
        positions: [],
        tempPositions: [],
        show: false,
        drawStatus: DrawStatus.BeforeDraw,
        distance: 0,
        distances: [],
        dashedLines: [],
        labels: [],
        angles: [],
        heightPlane: new Plane(Cartesian3.UNIT_X, 0),
        heightPlaneCV: new Plane(Cartesian3.UNIT_X, 0),
        height: 0,
        firstMove: false,
        tempNextPos: new Cartesian3()
      }

      polylines.value.push(polyline)
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = true
      drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.horizontal.drawTip1')
    }

    const stop = () => {
      if (drawStatus.value === DrawStatus.Drawing) {
        polylines.value.pop()
      }
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = false
      drawTipPosition.value = [0, 0, 0]
    }

    const clear = () => {
      polylines.value = []
      stop()
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcMeasurementHorizontal'
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

      emit('mouseEvt', {
        type: e.type,
        target: e,
        name: 'horizontal'
      }, viewer)
    }

    const onMouseoutPoints = e => {
      const { viewer, selectedMeasurementOption } = $services

      if (props.editable) {
        if (!editingPoint.value && drawStatus.value !== DrawStatus.Drawing) {
          e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.0
          removeTimeout()
          registerTimeout(() => {
            editorPosition.value = [0, 0, 0]
            mouseoverPoint.value = undefined
            showEditor.value = false
          }, props.editorOpts.hideDelay)
        }

        selectedMeasurementOption && (canShowDrawTip.value = true)
      }

      emit('mouseEvt', {
        type: e.type,
        target: e,
        name: 'horizontal'
      }, viewer)
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

      const { viewer, measurementVm } = $services
      if (e === 'move') {
        drawTip.value = props.drawtip.drawTip3 || t('vc.measurement.horizontal.drawTip3')
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        restorePosition = polylines.value[editingPoint.value._vcPolylineIndx].positions[editingPoint.value._index]
        canShowDrawTip.value = true
        ; (measurementVm.proxy as any).editingMeasurementName = 'horizontal'
      } else if (e === 'insert') {
        const index = mouseoverPoint.value._vcPolylineIndx
        const polyline = polylines.value[index]
        polyline.positions.splice(mouseoverPoint.value._index, 0, mouseoverPoint.value.position)
        editingPoint.value = mouseoverPoint.value
        canShowDrawTip.value = true
        drawStatus.value = DrawStatus.Drawing
        drawTip.value = props.drawtip.drawTip3 || t('vc.measurement.horizontal.drawTip3')
        ; (measurementVm.proxy as any).editingMeasurementName = 'horizontal'
      } else if (e === 'remove') {
        const index = mouseoverPoint.value._vcPolylineIndx
        const polyline = polylines.value[index]
        polyline.positions.splice(mouseoverPoint.value._index, 1)
      } else if (e === 'removeAll') {
        const index = mouseoverPoint.value._vcPolylineIndx
        polylines.value.splice(index, 1)
      }

      emit('editorEvt', {
        type: e,
        polylines: polylines,
        name: 'horizontal',
        index: mouseoverPoint.value._vcPolylineIndx
      }, viewer)
    }

    const updateLabelPosition = () => {
      polylinesRender.value.forEach((polyline, index) => {
        const positions = polyline.positions
        if (!(positions.length < 2)) {
          const { defined, SceneTransforms, Cartesian2, HorizontalOrigin } = Cesium
          const { viewer } = $services
          const scene = viewer.scene

          let startPosition = positions[0]
          const positionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, startPosition, {} as any)

          let startPositionWindow = defined(positionWindow) ? Cartesian2.clone(positionWindow, {} as any) : Cartesian2.fromElements(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, {} as any)
          let startY = startPositionWindow.y
          const primitiveCollection = primitiveCollectionRef.value.cesiumObject as Cesium.PrimitiveCollection
          const labelCollection: Array<Cesium.LabelCollection> = (primitiveCollection as any)._primitives.filter(v => v instanceof Cesium.LabelCollection)
          const labels = labelCollection[index]._labels
          const labelTotalLength = labels[labels.length - 1]
          for (let i = 1; i < positions.length; i++) {
            const positionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, positions[i], {} as any)
            if (defined(positionWindow)) {
              const l = (startPositionWindow.y - positionWindow.y) / (positionWindow.x - startPositionWindow.x)
              if (labels[i - 1] !== labelTotalLength) {
                labels[i - 1].horizontalOrigin = 0 < l ? HorizontalOrigin.LEFT : HorizontalOrigin.RIGHT
              }

              if (positionWindow.y < startY) {
                startY = positionWindow.y
                startPosition = positions[i]
              }

              startPositionWindow = Cartesian2.clone(positionWindow, startPositionWindow)
            }

            polyline.drawStatus === DrawStatus.AfterDraw && (labelTotalLength.position = startPosition)
          }
        }
      })
    }
    // expose public methods
    const publicMethods = {
      polylines: polylines, polylinesRender, startNew, stop, clear, handleMouseClick, handleMouseMove, handleDoubleClick
    }
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
          children.push(
            h(VcPrimitive, {
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
            }, () => h(VcGeometryPolyline, {
              positions: polyline.positions,
              ...polylineOpts
            })))
          )
        }
        polyline.dashedLines.forEach(dashedLine => {
          children.push(
            h(VcPrimitive, {
              show: polyline.show,
              enableMouseEvent: props.enableMouseEvent,
              appearance: new PolylineMaterialAppearance({
                material: makeMaterial.call(instance, props.dashLineOpts.material) as Cesium.Material
              }),
              depthFailAppearance: new PolylineMaterialAppearance({
                material: makeMaterial.call(instance, props.dashLineOpts.depthFailMaterial) as Cesium.Material
              }),
              asynchronous: false
            }, () => h(VcInstanceGeometry, {
              id: createGuid()
            }, () => h(VcGeometryPolyline, {
              positions: dashedLine.positions,
              width: props.dashLineOpts.width,
              vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT,
              ellipsoid: defaultValue(props.dashLineOpts.ellipsoid, Ellipsoid.WGS84),
              arcType: props.dashLineOpts.arcType
            })))
          )
        })
        // points
        children.push(
          h(VcCollectionPoint, {
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
          })
        )

        // labels
        children.push(
          h(VcCollectionLabel, {
            enableMouseEvent: props.enableMouseEvent,
            show: polyline.show,
            labels: polyline.labels
          })
        )
      })

      if (props.drawtip.show && canShowDrawTip.value) {
        const { viewer } = $services
        children.push(
          h(VcOverlayHtml, {
            position: drawTipPosition.value,
            pixelOffset: props.drawtip.pixelOffset,
            teleport: {
              to: viewer.container
            }
          }, () => h('div', {
            class: 'vc-drawtip vc-tooltip--style'
          }, drawTip.value))
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
          },
          onMouseenter: onMouseenterEditor,
          onMouseleave: onMouseleaveEditor
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
