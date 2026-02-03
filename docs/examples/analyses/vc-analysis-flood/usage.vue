<script setup lang="ts">
import { ref } from 'vue'

const viewerContainer = ref()
const flood = ref()
const minHeight = ref(-1)
const maxHeight = ref(4000)
const speed = ref(10)
const polygonHierarchy = ref([
  [102.1, 29.5],
  [106.2, 29.5],
  [106.2, 33.5],
  [102.1, 33.5]
])
const pausing = ref(false)
const starting = ref(false)

function ready(cesiumInstance) {
  console.log(cesiumInstance)
}

function onViewerReady({ Cesium, viewer }) {
  // window.vm = this
  viewer.scene.globe.depthTestAgainstTerrain = true
  viewer.camera.setView({
    destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
    orientation: {
      heading: 6.20312220367255,
      pitch: -0.9937536846355606,
      roll: 0.002443376981836387
    }
  })
}

function unload() {
  flood.value.unload()
}

function load() {
  flood.value.load()
}

function reload() {
  flood.value.reload()
}

function start() {
  flood.value.start()
  pausing.value = false
  starting.value = true
}

function pause() {
  flood.value.pause()
  pausing.value = !pausing.value
}

function stop() {
  flood.value.stop()
  pausing.value = false
  starting.value = false
}

function onStoped(e) {
  pausing.value = false
  starting.value = false
  console.log(e)
}
</script>

<template>
  <div ref="viewerContainer" class="demo-viewer demo-vc-analysis-flood">
    <vc-viewer @ready="onViewerReady">
      <vc-analysis-flood
        ref="flood"
        :min-height="minHeight"
        :max-height="maxHeight"
        :speed="speed"
        :polygon-hierarchy="polygonHierarchy"
        @ready="ready"
        @stop="onStoped"
      />
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis />
      </vc-layer-imagery>
      <vc-terrain-provider-cesium />
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
      <el-button type="danger" round @click="start">
        Start
      </el-button>
      <el-button :disabled="!starting" type="danger" round @click="pause">
        {{ pausing ? 'Continue' : 'Pause' }}
      </el-button>
      <el-button type="danger" round @click="stop">
        Stop
      </el-button>
    </el-row>
  </div>
</template>
