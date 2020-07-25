<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive-polyline ref="polylineCollection">
      <vc-primitive-polyline
        :key="index"
        :material="polylineMaterial"
        :positions="polyline.positions"
        :width="polylineWidth"
        loop
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
      <vc-primitive-label
        :backgroundColor="backgroundColor"
        :fillColor="fillColor"
        :font="font"
        :horizontalOrigin="1"
        :key="'label'+index"
        :labelStyle="labelStyle"
        :outlineColor="outlineColor"
        :outlineWidth="outlineWidth"
        :pixelOffset="pixelOffset"
        :position="label.position"
        :showBackground="showBackground"
        :text="label.text"
        v-for="(label, index) of labels"
      ></vc-primitive-label>
    </vc-collection-primitive-label>
  </i>
</template>

<script>
import mixinMeasure from '../../../mixins/tool/mixinMeasure'
export default {
  name: 'vc-measure-height',
  mixins: [mixinMeasure],
  data () {
    return {
      type: 'heightMeasuring',
      measuring: false,
      startPoint: {},
      polylines: [],
      labels: [],
      nowaiting: true
    }
  },
  methods: {
    getDistance (positions) {
      let distance = 0
      for (let i = 0; i < positions.length - 1; i++) {
        let s = Cesium.Cartesian3.distance(positions[i], positions[i + 1])
        distance = distance + s
      }
      return distance
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
