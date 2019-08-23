<template>
  <i style="display: none ">
    <polyline-collection>
      <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines" :material="polyline.materialLine" :width="2"></polyline-primitive>
    </polyline-collection>
  </i>
</template>

<script>
import drawMixin from '../../mixins/tool/drawMixin'
export default {
  name: 'draw-polyline-handler',
  mixins: [drawMixin],
  data () {
    return {
      polygon: {},
      drawing: false,
      polylines: [],
      font: '100 20px SimSun',
      mode: 1
    }
  },
  props: {
    perPositionHeight: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    drawing (val) {
      const { polylines, startNew } = this
      const polyline = polylines[polylines.length - 1]
      if (!val && polyline && !polyline.positions.length) {
        this.polylines.pop()
      } else if (val) {
        for (let $node of this.$parent.$slots.default || []) {
          if ($node.componentOptions && ($node.componentOptions.tag === 'measure-height' ||
            $node.componentOptions.tag === 'measure-area')) {
            $node.child.drawing = false
          }
        }
        startNew()
      }
      this.$emit('activeEvt', { type: 'polylineDrawing', isActive: val })
    }
  },
  methods: {
    LEFT_CLICK (movement) {
      if (!this.drawing) {
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
      if (!this.drawing) {
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
      this.$emit('movingEvt', movement.endPosition)
    },
    async RIGHT_CLICK (movement) {
      if (!this.drawing) {
        return
      }
      const { viewer, polylines, mode, startNew } = this
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
      if (mode === 0) {
        startNew()
      } else {
        this.drawing = false
      }
      await this.$nextTick()
      this.$emit('drawEvt', polyline)
    },
    startNew () {
      const { polylines } = this
      Cesium.defined(polylines) && polylines.push({ positions: [],
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
    clear () {
      this.polylines = []
      this.drawing = false
    }
  }
}
</script>
