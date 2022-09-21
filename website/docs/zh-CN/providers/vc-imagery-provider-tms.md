## VcImageryProviderTms

用于加载由 [MapTiler](https://www.maptiler.com), [GDAL2Tiles](http://www.klokan.cz/projects/gdal2tiles/) 等生成的影像瓦片服务，相当于初始化一个 `Cesium.TileMapServiceImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-imagery-provider-tms` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加 `Cesium_Logo_Color` 瓦片服务图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-tms
        ref="provider"
        url="https://zouyaoji.top/vue-cesium/SampleData/images/cesium_maptiler/Cesium_Logo_Color"
        :rectangle="[-120, 20, -60, 40]"
        :maximumLevel="4"
        @ready-promise="onImageryProviderReady"
      ></vc-imagery-provider-tms>
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
      const onImageryProviderReady = imageryProvider => {
        viewer.camera.flyTo({ destination: imageryProvider.rectangle })
      }
      const onViewerReady = cesiumInstance => {
        viewer = cesiumInstance.viewer
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast,
        onImageryProviderReady,
        onViewerReady
      }
    }
  }
</script>
```

:::

### 属性

| 属性名               | 类型            | 默认值  | 描述                                           |
| -------------------- | --------------- | ------- | ---------------------------------------------- |
| url                  | string\|Object  | `'.'`   | `optional` 指定图片服务地址。                  |
| fileExtension        | string          | `'png'` | `optional` 指定图片服务影像扩展名。            |
| credit               | string\|Object  | `''`    | `optional` 指定服务版权描述信息。              |
| minimumLevel         | number          | `0`     | `optional` 指定服务最小层级。                  |
| maximumLevel         | number          |         | `optional` 指定服务最大层级。                  |
| rectangle | VcRectangle\|Array   |         | `optional` 指定影像加载的矩形范围。            |
| tilingScheme | Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme          |         | `optional` 指定服务坐标系参数。                |
| ellipsoid      | Cesium.Ellipsoid          |         | `optional` 指定参考椭球体。默认 WGS84 椭球体。 |
| tileWidth            | number          | `256`   | `optional` 指定图像瓦片宽度。                  |
| tileHeight           | number          | `256`   | `optional` 指定图像瓦片高度。                  |
| flipXY               | boolean         |         | `optional` 指定是否翻转 XY                     |
| projectionTransforms | boolean\|Object | `false` | `optional` 指定投影变换参数。                  |

### 事件

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 官方文档： **[TileMapServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/TileMapServiceImageryProvider.html)**
