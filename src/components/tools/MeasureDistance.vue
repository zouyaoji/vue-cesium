<template>
  <i style="display: none !important">
    <polyline-collection>
      <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines" :material="polyline.materialLine" :width="2"></polyline-primitive>
    </polyline-collection>
    <point-collection>
      <template v-for="(polyline, index) of polylines">
        <template  v-for="(position, subIndex) of polyline.positions">
          <point-primitive :position="position" :key="'point' + index + 'position' + subIndex" :color="colorPoint" :pixelSize="8"></point-primitive>
        </template>
      </template>
    </point-collection>
    <label-collection ref="labelCollection">
      <template v-for="(polyline, index) of polylines">
        <template  v-for="(position, subIndex) of polyline.positions">
          <label-primitive :position="position" :key="'label' + index + 'position' + subIndex" :font="font" :outlineColor="outlineColorLabel"
            :text="distanceText + (polyline.distances[subIndex] > 1000 ? (polyline.distances[subIndex] / 1000).toFixed(2) + 'km' : polyline.distances[subIndex].toFixed(2) + 'm')"
            showBackground :disableDepthTestDistance="disableDepthTestDistance" v-if="polyline.distances[subIndex] !== 0" :pixelOffset="pixelOffset" :horizontalOrigin="1">
          </label-primitive>
        </template>
      </template>
    </label-collection>
  </i>
</template>
<script>
import measure from '../../mixins/tool/measure'
export default {
  name: 'measure-distance',
  mixins: [measure],
  data () {
    return {
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
  watch: {
    measuring (val) {
      const { polylines, startNew } = this
      const polyline = polylines[polylines.length - 1]
      if (!val && polyline && !polyline.positions.length) {
        this.polylines.pop()
      } else if (val) {
        for (let $node of this.$parent.$slots.default || []) {
          if ($node.componentOptions && ($node.componentOptions.tag === 'measure-height' ||
            $node.componentOptions.tag === 'measure-area')) {
            $node.child.measuring = false
          }
        }
        startNew()
      }
      this.$emit('activeEvt', { type: 'distanceMeasuring', isActive: val })
    }
  },
  methods: {
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
      let distance = polyline.distance
      polyline.distances.push(distance)
    },
    async MOUSE_MOVE (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines, onMeasureEvt } = this
      if (!polylines.length) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      if (!polyline.positions.length) {
        return
      }
      let cartesian = viewer.scene.pickPosition(movement.endPosition)
      if (!Cesium.defined(cartesian)) {
        return
      }
      if (polyline.positions.length >= 2) {
        polyline.positions.pop()
        polyline.distances.pop()
      }
      polyline.positions.push(cartesian)
      let distance = this.getDistance(polyline.positions)
      polyline.distances.push(distance)
      polyline.distance = distance
      await this.$nextTick()
      let nIndex = 0
      polylines.forEach(polyline => {
        nIndex += polyline.positions.length - 1
      })
      onMeasureEvt(polyline, nIndex - 1)
    },
    async RIGHT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines, mode, startNew, onMeasureEvt } = this
      if (!polylines.length) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      if (polyline.positions.length === 0) {
        return
      }
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      polyline.positions.pop()
      polyline.distances.pop()
      polyline.distance = this.getDistance(polyline.positions)
      if (mode === 0) {
        startNew()
      } else {
        this.measuring = false
      }
      await this.$nextTick()
      let nIndex = 0
      polylines.forEach(polyline => {
        nIndex += polyline.positions.length - 1
      })
      onMeasureEvt(polyline, nIndex - 1, true)
    },
    startNew () {
      const { polylines } = this
      Cesium.defined(polylines) && polylines.push({ positions: [],
        distances: [],
        distance: 0,
        materialLine: new Cesium.Material({
          fabric: {
            type: 'Color',
            uniforms: {
              color: new Cesium.Color(0.3176470588235294, 1, 0, 1)
            }
          }
        })
      })
    },
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
    },
    onMeasureEvt (polyline, index, flag = false) {
      const listener = this.$listeners['measureEvt']
      listener && this.$emit('measureEvt', { polyline: polyline, label: this.$refs.labelCollection.cesiumObject.get(index), type: 'distanceMeasuring', accomplish: flag })
    }
  }
}
</script>
