<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:29:37
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 13:40:16
 * @FilePath: \vue-cesium\docs\examples\providers\vc-imagery-provider-urltemplate\usage.vue
-->
<script setup>
import { ref } from 'vue'

const provider = ref(null)
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)
const projectionTransforms = ref(null)
projectionTransforms.value = {
  from: 'GCJ02',
  to: 'WGS84'
}
const options = [
  {
    value: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    label: 'AMap imagery service'
  },
  {
    value: 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
    label: 'AMap vector service'
  },
  {
    value: 'https://www.songluck.com/raster/osm_chengdu/{z}/{x}/{y}.png',
    label: 'Mapbox raster tiles'
  }
]
const url = ref('https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}')

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
  <div class="demo-viewer demo-vc-imagery-provider-urltemplate">
    <vc-viewer>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
        <vc-imagery-provider-urltemplate ref="provider" :projection-transforms="projectionTransforms" :url="url" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="5">
        <vc-imagery-provider-tianditu map-style="img_w" token="436ce7e50d27eede2f2929307e6b33c0" />
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
            <span class="demonstration">Switch map</span>
            <el-select v-model="url" placeholder="Please select">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
