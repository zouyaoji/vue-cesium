import { defineComponent, getCurrentInstance, ref, h, computed, nextTick, toRef, VNode } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive } from '@vue-cesium/components/primitives'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/components/primitive-collections'
import { makeMaterial, getGeodesicDistance } from '@vue-cesium/utils/cesium-helpers'
import { PolylineMeasurementDrawing } from '../measure.types'
import { DrawStatus } from '@vue-cesium/shared'
import VcInstanceGeometry from '@vue-cesium/components/geometry-instance'
import { VcGeometryPolyline } from '@vue-cesium/components/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/components/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import { MeasureUnits } from '@vue-cesium/shared'
import { usePolylineDrawing } from '@vue-cesium/composables'
import useCustomUpdate from '@vue-cesium/composables/private/use-custom-update'

export default defineComponent({
  name: 'VcMeasurementPolyline',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'measureEvt', 'mouseEvt', 'editorEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurementPolyline'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx
    const drawTip = toRef(props, 'drawtip')
    ;(drawTip.value as any).drawTip1 = drawTip.value?.drawingTip1 || t('vc.measurement.polyline.drawTip1')
    ;(drawTip.value as any).drawTip2 = drawTip.value?.drawingTip2 || t('vc.measurement.polyline.drawTip2')
    ;(drawTip.value as any).drawTip3 = drawTip.value?.drawingTip3 || t('vc.measurement.polyline.drawTip3')
    const polylineDrawingState = usePolylineDrawing(props, $services, drawTip.value, ctx)
    const primitiveCollectionRef = ref<VcComponentPublicInstance | null>(null)
    const { onVcCollectionPointReady, onVcCollectionLabelReady } = useCustomUpdate()

    // computed
    const polylinesRender = computed<Array<PolylineMeasurementDrawing>>(() => {
      const { Cartesian3, createGuid } = Cesium
      const polylines: Array<PolylineMeasurementDrawing> = []
      polylineDrawingState.polylines.value.forEach((polyline, index) => {
        const labels: Array<{
          text: string | undefined
          position: Cesium.Cartesian3
          id: string
        }> = []
        const distances: number[] = []
        const angles: number[] = []
        let distance = 0
        const positions = polyline.positions
        for (let i = 0; i < positions.length - 1; i++) {
          let s = 0
          if (props.polylineOpts?.arcType === 0) {
            s = getGeodesicDistance(positions[i], positions[i + 1], $services.viewer.scene.globe.ellipsoid)
          } else {
            s = Cartesian3.distance(positions[i], positions[i + 1])
          }
          distances.push(s)
          distance = distance + s
          if (s > 0 && positions.length > 2) {
            labels.push({
              text: MeasureUnits.distanceToString(s, props.measureUnits?.distanceUnits, props.locale, props.decimals?.distance),
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
              text: MeasureUnits.angleToString(angle, props.measureUnits?.angleUnits, props.locale, props.decimals?.angle),
              position: point1,
              id: createGuid(),
              ...props.labelsOpts
            })
          }
        }
        labels.push({
          text: MeasureUnits.distanceToString(distance, props.measureUnits?.distanceUnits, props.locale, props.decimals?.distance),
          position: positions[positions.length - 1],
          id: createGuid(),
          ...props.labelOpts
        })
        polylines.push({
          ...polyline,
          labels,
          distance,
          distances,
          angles
        })
      })
      return polylines
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

    const handleMouseClick = (movement: Cesium.Cartesian2, options?) => {
      const result = polylineDrawingState.handleMouseClick(movement, options)
      const { defined } = Cesium

      if (defined(result)) {
        const { measurementVm, selectedMeasurementOption, viewer } = $services
        if (defined(result?.position)) {
          if (result?.type !== 'new') {
            ;(measurementVm?.proxy as any).editingMeasurementName = undefined
            polylineDrawingState.canShowDrawTip.value = defined(selectedMeasurementOption)
          }
          nextTick(() => {
            emit(
              'measureEvt',
              Object.assign(
                result,
                {
                  name: 'polyline'
                },
                polylinesRender.value[result?.index]
              ),
              viewer
            )
          })
        } else {
          const measurementsOption = (measurementVm?.proxy as any).measurementsOptions.find(v => v.name === 'polyline')
          ;(measurementVm?.proxy as any).toggleAction(measurementsOption)
        }
      }
    }

    const handleMouseMove = (movement: Cesium.Cartesian2) => {
      const result = polylineDrawingState.handleMouseMove(movement)
      const { defined } = Cesium
      if (defined(result)) {
        const { viewer } = $services
        if (defined(result?.position)) {
          nextTick(() => {
            emit(
              'measureEvt',
              Object.assign(
                result,
                {
                  name: 'polyline'
                },
                polylinesRender.value[result?.index]
              ),
              viewer
            )
          })
        }
      }
    }

    const handleDoubleClick = movement => {
      const { measurementVm, selectedMeasurementOption, viewer } = $services
      const result = polylineDrawingState.handleDoubleClick(movement)
      const { defined } = Cesium
      if (defined(result)) {
        if (defined(result?.position)) {
          nextTick(() => {
            emit(
              'measureEvt',
              Object.assign(
                result,
                {
                  name: 'polyline'
                },
                polylinesRender.value[result?.index]
              ),
              viewer
            )

            if (props.mode === 1) {
              ;(measurementVm?.proxy as any).toggleAction(selectedMeasurementOption)
            }
          })
        }
      }
    }

    const startNew = () => {
      polylineDrawingState.startNew()
    }

    const stop = () => {
      polylineDrawingState.stop()
    }

    const clear = () => {
      polylineDrawingState.polylines.value = []
      stop()
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcMeasurementPolyline'
    }

    const onEditorClick = function (this, e) {
      polylineDrawingState.onEditorClick.bind(this)(e)
      if (e === 'move' || e === 'insert') {
        const { measurementVm } = $services
        ;(measurementVm?.proxy as any).editingMeasurementName = 'polyline'
      }
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
    // expose public methods
    const publicMethods = {
      polylines: polylineDrawingState.polylines,
      polylinesRender,
      startNew,
      stop,
      clear,
      handleMouseClick,
      handleMouseMove,
      handleDoubleClick
    }
    Object.assign(instance.proxy, publicMethods)

    return () => {
      const { PolylineMaterialAppearance, Ellipsoid, createGuid, defaultValue } = Cesium

      const polylineOpts = {
        width: props.polylineOpts?.width,
        vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT,
        ellipsoid: defaultValue(props.polylineOpts?.ellipsoid, Ellipsoid.WGS84),
        arcType: props.polylineOpts?.arcType
      }
      const children: Array<VNode> = []
      polylinesRender.value.forEach((polyline, index) => {
        if (polyline.positions.length > 1) {
          // polyline
          children.push(
            h(
              VcPrimitive,
              {
                show: polyline.show,
                enableMouseEvent: props.enableMouseEvent,
                appearance: new PolylineMaterialAppearance({
                  material: makeMaterial.call(instance, props.polylineOpts?.material) as Cesium.Material
                }),
                depthFailAppearance: new PolylineMaterialAppearance({
                  material: makeMaterial.call(instance, props.polylineOpts?.depthFailMaterial) as Cesium.Material
                }),
                asynchronous: false
              },
              () =>
                h(
                  VcInstanceGeometry,
                  {
                    id: createGuid()
                  },
                  () =>
                    h(VcGeometryPolyline, {
                      positions: polyline.positions,
                      ...polylineOpts
                    })
                )
            )
          )
        }
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
            onMouseover: polylineDrawingState.onMouseoverPoints.bind('polyline'),
            onMouseout: polylineDrawingState.onMouseoutPoints.bind('polyline'),
            onReady: onVcCollectionPointReady
          })
        )

        // labels
        children.push(
          h(VcCollectionLabel, {
            enableMouseEvent: props.enableMouseEvent,
            show: polyline.show,
            labels: polyline.labels,
            onReady: onVcCollectionLabelReady
          })
        )
      })

      if (props.drawtip?.show && polylineDrawingState.canShowDrawTip.value) {
        const { viewer } = $services
        children.push(
          h(
            VcOverlayHtml,
            {
              position: polylineDrawingState.drawTipPosition.value,
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
                polylineDrawingState.drawTip.value
              )
          )
        )
      }

      if (polylineDrawingState.showEditor.value) {
        const buttons: Array<VNode> = []
        if (polylineDrawingState.mouseoverPoint.value) {
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
              position: polylineDrawingState.editorPosition.value,
              pixelOffset: props.editorOpts?.pixelOffset,
              teleport: {
                to: viewer.container
              },
              onMouseenter: polylineDrawingState.onMouseenterEditor,
              onMouseleave: polylineDrawingState.onMouseleaveEditor
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
})
