# MapboxStyleImageryProvider

`vc-provider-imagery-style-mapbox` 组件用于加载由 Mapbox 托管的自定义影像服务图层。

## 示例

### 加载 Mapbox 自定义风格影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery ref="layer" :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-style-mapbox
            ：url="url"
            :username="username"
            :styleId="styleId"
            :accessToken="accessToken"
          ></vc-provider-imagery-style-mapbox>
        </vc-layer-imagery>
      </vc-viewer>
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
          url: 'https://api.mapbox.com/styles/v1',
          username: 'zouyaoji',
          styleId: 'ckd49hwdn0u641irz36komsmt',
          accessToken: 'pk.eyJ1Ijoiem91eWFvamkiLCJhIjoiY2tjdjlha3pzMDIxeDJ1bWxhaWNnaGNkdSJ9.WaGuuQT8YcWTPx3KNQfF7A',
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
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-layer-imagery ref="layer" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-style-mapbox
          ：url="url"
          :username="username"
          :styleId="styleId"
          :accessToken="accessToken"
        ></vc-provider-imagery-style-mapbox>
      </vc-layer-imagery>
    </vc-viewer>
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
        url: 'https://api.mapbox.com/styles/v1',
        username: 'zouyaoji',
        styleId: 'ckd49hwdn0u641irz36komsmt',
        accessToken: 'pk.eyJ1Ijoiem91eWFvamkiLCJhIjoiY2tjdjlha3pzMDIxeDJ1bWxhaWNnaGNkdSJ9.WaGuuQT8YcWTPx3KNQfF7A',
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
| ------------ | ------ | ------------------------------ | --------------------------------------------------- |
| url | String | `'https://api.mapbox.com/style/v1/'` | `optional`指定 Mapbox 服务地址。 |
| username | String | `'mapbox'` | `optional` 指定加载的 mapbox 服务用户名。 |
| styleId | String | | `optional` 指定加载的 mapbox 服务的 StyleID。 |
| accessToken | String | | `optional` 指定加载的 mapbox 服务秘钥。 |
| tilesize | Number | `512` | `optional` 指定加载的 mapbox 服务的瓦片大小。 |
| scaleFactor | Boolean |  | `optional` 指定是否以 @2x 比例渲染。 |
| ellipsoid | Object | | `optional`参考椭球体，没指定的话默认 WGS84。 |
| minimumLevel | Number | `0` | `optional`最小层级。 |
| maximumLevel | Number | | `optional`最大层级。 |
| rectangle | Object | | `optional`图层的矩形范围,此矩形限制了影像可见范围。 **结构：{ west: number, south: number, east: number, north: number }** |
| credit | String | | `optional`服务描述信息。 |

---

- 参考官方文档: **[MapboxStyleImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/MapboxStyleImageryProvider.html)**

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| errorEvent   | TileProviderError              | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。                |
| readyPromise | ImageryProvider                | 当图层提供者准备好时触发。                                                       |

---
