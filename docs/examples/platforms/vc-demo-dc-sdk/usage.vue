<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const viewerRef = ref()
const animation = ref(true)
const timeline = ref(true)
const fullscreenButton = ref(true)
const fullscreenElement = ref(document.body)
const point = ref({
  pixelSize: 28,
  color: 'red'
})
const label = ref({
  text: 'Hello World',
  pixelOffset: [0, 150]
})
const billboard = ref({})
const offset = ref<[number, number]>([10, 25])
const otherOpts = ref({
  offset: [0, 32],
  position: 'bottom-right'
})
const cesiumPath = ref('https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/dc.min.js')
const viewerOpts = ref({
  dcConfig: {
    baseUrl: 'https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/resources/',
    Cesium: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'
  }
})
const entity = ref()

function generatePosition(num: number) {
  const list = []
  for (let i = 0; i < num; i++) {
    const lng = 120.38105869 + Math.random() * 0.5
    const lat = 31.10115627 + Math.random() * 0.5
    list.push(new DC.Position(lng, lat))
  }
  return list
}

// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
function onViewerReady({ Cesium, dcViewer }: VcReadyObject) {
  console.log(dcViewer)
  const baselayer = DC.ImageryLayerFactory.createImageryLayer(DC.ImageryType.AMAP)
  dcViewer.addBaseLayer(baselayer)
  const layer = new DC.HtmlLayer('layer')
  dcViewer.addLayer(layer)
  const positions = generatePosition(5)
  positions.forEach((item: any, index: number) => {
    const divIcon = new DC.DivIcon(
      item,
      `<div style="width:200px;background:rgba(255,255,0,0.2)">I am a div, you can add css styles and content to me</div>`
    )
    layer.addOverlay(divIcon)
  })
}

function onNavigationEvt(e: any) {
  console.log(e)
}

function onEntityClick(e: any) {
  console.log(e)
}

function onLeftClick(e: any) {
  console.log(e)
}

function load() {
  viewerRef.value?.load().then((e) => {
    console.log(e)
  })
}

function unload() {
  viewerRef.value?.unload().then((e) => {
    console.log(e)
  })
}

function reload() {
  viewerRef.value?.reload().then((e) => {
    console.log(e)
  })
}
</script>

<template>
  <el-row class="demo-viewer demo-vc-demo-dc-sdk">
    <vc-viewer
      ref="viewerRef"
      :cesium-path="cesiumPath"
      :dc-config="viewerOpts.dcConfig"
      :animation="animation"
      :timeline="timeline"
      :fullscreen-button="fullscreenButton"
      :fullscreen-element="fullscreenElement"
      @ready="onViewerReady"
      @left-click="onLeftClick"
    >
      <vc-navigation :offset="offset" :other-opts="otherOpts" @compass-evt="onNavigationEvt" @zoom-evt="onNavigationEvt" />
      <vc-entity ref="entity" v-model:billboard="billboard" :position="[108, 32]" :point="point" :label="label" @click="onEntityClick">
        <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png" />
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green" />
      </vc-entity>
      <!-- Tianditu annotation layer -->
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <!-- Tianditu imagery layer -->
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
    </vc-viewer>
    <el-row class="demo-toolbar">
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
    </el-row>
  </el-row>
</template>
