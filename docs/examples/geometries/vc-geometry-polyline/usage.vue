<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-02-01 10:22:13
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 13:02:06
 * @FilePath: \vue-cesium\docs\examples\geometries\vc-geometry-polyline\usage.vue
-->
<script setup lang="ts">
import type { VcGeometryPolylineRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryPolylineRef>()
const appearance = shallowRef<VcAppearance>()
const vertexFormat = shallowRef<Cesium.VertexFormat>()
const positions1 = [
  [102, 40],
  [106, 40],
  [106, 36]
]
const colors1 = [
  { red: 255, green: 0, blue: 0, alpha: 255 },
  { red: 0, green: 255, blue: 0, alpha: 255 },
  { red: 0, green: 0, blue: 255, alpha: 255 }
]
const positions2 = [
  [102, 35],
  [106, 35],
  [106, 32]
]
const colors2 = [
  { red: 255, green: 255, blue: 0, alpha: 255 },
  { red: 255, green: 0, blue: 255, alpha: 255 },
  { red: 0, green: 255, blue: 255, alpha: 255 }
]

const onClicked = (e: VcPickEvent) => console.log(e)

function unload() {
  geometryRef.value?.unload()
}

function reload() {
  geometryRef.value?.reload()
}

function load() {
  geometryRef.value?.load()
}

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  const { PolylineColorAppearance, VertexFormat } = Cesium
  appearance.value = new PolylineColorAppearance()
  vertexFormat.value = VertexFormat.POSITION_AND_COLOR
}

onMounted(() => {
  geometryRef.value.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {
    const polylineGeometry = cesiumObject as Cesium.PolylineGeometry
    // @ts-expect-error: access private property for demo purposes
    const boundingSphere = Cesium.BoundingSphere.fromPoints(polylineGeometry._positions)
    viewer.scene.camera.flyToBoundingSphere(boundingSphere)
    console.log('All geometries are loaded.')
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-geometry-polyline">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance>
          <vc-geometry-polyline
            ref="geometryRef" :positions="positions1" :colors="colors1" :width="4"
            :vertex-format="vertexFormat"
          />
        </vc-geometry-instance>
        <vc-geometry-instance>
          <vc-geometry-polyline
            :positions="positions2" :colors="colors2" :width="4" :vertex-format="vertexFormat"
            colors-per-vertex
          />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis />
      </vc-layer-imagery>
      <vc-terrain-provider-cesium />
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
