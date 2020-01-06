# TiledCacheImageryProvider

The `vc-provider-imagery-tiledcache` component is used to load the TiledCache image service.

## Example

### Load an imagerylayer with TiledCacheImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer" ref="viewerContainer">
      <vc-viewer @ready="ready" fullscreenButton :fullscreenElement="fullscreenElement">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-tiledcache
            url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
            dir="WhiteMap"
          ></vc-provider-imagery-tiledcache>
        </vc-layer-imagery>
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-tiledcache
            url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
            dir="Labels"
          ></vc-provider-imagery-tiledcache>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>contrast</span>
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
          fullscreenElement: document.body
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.cesiumInstance = cesiumInstance
          this.fullscreenElement = this.$refs.viewerContainer
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer" ref="viewerContainer">
    <vc-viewer @ready="ready" fullscreenButton :fullscreenElement="fullscreenElement">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-tiledcache
          url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
          dir="WhiteMap"
        ></vc-provider-imagery-tiledcache>
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-tiledcache
          url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
          dir="Labels"
        ></vc-provider-imagery-tiledcache>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
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
        fullscreenElement: document.body
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
        this.fullscreenElement = this.$refs.viewerContainer
      }
    }
  }
</script>
```

## 属性

| 属性名 | 类型   | 默认值 | 描述                                 |
| ------ | ------ | ------ | ------------------------------------ |
| url    | String |        | `required` TiledCache 影像服务地址。 |
| dir    | String |        | `required` 指定目录。                |
| scales | Array  |        | `optional` 指定地图各级比例尺。      |

---

## 事件

| 事件名       | 参数              | 描述                                                                |
| ------------ | ----------------- | ------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。                 |
| errorEvent   | TileProviderError | 当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider   | 当图层可用时触发, 返回 ImageryProvider 实例。                       |

---
