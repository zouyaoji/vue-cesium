<script setup lang="ts">
import type { VcCompassEvt, VcPickEvent, VcReadyObject, VcZoomEvt } from 'vue-cesium/es/utils/types'
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
const cesiumPath = ref('https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js')
const entity = ref()

function onViewerReady({ Cesium, viewer, earth }: VcReadyObject) {
  console.log(earth)
  // 1.1.2 Scene configuration
  earth.sceneTree.root = {
    expand: true,
    title: 'Preview scene',
    children: [
      {
        ref: 'polyline1',
        czmObject: {
          xbsjType: 'Polyline',
          positions: [
            [1.6049052178907162, 0.4547675537396452, 0],
            [2.266206367018494, 0.4857724702174004, -5.6841204016160695e-9],
            [2.8083374819013205, 0.9842980731992482, -6.859619106471648e-9]
          ]
        }
      }
    ]
  }
  const polyline1 = earth.sceneTree.$refs.polyline1.czmObject
  // 1.1.3 Set camera position
  earth.camera.position = [1.9801824720243058, 0.5645924417726427, 8556103.623693792]
  earth.camera.rotation = [2.6645352591003757e-15, -1.5694528555019995, 0]
  // 1.1.3 Set initial value
  polyline1.width = 4
}

function onNavigationEvt(e: VcCompassEvt | VcZoomEvt) {
  console.log(e)
}

function onEntityClick(e: VcPickEvent) {
  console.log(e)
}

function onLeftClick(e: any) {
  console.log(e)
}

function load() {
  viewerRef.value?.load().then((e: any) => {
    console.log(e)
  })
}

function unload() {
  viewerRef.value?.unload().then((e: any) => {
    console.log(e)
  })
}

function reload() {
  viewerRef.value?.reload().then((e: any) => {
    console.log(e)
  })
}
</script>

<template>
  <el-row class="demo-viewer demo-vc-demo-earth-sdk">
    <vc-viewer
      ref="viewerRef"
      :cesium-path="cesiumPath"
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
