<script setup lang="ts">
import { ref } from 'vue'

const wind = ref()
const windData = ref()
const particleSystemOptions = ref({
  maxParticles: 64 * 64,
  particleHeight: 100.0,
  fadeOpacity: 0.996,
  dropRate: 0.003,
  dropRateBump: 0.01,
  speedFactor: 1.0,
  lineWidth: 4.0
})

const viewerParameters = ref({
  latRange: [0, 70],
  lonRange: [74, 140]
})

function ready() {
  // window.vm = this
  loadNetCDF('https://zouyaoji.top/vue-cesium/SampleData/wind/demo.nc').then((data) => {
    console.log(data)
    windData.value = data
  })
}

function unload() {
  wind.value.unload()
}

function load() {
  wind.value.load()
}

function reload() {
  wind.value.reload()
}

function pickEvt(e) {
  if (Cesium.defined(e) && e instanceof Cesium.Entity) {
    const cartographic = Cesium.Cartographic.fromCartesian(e.position.getValue(Cesium.JulianDate.now()))
    const longitude = Cesium.Math.toDegrees(cartographic.longitude)
    const latitude = Cesium.Math.toDegrees(cartographic.latitude)
    console.log(wind.value.getNearestUV(longitude, latitude))
  }
}

async function loadNetCDF(filePath) {
  return new Promise((resolve) => {
    const request = new XMLHttpRequest()
    request.open('GET', filePath)
    request.responseType = 'arraybuffer'
    request.onload = function () {
      const arrayToMap = function (array) {
        return array.reduce((map, object) => {
          map[object.name] = object
          return map
        }, {})
      }
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line new-cap
      const NetCDF = new window.netcdfjs(request.response)
      const data: any = {}
      const dimensions = arrayToMap(NetCDF.dimensions)
      data.dimensions = {}
      data.dimensions.lon = dimensions.lon.size
      data.dimensions.lat = dimensions.lat.size
      data.dimensions.lev = dimensions.lev.size
      const variables = arrayToMap(NetCDF.variables)
      const uAttributes = arrayToMap(variables.U.attributes)
      const vAttributes = arrayToMap(variables.V.attributes)
      data.lon = {}
      data.lon.array = new Float32Array(NetCDF.getDataVariable('lon').flat())
      data.lon.min = Math.min(...data.lon.array)
      data.lon.max = Math.max(...data.lon.array)
      data.lon.delta = data.lon.array[1] - data.lon.array[0]
      data.lat = {}
      data.lat.array = new Float32Array(NetCDF.getDataVariable('lat').flat())
      data.lat.min = Math.min(...data.lat.array)
      data.lat.max = Math.max(...data.lat.array)
      data.lat.delta = data.lat.array[1] - data.lat.array[0]
      data.lev = {}
      data.lev.array = new Float32Array(NetCDF.getDataVariable('lev').flat())
      data.lev.min = Math.min(...data.lev.array)
      data.lev.max = Math.max(...data.lev.array)
      data.U = {}
      data.U.array = new Float32Array(NetCDF.getDataVariable('U').flat())
      data.U.min = uAttributes.min.value
      data.U.max = uAttributes.max.value
      data.V = {}
      data.V.array = new Float32Array(NetCDF.getDataVariable('V').flat())
      data.V.min = vAttributes.min.value
      data.V.max = vAttributes.max.value
      resolve(data)
    }
    request.send()
  })
}
</script>

<template>
  <div class="demo-viewer demo-vc-overlay-windmap">
    <vc-viewer @ready="ready">
      <vc-overlay-windmap v-if="windData !== null" ref="wind" :data="windData" :options="particleSystemOptions" />
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-selection-indicator @pick-evt="pickEvt" />
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
            <span>maxParticles</span>
            <el-slider v-model="particleSystemOptions.maxParticles" :min="1" :max="65536" :step="1" />
            <span>particleHeight</span>
            <el-slider v-model="particleSystemOptions.particleHeight" :min="1" :max="10000" :step="1" />
            <span>fadeOpacity</span>
            <el-slider v-model="particleSystemOptions.fadeOpacity" :min="0.9" :max="0.999" :step="0.001" />
            <span>dropRate</span>
            <el-slider v-model="particleSystemOptions.dropRate" :min="0.0" :max="0.1" :step="0.001" />
            <span>dropRateBump</span>
            <el-slider v-model="particleSystemOptions.dropRateBump" :min="0.0" :max="0.2" :step="0.001" />
            <span>speedFactor</span>
            <el-slider v-model="particleSystemOptions.speedFactor" :min="0.5" :max="8" :step="0.1" />
            <span>lineWidth</span>
            <el-slider v-model="particleSystemOptions.lineWidth" :min="0.01" :max="16" :step="0.01" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
