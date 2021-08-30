import { defineComponent, getCurrentInstance, ref, h, computed, nextTick, toRef } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive } from '@vue-cesium/primitives'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/primitive-collections'
import { makeMaterial, getGeodesicDistance } from '@vue-cesium/utils/cesium-helpers'
import { PolygonMeasurementDrawing } from '../measure.types'
import { DrawStatus } from '@vue-cesium/shared'
import VcInstanceGeometry from '@vue-cesium/geometry-instance'
import { VcGeometryPolygon, VcGeometryPolyline } from '@vue-cesium/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/ui'
import { MeasureUnits } from '@vue-cesium/shared'
import { usePolylineDrawing } from '@vue-cesium/composables'

export default defineComponent({
  name: 'VcMeasurementArea',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'measureEvt', 'mouseEvt', 'editorEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurementArea'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx
    const drawTip = toRef(props, 'drawtip')
    drawTip.value.drawTip1 = drawTip.value.drawingTip1 || t('vc.measurement.area.drawTip1')
    drawTip.value.drawTip2 = drawTip.value.drawingTip2 || t('vc.measurement.area.drawTip2')
    drawTip.value.drawTip3 = drawTip.value.drawingTip3 || t('vc.measurement.area.drawTip3')
    const polylineDrawingState = usePolylineDrawing(props, $services, drawTip.value, ctx)
    const primitiveCollectionRef = ref<VcComponentPublicInstance>(null)

    // computed
    const polylinesRender = computed<Array<PolygonMeasurementDrawing>>(() => {
      const { Cartesian3, createGuid } = Cesium
      const polylines: Array<PolygonMeasurementDrawing> = []
      polylineDrawingState.polylines.value.forEach((polyline, index) => {
        const labels = []
        const distances = []
        let distance = 0
        const angles = []
        const positions = polyline.positions.slice()
        positions.length > 2 && positions.push(positions[0])
        for (let i = 0; i < positions.length - 1; i++) {
          let s = 0
          if (props.polylineOpts.arcType === 0) {
            s = getGeodesicDistance(positions[i], positions[i + 1], $services.viewer.scene.globe.ellipsoid)
          } else {
            s = Cartesian3.distance(positions[i], positions[i + 1])
          }
          distances.push(s)
          distance = distance + s
          if (s > 0 && positions.length > 2 && props.showDistanceLabel) {
            labels.push({
              text: MeasureUnits.distanceToString(s, props.measureUnits.distanceUnits, props.locale, props.decimals.distance),
              position: Cartesian3.midpoint(positions[i], positions[i + 1], {} as any),
              id: createGuid(),
              ...props.labelsOpts
            })
          }
          if (positions.length > 2 && props.showAngleLabel) {
            const point0 = positions[i === 0 ? positions.length - 2 : i - 1 ]
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
        }
        const area = updateArea(positions)
        labels.push({
          text: MeasureUnits.areaToString(area, props.measureUnits.areaUnits, props.locale, props.decimals.area),
          position: positions[positions.length - 1],
          id: createGuid(),
          ...props.labelOpts
        })
        polylines.push({
          ...polyline,
          labels,
          distance,
          distances,
          area,
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

    const updateArea = (positions: Array<Cesium.Cartesian3>) => {
      let area = 0
      const { CoplanarPolygonGeometry, VertexFormat, defined, Cartesian3 } = Cesium
      const geometry = CoplanarPolygonGeometry.createGeometry(CoplanarPolygonGeometry.fromPositions({
        positions: positions,
        vertexFormat: VertexFormat.POSITION_ONLY
      }))

      if (defined(geometry)) {
        const indices = geometry.indices
        const positionValues = geometry.attributes.position.values as number[]
        for (let i = 0; i < indices.length; i += 3) {
          const indice0 = indices[i]
          const indice1 = indices[i + 1]
          const indice2 = indices[i + 2]

          area += triangleArea(Cartesian3.unpack(positionValues, 3 * indice0, {} as any),
            Cartesian3.unpack(positionValues, 3 * indice1, {} as any),
            Cartesian3.unpack(positionValues, 3 * indice2, {} as any)
          )
        }
      }

      return area
    }

    const triangleArea = (vertexA, vertexB, vertexC) => {
      const { Cartesian3 } = Cesium
      const vectorBA = Cartesian3.subtract(vertexA, vertexB, {} as any)
      const vectorBC = Cartesian3.subtract(vertexC, vertexB, {} as any)
      const crossProduct = Cartesian3.cross(vectorBA, vectorBC, vectorBA)
      return 0.5 * Cartesian3.magnitude(crossProduct)
    }

    const handleMouseClick = (movement: Cesium.Cartesian2, options?) => {
      const result = polylineDrawingState.handleMouseClick(movement, options)
      const { defined } = Cesium

      if (defined(result)) {
        const { measurementVm, selectedMeasurementOption, viewer } = $services
        if (defined(result.position)) {
          if (result.type !== 'new') {
            (measurementVm.proxy as any).editingMeasurementName = undefined
            polylineDrawingState.canShowDrawTip.value = defined(selectedMeasurementOption)
          }
          nextTick(() => {
            emit('measureEvt', Object.assign(result, {
              name: 'area'
            }, polylinesRender.value[result.index]), viewer)
          })
        } else {
          const measurementsOption = (measurementVm.proxy as any).measurementsOptions.find(v => v.name === 'area')
            ; (measurementVm.proxy as any).toggleAction(measurementsOption)
        }
      }
    }

    const handleMouseMove = (movement: Cesium.Cartesian2) => {
      const result = polylineDrawingState.handleMouseMove(movement)
      const { defined } = Cesium
      if (defined(result)) {
        const { viewer } = $services
        if (defined(result.position)) {
          nextTick(() => {
            emit('measureEvt', Object.assign(result, {
              name: 'area'
            }, polylinesRender.value[result.index]), viewer)
          })
        }
      }
    }

    const handleDoubleClick = movement => {
      const { measurementVm, selectedMeasurementOption, viewer } = $services
      const result = polylineDrawingState.handleDoubleClick(movement)
      const { defined } = Cesium
      if (defined(result)) {
        if (defined(result.position)) {
          nextTick(() => {
            emit('measureEvt', Object.assign(result, {
              name: 'area'
            }, polylinesRender.value[result.index]), viewer)
          })

          if (props.mode === 1) {
            (measurementVm.proxy as any).toggleAction(selectedMeasurementOption)
          }
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
      cesiumObject._vcId = 'VcMeasurementArea'
    }

    const onEditorClick = function(e) {
      polylineDrawingState.onEditorClick.bind(this)(e)

      if (e === 'move' || e === 'insert') {
        const { measurementVm } = $services
        ; (measurementVm.proxy as any).editingMeasurementName = 'area'
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
      polylines: polylineDrawingState.polylines, polylinesRender, startNew, stop, clear, handleMouseClick, handleMouseMove, handleDoubleClick
    }
    Object.assign(instance.proxy, publicMethods)

    return () => {
      const { PolylineMaterialAppearance, EllipsoidSurfaceAppearance, Ellipsoid, createGuid, defaultValue } = Cesium

      const polylineOpts: any = {
        ...props.polylineOpts,
        vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT,
      }
      const children = []
      polylinesRender.value.forEach((polyline, index) => {
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
            onMouseover: polylineDrawingState.onMouseoverPoints.bind('area'),
            onMouseout: polylineDrawingState.onMouseoutPoints.bind('area')
          })
        )
        const positions = polyline.positions.slice()
        if (positions.length > 1) {
          // polyline
          positions.push(positions[0])
          children.push(
            h(VcPrimitive, {
              show: polyline.show && polylineOpts.show,
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
              positions: positions,
              ...polylineOpts
            })))
          )
        }
        if (positions.length > 2) {
          // polygon
          children.push(
            h(VcPrimitive, {
              show: polyline.show && props.polygonOpts.show,
              enableMouseEvent: props.enableMouseEvent,
              appearance: new EllipsoidSurfaceAppearance({
                material: makeMaterial.call(instance, props.polygonOpts.material) as Cesium.Material,
                renderState: {
                  cull: {
                    enabled: false
                  }
                }
              }),
              depthFailAppearance: new EllipsoidSurfaceAppearance({
                material: makeMaterial.call(instance, props.polygonOpts.depthFailMaterial) as Cesium.Material,
                renderState: {
                  cull: {
                    enabled: false
                  }
                }
              }),
              asynchronous: false
            }, () => h(VcInstanceGeometry, {
              id: createGuid(),
            }, () => h(VcGeometryPolygon, {
              polygonHierarchy: positions,
              ...props.polygonOpts
            })))
          )
        }
        // labels
        children.push(
          h(VcCollectionLabel, {
            enableMouseEvent: props.enableMouseEvent,
            show: polyline.show,
            labels: polyline.labels
          })
        )
      })

      if (props.drawtip.show && polylineDrawingState.canShowDrawTip.value) {
        const { viewer } = $services
        children.push(
          h(VcOverlayHtml, {
            position: polylineDrawingState.drawTipPosition.value,
            pixelOffset: props.drawtip.pixelOffset,
            teleport: {
              to: viewer.container
            }
          }, () => h('div', {
            class: 'vc-drawtip vc-tooltip--style'
          }, polylineDrawingState.drawTip.value))
        )
      }

      if (polylineDrawingState.showEditor.value) {
        const buttons = []
        if (polylineDrawingState.mouseoverPoint.value) {
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
                  onClick: onEditorClick.bind('area', key)
                }, () => h(VcTooltip, {
                  ...editorOpts[key].tooltip
                }, () => h('strong', null, editorOpts[key].tooltip?.tip || t(`vc.measurement.editor.${key}`))))
              )
            }
          }
        }

        const { viewer } = $services
        children.push(h(VcOverlayHtml, {
          position: polylineDrawingState.editorPosition.value,
          pixelOffset: props.editorOpts?.pixelOffset,
          teleport: {
            to: viewer.container
          },
          onMouseenter: polylineDrawingState.onMouseenterEditor,
          onMouseleave: polylineDrawingState.onMouseleaveEditor
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
