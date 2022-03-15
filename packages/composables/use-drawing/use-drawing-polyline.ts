/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-21 10:43:32
 * @LastEditTime: 2022-03-15 10:56:11
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-drawing\use-drawing-polyline.ts
 */
import { VcPrimitive, VcPrimitiveGroundPolyline } from '@vue-cesium/components/primitives'
import { VcGeometryInstance } from '@vue-cesium/components/geometry-instance'
import { VcGeometryPolyline, VcGeometryGroundPolyline, VcGeometryPolylineProps } from '@vue-cesium/components/geometries'
import { VcOverlayHtml } from '@vue-cesium/components/overlays'
import { VcCollectionLabel, VcCollectionPoint, VcCollectionPrimitive, VcLabelProps, VcPolygon } from '@vue-cesium/components/primitive-collections'
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import { useLocale } from '../use-locale'
import { DrawStatus, MeasureUnits } from '@vue-cesium/shared'
import { calculateAreaByPostions, getFirstIntersection, getGeodesicDistance, makeCartesian3Array } from '@vue-cesium/utils/cesium-helpers'
import type { VcPolylineDrawing } from '@vue-cesium/utils/drawing-types'
import type { VcComponentInternalInstance, VcDrawingProvider } from '@vue-cesium/utils/types'
import type { VNode } from 'vue'
import { computed, getCurrentInstance, nextTick, ref, h } from 'vue'
import useCommon from '../use-common'
import useDrawingAction from './use-drawing-action'
import { VcAnalysesRef, VcDrawingsRef, VcMeasurementsRef } from '@vue-cesium/components'

