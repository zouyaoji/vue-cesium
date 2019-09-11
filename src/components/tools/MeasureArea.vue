<template>
  <i :class="$options.name" style="display: none !important">
    <polyline-collection>
      <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines" :material="polyline.materialLine" :width="2" :loop="true"></polyline-primitive>
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
        <label-primitive :position="polyline.positions[polyline.positions.length-1]" :key="'label'+index"  :pixelOffset="pixelOffset"
          :text= "areaText+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
          :font="font" :outlineColor="outlineColorLabel" showBackground :disableDepthTestDistance="disableDepthTestDistance" :horizontalOrigin="1">
        </label-primitive>
      </template>
    </label-collection>
    <entity :ref="'entity'+index" :key="index" v-for="(polyline, index) of polylines" :polygon.sync="polyline.polygon">
      <polygon-graphics :hierarchy="polyline.positions" :perPositionHeight="perPositionHeight" :material="materialPolygon" @ready="ready"></polygon-graphics>
    </entity>
  </i>
</template>

<script>
import turfArea from '../../libs/turfArea/turfArea'
import measure from '../../mixins/tool/measure'
export default {
  name: 'measure-area',
  mixins: [measure],
  data () {
    return {
      measuring: false,
      polylines: []
    }
  },
  props: {
    perPositionHeight: {
      type: Boolean,
      default: true
    },
    areaText: {
      type: String,
      default: '面积：'
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
            $node.componentOptions.tag === 'measure-distance')) {
            $node.child.measuring = false
          }
        }
        startNew()
      }
      const listener = this.$listeners['activeEvt']
      listener && this.$emit('activeEvt', { type: 'areaMeasuring', isActive: val })
    }
  },
  methods: {
    ready (val) {
      const { polylines } = this
      const polyline = polylines[polylines.length - 1]
      val.cesiumObject.hierarchy = new Cesium.CallbackProperty(() => polyline.positions, false)
    },
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
    },
    async MOUSE_MOVE (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines, onMeasureEvt } = this
      if (!polylines.length) {
        return
      }
      const nIndex = polylines.length - 1
      const polyline = polylines[nIndex]
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
      await this.$nextTick()
      onMeasureEvt(polyline, nIndex)
    },
    async RIGHT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines, mode, startNew, onMeasureEvt } = this
      if (!polylines.length) {
        return
      }
      const nIndex = polylines.length - 1
      const polyline = polylines[nIndex]
      if (polyline.positions.length === 0) {
        return
      }
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      polyline.positions.pop()
      polyline.area = this.getArea(polyline.positions)
      if (mode === 0) {
        startNew()
      } else {
        this.measuring = false
      }
      await this.$nextTick()
      onMeasureEvt(polyline, nIndex, true)
    },
    startNew () {
      const { polylines } = this
      Cesium.defined(polylines) && polylines.push({ positions: [],
        area: 0,
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
      this.measuring = false
    },
    onMeasureEvt (polyline, index, flag = false) {
      const listener = this.$listeners['measureEvt']
      listener && this.$emit('measureEvt', { polyline: polyline, label: this.$refs.labelCollection.cesiumObject.get(index), type: 'areaMeasuring', accomplish: flag })
    }
  }
}
</script>
