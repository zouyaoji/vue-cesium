# SuperMap影像服务Provider

`supermap-imagery-provider`加载超图iserver影像服务。只有超图WebGL包有此组件。

## 示例

### 添加SuperMapImageryProvider影像到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <sm-cesium-viewer :cesiumPath="cesiumPath" navigation>
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <supermap-imagery-provider ref="supermapLayer":url="url" @ready="ready"></supermap-imagery-provider>
        </imagery-layer>
      </sm-cesium-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>切换服务</span>
        <md-select v-model="url" placeholder="请选择服务">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>

  <script>
    import CesiumViewer from '../../../../src/components/viewer/CesiumViewer.vue'
    export default {
      data () {
        return {
          cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js',
          options: [{
            value: 'https://www.songluck.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
            label: '四川地图'
          }, {
            value: 'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',
            label: '谷歌地图'
          }],
          url: 'https://www.songluck.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      components: {
        SmCesiumViewer: CesiumViewer
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          viewer.zoomTo(this.$refs.supermapLayer.providerContainer.imageryLayer)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <sm-cesium-viewer :cesiumPath="cesiumPath" navigation>
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <supermap-imagery-provider ref="supermapLayer":url="url" @ready="ready"></supermap-imagery-provider>
      </imagery-layer>
    </sm-cesium-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>切换服务</span>
      <md-select v-model="url" placeholder="请选择服务">
        <md-option
          v-for="item in options"
          :key="item.value"
          :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  import CesiumViewer from '../../../src/components/viewer/CesiumViewer.vue'
  export default {
    data () {
      return {
        cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js',
        options: [{
          value: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
          label: '四川地图'
        }, {
          value: 'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',
          label: '谷歌地图'
        }],
        url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    components: {
      SmCesiumViewer: CesiumViewer
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        viewer.zoomTo(this.$refs.supermapLayer.providerContainer.imageryLayer)
      }
    }
  }
</script>
```

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`超图iserver影像服务地址。|
|name|String|超图iserver服务名称|`optional`影像图层名称。|
|minimumLevel|Number|0|`optional`最小层级。|
|maximumLevel|Number|20|`optional`最大层级。|

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|errorEvent|TileProviderError|当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。|
