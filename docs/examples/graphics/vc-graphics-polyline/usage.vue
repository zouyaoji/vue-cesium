<script setup lang="ts">
function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-polyline">
    <vc-viewer @ready="onViewerReady">
      <vc-entity @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
        <vc-graphics-polyline
          :positions="[{ lng: 90, lat: 20, height: 10000 }, { lng: 120, lat: 20, height: 10000 }]"
          material="red"
          :width="5"
          :clamp-to-ground="false"
        />
      </vc-entity>
      <vc-entity>
        <vc-graphics-polyline
          :positions="[90, 30, 1000, 120, 30, 1000]"
          :material="{ fabric: { type: 'VcLineTrailColor', uniforms: { color: '#00ffff', bgColor: 'red' } } }"
          :width="5"
        />
      </vc-entity>
      <vc-entity>
        <vc-graphics-polyline
          :positions="[[90, 40, 1000], [120, 40, 1000]]"
          :material="{ fabric: { type: 'VcLineFlowColor', uniforms: { color: '#00ffff', speed: 50, percent: 0.5, alpha: 0.5 } } }"
          :width="10"
        />
      </vc-entity>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
