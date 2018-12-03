<template>
  <i style="display: none">
    <polyline-collection>
      <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines" :material="materialLine" :width="2"></polyline-primitive>
    </polyline-collection>
    <point-collection>
      <template v-for="(polyline, index) of polylines">
        <template  v-for="(position, subIndex) of polyline.positions">
          <point-primitive :position="position" :key="'polyline' + index + 'position' + subIndex" :color="colorPoint" :pixelSize="8"></point-primitive>
        </template>
      </template>
    </point-collection>
    <label-collection ref="labelCollection" @ready="labelCollectionReady">
      <!-- <template v-for="(polyline, index) of polylines">
        <template  v-for="(position, subIndex) of polyline.positions">
          <label-primitive :position="position" :key="'polyline' + index + 'position' + subIndex" :font="font" :outlineColor="outlineColorLabel"
            :text="polyline.distance + 'm'"
            :showBackground="true" :backgroundColor="backgroundColorLabel" :backgroundPadding="backgroundPaddingLabel" :disableDepthTestDistance="0">
          </label-primitive>
        </template>
      </template> -->
      <label-primitive :ref="'label' + index" :position="label.position" :text="label.text" :key="index" v-for="(label, index) of labels" 
        :font="font" :outlineColor="outlineColorLabel" :showBackground="true" :backgroundColor="backgroundColorLabel"
        :backgroundPadding="backgroundPaddingLabel" :disableDepthTestDistance="0"></label-primitive>
    </label-collection>
  </i>
</template>

<script>
import commonMixin from '../../mixins/common.js'
export default {
  name: 'measure-distance',
  render (h) {},
  mixins: [commonMixin('measure')],
  data () {
    return {
      measuring: false,
      distance: 0,
      polylines: [],
      labels: [],
      font: '100 20px SimSun',
      mode: 1
    }
  },
  watch: {
    measuring (val) {
      const { polylines } = this
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
        polylines.length && polylines.push({ positions: [], distance: 0 })
      }
      this.$emit('activeEvt', { type: 'distanceMeasuring', isActive: val })
    }
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
      const { Cesium, viewer, polylines, labels } = this
      !polylines.length && polylines.push({ positions: [], distance: 0 })
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      polyline.positions.push(cartesian)
      if (polyline.positions.length >= 2) {
        labels.push({
          text: this.distance > 1000 ? (this.distance / 1000).toFixed(2) + 'km' : this.distance.toFixed(2) + 'm',
          position: cartesian
        })
      }
    },
    MOUSE_MOVE (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines, labels } = this
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
        labels.pop()
        polyline.positions.pop()
      }
      polyline.positions.push(cartesian)
      polyline.distance = this.getDistance(polyline.positions)
      labels.push({
        text: polyline.distance > 1000 ? (polyline.distance / 1000).toFixed(2) + 'km' : polyline.distance.toFixed(2) + 'm',
        position: cartesian
      })
    },
    RIGHT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines, mode } = this
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
      if (mode === 0) {
        if (polylines.length) {
          polylines.push({ positions: [], distance: 0 })
        }
      } else {
        this.measuring = false
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
    },
    labelCollectionReady () {
      this.$refs.labelCollection.originInstance._backgroundBillboardCollection._depthTestEnable = false
      this.$refs.labelCollection.originInstance._billboardCollection._depthTestEnable = false
    }
  }
}
</script>
