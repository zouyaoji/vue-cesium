<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:29:37
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 13:40:38
 * @FilePath: \vue-cesium\docs\examples\providers\vc-imagery-provider-wmts\usage.vue
-->
<script setup>
import { ref } from 'vue'

const provider = ref(null)
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)
let viewer

function unload() {
  provider.value.unload()
}
function reload() {
  provider.value.reload()
}
function load() {
  provider.value.load()
}
</script>

<template>
  <div class="demo-viewer demo-vc-imagery-provider-wmts">
    <vc-viewer>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-imagery-provider-wmts
          ref="provider"
          url="https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg"
          layer="World_Street_Map"
          format="image/jpeg"
          wmts-style="default"
          tile-matrix-set-i-d="default028mm"
        />
      </vc-layer-imagery>
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
      </el-row>
      <el-row>
        <el-col>
          <div class="block">
            <span class="demonstration">Opacity</span>
            <el-slider v-model="alpha" :min="0" :max="1" :step="0.01" />
            <span class="demonstration">Brightness</span>
            <el-slider v-model="brightness" :min="0" :max="5" :step="0.01" />
            <span class="demonstration">Contrast</span>
            <el-slider v-model="contrast" :min="0" :max="5" :step="0.01" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
