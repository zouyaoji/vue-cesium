<template>
  <i :class="$options.name" style="display: none !important">
    <!-- 贴地 -->
    <vc-collection-primitive ref="groundPolylineCollection" v-if="clampToGround">
      <template v-for="(polyline, index) of polylines">
        <vc-primitive-polyline-ground
          :appearance="makeAppearance(polylineMaterial)"
          :arcType="arcType"
          :asynchronous="false"
          :key="index"
          v-if="polyline.positions.length > 1"
        >
          <vc-instance-geometry>
            <vc-geometry-polyline-ground :positions="polyline.positions" :width="polylineWidth"></vc-geometry-polyline-ground>
          </vc-instance-geometry>
        </vc-primitive-polyline-ground>
      </template>
    </vc-collection-primitive>
    <vc-collection-primitive-polyline ref="polylineCollection" v-else>
      <vc-primitive-polyline
        :key="index"
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
            :text="$vc.lang.measure.distance + ': ' + getDistanceText(polyline.distances[subIndex])"
            v-if="subIndex === polyline.positions.length - 1"
          ></vc-primitive-label>
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
            :position="getMidPoistion(polyline.positions[subIndex], polyline.positions[subIndex + 1])"
            :showBackground="showBackground"
            :text="getDistanceText(polyline.distances[subIndex + 1] - polyline.distances[subIndex])"
            v-if="
              ((subIndex !== polyline.positions.length - 1 && polyline.positions.length > 2 + subIndex) ||
                (polyline.positions.length > 2 + subIndex ||
                  (polyline.positions.length - 2 === subIndex && polyline.positions.length !== 2)) && alongLine)
            "
          ></vc-primitive-label>
        </template>
      </template>
    </vc-collection-primitive-label>
  </i>
</template>
<script>
import mixinMeasure from '../../../mixins/tool/mixinMeasure'
import { makeMaterial } from '../../../utils/cesiumHelpers'
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
  props: {
    arcType: {
      type: Number,
      default: 0
    },
    clampToGround: {
      type: Boolean,
      default: false
    },
    alongLine: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    clampToGround () {
      const { getDistance, polylines } = this
      polylines.forEach((polyline) => {
        const distances = [0]
        let totalDistance = 0
        for (let i = 0; i < polyline.positions.length - 1; i++) {
          const positions = [polyline.positions[i], polyline.positions[i + 1]]
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
      return distance > 1000 ? (distance / 1000).toFixed(2) + 'km' : distance.toFixed(2) + 'm'
    },
    getMidPoistion (left, right) {
      const { Cartesian3 } = Cesium
      return Cartesian3.midpoint(left, right, new Cartesian3())
    },
    clear () {
      this.polylines = []
      this.measuring = false
    },
    makeAppearance (val) {
      return new Cesium.PolylineMaterialAppearance({
        material: makeMaterial.call(this, val)
      })
    }
  }
}
</script>
