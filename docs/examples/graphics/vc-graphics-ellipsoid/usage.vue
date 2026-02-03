<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:42:55
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 15:45:07
 * @FilePath: \vue-cesium\docs\examples\graphics\vc-graphics-ellipsoid\usage.vue
-->
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
  <el-row class="demo-viewer demo-vc-graphics-ellipsoid">
    <vc-viewer @ready="onViewerReady">
      <vc-entity
        ref="entity1"
        :position="[114, 40, 300000]"
        description="Hello VueCesium"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-ellipsoid :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }" material="blue" :outline="true" />
      </vc-entity>
      <vc-entity ref="entity2" :position="{ lng: 107, lat: 40, height: 300000 }" description="Hello VueCesium">
        <vc-graphics-ellipsoid
          :radii="{ x: 300000.0, y: 300000.0, z: 300000.0 }"
          :outline="true"
          :material="[255, 0, 0, 125]"
          outline-color="black"
        />
      </vc-entity>
      <vc-entity ref="entity3" :position="[100, 40, 300000]" description="Hello VueCesium">
        <vc-graphics-ellipsoid
          :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }"
          :fill="false"
          :outline="true"
          outline-color="yellow"
          :slice-partitions="24"
          :stack-partitions="36"
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
