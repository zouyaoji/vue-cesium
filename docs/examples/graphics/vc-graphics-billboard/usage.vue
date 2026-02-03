<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:42:53
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 17:41:09
 * @FilePath: \vue-cesium\docs\examples\graphics\vc-graphics-billboard\usage.vue
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const entity = ref()
const viewerContainer = ref<HTMLElement | null>(null)
const billboard = ref()
const image = 'https://zouyaoji.top/vue-cesium/favicon.png'
const position = { lng: 90, lat: 40, height: 10000 }
const distanceDisplayCondition = { near: 0, far: 20000000 }
const horizontalOrigin = 0
const scale = ref(0.25)
const show = ref(true)

function onEntityEvt(e) {
  console.log(e)
  if (e.type === 'onmouseover') {
    scale.value = 0.5
  }
  else if (e.type === 'onmouseout') {
    scale.value = 0.25
  }
}

function unload() {
  billboard.value?.unload()
}

function reload() {
  billboard.value?.reload()
}

function load() {
  billboard.value?.load()
}

onMounted(() => {
  entity.value?.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {
    viewer.zoomTo(cesiumObject)
  })
})
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-graphics-billboard">
    <vc-viewer>
      <vc-entity ref="entity" :position="position" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
        <vc-graphics-billboard
          ref="billboard"
          :image="image"
          :scale="scale"
          :show="show"
          :distance-display-condition="distanceDisplayCondition"
          :horizontal-origin="horizontalOrigin"
        />
      </vc-entity>
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
      <el-switch v-model="show" active-color="#13ce66" inactive-text="show/hide" />
    </el-row>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
