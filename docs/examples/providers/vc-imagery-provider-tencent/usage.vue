<script setup>
import { ref } from 'vue'

const provider = ref(null)
const alpha = ref(1)
const brightness = ref(1)
const contrast = ref(1)
const mapStyleOptions = [
  {
    value: 'img',
    label: 'Satellite imagery'
  },
  {
    value: 'terrain',
    label: 'Terrain map'
  },
  {
    value: 'vector',
    label: 'Road map'
  }
]
const styleIdOptions = [
  {
    value: '1',
    label: 'Classic'
  },
  {
    value: '2',
    label: 'Label 1'
  },
  {
    value: '3',
    label: 'Label 2'
  },
  {
    value: '4',
    label: 'Moyuan'
  },
  {
    value: '8',
    label: 'Baiqian'
  },
  {
    value: '9',
    label: 'Light gray'
  }
]
const mapStyle = ref('vector')
const styleId = ref('1')

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
  <div class="demo-viewer demo-vc-imagery-provider-tencent">
    <vc-viewer>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
        <vc-imagery-provider-tencent
          ref="provider"
          :map-style="mapStyle"
          :style-id="styleId"
          :projection-transforms="projectionTransforms"
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
            <el-row>
              <el-select v-model="mapStyle" placeholder="Please select">
                <el-option v-for="item in mapStyleOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-row>
            <span v-if="mapStyle === 'vector'" class="demonstration">Switch type</span>
            <el-row>
              <el-select v-if="mapStyle === 'vector'" v-model="styleId" placeholder="Please select">
                <el-option v-for="item in styleIdOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
