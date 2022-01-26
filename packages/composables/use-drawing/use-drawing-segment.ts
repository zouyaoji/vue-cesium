/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-22 14:09:42
 * @LastEditTime: 2022-01-26 17:05:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-drawing\use-drawing-segment.ts
 */
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import { VcOverlayHtml } from '@vue-cesium/components/overlays'
import { VcCollectionLabel, VcCollectionPoint, VcCollectionPrimitive, VcPolygon } from '@vue-cesium/components/primitive-collections'
import { VcPrimitive, VcPrimitiveGroundPolyline } from '@vue-cesium/components/primitives'
import { VcGeometryInstance } from '@vue-cesium/components/geometry-instance'
import {
  VcGeometryPolyline,
  VcGeometryGroundPolyline,
  VcGeometryEllipsoidOutline,
  VcGeometryEllipsoidOutlineProps
} from '@vue-cesium/components/geometries'
import { VcPostProcessStage } from '@vue-cesium/components/post-processes'
import { useLocaleInject } from '../use-locale'
import { DrawStatus, MeasureUnits } from '@vue-cesium/shared'
import {
  calculateAreaByPostions,
  getGeodesicDistance,
  getPolylineSegmentHeading,
  getHeadingPitchRoll,
  getPolylineSegmentEndpoint,
  getPolylineSegmentPitch,
  makeCartesian2,
  makeCartesian3,
  makeCartesian3Array,
  getFirstIntersection
} from '@vue-cesium/utils/cesium-helpers'
import { VcSegmentDrawing } from '@vue-cesium/utils/drawing-types'
import type { VcComponentInternalInstance, VcPosition } from '@vue-cesium/utils/types'
import { isUndefined } from '@vue-cesium/utils/util'
import type { VNode } from 'vue'
import { computed, getCurrentInstance, h, nextTick, ref } from 'vue'
import useCommon from '../use-common'
import useDrawingAction from './use-drawing-action'

