<script setup lang="ts">
import type { VcFabProps, VcMeasurementsProps } from 'vue-cesium'
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'
import { AngleUnits, DistanceUnits } from 'vue-cesium'

const viewerContainer = ref()
const measurementsRef = ref()
const measurementsRef2 = ref()
const measurementsRef3 = ref()
const measurementsRef4 = ref()
const editable = ref(false)
const addTerrain = ref(false)
const clampToGround = ref(false)
const restoreCursorMove = ref('auto')
const drawing = ref(false)

const measurementFabOptions1 = ref<VcFabProps>({
  direction: 'right'
})

const measurementFabOptions2 = ref<VcFabProps>({
  direction: 'left',
  color: 'accent'
})

const measurementFabOptions3 = ref<VcFabProps>({
  direction: 'right',
  modelValue: false,
  color: 'primary'
})

const measurementFabOptions4 = ref<VcFabProps>({
  direction: 'right'
})

const distanceMeasurementOpts3 = ref<VcMeasurementsProps['distanceMeasurementOpts']>({
  measureUnits: {
    distanceUnits: DistanceUnits.KILOMETERS,
    angleUnits: AngleUnits.RADIANS
  },
  decimals: {
    distance: 4,
    angle: 3
  }
})

const componentDistanceMeasurementOpts3 = ref<VcMeasurementsProps['componentDistanceMeasurementOpts']>({
  measureUnits: {
    distanceUnits: DistanceUnits.KILOMETERS,
    angleUnits: AngleUnits.RADIANS
  },
  decimals: {
    distance: 4,
    angle: 3
  }
})

const pointMeasurementOpts = ref({
  preRenderDatas: [[108.9602, 34.21895, 500]],
  pointOpts: {
    color: 'red'
  }
})

const areaMeasurementOpts = ref({
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
  ],
  areaFormatter: (value, defaultUnits, defaultLocale, defaultDecimals) => {
    return `${(value * 0.0015).toFixed(4)} mu`
  }
})

const pointMeasurementOpts3 = ref({
  measureUnits: {
    distanceUnits: DistanceUnits.METERS,
    angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,
    slopeUnits: AngleUnits.DEGREES
  },
  decimals: {
    lng: 3,
    lat: 3,
    height: 2,
    slope: 3
  }
})

const measurements = ref<VcMeasurementsProps['measurements']>(['component-distance', 'polyline', 'vertical', 'area', 'point'])

function drawingsReadyDefault({ Cesium, viewer, cesiumObject }: VcReadyObject) {
  console.log('Drawing options parameters:', cesiumObject)
  // window.vm = this
}

function clear() {
  measurementsRef4.value.clearAll()
}

function toggle(drawingActionInstance) {
  measurementsRef4.value.toggleAction(drawingActionInstance.name)
}

function onTilesetReady({ cesiumObject: tileset, viewer }: VcReadyObject) {
  viewer.zoomTo(tileset)
  viewer.scene.globe.depthTestAgainstTerrain = true
  restoreCursorMove.value = 'auto'
  drawing.value = false
}

function drawEvt(e, viewer) {
  console.log(e)
  const restoreCursor = getComputedStyle(viewer.canvas).cursor
  if (e.finished) {
    drawing.value = false
    if (e.type === 'move') {
      viewer.canvas.setAttribute('style', `cursor: ${restoreCursorMove.value}`)
    }
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
  console.log(e)
  if (e.type === 'move') {
    const restoreCursor = getComputedStyle(viewer.canvas).cursor
    viewer.canvas.setAttribute('style', 'cursor: move')
    drawing.value = true
  }
}

function mouseEvt(e, viewer) {
  console.log(e)
  const restoreCursor = getComputedStyle(viewer.canvas).cursor
  if (!drawing.value) {
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
  console.log(e, viewer)
}

function unload() {
  measurementsRef.value.unload()
}

function load() {
  measurementsRef.value.load()
}

function reload() {
  measurementsRef.value.reload()
}
</script>

<template>
  <div ref="viewerContainer" class="demo-viewer demo-vc-measurements">
    <vc-viewer>
      <vc-measurements
        ref="measurementsRef"
        position="bottom-left"
        :clamp-to-ground="clampToGround"
        :main-fab-opts="measurementFabOptions1"
        :offset="[10, 65]"
        :editable="editable"
        :point-measurement-opts="pointMeasurementOpts"
        :area-measurement-opts="areaMeasurementOpts"
        @draw-evt="drawEvt"
        @active-evt="activeEvt"
        @editor-evt="editorEvt"
        @mouse-evt="mouseEvt"
        @ready="drawingsReadyDefault"
        @clear-evt="clearEvt"
      />
      <vc-measurements
        ref="measurementsRef2"
        position="top-right"
        :main-fab-opts="measurementFabOptions2"
        :editable="editable"
        :measurements="measurements"
        active-color="yellow"
      />
      <vc-measurements
        ref="measurementsRef3"
        position="top-left"
        :main-fab-opts="measurementFabOptions3"
        :distance-measurement-opts="distanceMeasurementOpts3"
        :component-distance-measurement-opts="componentDistanceMeasurementOpts3"
        :point-measurement-opts="pointMeasurementOpts3"
        :editable="editable"
        :offset="[20, 60]"
      />
      <vc-measurements ref="measurementsRef4" position="bottom-left" :main-fab-opts="measurementFabOptions4" :offset="[10, 30]" :editable="editable">
        <template #body="drawingActionInstances">
          <div class="custom-measurements">
            <el-row>
              <vc-btn
                v-for="(drawingActionInstance, index) in drawingActionInstances"
                :key="index"
                :color="drawingActionInstance.isActive ? 'amber' : 'primary'"
                rounded
                @click="toggle(drawingActionInstance)"
              >
                {{ drawingActionInstance.tip.replace('Measure', '') }}
              </vc-btn>
              <vc-btn rounded color="red" @click="clear">
                Clear
              </vc-btn>
            </el-row>
          </div>
        </template>
      </vc-measurements>
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
