<script setup lang="ts">
import type { VcPolygonHierarchy } from 'vue-cesium/es/utils/types'
import { onMounted, ref } from 'vue'

const polygon1 = ref()
const polygon2 = ref()
const polygon3 = ref()
const polygon4 = ref()
const polygon5 = ref()
const polygon6 = ref()

const hierarchy4: VcPolygonHierarchy = {
  positions: [
    [-99.0, 30.0],
    [-85.0, 30.0],
    [-85.0, 40.0],
    [-99.0, 40.0]
  ],
  holes: [
    {
      positions: [
        [-97.0, 31.0],
        [-97.0, 39.0],
        [-87.0, 39.0],
        [-87.0, 31.0]
      ],
      holes: [
        {
          positions: [
            [-95.0, 33.0],
            [-89.0, 33.0],
            [-89.0, 37.0],
            [-95.0, 37.0]
          ],
          holes: [
            {
              positions: [
                [-93.0, 34.0],
                [-91.0, 34.0],
                [-91.0, 36.0],
                [-93.0, 36.0]
              ]
            }
          ]
        }
      ]
    }
  ]
}

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady(cesiumInstance) {
  console.log('viewer ready')
}

onMounted(() => {
  Promise.all([
    polygon1.value?.creatingPromise,
    polygon2.value?.creatingPromise,
    polygon3.value?.creatingPromise,
    polygon4.value?.creatingPromise,
    polygon5.value?.creatingPromise,
    polygon6.value?.creatingPromise
  ]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-polygon">
    <vc-viewer @ready="onViewerReady">
      <vc-entity description="Hello VueCesium">
        <vc-graphics-polygon ref="polygon1" :hierarchy="[[-115, 37], [-115, 32], [-107, 33], [-102, 31], [-102, 35]]" material="red" />
      </vc-entity>
      <vc-entity description="Hello VueCesium">
        <vc-graphics-polygon
          ref="polygon2"
          :hierarchy="[[-108.0, 42.0], [-100.0, 42.0], [-104.0, 40.0]]"
          material="green"
          :extruded-height="500000.0"
          :close-top="false"
          :close-bottom="false"
        />
      </vc-entity>
      <vc-entity description="Hello VueCesium">
        <vc-graphics-polygon
          ref="polygon3"
          :hierarchy="[[-108, 25, 100000], [-100, 25, 100000], [-100, 30, 100000], [-108, 30, 100000]]"
          :material="[255, 165, 0, 125]"
          :extruded-height="0"
          :per-position-height="true"
          :outline="true"
          outline-color="black"
        />
      </vc-entity>
      <vc-entity description="Hello VueCesium">
        <vc-graphics-polygon ref="polygon4" :hierarchy="hierarchy4" :material="[0, 0, 255, 125]" :height="0" :outline="true" />
      </vc-entity>
      <vc-entity description="Hello VueCesium">
        <vc-graphics-polygon
          ref="polygon5"
          :hierarchy="[-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0]"
          :material="[0, 255, 255, 125]"
          :per-position-height="true"
          :outline="true"
          outline-color="black"
        />
      </vc-entity>
      <vc-entity description="Hello VueCesium">
        <vc-graphics-polygon
          ref="polygon6"
          :hierarchy="[[-120, 45], [-80, 45], [-80, 55], [-120, 55]]"
          material="purple"
          :extruded-height="50000"
          :outline="true"
          outline-color="magenta"
        />
      </vc-entity>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
