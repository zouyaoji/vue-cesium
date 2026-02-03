<script setup lang="ts">
import type { VcColorSegments, VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const heatmap = ref()
const data = ref([])
const max = ref(346.05413818359375)
const min = ref(0.5259535908699036)
const rectangle = ref([0, 0, 0, 0])
const show = ref(true)
const segments = ref<VcColorSegments[]>([
  [10, '#4A90C3'],
  [20, '#81AAAC'],
  [40, '#B2C899'],
  [60, '#E5EA84'],
  [100, '#F8DE6D'],
  [150, '#EFA451'],
  [200, '#E46C38'],
  [346, '#D53127']
])

const options = ref({
  backgroundColor: 'rgba(0,0,0,0)',
  opacity: 0.8,
  radius: 10,
  maxOpacity: 0.6,
  minOpacity: 0.3,
  blur: 0.75
})

function ready({ Cesium, viewer }) {
  Cesium.Resource.fetchJson({ url: 'https://zouyaoji.top/vue-cesium/SampleData/heatmap/pop.json' }).then((res) => {
    rectangle.value = res.bounds
    min.value = res.min
    max.value = res.max
    data.value = res.data
  })
}

function onHeatmapReady({ Cesium, viewer, cesiumObject }: VcReadyObject) {
  heatmap.value.childRef.value.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {
    console.log(cesiumObject)
    if (cesiumObject instanceof Cesium.GroundPrimitive) {
      const geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry)
      viewer.scene.camera.flyToBoundingSphere(geometry.boundingSphere)
    }
    else if (cesiumObject instanceof Cesium.Entity) {
      viewer.flyTo(cesiumObject)
    }
    else {
      viewer.camera.flyTo({ destination: cesiumObject.imageryProvider.rectangle })
    }
  })
}

function unload() {
  heatmap.value.unload()
}

function load() {
  heatmap.value.load()
}

function reload() {
  heatmap.value.reload()
}
</script>

<template>
  <div class="demo-viewer demo-vc-overlay-heatmap">
    <vc-viewer scene-mode-picker @ready="ready">
      <vc-overlay-heatmap
        v-if="data.length"
        ref="heatmap"
        :data="data"
        :rectangle="rectangle"
        :max="max"
        :min="min"
        :show="show"
        :options="options"
        type="primitive"
        :segments="segments"
        @ready="onHeatmapReady"
      />
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-datasource-geojson data="https://zouyaoji.top/vue-cesium/SampleData/geojson/wuhou.json" stroke="red" />
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
  </div>
</template>
