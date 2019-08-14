# OpenStreetMapImageryProvider

`openstreetmap-imagery-provider`加载 openstreetmap 地图影像。

## 示例

### 添加 OpenStreetMap 到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <openstreetmap-imagery-provider :url="url"></openstreetmap-imagery-provider>
        </imagery-layer>
      </cesium-viewer>
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
    <cesium-viewer @ready="ready">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <openstreetmap-imagery-provider :url="url"></openstreetmap-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
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
| ellipsoid | String | | `optional`参考椭球体，没指定的话默认 WGS84。 |
| credit | String | `'MapQuest, Open Street Map and contributors, CC-BY-SA'` | `optional`服务描述信息。 |

---

- 官方文档 [createOpenStreetMapImageryProvider](https://cesiumjs.org/Cesium/Build/Documentation/createOpenStreetMapImageryProvider.html)

## 事件

| 事件名     | 参数              | 描述                                                                |
| ---------- | ----------------- | ------------------------------------------------------------------- |
| ready      | {Cesium, viewer}  | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。                 |
| errorEvent | TileProviderError | 当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
