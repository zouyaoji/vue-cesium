<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:43:43
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 15:45:31
 * @FilePath: \vue-cesium\docs\examples\graphics\vc-graphics-model\usage.vue
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const model = ref()

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}

onMounted(() => {
  model.value?.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {
    viewer.zoomTo(cesiumObject._vcParent)
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-model">
    <vc-viewer @ready="onViewerReady">
      <vc-entity :position="[114, 40, 1.0]" description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
        <vc-graphics-model ref="model" uri="https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb" />
      </vc-entity>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
