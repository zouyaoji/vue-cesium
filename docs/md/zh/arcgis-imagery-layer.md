<template lang="markdown">

# ArcGIS影像服务图层

`arcgis-imagery-layer`

## 示例

### 添加ArcGIS影像服务

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
       <arcgis-imagery-layer :url="url" :alpha="alpha" :brightness="brightness" :contrast="contrast"/>
      </cesium-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover"></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover"></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover"></vue-slider>
        <span>切换服务</span>
        <md-select v-model="url" placeholder="请选择服务" >
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
    export default {
      data () {
        return {
          options: [{
            value: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
            label: 'World_Imagery'
          }, {
            value: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
            label: 'World_Street_Map'
          }],
          url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <arcgis-imagery-layer :url="url" :alpha="alpha" :brightness="brightness" :contrast="contrast"/>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
      }
    }
  }
</script>
```

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`ArcGIS影像服务地址。|
|token|String||`optional`ArcGIS影像服务认证Token。|
|tileDiscardPolicy|Object||`optional`The policy that determines if a tile is invalid and should be discarded.|
|proxy|Cesium.Proxy|20|`optional`服务代理。|
|usePreCachedTilesIfAvailable|Boolean|true|`optional`If true, the server's pre-cached tiles are used if they are available. If false, any pre-cached tiles are ignored and the 'export' service is used.|
|layers|String||`optional`A comma-separated list of the layers to show, or undefined if all layers should be shown.|
|enablePickFeatures|Cesium.Proxy|20|`optional`是否拾取对象，在infobox弹出信息。|
|tilingScheme|Cesium.Proxy|20|`optional`The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.|
|ellipsoid|Cesium.TilingScheme|20|`optional`参考椭球体|
|tileWidth|Number|256|`optional`像元宽度。|
|tileHeight|Number|256|`optional`像元高度。|
|minimumLevel|Number||`optional`最小层级。|
|maximumLevel|Number||`optional`最大层级。|
|rectangle|Cesium.Rectangle||`optional`图层的矩形范围,此矩形限制了影像可见范围。|
|alpha|Number\|function|1.0|`optional`图层透明度值，取值范围为0.0~1.0。|
|brightness|Number\|function|1.0|`optional`图层亮度值。值为1.0表示使用原图；值大于1.0时图像将变亮；值小于1.0时图像将变暗。|
|contrast|Number\|function|1.0|`optional`图层对比度。值为1.0表示使用原图；值大于1.0表示增加对比度；值小于1.0表示降低对比度。|
|hue|Number\|function|0.0|`optional`图层色调。值为0.0表示使用原图。|
|saturation|Number\|function|1.0|`optional`图层饱和度。值为1.0表示使用原图；值大于1.0表示增加饱和度；值小于1.0表示降低饱和度。|
|gamma|Number\|function|1.0|`optional`图层伽马校正。值为1.0表示使用原图。|
|show|Boolean|true|`optional`指定图层是否显示，true表示显示此图层，false表示不显示。|
|splitDirection|Number||`optional`指定影像图层分割方向。0始终显示影像图层，-1在Scene#imagerySplitPosition的左侧显示影像图层，1在Scene#imagerySplitPosition右侧显示影像图层。|
|minimumTerrainLevel|Number||`optional`最小地形细节层次。level 0是最小细节层次。|
|maximumTerrainLevel|Number||`optional`最大地形细节层次。|

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|errorEvent|TileProviderError|当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。|
