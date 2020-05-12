<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive :show="show">
      <!-- 非贴地面 -->
      <vc-collection-primitive ref="polygonCollection" v-if="!clampToGround">
        <template v-for="(polyline, index) of polylines">
          <vc-primitive
            :appearance="makeAppearance(polygonMaterial)"
            :asynchronous="false"
            :key="index"
            v-if="polyline.positions.length > 2"
          >
            <vc-instance-geometry>
              <vc-geometry-polygon :perPositionHeight="true" :polygonHierarchy="clone(polyline.positions, true)"></vc-geometry-polygon>
            </vc-instance-geometry>
          </vc-primitive>
        </template>
      </vc-collection-primitive>
      <!-- 贴地面 -->
      <vc-collection-primitive ref="groundPolygonCollection" v-else>
        <template v-for="(polyline, index) of polylines">
          <vc-primitive-ground
            :appearance="makeAppearance(polygonMaterial)"
            :asynchronous="false"
            :key="index"
            v-if="polyline.positions.length > 2"
          >
            <vc-instance-geometry>
              <vc-geometry-polygon :perPositionHeight="false" :polygonHierarchy="clone(polyline.positions, true)"></vc-geometry-polygon>
            </vc-instance-geometry>
          </vc-primitive-ground>
        </template>
      </vc-collection-primitive>
      <!-- 贴地线 -->
      <vc-collection-primitive ref="groundPolylineCollection" v-if="clampToGround">
        <template v-for="(polyline, index) of polylines">
          <vc-primitive-polyline-ground
            :appearance="makeAppearance(polylineMaterial)"
            :asynchronous="false"
            :key="index"
            v-if="polyline.positions.length > 1"
          >
            <vc-instance-geometry>
              <vc-geometry-polyline-ground :positions="polyline.positions" :width="polylineWidth" loop></vc-geometry-polyline-ground>
            </vc-instance-geometry>
          </vc-primitive-polyline-ground>
        </template>
      </vc-collection-primitive>
      <!-- 非贴地线 -->
      <vc-collection-primitive-polyline ref="polylineCollection" v-else>
        <vc-primitive-polyline
          :key="index"
          :material="polylineMaterial"
          :positions="polyline.positions"
          :width="polylineWidth"
          loop
          v-for="(polyline, index) of polylines"
        ></vc-primitive-polyline>
      </vc-collection-primitive-polyline>
      <!-- 点 -->
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
import { clone } from '../../../utils/util'
export default {
  name: 'vc-handler-draw-polygon',
  mixins: [mixinDraw],
  data () {
    return {
      drawType: 'polygonDrawing',
      drawing: false,
      polylines: []
    }
  },
  props: {
    depthTest: {
      type: Boolean,
      default: true
    },
    perPositionHeight: {
      type: Boolean,
      default: true
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
    polygonMaterial: {
      type: Object,
      default: () => {
        return {
          fabric: {
            type: 'Color',
            uniforms: {
              color: 'rgba(255,165,0,0.25)'
            }
          }
        }
      }
    },
    clampToGround: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    window.vm = this
  },
  methods: {
    makeAppearance (val) {
      return new Cesium.EllipsoidSurfaceAppearance({
        material: makeMaterial.call(this, val)
      })
    },
    clone
  }
}
</script>
