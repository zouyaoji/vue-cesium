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
import { makePolygonHierarchy } from '../../../utils/util'
export default {
  name: 'vc-measure-area',
  mixins: [mixinMeasure],
  data () {
    return {
      index: 0,
      type: 'areaMeasuring',
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
  methods: {
    ready (val) {
      const { polylines } = this
      const polyline = polylines[polylines.length - 1]
      val.cesiumObject.hierarchy = new Cesium.CallbackProperty(() => makePolygonHierarchy(polyline.positions), false)
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
    }
  }
}
</script>
