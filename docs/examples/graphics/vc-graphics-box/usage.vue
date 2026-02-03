<script setup lang="ts">
import { onMounted, ref } from 'vue'

const entity1 = ref()
const entity2 = ref()
const entity3 = ref()
const viewerContainer = ref<HTMLElement | null>(null)

const options = {
  description: 'Hello VueCesium',

  position1: { lng: 105.0, lat: 40.0, height: 300000.0 },
  dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },
  material1: 'BLUE',

  position2: { lng: 110.0, lat: 40.0, height: 300000.0 },
  dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },
  material2: 'RED',
  outlineColor2: 'BLACK',

  position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
  dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },
  outlineColor3: 'YELLOW'
}

function onEntityEvt(e) {
  console.log(e)
}

onMounted(() => {
  Promise.all([entity1.value?.creatingPromise, entity2.value?.creatingPromise, entity3.value?.creatingPromise]).then((instances) => {
    instances[0].viewer.zoomTo(instances[0].viewer.entities)
  })
})
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-graphics-box">
    <vc-viewer>
      <vc-entity
        ref="entity1"
        :position="options.position1"
        :description="options.description"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-box :dimensions="options.dimensions1" :material="options.material1" />
      </vc-entity>
      <vc-entity ref="entity2" :position="options.position2" :description="options.description">
        <vc-graphics-box
          :dimensions="options.dimensions2"
          :material="options.material2"
          :outline-color="options.outlineColor2"
          :outline="true"
        />
      </vc-entity>
      <vc-entity ref="entity3" :position="options.position3" :description="options.description">
        <vc-graphics-box :dimensions="options.dimensions3" :outline-color="options.outlineColor3" :fill="false" :outline="true" />
      </vc-entity>
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
