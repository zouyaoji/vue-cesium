<script setup lang="ts">
import type { VcBillboardProps } from 'vue-cesium'
import { ref } from 'vue'

const collectionRef = ref(null)
const viewerContainer = ref<HTMLElement>(null)
const selectionIndicator = ref(null)
const billboards1 = ref([])
const billboards2 = ref([])
const modelMatrix = ref(null)
const show = ref(true)

const positions = ref([
  [105, 32],
  [106, 34],
  [107, 30]
])

const polygons = ref([
  {
    positions: [
      [115, 37],
      [115, 32],
      [107, 33],
      [102, 31],
      [102, 35]
    ],
    appearance: {
      type: 'MaterialAppearance',
      options: {
        material: 'green'
      }
    }
  },
  {
    positions: [
      { lng: 108.0, lat: 42.0 },
      { lng: 100.0, lat: 42.0 },
      { lng: 104.0, lat: 40.0 }
    ],
    appearance: {
      type: 'MaterialAppearance',
      options: {
        material: 'red'
      }
    },
    depthFailAppearance: {
      type: 'MaterialAppearance',
      options: {
        material: 'red'
      }
    }
  },
  {
    positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],
    appearance: {
      type: 'MaterialAppearance',
      options: {
        material: 'blue'
      }
    }
  },
  {
    polygonHierarchy: {
      positions: [
        [99, 30],
        [85, 30],
        [85, 40],
        [99, 40]
      ],
      holes: [
        {
          positions: [
            [97, 31],
            [97, 39],
            [87, 39],
            [87, 31]
          ],
          holes: [
            {
              positions: [
                [95, 33],
                [89, 33],
                [89, 37],
                [95, 37]
              ],
              holes: [
                {
                  positions: [
                    [93, 34],
                    [91, 34],
                    [91, 36],
                    [93, 36]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    appearance: {
      type: 'MaterialAppearance',
      options: {
        material: 'yellow'
      }
    }
  }
])

function onClicked(e: any) {
  console.log(e)
}

function unload() {
  collectionRef.value.unload()
}

function reload() {
  collectionRef.value.reload()
}

function load() {
  collectionRef.value.load()
}

function onViewerReady({ Cesium, viewer }: any) {
  for (let i = 0; i < 100; i++) {
    const billboard1: VcBillboardProps = {}
    billboard1.position = [Math.random() * 40 + 85, Math.random() * 30 + 21]
    billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
    billboard1.scale = 0.1
    billboards1.value.push(billboard1)
    // window.billboards1 = billboards1

    const billboard2: VcBillboardProps = {}
    billboard2.position = [Math.random() * 40 + 85, Math.random() * 30 + 21]
    billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
    billboard2.scale = 0.15
    billboards2.value.push(billboard2)
  }

  modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
}

function pickEvt(e: any) {
  console.log(e)
}

function primitiveAdded(a: any, b: any) {
  console.log('primitiveAdded', a, b)
}
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-collection-primitive">
    <vc-viewer @ready="onViewerReady">
      <vc-selection-indicator ref="selectionIndicator" @pick-evt="pickEvt" />
      <vc-collection-primitive ref="collectionRef" :show="show" @click="onClicked" @primitive-added="primitiveAdded">
        <vc-collection-billboard :billboards="billboards1" />
        <vc-collection-primitive>
          <vc-collection-billboard :billboards="billboards2" />
        </vc-collection-primitive>
      </vc-collection-primitive>
      <!-- <vc-collection-primitive @click="onClicked" :polygons="polygons">
      <vc-primitive-model
        @click="onClicked"
        url="https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb"
        :modelMatrix="modelMatrix"
        :scale="10000"
        :minimumPixelSize="128"
        :maximumScale="200000"
      >
      </vc-primitive-model>
      <vc-polygon @click="onClicked" :positions="positions" color="yellow"></vc-polygon>
    </vc-collection-primitive> -->
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
      <el-switch v-model="show" active-color="#13ce66" inactive-text="Show/Hide" />
    </el-row>
  </el-row>
</template>
