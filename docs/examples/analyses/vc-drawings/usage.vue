<script setup lang="ts">
import type { VcFabProps } from 'vue-cesium'
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const viewerContainer = ref()
const drawingsRef = ref()
const drawingsCustomRef = ref()
const editable = ref(false)
const addTerrain = ref(false)
const clampToGround = ref(false)
const restoreCursorMove = ref('auto')
const drawing = ref(false)

const mainFabOpts = ref<VcFabProps>({
  direction: 'right'
})

const polylineDrawingOpts = ref({
  onClick(e) {
    console.log(e)
  },
  onMouseover(e) {
    console.log('Mouse over event:', e)
  }
})

const rectangleDrawingOpts = ref({
  regular: false
})

const pinDrawingOpts = ref({
  billboardOpts: {
    image: 'https://zouyaoji.top/vue-cesium/images/grepin.png',
    onClick(e) {
      console.log(e)
    }
  },
  labelOpts: {
    text: 'Icon Point',
    pixelOffset: [0, -60],
    onClick(e) {
      console.log(e)
    }
  }
})

const pointDrawingOpts = ref({
  preRenderDatas: [
    [108.96018, 34.21948, 50],
    [108.9602, 34.21895, 100]
  ],
  pointOpts: {
    color: 'red',
    onClick(e) {
      console.log(e)
    }
  }
})

const polygonDrawingOpts = ref({
  preRenderDatas: [
    [
      [108.95808, 34.21955, 30],
      [108.95948, 34.22039, 20],
      [108.9595, 34.21914, 25]
    ],
    [
      [108.955, 34.21857],
      [108.95573, 34.21856],
      [108.95573, 34.21761],
      [108.95499, 34.21761]
    ]
  ]
})

const regularDrawingOpts = ref({
  preRenderDatas: [
    [
      [108.95474, 34.22204],
      [108.95564, 34.22166]
    ]
  ],
  onClick(e) {
    console.log(e)
  }
})

function drawingsReadyDefault({ Cesium, viewer, cesiumObject }: VcReadyObject) {
  console.log('Drawing options parameters:', cesiumObject)
  // window.vm = this
  // window.viewer = viewer
}

function clear() {
  drawingsCustomRef.value.clearAll()
}

function toggle(drawingActionInstance) {
  drawingsCustomRef.value.toggleAction(drawingActionInstance.name)
}

function onTilesetReady({ cesiumObject, viewer }: VcReadyObject) {
  const tileset = cesiumObject as Cesium.Cesium3DTileset
  const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
  const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
  const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
  const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
  tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
  viewer.zoomTo(tileset)
  viewer.scene.globe.depthTestAgainstTerrain = true
  restoreCursorMove.value = 'auto'
  drawing.value = false
}

function drawEvt(e, viewer: Cesium.Viewer) {
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

function clearEvt(e, viewer) {
  console.log(e)
}

function unload() {
  drawingsRef.value.unload()
}

function load() {
  drawingsRef.value.load()
}

function reload() {
  drawingsRef.value.reload()
}
</script>

<template>
  <div ref="viewerContainer" class="demo-viewer demo-vc-drawings">
    <vc-viewer>
      <vc-drawings
        ref="drawingsRef" position="bottom-left" :main-fab-opts="mainFabOpts" :offset="[10, 65]"
        :editable="editable" :clamp-to-ground="clampToGround" :pin-drawing-opts="pinDrawingOpts"
        :point-drawing-opts="pointDrawingOpts" :polygon-drawing-opts="polygonDrawingOpts"
        :polyline-drawing-opts="polylineDrawingOpts" :regular-drawing-opts="regularDrawingOpts" @draw-evt="drawEvt"
        @active-evt="activeEvt" @editor-evt="editorEvt" @mouse-evt="mouseEvt" @clear-evt="clearEvt"
        @ready="drawingsReadyDefault"
      />
      <vc-drawings
        ref="drawingsCustomRef" position="bottom-left" :main-fab-opts="mainFabOpts" :offset="[10, 30]"
        :editable="editable" :clamp-to-ground="clampToGround" :polyline-drawing-opts="polylineDrawingOpts"
        :pin-drawing-opts="pinDrawingOpts" :rectangle-drawing-opts="rectangleDrawingOpts"
      >
        <template #body="drawingActionInstances">
          <div class="custom-drawings">
            <el-row>
              <vc-btn
                v-for="(drawingActionInstance, index) in drawingActionInstances" :key="index"
                :color="drawingActionInstance.isActive ? 'positive' : 'primary'" rounded
                @click="toggle(drawingActionInstance)"
              >
                {{ drawingActionInstance.tip.replace('Draw', '') }}
              </vc-btn>
              <vc-btn color="red" rounded @click="clear">
                Clear
              </vc-btn>
            </el-row>
          </div>
        </template>
      </vc-drawings>
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
      <el-checkbox v-model="clampToGround">
        Clamp to ground
      </el-checkbox>
    </el-row>
  </div>
</template>
