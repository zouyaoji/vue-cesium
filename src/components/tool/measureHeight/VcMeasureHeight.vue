<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive-polyline>
      <vc-primitive-polyline :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines" :material="polyline.materialLine" :width="2" :loop="true"></vc-primitive-polyline>
    </vc-collection-primitive-polyline>
    <vc-collection-primitive-point>
      <template v-for="(polyline, index) of polylines">
        <template v-for="(position, subIndex) of polyline.positions">
          <vc-primitive-point :position="position" :key="'point' + index + 'position' + subIndex" :color="colorPoint" :pixelSize="8"></vc-primitive-point>
        </template>
      </template>
    </vc-collection-primitive-point>
    <vc-collection-primitive-label ref="labelCollection">
      <vc-primitive-label
        :position="label.position"
        :text="label.text"
        :key="'label'+index"
        v-for="(label, index) of labels"
        :font="font"
        :outlineColor="outlineColorLabel"
        :disableDepthTestDistance="disableDepthTestDistance"
        :horizontalOrigin="1"
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
      measuring: false,
      startPoint: {},
      polylines: [],
      labels: []
    }
  },
  props: {
    distanceHText: {
      type: String,
      default: '水平距离：'
    },
    distanceSText: {
      type: String,
      default: '空间距离：'
    },
    heightText: {
      type: String,
      default: '垂直高度：'
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
          if ($node.componentOptions && ($node.componentOptions.tag === 'measure-distance' ||
            $node.componentOptions.tag === 'measure-area')) {
            $node.child.measuring = false
          }
        }
        startNew()
      }
      this.$emit('activeEvt', { type: 'heightMeasuring', isActive: val })
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
      if (polyline.positions.length === 0) {
        polyline.positions.push(cartesian)
        this.startPoint = cartesian
      }
    },
    async MOUSE_MOVE (movement) {
      if (!this.measuring) return
      const { Cesium, viewer, polylines, labels, onMeasureEvt, distanceHText, distanceSText, heightText } = this
      if (!polylines.length) return
      const polyline = polylines[polylines.length - 1]
      if (!polyline.positions.length) return
      let cartesian = viewer.scene.pickPosition(movement.endPosition)
      if (!Cesium.defined(cartesian)) return
      let endPoint = cartesian
      let normalStart = {}
      Cesium.Cartesian3.normalize(this.startPoint, normalStart)
      let planeStart = new Cesium.Plane(normalStart, -Cesium.Cartesian3.distance(this.startPoint, new Cesium.Cartesian3(0, 0, 0)))
      let hypPoint = {}
      polyline.height = Cesium.Plane.getPointDistance(planeStart, endPoint)
      let labelPositonHeight = {}
      let labelPositonH = {}
      let labelPositonS = {}
      if (polyline.height >= 0) {
        Cesium.Plane.projectPointOntoPlane(planeStart, endPoint, hypPoint)
        Cesium.Cartesian3.midpoint(endPoint, hypPoint, labelPositonHeight)
        Cesium.Cartesian3.midpoint(this.startPoint, hypPoint, labelPositonH)
        polyline.distanceH = Cesium.Cartesian3.distance(this.startPoint, hypPoint)
      } else {
        let normalEnd = {}
        Cesium.Cartesian3.normalize(endPoint, normalEnd)
        let planeEnd = new Cesium.Plane(normalStart, -Cesium.Cartesian3.distance(endPoint, new Cesium.Cartesian3(0, 0, 0)))
        Cesium.Plane.projectPointOntoPlane(planeEnd, this.startPoint, hypPoint)
        Cesium.Cartesian3.midpoint(this.startPoint, hypPoint, labelPositonHeight)
        Cesium.Cartesian3.midpoint(endPoint, hypPoint, labelPositonH)
        polyline.distanceH = Cesium.Cartesian3.distance(endPoint, hypPoint)
      }
      polyline.distanceS = Cesium.Cartesian3.distance(this.startPoint, endPoint)
      Cesium.Cartesian3.midpoint(this.startPoint, endPoint, labelPositonS)
      polyline.height = Math.abs(polyline.height)
      if (polyline.positions.length !== 1) {
        polyline.positions.pop()
        polyline.positions.pop()
        labels.pop()
        labels.pop()
        labels.pop()
      }
      polyline.positions.push(endPoint)
      polyline.positions.push(hypPoint)
      let labelTextHeight = polyline.height > 1000 ? (polyline.height / 1000).toFixed(2) + 'km' : polyline.height.toFixed(2) + 'm'
      labels.push({
        text: heightText + labelTextHeight,
        position: labelPositonHeight
      })
      let labelTextH = polyline.distanceH > 1000 ? (polyline.distanceH / 1000).toFixed(2) + 'km' : polyline.distanceH.toFixed(2) + 'm'
      labels.push({
        text: distanceHText + labelTextH,
        position: labelPositonH
      })
      let labelTextS = polyline.distanceS > 1000 ? (polyline.distanceS / 1000).toFixed(2) + 'km' : polyline.distanceS.toFixed(2) + 'm'
      labels.push({
        text: distanceSText + labelTextS,
        position: labelPositonS
      })

      await this.$nextTick()
      onMeasureEvt(polyline, labels)
    },
    async RIGHT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines, mode, startNew, onMeasureEvt, labels } = this
      if (!polylines.length) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      if (mode === 0) {
        if (polylines.length) {
          startNew()
        }
      } else {
        this.measuring = false
      }
      await this.$nextTick()
      onMeasureEvt(polyline, labels, true)
    },
    startNew () {
      const { polylines } = this
      Cesium.defined(polylines) && polylines.push({ positions: [],
        distanceH: 0,
        height: 0,
        distanceS: 0,
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
    },
    onMeasureEvt (polyline, labels, flag = false) {
      const listener = this.$listeners['measureEvt']
      let labelsResult = {
        labelHeight: this.$refs.labelCollection.cesiumObject.get(labels.length - 3),
        labelH: this.$refs.labelCollection.cesiumObject.get(labels.length - 2),
        labelS: this.$refs.labelCollection.cesiumObject.get(labels.length - 1)
      }
      listener && this.$emit('measureEvt', { polyline: polyline, label: labelsResult, type: 'heightMeasuring', accomplish: flag })
    }
  }
}
</script>
