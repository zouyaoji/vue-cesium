<template>
  <i>
    <polyline-collection>
      <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines" :material="materialLine" :width="2"></polyline-primitive>
    </polyline-collection>
    <point-collection>
      <point-primitive :position="point.position" :key="index" :color="colorPoint" :pixelSize="8" v-for="(point, index) of points"></point-primitive>
    </point-collection>
    <label-collection>
      <label-primitive :position="label.position" :text="label.text" :key="index" v-for="(label, index) of labels" 
      :font="font" :outlineColor="outlineColorLabel" :showBackground="true" :backgroundColor="backgroundColorLabel"
      :backgroundPadding="backgroundPaddingLabel"></label-primitive>
    </label-collection>
  </i>
</template>

<script>
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'measure-distance',
  render (h) {},
  mixins: [commonMixin('measure')],
  data () {
    return {
      distance: 0,
      polylines: [],
      labels: [],
      points: [],
      font: '100 20px SimSun',
      outlineColorLabel: undefined,
      backgroundColorLabel: undefined,
      backgroundPaddingLabel: undefined,
      colorPoint: undefined,
      materialLine: undefined
    }
  },
  props: {
    measuring: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    load () {
      this.Cesium = this.$parent.Cesium
      this.viewer = this.$parent.viewer
      const { Cesium, viewer } = this
      this.outlineColorLabel = Cesium.Color.fromCssColorString('rgb(0,0,255)')
      this.backgroundColorLabel = Cesium.Color.fromCssColorString('rgba(42,42,42,0.8)')
      this.backgroundPaddingLabel = new Cesium.Cartesian2(7, 5)
      this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
      this.materialLine = Cesium.Material.fromType('Color')
      this.materialLine.uniforms.color = new Cesium.Color(0.3176470588235294, 1, 0, 1)
      let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
      handler.setInputAction(this.LEFT_CLICK, Cesium.ScreenSpaceEventType.LEFT_CLICK)
      handler.setInputAction(this.MOUSE_MOVE, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      handler.setInputAction(this.RIGHT_CLICK, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    },
    LEFT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines, labels, points } = this
      !polylines.length && polylines.push({ positions: [] })
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      let text = '距离'
      polylines[polylines.length - 1].positions.push(cartesian)
      labels.push({
        text: text + this.distance > 1000 ? (this.distance / 1000).toFixed(2) + 'km' : this.distance.toFixed(2) + 'm',
        position: cartesian
      })
      points.push({
        position: cartesian
      })
    },
    MOUSE_MOVE (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines, labels, points } = this
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
      this.distance = this.getDistance(polyline.positions)
      if (polyline.positions.length >= 2) {
        points.pop()
        labels.pop()
        polyline.positions.pop()
      }
      polyline.positions.push(cartesian)
      labels.push({
        text: '距离' + this.distance > 1000 ? (this.distance / 1000).toFixed(2) + 'km' : this.distance.toFixed(2) + 'm',
        position: cartesian
      })
      points.push({
        position: cartesian
      })
    },
    RIGHT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines } = this
      if (!polylines.length) {
        return
      }
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      polyline.positions.pop()
      polyline.positions.push(cartesian)
      if (polylines.length) {
        polylines.push({ positions: [] })
      }
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
      this.distance = 0
      this.polylines = []
      this.labels = []
      this.points = []
    }
  }
}
</script>
