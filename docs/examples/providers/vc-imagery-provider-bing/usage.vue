<script setup>
import { ref } from 'vue'

const provider = ref(null)
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)
const options = [
  {
    value: 'Aerial',
    label: 'Aerial'
  },
  {
    value: 'AerialWithLabels',
    label: 'AerialWithLabels'
  },
  {
    value: 'Road',
    label: 'Road'
  },
  {
    value: 'CanvasDark',
    label: 'CanvasDark'
  }
]
const mapStyle = ref('Aerial')

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
  <div class="demo-viewer demo-vc-imagery-provider-bing">
    <vc-viewer>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-imagery-provider-bing
          ref="provider"
          bm-key="AmGu3cvB_g1HbkQErEyvmLc9j0YIGWS7IdOqR7-hQbO8J92Fzrzkhy_bYKSsyoEx"
          :map-style="mapStyle"
        />
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-toolbar">
      <el-row>
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
      <el-row>
        <el-col>
          <div class="block">
            <span class="demonstration">Opacity</span>
            <el-slider v-model="alpha" :min="0" :max="1" :step="0.01" />
            <span class="demonstration">Brightness</span>
            <el-slider v-model="brightness" :min="0" :max="5" :step="0.01" />
            <span class="demonstration">Contrast</span>
            <el-slider v-model="contrast" :min="0" :max="5" :step="0.01" />
            <span class="demonstration">Switch style</span>
            <el-select v-model="mapStyle" placeholder="Please select">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
