/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-11 15:48:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\rectangle\index.ts
 */
import { defineComponent, getCurrentInstance, ref, h, computed, nextTick, VNode } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { VcPrimitive, VcPrimitiveGround, VcPrimitiveGroundPolyline } from '@vue-cesium/components/primitives'
import { VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '@vue-cesium/components/primitive-collections'
import { makeMaterial } from '@vue-cesium/utils/cesium-helpers'
import { DrawStatus, MeasureUnits } from '@vue-cesium/shared'
import VcInstanceGeometry from '@vue-cesium/components/geometry-instance'
import { VcGeometryPolygon, VcGeometryPolyline, VcGeometryPolylineGround } from '@vue-cesium/components/geometries'
import defaultProps from './defaultProps'
import { VcOverlayHtml } from '@vue-cesium/components/overlays'
import { t } from '@vue-cesium/locale'
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import { PolygonDrawing } from '@vue-cesium/components/drawings/src/drawing.types'
import useTimeout from '@vue-cesium/composables/private/use-timeout'
import useCustomUpdate from '@vue-cesium/composables/private/use-custom-update'
import { isUndefined } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcMeasurementRectangle',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'measureEvt', 'editorEvt', 'mouseEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMeasurementRectangle'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    const polylines = ref<Array<PolygonDrawing>>([])
    const drawStatus = ref(DrawStatus.BeforeDraw)
    const canShowDrawTip = ref(false)
    const drawTipPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
    const drawTip = ref('')
    const showEditor = ref(false)
    const editorPosition = ref<Array<number> | Cesium.Cartesian3>([0, 0, 0])
    const mouseoverPoint = ref<any>(null)
    const editingPoint = ref<any>(null)
    const primitiveCollectionRef = ref<VcComponentPublicInstance | null>(null)
    let restorePosition: Cesium.Cartesian3
    const drawName = 'rectangle'
    let editorType = ''
    const { registerTimeout, removeTimeout } = useTimeout()
    const { onVcCollectionPointReady, onVcPrimitiveReady, onVcCollectionLabelReady } = useCustomUpdate()

    // computed
    const polylinesRender = computed<Array<PolygonDrawing>>(() => {
      const results: Array<PolygonDrawing> = []
      const { Cartographic, Rectangle, Cartesian3 } = Cesium
      const { viewer } = $services
      polylines.value.forEach(polylineSegment => {
        const labels: Array<{
          text: string
          position: Cesium.Cartesian3
          id: string
        }> = []

        const startPosition = polylineSegment.positions[0]
        const endPosition = polylineSegment.positions[1]
        if (Cartesian3.equals(startPosition, endPosition)) {
          return
        }
        const startCartographic = Cartographic.fromCartesian(startPosition, viewer.scene.globe.ellipsoid)
        const endCartographic = Cartographic.fromCartesian(endPosition, viewer.scene.globe.ellipsoid)
        const height = startCartographic.height
        !props.clampToGround && (endCartographic.height = height)

        const rectangle = Rectangle.fromCartesianArray(polylineSegment.positions, viewer.scene.globe.ellipsoid)
        const arr = [
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
        const positions = Cartesian3.fromRadiansArrayHeights(arr, viewer.scene.globe.ellipsoid)

        const area = updateArea(positions)

        labels.push({
          text: MeasureUnits.areaToString(area, props.measureUnits?.areaUnits, props.locale, props.decimals?.area),
          position: positions[positions.length - 1],
          id: Cesium.createGuid(),
          ...props.labelOpts
        })

        const polyline: PolygonDrawing = {
          ...polylineSegment,
          polygonPositions: positions,
          height: height,
          area: area,
          labels
        }

        results.push(polyline)
      })
      return results
    })
    // methods
    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }

    const startNew = () => {
      const polyline: PolygonDrawing = {
        positions: [],
        polygonPositions: [],
        show: false,
        drawStatus: DrawStatus.BeforeDraw
      }

      polylines.value.push(polyline)
      drawStatus.value = DrawStatus.BeforeDraw
      canShowDrawTip.value = true
      drawTip.value = props.drawtip?.drawTip1 || t(`vc.drawing.${drawName}.drawTip1`)
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
      const { viewer, measurementVm: measurementVm, selectedMeasurementOption, getWorldPosition } = $services

      if (options.button === 2 && options.ctrl) {
        const drawingsOption = (measurementVm?.proxy as any).drawingsOptions.find(v => v.name === drawName)
        ;(measurementVm?.proxy as any).toggleAction(drawingsOption)
        return
      }

      if (drawStatus.value === DrawStatus.AfterDraw) {
        startNew()
      }

      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
      const polyline: PolygonDrawing = polylines.value[index]
      const positions = polyline.positions

      if (options.button === 2 && editingPoint.value) {
        ;(measurementVm?.proxy as any).editingMeasurementName = undefined
        polyline.positions[editingPoint.value._index] = restorePosition
        drawStatus.value = DrawStatus.AfterDraw
        polyline.drawStatus = DrawStatus.AfterDraw
        editingPoint.value = undefined
        drawTip.value = props.drawtip?.drawTip1 || t(`vc.drawing.${drawName}.drawTip1`)
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
        positions[0] = position
        positions[1] = position
        polyline.show = true
        drawStatus.value = DrawStatus.Drawing
        polyline.drawStatus = DrawStatus.Drawing
        drawTip.value = props.drawtip?.drawTip2 || t(`vc.drawing.${drawName}.drawTip2`)
        nextTick(() => {
          emit(
            'measureEvt',
            Object.assign(
              {
                index: index,
                polylines: polylines,
                name: drawName,
                finished: false,
                position: position,
                windowPoistion: movement,
                type: type
              },
              polylinesRender.value[index]
            ),
            viewer
          )
        })
      } else {
        polyline.drawStatus = DrawStatus.AfterDraw
        drawStatus.value = DrawStatus.AfterDraw
        if (editingPoint.value) {
          editingPoint.value = undefined
          ;(measurementVm?.proxy as any).editingMeasurementName = undefined
          canShowDrawTip.value = false
          drawTipPosition.value = [0, 0, 0]
          type = editorType
        } else {
          if (props.mode === 1) {
            ;(measurementVm?.proxy as any).toggleAction(selectedMeasurementOption)
          }
        }

        if (selectedMeasurementOption) {
          drawTip.value = props.drawtip?.drawTip1 || t(`vc.drawing.${drawName}.drawTip1`)
          canShowDrawTip.value = true
        }

        nextTick(() => {
          emit(
            'measureEvt',
            Object.assign(
              {
                index: index,
                polylines: polylines,
                name: drawName,
                finished: true,
                position: polyline.positions[1],
                windowPoistion: movement,
                type: type
              },
              polylinesRender.value[index]
            ),
            viewer
          )
        })
      }
    }

    const updateArea = (positions: Array<Cesium.Cartesian3>) => {
      let area = 0
      const { CoplanarPolygonGeometry, VertexFormat, defined, Cartesian3 } = Cesium
      const geometry = CoplanarPolygonGeometry.createGeometry(
        CoplanarPolygonGeometry.fromPositions({
          positions: positions,
          vertexFormat: VertexFormat.POSITION_ONLY
        })
      )

      if (!isUndefined(geometry) && defined(geometry)) {
        const indices = geometry.indices
        const positionValues = geometry.attributes.position.values as number[]
        for (let i = 0; i < indices.length; i += 3) {
          const indice0 = indices[i]
          const indice1 = indices[i + 1]
          const indice2 = indices[i + 2]

          area += triangleArea(
            Cartesian3.unpack(positionValues, 3 * indice0, {} as any),
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

    const handleMouseMove = movement => {
      if (!canShowDrawTip.value) {
        return
      }

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

      if (defined(position)) {
        const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : polylines.value.length - 1
        const polyline: PolygonDrawing = polylines.value[index]
        const positions = polyline.positions
        const startPosition = positions[0]
        const startCartographic = Cartographic.fromCartesian(startPosition, viewer.scene.globe.ellipsoid)
        const endCartographic = Cartographic.fromCartesian(position, viewer.scene.globe.ellipsoid)
        !props.clampToGround && (endCartographic.height = startCartographic.height)
        positions[editingPoint.value ? editingPoint.value._index : 1] = Cartographic.toCartesian(endCartographic, viewer.scene.globe.ellipsoid)
        const type = editingPoint.value ? editorType : 'new'

        nextTick(() => {
          emit(
            'measureEvt',
            Object.assign(
              {
                index: index,
                polylines: polylines,
                name: drawName,
                finished: false,
                position: polyline.positions[1],
                windowPoistion: movement,
                type: type
              },
              polylinesRender.value[index]
            ),
            viewer
          )
        })
      }
    }

    const onMouseoverPoints = e => {
      const { drawingHandlerActive, viewer } = $services
      if (props.editable && drawStatus.value !== DrawStatus.Drawing && drawingHandlerActive) {
        e.pickedFeature.primitive.pixelSize = props.pointOpts?.pixelSize * 1.5
        removeTimeout()
        registerTimeout(() => {
          mouseoverPoint.value = e.pickedFeature.primitive
          editorPosition.value = e.pickedFeature.primitive.position
          showEditor.value = true
          canShowDrawTip.value = false
          drawTipPosition.value = [0, 0, 0]
        }, props.editorOpts?.delay)
      }

      emit(
        'mouseEvt',
        {
          type: e.type,
          target: e,
          name: drawName
        },
        viewer
      )
    }

    const onMouseoutPoints = e => {
      const { viewer, selectedMeasurementOption } = $services

      if (props.editable) {
        if (!editingPoint.value && drawStatus.value !== DrawStatus.Drawing) {
          e.pickedFeature.primitive.pixelSize = props.pointOpts?.pixelSize * 1.0
          removeTimeout()
          registerTimeout(() => {
            editorPosition.value = [0, 0, 0]
            mouseoverPoint.value = undefined
            showEditor.value = false
          }, props.editorOpts?.hideDelay)
        }
        selectedMeasurementOption && (canShowDrawTip.value = true)
      }

      emit(
        'mouseEvt',
        {
          type: e.type,
          target: e,
          name: drawName
        },
        viewer
      )
    }

    const onMouseenterEditor = evt => {
      removeTimeout()
    }

    const onMouseleaveEditor = evt => {
      removeTimeout()
      registerTimeout(() => {
        editorPosition.value = [0, 0, 0]
        mouseoverPoint.value.pixelSize = props.pointOpts?.pixelSize * 1.0
        mouseoverPoint.value = undefined
        showEditor.value = false
      }, props.editorOpts?.hideDelay)
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
        drawTip.value = props.drawtip?.drawTip3 || t(`vc.drawing.${drawName}.drawTip3`)
        drawStatus.value = DrawStatus.Drawing
        editingPoint.value = mouseoverPoint.value
        restorePosition = polylines.value[editingPoint.value._vcPolylineIndx].positions[editingPoint.value._index]
        canShowDrawTip.value = true
        ;(measurementVm?.proxy as any).editingMeasurementName = drawName
      } else if (e === 'remove') {
        const index = mouseoverPoint.value._vcPolylineIndx
        const polyline = polylines.value[index]
        polyline.positions.splice(mouseoverPoint.value._index, 1)
      } else if (e === 'removeAll') {
        const index = mouseoverPoint.value._vcPolylineIndx
        polylines.value.splice(index, 1)
      }

      emit(
        'editorEvt',
        {
          type: e,
          polylines: polylines,
          name: drawName,
          index: mouseoverPoint.value._vcPolylineIndx
        },
        viewer
      )
    }

    const clear = () => {
      polylines.value = []
      stop()
    }

    const onPrimitiveCollectionReady = ({ cesiumObject }) => {
      cesiumObject._vcId = 'VcMeasurementRectangle'
    }

    // expose public methods
    const publicMethods = { polylines, polylinesRender, startNew, stop, clear, handleMouseClick, handleMouseMove }
    Object.assign(instance.proxy, publicMethods)

    return () => {
      const { PolylineMaterialAppearance, MaterialAppearance, createGuid } = Cesium

      const polylineOpts: any = {
        ...props.polylineOpts,
        vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT
      }
      props.clampToGround && delete polylineOpts.arcType
      const children: Array<VNode> = []
      polylinesRender.value.forEach((polyline, index) => {
        // point
        children.push(
          h(VcCollectionPoint, {
            enableMouseEvent: props.enableMouseEvent,
            show: polyline.show,
            points: polyline.positions.map(position => ({
              position: position,
              id: createGuid(),
              _vcPolylineIndx: index, // for editor
              ...props.pointOpts,
              show: props.pointOpts?.show || props.editable || polyline.drawStatus === DrawStatus.Drawing
            })),
            onMouseover: onMouseoverPoints,
            onMouseout: onMouseoutPoints,
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
        if (polyline.polygonPositions.length > 1) {
          // polyline
          const positions = polyline.polygonPositions.slice()
          positions.push(positions[0])
          children.push(
            h(
              props.clampToGround ? VcPrimitiveGroundPolyline : VcPrimitive,
              {
                show: polyline.show && polylineOpts.show,
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
                    h(props.clampToGround ? VcGeometryPolylineGround : VcGeometryPolyline, {
                      positions: positions,
                      ...polylineOpts
                    })
                )
            )
          )
        }
        if (polyline.polygonPositions.length > 2) {
          // polygon
          children.push(
            h(
              props.clampToGround ? VcPrimitiveGround : VcPrimitive,
              {
                show: polyline.show && props.polygonOpts?.show,
                enableMouseEvent: props.enableMouseEvent,
                appearance: new MaterialAppearance({
                  material: makeMaterial.call(instance, props.polygonOpts?.material) as Cesium.Material,
                  renderState: {
                    cull: {
                      enabled: false
                    },
                    depthTest: {
                      enabled: false
                    }
                  }
                }),
                asynchronous: false,
                onReady: onVcPrimitiveReady
              },
              () =>
                h(
                  VcInstanceGeometry,
                  {
                    id: createGuid()
                  },
                  () =>
                    h(VcGeometryPolygon, {
                      polygonHierarchy: polyline.polygonPositions,
                      ...props.polygonOpts
                    })
                )
            )
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
})
