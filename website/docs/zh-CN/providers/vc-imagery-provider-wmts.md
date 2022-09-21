## VcImageryProviderWmts

用于加载 OGC 标准 [WMTS 1.0.0](http://www.opengeospatial.org/standards/wmts) 影像服务，相当于初始化一个 `Cesium.WebMapTileServiceImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-wmts` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由 ArcGIS MapServer 提供的 WMTS 影像瓦片服务图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <!-- https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/1.0.0/WMTSCapabilities.xml -->
      <vc-imagery-provider-wmts
        ref="provider"
        url="https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg"
        layer="World_Street_Map"
        format="image/jpeg"
        wmtsStyle="default"
        tileMatrixSetID="default028mm"
      ></vc-imagery-provider-wmts>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
    </el-row>
    <el-row>
      <el-col>
        <div class="block">
          <span class="demonstration">透明度</span>
          <el-slider v-model="alpha" :min="0" :max="1" :step="0.01"></el-slider>
          <span class="demonstration">亮度</span>
          <el-slider v-model="brightness" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">对比度</span>
          <el-slider v-model="contrast" :min="0" :max="5" :step="0.01"></el-slider>
        </div>
      </el-col>
    </el-row>
  </div>
</el-row>

<script>
  import { ref, getCurrentInstance } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const provider = ref(null)
      const alpha = ref(1)
      const brightness = ref(1)
      const contrast = ref(1)
      let viewer = undefined
      // methods
      const unload = () => {
        provider.value.unload()
      }
      const reload = () => {
        provider.value.reload()
      }
      const load = () => {
        provider.value.load()
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast
      }
    }
  }
</script>
```

:::

### 属性

| 属性名           | 类型                   | 默认值         | 描述                                                                                |
| ---------------- | ---------------------- | -------------- | ----------------------------------------------------------------------------------- |
| url              | string\|Object         |                | `required` 指定 wmts 服务地址。                                                     |
| format           | string                 | `'image/jpeg'` | `optional` 指定服务的 MIME 类型。                                                   |
| layer            | string                 |                | `required` 指定 WMTS 请求图层名称。                                                 |
| wmtsStyle        | string                 |                | `required` 指定 WMTS 请求样式名称。                                                 |
| tileMatrixSetID  | string                 |                | `required` 指定 WMTS 请求的 TileMatrixSet 的标识符。                                |
| tileMatrixLabels | Array                  |                | `optional` 指定 TileMatrix 中用于 WMTS 请求的标识符列表，每个 TileMatrix 级别一个。 |
| clock            | Clock                  |                | `optional` 确定时间维度值时使用的 Clock 实例。 指定 options.times 时必需。          |
| times            | TimeIntervalCollection |                | `optional` TimeIntervalCollection，其 data 属性是一个包含时间动态维度及其值的对象。 |
| dimensions   | VcPosition                 |                | `optional` 指定包含静态尺寸及其值的对象。                                           |
| tileWidth        | number                 | `256`          | `optional` 像元宽度。                                                               |
| tileHeight       | number                 | `256`          | `optional` 像元高度。                                                               |
| tilingScheme     | TilingScheme           |                | `optional` 指定切片方案。                                                           |
| rectangle        | Object\|Array          |                | `optional` 图层的矩形范围,此矩形限制了影像可见范围。                                |
| minimumLevel     | number                 | `0`            | `optional` 图层可以显示的最小层级。                                                 |
| maximumLevel     | number                 |                | `optional` 图层可以显示的最大层级，undefined 表示没有限制。                         |
| ellipsoid        | Ellipsoid              |                | `optional` 参考椭球体，没指定默认 WGS84 椭球。                                      |
| credit           | Credit\| string        |                | `optional` 数据源描述信息。                                                         |
| subdomains       | string \| Array        | `'abc'`        | `optional` 指定 URL 模板中{s}占位符的子域。                                         |

### 事件

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 官方文档： **[WebMapTileServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html)**
