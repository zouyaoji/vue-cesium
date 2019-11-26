# ArcGisMapServerImageryProvider

`vc-provider-imagery-arcgis-mapserver` 组件用于加载 ArcGIS MapServer 影像服务图层。

## 示例

### 加载 ArcGIS MapServer 影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
       <vc-layer-imagery ref="layer" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-arcgis-mapserver ref="arcgis" :url="url" :maximumLevel="maximumLevel"></vc-provider-imagery-arcgis-mapserver>
       </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
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
          contrast: 1,
          maximumLevel: 20
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          // ...
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <arcgis-mapserver-imagery-provider :url="url"></arcgis-mapserver-imagery-provider>
      </imagery-layer>
    </vc-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>切换服务</span>
      <md-select v-model="url" placeholder="请选择服务">
        <md-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
            label: 'World_Imagery'
          },
          {
            value: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
            label: 'World_Street_Map'
          }
        ],
        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        // ...
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------| ---- | ------ | ----------------- |
| url | String | | `required`ArcGIS 影像服务地址。 |
| token | String | | `optional`ArcGIS 影像服务认证 Token。 |
| tileDiscardPolicy | Object | | `optional`The policy that determines if a tile is invalid and should be discarded. |
| usePreCachedTilesIfAvailable | Boolean | `true` | `optional`If true, the server's pre-cached tiles are used if they are available. If false, any pre-cached tiles are ignored and the 'export' service is used. |
| layers | String | | `optional` A comma-separated list of the layers to show, or undefined if all layers should be shown. |
| enablePickFeatures | Boolean | `true` | `optional`是否拾取对象，在 infobox 弹出信息。 |
| rectangle | Object | | `optional` 图层的矩形范围,此矩形限制了影像可见范围。 **结构：{ west: number, south: number, east: number, north: number }** |
| tilingScheme | Object | | `optional`The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server. |
| ellipsoid | Object |  | `optional`参考椭球体 |
| tileWidth | Number | `256` | `optional`像元宽度。 |
| tileHeight | Number | `256` | `optional`像元高度。 |
| maximumLevel | Number | | `optional`最大层级。 |

---

- 参考官方文档： **[ArcGisMapServerImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGisMapServerImageryProvider.html)**

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| errorEvent   | TileProviderError              | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。                |
| readyPromise | ImageryProvider                | 当图层提供者可用时触发, 返回 ImageryProvider 实例。                              |

---
