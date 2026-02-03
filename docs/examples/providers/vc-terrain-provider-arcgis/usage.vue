<script setup lang="ts">
import { ref } from 'vue'

const provider = ref(null)
const imageryProvider = ref(null)

function unload() {
  provider.value.unload()
}

function reload() {
  provider.value.reload()
}

function load() {
  provider.value.load()
}

async function onViewerReady({ Cesium, viewer }) {
  imageryProvider.value = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
    'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  )
  const target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
  const offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
  viewer.camera.lookAt(target, offset)
  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
}
</script>

<template>
  <div class="demo-viewer demo-vc-terrain-provider-arcgis">
    <vc-viewer :imagery-provider="imageryProvider" @ready="onViewerReady">
      <vc-terrain-provider-arcgis ref="provider" />
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
