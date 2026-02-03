<script setup lang="ts">
import { ref } from 'vue'

const viewerContainer = ref()
const radar = ref()
const circle = ref()

const options1 = ref({
  position: [117.217124, 31.809777],
  radius: 1500,
  interval: 1500,
  color: [255, 255, 0, 255]
})

const options2 = ref({
  position: [117.257124, 31.809777],
  radius: 1500,
  interval: 1500,
  color: [255, 0, 0, 255]
})

function onViewerReady({ viewer }) {
  // window.viewer = viewer
  viewer.scene.globe.depthTestAgainstTerrain = true
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-90),
      roll: 0.0
    },
    duration: 3
  })
}

function unload() {
  circle.value?.unload()
  radar.value?.unload()
}

function load() {
  circle.value?.load()
  radar.value?.load()
}

function reload() {
  circle.value?.reload()
  radar.value?.reload()
}
</script>

<template>
  <div ref="viewerContainer" class="demo-viewer demo-vc-post-process-stage-scan">
    <vc-viewer @ready="onViewerReady">
      <vc-post-process-stage-scan ref="radar" type="radar" :options="options1" />
      <vc-post-process-stage-scan ref="circle" type="circle" :options="options2" />
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
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
  </div>
</template>
