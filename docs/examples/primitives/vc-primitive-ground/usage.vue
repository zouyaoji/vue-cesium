<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:49:41
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 14:42:30
 * @FilePath: \vue-cesium\docs\examples\primitives\vc-primitive-ground\usage.vue
-->
<script setup lang="ts">
import type { VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref, shallowRef } from 'vue'

const primitive = ref()
const appearance = shallowRef(null)
const camera = ref({
  position: {
    x: -1432246.8223880068,
    y: 5761224.588247942,
    z: 3297281.1889481535
  },
  heading: 6.20312220367255,
  pitch: -0.9937536846355606,
  roll: 0.002443376981836387
})

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  viewer.scene.globe.depthTestAgainstTerrain = true
  appearance.value = new Cesium.MaterialAppearance({
    material: new Cesium.Material({
      fabric: {
        type: 'Image',
        uniforms: {
          image: 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/1.png'
        }
      }
    })
  })

  const urls = [
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/1.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/2.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/3.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/4.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/5.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/6.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/7.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/8.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/9.png',
    'https://zouyaoji.top/vue-cesium/SampleData/images/radar/10.png'
  ]
  let i = 0
  setInterval(() => {
    if (appearance.value) {
      appearance.value.material.uniforms.image = urls[i]
      i++
      if (i === 10)
        i = 0
    }
  }, 500)
}

function onClicked(e: VcPickEvent) {
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
  <div class="demo-viewer demo-vc-primitive-ground">
    <vc-viewer v-model:camera="camera" @ready="onViewerReady">
      <vc-primitive-ground ref="primitive" :appearance="appearance" :asynchronous="false" interleave @click="onClicked">
        <vc-geometry-instance>
          <vc-geometry-rectangle :rectangle="[102.5, 29.5, 106.5, 33.5]" />
        </vc-geometry-instance>
      </vc-primitive-ground>
      <vc-terrain-provider-cesium />
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis />
      </vc-layer-imagery>
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
