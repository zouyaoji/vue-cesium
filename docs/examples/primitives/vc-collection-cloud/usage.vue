<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

const cloudCollectionRef = ref(null)
const clouds = ref([])
const viewerContainer = ref<HTMLElement>(null)
const selectionIndicator = ref(null)

function unload() {
  cloudCollectionRef.value.unload()
}

function reload() {
  cloudCollectionRef.value.reload()
}

function load() {
  cloudCollectionRef.value.load()
}

async function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  // window.viewer = viewer
  const scene = viewer.scene
  scene.primitives.add(await Cesium.createOsmBuildingsAsync())
  clouds.value.push({
    position: [-122.72, 45.5, 335],
    scale: [1500, 300],
    maximumSize: { x: 50, y: 12, z: 15 },
    slice: 0.36
  })
  clouds.value.push({
    position: [-122.72, 45.51, 260],
    scale: [2000, 300],
    maximumSize: { x: 50, y: 12, z: 15 },
    slice: 0.49
  })
  clouds.value.push({
    position: [-122.705, 45.52, 250],
    scale: [230, 110],
    maximumSize: { x: 13, y: 13, z: 13 },
    slice: 0.2
  })
  clouds.value.push({
    position: [-122.71, 45.522, 270],
    scale: [1700, 300],
    maximumSize: { x: 50, y: 12, z: 15 },
    slice: 0.6
  })
  clouds.value.push({
    position: [-122.705, 45.525, 250],
    scale: [230, 110],
    maximumSize: { x: 15, y: 13, z: 15 },
    slice: 0.35
  })
  clouds.value.push({
    position: [-122.721, 45.53, 220],
    scale: [1500, 500],
    maximumSize: { x: 30, y: 20, z: 17 },
    slice: 0.45
  })

  viewer.scene.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.6515, 45.5252, 525),
    orientation: {
      heading: Cesium.Math.toRadians(-115),
      pitch: Cesium.Math.toRadians(-12),
      roll: 0.0
    }
  })
}

function pickEvt(e: any) {
  console.log(e)
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-collection-cloud">
    <vc-viewer @ready="onViewerReady">
      <vc-collection-cloud ref="cloudCollectionRef" :clouds="clouds">
        <vc-cumulus-cloud
          :position="[-122.6908, 45.496, 300]"
          :maximum-size="{ x: 50, y: 15, z: 13 }"
          :slice="0.3"
          :scale="[1500, 250]"
        />
      </vc-collection-cloud>
      <vc-layer-imagery>
        <vc-imagery-provider-bing
          bm-key="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
          map-style="Aerial"
        />
      </vc-layer-imagery>
      <vc-selection-indicator ref="selectionIndicator" @pick-evt="pickEvt" />
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
