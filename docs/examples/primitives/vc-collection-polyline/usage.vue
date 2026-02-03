<script setup lang="ts">
import type { VcPickEvent } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const collectionRef = ref(null)
const viewerContainer = ref<HTMLElement>(null)
const polylines = ref([])

function onClicked(e: VcPickEvent) {
  console.log(e)
}

function unload() {
  collectionRef.value.unload()
}

function reload() {
  collectionRef.value.reload()
}

function load() {
  collectionRef.value.load()
}

function onViewerReady({ Cesium, viewer }: any) {
  for (let i = 0; i < 500; i++) {
    const polyline: any = {}
    const positions = []
    positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
    positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
    polyline.positions = positions
    polyline.material = `#${Math.random().toString(16).substr(2, 6).toUpperCase()}`
    polylines.value.push(polyline)
  }
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-collection-polyline">
    <vc-viewer @ready="onViewerReady">
      <vc-collection-polyline ref="collectionRef" :polylines="polylines" @click="onClicked">
        <vc-polyline
          :positions="[[90, 20, 10000], [120, 20, 10000]]"
          :material="{
            fabric: {
              type: 'Color',
              uniforms: {
                color: 'red',
              },
            },
          }"
          :width="5"
        />
        <vc-polyline
          :positions="[[90, 30, 10000], [120, 30, 10000]]"
          :material="{
            fabric: {
              type: 'PolylineGlow',
              uniforms: {
                color: 'blue',
              },
            },
          }"
          :width="10"
        />
        <vc-polyline
          :positions="[[90, 40, 10000], [120, 40, 10000]]"
          :material="{
            fabric: {
              type: 'PolylineArrow',
              uniforms: {
                color: 'purple',
              },
            },
          }"
          :width="10"
        />
      </vc-collection-polyline>
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
