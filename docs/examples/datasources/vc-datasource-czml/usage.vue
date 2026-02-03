<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref } from 'vue'

// state
const show = ref(true)
const datasourceRef = ref(null)
function onClicked(e) {
  console.log(e)
}
function unload() {
  datasourceRef.value.unload()
}
function reload() {
  datasourceRef.value.reload()
}
function load() {
  datasourceRef.value.load()
}
function onDatasourceReady({ Cesium, viewer, cesiumObject }: VcReadyObject) {
  // viewer.zoomTo(cesiumObject)
  viewer.camera.flyHome(0)
}
const czml = [
  {
    id: 'document',
    name: 'CZML Geometries: Polyline',
    version: '1.0'
  },
  {
    id: 'redLine',
    name: 'Red line clamped to terain',
    polyline: {
      positions: {
        cartographicDegrees: [-75, 35, 0, -125, 35, 0]
      },
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 255]
          }
        }
      },
      width: 5,
      clampToGround: true
    }
  },
  {
    id: 'blueLine',
    name: 'Glowing blue line on the surface',
    polyline: {
      positions: {
        cartographicDegrees: [-75, 37, 0, -125, 37, 0]
      },
      material: {
        polylineGlow: {
          color: {
            rgba: [0, 0, 255, 255]
          },
          glowPower: 0.2
        }
      },
      width: 10
    }
  },
  {
    id: 'orangeLine',
    name: 'Orange line with black outline at height and following the surface',
    polyline: {
      positions: {
        cartographicDegrees: [-75, 39, 250000, -125, 39, 250000]
      },
      material: {
        polylineOutline: {
          color: {
            rgba: [255, 165, 0, 255]
          },
          outlineColor: {
            rgba: [0, 0, 0, 255]
          },
          outlineWidth: 2
        }
      },
      width: 5
    }
  },
  {
    id: 'purpleLine',
    name: 'Purple arrow at height',
    polyline: {
      positions: {
        cartographicDegrees: [-75, 43, 500000, -125, 43, 500000]
      },
      material: {
        polylineArrow: {
          color: {
            rgba: [148, 0, 211, 255]
          }
        }
      },
      followSurface: false,
      width: 10
    }
  },
  {
    id: 'dashedLine',
    name: 'Blue dashed line',
    polyline: {
      positions: {
        cartographicDegrees: [-75, 45, 500000, -125, 45, 500000]
      },
      material: {
        polylineDash: {
          color: {
            rgba: [0, 255, 255, 255]
          }
        }
      },
      width: 4
    }
  }
]
</script>

<template>
  <div class="demo-viewer demo-vc-datasource-czml">
    <vc-viewer should-animate>
      <vc-datasource-czml
        ref="datasourceRef"
        czml="https://zouyaoji.top/vue-cesium/SampleData/simple.czml"
        :show="show"
        @ready="onDatasourceReady"
        @click="onClicked"
      />
      <vc-datasource-czml :czml="czml" />
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
        <el-switch v-model="show" active-color="#13ce66" inactive-text="Show/Hide" />
      </el-row>
    </div>
  </div>
</template>
