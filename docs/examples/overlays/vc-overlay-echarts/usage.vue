<script setup lang="ts">
import { ref } from 'vue'

const echartOverlay = ref()

const camera = ref({
  position: [107.033, 26.976, 5725046.53],
  heading: 14,
  pitch: -79,
  roll: 0.06
})

const lineColors = ['#fff', '#f6fb05', '#00fcff']
const stationSymbols = [
  'image://https://zouyaoji.top/vue-cesium/images/station-blue.png',
  'image://https://zouyaoji.top/vue-cesium/images/station-yellow.png'
]
const lineSymbols = [
  'image://https://zouyaoji.top/vue-cesium/images/symbol-white.png',
  'image://https://zouyaoji.top/vue-cesium/images/symbol-yellow.png'
]

const datas = [
  {
    level: 1,
    name: 'Beijing',
    label: 'beijing',
    value: [116.4551, 40.2539],
    symbol: '',
    symbolSize: [30, 30]
  },
  {
    level: 1,
    symbol: '',
    name: 'Langfang',
    label: 'langfang',
    category: 0,
    active: true,
    speed: 6,
    value: [116.521, 39.0509],
    belong: 'Beijing'
  },
  {
    level: 1,
    symbol: '',
    name: 'Urumqi',
    category: 0,
    active: true,
    speed: 6,
    value: [87.9236, 43.5883],
    belong: 'Beijing'
  },
  {
    level: 1,
    symbol: '',
    name: 'Lanzhou',
    category: 0,
    active: true,
    speed: 6,
    value: [103.5901, 36.3043],
    belong: 'Beijing'
  },
  {
    level: 1,
    symbol: '',
    name: 'Hangzhou',
    category: 0,
    active: true,
    speed: 6,
    value: [119.5313, 29.8773],
    belong: 'Beijing'
  },
  {
    level: 1,
    symbol: '',
    name: 'Sichuan',
    category: 0,
    active: true,
    speed: 6,
    value: [103.9526, 30.7617],
    belong: 'Beijing'
  },
  {
    level: 2,
    symbol: '',
    name: 'Chongqing',
    category: 0,
    active: true,
    speed: 6,
    value: [107.7539, 30.1904],
    belong: 'Sichuan'
  },
  {
    level: 1,
    symbol: '',
    name: 'Xiamen',
    category: 0,
    active: true,
    speed: 6,
    value: [118.1689, 24.6478],
    belong: 'Beijing'
  },
  {
    level: 1,
    symbol: '',
    name: 'Baotou',
    category: 0,
    active: true,
    speed: 6,
    value: [110.3467, 41.4899],
    belong: 'Beijing'
  },
  {
    level: 1,
    symbol: '',
    name: 'Wenzhou',
    category: 0,
    active: true,
    speed: 6,
    value: [120.498, 27.8119],
    belong: 'Hangzhou'
  },
  {
    level: 2,
    symbol: '',
    name: 'Zhoushan',
    category: 0,
    active: true,
    speed: 6,
    value: [122.2559, 30.2234],
    belong: 'Hangzhou'
  }
]

datas.forEach((data) => {
  data.symbol = stationSymbols[data.level - 1]
})

const arrs = [[], [], []]

datas.forEach((data) => {
  if (data.belong) {
    const belongs = Array.isArray(data.belong) ? data.belong : [data.belong]
    belongs.forEach((belong) => {
      datas.forEach((item) => {
        if (belong === item.name) {
          arrs[data.level - 1].push([
            {
              coord: item.value
            },
            {
              coord: data.value
            }
          ])
        }
      })
    })
  }
})

const seriesEffectScatter = [
  {
    type: 'effectScatter',
    coordinateSystem: 'cesium',
    symbolSize: [20, 20],
    symbolOffset: [0, -10],
    z: 3,
    circular: { rotateLabel: true },
    label: {
      normal: {
        show: true,
        position: 'right',
        formatter: '{b}',
        fontSize: 24,
        color: '#fff',
        textBorderColor: '#2aa4e8',
        textBorderWidth: 2,
        offset: [0, 20]
      }
    },
    itemStyle: { normal: { shadowColor: 'none' } },
    data: datas
  }
]
const seriesLines = []
arrs.forEach((arr, index) => {
  seriesLines.push({
    name: '',
    type: 'lines',
    coordinateSystem: 'cesium',
    z: 1,
    effect: {
      show: true,
      smooth: false,
      trailLength: 0,
      symbol: lineSymbols[index],
      symbolSize: [10, 30],
      period: 4
    },
    lineStyle: { width: 2, color: lineColors[index], curveness: -0.2 },
    data: arr
  })
})

const options = { animation: true, series: [...seriesEffectScatter, ...seriesLines] }

function unload() {
  echartOverlay.value.unload()
}
function load() {
  echartOverlay.value.load()
}
function reload() {
  echartOverlay.value.reload()
}
</script>

<template>
  <div class="demo-viewer demo-vc-overlay-echarts">
    <vc-viewer :camera="camera">
      <vc-overlay-echarts ref="echartOverlay" :options="options" />
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
  </div>
</template>
