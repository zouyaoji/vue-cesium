<template>
  <i :class="$options.name" style="display: none !important">
    <!-- 贴地面 -->
    <vc-collection-primitive ref="groundPolygonCollection" v-if="clampToGround">
      <template v-for="(polyline, index) of polylines">
        <vc-primitive-ground
          :appearance="makeEllipsoidSurfaceAppearance(polygonMaterial)"
          :asynchronous="false"
          :key="index"
          v-if="polyline.positions.length > 2"
        >
          <vc-instance-geometry>
            <vc-geometry-polygon :perPositionHeight="false" :polygonHierarchy="clone(polyline.positions, true)"></vc-geometry-polygon>
          </vc-instance-geometry>
        </vc-primitive-ground>
      </template>
    </vc-collection-primitive>
    <!-- 非贴地面 -->
    <vc-collection-primitive ref="polygonCollection" v-else>
      <template v-for="(polyline, index) of polylines">
        <vc-primitive
          :appearance="makeEllipsoidSurfaceAppearance(polygonMaterial)"
          :asynchronous="false"
          :key="index"
          v-if="polyline.positions.length > 2"
        >
          <vc-instance-geometry>
            <vc-geometry-polygon :perPositionHeight="true" :polygonHierarchy="clone(polyline.positions, true)"></vc-geometry-polygon>
          </vc-instance-geometry>
        </vc-primitive>
      </template>
    </vc-collection-primitive>
    <!-- 贴地线 -->
    <vc-collection-primitive ref="groundPolylineCollection" v-if="clampToGround">
      <template v-for="(polyline, index) of polylines">
        <vc-primitive-polyline-ground
          :appearance="makePolylineMaterialAppearance(polylineMaterial)"
          :asynchronous="false"
          :key="index"
          v-if="polyline.positions.length > 1"
        >
          <vc-instance-geometry>
            <vc-geometry-polyline-ground :positions="polyline.positions" :width="polylineWidth" loop></vc-geometry-polyline-ground>
          </vc-instance-geometry>
        </vc-primitive-polyline-ground>
      </template>
    </vc-collection-primitive>
    <!-- 非贴地线 -->
    <vc-collection-primitive-polyline ref="polylineCollection" v-else>
      <vc-primitive-polyline
        :key="index"
        :loop="true"
        :material="polylineMaterial"
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
          :text="
            $vc.lang.measure.area +
              ': ' +
              (polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')
          "
        ></vc-primitive-label>
        <template v-for="(position, subIndex) of polyline.positions">
          <vc-primitive-label
            :backgroundColor="backgroundColor"
            :fillColor="fillColor"
            :font="font"
            :horizontalOrigin="1"
            :key="'label' + index + 'position' + subIndex"
            :labelStyle="labelStyle"
            :outlineColor="outlineColor"
            :outlineWidth="outlineWidth"
            :pixelOffset="pixelOffset"
            :position="
              subIndex !== polyline.positions.length - 1
                ? getMidPoistion(polyline.positions[subIndex], polyline.positions[subIndex + 1])
                : getMidPoistion(polyline.positions[subIndex], polyline.positions[0])
            "
            :showBackground="showBackground"
            :text="getDistanceText(polyline.distances[subIndex + 1] - polyline.distances[subIndex])"
            v-if="alongLine"
          ></vc-primitive-label>
        </template>
      </template>
    </vc-collection-primitive-label>
  </i>
</template>

<script>
import area from '@turf/area'
import mixinMeasure from '../../../mixins/tool/mixinMeasure'
import { makeMaterial } from '../../../utils/cesiumHelpers'
import { clone } from '../../../utils/util'
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
    clampToGround: {
      type: Boolean,
      default: false
    },
    alongLine: {
      type: Boolean,
      default: true
    },
    polygonMaterial: {
      type: Object,
      default: () => {
        return {
          fabric: {
            type: 'Color',
            uniforms: {
              color: 'rgba(255,165,0,0.25)'
            }
          }
        }
      }
    }
  },
  watch: {
    clampToGround () {
      const { getSurfaceArea, getDistance, polylines } = this
      polylines.forEach((polyline) => {
        polyline.area = getSurfaceArea(polyline.positions)

        const distances = [0]
        let totalDistance = 0
        for (let i = 0; i < polyline.positions.length; i++) {
          const positions = [polyline.positions[i], polyline.positions.length - 1 !== i
            ? polyline.positions[i + 1] : polyline.positions[0]]
          const distance = getDistance(positions)
          totalDistance += distance
          distances.push(totalDistance)
        }
        polyline.distances = distances
        polyline.distance = totalDistance
      })
    }
  },
  methods: {
    getDistanceText (distance) {
      return distance > 1000 ? distance.toFixed(2) + 'km' : distance.toFixed(2) + 'm'
    },
    getMidPoistion (left, right) {
      const { Cartesian3 } = Cesium
      return Cartesian3.midpoint(left, right, new Cartesian3())
    },
    makeEllipsoidSurfaceAppearance (val) {
      return new Cesium.EllipsoidSurfaceAppearance({
        material: makeMaterial.call(this, val)
      })
    },
    makePolylineMaterialAppearance (val) {
      return new Cesium.PolylineMaterialAppearance({
        material: makeMaterial.call(this, val)
      })
    },
    clone,
    /**
     * 用海伦公式获取传入坐标的构成的多边形的面积。
     * @param {Array.Cartesian}
     * @returns {Number} 返回面积数值。
     */
    getSurfaceArea (vals) {
      const positions = clone(vals, true)
      if (positions.length < 3) {
        return 0
      }
      const {
        Cartesian3,
        EllipsoidTangentPlane,
        Ellipsoid,
        Math: CesiumMath,
        PolygonGeometryLibrary,
        PolygonHierarchy,
        VertexFormat,
        ArcType
      } = Cesium
      const perPositionHeight = !this.clampToGround
      // Request the triangles that make up the polygon from Cesium.
      // 获取组成多边形的三角形。
      const tangentPlane = EllipsoidTangentPlane.fromPoints(positions, Ellipsoid.WGS84)
      const polygons = PolygonGeometryLibrary.polygonsFromHierarchy(
        new PolygonHierarchy(positions),
        tangentPlane.projectPointsOntoPlane.bind(tangentPlane),
        this.clampToGround,
        Ellipsoid.WGS84
      )

      const geom = PolygonGeometryLibrary.createGeometryFromPositions(
        Ellipsoid.WGS84,
        polygons.polygons[0],
        CesiumMath.RADIANS_PER_DEGREE,
        perPositionHeight,
        VertexFormat.POSITION_ONLY,
        ArcType.GEODESIC
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