export default function (props, ctx, cmpName: string, fs?: string) {
  const instance = getCurrentInstance() as VcComponentInternalInstance

  const commonState = useCommon(props, ctx, instance)
  if (commonState === void 0) {
    return
  }

  const { t } = useLocaleInject()
  const { $services } = commonState
  const { emit } = ctx

  const innerRadii = ref<VcPosition>({ x: 0.01, y: 0.01, z: 0.01 })
  let lightCamera: Cesium.Camera, shadowMap: Cesium.ShadowMap
  if (cmpName === 'VcAnalysisViewshed') {
    lightCamera = new Cesium.Camera($services.viewer.scene)
    lightCamera.frustum.near = 1
    lightCamera.frustum.far = 400
    ;(lightCamera.frustum as any).fov = Cesium.Math.PI / 3
    ;(lightCamera.frustum as any).aspectRatio = 3

    shadowMap = new Cesium.ShadowMap({
      context: ($services.viewer.scene as any).context,
      lightCamera,
      enabled: true,
      isPointLight: true,
      pointLightRadius: 400,
      cascadesEnabled: false,
      size: 2048,
      softShadows: true,
      normalOffset: false,
      fromLightSource: false
    } as any)
  }

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

  const renderDatas = ref<Array<VcSegmentDrawing>>([])
  if (props.preRenderDatas && props.preRenderDatas.length) {
    props.preRenderDatas.forEach(preRenderData => {
      const segmentDrawing: VcSegmentDrawing = {
        positions: makeCartesian3Array(preRenderData) as Array<Cesium.Cartesian3>,
        show: true,
        drawStatus: DrawStatus.AfterDraw,
        distance: 0,
        labels: []
      }

      cmpName === 'VcMeasurementVertical' &&
        Object.assign(segmentDrawing, {
          draggingPlane: new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0),
          surfaceNormal: new Cesium.Cartesian3()
        })

      renderDatas.value.push(segmentDrawing)
    })
  }
  let restorePosition
  const computedRenderDatas = computed<Array<VcSegmentDrawing>>(() => {
    const polylines: Array<VcSegmentDrawing> = []
    const { Cartesian3, Cartographic, Rectangle, createGuid, defined, Math: CesiumMath, Ray } = Cesium
    const { viewer } = $services

    renderDatas.value.forEach(polylineSegment => {
      const startPosition = polylineSegment.positions[0]
      const endPosition = polylineSegment.positions[1]

      if (Cartesian3.equals(startPosition, endPosition)) {
        return
      }

      const labels: Array<{
        position: Cesium.Cartesian3
        id: string
        text: string
      }> = []
      const distances: number[] = []
      const angles: number[] = []

      const distance =
        props.polylineOpts?.arcType === 0
          ? Cartesian3.distance(startPosition, endPosition)
          : getGeodesicDistance(startPosition, endPosition, $services.viewer.scene.globe.ellipsoid)
      const labelPosition = Cartesian3.midpoint(startPosition, endPosition, {} as any)

      const heading = getPolylineSegmentHeading(startPosition, endPosition)
      const pitch = getPolylineSegmentPitch(startPosition, endPosition)

      const polyline: VcSegmentDrawing = {
        ...polylineSegment,
        distance,
        heading,
        pitch
      }

      if (cmpName === 'VcDrawingRectangle' || cmpName === 'VcMeasurementRectangle') {
        const startCartographic = Cartographic.fromCartesian(startPosition, viewer.scene.globe.ellipsoid)
        const endCartographic = Cartographic.fromCartesian(endPosition, viewer.scene.globe.ellipsoid)
        const height = startCartographic.height
        !props.clampToGround && (endCartographic.height = height)

        const rectangle = Rectangle.fromCartesianArray(polylineSegment.positions, viewer.scene.globe.ellipsoid)
        const rectangleArr = [
          rectangle.west,
          rectangle.north,
          height,
          rectangle.east,
          rectangle.north,
          height,
          rectangle.east,
          rectangle.south,
          height,
          rectangle.west,
          rectangle.south,
          height,
          rectangle.west,
          rectangle.north,
          height
        ]
        const polygonPositions = Cartesian3.fromRadiansArrayHeights(rectangleArr, viewer.scene.globe.ellipsoid)
        Object.assign(polyline, {
          polygonPositions,
          height
        })
      } else if (cmpName === 'VcDrawingRegular' || cmpName === 'VcMeasurementRegular') {
        const startPosition = polylineSegment.positions[0]
        const endPosition = polylineSegment.positions[1]

        const hpr = getHeadingPitchRoll(startPosition, endPosition, viewer.scene)
        if (!isUndefined(hpr) && defined(hpr)) {
          const polygonPositions: Array<Cesium.Cartesian3> = []
          const startCartographic = Cartographic.fromCartesian(startPosition, viewer.scene.globe.ellipsoid)
          const endCartographic = Cartographic.fromCartesian(endPosition, viewer.scene.globe.ellipsoid)

          !props.clampToGround && (endCartographic.height = startCartographic.height)
          polygonPositions.push(Cartographic.toCartesian(endCartographic, viewer.scene.globe.ellipsoid))
          for (let i = 0; i < (props.edge || 4) - 1; i++) {
            const position = getPolylineSegmentEndpoint(
              startPosition,
              (hpr[0] += (Math.PI * 2) / (props.edge || 4)),
              distance,
              viewer.scene.globe.ellipsoid
            )
            polygonPositions.push(position)
          }

          Object.assign(polyline, {
            polygonPositions,
            height: startCartographic.height
          })
        }
      } else if (cmpName === 'VcAnalysisViewshed') {
        // lightCamera
        const viewPosition = makeCartesian3(startPosition) as Cesium.Cartesian3
        lightCamera.position = viewPosition
        lightCamera.frustum.near = 0.001 * distance
        lightCamera.frustum.far = distance
        const hr = CesiumMath.toRadians(props.ellipsoidOpts.horizontalViewAngle)
        const vr = CesiumMath.toRadians(props.ellipsoidOpts.verticalViewAngle)
        const aspectRatio = (polyline.distance * Math.tan(hr / 2) * 2) / (distance * Math.tan(vr / 2) * 2)
        ;(lightCamera.frustum as any).fov = hr > vr ? hr : vr
        ;(lightCamera.frustum as any).aspectRatio = aspectRatio
        lightCamera.setView({
          destination: viewPosition,
          orientation: {
            heading: CesiumMath.toRadians(heading || 0),
            pitch: CesiumMath.toRadians(pitch || 0),
            roll: 0
          }
        })

        // shadowMap
        shadowMap._pointLightRadius = distance
        viewer.scene.shadowMap = shadowMap
      } else if (cmpName === 'VcAnalysisSightline') {
        if (props.sightlineType === 'segment') {
          const positionsNew: Array<Cesium.Cartesian3> = []
          positionsNew.push(startPosition)
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
          const intersection = getFirstIntersection(startPosition, endPosition, $services.viewer, objectsToExclude)
          if (defined(intersection)) {
            positionsNew.push(intersection)
          }
          positionsNew.push(endPosition)
          let distance = 0
          const distances = []
          for (let i = 0; i < positionsNew.length - 1; i++) {
            const s = Cartesian3.distance(positionsNew[i], positionsNew[i + 1])
            distances.push(s)
            distance = distance + s
          }
          Object.assign(polyline, {
            positions: positionsNew,
            distance
          })
        } else if (props.sightlineType === 'circle') {
          // Todo
        }
      } else {
        labels.push({
          position: labelPosition,
          id: createGuid(),
          text: MeasureUnits.distanceToString(distance, props.measureUnits?.distanceUnits, props.locale, props.decimals?.distance),
          ...props.labelOpts
        })
      }

      if (polyline.polygonPositions && polyline.polygonPositions.length) {
        const positions = polyline.polygonPositions.slice()
        props.loop && positions.length > 2 && positions.push(positions[0])
        for (let i = 0; i < positions.length - 1; i++) {
          let s = 0
          if (props.polylineOpts?.arcType === 0) {
            s = getGeodesicDistance(positions[i], positions[i + 1], $services.viewer.scene.globe.ellipsoid)
          } else {
            s = Cartesian3.distance(positions[i], positions[i + 1])
          }
          distances.push(s)
          if (s > 0 && positions.length > 2 && props.showDistanceLabel) {
            labels.push({
              text: MeasureUnits.distanceToString(s, props.measureUnits?.distanceUnits, props.locale, props.decimals?.distance),
              position: Cartesian3.midpoint(positions[i], positions[i + 1], {} as any),
              id: createGuid(),
              ...props.labelsOpts
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
                ...props.labelsOpts
              })
            }
          }
        }

        const area = calculateAreaByPostions(positions)
        labels.push({
          text: MeasureUnits.areaToString(area, props.measureUnits?.areaUnits, props.locale, props.decimals?.area),
          position: polylineSegment.positions[0],
          id: createGuid(),
          ...props.labelOpts
        })
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

        labels.push({
          position: polyline.xLabelPosition,
          id: createGuid(),
          text: MeasureUnits.distanceToString(polyline.xDistance || 0, props.measureUnits?.distanceUnits, props.locale, props.decimals?.distance),
          ...props.xLabelOpts
        })

        labels.push({
          position: polyline.yLabelPosition,
          id: createGuid(),
          text: MeasureUnits.distanceToString(polyline.yDistance || 0, props.measureUnits?.distanceUnits, props.locale, props.decimals?.distance),
          ...props.yLabelOpts
        })

        labels.push({
          position: polyline.xAnglePosition,
          id: createGuid(),
          text: MeasureUnits.angleToString(polyline.xAngle || 0, props.measureUnits?.angleUnits, props.locale, props.decimals?.angle),
          ...props.xAngleLabelOpts
        })

        labels.push({
          position: polyline.yAnglePosition,
          id: createGuid(),
          text: MeasureUnits.angleToString(polyline.yAngle || 0, props.measureUnits?.angleUnits, props.locale, props.decimals?.angle),
          ...props.yAngleLabelOpts
        })
      }

      Object.assign(polyline, {
        labels
      })

      polylines.push(polyline)
    })
    return polylines
  })

  // methods
  instance.createCesiumObject = async () => {
    return primitiveCollectionRef
  }

  instance.mount = async () => {
    const { viewer } = $services
    cmpName === 'VcMeasurementDistance' && viewer.scene.preRender.addEventListener(updateLabelPosition)
    ;(cmpName === 'VcMeasurementRegular' || cmpName === 'VcMeasurementRectangle') &&
      viewer.scene.preRender.addEventListener(updateLabelPositionPolygon)
    return true
  }

  instance.unmount = async () => {
    const { viewer } = $services
    cmpName === 'VcMeasurementDistance' && viewer.scene.preRender.removeEventListener(updateLabelPosition)
    ;(cmpName === 'VcMeasurementRegular' || cmpName === 'VcMeasurementRectangle') &&
      viewer.scene.preRender.removeEventListener(updateLabelPositionPolygon)
    return true
  }

  const getHeightPosition = (polyline: VcSegmentDrawing, movement: Cesium.Cartesian2) => {
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
    let surfaceNormal = polyline.surfaceNormal!
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

  const updateComponents = (polyline: VcSegmentDrawing) => {
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
    if (xyPolylinePositions === undefined) {
      return
    }
    xyPolylinePositions[0] = startPoint
    xyPolylinePositions[2] = endPoint
    let normal = ellipsoid.geodeticSurfaceNormal(startPoint, {} as any)
    normal = Cartesian3.multiplyByScalar(normal, height2 - height1, normal)
    const xyPoint = Cartesian3.add(startPoint, normal, xyPolylinePositions[1])
    if (!(Cartesian3.equalsEpsilon(xyPoint, endPoint, CesiumMath.EPSILON10) && Cartesian3.equalsEpsilon(xyPoint, startPoint, CesiumMath.EPSILON10))) {
      let diffrenceX = Cartesian3.subtract(endPoint, xyPoint, {} as any)
      let diffrenceY = Cartesian3.subtract(startPoint, xyPoint, {} as any)
      const distanceMin = Math.min(Cartesian3.magnitude(diffrenceX), Cartesian3.magnitude(diffrenceY))
      const factor = 15 < distanceMin ? 0.15 * distanceMin : 0.25 * distanceMin
      diffrenceX = Cartesian3.normalize(diffrenceX, diffrenceX)
      diffrenceY = Cartesian3.normalize(diffrenceY, diffrenceY)
      diffrenceX = Cartesian3.multiplyByScalar(diffrenceX, factor, diffrenceX)
      diffrenceY = Cartesian3.multiplyByScalar(diffrenceY, factor, diffrenceY)
      const xyBoxPositions = polyline.xyBoxPositions
      if (xyBoxPositions === undefined) {
        return
      }
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

  const updateLabelPositionPolygon = () => {
    computedRenderDatas.value.forEach((polyline, index) => {
      const positions = polyline.polygonPositions!
      if (!(positions.length < 2)) {
        const { defined, SceneTransforms, Cartesian2, HorizontalOrigin } = Cesium
        const { viewer } = $services
        const scene = viewer.scene

        let startPosition = polyline.positions[0]
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
            const label = labels[i - 1]
            if (label && label !== labelTotalLength) {
              label.horizontalOrigin = 0 < l ? HorizontalOrigin.LEFT : HorizontalOrigin.RIGHT
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

  const updateLabelPosition = () => {
    computedRenderDatas.value.forEach((polyline, index) => {
      const { defined, SceneTransforms, HorizontalOrigin } = Cesium
      const { viewer } = $services
      const scene = viewer.scene
      const primitiveCollection = primitiveCollectionRef.value?.cesiumObject as Cesium.PrimitiveCollection
      const positions = polyline.positions
      const startPosition = positions[0]
      const endPosition = positions[1]
      const startPositionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, startPosition, {} as any)
      const endPositionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, endPosition, {} as any)
      if (defined(startPositionWindow) && defined(endPositionWindow)) {
        const labelCollection: Array<Cesium.LabelCollection> = (primitiveCollection as any)._primitives.filter(
          v => v instanceof Cesium.LabelCollection
        )
        if (labelCollection.length) {
          const label = labelCollection[index].get(0)
          let yLabel: Cesium.Label | undefined,
            xAngleLabel: Cesium.Label | undefined,
            yPixelOffset: Cesium.Cartesian2 | undefined,
            xPixelOffset: Cesium.Cartesian2 | undefined
          if (props.showComponentLines) {
            yLabel = labelCollection[index].get(2)
            xAngleLabel = labelCollection[index].get(3)
            yPixelOffset = makeCartesian2(props.yLabelOpts?.pixelOffset) as Cesium.Cartesian2
            xPixelOffset = makeCartesian2(props.xAngleLabelOpts?.pixelOffset) as Cesium.Cartesian2
          }

          if ((startPositionWindow.y - endPositionWindow.y) / (endPositionWindow.x - startPositionWindow.x) > 0) {
            if (!isUndefined(yLabel) && !isUndefined(yPixelOffset)) {
              yPixelOffset.x = -9
              yLabel.pixelOffset = yPixelOffset
              yLabel.horizontalOrigin = HorizontalOrigin.RIGHT
            }

            if (!isUndefined(xAngleLabel) && !isUndefined(xPixelOffset)) {
              xPixelOffset.x = 12
              xAngleLabel.pixelOffset = xPixelOffset
              xAngleLabel.horizontalOrigin = HorizontalOrigin.LEFT
            }

            label.horizontalOrigin = HorizontalOrigin.LEFT
          } else {
            if (!isUndefined(yLabel) && !isUndefined(yPixelOffset)) {
              yPixelOffset.x = 9
              yLabel.pixelOffset = yPixelOffset
              yLabel.horizontalOrigin = HorizontalOrigin.LEFT
            }

            if (!isUndefined(xAngleLabel) && !isUndefined(xPixelOffset)) {
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

  const makeHeightPositions = (polyline: VcSegmentDrawing, position: Cesium.Cartesian3) => {
    const { defined, defaultValue, Cartesian3 } = Cesium
    const { viewer } = $services
    const scene = viewer.scene
    const positions = polyline.positions
    positions[0] = position
    const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
    const postionCartographic = ellipsoid.cartesianToCartographic(position, {} as any)
    const globe = scene.globe
    postionCartographic.height = defined(globe) ? defaultValue(globe.getHeight(postionCartographic), 0) : 0
    positions[1] = ellipsoid.cartographicToCartesian(postionCartographic, {} as any)
    polyline.distance = Cartesian3.distance(positions[0], positions[1])
    polyline.labelPosition = Cartesian3.midpoint(positions[0], positions[1], {} as any)
  }

  const startNew = () => {
    const { Cartesian3, Plane } = Cesium
    const polyline: VcSegmentDrawing = {
      positions: [new Cartesian3(), new Cartesian3()],
      show: false,
      drawStatus: DrawStatus.BeforeDraw,
      distance: 0,
      labels: []
    }
    if (cmpName === 'VcAnalysisViewshed') {
      clear()
    }

    cmpName === 'VcMeasurementVertical' &&
      Object.assign(polyline, {
        draggingPlane: new Plane(Cartesian3.UNIT_X, 0),
        surfaceNormal: new Cartesian3()
      })

    renderDatas.value.push(polyline)
    drawStatus.value = DrawStatus.BeforeDraw
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
    const { viewer, drawingFabInstance, selectedDrawingActionInstance, getWorldPosition } = $services

    if (options.button === 2 && options.ctrl) {
      // 取消绘制
      const drawingsOption = (drawingFabInstance?.proxy as any).drawingActionInstances.find(v => v.name === drawingType)
      ;(drawingFabInstance?.proxy as any).toggleAction(drawingsOption)
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

    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1
    const polyline: VcSegmentDrawing = renderDatas.value[index]
    const positions = polyline.positions

    if (options.button === 2 && editingPoint.value) {
      // 放弃编辑
      ;(drawingFabInstance?.proxy as any).editingActionName = undefined
      polyline.positions[editingPoint.value._index] = restorePosition
      drawStatus.value = DrawStatus.AfterDraw
      polyline.drawStatus = DrawStatus.AfterDraw
      editingPoint.value = undefined
      drawTip.value = drawTipOpts.value.drawingTipStart
      if (cmpName === 'VcMeasurementHeight') {
        makeHeightPositions(polyline, restorePosition)
      }
      nextTick(() => {
        emit(
          'drawEvt',
          Object.assign(
            {
              name: drawingType,
              index,
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

    if (options.button !== 0) {
      return
    }

    const { defined } = Cesium
    let type = 'new'
    let emitPosition
    let finished = false
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
      drawTip.value = drawTipOpts.value.drawingTipEnd
      emitPosition = position
      finished = false

      if (cmpName === 'VcMeasurementVertical') {
        const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
        polyline.surfaceNormal = ellipsoid.geodeticSurfaceNormal(position, polyline.surfaceNormal)
      }

      if (cmpName === 'VcMeasurementHeight') {
        makeHeightPositions(polyline, position)
        finished = true

        polyline.drawStatus = DrawStatus.AfterDraw
        drawStatus.value = DrawStatus.AfterDraw
        drawTip.value = drawTipOpts.value.drawingTipStart

        if (props.mode === 1) {
          ;(drawingFabInstance?.proxy as any).toggleAction(selectedDrawingActionInstance)
        }
      }
    } else {
      // if (cmpName !== 'VcMeasurementHeight') {

      // }
      polyline.drawStatus = DrawStatus.AfterDraw
      drawStatus.value = DrawStatus.AfterDraw

      if (editingPoint.value) {
        editingPoint.value = undefined
        ;(drawingFabInstance?.proxy as any).editingActionName = undefined
        canShowDrawTip.value = false
        drawTipPosition.value = [0, 0, 0]
        type = editorType.value

        if (selectedDrawingActionInstance) {
          drawTip.value = drawTipOpts.value.drawingTipStart
          canShowDrawTip.value = true
        }
      } else {
        if (props.mode === 1) {
          ;(drawingFabInstance?.proxy as any).toggleAction(selectedDrawingActionInstance)
        }
      }

      finished = true
      emitPosition = polyline.positions[1]
    }

    nextTick(() => {
      emit(
        'drawEvt',
        Object.assign(
          {
            index,
            renderDatas,
            name: drawingType,
            finished,
            position: emitPosition,
            windowPoistion: movement,
            type
          },
          computedRenderDatas.value[index]
        ),
        viewer
      )
    })
  }

  const handleMouseMove = movement => {
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

    if (cmpName === 'VcMeasurementVertical' && scene.mode === Cesium.SceneMode.SCENE2D) {
      return
    }

    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1
    const polyline: VcSegmentDrawing = renderDatas.value[index]

    if (cmpName === 'VcMeasurementVertical') {
      const heightPostion = getHeightPosition(polyline, movement)

      if (!isUndefined(heightPostion) && defined(heightPostion)) {
        const positions = polyline.positions
        positions[editingPoint.value ? editingPoint.value._index : 1] = heightPostion
      }
    } else if (cmpName === 'VcMeasurementHeight') {
      makeHeightPositions(polyline, position)
    } else if (
      cmpName === 'VcDrawingRectangle' ||
      cmpName === 'VcDrawingRegular' ||
      cmpName === 'VcMeasurementRegular' ||
      cmpName === 'VcMeasurementRectangle'
    ) {
      const positions = polyline.positions
      const startPosition = positions[0]
      const startCartographic = Cartographic.fromCartesian(startPosition, viewer.scene.globe.ellipsoid)
      const endCartographic = Cartographic.fromCartesian(position, viewer.scene.globe.ellipsoid)
      !props.clampToGround && (endCartographic.height = startCartographic.height)
      positions[editingPoint.value ? editingPoint.value._index : 1] = Cartographic.toCartesian(endCartographic, viewer.scene.globe.ellipsoid)
    } else if (cmpName === 'VcAnalysisSightline') {
      // if (props.sightlineType === 'segment') {

      // }
      const positions = polyline.positions
      if (editingPoint.value) {
        const index = editingPoint.value._index > 0 ? 1 : 0
        positions[index] = position
      } else {
        positions[1] = position
      }
    } else {
      const positions = polyline.positions
      positions[editingPoint.value ? editingPoint.value._index : 1] = position
    }

    nextTick(() => {
      emit(
        'drawEvt',
        Object.assign(
          {
            index,
            renderDatas,
            name: drawingType,
            finished: false,
            position: polyline.positions[1],
            windowPoistion: movement,
            type: editingPoint.value ? editorType : 'new'
          },
          computedRenderDatas.value[index]
        ),
        viewer
      )
    })
  }

  const onEditorClick = e => {
    editorPosition.value = [0, 0, 0]
    showEditor.value = false

    if (!props.editable) {
      return
    }

    editorType.value = e

    const { viewer, drawingFabInstance } = $services
    if (e === 'move') {
      drawTip.value = drawTipOpts.value.drawingTipEditing
      drawStatus.value = DrawStatus.Drawing
      editingPoint.value = mouseoverPoint.value
      restorePosition = renderDatas.value[editingPoint.value._vcPolylineIndx].positions[editingPoint.value._index]
      canShowDrawTip.value = true
      ;(drawingFabInstance?.proxy as any).editingActionName = drawingType
    } else if (e === 'remove') {
      const index = mouseoverPoint.value._vcPolylineIndx
      const polyline = renderDatas.value[index]
      polyline.positions.splice(mouseoverPoint.value._index, 1)
    } else if (e === 'removeAll') {
      const index = mouseoverPoint.value._vcPolylineIndx
      renderDatas.value.splice(index, 1)
    } else {
      const index = mouseoverPoint.value._vcPolylineIndx
      const polyline = renderDatas.value[index]
      props.editorOpts?.[e]?.callback?.(index, polyline)
    }

    emit(
      'editorEvt',
      {
        type: e,
        renderDatas,
        name: drawingType,
        index: mouseoverPoint.value._vcPolylineIndx
      },
      viewer
    )
  }

  const clear = () => {
    renderDatas.value = []
    stop()
  }

  // expose public methods
  const publicMethods = { renderDatas, startNew, stop, clear, handleMouseClick, handleMouseMove }
  Object.assign(instance.proxy, publicMethods)

  return () => {
    const {
      ColorGeometryInstanceAttribute,
      PolylineMaterialAppearance,
      Ellipsoid,
      createGuid,
      defaultValue,
      Math: CesiumMath,
      Matrix4,
      Cartesian3,
      Transforms,
      HeadingPitchRoll,
      PerInstanceColorAppearance,
      Cartesian4,
      Cartesian2
    } = Cesium

    const polylineOpts = {
      ...props.polylineOpts,
      vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT,
      ellipsoid: defaultValue(props.polylineOpts?.ellipsoid, Ellipsoid.WGS84)
    }
    props.clampToGround && delete polylineOpts.arcType
    const children: Array<VNode> = []
    computedRenderDatas.value.forEach((polyline, index) => {
      const isRegular =
        cmpName === 'VcDrawingRectangle' ||
        cmpName === 'VcDrawingRegular' ||
        cmpName === 'VcMeasurementRegular' ||
        cmpName === 'VcMeasurementRectangle'
      const positions = isRegular ? polyline.polygonPositions?.slice() : polyline.positions
      isRegular && positions?.push(positions[0])
      if (positions?.length && positions?.length > 1) {
        // polyline
        children.push(
          h(
            props.clampToGround ? VcPrimitiveGroundPolyline : VcPrimitive,
            {
              ...props.primitiveOpts,
              show: (polyline.show && props.primitiveOpts.show) || props.editable || polyline.drawStatus === DrawStatus.Drawing
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
        // viewshed
        if (cmpName === 'VcAnalysisViewshed') {
          // ellipsoid
          const { viewer } = $services

          const modelMatrix = Matrix4.fromTranslationQuaternionRotationScale(
            polyline.positions[0],
            Transforms.headingPitchRollQuaternion(
              polyline.positions[0],
              HeadingPitchRoll.fromDegrees(polyline.heading! - props.ellipsoidOpts.horizontalViewAngle, polyline.pitch!, 0),
              viewer.scene.globe.ellipsoid
            ),
            new Cartesian3(1, 1, 1)
          )
          const color = ColorGeometryInstanceAttribute.fromColor(props.ellipsoidOpts.color)
          children.push(
            h(VcPostProcessStage, {
              fragmentShader: fs,
              uniforms: {
                shadowMap_textureCube: function () {
                  shadowMap.update(viewer.scene.frameState)
                  return shadowMap._shadowMapTexture
                },
                shadowMap_matrix: function () {
                  shadowMap.update(viewer.scene.frameState)
                  return shadowMap._shadowMapMatrix
                },
                shadowMap_lightPositionEC: function () {
                  shadowMap.update(viewer.scene.frameState)
                  return shadowMap._lightPositionEC
                },
                shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness: function () {
                  shadowMap.update(viewer.scene.frameState)
                  const bias = shadowMap._pointBias
                  return Cartesian4.fromElements(bias.normalOffsetScale, shadowMap._distance, shadowMap.maximumDistance, 0, new Cartesian4())
                },
                shadowMap_texelSizeDepthBiasAndNormalShadingSmooth: function () {
                  shadowMap.update(viewer.scene.frameState)
                  const bias = shadowMap._pointBias
                  const scratchTexelStepSize = new Cartesian2()
                  const texelStepSize = scratchTexelStepSize
                  texelStepSize.x = 1.0 / shadowMap._textureSize.x
                  texelStepSize.y = 1.0 / shadowMap._textureSize.y
                  return Cartesian4.fromElements(texelStepSize.x, texelStepSize.y, bias.depthBias, bias.normalShadingSmooth, new Cartesian4())
                },
                camera_projection_matrix: lightCamera.frustum.projectionMatrix,
                camera_view_matrix: lightCamera.viewMatrix,
                vc_viewDistance: function () {
                  return polyline.distance
                },
                vc_visibleAreaColor: props.visibleAreaColor || Cesium.Color.LIME,
                vc_invisibleAreaColor: props.invisibleAreaColor || Cesium.Color.RED
              }
            })
          )
          const radii: VcPosition = { x: polyline.distance, y: polyline.distance, z: polyline.distance }
          children.push(
            h(
              VcPrimitive,
              {
                show: (polyline.show && props.ellipsoidOpts.show) || props.editable || polyline.drawStatus === DrawStatus.Drawing,
                enableMouseEvent: props.enableMouseEvent,
                appearance: new PerInstanceColorAppearance({
                  flat: true
                }),
                asynchronous: false
              },
              () => [
                h(
                  VcGeometryInstance,
                  {
                    id: createGuid(),
                    modelMatrix,
                    attributes: {
                      color
                    }
                  },
                  () =>
                    h(VcGeometryEllipsoidOutline, {
                      radii: radii,
                      minimumClock: CesiumMath.toRadians(-props.ellipsoidOpts.horizontalViewAngle / 2),
                      maximumClock: CesiumMath.toRadians(props.ellipsoidOpts.horizontalViewAngle / 2),
                      minimumCone: CesiumMath.toRadians(props.ellipsoidOpts.verticalViewAngle + 7.75),
                      maximumCone: CesiumMath.toRadians(180 - props.ellipsoidOpts.verticalViewAngle - 7.75),
                      subdivisions: 256,
                      stackPartitions: 64,
                      slicePartitions: 64
                    } as VcGeometryEllipsoidOutlineProps)
                )
              ]
            )
          )
          children.push(
            h(
              VcPrimitive,
              {
                show: (polyline.show && props.ellipsoidOpts.show) || props.editable || polyline.drawStatus === DrawStatus.Drawing,
                enableMouseEvent: props.enableMouseEvent,
                appearance: new PerInstanceColorAppearance({
                  flat: true
                }),
                asynchronous: false
              },
              () =>
                h(
                  VcGeometryInstance,
                  {
                    id: createGuid(),
                    modelMatrix,
                    attributes: {
                      color
                    }
                  },
                  () =>
                    h(VcGeometryEllipsoidOutline, {
                      radii: radii,
                      innerRadii: innerRadii.value,
                      minimumClock: CesiumMath.toRadians(-props.ellipsoidOpts.horizontalViewAngle / 2),
                      maximumClock: CesiumMath.toRadians(props.ellipsoidOpts.horizontalViewAngle / 2),
                      minimumCone: CesiumMath.toRadians(props.ellipsoidOpts.verticalViewAngle + 7.75),
                      maximumCone: CesiumMath.toRadians(180 - props.ellipsoidOpts.verticalViewAngle - 7.75),
                      subdivisions: 128,
                      stackPartitions: 10,
                      slicePartitions: 8
                    } as VcGeometryEllipsoidOutlineProps)
                )
            )
          )
        }
      }

      if (polyline.polygonPositions && polyline.polygonPositions.length > 2) {
        // polygon
        children.push(
          h(VcPolygon, {
            positions: positions,
            onReady: onVcPrimitiveReady,
            ...props.polygonOpts,
            show: polyline.show && props.polygonOpts?.show
          })
        )
      }
      if (polyline.xyPolylinePositions && polyline.xyPolylinePositions.length > 1) {
        // xyPolyline
        children.push(
          h(
            VcPrimitive,
            {
              ...props.primitiveOpts,
              show: (polyline.show && props.primitiveOpts) || props.editable || polyline.drawStatus === DrawStatus.Drawing
            },
            () =>
              h(
                VcGeometryInstance,
                {
                  id: createGuid()
                },
                () =>
                  h(VcGeometryPolyline, {
                    positions: polyline.xyPolylinePositions,
                    ...polylineOpts
                  })
              )
          )
        )
      }
      if (polyline.xyBoxPositions && polyline.xyBoxPositions.length > 1) {
        // xyBox
        children.push(
          h(
            VcPrimitive,
            {
              ...props.primitiveOpts,
              show: (polyline.show && props.primitiveOpts) || props.editable || polyline.drawStatus === DrawStatus.Drawing
            },
            () =>
              h(
                VcGeometryInstance,
                {
                  id: createGuid()
                },
                () =>
                  h(VcGeometryPolyline, {
                    positions: polyline.xyBoxPositions,
                    ...polylineOpts
                  })
              )
          )
        )
      }
      // point
      children.push(
        h(VcCollectionPoint, {
          enableMouseEvent: props.enableMouseEvent,
          show: polyline.show,
          points: polyline.positions.map((position, subIndex) => ({
            position: position,
            id: createGuid(),
            _vcPolylineIndx: index, // for editor
            ...props.pointOpts,
            show:
              (props.pointOpts?.show || props.editable || polyline.drawStatus === DrawStatus.Drawing) &&
              (cmpName === 'VcAnalysisSightline' && polyline.positions.length === 3 ? subIndex !== 1 : true)
          })),
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
    })

    if (props.drawtip?.show && canShowDrawTip.value) {
      const { viewer } = $services
      children.push(
        h(
          VcOverlayHtml,
          {
            position: drawTipPosition.value,
            pixelOffset: props.drawtip?.pixelOffset,
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
                  onclick: onEditorClick.bind(undefined, key)
                },
                () =>
                  h(
                    VcTooltip,
                    {
                      ...editorOpts[key].tooltip
                    },
                    () => h('strong', null, editorOpts[key].tooltip?.tip || t(`vc.measurement.editor.${key}`))
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
