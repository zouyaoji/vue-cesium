<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive-polyline ref="polylineCollection">
      <vc-primitive-polyline
        :key="index"
        :loop="true"
        :material="polyline.materialLine"
        :positions="polyline.positions"
        :width="polylineWidth"
        v-for="(polyline, index) of polylines"
      ></vc-primitive-polyline>
    </vc-collection-primitive-polyline>
    <vc-collection-primitive-point>
      <template v-for="(polyline, index) of polylines">
        <template v-for="(position, subIndex) of polyline.positions">
          <vc-primitive-point
            :color="pointColor"
            :key="'point' + index + 'position' + subIndex"
            :pixelSize="pointPixelSize"
            :position="position"
          ></vc-primitive-point>
        </template>
      </template>
    </vc-collection-primitive-point>
    <vc-collection-primitive-label ref="labelCollection">
      <template v-for="(polyline, index) of polylines">
        <vc-primitive-label
          :backgroundColor="backgroundColor"
          :font="font"
          :horizontalOrigin="1"
          :key="'label' + index"
          :labelStyle="labelStyle"
          :outlineColor="outlineColor"
          :outlineWidth="outlineWidth"
          :pixelOffset="pixelOffset"
          :position="polyline.positions[polyline.positions.length - 1]"
          :showBackground="showBackground"
          :text="areaText + (polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
        ></vc-primitive-label>
      </template>
    </vc-collection-primitive-label>
    <vc-entity
      :description="areaText + (polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
      :id="'面积量算-' + (index + 1)"
      :key="index"
      :polygon.sync="polyline.polygon"
      :ref="'entity' + index"
      v-for="(polyline, index) of polylines"
    >
      <vc-graphics-polygon
        :hierarchy="polyline.positions"
        :material="polygonColor"
        :perPositionHeight="perPositionHeight"
        @ready="ready"
        v-if="polyline.positions.length >= 3"
      ></vc-graphics-polygon>
    </vc-entity>
  </i>
</template>

<script>
import area from '@turf/area'
import mixinMeasure from '../../../mixins/tool/mixinMeasure'
import { makePolygonHierarchy, makeColor } from '../../../utils/util'
export default {
  name: 'vc-measure-area',
  mixins: [mixinMeasure],
  data () {
    return {
      index: 0,
      measuring: false,
      polylines: []
    }
  },
  props: {
    perPositionHeight: {
      type: Boolean,
      default: true
    },
    areaText: {
      type: String,
      default: '面积：'
    },
    polygonColor: {
      type: String | Object | Array,
      default: 'rgba(255,165,0,0.25)'
    }
  },
  watch: {
    measuring (val) {
      const { polylines, startNew } = this
      const polyline = polylines[polylines.length - 1]
      if (!val && polyline && !polyline.positions.length) {
        this.polylines.pop()
      } else if (val) {
        for (let $node of this.$parent.$slots.default || []) {
          if (
            $node.componentOptions &&
            ($node.componentOptions.tag === 'vc-measure-height' || $node.componentOptions.tag === 'vc-measure-distance')
          ) {
            $node.child.measuring = false
          }
        }
        startNew()
      }
      const listener = this.$listeners['activeEvt']
      listener && this.$emit('activeEvt', { type: 'areaMeasuring', isActive: val })
    }
  },
  methods: {
    ready (val) {
      const { polylines } = this
      const polyline = polylines[polylines.length - 1]
      val.cesiumObject.hierarchy = new Cesium.CallbackProperty(() => makePolygonHierarchy(polyline.positions), false)
    },
    LEFT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines } = this
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      polyline.positions.push(cartesian)
    },
    async MOUSE_MOVE (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines, onMeasureEvt } = this
      if (!polylines.length) {
        return
      }
      const nIndex = polylines.length - 1
      const polyline = polylines[nIndex]
      if (!polyline.positions.length) {
        return
      }
      let cartesian = viewer.scene.pickPosition(movement.endPosition)
      if (!Cesium.defined(cartesian)) {
        return
      }
      if (polyline.positions.length >= 2) {
        polyline.positions.pop()
      }
      polyline.positions.push(cartesian)
      polyline.area = this.getArea(polyline.positions)
      await this.$nextTick()
      onMeasureEvt(polyline, nIndex)
    },
    async RIGHT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines, mode, startNew, onMeasureEvt } = this
      if (!polylines.length) {
        return
      }
      const nIndex = polylines.length - 1
      const polyline = polylines[nIndex]
      if (polyline.positions.length === 0) {
        return
      }
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      polyline.positions.pop()
      polyline.area = this.getArea(polyline.positions)
      if (polyline.positions.length <= 2) {
        polyline.positions = []
      }
      if (mode === 0) {
        startNew()
      } else {
        this.measuring = false
      }
      await this.$nextTick()
      onMeasureEvt(polyline, nIndex, true)
    },
    startNew () {
      const { polylines } = this
      Cesium.defined(polylines) &&
        polylines.push({
          positions: [],
          area: 0,
          materialLine: new Cesium.Material({
            fabric: {
              type: 'Color',
              uniforms: {
                color: makeColor(this.polylineColor)
              }
            }
          })
        })
    },
    getArea (positions) {
      const { Cesium } = this
      let array = []
      for (let i = 0, len = positions.length; i < len; i++) {
        let cartographic = Cesium.Cartographic.fromCartesian(positions[i])
        let longitude = Cesium.Math.toDegrees(cartographic.longitude).toFixed(6)
        let latitude = Cesium.Math.toDegrees(cartographic.latitude).toFixed(6)
        array.push({ x: longitude, y: latitude })
      }
      let arrs = []
      let tems = []
      arrs.push(tems)
      for (let i = 0, len = array.length; i < len; i++) {
        tems.push([array[i].x, array[i].y])
      }
      let polygons = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: arrs
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [[[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]]
            }
          }
        ]
      }
      return area(polygons)
    },
    clear () {
      this.distance = 0
      this.polylines = []
      this.labels = []
      this.measuring = false
    },
    onMeasureEvt (polyline, index, flag = false) {
      this.index = index
      if (!this.depthTest) {
        this.$refs.polylineCollection.cesiumObject._opaqueRS.depthTest.enabled = false
        this.$refs.labelCollection.cesiumObject._billboardCollection._rsTranslucent = Cesium.RenderState.fromCache({
          depthMask: true,
          depthTest: {
            enabled: false
          }
        })
        this.$refs.labelCollection.cesiumObject._backgroundBillboardCollection._rsTranslucent = Cesium.RenderState.fromCache({
          depthMask: true,
          depthTest: {
            enabled: false
          }
        })
      }
      const listener = this.$listeners['measureEvt']
      listener &&
        this.$emit('measureEvt', {
          polyline: polyline,
          label: this.$refs.labelCollection.cesiumObject.get(index),
          type: 'areaMeasuring',
          accomplish: flag
        })
    }
  }
}
</script>
