<script setup lang="ts">
import { onMounted, ref } from 'vue'

const entity1 = ref()
const entity2 = ref()

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}

onMounted(() => {
  Promise.all([entity1.value?.creatingPromise, entity2.value?.creatingPromise]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-cylinder">
    <vc-viewer @ready="onViewerReady">
      <vc-entity
        ref="entity1"
        :position="[105, 40, 200000]"
        description="Hello VueCesium"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-cylinder
          :length="400000.0"
          :top-radius="200000.0"
          :bottom-radius="200000.0"
          :material="[0, 128, 0, 125]"
          :outline="true"
          outline-color="#006400"
        />
      </vc-entity>
      <vc-entity ref="entity2" :position="[110, 40, 200000]" description="Hello VueCesium">
        <vc-graphics-cylinder :length="400000.0" :top-radius="0.0" :bottom-radius="200000.0" material="RED" />
      </vc-entity>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
