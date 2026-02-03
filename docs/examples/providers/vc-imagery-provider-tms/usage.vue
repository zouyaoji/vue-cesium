<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:29:12
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 13:40:05
 * @FilePath: \vue-cesium\docs\examples\providers\vc-imagery-provider-tms\usage.vue
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
function onImageryProviderReady({ cesiumObject: imageryProvider, viewer }) {
  viewer.camera.flyTo({ destination: imageryProvider.rectangle })
}
function onViewerReady(cesiumInstance) {
  viewer = cesiumInstance.viewer
}
</script>

<template>
  <div class="demo-viewer demo-vc-imagery-provider-tms">
    <vc-viewer @ready="onViewerReady">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-imagery-provider-tms
          ref="provider"
          url="https://zouyaoji.top/vue-cesium/SampleData/images/cesium_maptiler/Cesium_Logo_Color"
          :rectangle="[-120, 20, -60, 40]"
          :maximum-level="4"
          @ready="onImageryProviderReady"
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
