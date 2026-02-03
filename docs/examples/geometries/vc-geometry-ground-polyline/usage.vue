<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 13:29:56
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 13:03:17
 * @FilePath: \vue-cesium\docs\examples\geometries\vc-geometry-ground-polyline\usage.vue
-->
<script setup lang="ts">
import type { VcGeometryGroundPolylineRef, VcGeometryInstanceProps } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryGroundPolylineRef>()
const appearance = shallowRef<VcAppearance>()
const geometryInstances = shallowRef<VcGeometryInstanceProps['attributes']>()

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
  console.log('onViewerReady')
  appearance.value = new Cesium.PolylineMaterialAppearance()
  geometryInstances.value = new Cesium.GeometryInstance({
    geometry: new Cesium.GroundPolylineGeometry({
      positions: Cesium.Cartesian3.fromDegreesArray([100.1340164450331, 32.05494287836128, 108.08821010582645, 32.097804071380715]),
      width: 4.0
    }),
    id: 'object returned when this instance is picked and to get/set per-instance attributes'
  })
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
  <el-row class="demo-viewer demo-vc-geometry-ground-polyline">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive-ground-polyline :appearance="appearance" :geometry-instances="geometryInstances" @click="onClicked">
        <vc-geometry-instance>
          <vc-geometry-ground-polyline
            ref="geometryRef" :positions="[
              [100.1340164450, 31.05494287836128],
              [108.08821010582645, 31.05494287836128],
            ]" :width="2"
          />
        </vc-geometry-instance>
      </vc-primitive-ground-polyline>
      <vc-terrain-provider-cesium />
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
