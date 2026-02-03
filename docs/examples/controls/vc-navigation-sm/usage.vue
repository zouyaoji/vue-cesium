<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-18 19:33:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 09:45:18
 * @FilePath: \vue-cesium\docs\examples\controls\vc-navigation-sm\usage.vue
-->
<script setup lang="ts">
import { ref } from 'vue'

const viewerContainer = ref(null)

const navigation = ref(null)

function load() {
  navigation.value.load()
}

function reload() {
  navigation.value.reload()
}

function unload() {
  navigation.value.unload()
}

function onNavigationEvt(e) {
  console.log(e)
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-navigation-sm">
    <vc-viewer>
      <vc-navigation-sm ref="navigation" @zoom-evt="onNavigationEvt" @compass-evt="onNavigationEvt" />
      <vc-navigation-sm position="left" :compass-opts="{ autoHidden: false }" :zoom-opts="{ autoHidden: false }" />
      <vc-compass-sm :auto-hidden="false" position="bottom" :offset="[200, 20]" />
      <vc-compass-sm position="bottom" :offset="[-200, 20]" />
      <vc-zoom-control-sm position="bottom" :offset="[0, 50]" />
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

<style scoped>
.demo-viewer {
  width: 100%;
}

.demo-toolbar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 10px;
  padding: 10px;
  z-index: 999;
}
</style>
