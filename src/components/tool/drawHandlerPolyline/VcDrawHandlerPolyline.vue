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
  </i>
</template>

<script>
import mixinDraw from '../../../mixins/tool/mixinDraw'
import { makeColor } from '../../../utils/util'
export default {
  name: 'vc-handler-draw-polyline',
  mixins: [mixinDraw],
  data () {
    return {
      polygon: {},
      drawing: false,
      polylines: []
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
          if ($node.componentOptions && ($node.componentOptions.tag === 'vc-handler-draw-point' ||
            $node.componentOptions.tag === 'vc-handler-draw-polygon')) {
            $node.child.drawing = false
          }
        }
        startNew()
      }
      const listener = this.$listeners['activeEvt']
      listener && this.$emit('activeEvt', { type: 'polylineDrawing', isActive: val })
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
      const { Cesium, viewer, polylines, onDrawingEvt } = this
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
      const listener = this.$listeners['movingEvt']
      listener && this.$emit('movingEvt', movement.endPosition)
      onDrawingEvt(polyline, nIndex)
    },
    async RIGHT_CLICK (movement) {
      if (!this.drawing) {
        return
      }
      const { viewer, polylines, mode, startNew, onDrawingEvt } = this
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
      if (mode === 0) {
        startNew()
      } else {
        this.drawing = false
      }
      await this.$nextTick()
      onDrawingEvt(polyline, nIndex, true)
    },
    startNew () {
      const { polylines } = this
      Cesium.defined(polylines) && polylines.push({ positions: [],
        materialLine: new Cesium.Material({
          fabric: {
            type: 'Color',
            uniforms: {
              color: makeColor(this.polylineColor)
            }
          }
        })
      })
    },
    clear () {
      this.polylines = []
      this.drawing = false
    },
    onDrawingEvt (polyline, index, flag = false) {
      this.index = index
      if (!this.depthTest) {
        this.$refs.polylineCollection.cesiumObject._opaqueRS.depthTest.enabled = false
      }
      const listener = this.$listeners['drawEvt']
      listener &&
        this.$emit('drawEvt', {
          polyline: polyline,
          type: 'polylineDrawing',
          finished: flag
        })
    }
  }
}
</script>
