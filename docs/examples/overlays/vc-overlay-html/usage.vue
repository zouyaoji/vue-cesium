<script setup lang="ts">
import { ref } from 'vue'

const html = ref()
const show = ref(true)

function unload() {
  html.value.unload()
}

function load() {
  html.value.load()
}

function reload() {
  html.value.reload()
}

function toggle() {
  show.value = !show.value
}
</script>

<template>
  <div class="demo-viewer demo-vc-overlay-html">
    <vc-viewer>
      <vc-overlay-html ref="html" :position="[117.186419, 45.66446, 20]" :show="show">
        <div class="vc-box">
          aa
        </div>
      </vc-overlay-html>
      <vc-entity :position="[117.186419, 45.66446, 20]">
        <vc-graphics-point color="red" :pixel-size="8" />
      </vc-entity>
      <vc-overlay-html :position="[104.04, 30.40]">
        <div class="label-container label-container-var">
          <div class="label-animate-marker_border">
            <span class="label-animate-marker_text">Welcome to Chengdu</span>
          </div>
        </div>
      </vc-overlay-html>
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
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
      <el-button type="danger" round @click="toggle">
        Show/Hide
      </el-button>
    </el-row>
  </div>
</template>
