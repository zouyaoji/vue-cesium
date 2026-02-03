<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:43:45
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 16:33:28
 * @FilePath: \vue-cesium\docs\examples\graphics\vc-graphics-polyline-volume\usage.vue
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const polylineVolume1 = ref()
const polylineVolume2 = ref()
const polylineVolume3 = ref()
const shape1 = ref(null)
const shape3 = ref(null)

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
  shape1.value = computeCircle(60000)
  shape3.value = computeStar(7, 70000, 50000)
}

function computeCircle(radius) {
  const positions = []
  for (let i = 0; i < 360; i++) {
    const radians = Cesium.Math.toRadians(i)
    positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
  }
  return positions
}

function computeStar(arms, rOuter, rInner) {
  const angle = Math.PI / arms
  const length = 2 * arms
  const positions = Array.from({ length })
  for (let i = 0; i < length; i++) {
    const r = i % 2 === 0 ? rOuter : rInner
    positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }
  }
  return positions
}

onMounted(() => {
  Promise.all([polylineVolume1.value?.creatingPromise, polylineVolume2.value?.creatingPromise, polylineVolume3.value?.creatingPromise]).then(
    (instances) => {
      instances[0].viewer.zoomTo(instances[0].viewer.entities)
    }
  )
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-polyline-volume">
    <vc-viewer @ready="onViewerReady">
      <vc-entity>
        <vc-graphics-polyline-volume
          ref="polylineVolume1"
          :positions="[[-85, 32], [-85, 36], [-89, 36]]"
          :shape="shape1"
          material="red"
        />
      </vc-entity>
      <vc-entity>
        <vc-graphics-polyline-volume
          ref="polylineVolume2"
          :positions="[-90, 32, 0, -90, 36, 100000, -94, 36, 0]"
          :shape="[{ x: -50000, y: -50000 }, { x: 50000, y: -50000 }, { x: -50000, y: 50000 }, { x: -50000, y: 50000 }]"
          :material="[0, 255, 0, 125]"
          :outline="true"
          outline-color="black"
          :corner-type="2"
        />
      </vc-entity>
      <vc-entity>
        <vc-graphics-polyline-volume
          ref="polylineVolume3"
          :positions="[{ lng: -95.0, lat: 32.0, height: 0.0 }, { lng: -95.0, lat: 36.0, height: 100000.0 }, { lng: -99.0, lat: 36.0, height: 200000.0 }]"
          :shape="shape3"
          material="blue"
          :corner-type="0"
        />
      </vc-entity>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
