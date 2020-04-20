<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive-polyline ref="polylineCollection">
      <vc-primitive-polyline
        :key="index"
        :loop="true"
        :material="getPolylineMaterial()"
        :positions="polyline.positions"
        :width="polylineWidth"
        v-for="(polyline, index) of polylines"
      ></vc-primitive-polyline>
    </vc-collection-primitive-polyline>
    <vc-collection-primitive-point ref="pointCollection">
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
          :text="$vc.lang.measure.area + ': ' + (polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
        ></vc-primitive-label>
      </template>
    </vc-collection-primitive-label>
    <vc-entity
      :description="$vc.lang.measure.area + ': ' + (polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
      :id="$vc.lang.measure.area + '-' + (index + 1)"
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
    /**
     * 用海伦公式获取传入坐标的构成的多边形的面积。
     * @param {Array.Cartesian}
     * @returns {Number} 返回面积数值。
     */
    getSurfaceArea (positions) {
      if (positions.length < 3) {
        return 0
      }
      const { Cartesian3, EllipsoidTangentPlane, Ellipsoid, Math: CesiumMath, PolygonGeometryLibrary, PolygonHierarchy, VertexFormat } = Cesium
      const perPositionHeight = true
      // Request the triangles that make up the polygon from Cesium.
      // 获取组成多边形的三角形。
      const tangentPlane = EllipsoidTangentPlane.fromPoints(
        positions,
        Ellipsoid.WGS84
      )
      const polygons = PolygonGeometryLibrary.polygonsFromHierarchy(
        new PolygonHierarchy(positions),
        tangentPlane.projectPointsOntoPlane.bind(tangentPlane),
        !perPositionHeight,
        Ellipsoid.WGS84
      )

      const geom = PolygonGeometryLibrary.createGeometryFromPositions(
        Ellipsoid.WGS84,
        polygons.polygons[0],
        CesiumMath.RADIANS_PER_DEGREE,
        perPositionHeight,
        VertexFormat.POSITION_ONLY
      )

      if (geom.indices.length % 3 !== 0 || geom.attributes.position.values.length % 3 !== 0) {
        // Something has gone wrong. We expect triangles. Can't calcuate area.
        // 不是三角形，无法计算。
        return 0
      }
      const coords = []
      for (let i = 0; i < geom.attributes.position.values.length; i += 3) {
        coords.push(
          new Cartesian3(
            geom.attributes.position.values[i],
            geom.attributes.position.values[i + 1],
            geom.attributes.position.values[i + 2]
          )
        )
      }
      let area = 0
      for (let i = 0; i < geom.indices.length; i += 3) {
        const ind1 = geom.indices[i]
        const ind2 = geom.indices[i + 1]
        const ind3 = geom.indices[i + 2]

        const a = Cartesian3.distance(coords[ind1], coords[ind2])
        const b = Cartesian3.distance(coords[ind2], coords[ind3])
        const c = Cartesian3.distance(coords[ind3], coords[ind1])

        // Heron's formula 海伦公式
        const s = (a + b + c) / 2.0
        area += Math.sqrt(s * (s - a) * (s - b) * (s - c))
      }
      return area
    },
    /**
     * 用 @turf/area 获取传入坐标的构成的多边形的面积。
     * @param {Array.Cartesian}
     * @returns {Number} 返回面积数值。
     */
    getProjectedArea (positions) {
      const { Cartographic, Math: CesiumMath } = Cesium
      let array = []
      for (let i = 0, len = positions.length; i < len; i++) {
        let cartographic = Cartographic.fromCartesian(positions[i])
        let longitude = CesiumMath.toDegrees(cartographic.longitude).toFixed(6)
        let latitude = CesiumMath.toDegrees(cartographic.latitude).toFixed(6)
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
