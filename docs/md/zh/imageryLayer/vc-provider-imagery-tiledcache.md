# TiledCacheImageryProvider

`vc-provider-imagery-tiledcache` 组件用于加载 TiledCache 影像服务。

## 示例

### 加载 TiledCache 影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer" ref="viewerContainer">
      <vc-viewer @ready="ready" fullscreenButton :fullscreenElement="fullscreenElement">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-tiledcache
            url="http://39.105.223.250:8223/TiledCacheService/TiledCacheServlet"
            dir="WhiteMap"
          ></vc-provider-imagery-tiledcache>
        </vc-layer-imagery>
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-tiledcache
            url="http://39.105.223.250:8223/TiledCacheService/TiledCacheServlet"
            dir="Labels"
          ></vc-provider-imagery-tiledcache>
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
        },
        readyPromise() {
           const { Cesium, viewer } = this.cesiumInstance
          viewer.zoomTo(this.$refs.imageryProvider.providerContainer.imageryLayer)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-supermap
          ref="imageryProvider"
          :url="url"
          @ready="ready"
          @readyPromise="readyPromise"
        ></vc-provider-imagery-supermap>
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
            value: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
            label: 'sichuan'
          },
          {
            value: 'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',
            label: 'google'
          }
        ],
        url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
      },
      readyPromise() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.zoomTo(this.$refs.imageryProvider.providerContainer.imageryLayer)
      }
    }
  }
</script>
```

## 属性

| 属性名       | 类型   | 默认值 | 描述                                   |
| ------------ | ------ | ------ | -------------------------------------- |
| url          | String |        | `required` 超图 iserver 影像服务地址。 |
| name         | String |        | `optional` 影像图层名称。              |
| minimumLevel | Number | `0`    | `optional` 最小层级。                  |
| maximumLevel | Number | `20`   | `optional` 最大层级。                  |

---

- 参考超图官方文档: **[SuperMapImageryProvider](http://support.supermap.com.cn:8090/webgl/Build/Documentation/SuperMapImageryProvider.html)**

## 事件

| 事件名       | 参数              | 描述                                                                |
| ------------ | ----------------- | ------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。                 |
| errorEvent   | TileProviderError | 当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider   | 当图层可用时触发, 返回 ImageryProvider 实例。                       |

---
