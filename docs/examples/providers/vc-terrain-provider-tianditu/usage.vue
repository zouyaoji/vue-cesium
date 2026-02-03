<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:34:39
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-01-31 23:08:13
 * @FilePath: \vue-cesium\docs\examples\providers\vc-terrain-provider-tianditu\usage.vue
-->
<script setup lang="ts">
import { ref } from 'vue'

const provider = ref()

function unload() {
  provider.value.unload()
}

function reload() {
  provider.value.reload()
}

function load() {
  provider.value.load()
}

function ready({ Cesium, viewer }) {}
</script>

<template>
  <div class="demo-viewer demo-vc-terrain-provider-tianditu">
    <vc-viewer
      :camera="{ position: [102.8, 30.57, 6000], heading: 162, pitch: -18.25, roll: 0.05 }"
      cesium-path="https://unpkg.com/cesium@1.108.0/Build/Cesium/Cesium.js"
      @ready="ready"
    >
      <vc-terrain-provider-tianditu ref="provider" token="436ce7e50d27eede2f2929307e6b33c0" plugin-path="https://cesium-tdt.marslandings.cn/cesiumTdt@1.134.0.min.js" />
      <vc-layer-imagery>
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery>
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
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
    </div>
  </div>
</template>
