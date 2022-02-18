## VcImageryProviderUrltemplate

通过一个约定的 URL 模板来请求加载影像图层，相当于初始化一个 `Cesium.UrlTemplateImageryProvider` 实例。比如加载的高德，腾讯等影像瓦片服务，URL 都是一个固定的规范，都可以通过该组件轻松实现。并且支持对高德等火星坐标系底图 `纠偏`。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-urltemplate` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加高德地图影像瓦片图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-imagery-provider-urltemplate ref="provider" :projectionTransforms="projectionTransforms" :url="url"></vc-imagery-provider-urltemplate>
    </vc-layer-imagery>
    <!-- 用于测试 projectionTransforms  -->
    <vc-layer-imagery :sortOrder="5">
      <vc-imagery-provider-tianditu mapStyle="img_w" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
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
          <span class="demonstration">切换地图</span>
          <el-select v-model="url" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
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
      const projectionTransforms = ref(null)
      projectionTransforms.value = {
        from: 'GCJ02',
        to: 'WGS84'
      }
      const options = [
        {
          value: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
          label: '高德影像地图服务'
        },
        {
          value: 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
          label: '高德矢量地图服务'
        },
        {
          value: 'https://www.songluck.com/raster/osm_chengdu/{z}/{x}/{y}.png',
          label: 'mapbox 栅格瓦片地图'
        }
      ]
      const url = ref('https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}')
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
        contrast,
        projectionTransforms,
        url,
        options
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                | 类型            | 默认值  | 描述                                                                                         |
| --------------------- | --------------- | ------- | -------------------------------------------------------------------------------------------- |
| url                   | String\|Object  |         | `required` 指定服务地址。                                                                    |
| pickFeaturesUrl       | String\|Object  |         | `optional` 指定拾取对象属性的 url，如果无效，会返回 undefined。                              |
| urlSchemeZeroPadding  | Object          |         | `optional` 指定每个瓦片中心的偏移值。                                                        |
| subdomains            | String          | `'abc'` | `optional` 指定服务的轮询子域名。                                                            |
| credit                | String          | `''`    | `optional` 指定服务的描述信息                                                                |
| minimumLevel          | Number          | `0`     | `optional` 最小层级。                                                                        |
| maximumLevel          | Number          |         | `optional` 最大层级。                                                                        |
| rectangle             | Object\|Array   |         | `optional` 图层的矩形范围,此矩形限制了影像可见范围。                                         |
| tilingScheme          | Object          |         | `optional` 指定服务的投影参数。                                                              |
| ellipsoid             | Object          |         | `optional` 参考椭球体。                                                                      |
| tileWidth             | Number          | `256`   | `optional` 像元宽度。                                                                        |
| tileHeight            | Number          | `256`   | `optional` 像元高度。                                                                        |
| hasAlphaChannel       | Boolean         | `true`  | `optional` 设置为 true 表示图层包含 alpha 透明通道，反之没有。                               |
| getFeatureInfoFormats | Array           |         | `optional` 格式化拾取对象属性时提示信息位置，该项要设置 pickFeaturesUrl 且起作用时才起作用。 |
| enablePickFeatures    | Boolean         | `true`  | `optional` 是否开启图层拾取。                                                                |
| customTags            | Object          |         | `optional` 替换 url 模板中的自定义关键字。                                                   |
| projectionTransforms  | Boolean\|Object | `false` | `optional` 指定纠偏参数。                                                                    |

### 事件

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 官方文档： **[UrlTemplateImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html)**
