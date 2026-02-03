<script setup lang="ts">
import { ref } from 'vue'

const provider = ref(null)

function unload() {
  provider.value.unload()
}

function reload() {
  provider.value.reload()
}

function load() {
  provider.value.load()
}

function onViewerReady({ Cesium, viewer }) {
  const target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
  const offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
  viewer.camera.lookAt(target, offset)
  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
}
</script>

<template>
  <div class="demo-viewer demo-vc-terrain-provider-cesium">
    <vc-viewer @ready="onViewerReady">
      <vc-terrain-provider-cesium ref="provider" />
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis />
      </vc-layer-imagery>
      <vc-navigation />
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
