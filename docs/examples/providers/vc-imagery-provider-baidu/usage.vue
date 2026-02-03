<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:28:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 13:38:07
 * @FilePath: \vue-cesium\docs\examples\providers\vc-imagery-provider-baidu\usage.vue
-->
<script setup>
import { ref } from 'vue'

const provider = ref(null)
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)
const options = [
  {
    value: 'normal',
    label: 'Default style'
  },
  {
    value: 'vec',
    label: 'Baidu vector'
  },
  {
    value: 'img',
    label: 'Baidu imagery'
  },
  {
    value: 'dark',
    label: 'Night style'
  },
  {
    value: 'midnight',
    label: 'Midnight blue'
  },
  {
    value: 'traffic',
    label: 'Baidu traffic'
  }
]
const mapStyle = ref('vec')

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
  <div class="demo-viewer demo-vc-imagery-provider-baidu">
    <vc-viewer>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-imagery-provider-baidu
          ref="provider"
          :map-style="mapStyle"
          :projection-transforms="{ form: 'BD09', to: 'WGS84' }"
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
            <span class="demonstration">Switch service</span>
            <el-select v-model="mapStyle" placeholder="Please select">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
