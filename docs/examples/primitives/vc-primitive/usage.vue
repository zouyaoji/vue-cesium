<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:49:41
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 14:16:59
 * @FilePath: \vue-cesium\docs\examples\primitives\vc-primitive\usage.vue
-->
<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref, shallowRef } from 'vue'

const primitive = ref()
const geometryRef = shallowRef()
const geometryInstances = shallowRef({})
const appearance = shallowRef({})

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  const rectangle = { west: 105.5, south: 29.5, east: 115.5, north: 35.5 }
  geometryInstances.value = new Cesium.GeometryInstance({
    geometry: new Cesium.RectangleGeometry({
      rectangle: Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north)
    })
  })
  appearance.value = new Cesium.MaterialAppearance({
    material: Cesium.Material.fromType('Checkerboard', {
      repeat: new Cesium.Cartesian2(20.0, 6.0)
    }),
    materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
  })
}

function onClicked(e: any) {
  console.log(e)
}

function unload() {
  primitive.value?.unload()
}

function load() {
  primitive.value?.load()
}

function reload() {
  primitive.value?.reload()
}
</script>

<template>
  <div class="demo-viewer demo-vc-primitive">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive ref="primitive" :appearance="appearance" :geometry-instances="geometryInstances" @click="onClicked">
        <vc-geometry-instance>
          <vc-geometry-circle ref="geometryRef" :center="[103, 32]" :radius="250000" />
        </vc-geometry-instance>
      </vc-primitive>
    </vc-viewer>
    <div class="demo-toolbar">
      <el-button type="danger" round @click="unload">
        Unload
      </el-button>
      <el-button type="danger" round @click="load">
        Load
      </el-button>
      <el-button type="danger" round @click="reload">
        Reload
      </el-button>
    </div>
  </div>
</template>
