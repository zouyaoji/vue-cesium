<script setup lang="ts">
import { onMounted, ref } from 'vue'

const rectangle1 = ref()
const rectangle2 = ref()
const rectangle3 = ref()
const rotation = ref(0)

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}

function getRotationValue() {
  rotation.value += 0.005
  return rotation.value
}

onMounted(() => {
  Promise.all([rectangle1.value?.creatingPromise, rectangle2.value?.creatingPromise, rectangle3.value?.creatingPromise]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
    // window.viewer = instances[0].viewer
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-rectangle">
    <vc-viewer @ready="onViewerReady">
      <vc-entity description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
        <vc-graphics-rectangle
          ref="rectangle1"
          :coordinates="{ west: -180, south: -90, east: 180, north: 90 }"
          :material="[255, 0, 0, 125]"
        />
      </vc-entity>
      <vc-entity description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
        <vc-graphics-rectangle
          ref="rectangle2"
          :coordinates="[-110, 30, -100, 40]"
          :material="[0, 255, 0, 125]"
          :rotation="45 / 180"
          :extruded-height="300000.0"
          :height="100000.0"
          :outline="true"
          outline-color="black"
        />
      </vc-entity>
      <vc-entity description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
        <vc-graphics-rectangle
          ref="rectangle3"
          :coordinates="{ west: -92.0, south: 30.0, east: -82.0, north: 40.0 }"
          material="https://zouyaoji.top/vue-cesium/favicon.png"
          :rotation="getRotationValue"
          :st-rotation="getRotationValue"
          :classification-type="0"
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
