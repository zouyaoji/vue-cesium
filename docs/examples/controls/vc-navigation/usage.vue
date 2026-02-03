<script setup lang="ts">
import type { VcMyLocationProps, VcNavigationProps, VcZoomControlProps } from 'vue-cesium'
import { ref } from 'vue'

const viewerContainer = ref()
const navigation = ref()
const provider = ref()
const flag = ref(true)
const position = ref<VcNavigationProps['position']>('top-left')
const offset = ref<[number, number]>([10, 80])

const compassOpts = ref({
  enableCompassOuterRing: true,
  outerOptions: {
    icon: 'svguse:#vc-icons-compass-outer',
    size: '120px'
  },
  innerOptions: {
    icon: 'fa fa-compass',
    size: '24px',
    color: '#3f4854',
    background: '#fff',
    tooltip: {
      tip: 'asd'
    }
  },
  markerOptions: {
    size: '120px',
    color: 'yellow'
  }
})

const zoomOpts = ref<VcZoomControlProps>({
  background: '#1976D2',
  direction: 'horizontal'
})

const locationOpts = ref<VcMyLocationProps>({
  color: 'red',
  amap: {
    key: '39c28158066d532d372391c5a0c7d9ba',
    version: '2.0',
    options: {
      timeout: 5000,
      noGeoLocation: 0,
      needAddress: true,
      extensions: 'all'
    },
    transformToWGS84: true
  }
})

const otherOpts = ref<VcNavigationProps['otherOpts']>(false)

function load() {
  navigation.value.load()
}

function reload() {
  navigation.value.reload()
}

function unload() {
  navigation.value.unload()
}

function onNavigationEvt(e) {
  console.log(e)
}

function onReady(e) {
  console.log(e)
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-navigation">
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
    <vc-viewer scene-mode-picker>
      <vc-navigation ref="navigation" :offset="[35, 35]" @ready="onReady" />
      <!-- Custom style -->
      <vc-navigation
        :position="position"
        :offset="offset"
        :compass-opts="compassOpts"
        :zoom-opts="zoomOpts"
        :location-opts="locationOpts"
        :other-opts="otherOpts"
        @compass-evt="onNavigationEvt"
        @zoom-evt="onNavigationEvt"
        @print-evt="onNavigationEvt"
        @location-evt="onNavigationEvt"
        @status-bar-evt="onNavigationEvt"
        @distance-legend-evt="onNavigationEvt"
      />
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu ref="provider" map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}

.demo-toolbar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  height: auto;
  z-index: 999;
}
</style>
