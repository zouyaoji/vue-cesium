<script setup>
import { ref } from 'vue'

const provider = ref(null)
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)
const mapStyleOptions = [
  {
    value: '6',
    label: 'Satellite imagery'
  },
  {
    value: '7',
    label: 'Road map'
  },
  {
    value: '8',
    label: 'Road map (transparent)'
  }
]
const ltypeOptions = [
  {
    value: '0',
    label: 'Default'
  },
  {
    value: '4',
    label: 'Labels only'
  },
  {
    value: '11',
    label: 'Roads only'
  }
]
const mapStyle = ref('7')
const ltype = ref('0')

function unload() {
  provider.value.unload()
}
function reload() {
  provider.value.reload()
}
function load() {
  provider.value.load()
}
const projectionTransforms = {
  from: 'GCJ02',
  to: 'WGS84'
}
</script>

<template>
  <div class="demo-viewer demo-vc-imagery-provider-amap">
    <vc-viewer>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
        <vc-imagery-provider-amap
          ref="provider"
          :map-style="mapStyle"
          :ltype="ltype"
          :projection-transforms="projectionTransforms"
          :minimum-level="0"
          :maximum-level="18"
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
          <div class="block" style="display: flex; flex-direction: column; max-width: 250px">
            <span class="demonstration">Opacity</span>
            <el-slider v-model="alpha" :min="0" :max="1" :step="0.01" />
            <span class="demonstration">Brightness</span>
            <el-slider v-model="brightness" :min="0" :max="5" :step="0.01" />
            <span class="demonstration">Contrast</span>
            <el-slider v-model="contrast" :min="0" :max="5" :step="0.01" />
            <span class="demonstration">Switch style</span>
            <el-select v-model="mapStyle" placeholder="Please select">
              <el-option v-for="item in mapStyleOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span v-if="mapStyle !== '6'" class="demonstration">Switch type</span>
            <el-select v-if="mapStyle !== '6'" v-model="ltype" placeholder="Please select">
              <el-option v-for="item in ltypeOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
