# BingMapsImageryProvider

`vc-provider-imagery-bingmaps` 组件用于加载 BingMaps REST API 影像服务图层。

## 示例

### 加载 BingMaps REST API 影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-bingmaps :url="url" :bmKey="bmKey" :mapStyle="mapStyle"></vc-provider-imagery-bingmaps>
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
        <md-select v-model="mapStyle" placeholder="请选择服务">
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
          url: 'https://dev.virtualearth.net',
          bmKey: 'AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-', // 可到(https://www.bingmapsportal.com/)申请Key。
          mapStyle: 'Road',
          options: [{
            value: 'Aerial',
            label: 'Aerial'
          }, {
            value: 'AerialWithLabels',
            label: 'AerialWithLabels'
          },{
            value: 'Road',
            label: 'Road'
          }, {
            value: 'CanvasDark',
            label: 'CanvasDark'
          }],
          alpha: 1,
          brightness: 1,
          contrast: 1,
          terrainProvider: null
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
        <vc-provider-imagery-bingmaps :url="url" :bmKey="bmKey" :mapStyle="mapStyle"></vc-provider-imagery-bingmaps>
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
      <md-select v-model="mapStyle" placeholder="请选择服务">
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
        url: 'https://dev.virtualearth.net',
        bmKey: 'AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-', // 可到(https://www.bingmapsportal.com/)申请Key。
        mapStyle: 'Road',
        options: [
          {
            value: 'Aerial',
            label: 'Aerial'
          },
          {
            value: 'AerialWithLabels',
            label: 'AerialWithLabels'
          },
          {
            value: 'Road',
            label: 'Road'
          },
          {
            value: 'CanvasDark',
            label: 'CanvasDark'
          }
        ],
        alpha: 1,
        brightness: 1,
        contrast: 1,
        terrainProvider: null
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
| ----------------- | ---------------- | -------- | ------------------ |
| url | String \| Object | | `required`指定服务地址。 |
| **bmKey** | String | | `optional`指定 BingMaps 地图 API 秘钥，可到[https://www.bingmapsportal.com/](https://www.bingmapsportal.com/)申请 Key。 **注意是bmKey** |
| tileProtocol | String | | `optional`指定地图是 http 还是 https 加载，默认与页面相同。 |
| mapStyle | String | `'Aerial'` | `optional`指定加载的 BingMaps 类型。 |
| culture | String | `''` | `optional`指定服务的描述信息。 |
| ellipsoid | Object | | `optional`参考椭球体 |
| tileDiscardPolicy | Object | | `optional`指定 tile 无效时是否被舍弃。 |

---

- 参考官方文档： **[BingMapsImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html)**

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| errorEvent   | TileProviderError              | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。                |
| readyPromise | ImageryProvider                | 当图层提供者可用时触发, 返回 ImageryProvider 实例。                              |

---
