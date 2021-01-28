<template>
  <i :class="$options.name">
    <vc-collection-primitive :show="show">
      <!-- 非贴地面 -->
      <vc-collection-primitive ref="polygonCollection" v-if="!clampToGround">
        <template v-for="(polyline, index) of polylines">
          <vc-primitive
            :appearance="makeEllipsoidSurfaceAppearance(polygonMaterial)"
            :asynchronous="false"
            :key="index"
            v-if="polyline.positions.length > 2"
          >
            <vc-instance-geometry>
              <vc-geometry-polygon
                :perPositionHeight="true"
                :polygonHierarchy="clone(polyline.positions, true)"
              ></vc-geometry-polygon>
            </vc-instance-geometry>
          </vc-primitive>
        </template>
      </vc-collection-primitive>
      <!-- 贴地面 -->
      <vc-collection-primitive ref="groundPolygonCollection" v-else>
        <template v-for="(polyline, index) of polylines">
          <vc-primitive-ground
            :appearance="makeEllipsoidSurfaceAppearance(polygonMaterial)"
            :asynchronous="false"
            :key="index"
            v-if="polyline.positions.length > 2"
          >
            <vc-instance-geometry>
              <vc-geometry-polygon
                :perPositionHeight="false"
                :polygonHierarchy="clone(polyline.positions, true)"
              ></vc-geometry-polygon>
            </vc-instance-geometry>
          </vc-primitive-ground>
        </template>
      </vc-collection-primitive>
      <!-- 贴地线 -->
      <vc-collection-primitive ref="groundPolylineCollection" v-if="clampToGround">
        <template v-for="(polyline, index) of polylines">
          <vc-primitive-polyline-ground
            :appearance="makePolylineMaterialAppearance(polylineMaterial)"
            :asynchronous="false"
            :key="index"
            v-if="polyline.positions.length > 1"
          >
            <vc-instance-geometry>
              <vc-geometry-polyline-ground
                :positions="polyline.positions"
                :width="polylineWidth"
                loop
              ></vc-geometry-polyline-ground>
            </vc-instance-geometry>
          </vc-primitive-polyline-ground>
        </template>
      </vc-collection-primitive>
      <!-- 非贴地线 -->
      <vc-collection-primitive-polyline ref="polylineCollection" :polylines="primitivePolylines" v-else>
      </vc-collection-primitive-polyline>
      <!-- 点 -->
      <vc-collection-primitive-point ref="pointCollection" :points="points" @mouseover="pointMouseOver" @mouseout="pointMouseOut">
      </vc-collection-primitive-point>
    </vc-collection-primitive>
    <vc-overlay-html :position="toolbarPosition" v-if="showToolbar">
      <button :title="$vc.lang.draw.editingMove" class="vc-btn" type="button" @click="onEditClick('move')">
        <vc-icon-svg name="icon-move"></vc-icon-svg>
      </button>
      <button :title="$vc.lang.draw.editingInsert" class="vc-btn" type="button" @click="onEditClick('insert')">
        <vc-icon-svg name="icon-add"></vc-icon-svg>
      </button>
      <button :title="$vc.lang.draw.editingDelete" class="vc-btn" type="button" @click="onEditClick('delete')">
        <vc-icon-svg name="icon-delete"></vc-icon-svg>
      </button>
    </vc-overlay-html>
    <vc-overlay-html :position="tooltipPosition" v-if="showTooltip && showDrawTip" :pixelOffset="[32, 32]">
      <div class="vc-html-bubble">{{ tooltip }}</div>
    </vc-overlay-html>
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
      drawType: 'polygonDrawing'
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
  computed: {
    primitivePolylines () {
      const polylines = []
      this.polylines.forEach((item, index) => {
        const polyline = {
          material: this.polylineMaterial,
          positions: item.positions,
          width: this.polylineWidth,
          loop: true,
          polylineIndex: index
        }
        polylines.push(polyline)
      })
      return polylines
    }
  },
  methods: {
    makeEllipsoidSurfaceAppearance (val) {
      return new Cesium.EllipsoidSurfaceAppearance({
        material: makeMaterial.call(this, val),
        renderState: {
          cull: {
            enabled: false
          }
        }
      })
    },
    makePolylineMaterialAppearance (val) {
      return new Cesium.PolylineMaterialAppearance({
        material: makeMaterial.call(this, val)
      })
    },
    clone
  }
}
</script>
