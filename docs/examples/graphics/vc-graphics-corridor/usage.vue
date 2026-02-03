<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:42:54
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 15:43:20
 * @FilePath: \vue-cesium\docs\examples\graphics\vc-graphics-corridor\usage.vue
-->
<script setup lang="ts">
import type { VcMaterial } from 'vue-cesium/es/utils/types'
import { onMounted, reactive, ref } from 'vue'

const entity1 = ref()
const entity2 = ref()
const entity3 = ref()
const viewerContainer = ref<HTMLElement | null>(null)

const options = reactive({
  description: 'Hello VueCesium',

  corridor1: {},
  name1: 'Red corridor on surface with rounded corners',
  positions1: [
    [100.0, 40.0],
    [105.0, 40.0],
    [105.0, 35.0]
  ],
  material1: {} as VcMaterial,

  corridor2: {},
  name2: 'Green corridor at height with mitered corners and outline',
  positions2: [
    [90.0, 40.0],
    [95.0, 40.0],
    [95.0, 35.0]
  ],
  cornerType2: 0,

  corridor3: {},
  name3: 'Blue extruded corridor with beveled corners and outline',
  positions3: [
    [80.0, 40.0],
    [85.0, 40.0],
    [85.0, 35.0]
  ],
  cornerType3: 0,
  material3: {} as VcMaterial
})

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  const { Cesium, viewer } = cesiumInstance
  options.material1 = Cesium.Color.RED.withAlpha(0.5)
  options.cornerType2 = Cesium.CornerType.MITERED
  options.cornerType3 = Cesium.CornerType.BEVELED
  options.material3 = Cesium.Color.BLUE.withAlpha(0.5)
}

onMounted(() => {
  Promise.all([entity1.value?.creatingPromise, entity2.value?.creatingPromise, entity3.value?.creatingPromise]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
  })
})
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-graphics-corridor">
    <vc-viewer @ready="onViewerReady">
      <vc-entity
        ref="entity1"
        :name="options.name1"
        :description="options.description"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-corridor :positions="options.positions1" :material="options.material1" :width="200000.0" />
      </vc-entity>
      <vc-entity ref="entity2" :name="options.name2" :description="options.description">
        <vc-graphics-corridor
          :positions="options.positions2"
          :height="100000.0"
          :width="200000.0"
          :corner-type="0"
          material="GREEN"
          :outline="true"
        />
      </vc-entity>
      <vc-entity ref="entity3" :name="options.name3" :description="options.description">
        <vc-graphics-corridor
          :positions="options.positions3"
          :material="options.material3"
          outline-color="WHITE"
          :outline="true"
          :height="200000.0"
          :extruded-height="100000.0"
          :width="200000.0"
          :corner-type="options.cornerType3"
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
