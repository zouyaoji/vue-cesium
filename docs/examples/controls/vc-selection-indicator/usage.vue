<script setup lang="ts">
import { ref } from 'vue'

const selectionIndicator = ref(null)
const entity = ref(null)
const viewerContainer = ref(null)
const provider1 = ref(null)
const provider2 = ref(null)

const point = ref({
  pixelSize: 28,
  color: 'red',
  heightReference: 1
})

const label = ref({
  text: 'Hello World',
  pixelOffset: [0, 80]
})

const billboard = ref({
  image: 'https://zouyaoji.top/vue-cesium/favicon.png',
  scale: 0.2,
  heightReference: 1
})

function clear() {
  selectionIndicator.value.selectedFeature.value = undefined
}

function pickEvt(e) {
  console.log(e)
}

function unload() {
  selectionIndicator.value.unload()
}

function load() {
  selectionIndicator.value.load()
}

function reload() {
  selectionIndicator.value.reload()
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-selection-indicator">
    <vc-viewer :selection-indicator="true" :info-box="true">
      <vc-selection-indicator ref="selectionIndicator" @pick-evt="pickEvt" />
      <vc-terrain-provider-cesium />
      <vc-entity ref="entity" :billboard="billboard" :position="[98, 28.4]" :point="point" :label="label">
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green" />
      </vc-entity>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery vc-id="testId">
        <vc-imagery-provider-wms
          ref="provider1"
          url="https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows"
          layers="Hydrography:bores"
          :parameters="{ transparent: true, format: 'image/png' }"
        />
      </vc-layer-imagery>
      <vc-layer-imagery vc-id="testId2">
        <vc-imagery-provider-wms
          ref="provider2"
          url="https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows"
          layers="Hydrography:bores"
          :parameters="{ transparent: true, format: 'image/png' }"
        />
      </vc-layer-imagery>
      <vc-primitive-tileset url="https://resource.dvgis.cn/data/3dtiles/ljz/tileset.json" />
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
      <el-button type="danger" round @click="clear">
        Clear
      </el-button>
    </el-row>
  </el-row>
</template>
