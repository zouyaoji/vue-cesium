<template>
  <i :class="$options.name">
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
      <vc-collection-primitive-polyline ref="polylineCollection" :polylines="primitivePolylines" v-else>
      </vc-collection-primitive-polyline>
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
export default {
  name: 'vc-handler-draw-polyline',
  mixins: [mixinDraw],
  data () {
    return {
      drawType: 'polylineDrawing'
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
  computed: {
    primitivePolylines () {
      const polylines = []
      this.polylines.forEach((item, index) => {
        const polyline = {
          material: this.polylineMaterial,
          positions: item.positions,
          width: this.polylineWidth,
          polylineIndex: index
        }
        polylines.push(polyline)
      })
      return polylines
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
