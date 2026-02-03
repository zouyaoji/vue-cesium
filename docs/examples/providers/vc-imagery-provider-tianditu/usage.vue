<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:29:12
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 13:39:53
 * @FilePath: \vue-cesium\docs\examples\providers\vc-imagery-provider-tianditu\usage.vue
-->
<script setup>
import { ref } from 'vue'

const provider = ref(null)
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)
const options = [
  {
    value: 'img_c',
    label: 'Global imagery (geographic)'
  },
  {
    value: 'img_w',
    label: 'Global imagery (Web Mercator)'
  },
  {
    value: 'vec_c',
    label: 'Global vector (geographic)'
  },
  {
    value: 'vec_w',
    label: 'Global vector (Web Mercator)'
  },
  {
    value: 'ter_c',
    label: 'Global terrain shading (geographic)'
  },
  {
    value: 'ter_w',
    label: 'Global terrain shading (Web Mercator)'
  },
  {
    value: 'ibo_c',
    label: 'Global boundaries (geographic)'
  },
  {
    value: 'ibo_w',
    label: 'Global boundaries (Web Mercator)'
  }
]
const mapStyle = ref('img_c')

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
  <div class="demo-viewer demo-vc-imagery-provider-tianditu">
    <vc-viewer>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
        <vc-imagery-provider-tianditu ref="provider" :map-style="mapStyle" token="436ce7e50d27eede2f2929307e6b33c0" />
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
