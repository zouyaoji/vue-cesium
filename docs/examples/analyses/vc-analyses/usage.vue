<script setup lang="ts">
import type { VcFabProps } from 'vue-cesium'
import type { VcActionTooltipProps, VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const viewerContainer = ref()
const analysesRef = ref()
const editable = ref(false)
const addTerrain = ref(false)
const restoreCursorMove = ref('auto')
const drawing = ref(false)

const mainFabOpts = ref<VcActionTooltipProps & VcFabProps>({
  direction: 'right'
})

const viewshedAnalysisOpts = ref({
  viewshedOpts: {
    offsetHeight: 5
  }
})

function analysesReadyDefault({ Cesium, viewer, cesiumObject }: VcReadyObject) {
  console.log('Analysis options parameters:', cesiumObject)
  // window.viewer = viewer
  // window.vm = this
}

function onTilesetReady({ cesiumObject: tileset, viewer }: VcReadyObject) {
  viewer.zoomTo(tileset as Cesium.Cesium3DTileset)
  viewer.scene.globe.depthTestAgainstTerrain = true
  restoreCursorMove.value = 'auto'
  drawing.value = false
  // window.viewer = viewer
}

function drawEvt(e, viewer) {
  const restoreCursor = getComputedStyle(viewer.canvas).cursor
  if (e.finished) {
    if (e.type === 'move') {
      viewer.canvas.setAttribute('style', `cursor: ${restoreCursorMove.value}`)
    }
    drawing.value = false
  }
  else {
    drawing.value = true
    if (e.type === 'move') {
      viewer.canvas.setAttribute('style', 'cursor: move')
    }
    if (e.type === 'new') {
      viewer.canvas.setAttribute('style', 'cursor: crosshair')
    }
  }
}

function activeEvt(e, viewer) {
  console.log(e)
  viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)
  if (!e.isActive) {
    drawing.value = false
    restoreCursorMove.value = 'auto'
  }
}

function editorEvt(e, viewer) {
  if (e.type === 'move') {
    viewer.canvas.setAttribute('style', 'cursor: move')
    drawing.value = true
  }
  else {
    viewer.canvas.setAttribute('style', 'cursor: auto')
  }
}

function mouseEvt(e, viewer) {
  const restoreCursor = getComputedStyle(viewer.canvas).cursor
  if (!drawing.value) {
    console.log(e)
    if (e.type === 'onmouseover') {
      restoreCursorMove.value = restoreCursor
      viewer.canvas.setAttribute('style', 'cursor: pointer')
    }
    else {
      viewer.canvas.setAttribute('style', `cursor: ${restoreCursorMove.value || 'auto'}`)
    }
  }
}

function unload() {
  analysesRef.value.unload()
}

function load() {
  analysesRef.value.load()
}

function reload() {
  analysesRef.value.reload()
}
</script>

<template>
  <div ref="viewerContainer" class="demo-viewer demo-vc-analyses">
    <vc-viewer>
      <vc-analyses
        ref="analysesRef"
        position="bottom-left"
        :main-fab-opts="mainFabOpts"
        :offset="[10, 30]"
        :editable="editable"
        :viewshed-analysis-opts="viewshedAnalysisOpts"
        @draw-evt="drawEvt"
        @active-evt="activeEvt"
        @editor-evt="editorEvt"
        @mouse-evt="mouseEvt"
        @ready="analysesReadyDefault"
      />
      <vc-primitive-tileset
        url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
        @ready="onTilesetReady"
      />
      <vc-layer-imagery>
        <vc-imagery-provider-tianditu map-style="img_c" :maximum-level="17" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-terrain-provider-cesium v-if="addTerrain" />
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
      <el-checkbox v-model="editable">
        Editable
      </el-checkbox>
      <el-checkbox v-model="addTerrain">
        Terrain
      </el-checkbox>
    </el-row>
  </div>
</template>
