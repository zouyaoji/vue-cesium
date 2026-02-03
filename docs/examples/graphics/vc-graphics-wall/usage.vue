<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:43:45
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 16:37:50
 * @FilePath: \vue-cesium\docs\examples\graphics\vc-graphics-wall\usage.vue
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const wall1 = ref()
const wall2 = ref()
const wall3 = ref()

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}

onMounted(() => {
  Promise.all([wall1.value?.creatingPromise, wall2.value?.creatingPromise, wall3.value?.creatingPromise]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-wall">
    <vc-viewer @ready="onViewerReady">
      <vc-entity description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
        <vc-graphics-wall
          ref="wall1"
          :positions="[[-115, 44, 200000], [-90, 44, 200000]]"
          material="red"
          :minimum-heights="[100000.0, 100000.0]"
        />
      </vc-entity>
      <vc-entity description="Hello VueCesium">
        <vc-graphics-wall
          ref="wall2"
          :positions="[-107, 43, 100000, -97, 43, 100000, -97, 40, 100000, -107, 40, 100000, -107, 43, 100000]"
          :material="{
            fabric: {
              type: 'VcLineFlow',
              uniforms: { image: 'https://zouyaoji.top/vue-cesium/images/textures/fence.png', axisY: true, color: '#bdf700', repeat: { x: 5, y: 1 }, speed: 5 },
            },
          }"
        />
      </vc-entity>
      <vc-entity description="Hello VueCesium">
        <vc-graphics-wall
          ref="wall3"
          :positions="[[-115, 50], [-112, 50], [-107.5, 50], [-105, 50], [-102.5, 50], [-100, 50], [-97.5, 50], [-95, 50], [-92.5, 50], [-90, 50]]"
          :material="{
            fabric: {
              type: 'VcLineTrail',
              uniforms: { image: 'https://zouyaoji.top/vue-cesium/images/textures/colors.png' },
            },
          }"
          outline-color="black"
          :maximum-heights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000]"
          :minimum-heights="[0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000]"
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
