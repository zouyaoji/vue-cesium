<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:37:44
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 13:52:29
 * @FilePath: \vue-cesium\docs\examples\datasources\vc-datasource-kml\usage.vue
-->
<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

// state
const show = ref(true)
const datasourceRef = ref(null)
// methods
function onClicked(e) {
  console.log(e)
}
function unload() {
  datasourceRef.value.unload()
}
function reload() {
  datasourceRef.value.reload()
}
function load() {
  datasourceRef.value.load()
}
function onDatasourceReady({ Cesium, viewer, cesiumObject }: VcReadyObject) {
  viewer.zoomTo(cesiumObject as Cesium.DataSource)
}
</script>

<template>
  <div class="demo-viewer demo-vc-datasource-kml">
    <vc-viewer>
      <vc-datasource-kml
        ref="datasourceRef"
        data="https://zouyaoji.top/vue-cesium/SampleData/kml/gdpPerCapita2008.kmz"
        :show="show"
        @click="onClicked"
        @ready="onDatasourceReady"
      />
    </vc-viewer>
    <div class="demo-toolbar">
      <el-row>
        <el-button type="danger" round @click="unload">
          Unload
        </el-button>
        <el-button type="danger" round @click="load">
          Load
        </el-button>
        <el-button type="danger" round @click="reload">
          Reload
        </el-button>
        <el-switch v-model="show" active-color="#13ce66" inactive-text="Show/Hide" />
      </el-row>
    </div>
  </div>
</template>