export default function (props, ctx, cmpName: string) {
  const instance = getCurrentInstance() as VcComponentInternalInstance

  const commonState = useCommon(props, ctx, instance)
  if (commonState === void 0) {
    return
  }

  const { t } = useLocale()
  const $services = commonState.$services as VcDrawingProvider
  const { emit } = ctx

  const {
    drawingType,
    drawTip,
    drawTipOpts,
    drawStatus,
    canShowDrawTip,
    drawTipPosition,
    showEditor,
    editorPosition,
    mouseoverPoint,
    editingPoint,
    primitiveCollectionRef,
    editorType,
    onMouseoverPoints,
    onMouseoutPoints,
    onMouseenterEditor,
    onMouseleaveEditor,
    onPrimitiveCollectionReady,
    onVcCollectionPointReady,
    onVcCollectionLabelReady,
    onVcPrimitiveReady
  } = useDrawingAction(props, ctx, instance, cmpName, $services)

  let lastClickPosition: Cesium.Cartesian2
  let restorePosition
  const mouseDelta = 10

  const renderDatas = ref<Array<VcPolylineDrawing>>([])

  if (props.preRenderDatas && props.preRenderDatas.length) {
    props.preRenderDatas.forEach(preRenderData => {
      const polylineDrawing: VcPolylineDrawing = {
        show: true,
        positions: makeCartesian3Array(preRenderData) as Array<Cesium.Cartesian3>,
        tempPositions: [],
        drawStatus: DrawStatus.AfterDraw,
        loop: props.loop,
        distance: 0,
        area: 0,
        distances: [],
        labels: [],
        angles: [],

        polylineOpts: {},
        pointOpts: {},
        labelOpts: {},
        labelsOpts: {},
        primitiveOpts: {},
        polygonOpts: {}
      }

      renderDatas.value.push(polylineDrawing)
    })
  }

  const computedRenderDatas = computed<Array<VcPolylineDrawing>>(() => {
    const { Cartesian3, createGuid, defined, Math: CesiumMath } = Cesium
    const polylines: Array<VcPolylineDrawing> = []
    const { viewer } = $services
    renderDatas.value.forEach((polyline, index) => {
      const labels: Array<VcLabelProps> = []
      const distances: number[] = []
      const angles: number[] = []
      let distance = 0
      const dashedLines: Array<{
        positions: Array<Cesium.Cartesian3>
      }> = []
      const positions = polyline.positions.slice()
      if (cmpName === 'VcAnalysisSightline') {
        const observationPoint = positions.shift()
        const destinationPoints = positions
        observationPoint &&
          destinationPoints.forEach(destinationPoint => {
            const positionsNew: Array<Cesium.Cartesian3> = []
            positionsNew.push(observationPoint)

            const objectsToExclude = []
            const primitiveCollection: Array<Cesium.PrimitiveCollection> = (primitiveCollectionRef.value.cesiumObject as any)._primitives
            primitiveCollection.forEach(primitive => {
              if (primitive instanceof Cesium.PointPrimitiveCollection) {
                objectsToExclude.push(...primitive._pointPrimitives)
              }
              if (primitive instanceof Cesium.Primitive) {
                objectsToExclude.push(primitive)
              }
            })
            const intersection = getFirstIntersection(observationPoint, destinationPoint, $services.viewer, objectsToExclude)
            if (defined(intersection)) {
              positionsNew.push(intersection)
            }
            positionsNew.push(destinationPoint)
            let distance = 0
            const distances = []
            for (let i = 0; i < positionsNew.length - 1; i++) {
              const s = Cartesian3.distance(positionsNew[i], positionsNew[i + 1])
              distances.push(s)
              distance = distance + s
            }
            polylines.push({
              ...polyline,
              positions: positionsNew,
              distance,
              distances
            })
          })
      } else {
        props.loop && positions.length > 2 && positions.push(positions[0])
        for (let i = 0; i < positions.length - 1; i++) {
          let s = 0
          if (props.polylineOpts?.arcType === 0) {
            s = getGeodesicDistance(positions[i], positions[i + 1], $services.viewer.scene.globe.ellipsoid)
          } else {
            s = Cartesian3.distance(positions[i], positions[i + 1])
          }
          distances.push(s)
          distance = distance + s
          const polylineLabelsOpts = Object.assign({}, props.labelsOpts, polyline.labelsOpts)
          if (s > 0 && positions.length > 2 && props.showDistanceLabel) {
            labels.push({
              text: MeasureUnits.distanceToString(s, props.measureUnits?.distanceUnits, props.locale, props.decimals?.distance),
              position: Cartesian3.midpoint(positions[i], positions[i + 1], {} as any),
              id: createGuid(),
              ...polylineLabelsOpts
            })
          }
          if (positions.length > 2 && props.showAngleLabel) {
            if (i > 0 || props.loop) {
              const point0 = positions[i === 0 ? positions.length - 2 : i - 1]
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
                text: MeasureUnits.angleToString(angle, props.measureUnits?.angleUnits, props.locale, props.decimals?.angle),
                position: point1,
                id: createGuid(),
                ...polylineLabelsOpts
              })
            }
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
        const area = calculateAreaByPostions(positions)

        const polylineLabelOpts = Object.assign({}, props.labelOpts, polyline.labelOpts)

        if (cmpName.includes('Area')) {
          labels.push({
            text: MeasureUnits.areaToString(area, props.measureUnits?.areaUnits, props.locale, props.decimals?.area),
            position: positions[positions.length - 1],
            id: createGuid(),
            ...polylineLabelOpts
          })
        } else {
          labels.push({
            text: MeasureUnits.distanceToString(distance, props.measureUnits?.distanceUnits, props.locale, props.decimals?.distance),
            position: positions[positions.length - 1],
            id: createGuid(),
            ...polylineLabelOpts
          })
        }

        polyline.positionsDegreesArray = polyline.positions.map(v => {
          const cart = Cesium.Cartographic.fromCartesian(v, viewer.scene.globe.ellipsoid)
          return [CesiumMath.toDegrees(cart.longitude), CesiumMath.toDegrees(cart.latitude), cart.height]
        })

        polylines.push({
          ...polyline,
          labels,
          distance,
          distances,
          area,
          angles,
          dashedLines
        })
      }
    })
    return polylines
  })
  // methods
  instance.mount = async () => {
    const { viewer } = $services
    props.autoUpdateLabelPosition && cmpName.includes('VcMeasurement') && viewer.scene.preRender.addEventListener(updateLabelPosition)
    return true
  }
  instance.unmount = async () => {
    const { viewer } = $services
    props.autoUpdateLabelPosition && cmpName.includes('VcMeasurement') && viewer.scene.preRender.removeEventListener(updateLabelPosition)
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

  const updateLabelPosition = () => {
    computedRenderDatas.value.forEach((polyline, index) => {
      const positions = polyline.positions
      if (!(positions.length < 2)) {
        const { defined, SceneTransforms, Cartesian2, HorizontalOrigin } = Cesium
        const { viewer } = $services
        const scene = viewer.scene

        let startPosition = positions[0]
        const positionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, startPosition, {} as any)

        let startPositionWindow = defined(positionWindow)
          ? Cartesian2.clone(positionWindow, {} as any)
          : Cartesian2.fromElements(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, {} as any)
        let startY = startPositionWindow.y
        const primitiveCollection = primitiveCollectionRef.value?.cesiumObject as Cesium.PrimitiveCollection
        const labelCollection: Array<Cesium.LabelCollection> = (primitiveCollection as any)._primitives.filter(
          v => v instanceof Cesium.LabelCollection
        )
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

  const startNew = () => {
    const polyline: VcPolylineDrawing = {
      show: false,
      positions: [],
      tempPositions: [],
      drawStatus: DrawStatus.BeforeDraw,
      loop: props.loop,
      distance: 0,
      area: 0,
      distances: [],
      labels: [],
      angles: [],

      polylineOpts: {},
      pointOpts: {},
      labelOpts: {},
      labelsOpts: {},
      primitiveOpts: {},
      polygonOpts: {}
    }

    if (cmpName === 'VcMeasurementHorizontal') {
      const { Cartesian3, Plane } = Cesium
      Object.assign(polyline, {
        dashedLines: [],
        heightPlane: new Plane(Cartesian3.UNIT_X, 0),
        heightPlaneCV: new Plane(Cartesian3.UNIT_X, 0),
        height: 0,
        firstMove: false,
        tempNextPos: new Cartesian3()
      })
    }

    drawStatus.value = DrawStatus.BeforeDraw
    renderDatas.value.push(polyline)
    canShowDrawTip.value = true
    drawTip.value = drawTipOpts.value.drawingTipStart
  }

  const stop = () => {
    if (drawStatus.value === DrawStatus.Drawing) {
      renderDatas.value.pop()
    }
    drawStatus.value = DrawStatus.BeforeDraw
    canShowDrawTip.value = false
    drawTipPosition.value = [0, 0, 0]
  }

  const handleMouseClick = (movement: Cesium.Cartesian2, options?) => {
    const { viewer, drawingFabInstance, getWorldPosition, selectedDrawingActionInstance } = $services
    const drawingFabInstanceVm = drawingFabInstance?.proxy as VcDrawingsRef | VcMeasurementsRef | VcAnalysesRef
    if (options.button === 2 && options.ctrl) {
      const drawingsOption = drawingFabInstanceVm.getDrawingActionInstance(drawingType)
      drawingFabInstanceVm.toggleAction(drawingsOption)
      nextTick(() => {
        emit(
          'drawEvt',
          {
            name: drawingType,
            finished: true,
            windowPoistion: movement,
            type: 'cancel'
          },
          viewer
        )
      })
      return
    }

    if (drawStatus.value === DrawStatus.AfterDraw) {
      startNew()
    }

    const { defined, Cartesian2, Plane, Cartesian3 } = Cesium
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndex : renderDatas.value.length - 1
    const polyline: VcPolylineDrawing = renderDatas.value[index]
    const tempPositions = polyline.tempPositions

    if (options.button === 2 && editingPoint.value) {
      if (editorType.value === 'insert') {
        polyline.positions.splice(editingPoint.value._index, 1)
      } else {
        polyline.positions[editingPoint.value._index] = restorePosition
      }
      drawStatus.value = DrawStatus.AfterDraw
      polyline.drawStatus = DrawStatus.AfterDraw
      editingPoint.value = undefined
      drawTip.value = drawTipOpts.value.drawingTipStart
      drawingFabInstanceVm.editingActionName = undefined
      canShowDrawTip.value = defined(selectedDrawingActionInstance)
      nextTick(() => {
        emit(
          'drawEvt',
          Object.assign(
            {
              index,
              name: drawingType,
              renderDatas,
              finished: true,
              windowPoistion: movement,
              type: 'cancel'
            },
            computedRenderDatas.value[index]
          ),
          viewer
        )
      })
      return
    }

    lastClickPosition = lastClickPosition || new Cesium.Cartesian2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)

    if (Cartesian2.magnitude(Cartesian2.subtract(lastClickPosition, movement, {} as any)) < mouseDelta) {
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

    const scene = viewer.scene
    const position = getWorldPosition(scene, movement, {} as any)
    if (!defined(position)) {
      return
    }
    let finished = false
    let type = 'new'
    if (cmpName === 'VcMeasurementHorizontal') {
      if (editingPoint.value) {
        drawStatus.value = DrawStatus.AfterDraw
        editingPoint.value = undefined
        finished = true
        type = editorType.value
        drawTip.value = drawTipOpts.value.drawingTipStart
      } else if (tempPositions.length === 0) {
        const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
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
        tempPositions.push(polyline.tempNextPos!)
        polyline.positions = tempPositions
        polyline.firstMove = true
      }
      drawTip.value = drawTipOpts.value.drawingTipEnd
    } else {
      if (editingPoint.value) {
        drawStatus.value = DrawStatus.AfterDraw
        editingPoint.value = undefined
        finished = true
        type = editorType.value
        drawTip.value = drawTipOpts.value.drawingTipStart
      } else {
        tempPositions.push(position)

        polyline.positions = tempPositions
        polyline.show = true
        polyline.drawStatus = DrawStatus.Drawing
        drawStatus.value = DrawStatus.Drawing
        canShowDrawTip.value = true
        drawTip.value = drawTipOpts.value.drawingTipEnd
      }

      if (type !== 'new') {
        drawingFabInstanceVm.editingActionName = undefined
        canShowDrawTip.value = defined(selectedDrawingActionInstance)
      }
    }

    Cartesian2.clone(movement, lastClickPosition)

    nextTick(() => {
      emit(
        'drawEvt',
        Object.assign(
          {
            index,
            name: drawingType,
            renderDatas: renderDatas,
            finished: finished,
            position: cmpName === 'VcMeasurementHorizontal' ? polyline.positions[polyline.positions.length - 1] : position,
            windowPoistion: movement,
            type: type
          },
          computedRenderDatas.value[index]
        ),
        viewer
      )
    })
  }

  const handleMouseMove = (movement: Cesium.Cartesian2, options?) => {
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

    const index = editingPoint.value ? editingPoint.value._vcPolylineIndex : renderDatas.value.length - 1
    const polyline: VcPolylineDrawing = renderDatas.value[index]
    let type = 'new'
    if (cmpName === 'VcMeasurementHorizontal') {
      const { SceneMode, IntersectionTests, Cartesian3 } = Cesium
      const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
      const positions = polyline.positions
      const cameraRay = scene.camera.getPickRay(movement)
      let intersectionPosition, unprojectPosition
      if (scene.mode === SceneMode.SCENE3D && polyline.heightPlane) {
        intersectionPosition = IntersectionTests.rayPlane(cameraRay, polyline.heightPlane)
      } else if (scene.mode === SceneMode.COLUMBUS_VIEW && polyline.heightPlaneCV) {
        intersectionPosition = IntersectionTests.rayPlane(cameraRay, polyline.heightPlaneCV)
        intersectionPosition = Cartesian3.fromElements(intersectionPosition.y, intersectionPosition.z, intersectionPosition.x, intersectionPosition)
        unprojectPosition = scene.mapProjection.unproject(intersectionPosition)
        intersectionPosition = ellipsoid.cartographicToCartesian(unprojectPosition)
      } else {
        intersectionPosition = scene.camera.pickEllipsoid(movement, ellipsoid)
        if (defined(intersectionPosition)) {
          const cartographicPosition = ellipsoid.cartesianToCartographic(intersectionPosition)
          cartographicPosition.height = polyline.height || 0
          intersectionPosition = ellipsoid.cartographicToCartesian(cartographicPosition, intersectionPosition)
        }
      }

      if (!defined(intersectionPosition)) {
        return
      }

      if (!polyline.firstMove && options?.shift) {
        const lastPosition = positions[positions.length - 2]
        const tempNextPos = polyline.tempNextPos
        const d1 = Cartesian3.subtract(tempNextPos!, lastPosition, {} as any)
        let d2 = Cartesian3.subtract(intersectionPosition, lastPosition, {} as any)
        d2 = Cartesian3.projectVector(d2, d1, d2)
        intersectionPosition = Cartesian3.add(lastPosition, d2, intersectionPosition)
      }

      if (editingPoint.value) {
        const positions = polyline.positions
        positions.splice(editingPoint.value._index, 1, intersectionPosition)
        type = editorType.value
        // drawTip.value = drawTipOpts.value.drawingTipStart
      } else {
        const tempPositions = polyline.tempPositions.slice()
        tempPositions.push(intersectionPosition)
        polyline.positions = tempPositions
        polyline.firstMove = false
        polyline.tempNextPos = Object.assign(intersectionPosition)
        drawTip.value = drawTipOpts.value.drawingTipEnd
      }
    } else {
      if (editingPoint.value) {
        const positions = polyline.positions
        positions.splice(editingPoint.value._index, 1, position)
        type = editorType.value
      } else {
        const tempPositions = polyline.tempPositions.slice()

        tempPositions.push(position)
        polyline.positions = tempPositions
      }
    }

    nextTick(() => {
      emit(
        'drawEvt',
        Object.assign(
          {
            index,
            name: drawingType,
            renderDatas,
            finished: false,
            position: cmpName === 'VcMeasurementHorizontal' ? polyline.positions[polyline.positions.length - 1] : position,
            windowPoistion: movement,
            type
          },
          computedRenderDatas.value[index]
        ),
        viewer
      )
    })
  }

  const handleDoubleClick = movement => {
    const { drawingFabInstance, selectedDrawingActionInstance, viewer } = $services
    if (drawStatus.value === DrawStatus.Drawing) {
      const index = editingPoint.value ? editingPoint.value._vcPolylineIndex : renderDatas.value.length - 1
      const polyline: VcPolylineDrawing = renderDatas.value[index]
      polyline.positions = polyline.tempPositions
      polyline.drawStatus = DrawStatus.AfterDraw
      drawStatus.value = DrawStatus.AfterDraw
      drawTip.value = drawTipOpts.value.drawingTipStart

      nextTick(() => {
        emit(
          'drawEvt',
          Object.assign(
            {
              index,
              name: drawingType,
              renderDatas,
              finished: true,
              position: polyline.positions[polyline.positions.length - 1],
              windowPoistion: movement,
              type: 'new'
            },
            computedRenderDatas.value[index]
          ),
          viewer
        )

        if (props.mode === 1) {
          const drawingFabInstanceVm = drawingFabInstance?.proxy as VcDrawingsRef | VcMeasurementsRef | VcAnalysesRef
          drawingFabInstanceVm.toggleAction(selectedDrawingActionInstance)
        }
      })
    }
  }

  const getPointIndexes = () => {
    let polylineIndex = editingPoint.value._vcPolylineIndex
    let pointIndex = editingPoint.value._index

    if (cmpName === 'VcAnalysisSightline') {
      for (let i = 0; i < renderDatas.value.length; i++) {
        const polyline = renderDatas.value[i]
        for (let j = 0; j < polyline.positions.length; j++) {
          const position = polyline.positions[j]
          if (editingPoint.value.position.equals(position)) {
            polylineIndex = i
            pointIndex = j
          }
        }
      }
    }

    return [polylineIndex, pointIndex]
  }

  const onEditorClick = e => {
    editorPosition.value = [0, 0, 0]
    showEditor.value = false

    if (!props.editable) {
      return
    }

    const { viewer, drawingFabInstance } = $services
    const drawingFabInstanceVm = drawingFabInstance?.proxy as VcDrawingsRef | VcMeasurementsRef | VcAnalysesRef
    editorType.value = e
    if (e === 'move') {
      drawTip.value = drawTipOpts.value.drawingTipEditing
      drawStatus.value = DrawStatus.Drawing
      editingPoint.value = mouseoverPoint.value
      canShowDrawTip.value = true
      const indexes = getPointIndexes()
      editingPoint.value._vcPolylineIndex = indexes[0]
      editingPoint.value._index = indexes[1]
      restorePosition = renderDatas.value[indexes[0]].positions[indexes[1]]
      drawingFabInstanceVm.editingActionName = drawingType
    } else if (e === 'insert') {
      const index = mouseoverPoint.value._vcPolylineIndex
      const polyline = renderDatas.value[index]
      polyline.positions.splice(mouseoverPoint.value._index, 0, mouseoverPoint.value.position)
      editingPoint.value = mouseoverPoint.value
      canShowDrawTip.value = true
      drawStatus.value = DrawStatus.Drawing
      drawTip.value = drawTipOpts.value.drawingTipEditing
      drawingFabInstanceVm.editingActionName = drawingType
    } else if (e === 'remove') {
      const index = mouseoverPoint.value._vcPolylineIndex
      const polyline = renderDatas.value[index]
      polyline.positions.length > 2 && polyline.positions.splice(mouseoverPoint.value._index, 1)
    } else if (e === 'removeAll') {
      const index = mouseoverPoint.value._vcPolylineIndex
      renderDatas.value.splice(index, 1)
    } else {
      const index = mouseoverPoint.value._vcPolylineIndex
      const polyline = renderDatas.value[index]
      props.editorOpts?.[e]?.callback?.(index, polyline)
    }

    emit(
      'editorEvt',
      {
        type: e,
        renderDatas: renderDatas,
        name: drawingType,
        index: mouseoverPoint.value._vcPolylineIndex
      },
      viewer
    )
  }

  const clear = () => {
    renderDatas.value = []
    stop()
  }

  // expose public methods
  const publicMethods = {
    computedRenderDatas,
    renderDatas,
    startNew,
    stop,
    clear,
    handleMouseClick,
    handleMouseMove,
    handleDoubleClick
  }
  Object.assign(instance.proxy, publicMethods)

  return () => {
    const { createGuid, Cartesian3 } = Cesium
    const children: Array<VNode> = []

    const points = []
    computedRenderDatas.value.forEach((polyline, index) => {
      const positions = polyline.positions.slice()
      if (positions.length > 1) {
        // polyline
        polyline.loop && positions.push(positions[0])
        const polylineOpts = Object.assign({}, props.polylineOpts, polyline.polylineOpts)
        props.clampToGround && delete polylineOpts.arcType
        const primitiveOpts = Object.assign({}, props.primitiveOpts, polyline.primitiveOpts)
        children.push(
          h(
            props.clampToGround ? VcPrimitiveGroundPolyline : VcPrimitive,
            {
              show: (polyline.show && primitiveOpts.show) || props.editable || polyline.drawStatus === DrawStatus.Drawing,
              ...primitiveOpts
            },
            () =>
              h(
                VcGeometryInstance,
                {
                  id: createGuid()
                },
                () =>
                  h(props.clampToGround ? VcGeometryGroundPolyline : VcGeometryPolyline, {
                    positions: positions,
                    ...polylineOpts
                  })
              )
          )
        )
      }
      // for VcMeasurementHorizontal
      const dashLineOpts = Object.assign({}, props.dashLineOpts, polyline.dashLineOpts)
      const dashLinePrimitiveOpts = Object.assign({}, props.dashLinePrimitiveOpts, polyline.dashLinePrimitiveOpts)
      polyline.dashedLines?.forEach(dashedLine => {
        children.push(
          h(
            VcPrimitive,
            {
              show: (polyline.show && props.dashLinePrimitiveOpts.show) || props.editable || polyline.drawStatus === DrawStatus.Drawing,
              ...dashLinePrimitiveOpts
            },
            () =>
              h(
                VcGeometryInstance,
                {
                  id: createGuid()
                },
                () =>
                  h(VcGeometryPolyline, {
                    positions: dashedLine.positions,
                    ...dashLineOpts
                  })
              )
          )
        )
      })
      // points
      const polylinePointOpts = Object.assign({}, props.pointOpts, polyline.pointOpts)
      children.push(
        h(VcCollectionPoint, {
          enableMouseEvent: props.enableMouseEvent,
          show: polyline.show,
          points: polyline.positions.map((position, subIndex) => {
            let includes = false
            for (let i = 0; i < points.length; i++) {
              // 通视分析 的观察点会加载很多个 在这儿过滤下只显示一个
              Cartesian3.equals(position, points[i]) && (includes = true)
            }
            const show =
              (props.pointOpts?.show || props.editable || polyline.drawStatus === DrawStatus.Drawing) &&
              (cmpName === 'VcAnalysisSightline' && polyline.positions.length === 3 ? subIndex !== 1 : true) &&
              !includes

            if (cmpName === 'VcAnalysisSightline') {
              points.push(position)
            }
            // Todo 配置每一个点的颜色
            // const pointOpts = Object.assign({}, polylinePointOpts)
            return {
              position,
              id: createGuid(),
              _vcPolylineIndex: index, // for editor
              show,
              ...polylinePointOpts
            }
          }),
          onMouseover: onMouseoverPoints,
          onMouseout: onMouseoutPoints,
          onReady: onVcCollectionPointReady
        })
      )
      // labels
      cmpName.includes('VcMeasurement') &&
        children.push(
          h(VcCollectionLabel, {
            enableMouseEvent: props.enableMouseEvent,
            show: polyline.show,
            labels: polyline.labels,
            onReady: onVcCollectionLabelReady
          })
        )
      // polygon
      if (positions.length > 2 && (cmpName.includes('Polygon') || cmpName.includes('Area'))) {
        const polygonOpts = Object.assign({}, props.polygonOpts, polyline.polygonOpts)
        children.push(
          h(VcPolygon, {
            positions: positions,
            onReady: onVcPrimitiveReady,
            clampToGround: props.clampToGround,
            show: polyline.show && props.polygonOpts?.show,
            ...polygonOpts
          })
        )
      }
    })

    if (props.drawtip?.show && canShowDrawTip.value) {
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
      const buttons: Array<VNode> = []
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
                  onclick: onEditorClick.bind('polyline', key)
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
