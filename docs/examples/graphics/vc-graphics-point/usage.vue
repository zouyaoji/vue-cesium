<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:43:44
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 16:30:17
 * @FilePath: \vue-cesium\docs\examples\graphics\vc-graphics-point\usage.vue
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const point1 = ref()
const point2 = ref()
const point3 = ref()

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}

onMounted(() => {
  Promise.all([point1.value?.creatingPromise, point2.value?.creatingPromise, point3.value?.creatingPromise]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-point">
    <vc-viewer @ready="onViewerReady">
      <vc-entity :position="[-75.59777, 40.03883]" description="Hello VueCesium">
        <vc-graphics-point ref="point1" color="red" :pixel-size="8" />
      </vc-entity>
      <vc-entity :position="[-80.5, 35.14]" description="Hello VueCesium">
        <vc-graphics-point ref="point2" color="blue" :pixel-size="16" />
      </vc-entity>
      <vc-entity :position="[-80.12, 25.46]" description="Hello VueCesium">
        <vc-graphics-point ref="point3" color="lime" :pixel-size="32" />
      </vc-entity>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
