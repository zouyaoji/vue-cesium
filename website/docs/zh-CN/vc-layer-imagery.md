# VcLayerImagery

加载影像图层，相当于初始化一个 `Cesium.ImageryLayer` 实例。

需要作为 `vc-viewer` 的子组件才能正常加载。可以直接指定 `vc-layer-imagery` 的 `imageryProvider` 属性，也用 VueCesium 提供的 `vc-provider-xxx` 系列组件作为 `vc-layer-imagery` 子组件挂载各个 `imageryProvider`，但一个影像图层只能挂载一个 `provider`。

## 基础用法

影像图层组件的基础用法。

:::demo 使用 `vc-layer-imagery` 组件在三维球上添加 `OpenStreetMapImageryProvider` 影像服务瓦片图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-layer-imagery ref="layer" :imageryProvider="imageryProvider" :alpha="alpha" :brightness="brightness" :contrast="contrast"></vc-layer-imagery>
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
          <el-slider v-model="brightness" :min="0" :max="3" :step="0.01"></el-slider>
          <span class="demonstration">对比度</span>
          <el-slider v-model="contrast" :min="0" :max="3" :step="0.01"></el-slider>
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
      const imageryProvider = ref(null)
      const layer = ref(null)
      const alpha = ref(1)
      const brightness = ref(1)
      const contrast = ref(1)
      // methods
      const onViewerReady = ({ Cesium, viewer }) => {
        imageryProvider.value = new Cesium.OpenStreetMapImageryProvider({
          url: 'https://a.tile.openstreetmap.org/'
        })
      }
      const unload = () => {
        layer.value.unload()
      }
      const reload = () => {
        layer.value.reload()
      }
      const load = () => {
        layer.value.load()
      }
      return {
        imageryProvider,
        layer,
        onViewerReady,
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

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| -------------- | ----------------------- | ------ | --------------------------------------- |---|
| sortOrder | Number | |`optional` 指定图层相对顺序。|
| imageryProvider | Object | | `optional` 指定影像图层的瓦片提供方式。 |
| rectangle | Rectangle | `imageryProvider.rectangle` | `optional` 指定影像图层的矩形范围，此矩形限制了影像可见范围。 |
| alpha | Number\|function | `1.0` | `optional` 指定影像图层透明度值，取值范围为 0.0~1.0。 |
| nightAlpha | Number\|function | `1.0` | `optional` 指定影像图层透明度值，取值范围为 0.0~1.0。 |
| dayAlpha | Number\|function | `1.0` | `optional` 指定影像图层透明度值，取值范围为 0.0~1.0。 |
| brightness | Number\|function | `1.0`| `optional` 指定影像图层亮度值。值为 1.0 表示使用原图；值大于 1.0 时图像将变亮；值小于 1.0 时图像将变暗。 |
| contrast | Number\|function | `1.0` | `optional` 指定影像图层对比度。值为 1.0 表示使用原图；值大于 1.0 表示增加对比度；值小于 1.0 表示降低对比度。 |
| hue | Number\|function | `0.0` | `optional` 指定影像图层色调。值为 0.0 表示使用原图。 |
| saturation | Number\|function | `1.0` | `optional` 指定影像图层饱和度。值为 1.0 表示使用原图；值大于 1.0 表示增加饱和度；值小于 1.0 表示降低饱和度。 |
| gamma | Number\|function | `1.0` | `optional` 指定影像图层伽马校正。值为 1.0 表示使用原图。 |
| splitDirection | Number | `0` | `optional` 指定影像图层分割方向。 **LEFT: -1, NONE: 0, RIGHT: 1**|-1/0/1|
| minificationFilter | Number | `9729` | `optional` 指定影像图层纹理缩小过滤器。 **NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986**|9728/9729/9984/9985/9986|
| magnificationFilter | Number | `9729` | `optional` 指定影像图层纹理缩小过滤器。**NEAREST: 9728, LINEAR: 9729** |9728/9729|
| show | Boolean | `true` | `optional` 指定图层是否显示，如果显示图层，则为 true; 否则，false |
| maximumAnisotropy | Number | | `optional` 指定纹理过滤的最大各向异性级别。 如果未指定此参数，则将使用 WebGL 堆栈支持的最大各向异性。 较大的值使图像在水平视图中看起来更好。 |
| minimumTerrainLevel | Number | | `optional` 指定最小地形细节层次。level 0 是最小细节层次。 |
| maximumTerrainLevel | Number | | `optional` 指定最大地形细节层次。 |
| cutoutRectangle | Rectangle | | `optional` 指定裁剪此影像图层的矩形范围。 |
| colorToAlpha | Object | |`optional` 指定透明时的颜色。|
| colorToAlphaThreshold | Number | `0.004` |`optional` 指定颜色到 alpha 的阈值。|

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

## 事件

| 事件名     | 参数                               | 描述               |
| ---------- | ---------------------------------- | ------------------ |
| beforeLoad | Vue Instance                       | 对象加载前触发。   |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载完成触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。   |

## 插槽

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载 vc-layer-imagery 子组件。 | vc-provider-imagery-arcgis/vc-provider-imagery-baidumap/vc-provider-imagery-bingmaps/vc-provider-imagery-grid/vc-provider-imagery-ion/vc-provider-imagery-mapbox/vc-provider-imagery-osm/vc-provider-imagery-supermap/vc-provider-imagery-tianditu/vc-provider-imagery-tile-coordinates/vc-provider-imagery-tms/vc-provider-imagery-singletile/vc-provider-imagery-tiledcache/vc-provider-imagery-urltemplate/vc-provider-imagery-wms/vc-provider-imagery-wmts |

## 参考

- 官方文档： **[ImageryLayer](https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html)**
