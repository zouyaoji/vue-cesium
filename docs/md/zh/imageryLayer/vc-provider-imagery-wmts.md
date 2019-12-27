# WebMapTileServiceImageryProvider

`vc-provider-imagery-wmts` 组件用于加载 WMTS(1.0.0) 影像服务图层。

## 示例

### 加载 WMTS 影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @layerAdded="layerAdded">
        <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-wmts
            :url="urlText"
            :wmtsStyle="style"
            :tileMatrixSetID="tileMatrixSetID"
            :credit="credit"
            :subdomains="subdomains"
            :tilingScheme="tilingScheme"
            :tileMatrixLabels="tileMatrixLabels"
            :token="token"
            :layer="layer2"
          ></vc-provider-imagery-wmts>
        </vc-layer-imagery>
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-wmts
            :url="url"
            :wmtsStyle="style"
            :tileMatrixSetID="tileMatrixSetID"
            :credit="credit"
            :subdomains="subdomains"
            :tilingScheme="tilingScheme"
            :tileMatrixLabels="tileMatrixLabels"
            :token="token"
            :layer="layer1"
          ></vc-provider-imagery-wmts>
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
          layer1: 'img',
          layer2: 'cia',
          url:
            'https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
          urlText:
            'https://{s}.tianditu.gov.cn/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
          style: 'default',
          tileMatrixSetID: 'c',
          tileMatrixLabels: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19'
          ],
          credit: '天地图WMTS服务',
          subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
          tilingScheme: {},
          options: [
            {
              label: 'image',
              value:
                'https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
            },
            {
              label: 'vector',
              value:
                'https://{s}.tianditu.gov.cn/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
            }
          ],
          alpha: 1,
          brightness: 1,
          contrast: 1,
          token: '436ce7e50d27eede2f2929307e6b33c0'
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.cesiumInstance = cesiumInstance
          this.tilingScheme = new Cesium.GeographicTilingScheme()
        },
        layerAdded() {
          if (this.$refs.layerText.imageryLayer) {
            const { viewer } = this.cesiumInstance
            viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)
          }
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" @layerAdded="layerAdded">
      <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-wmts
          :url="urlText"
          :wmtsStyle="style"
          :tileMatrixSetID="tileMatrixSetID"
          :credit="credit"
          :subdomains="subdomains"
          :tilingScheme="tilingScheme"
          :tileMatrixLabels="tileMatrixLabels"
          :token="token"
          :layer="layer2"
        ></vc-provider-imagery-wmts>
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-wmts
          :url="url"
          :wmtsStyle="style"
          :tileMatrixSetID="tileMatrixSetID"
          :credit="credit"
          :subdomains="subdomains"
          :tilingScheme="tilingScheme"
          :tileMatrixLabels="tileMatrixLabels"
          :token="token"
          :layer="layer1"
        ></vc-provider-imagery-wmts>
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
        layer1: 'img',
        layer2: 'cia',
        url:
          'https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
        urlText:
          'https://{s}.tianditu.gov.cn/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
        style: 'default',
        tileMatrixSetID: 'c',
        tileMatrixLabels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19'
        ],
        credit: '天地图WMTS服务',
        subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
        tilingScheme: {},
        options: [
          {
            label: 'image',
            value:
              'https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
          },
          {
            label: 'vector',
            value:
              'https://{s}.tianditu.gov.cn/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
          }
        ],
        alpha: 1,
        brightness: 1,
        contrast: 1,
        token: '436ce7e50d27eede2f2929307e6b33c0'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
        this.tilingScheme = new Cesium.GeographicTilingScheme()
      },
      layerAdded() {
        if (this.$refs.layerText.imageryLayer) {
          const { viewer } = this.cesiumInstance
          viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)
        }
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------- | ---------------------- | ------------------- | ---------------------------------------------- |
| url | String\|Object | | `required` 指定 wmts 服务地址。 |
| format | String | `'image/jpeg'` | `optional` 指定服务的 MIME 类型。 |
| layer | String | | `required` 指定 WMTS 请求图层名称。 |
| wmtsStyle | String | | `required` 指定 WMTS 请求样式名称。 |
| tileMatrixSetID | String | | `required` 指定 WMTS 请求的 TileMatrixSet 的标识符。 |
| tileMatrixLabels | Array | | `optional` 指定 TileMatrix 中用于 WMTS 请求的标识符列表，每个 TileMatrix 级别一个。 |
| clock | Clock | | `optional` 确定时间维度值时使用的 Clock 实例。 指定 options.times 时必需。 |
| times | TimeIntervalCollection | | `optional` TimeIntervalCollection，其 data 属性是一个包含时间动态维度及其值的对象。 |
| dimensions | Object | | `optional` 指定包含静态尺寸及其值的对象。 |
| tileWidth | Number | `256` | `optional` 像元宽度。 |
| tileHeight | Number | `256` | `optional` 像元高度。 |
| tilingScheme | TilingScheme | | `optional` 指定切片方案。 |
| rectangle | Object | | `optional` 图层的矩形范围,此矩形限制了影像可见范围。 **结构：{ west: number, south: number, east: number, north: number }** |
| minimumLevel | Number | `0` | `optional` 图层可以显示的最小层级。 |
| maximumLevel | Number | | `optional` 图层可以显示的最大层级，undefined 表示没有限制。 |
| ellipsoid | Ellipsoid | | `optional` 参考椭球体，没指定默认 WGS84 椭球。 |
| credit | Credit\| String | | `optional` 数据源描述信息。 |
| subdomains | String \| Array | `'abc'` | `optional` 指定 URL 模板中{s}占位符的子域。 如果此参数是单个字符串，则字符串中的每个字符都是子域。 如果是数组，则数组中的每个元素都是子域。 |
| token | String | | `optional` 指定服务 token。 目前只针对天地图服务。 |

---

- 参考官方文档： **[WebMapTileServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html)**

## 事件

| 事件名       | 参数                           | 描述                                                                             |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| errorEvent   | TileProviderError              | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。                |
| readyPromise | ImageryProvider                | 当图层提供者可用时触发, 返回 ImageryProvider 实例。                              |

---
