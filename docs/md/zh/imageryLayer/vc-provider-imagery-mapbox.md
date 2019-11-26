# MapboxImageryProvider

`vc-provider-imagery-mapbox` 组件用于加载由 Mapbox 托管的影像服务图层。

## 示例

### 加载 Mapbox 影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
       <vc-layer-imagery ref="layer" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-mapbox ref="mapbox" :mapId="mapId"></vc-provider-imagery-mapbox>
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
        <md-select v-model="mapId" placeholder="切换影像">
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
          mapId: 'mapbox.streets',
          options: [{
            value: 'mapbox.satellite',
            label: '卫星'
          }, {
            value: 'mapbox.streets',
            label: '地图'
          }],
          alpha: 1,
          brightness: 1,
          contrast: 1
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
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-mapbox :mapId="mapId"></vc-provider-imagery-mapbox>
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
      <md-select v-model="mapId" placeholder="切换影像">
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
        mapId: 'mapbox.streets',
        options: [
          {
            value: 'mapbox.satellite',
            label: '卫星'
          },
          {
            value: 'mapbox.streets',
            label: '地图'
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
| url | String | `'https://api.mapbox.com/v4/'` | `optional`指定 Mapbox 服务地址。 |
| mapId | String | | `required`Mapbox 地图 ID。 |
| accessToken | Object | | `optional`加载的 Mapbox 影像秘钥。 |
| format | String | `'png'` | `optional`请求返回的影像图片格式。 |
| ellipsoid | Object | | `optional`参考椭球体，没指定的话默认 WGS84。 |
| minimumLevel | Number | `0` | `optional`最小层级。 |
| maximumLevel | Number | | `optional`最大层级。 |
| rectangle | Object | | `optional`图层的矩形范围,此矩形限制了影像可见范围。 **结构：{ west: number, south: number, east: number, north: number }** |
| credit | String | | `optional`服务描述信息。 |

---

- 参考官方文档: **[MapboxImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/MapboxImageryProvider.html)**

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| errorEvent   | TileProviderError              | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。                |
| readyPromise | ImageryProvider                | 当图层提供者准备好时触发。                                                       |

---
