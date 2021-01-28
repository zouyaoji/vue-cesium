<template>
  <i :class="$options.name">
    <vc-collection-primitive-point ref="pointCollection" :points="points" @mouseover="pointMouseOver" @mouseout="pointMouseOut">
    </vc-collection-primitive-point>
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
export default {
  name: 'vc-handler-draw-point',
  mixins: [mixinDraw],
  data () {
    return {
      drawType: 'pointDrawing'
    }
  }
}
</script>
