<script setup lang="ts">
import { ref } from 'vue'

const typhoonRef = ref()
const typhoonRoutes = ref([])

function pointProps(point) {
  const colorDict = {
    '热带低压(TD)': '#30fc31',
    '热带风暴(TS)': '#307efa',
    '强热带风暴(STS)': '#fffc00',
    '台风(TY)': '#ff9c00',
    '强台风(STY)': '#fb7cff',
    '超强台风(SuperTY)': '#fa3030'
  }

  return {
    color: colorDict[point.strong] || '#409eff',
    pixelSize: 8,
    outlineColor: 'rgba(0,0,0,0.6)',
    outlineWidth: 2
  }
}

function linePrimitiveProps(typhoonDatasource) {
  const forcColorDict = {
    中国香港: '#f5000e',
    日本: '#0000ff',
    中央: '#ff0000',
    美国: '#000000',
    韩国: '#41c1f6',
    广州: '#ede12c',
    上海: '#cdf3dd',
    福州: '#c7c7c7',
    新德里: '#345cdc',
    乌兰巴托: '#12a3dd',
    莫斯科: '#4fea03',
    河内: '#41c1fd',
    曼谷: '#ddc1f6',
    英国: '#E1DB1A'
  }
  return {
    appearance: {
      type: typhoonDatasource.type === 'live' ? 'PolylineColorAppearance' : 'PolylineMaterialAppearance',
      options: {
        material:
          typhoonDatasource.type === 'live'
            ? undefined
            : {
                fabric: {
                  type: 'PolylineDash',
                  uniforms: {
                    color: forcColorDict[typhoonDatasource.typhoonRoute.sets] || '#000000'
                  }
                }
              },
        translucent: true
      }
    }
  }
}

function labelProps(typhoonDatasource) {
  return {
    text: typhoonDatasource.typhoonRoute.name
  }
}

function onViewerReady() {
  Cesium.Resource.fetchJson({
    url: 'https://zouyaoji.top/vue-cesium/SampleData/typhoon/202209.json'
  }).then((res) => {
    typhoonRoutes.value = res
  })
}

function onTyphoonReady() {
  //
}

function onForecastRouteAdded(e) {
  typhoonRef.value.flyToTyphoonRoute('202209')
}

function unload() {
  typhoonRef.value.unload()
}

function load() {
  typhoonRef.value.load()
}

function reload() {
  typhoonRef.value.reload()
}
</script>

<template>
  <div class="demo-viewer demo-vc-overlay-typhoon">
    <vc-viewer @ready="onViewerReady">
      <vc-overlay-typhoon
        v-if="typhoonRoutes.length"
        ref="typhoonRef"
        :typhoon-routes="typhoonRoutes"
        :point-props="pointProps"
        :line-primitive-props="linePrimitiveProps"
        :label-props="labelProps"
        @ready="onTyphoonReady"
        @forecast-route-added="onForecastRouteAdded"
      />
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
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
