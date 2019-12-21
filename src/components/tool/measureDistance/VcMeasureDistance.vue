<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive-polyline ref="polylineCollection">
      <vc-primitive-polyline
        :key="index"
        :material="polyline.materialLine"
        :positions="polyline.positions"
        :width="polylineWidth"
        v-for="(polyline, index) of polylines"
      ></vc-primitive-polyline>
    </vc-collection-primitive-polyline>
    <vc-collection-primitive-polyline ref="polylineCollection">
      <vc-primitive-polyline
        :key="index"
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
            :position="position"
            :showBackground="showBackground"
            :text="$vc.lang.measure.distance + ': ' + (polyline.distances[subIndex] > 1000 ? (polyline.distances[subIndex] / 1000).toFixed(2) + 'km' : polyline.distances[subIndex].toFixed(2) + 'm')"
            v-if="polyline.distances[subIndex] !== 0"
          ></vc-primitive-label>
        </template>
      </template>
    </vc-collection-primitive-label>
  </i>
</template>
<script>
import mixinMeasure from '../../../mixins/tool/mixinMeasure'
export default {
  name: 'vc-measure-distance',
  mixins: [mixinMeasure],
  data () {
    return {
      type: 'distanceMeasuring',
      measuring: false,
      polylines: []
    }
  },
  methods: {
    /**
     * 根据传入坐标数组计算距离。
     * @param {Array.Cartesian3} positions 传入的坐标数组
     * @returns {Number} 返回长度数值。
     */
    getDistance (positions) {
      // const { Cartesian3 } = Cesium
      let distance = 0
      for (let i = 0; i < positions.length - 1; i++) {
        // Cartesian.distance gives the straight line distance between the two points, ignoring curvature. This is not what we want.
        // Cartesian3.distance 计算的是两点之间的直线距离，忽略了地球曲率，不太合理。
        // let s = Cartesian3.distance(positions[i], positions[i + 1])
        // 2.0.3 版本改为测地距离（GeodesicDistance）。
        let s = this.getGeodesicDistance(positions[i], positions[i + 1])
        distance = distance + s
      }
      return distance
    },
    /**
     * 返回两点之间的测地距离。
     * @param {Cartesian3} pointOne 第一个坐标点
     * @param {Cartesian3} pointTwo 第二个坐标点
     * @returns {Number} 返回两点之间的测地距离。
     */
    getGeodesicDistance (pointOne, pointTwo) {
      const { Ellipsoid, EllipsoidGeodesic } = Cesium
      const pickedPointCartographic = Ellipsoid.WGS84.cartesianToCartographic(
        pointOne
      )
      const lastPointCartographic = Ellipsoid.WGS84.cartesianToCartographic(
        pointTwo
      )
      const geodesic = new EllipsoidGeodesic(
        pickedPointCartographic,
        lastPointCartographic
      )
      return geodesic.surfaceDistance
    },
    clear () {
      this.polylines = []
      this.measuring = false
    }
  }
}
</script>
