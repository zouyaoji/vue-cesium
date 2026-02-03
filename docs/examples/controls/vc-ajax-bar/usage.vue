<script setup lang="ts">
import { ref } from 'vue'

const viewerContainer = ref()
const provider = ref()
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)

function unload() {
  provider.value.unload()
}

function reload() {
  provider.value.reload()
}

function load() {
  provider.value.load()
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-ajax-bar">
    <vc-viewer>
      <!-- default -->
      <vc-ajax-bar />
      <!-- custom -->
      <vc-ajax-bar position="bottom" color="#21BA45" size="5px" positioning="fixed" />
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis ref="provider" />
      </vc-layer-imagery>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
