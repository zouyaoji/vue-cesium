<template>
  <i style="display: none ">
    <polyline-collection>
      <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines" :material="materialLine" :width="2" :loop="true"></polyline-primitive>
    </polyline-collection>
    <point-collection>
      <template v-for="(polyline, index) of polylines">
        <template  v-for="(position, subIndex) of polyline.positions">
          <point-primitive :position="position" :key="'polyline' + index + 'position' + subIndex" :color="colorPoint" :pixelSize="8"></point-primitive>
        </template>
      </template>
    </point-collection>
    <label-collection ref="labelCollection" @ready="labelCollectionReady">
      <template v-for="(polyline, index) of polylines">
        <label-primitive :position="polyline.positions[polyline.positions.length-1]" :key="index"
          :text="'面积:' + (polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')" 
          :font="font" :outlineColor="outlineColorLabel" :showBackground="true" :backgroundColor="backgroundColorLabel"
          :backgroundPadding="backgroundPaddingLabel" :disableDepthTestDistance="0">
        </label-primitive>
      </template>
    </label-collection>
    <entity :key="index" v-for="(polyline, index) of polylines">
      <polygon-graphics :ref="'line'+index" :hierarchy="polyline.positions" :perPositionHeight="true" :material="materialPolygon"></polygon-graphics>
    </entity>
  </i>
</template>

<script>
import turfArea from '../../util/turfArea.js'
import measure from '../../mixins/measure'
export default {
  name: 'measure-area',
  mixins: [measure],
  data () {
    return {
      measuring: false,
      polylines: [],
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
            $node.componentOptions.tag === 'measure-distance')) {
            $node.child.measuring = false
          }
        }
        polylines.length && polylines.push({ positions: [], area: 0 })
      }
      const listener = this.$listeners['activeEvt']
      listener && this.$emit('activeEvt', { type: 'areaMeasuring', isActive: val })
    }
  },
  methods: {
    LEFT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines } = this
      !polylines.length && polylines.push({ positions: [], area: 0 })
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      polyline.positions.push(cartesian)
    },
    MOUSE_MOVE (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines } = this
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
      }
      polyline.positions.push(cartesian)
      polyline.area = this.getArea(polyline.positions)
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
          polylines.push({ positions: [], area: 0 })
        }
      } else {
        this.measuring = false
      }
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
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Polygon',
              'coordinates': arrs
            }
          }, {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Polygon',
              'coordinates': [[
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ]]
            }
          }
        ]
      }
      return turfArea(polygons)
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
