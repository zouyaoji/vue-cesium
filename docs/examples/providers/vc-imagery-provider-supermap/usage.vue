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
function onImageryProviderReady(imageryProvider) {
  viewer.camera.flyTo({ destination: imageryProvider.rectangle })
}
function onViewerReady(cesiumInstance) {
  viewer = cesiumInstance.viewer
}
</script>

<template>
  <div class="demo-viewer demo-vc-imagery-provider-supermap">
    <vc-viewer @ready="onViewerReady">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-imagery-provider-supermap
          ref="provider"
          url="https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult"
          @ready-promise="onImageryProviderReady"
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
