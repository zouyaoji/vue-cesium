<script setup lang="ts">
import type { VcCompassEvt, VcPickEvent, VcReadyObject, VcZoomEvt } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const viewerRef = ref()
const animation = ref(true)
const timeline = ref(true)
const fullscreenButton = ref(true)
const viewerContainer = ref<HTMLElement | null>(null)
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
const viewerOpts = ref({
  mars3dConfig: {
    include: 'mars3d'
  }
})
const entity = ref()
const overview = ref()

function onViewerReady({ Cesium, viewer, map }: VcReadyObject) {
  console.log(map)
}

function onNavigationEvt(e: VcCompassEvt | VcZoomEvt) {
  console.log(e)
}

function onEntityClick(e: VcPickEvent) {
  console.log(e)
}

function onLeftClick(e) {
  console.log(e)
}

function load() {
  viewerRef.value?.load().then((e: VcReadyObject) => {
    console.log(e)
  })
}

function unload() {
  viewerRef.value?.unload().then((e: VcReadyObject) => {
    console.log(e)
  })
}

function reload() {
  viewerRef.value?.reload().then((e: VcReadyObject) => {
    console.log(e)
  })
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-demo-mars3d">
    <vc-viewer
      ref="viewerRef"
      :mars3d-config="viewerOpts.mars3dConfig"
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
      <vc-overview-map ref="overview" :viewer-opts="viewerOpts" :offset="[5, 120]" position="bottom-left">
        <!-- Tianditu annotation layer -->
        <vc-layer-imagery :sort-order="20">
          <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
        </vc-layer-imagery>
        <!-- Tianditu imagery layer -->
        <vc-layer-imagery :sort-order="10">
          <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
        </vc-layer-imagery>
      </vc-overview-map>
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
