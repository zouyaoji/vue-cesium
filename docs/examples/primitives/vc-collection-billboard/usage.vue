<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:52:01
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 14:09:23
 * @FilePath: \vue-cesium\docs\examples\primitives\vc-collection-billboard\usage.vue
-->
<script setup lang="ts">
import type { VcBillboardProps } from 'vue-cesium'
import type { VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const billboardCollectionRef = ref(null)
const viewerContainer = ref<HTMLElement>(null)
const billboards = ref([])

function onClicked(e: VcPickEvent) {
  console.log(e)
}

function unload() {
  billboardCollectionRef.value.unload()
}

function reload() {
  billboardCollectionRef.value.reload()
}

function load() {
  billboardCollectionRef.value.load()
}

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  for (let i = 0; i < 50; i++) {
    const billboard: VcBillboardProps = {}
    billboard.position = [Math.random() * 40 + 85, Math.random() * 30 + 21]
    billboard.image = Cesium.writeTextToCanvas(String(i + 1), {
      font: '100px sans-serif',
      strokeWidth: 2
    }).toDataURL()
    billboard.scale = 0.25
    billboard.id = i
    billboards.value.push(billboard)
  }
}

function onMouseover(e: VcPickEvent) {
  console.log(e)
  if (e.cesiumObject instanceof Cesium.Billboard) {
    e.pickedFeature.primitive.scale = 0.5
  }
  else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
    e.pickedFeature.primitive.scale = 0.5
  }
}

function onMouseout(e: VcPickEvent) {
  console.log(e)
  if (e.cesiumObject instanceof Cesium.Billboard) {
    e.pickedFeature.primitive.scale = 0.25
  }
  else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
    e.pickedFeature.primitive.scale = 0.25
  }
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-collection-billboard">
    <vc-viewer @ready="onViewerReady">
      <vc-collection-billboard
        ref="billboardCollectionRef"
        :billboards="billboards"
        @mouseout="onMouseout"
        @mouseover="onMouseover"
      >
        <vc-billboard
          :position="[108, 35, 10000]"
          :distance-display-condition="[0, 20000000]"
          :scale="0.25"
          image="https://zouyaoji.top/vue-cesium/favicon.png"
        />
      </vc-collection-billboard>
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
