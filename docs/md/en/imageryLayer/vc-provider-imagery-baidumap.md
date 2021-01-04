# BaiduMapImageryProvider

The `vc-provider-imagery-baidumap` component is used for Baidu raster tile map service.

## Example

### Load an imagerylayer with BaiduMapImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" :camera="camera">
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
            },
            {
              value: 'https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png',
              label: '百度矢量瓦片地图-成都'
            }
          ],
          url: 'https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png',
          alpha: 1,
          brightness: 1,
          contrast: 1,
          projectionTransforms: {
            form: 'BD09',
            to: 'WGS84'
          },
          camera: {
            position: {
              x: -1336250.5076601694,
              y: 5333101.760774733,
              z: 3229877.420756886
            },
            heading: 6.259802922203329,
            pitch: -1.5382656190477708,
            roll: 0
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

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" :camera="camera">
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
          },
          {
            value: 'https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png',
            label: '百度矢量瓦片地图-成都'
          }
        ],
        url: 'https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png',
        alpha: 1,
        brightness: 1,
        contrast: 1,
        projectionTransforms: {
          form: 'BD09',
          to: 'WGS84'
        },
        camera: {
          position: {
            x: -1336250.5076601694,
            y: 5333101.760774733,
            z: 3229877.420756886
          },
          heading: 6.259802922203329,
          pitch: -1.5382656190477708,
          roll: 0
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

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ----------------- | ------ | -------- | ------------------------------------------- | --- |
| url | String | `http://{s}.map.bdimg.com/onlinelabel/?qt=tile&styles=pl&x={x}&y={y}&z={z}` | `optional` 指定服务地址。 |
| credit | String\|Object | `''` | `optional` The credit of service |
|minimumLevel|Number|`0`|`optional`The minimum tile level to request, or undefined if there is no minimum.|
|maximumLevel|Number|`20`|`optional`The maximum tile level to request, or undefined if there is no maximum.|
| projectionTransforms | Boolean\|Object | `false` | `optional` Specify the projection transformation parameters. **structure: { from: 'BD09', to: 'WGS84' }** |

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent | TileProviderError | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider | Triggers when the provider is ready for use. |

---
