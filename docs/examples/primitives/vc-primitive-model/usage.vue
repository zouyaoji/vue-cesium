<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref, shallowRef, watch } from 'vue'

let _viewer: any

const coefficients = [
  [-0.066550267689383, -0.022088055746048, 0.078835009246127],
  [0.038364097478591, 0.045714300098753, 0.063498904606215],
  [-0.01436536331281, -0.026490613715151, -0.05018940406602],
  [-0.05153278691789, -0.050777795729986, -0.056449044453032],
  [0.043454596136534, 0.046672590104157, 0.05753010764661],
  [-0.00164046627411, 0.001286638231156, 0.007228908989616],
  [-0.042260855700641, -0.046394335094707, -0.057562936365585],
  [-0.004953478914091, -0.000479681664876, 0.008508150106928]
]
const environmentMapURL = 'https://zouyaoji.top/vue-cesium/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'

const primitive = ref()
const url = ref('https://zouyaoji.top/vue-cesium/SampleData/models/Pawns/Pawns.glb')
const modelMatrix = shallowRef<Cesium.Matrix4>()
const proceduralEnvironmentLighting = ref(false)
const luminanceAtZenith = ref(0.2)
const specularEnvironmentMaps = ref(environmentMapURL)
const sphericalHarmonicCoefficients = ref(coefficients)

watch(proceduralEnvironmentLighting, (val) => {
  if (val) {
    specularEnvironmentMaps.value = undefined
    sphericalHarmonicCoefficients.value = undefined
  }
  else {
    specularEnvironmentMaps.value = environmentMapURL
    sphericalHarmonicCoefficients.value = coefficients
  }
})

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
  _viewer = viewer
  // window.viewer = viewer
}

function onClicked(e: any) {
  console.log(e)
}

function unload() {
  primitive.value?.unload()
}

function load() {
  primitive.value?.load()
}

function reload() {
  primitive.value?.reload()
}

function onTexturesReadyEvent(model) {
  console.log(model)
}

function onReadyEvent(model) {
  _viewer.scene.camera.flyToBoundingSphere(model.boundingSphere)
}
</script>

<template>
  <div class="demo-viewer demo-vc-primitive-model">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive-model
        id="test"
        ref="primitive"
        :url="url"
        :model-matrix="modelMatrix"
        :scale="10000"
        :minimum-pixel-size="128"
        :maximum-scale="200000"
        :luminance-at-zenith="luminanceAtZenith"
        :specular-environment-maps="specularEnvironmentMaps"
        :spherical-harmonic-coefficients="sphericalHarmonicCoefficients"
        @textures-ready-event="onTexturesReadyEvent"
        @ready-event="onReadyEvent"
        @click="onClicked"
      />
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
            <span class="demonstration">Vertex brightness</span>
            <el-slider v-model="luminanceAtZenith" :min="0" :max="2" :step="0.01" />
            <el-checkbox v-model="proceduralEnvironmentLighting" :min="0" :max="5" :step="0.01">
              Use built-in procedural environment lighting
            </el-checkbox>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
