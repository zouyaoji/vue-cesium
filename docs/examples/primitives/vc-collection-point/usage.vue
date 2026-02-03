<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:52:26
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 14:13:20
 * @FilePath: \vue-cesium\docs\examples\primitives\vc-collection-point\usage.vue
-->
<script setup lang="ts">
import type { VcPointProps } from 'vue-cesium'
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const collectionRef = ref(null)
const points = ref([])
const viewerContainer = ref<HTMLElement>(null)

function onClicked(e: any) {
  console.log(e)
}

function unload() {
  collectionRef.value.unload()
}

function reload() {
  collectionRef.value.reload()
}

function load() {
  collectionRef.value.load()
}

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  for (let i = 0; i < 5; i++) {
    const point: VcPointProps = {}
    point.position = [Math.random() * 40 + 85, Math.random() * 30 + 21]
    point.color = 'rgb(255,229,0)'
    point.pixelSize = 8
    points.value.push(point)
  }
  // window.points = points
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-collection-point">
    <vc-viewer @ready="onViewerReady">
      <vc-collection-point ref="collectionRef" :points="points" @click="onClicked">
        <!-- <template v-for="(polyline, index) of polylines">
        <template v-for="(position, subIndex) of polyline.positions">
          <vc-point :position="position" :color="[255, 229, 0]" :pixel-size="32"></vc-point>
        </template>
      </template> -->
      </vc-collection-point>
    </vc-viewer>
    <el-row class="demo-toolbar">
      <el-button type="danger" round @click="unload">
        Unload
      </el-button>
      <el-button type="danger" round @click="load">
        Load
      </el-button>
      <el-button type="danger" round @click="reload">
        Reload
      </el-button>
    </el-row>
  </el-row>
</template>
