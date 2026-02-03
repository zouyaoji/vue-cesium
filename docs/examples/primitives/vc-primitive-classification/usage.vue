<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:49:41
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 14:41:11
 * @FilePath: \vue-cesium\docs\examples\primitives\vc-primitive-classification\usage.vue
-->
<script setup lang="ts">
import type { VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref, shallowRef } from 'vue'

const primitive = ref()
const attributes = shallowRef(null)
const camera = ref({
  position: {
    x: -1432246.8223880068,
    y: 5761224.588247942,
    z: 3297281.1889481535
  },
  heading: 6.20312220367255,
  pitch: -0.9937536846355606,
  roll: 0.002443376981836387
})

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  viewer.scene.globe.depthTestAgainstTerrain = true
  attributes.value = {
    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromBytes(64, 157, 253, 100))
  }
}

function onClicked(e: VcPickEvent) {
  console.log(e)
}

function unload() {
  primitive.value?.unload()
}

function load() {
  primitive.value?.load()
}

function reload() {
  primitive.value?.reload()
}
</script>

<template>
  <div class="demo-viewer demo-vc-primitive-classification">
    <vc-viewer v-model:camera="camera" @ready="onViewerReady">
      <vc-primitive-classification ref="primitive" :asynchronous="false" @click="onClicked">
        <vc-geometry-instance :attributes="attributes">
          <vc-geometry-polygon
            :polygon-hierarchy="[
              [102.1, 29.5],
              [106.2, 29.5],
              [106.2, 33.5],
              [102.1, 33.5],
            ]"
            :extruded-height="6000"
          />
        </vc-geometry-instance>
      </vc-primitive-classification>
      <vc-terrain-provider-cesium />
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis />
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-toolbar">
      <el-button type="danger" round @click="unload">
        Unload
      </el-button>
      <el-button type="danger" round @click="load">
        Load
      </el-button>
      <el-button type="danger" round @click="reload">
        Reload
      </el-button>
    </div>
  </div>
</template>
