<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { reactive, ref } from 'vue'

// state
const show = ref(true)
const datasourceRef = ref(null)
const entities = reactive([])
for (let i = 0; i < 1000; i++) {
  entities.push({
    position: [Math.random() * 40 + 85, Math.random() * 30 + 21],
    label: {
      text: i.toString(),
      pixelOffset: { x: 25, y: 20 }
    },
    point: {
      pixelSize: 8,
      outlineWidth: 2,
      color: 'red',
      outlineColor: 'yellow'
    }
  })
}
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
  const datasource = cesiumObject as Cesium.DataSource
  viewer.zoomTo(datasource)
}
</script>

<template>
  <div class="demo-viewer demo-vc-datasource-geojson">
    <vc-viewer>
      <vc-datasource-geojson
        ref="datasourceRef"
        data="https://zouyaoji.top/vue-cesium/SampleData/geojson/china.json"
        :show="show"
        stroke="red"
        :entities="entities"
        @ready="onDatasourceReady"
        @click="onClicked"
      />
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" :maximum-level="17" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-terrain-provider-cesium />
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
