# BaiduMapImageryProvider

`vc-provider-imagery-baidumap` 组件用于百度栅格瓦片地图服务。

## 示例

### 加载百度地图影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
          <vc-provider-imagery-baidumap :url="url" :projectionTransforms="projectionTransforms"></vc-provider-imagery-baidumap>
        </vc-layer-imagery>
        <vc-layer-imagery :sortOrder="5">
          <vc-provider-imagery-tianditu mapStyle="img_w" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
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
        <md-select v-model="url" placeholder="请选择地图服务类型">
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
              value: 'http://{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
              label: '百度矢量瓦片地图'
            },
            {
              value: 'http://shangetu1.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
              label: '百度影像瓦片地图'
            },
            {
              value: 'http://api0.map.bdimg.com/customimage/tile?=&x={x}&y={y}&z={z}&scale=1&customid=midnight',
              label: '百度矢量瓦片地图-暗色'
            }
          ],
          url: 'http://{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
          alpha: 1,
          brightness: 1,
          contrast: 1,
          projectionTransforms: {
            form: 'BD09',
            to: 'WGS84'
          }
        }
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.Cesium = Cesium
          this.viewer = viewer
          window.vm = this
          window.viewer = viewer
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
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
        <vc-provider-imagery-baidumap :url="url" :projectionTransforms="projectionTransforms"></vc-provider-imagery-baidumap>
      </vc-layer-imagery>
      <vc-layer-imagery :sortOrder="5">
        <vc-provider-imagery-tianditu mapStyle="img_w" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
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
      <md-select v-model="url" placeholder="请选择地图服务类型">
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
            value: 'http://{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
            label: '百度矢量瓦片地图'
          },
          {
            value: 'http://shangetu1.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
            label: '百度影像瓦片地图'
          },
          {
            value: 'http://api0.map.bdimg.com/customimage/tile?=&x={x}&y={y}&z={z}&scale=1&customid=midnight',
            label: '百度矢量瓦片地图-暗色'
          }
        ],
        url: 'http://{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
        alpha: 1,
        brightness: 1,
        contrast: 1,
        projectionTransforms: {
          form: 'BD09',
          to: 'WGS84'
        }
      }
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.Cesium = Cesium
        this.viewer = viewer
        window.vm = this
        window.viewer = viewer
      }
    }
  }
</script>
```

## 属性

| 属性名               | 类型            | 默认值                         | 描述                                                                  |
| -------------------- | --------------- | ------------------------------ | --------------------------------------------------------------------- |
| url                  | String          | `http://{s}.map.bdimg.com/onlinelabel/?qt=tile&styles=pl&x={x}&y={y}&z={z}` | `optional` 指定服务地址。 |
| credit               | String\|Object  | `''`                           | `optional` 服务版权描述信息。                                         |
| minimumLevel         | Number          | `0`                            | `optional` 最小层级。                                                 |
| maximumLevel         | Number          | `18`                           | `optional` 最大层级。                                                 |
| projectionTransforms | Boolean\|Object | `false`                        | `optional` 指定投影变换参数。**结构： { from: 'BD09', to: 'WGS84' }** |

## 事件

| 事件名       | 参数              | 描述                                                                |
| ------------ | ----------------- | ------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。                 |
| errorEvent   | TileProviderError | 当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider   | 当图层可用时触发, 返回 ImageryProvider 实例。                       |

---
