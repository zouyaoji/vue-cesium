## VcProviderImageryArcgisMapserver

加载 ArcGIS MapServer 提供的影像瓦片服务，相当于初始化一个 `Cesium.ArcGisMapServerImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

### 基础用法

`vc-provider-imagery-arcgis-mapserver` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由 ArcGIS MapServer 提供的影像瓦片服务图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <!-- https://services.arcgisonline.com/arcgis/rest/services -->
      <!-- https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer -->
      <!-- https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer -->
      <vc-provider-imagery-arcgis-mapserver ref="provider"></vc-provider-imagery-arcgis-mapserver>
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

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------------- | ------- | -------------------- |--|
| url | String | `'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'` | `optional` 指定服务地址。 |
| token | String | | `optional` 指定 ArcGIS MapServer 影像服务认证 Token。 |
| tileDiscardPolicy | Object | | `optional` 指定无效瓦片丢弃策略。 |
| usePreCachedTilesIfAvailable | Boolean | `true` | `optional` 如果为 true，则使用服务器的预缓存切片（如果可用）。 |
| layers | String | | `optional` 指定要显示的层，用逗号分开，如果为 undefined 则显示全部。 |
| enablePickFeatures | Boolean | `true` | `optional` 指定是否拾取对象，在 infobox 弹出信息。 |
| rectangle | Object | | `optional` 指定图层的矩形范围，此矩形限制了影像可见范围。 |
| tilingScheme | Object | | `optional` 指定将影像瓦片展开到地球的投影方案。 |
| ellipsoid | Object | | `optional` 指定参考椭球体。 |
| tileWidth | Number | `256` | `optional` 指定每一张瓦片的像素宽度。 |
| tileHeight | Number | `256` | `optional`指定每一张瓦片的像素高度。 |
| maximumLevel | Number | | `optional` 指定瓦片加载的最大层级。 |

:::tip

提示：`rectangle` 属性除了可传 `Cesium.Rectangle` 还可以传 `PlainObject(RectangleInDegreeOption|Cartesian4Option`) 和 `Array<number>` (度)

:::

:::tipflex

```js
// RectangleInDegreeOption
{
  west: number,
  south: number,
  east: number,
  north: number
}
```

```js
// Cartesian4Option
{
  x: number,
  y: number,
  z: number,
  w: number
}
```

```js
// Array<number> in degrees
;[number, number, number, number]
```

:::

### 事件

| 事件名       | 参数                               | 描述                                                              |
| ------------ | ---------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | Vue Instance                       | 对象加载前触发。                                                  |
| ready        | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。                                              |
| destroyed    | Vue Instance                       | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                  | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                    | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

### 参考

- 官方文档： **[ArcGisMapServerImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGisMapServerImageryProvider.html)**
