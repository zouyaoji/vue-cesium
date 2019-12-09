<template>
  <i :class="$options.name" style="display: none !important">
    <vc-collection-primitive-polyline ref="polylineCollection">
      <vc-primitive-polyline
        :key="index"
        :loop="true"
        :material="polyline.materialLine"
        :positions="polyline.positions"
        :width="polylineWidth"
        v-for="(polyline, index) of polylines"
      ></vc-primitive-polyline>
    </vc-collection-primitive-polyline>
    <vc-entity
      :id="'绘制的面-' + (index + 1)"
      :key="index"
      :polygon.sync="polyline.polygon"
      :ref="'entity' + index"
      v-for="(polyline, index) of polylines"
    >
      <vc-graphics-polygon
        :hierarchy="polyline.positions"
        :material="polygonColor"
        :perPositionHeight="perPositionHeight"
        @ready="ready"
        v-if="polyline.positions.length >= 3"
      ></vc-graphics-polygon>
    </vc-entity>
    <vc-collection-primitive-point>
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
import { makePolygonHierarchy } from '../../../utils/util'
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
    polylineColor: {
      type: String | Object | Array,
      default: '#51ff00'
    },
    polylineWidth: {
      type: Number,
      default: 2
    },
    polygonColor: {
      type: String | Object | Array,
      default: 'rgba(255,165,0,0.25)'
    }
  },
  methods: {
    ready (val) {
      const { polylines } = this
      const polyline = polylines[polylines.length - 1]
      val.cesiumObject.hierarchy = new Cesium.CallbackProperty(() => makePolygonHierarchy(polyline.positions), false)
    }
  }
}
</script>
