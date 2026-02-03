<script setup>
import { ref } from 'vue'

// state
const layer = ref(null)
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)
const sliderRef = ref(null)
let moveActive = false
let myViewer = null
let handler = null
const viewerContainer = ref(null)

// methods
function onViewerReady({ Cesium, viewer }) {
  myViewer = viewer
  const slider = sliderRef.value
  handler = new Cesium.ScreenSpaceEventHandler(slider)
  handler.setInputAction(() => {
    moveActive = true
  }, Cesium.ScreenSpaceEventType.LEFT_DOWN)
  handler.setInputAction(() => {
    moveActive = true
  }, Cesium.ScreenSpaceEventType.PINCH_START)
  handler.setInputAction(onMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
  handler.setInputAction(onMove, Cesium.ScreenSpaceEventType.PINCH_MOVE)
  handler.setInputAction(() => {
    moveActive = false
  }, Cesium.ScreenSpaceEventType.LEFT_UP)
  handler.setInputAction(() => {
    moveActive = false
  }, Cesium.ScreenSpaceEventType.PINCH_END)
}

function onImageryLayerReady(readyObj) {
  const { cesiumObject: imageryLayer, viewer } = readyObj
  imageryLayer.splitDirection = Cesium.SplitDirection.LEFT
  const slider = sliderRef.value
  viewer.scene.splitPosition = slider.offsetLeft / slider.parentElement.offsetWidth
}

function onMove(movement) {
  if (!moveActive) {
    return
  }
  const slider = sliderRef.value
  const relativeOffset = movement.endPosition.x
  const splitPosition = (slider.offsetLeft + relativeOffset) / slider.parentElement.offsetWidth
  slider.style.left = `${100.0 * splitPosition}%`
  myViewer.scene.splitPosition = splitPosition
}

function unload() {
  layer.value.unload()
}

function reload() {
  layer.value.reload()
}

function load() {
  layer.value.load()
}
</script>

<template>
  <div ref="viewerContainer" class="demo-viewer demo-vc-layer-imagery">
    <div ref="sliderRef" class="slider" />
    <vc-viewer @ready="onViewerReady">
      <vc-layer-imagery ref="layer" :alpha="alpha" :brightness="brightness" :contrast="contrast" @ready="onImageryLayerReady">
        <vc-imagery-provider-arcgis />
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
            <el-slider v-model="brightness" :min="0" :max="3" :step="0.01" />
            <span class="demonstration">Contrast</span>
            <el-slider v-model="contrast" :min="0" :max="3" :step="0.01" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.slider {
  position: absolute;
  left: 50%;
  top: 0px;
  background-color: #d3d3d3;
  width: 5px;
  height: 100%;
  z-index: 9999;
}

.slider:hover {
  cursor: ew-resize;
}
</style>
