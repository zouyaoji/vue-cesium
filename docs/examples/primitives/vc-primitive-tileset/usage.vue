<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:49:43
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 14:50:52
 * @FilePath: \vue-cesium\docs\examples\primitives\vc-primitive-tileset\usage.vue
-->
<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const primitive = ref(null)

function onReady({ cesiumObject, viewer, Cesium }: VcReadyObject) {
  const tileset = cesiumObject as Cesium.Cesium3DTileset
  const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
  const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
  const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)
  const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
  tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
  viewer.zoomTo(tileset)
}

function onClicked(e) {
  console.log(e)
}

function allTilesLoaded() {
  console.log('allTilesLoaded')
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
  <div class="demo-viewer demo-vc-primitive-tileset">
    <vc-viewer>
      <vc-primitive-tileset
        ref="primitive"
        url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
        @ready="onReady"
        @click="onClicked"
        @all-tiles-loaded="allTilesLoaded"
      />
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
