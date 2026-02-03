<script setup lang="ts">
import type { VcLabelProps } from 'vue-cesium'
import type { VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const viewerContainer = ref()
const collectionRef = ref()
const labels = ref([])

const polylines = [
  {
    positions: [
      { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.318664550781 },
      { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.318664550781 }
    ],
    area: 100000.3
  },
  {
    positions: [
      { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
      { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }
    ],
    area: 8000.658
  },
  {
    positions: [
      { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },
      { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }
    ],
    area: 200000.55
  }
]

function onClicked(e: any) {
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

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  for (let i = 0; i < 100; i++) {
    const label: VcLabelProps = {}
    label.position = [Math.random() * 40 + 85, Math.random() * 30 + 21]
    label.text = i.toString()
    labels.value.push(label)
  }
}

function onMouseover(e: VcPickEvent) {
  console.log(e)
  if (e.cesiumObject instanceof Cesium.Label) {
    e.pickedFeature.primitive.scale = 1.5
  }
  else if (e.cesiumObject instanceof Cesium.LabelCollection) {
    e.pickedFeature.primitive.scale = 1.5
  }
}

function onMouseout(e: VcPickEvent) {
  console.log(e)
  if (e.cesiumObject instanceof Cesium.Label) {
    e.pickedFeature.primitive.scale = 1
  }
  else if (e.cesiumObject instanceof Cesium.LabelCollection) {
    e.pickedFeature.primitive.scale = 1
  }
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-collection-label">
    <vc-viewer @ready="onViewerReady">
      <vc-collection-label
        ref="collectionRef" :labels="labels" @click="onClicked" @mouseout="onMouseout"
        @mouseover="onMouseover"
      >
        <vc-label
          v-for="(polyline, index) of polylines" :key="`label${index}`"
          :position="polyline.positions[polyline.positions.length - 1]"
          :text="`Area ${polyline.area > 1000000 ? `${(polyline.area / 1000000).toFixed(2)}km²` : `${polyline.area.toFixed(2)}㎡`}`"
          show-background :horizontal-origin="1"
        />
      </vc-collection-label>
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
