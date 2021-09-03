import { defineComponent, getCurrentInstance, ref, h, nextTick } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive } from '@vue-cesium/primitives'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { makeMaterial } from '@vue-cesium/utils/cesium-helpers'
import { HeightMeasurementPolylineSegment } from '../measure.types'
import { DrawStatus } from '@vue-cesium/shared'
import VcInstanceGeometry from '@vue-cesium/geometry-instance'
import { VcGeometryPolyline } from '@vue-cesium/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { MeasureUnits } from '@vue-cesium/shared'
import useTimeout from '@vue-cesium/composables/private/use-timeout'
import useCustomUpdate from '@vue-cesium/composables/private/use-custom-update'

export default defineComponent({
  name: 'VcMeasurementHeight',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'measureEvt', 'mouseEvt', 'editorEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurementHeight'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    const polylines = ref<Array<HeightMeasurementPolylineSegment>>([])
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
    let editorType = ''
    const { registerTimeout, removeTimeout } = useTimeout()
    const { onVcCollectionPointReady, onVcCollectionLabelReady } = useCustomUpdate()

    // methods
    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }

    const startNew = () => {
      const { Cartesian3 } = Cesium
      const polyline: HeightMeasurementPolylineSegment = {
        positions: [new Cartesian3(), new Cartesian3()],
        drawStatus: DrawStatus.BeforeDraw,
        show: false,
        distance: 0,
        labelPosition: new Cartesian3()
      }

      polylines.value.push(polyline)
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = true
      drawTip.value = props.drawtip.drawingTip1 || t('vc.measurement.height.drawTip1')
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
      const { viewer, measurementVm, getWorldPosition, selectedMeasurementOption } = $services

      if (options.button === 2 && options.ctrl) {
        const measurementsOption = (measurementVm.proxy as any).measurementsOptions.find(v => v.name === 'height')
          ; (measurementVm.proxy as any).toggleAction(measurementsOption)
        return
      }

      if (drawStatus.value === DrawStatus.AfterDraw) {
        startNew()
      }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: HeightMeasurementPolylineSegment = polylines.value[index]

      if (options.button === 2 && editingPoint.value) {
        (measurementVm.proxy as any).editingMeasurementName = undefined
        makePositions(polyline, restorePosition)
        drawStatus.value = DrawStatus.AfterDraw
        polyline.drawStatus = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip.drawTip1 || t('vc.measurement.height.drawTip1')
        return
      }

      if (options.button !== 0) {
        return
      }

      const { defined } = Cesium
      const type = 'new'
      if (drawStatus.value === DrawStatus.BeforeDraw) {
        const scene = viewer.scene
        const position = getWorldPosition(scene, movement, {} as any)

        if (!defined(position)) {
          return
        }

        makePositions(polyline, position)

        polyline.show = true
        polyline.drawStatus = DrawStatus.AfterDraw
        drawStatus.value = DrawStatus.AfterDraw
        drawTip.value = props.drawtip.drawingTip1 || t('vc.measurement.height.drawTip1')

        nextTick(() => {
          emit('measureEvt', {
            index: index,
            polylines: polylines,
            name: 'height',
            finished: true,
            position: position,
            windowPoistion: movement,
            type: type
          }, viewer)

          if (props.mode === 1) {
            (measurementVm.proxy as any).toggleAction(selectedMeasurementOption)
          }
        })
      } else {
        (measurementVm.proxy as any).editingMeasurementName = undefined
        polyline.drawStatus = DrawStatus.AfterDraw
        drawStatus.value = DrawStatus.AfterDraw
        drawTip.value = props.drawtip.drawingTip1 || t('vc.measurement.height.drawTip1')
        const type = editingPoint.value ? editorType : 'new'
        nextTick(() => {
          emit('measureEvt', {
            index: index,
            polylines: polylines,
            name: 'height',
            finished: true,
            position: polylines.value[index].positions[0],
            windowPoistion: movement,
            type: type
          }, viewer)
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

      const index = editingPoint.value._vcPolylineIndx
      const polyline: HeightMeasurementPolylineSegment = polylines.value[index]
      makePositions(polyline, position)
      const type = editingPoint.value ? editorType : 'new'
      nextTick(() => {
        emit('measureEvt', {
          index: index,
          polylines: polylines,
          name: 'height',
          finished: false,
          position: position,
          windowPoistion: movement,
          type: type
        }, viewer)
      })
    }

    const makePositions = (polyline: HeightMeasurementPolylineSegment, position: Cesium.Cartesian3) => {
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
        name: 'height'
      }, viewer)
    }
    const onMouseoutPoints = e => {
      const { viewer, selectedMeasurementOption } = $services

      if (props.editable) {
        e.pickedFeature.primitive.pixelSize = props.pointOpts.pixelSize * 1.0
        removeTimeout()
        registerTimeout(() => {
          editorPosition.value = [0, 0, 0]
          mouseoverPoint.value = undefined
          showEditor.value = false
        }, props.editorOpts.hideDelay)
        selectedMeasurementOption && (canShowDrawTip.value = true)
      }

      emit('mouseEvt', {
        type: e.type,
        target: e,
        name: 'height'
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
        drawTip.value = t('vc.measurement.height.drawTip3')
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        canShowDrawTip.value = true
        restorePosition = polylines.value[editingPoint.value._vcPolylineIndx].positions[editingPoint.value._index]
        ; (measurementVm.proxy as any).editingMeasurementName = 'height'
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
        name: 'height',
        index: mouseoverPoint.value._vcPolylineIndx
      }, viewer)
    }

    const clear = () => {
      polylines.value = []
      stop()
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcMeasurementHeight'
    }

    // expose public methods
    const publicMethods = { polylines, startNew, stop, clear, handleMouseClick, handleMouseMove }
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
          onMouseout: onMouseoutPoints,
          onReady: onVcCollectionPointReady
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
          labels: labels,
          onReady: onVcCollectionLabelReady
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
