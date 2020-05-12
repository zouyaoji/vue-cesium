<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive :show="show">
      <vc-collection-primitive ref="groundPolylineCollection" v-if="clampToGround">
        <template v-for="(polyline, index) of polylines">
          <vc-primitive-polyline-ground
            :appearance="makeAppearance(polylineMaterial)"
            :asynchronous="false"
            :key="index"
            v-if="polyline.positions.length > 1"
          >
            <vc-instance-geometry>
              <vc-geometry-polyline-ground :positions="polyline.positions" :width="polylineWidth"></vc-geometry-polyline-ground>
            </vc-instance-geometry>
          </vc-primitive-polyline-ground>
        </template>
      </vc-collection-primitive>
      <vc-collection-primitive-polyline ref="polylineCollection" v-else>
        <vc-primitive-polyline
          :key="index"
          :material="polylineMaterial"
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
    </vc-collection-primitive>
  </i>
</template>

<script>
import mixinDraw from '../../../mixins/tool/mixinDraw'
import { makeMaterial } from '../../../utils/cesiumHelpers'
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
    },
    clampToGround: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    makeAppearance (val) {
      return new Cesium.PolylineMaterialAppearance({
        material: makeMaterial.call(this, val)
      })
    }
  }
}
</script>
