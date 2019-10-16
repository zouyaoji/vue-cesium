# TileMapService 影像 Provider

`tilemapservice-imagery-provider` 可加载由 [MapTiler](https://www.maptiler.com)，[GDAL2Tiles](http://www.klokan.cz/projects/gdal2tiles/) 等生成的瓦片影像。

## 示例

### 添加 TileMapService 影像到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <tilemapservice-imagery-provider
            :url="url"
            :rectangle="rectangle"
            :maximumLevel="4"
            @readyPromise="imageryReady"
          ></tilemapservice-imagery-provider>
        </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          alpha: 1,
          brightness: 1,
          contrast: 1,
          url: './statics/SampleData/images/cesium_maptiler/Cesium_Logo_Color',
          rectangle: { west: -120, south: 20, east: -60, north: 40 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.viewer = viewer
          // ...
        },
        imageryReady(imageryProvider) {
          this.viewer.camera.flyTo({ destination: imageryProvider.rectangle })
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
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <tilemapservice-imagery-provider
          :url="url"
          :rectangle="rectangle"
          :maximumLevel="4"
          @readyPromise="imageryReady"
        ></tilemapservice-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        alpha: 1,
        brightness: 1,
        contrast: 1,
        url: './statics/SampleData/images/cesium_maptiler/Cesium_Logo_Color',
        rectangle: { west: -120, south: 20, east: -60, north: 40 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.viewer = viewer
        // ...
      },
      imageryReady(imageryProvider) {
        this.viewer.camera.flyTo({ destination: imageryProvider.rectangle })
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | -------- | ------- | ------------------------------------- |
| ----------------- | ---------------- | -------- | ----------------------------------------------------------------- |
| url | String\|Object | `'.'` | `optional` 指定图片服务地址。 |
| fileExtension | String | `'png'` | `optional` 指定图片服务影像扩展名。 |
| credit | String\|Object | `''` | `optional` 指定服务版权描述信息。 |
| minimumLevel | Number | `0` | `optional` 指定服务最小层级。 |
| maximumLevel | Number | | `optional` 指定服务最大层级。 |
| rectangle | Object | | `optional` 指定影像加载的矩形范围。 |
| tilingScheme | Object | | `optional` 指定服务坐标系参数。 |
| ellipsoid | Object | | `optional` 指定参考椭球体。默认WGS84椭球体。 |
| tileWidth | Number | `256` | `optional` 指定图像瓦片宽度。 |
| tileHeight | Number | `256` | `optional` 指定图像瓦片高度。|
| flipXY | Boolean | | `optional` 较旧版本的gdal2tiles.py在tilemapresource.xml中翻转了X和Y值。 指定此选项将执行相同操作，允许加载这些不正确的tileset。 |

- 官方文档 [createTileMapServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/createTileMapServiceImageryProvider.html)

## 事件

| 事件名       | 参数              | 描述                                                                |
| ------------ | ----------------- | ------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。                 |
| errorEvent   | TileProviderError | 当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider   | 当图层可用时触发, 返回 ImageryProvider 实例。                       |
