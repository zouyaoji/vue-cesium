<script setup lang="ts">
import { ref } from 'vue'

const entityRef = ref()

const point = ref({
  pixelSize: 28,
  color: 'red'
})

const label = ref({
  text: 'Hello World',
  pixelOffset: [0, 80]
})

const billboard = ref({
  image: 'https://zouyaoji.top/vue-cesium/favicon.png',
  scale: 0.5
})

const position = ref([108, 32])

function onEntityEvt(e) {
  console.log(e)
  if (e.type === 'onmouseover') {
    billboard.value = {
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      scale: 0.6
    }
  }
  else if (e.type === 'onmouseout') {
    billboard.value = {
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      scale: 0.5
    }
  }
}

function unload() {
  entityRef.value.unload()
}

function load() {
  entityRef.value.load()
}

function reload() {
  entityRef.value.reload()
}
</script>

<template>
  <div class="demo-viewer demo-vc-entity">
    <vc-viewer>
      <!-- 通过属性加载 和 子组件分别加载 -->
      <vc-entity
        ref="entityRef"
        :billboard="billboard"
        :position="position"
        :point="point"
        :label="label"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <!-- :coordinates = "{ west: 130, south: 20, east: 80, north: 25 }" -->
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green" />
      </vc-entity>
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
