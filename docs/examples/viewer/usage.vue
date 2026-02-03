<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref, watch } from 'vue'

const loading = ref(false)
const animation = ref(true)
const timeline = ref(true)
const baseLayerPicker = ref(false)
const fullscreenButton = ref(true)
const infoBox = ref(true)
const showCredit = ref(true)
const fullscreenElement = document.body
const viewerRef = ref()
const viewerContainer = ref()
const layerText = ref()
const point = ref({
  pixelSize: 28,
  color: 'red'
})
const label = ref({
  text: 'Hello World',
  pixelOffset: [0, 150]
})
const billboard = ref({})
const offset = ref<[number, number]>([50, 25])
const otherOpts = ref({
  offset: [0, 32],
  position: 'bottom-right'
})
const show = ref(true)

watch(timeline, (val) => {
  otherOpts.value.offset = val
    ? [0, 30]
    : fullscreenButton.value
      ? [30, 5]
      : [0, 5]
})

watch(fullscreenButton, (val) => {
  if (!timeline.value && !val) {
    otherOpts.value.offset = [0, 5]
  }
  else if (!timeline.value && val) {
    otherOpts.value.offset = [30, 5]
  }
})

function onViewerReady({ Cesium, viewer, vm }: VcReadyObject) {
  console.log('viewer is loaded.', vm)
  vm?.vcMitt.on('destroyed', (e) => {
    console.log('viewer is destroyed', e)
  })
  loading.value = false
  viewer.scene.globe.enableLighting = true
}

function onCesiumReady(e) {
  console.log(e)
}

function onNavigationEvt(e) {
  console.log(e)
}

function onEntityClick(e) {
  console.log(e)
}

function onLeftClick(e) {
  console.log(e)
}

function onTouchEnd(e) {
  console.log(e)
}

function onDestroyed(e) {
  console.log('onDestroyed', e)
}

function load() {
  show.value = true
}

function unload() {
  show.value = false
}

function reload() {
  loading.value = true
  viewerRef.value.reload().then((e) => {
    console.log(e)
    loading.value = false
  })
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-viewer">
    <vc-viewer
      v-if="show"
      ref="viewerRef"
      :animation="animation"
      :base-layer="false"
      :base-layer-picker="baseLayerPicker"
      :timeline="timeline"
      :fullscreen-button="fullscreenButton"
      :fullscreen-element="fullscreenElement"
      :info-box="infoBox"
      :sky-atmosphere="false"
      :sky-box="false"
      :scene-mode-picker="true"
      :show-credit="showCredit"
      @cesium-ready="onCesiumReady"
      @ready="onViewerReady"
      @left-click="onLeftClick"
      @touch-end="onTouchEnd"
      @destroyed="onDestroyed"
    >
      <vc-navigation
        :offset="offset"
        :other-opts="otherOpts"
        @compass-evt="onNavigationEvt"
        @zoom-evt="onNavigationEvt"
      />
      <vc-entity
        :position="[108, 32]"
        :point="point"
        :label="label"
        @click="onEntityClick"
      >
        <vc-graphics-billboard
          image="https://zouyaoji.top/vue-cesium/favicon.png"
          :scale="0.5"
        />
        <vc-graphics-rectangle
          :coordinates="[130, 20, 80, 25]"
          material="green"
        />
      </vc-entity>
      <vc-layer-imagery>
        <vc-imagery-provider-tianditu
          map-style="img_c"
          token="436ce7e50d27eede2f2929307e6b33c0"
        />
      </vc-layer-imagery>
      <vc-layer-imagery ref="layerText">
        <vc-imagery-provider-tianditu
          map-style="cia_c"
          token="436ce7e50d27eede2f2929307e6b33c0"
        />
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
      <el-row v-if="!loading">
        <el-switch
          v-model="animation"
          active-color="#13ce66"
          inactive-text="Animation"
        />
        <el-switch
          v-model="timeline"
          active-color="#13ce66"
          inactive-text="Timeline"
        />
        <el-switch
          v-model="baseLayerPicker"
          active-color="#13ce66"
          inactive-text="Base Layer Picker"
        />
        <el-switch
          v-model="fullscreenButton"
          active-color="#13ce66"
          inactive-text="Fullscreen Button"
        />
        <el-switch
          v-model="infoBox"
          active-color="#13ce66"
          inactive-text="Info Box"
        />
        <el-switch
          v-model="showCredit"
          active-color="#13ce66"
          inactive-text="Copyright Information"
        />
      </el-row>
    </el-row>
  </el-row>
</template>
