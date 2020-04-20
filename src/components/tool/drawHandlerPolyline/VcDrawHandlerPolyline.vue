<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive-polyline ref="polylineCollection">
      <vc-primitive-polyline
        :key="index"
        :material="getPolylineMaterial(polylineMaterial)"
        :positions="polyline.positions"
        :width="polylineWidth"
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
  </i>
</template>

<script>
import mixinDraw from '../../../mixins/tool/mixinDraw'
import { makeMaterial } from '../../../utils/util'

export default {
  name: 'vc-handler-draw-polyline',
  mixins: [mixinDraw],
  data () {
    return {
      drawType: 'polylineDrawing',
      drawing: false,
      polylines: []
    }
  },
  props: {
    depthTest: {
      type: Boolean,
      default: false
    },
    polylineMaterial: {
      type: Object,
      default: () => {
        return {
          fabric: {
            type: 'Color',
            uniforms: {
              color: '#51ff00'
            }
          }
        }
      }
    },
    polylineWidth: {
      type: Number,
      default: 2
    }
  },
  methods: {
    getPolylineMaterial (val) {
      if (!(val instanceof Cesium.Material)) {
        return makeMaterial(val)
      } else {
        return val
      }
    }
  }
}
</script>
