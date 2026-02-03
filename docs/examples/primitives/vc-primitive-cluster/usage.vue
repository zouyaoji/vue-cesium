<script setup lang="ts">
import type { VcBillboardProps, VcLabelProps } from 'vue-cesium'
import type { VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const show = ref(true)
const enabled = ref(true)
const billboards = ref<VcBillboardProps[]>([])
const labels = ref<VcLabelProps[]>([])
const primitiveClusterRef = ref()
const indicatorRef = ref()
const minimumClusterSize = ref(3)

function onClicked(e: VcPickEvent) {
  console.log('onClicked', e)
}

function onMouseOver(e: VcPickEvent) {
  console.log('onMouseOver', e)
}

function unload() {
  primitiveClusterRef.value?.unload()
}

function reload() {
  primitiveClusterRef.value?.reload()
}

function load() {
  primitiveClusterRef.value?.load()
}

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  Cesium.Resource.fetchJson({
    url: 'https://zouyaoji.top/vue-cesium/SampleData/json/schools.geojson'
  }).then((res: any) => {
    const { features } = res
    for (let i = 0; i < features.length; i++) {
      const feature = features[i]
      const coordinates = feature.geometry.coordinates

      labels.value.push({
        show: true,
        scale: 1,
        showBackground: true,
        backgroundColor: Cesium.Color.fromCssColorString('#000000').withAlpha(0.8),
        verticalOrigin: 1,
        horizontalOrigin: 0,
        pixelOffset: new Cesium.Cartesian2(0, -10),
        font: '16px sans-serif',
        position: [coordinates[0], coordinates[1]],
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        distanceDisplayCondition: [0, Number.POSITIVE_INFINITY],
        text: 'label'
      })

      billboards.value.push({
        image: 'https://zouyaoji.top/vue-cesium/images/mark-icon.png',
        width: 32,
        height: 32,
        position: [coordinates[0], coordinates[1]],
        onClick: (e: any) => {
          console.log(e)
        }
      })
    }
  })
}

function onClusterEvent(ids: any[], cluster: any) {
  cluster.billboard.show = true
  cluster.label.show = false
  cluster.billboard.id = ids
  cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER
  ids.length >= 300
    ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png')
    : ids.length >= 150
      ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png')
      : ids.length >= 90
        ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png')
        : ids.length >= 30
          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png')
          : ids.length > 10
            ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png')
            : (cluster.billboard.image = `https://zouyaoji.top/vue-cesium/SampleData/images/cluser/${ids.length}.png`)
}

function pickEvt(e: any) {
  console.log(e)
}
</script>

<template>
  <div class="demo-viewer demo-vc-primitive-cluster">
    <vc-viewer @ready="onViewerReady">
      <vc-collection-primitive>
        <vc-primitive-cluster
          v-if="billboards.length"
          ref="primitiveClusterRef"
          :show="show"
          :enabled="enabled"
          :billboards="billboards"
          :labels="labels"
          :minimum-cluster-size="minimumClusterSize"
          @cluster-event="onClusterEvent"
          @click="onClicked"
          @mouseover="onMouseOver"
        />
      </vc-collection-primitive>

      <vc-selection-indicator ref="indicatorRef" @pick-evt="pickEvt" />
      <!-- Annotation layer -->
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
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
        <el-switch v-model="show" active-color="#13ce66" inactive-text="Show/Hide" />
        <el-switch v-model="enabled" active-color="#13ce66" inactive-text="Enable/Disable" />
      </el-row>
    </div>
  </div>
</template>
