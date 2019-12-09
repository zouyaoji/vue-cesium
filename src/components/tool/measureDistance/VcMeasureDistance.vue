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
            :text="distanceText + (polyline.distances[subIndex] > 1000 ? (polyline.distances[subIndex] / 1000).toFixed(2) + 'km' : polyline.distances[subIndex].toFixed(2) + 'm')"
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
  props: {
    distanceText: {
      type: String,
      default: '距离：'
    }
  },
  methods: {
    getDistance (positions) {
      const { Cesium } = this
      let distance = 0
      for (let i = 0; i < positions.length - 1; i++) {
        let s = Cesium.Cartesian3.distance(positions[i], positions[i + 1])
        distance = distance + s
      }
      return distance
    },
    clear () {
      this.polylines = []
      this.measuring = false
    }
  }
}
</script>
