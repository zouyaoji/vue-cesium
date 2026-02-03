<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:43:43
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 15:58:11
 * @FilePath: \vue-cesium\docs\examples\graphics\vc-graphics-plane\usage.vue
-->
<script setup lang="ts">
import type { VcPlane } from 'vue-cesium/es/utils/types'
import { onMounted, ref } from 'vue'

const plane1 = ref()
const plane2 = ref()
const plane3 = ref()

const planeOptions = ref<VcPlane>([{ x: 0, y: 1, z: 0 }, 0])
function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}

onMounted(() => {
  Promise.all([plane1.value?.creatingPromise, plane2.value?.creatingPromise, plane3.value?.creatingPromise]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-plane">
    <vc-viewer @ready="onViewerReady">
      <vc-entity :position="[114, 40, 300000]" description="Hello VueCesium">
        <vc-graphics-plane
          ref="plane1"
          :plane="{ normal: { x: 1, y: 0, z: 0 }, distance: 0.0 }"
          :dimensions="[400000, 300000]"
          material="blue"
        />
      </vc-entity>
      <vc-entity :position="[107, 40, 300000]" description="Hello VueCesium">
        <vc-graphics-plane
          ref="plane2"
          :plane="planeOptions"
          :dimensions="[400000, 300000]"
          :material="[255, 0, 0, 125]"
          :outline="true"
          outline-color="black"
        />
      </vc-entity>
      <vc-entity :position="[100, 40, 300000]" description="Hello VueCesium">
        <vc-graphics-plane
          ref="plane3"
          :plane="{ normal: { x: 0, y: 0, z: 1 }, distance: 0.0 }"
          :dimensions="{ x: 400000.0, y: 300000.0 }"
          :fill="false"
          :outline="true"
          outline-color="yellow"
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
