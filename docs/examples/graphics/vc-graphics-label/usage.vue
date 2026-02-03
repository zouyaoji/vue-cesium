<script setup lang="ts">
function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-label">
    <vc-viewer @ready="onViewerReady">
      <vc-entity :position="[114, 40, 300000]" description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
        <vc-graphics-label text="Hello VueCesium" font="20px sans-serif" :pixel-offset="[0, 20]" fill-color="red" />
      </vc-entity>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
