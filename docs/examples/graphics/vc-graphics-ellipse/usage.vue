<script setup lang="ts">
import { onMounted, ref } from 'vue'

const entity1 = ref()
const entity2 = ref()
const entity3 = ref()

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}

onMounted(() => {
  Promise.all([entity1.value?.creatingPromise, entity2.value?.creatingPromise, entity3.value?.creatingPromise]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-ellipse">
    <vc-viewer @ready="onViewerReady">
      <vc-entity
        ref="entity1"
        :position="[111, 40, 150000]"
        description="Hello VueCesium"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-ellipse
          :semi-minor-axis="300000.0"
          :semi-major-axis="300000.0"
          :height="200000.0"
          material="green"
          :outline="true"
        />
      </vc-entity>
      <vc-entity ref="entity2" :position="[103, 40]" description="Hello VueCesium">
        <vc-graphics-ellipse :semi-minor-axis="250000.0" :semi-major-axis="400000.0" :material="{ fabric: { type: 'VcScanLine', uniforms: { color: '#00ffff', speed: 10 } } }" />
      </vc-entity>
      <vc-entity ref="entity3" :position="[95, 40, 100000]" description="Hello VueCesium">
        <vc-graphics-ellipse
          :semi-minor-axis="150000.0"
          :semi-major-axis="300000.0"
          :extruded-height="200000.0"
          :rotation="45 / 180"
          :material="[0, 0, 255, 125]"
          :outline="true"
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
