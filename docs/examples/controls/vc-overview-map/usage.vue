<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const overview = ref(null)
const show = ref(false)
const viewerContainer = ref(null)

const point = ref({
  pixelSize: 28,
  color: 'red'
})

const label = ref({
  text: 'Hello World',
  pixelOffset: [0, 80]
})

const billboard = ref({
  image: 'https://zouyaoji.top/vue-cesium/favicon.png',
  scale: 0.5
})

const projectionTransforms = ref({
  from: 'GCJ02',
  to: 'WGS84'
})

const centerRectColor = ref('red')

function onOverviewReady({ cesiumObject }: VcReadyObject) {
  console.log(cesiumObject)
}

function onEntityEvt(e) {
  console.log(e)
  if (e.type === 'onmouseover') {
    billboard.value = {
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      scale: 0.6
    }
  }
  else if (e.type === 'onmouseout') {
    billboard.value = {
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      scale: 0.5
    }
  }
}

function unload() {
  overview.value.unload()
}

function load() {
  overview.value.load()
}

function reload() {
  overview.value.reload()
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-overview-map">
    <vc-viewer>
      <!-- Overview map example 1 -->
      <vc-overview-map ref="overview" v-model="show" :offset="[5, 5]" @ready="onOverviewReady">
        <vc-layer-imagery :sort-order="10">
          <vc-imagery-provider-amap map-style="7" :projection-transforms="{ from: 'GCJ02', to: 'WGS84' }" />
        </vc-layer-imagery>
        <vc-entity>
          <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green" />
        </vc-entity>
      </vc-overview-map>
      <!-- Overview map example 2 -->
      <vc-overview-map position="bottom-left" width="300px" height="300px" :offset="[5, 5]">
        <vc-layer-imagery>
          <vc-imagery-provider-osm />
        </vc-layer-imagery>
        <vc-entity>
          <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green" />
        </vc-entity>
      </vc-overview-map>

      <vc-primitive-tileset url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json" />
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-entity
        :billboard="billboard"
        :position="[108, 32]"
        :point="point"
        :label="label"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green" />
      </vc-entity>
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
    </el-row>
  </el-row>
</template>
