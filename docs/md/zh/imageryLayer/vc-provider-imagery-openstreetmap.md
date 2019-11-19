# OpenStreetMapImageryProvider

`vc-provider-imagery-openstreetmap` 组件用于加载由 OpenStreetMap 托管的影像服务图层

## 示例

### 加载 OpenStreetMap 影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-openstreetmap :url="url"></vc-provider-imagery-openstreetmap>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>切换服务</span>
        <md-select v-model="url" placeholder="切换影像">
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
          url: 'https://a.tile.openstreetmap.org',
          options: [{
            value: 'https://a.tile.openstreetmap.org',
            label: 'openstreetmap1'
          }, {
            value: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
            label: 'openstreetmap2'
          }],
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          // ..
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
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-openstreetmap :url="url"></vc-provider-imagery-openstreetmap>
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
      <md-select v-model="url" placeholder="切换影像">
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
        url: 'https://a.tile.openstreetmap.org',
        options: [
          {
            value: 'https://a.tile.openstreetmap.org',
            label: 'openstreetmap1'
          },
          {
            value: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
            label: 'openstreetmap2'
          }
        ],
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        // ..
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------- | ------ | ------------------------------------------------------ | ---------------------------------------------------- |
| url | String | `'https://a.tile.openstreetmap.org'` | `optional`指定 OpenStreetMap 服务地址。 |
| fileExtension | String | `'png'` | `required`指定图片格式。 |
| rectangle | Object | | `optional`图层的矩形范围，此矩形限制了影像可见范围。 **structure: { west: number, south: number, east: number, north: number }** |
| minimumLevel | Number | `0` | `optional`最小层级。 |
| maximumLevel | Number | | `optional`最大层级。 |
| ellipsoid | Object | | `optional`参考椭球体，没指定的话默认 WGS84。 |
| credit | String | `'MapQuest, Open Street Map and contributors, CC-BY-SA'` | `optional`服务描述信息。 |

---

- 参考官方文档： [OpenStreetMapImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/OpenStreetMapImageryProvider.html)

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| errorEvent   | TileProviderError              | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。                |
| readyPromise | ImageryProvider                | 当图层提供者准备好时触发。                                                       |

---
