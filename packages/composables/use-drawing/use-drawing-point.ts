/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-19 11:34:26
 * @LastEditTime: 2024-10-09 15:33:13
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\composables\use-drawing\use-drawing-point.ts
 */

import type { VcAnalysesRef, VcDrawingsRef, VcMeasurementsRef } from '@vue-cesium/components'
import type { VcPointDrawing } from '@vue-cesium/utils/drawing-types'
import type { VcComponentInternalInstance, VcDrawingProvider } from '@vue-cesium/utils/types'
import type { VNode, WatchStopHandle } from 'vue'
import { VcOverlayHtml } from '@vue-cesium/components/overlays'
import { VcCollectionBillboard, VcCollectionLabel, VcCollectionPoint, VcCollectionPrimitive } from '@vue-cesium/components/primitive-collections'
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import { DrawStatus, MeasureUnits } from '@vue-cesium/shared'
import { makeCartesian3 } from '@vue-cesium/utils/cesium-helpers'
import { platform } from '@vue-cesium/utils/platform'
import { getCurrentInstance, h, nextTick, onUnmounted, ref, watch } from 'vue'
import useCommon from '../use-common'
import { useLocale } from '../use-locale'
import useDrawingAction from './use-drawing-action'

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
    onVcCollectionLabelReady
  } = useDrawingAction(props, ctx, instance, cmpName, $services)

  const renderDatas = ref<Array<VcPointDrawing>>([])
  let restorePosition
  let unwatchFns: Array<WatchStopHandle> = []

  if (cmpName === 'VcDrawingPin' && props.billboardOpts.image === '') {
    props.billboardOpts.image = Cesium.buildModuleUrl('Assets/Textures/pin.svg')
  }

  // watch
  unwatchFns.push(
    watch(
      () => props.editable,
      (val) => {
        const { drawingFabInstance, selectedDrawingActionInstance } = $services
        if (val && selectedDrawingActionInstance?.name === drawingType) {
          const drawingFabInstanceVm = drawingFabInstance?.proxy as VcDrawingsRef | VcMeasurementsRef | VcAnalysesRef
          drawingFabInstanceVm.toggleAction(selectedDrawingActionInstance)
        }
      }
    )
  )

  const convert2Degrees = (position, point, scene) => {
    const cart = Cesium.Cartographic.fromCartesian(position, scene.globe.ellipsoid)
    const positionDegrees = [Cesium.Math.toDegrees(cart.longitude), Cesium.Math.toDegrees(cart.latitude), cart.height] as [number, number, number]
    point.positionDegrees = positionDegrees
  }

  const startNew = () => {
    const { Cartesian3 } = Cesium
    const point: VcPointDrawing = {
      drawStatus: DrawStatus.Drawing,
      show: false,
      position: new Cartesian3(),
      lng: 0,
      lat: 0,
      height: 0,
      slope: 0,
      pointOpts: {},
      labelOpts: {},
      billboardOpts: {}
    }

    renderDatas.value.push(point)
    drawStatus.value = DrawStatus.Drawing
    canShowDrawTip.value = true
    drawTip.value = drawTipOpts.value.drawingTipStart
  }

  const stop = (removeLatest = true) => {
    if (removeLatest && drawStatus.value === DrawStatus.Drawing) {
      renderDatas.value.pop()
    }

    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1
    const point: VcPointDrawing = renderDatas.value[index]
    if (point) {
      point.drawStatus = DrawStatus.AfterDraw
    }

    drawStatus.value = DrawStatus.AfterDraw
    canShowDrawTip.value = false
    drawTipPosition.value = [0, 0, 0]
  }

  const handleMouseClick = (movement, options?) => {
    const { viewer, drawingFabInstance, getWorldPosition, selectedDrawingActionInstance } = $services
    const drawingFabInstanceVm = drawingFabInstance?.proxy as VcDrawingsRef | VcMeasurementsRef | VcAnalysesRef
    if (options.button === 2 && options.ctrl) {
      const drawingsOption = drawingFabInstanceVm?.getDrawingActionInstance(drawingType)
      drawingFabInstanceVm?.toggleAction(drawingsOption)

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

    // if (drawStatus.value === DrawStatus.AfterDraw) {
    //   startNew()
    // }

    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1
    const point: VcPointDrawing = renderDatas.value[index]

    if (options.button === 2 && editingPoint.value) {
      drawingFabInstanceVm.editingActionName = undefined
      renderDatas.value[index] = restorePosition
      drawStatus.value = DrawStatus.AfterDraw
      renderDatas.value[index].drawStatus = DrawStatus.AfterDraw
      editingPoint.value = undefined
      drawTip.value = drawTipOpts.value.drawingTipStart
      canShowDrawTip.value = Cesium.defined(selectedDrawingActionInstance)
      nextTick(() => {
        emit(
          'drawEvt',
          {
            name: drawingType,
            index,
            renderDatas,
            finished: true,
            windowPoistion: movement,
            type: 'cancel'
          },
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
      drawTip.value = drawTipOpts.value.drawingTipStart

      nextTick(() => {
        emit(
          'drawEvt',
          {
            index,
            renderDatas,
            name: drawingType,
            finished: true,
            position,
            windowPoistion: movement,
            type
          },
          viewer
        )
      })
    }
    else {
      drawStatus.value = DrawStatus.AfterDraw
      point.drawStatus = DrawStatus.AfterDraw

      const scene = viewer.scene

      if (platform().hasTouch === true) {
        const position = getWorldPosition(scene, movement, {} as any)
        convert2Degrees(position, point, scene)
        if (defined(position)) {
          point.position = position
          point.show = true
        }
      }

      if (editingPoint.value) {
        editingPoint.value = undefined
        drawingFabInstanceVm.editingActionName = undefined
        canShowDrawTip.value = false
        type = editorType.value
      }
      else {
        if (props.mode === 1) {
          nextTick(() => {
            drawingFabInstanceVm.toggleAction(selectedDrawingActionInstance)
          })
        }
      }

      if (selectedDrawingActionInstance) {
        drawTip.value = drawTipOpts.value.drawingTipStart
        canShowDrawTip.value = true
      }

      nextTick(() => {
        emit(
          'drawEvt',
          {
            index,
            renderDatas,
            name: drawingType,
            finished: true,
            position: renderDatas.value[index].position,
            positionDegrees: renderDatas.value[index].positionDegrees,
            windowPoistion: movement,
            type
          },
          viewer
        )
      })
    }
  }

  const handleMouseMove = (movement) => {
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

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1
      const point: VcPointDrawing = renderDatas.value[index]
      point.position = position
      convert2Degrees(position, point, scene)
      getMeasurementResult(point, movement)
      const type = editingPoint.value ? editorType.value : 'new'
      nextTick(() => {
        emit(
          'drawEvt',
          {
            index,
            renderDatas,
            name: drawingType,
            finished: false,
            position,
            positionDegrees: point.positionDegrees,
            windowPoistion: movement,
            type
          },
          viewer
        )
      })
    }
  }

  const getMeasurementResult = (point: VcPointDrawing, movement?) => {
    const { viewer } = $services
    const scene = viewer.scene
    const { defined, Math: CesiumMath, SceneMode } = Cesium
    const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
    const positionCartographic = ellipsoid.cartesianToCartographic(point.position, {} as any)
    const globe = scene.globe
    let height = defined(globe) ? globe.getHeight(positionCartographic) ?? 0 : 0
    height = props.heightReference === 0 ? positionCartographic.height : positionCartographic.height - height
    CesiumMath.equalsEpsilon(height, 0, CesiumMath.EPSILON3) && (height = 0)
    let slope = 0

    if (scene.mode !== SceneMode.SCENE2D) {
      if (!movement) {
        movement = scene.cartesianToCanvasCoordinates(point.position, {} as any)
      }
      slope = getSlope(scene, movement)
    }

    point.show = true
    point.lng = positionCartographic.longitude
    point.lat = positionCartographic.latitude
    point.height = height
    point.slope = slope
  }

  const getSlope = (scene: Cesium.Scene, movement: Cesium.Cartesian2) => {
    const { getWorldPosition } = $services
    const { defined, Cartesian2, Cartesian3, Math: CesiumMath } = Cesium
    const position = getWorldPosition(scene, movement, {} as any)
    if (defined(position)) {
      const cameraPosition = scene.camera.position
      const distance = Cartesian3.distance(position, cameraPosition)
      const scratchCartesian3s = [new Cartesian3(), new Cartesian3(), new Cartesian3(), new Cartesian3(), new Cartesian3()]
      const normalScratch = new Cartesian3()
      const surfaceNormalScratch = new Cartesian3()
      if (!(distance > 1e4)) {
        const p0 = scratchCartesian3s[0]
        const p1 = scratchCartesian3s[1]
        const p2 = scratchCartesian3s[2]
        const p3 = scratchCartesian3s[3]
        let surfaceNormal = scene.frameState.mapProjection.ellipsoid.geodeticSurfaceNormal(position, normalScratch)
        surfaceNormal = Cartesian3.negate(surfaceNormal, surfaceNormal)
        const u = Cartesian2.clone(movement, scratchCartesian3s[0])
        u.x -= 2
        u.y -= 2
        const d = Cartesian2.clone(movement, scratchCartesian3s[1])
        d.x -= 2
        d.y += 2
        const h = Cartesian2.clone(movement, scratchCartesian3s[2])
        h.x += 2
        h.y += 2
        const p = Cartesian2.clone(movement, scratchCartesian3s[3])
        p.x += 2
        p.y -= 2

        const T = getWorldPosition(scene, u, p0)
        const x = getWorldPosition(scene, d, p1)
        const b = getWorldPosition(scene, h, p2)
        const E = getWorldPosition(scene, p, p3)
        let m, f, g, _, y, C, v, S
        if (defined(T)) {
          m = Cartesian3.subtract(T, position, p0)
          f = Cartesian3.magnitude(m) / distance <= 0.05 ? Cartesian3.normalize(m, p0) : undefined
        }
        if (defined(x)) {
          g = Cartesian3.subtract(x, position, p1)
          _ = Cartesian3.magnitude(g) / distance <= 0.05 ? Cartesian3.normalize(g, p1) : undefined
        }
        if (defined(b)) {
          y = Cartesian3.subtract(b, position, p2)
          C = Cartesian3.magnitude(y) / distance <= 0.05 ? Cartesian3.normalize(y, p2) : undefined
        }
        if (defined(E)) {
          v = Cartesian3.subtract(E, position, p3)
          S = Cartesian3.magnitude(v) / distance <= 0.05 ? Cartesian3.normalize(v, p3) : undefined
        }

        let P = Cartesian3.clone(Cartesian3.ZERO, surfaceNormalScratch)
        let A = scratchCartesian3s[4]

        if (defined(f) && defined(_)) {
          A = Cartesian3.normalize(Cartesian3.cross(f, _, A), A)
          P = Cartesian3.add(P, A, P)
        }

        if (defined(_) && defined(C)) {
          A = Cartesian3.normalize(Cartesian3.cross(_, C, A), A)
          P = Cartesian3.add(P, A, P)
        }

        if (defined(C) && defined(S)) {
          A = Cartesian3.normalize(Cartesian3.cross(C, S, A), A)
          P = Cartesian3.add(P, A, P)
        }

        if (defined(S) && defined(f)) {
          A = Cartesian3.normalize(Cartesian3.cross(S, f, A), A)
          P = Cartesian3.add(P, A, P)
        }
        if (!P.equals(Cartesian3.ZERO)) {
          P = Cartesian3.normalize(P, P)
          return CesiumMath.asinClamped(Math.abs(Math.sin(Cartesian3.angleBetween(P, surfaceNormal))))
        }
      }
    }
    return 0
  }

  const onEditorClick = (e) => {
    editorPosition.value = [0, 0, 0]
    showEditor.value = false

    if (!props.editable) {
      return
    }
    editorType.value = e
    const { viewer, drawingFabInstance } = $services
    const drawingFabInstanceVm = drawingFabInstance?.proxy as VcDrawingsRef | VcMeasurementsRef | VcAnalysesRef
    if (e === 'move') {
      drawTip.value = drawTipOpts.value.drawingTipEditing
      drawStatus.value = DrawStatus.Drawing
      editingPoint.value = mouseoverPoint.value
      canShowDrawTip.value = true
      restorePosition = Object.assign({}, renderDatas.value[editingPoint.value._vcPolylineIndx])
      drawingFabInstanceVm.editingActionName = drawingType
    }
    else if (e === 'remove') {
      const index = mouseoverPoint.value._vcPolylineIndx
      renderDatas.value.splice(index, 1)
    }
    else {
      const index = mouseoverPoint.value._vcPolylineIndx
      const polyline = renderDatas.value[index]
      props.editorOpts?.[e]?.callback?.(index, polyline)
    }

    emit(
      'editorEvt',
      {
        type: e,
        name: drawingType,
        renderDatas,
        index: mouseoverPoint.value._vcPolylineIndx,
        pointIndex: mouseoverPoint.value._index,
        point: mouseoverPoint.value
      },
      viewer
    )
  }

  const clear = () => {
    renderDatas.value = []
    stop()
  }

  const getLabelText = (point: VcPointDrawing) => {
    const { viewer } = $services
    const scene = viewer.scene
    const positionCartographic = (scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid).cartesianToCartographic(point.position, {} as any)
    if (!Cesium.defined(positionCartographic)) {
      return ''
    }

    const angleFormatter = props.angleFormatter || MeasureUnits.angleToString
    const distanceFormatter = props.distanceFormatter || MeasureUnits.distanceToString

    return (
      `${t('vc.measurement.point.lng')}${angleFormatter(
        positionCartographic.longitude,
        props.measureUnits?.angleUnits,
        props.locale,
        props.decimals?.lng
      )}\n`
      + `${t('vc.measurement.point.lat')}${angleFormatter(
        positionCartographic.latitude,
        props.measureUnits?.angleUnits,
        props.locale,
        props.decimals?.lat
      )}\n`
      + `${t('vc.measurement.point.height')}${distanceFormatter(
        point.height,
        props.measureUnits?.distanceUnits,
        props.locale,
        props.decimals?.height
      )}\n`
      + `${t('vc.measurement.point.slope')}${angleFormatter(point.slope, props.measureUnits?.slopeUnits, props.locale, props.decimals?.slope)}`
    )
  }

  if (props.preRenderDatas && props.preRenderDatas.length) {
    const { viewer } = $services
    props.preRenderDatas.forEach((preRenderData) => {
      const pointDrawing: VcPointDrawing = {
        drawStatus: DrawStatus.AfterDraw,
        show: true,
        position: makeCartesian3(preRenderData) as Cesium.Cartesian3,
        lng: 0,
        lat: 0,
        height: 0,
        slope: 0,

        pointOpts: {},
        labelOpts: {},
        billboardOpts: {}
      }
      const cart = Cesium.Cartographic.fromCartesian(pointDrawing.position, viewer.scene.globe.ellipsoid)
      pointDrawing.positionDegrees = [Cesium.Math.toDegrees(cart.longitude), Cesium.Math.toDegrees(cart.latitude), cart.height] as [
        number,
        number,
        number
      ]

      getMeasurementResult(pointDrawing)

      renderDatas.value.push(pointDrawing)
    })
  }

  // life cycle
  onUnmounted(() => {
    unwatchFns.forEach(item => item())
    unwatchFns = []
  })

  // expose public methods
  const publicMethods = { renderDatas, startNew, stop, clear, handleMouseClick, handleMouseMove }
  Object.assign(instance.proxy, publicMethods)

  return () => {
    const { createGuid } = Cesium
    const children: Array<VNode> = []
    const pointsRender: Array<any> = []
    const labelsRender: Array<any> = []
    const billboardsRender: Array<any> = []
    renderDatas.value.forEach((point, index) => {
      const pointOpts = Object.assign({}, props.pointOpts, point.pointOpts)
      pointsRender.push({
        position: point.position,
        id: createGuid(),
        _vcPolylineIndx: index, // for editor
        ...pointOpts,
        show: (point.show && props.pointOpts?.show) || props.editable || point.drawStatus === DrawStatus.Drawing
      })

      const labelsOpts = Object.assign({}, props.labelOpts, point.labelOpts)

      if (props.showLabel) {
        if (cmpName === 'VcDrawingPin') {
          const billboardOpts = Object.assign({}, props.billboardOpts, point.billboardOpts)
          billboardsRender.push({
            position: point.position,
            id: createGuid(),
            _vcPolylineIndx: index, // for editor
            ...billboardOpts
          })

          labelsOpts.text
          && labelsRender.push({
            position: point.position,
            id: createGuid(),
            ...labelsOpts
          })
        }
        else {
          labelsRender.push({
            position: point.position,
            id: createGuid(),
            text: getLabelText(point),
            ...labelsOpts
          })
        }
      }
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
    // ;(cmpName.includes('VcMeasurement') || cmpName === 'VcDrawingPin') &&
    children.push(
      h(VcCollectionLabel, {
        enableMouseEvent: props.enableMouseEvent,
        labels: labelsRender,
        onReady: onVcCollectionLabelReady
      })
    )

    cmpName === 'VcDrawingPin'
    && children.push(
      h(VcCollectionBillboard, {
        enableMouseEvent: props.enableMouseEvent,
        billboards: billboardsRender
      })
    )

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
