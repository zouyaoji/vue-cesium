<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 13:29:57
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 13:04:07
 * @FilePath: \vue-cesium\docs\examples\geometries\vc-geometry-simple-polyline\usage.vue
-->
<script setup lang="ts">
import type { VcGeometryInstanceProps, VcGeometrySimplePolylineRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometrySimplePolylineRef>()
const appearance = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()

const onClicked = (e: VcPickEvent) => console.log(e)

const positions = [
  [102.1, 29.5],
  [106.2, 29.5],
  [106.2, 33.5],
  [108.2, 35.5],
  [102.1, 33.5]
]

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
  console.log('onViewerReady')
  appearance.value = new Cesium.PerInstanceColorAppearance({
    flat: true
  })
  attributes.value = {
    color: new Cesium.ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
  }
}

onMounted(() => {
  geometryRef.value.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {
    // @ts-expect-error: access private property for demo purposes
    const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
    viewer.scene.camera.flyToBoundingSphere(boundingSphere)
    console.log('All geometries are loaded.')
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-geometry-simple-polyline">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributes">
          <vc-geometry-simple-polyline ref="geometryRef" :positions="positions" />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis />
      </vc-layer-imagery>
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
