<template>
  <i :class="$options.name" style="display: none !important">
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
export default {
  name: 'vc-handler-draw-point',
  mixins: [mixinDraw],
  data () {
    return {
      drawType: 'pointDrawing',
      drawing: false,
      polylines: []
    }
  }
}
</script>
