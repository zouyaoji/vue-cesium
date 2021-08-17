import { defineComponent, getCurrentInstance, ref, h, computed, nextTick, watch, onUnmounted } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { restoreViewerCursor, setViewerCursor } from '@vue-cesium/utils/cesium-helpers'
import { PointMeasurement } from '../measure.types'
import { DrawStatus } from '@vue-cesium/shared'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { MeasureUnits } from '@vue-cesium/shared'

export default defineComponent({
  name: 'VcMeasurementPoint',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'measureEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurementPoint'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    const points = ref<Array<PointMeasurement>>([])
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
        const { measurementVm, selectedMeasurementOption } = $services
        if (val && selectedMeasurementOption?.name === 'point') {
          (measurementVm.proxy as any).toggleAction(selectedMeasurementOption)
        }
      }
    ))

    // methods
    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }

    const startNew = () => {
      const { Cartesian3 } = Cesium
      const point: PointMeasurement = {
        drawStatus: DrawStatus.Drawing,
        show: false,
        position: new Cartesian3(),
        height: 0,
        slope: 0
      }

      points.value.push(point)
      drawStatus.value = DrawStatus.Drawing
      canShowDrawTip.value = true
      drawTip.value = props.drawtip.drawingTip1 || t('vc.measurement.point.drawTip1')
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
      const { viewer, measurementVm, getWorldPosition, selectedMeasurementOption } = $services

      if (options.button === 2 && options.ctrl) {
        const measurementsOption = (measurementVm.proxy as any).measurementsOptions.find(v => v.name === 'point')
          ; (measurementVm.proxy as any).toggleAction(measurementsOption)
        return
      }

      // if (drawStatus.value === DrawStatus.AfterDraw) {
      //   startNew()
      // }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : points.value.length - 1
      const point: PointMeasurement = points.value[index]

      if (options.button === 2 && editingPoint.value) {
        (measurementVm.proxy as any).editingMeasurementName = undefined
        restoreViewerCursor(viewer)
        points.value[index] = restorePoint
        drawStatus.value = DrawStatus.AfterDraw
        points.value[index].drawStatus = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.point.drawTip1')
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
        drawTip.value = props.drawtip.drawingTip1 || t('vc.measurement.point.drawTip1')

        nextTick(() => {
          emit('measureEvt', {
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
          ; (measurementVm.proxy as any).editingMeasurementName = undefined
          restoreViewerCursor(viewer)
          canShowDrawTip.value = false
        } else {
          if (props.mode === 1) {
            (measurementVm.proxy as any).toggleAction(selectedMeasurementOption)
          }
        }

        if (selectedMeasurementOption) {
          drawTip.value = t('vc.measurement.point.drawTip1')
          canShowDrawTip.value = true
        }

        nextTick(() => {
          emit('measureEvt', {
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
      const { defined, SceneMode, defaultValue, Math: CesiumMath } = Cesium

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
        const point: PointMeasurement = points.value[index]
        const ellipsoid = scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid
        const postionCartographic = ellipsoid.cartesianToCartographic(position, {} as any)
        const globe = scene.globe
        let height = defined(globe) ? defaultValue(globe.getHeight(postionCartographic), 0) : 0
        height = props.heightReference === 0 ? postionCartographic.height : postionCartographic.height - height
        CesiumMath.equalsEpsilon(height, 0, CesiumMath.EPSILON3) && (height = 0)
        let slope = 0

        if (scene.mode !== SceneMode.SCENE2D) {
          slope = getSlope(scene, movement)
        }

        point.position = position
        point.height = height
        point.slope = slope
        point.show = true

        nextTick(() => {
          emit('measureEvt', {
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
        if (!(1e4 < distance)) {
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
        drawTip.value = t('vc.measurement.point.drawTip3')
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        canShowDrawTip.value = true
        restorePoint = Object.assign({}, points.value[editingPoint.value._vcPolylineIndx])
        ; (measurementVm.proxy as any).editingMeasurementName = 'point'
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
      cesiumObject._vcId = 'VcMeasurementPoint'
    }

    const getLabelText = (point: PointMeasurement) => {
      const { viewer } = $services
      const scene = viewer.scene
      const positionCartographic = (scene.frameState.mapProjection.ellipsoid as Cesium.Ellipsoid).cartesianToCartographic(point.position, {} as any)
      if (!Cesium.defined(positionCartographic)) {
        return ''
      }

      return `${t('vc.measurement.point.lng')}${MeasureUnits.angleToString(positionCartographic.longitude, props.measureUnits.angleUnits, props.locale, props.decimals.lng)}\n` +
        `${t('vc.measurement.point.lat')}${MeasureUnits.angleToString(positionCartographic.latitude, props.measureUnits.angleUnits, props.locale, props.decimals.lat)}\n` +
        `${t('vc.measurement.point.height')}${MeasureUnits.distanceToString(point.height, props.measureUnits.distanceUnits, props.locale, props.decimals.height)}\n` +
        `${t('vc.measurement.point.slope')}${MeasureUnits.angleToString(point.slope, props.measureUnits.slopeUnits, props.locale, props.decimals.slope)}`
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

        // label
        const labels = []
        labels.push({
          position: point.position,
          id: createGuid(),
          text: getLabelText(point),
          ...props.labelOpts
        })

        children.push(h(VcCollectionLabel, {
          enableMouseEvent: props.enableMouseEvent,
          show: point.show,
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
