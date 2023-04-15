# VcLayerImagery

加载影像图层，相当于初始化一个 `Cesium.ImageryLayer` 实例。

需要作为 `vc-viewer` 的子组件才能正常加载。可以直接指定 `vc-layer-imagery` 的 `imageryProvider` 属性，或者用 VueCesium 提供的 `vc-imagery-provider-xxx` 系列组件作为 `vc-layer-imagery` 子组件挂载各个 `imageryProvider`，但一个影像图层只能挂载一个 `provider`。

## 基础用法

影像图层组件的基础用法。

:::demo 使用 `vc-layer-imagery` 组件在三维球上添加 `OpenStreetMapImageryProvider` 影像服务瓦片图层。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <div ref="sliderRef" class="slider"></div>
  <vc-viewer @ready="onViewerReady">
    <vc-layer-imagery @ready="onImageryLayerReady" ref="layer" :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
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
      const layer = ref(null)
      const alpha = ref(1)
      const brightness = ref(1)
      const contrast = ref(1)
      const sliderRef = ref(null)
      let moveActive = false
      let myViewer = null
      let handler = null
      // methods
      const onViewerReady = ({ Cesium, viewer }) => {
        myViewer = viewer
        const slider = sliderRef.value
        handler = new Cesium.ScreenSpaceEventHandler(slider)
        handler.setInputAction(function () {
          moveActive = true
        }, Cesium.ScreenSpaceEventType.LEFT_DOWN)
        handler.setInputAction(function () {
          moveActive = true
        }, Cesium.ScreenSpaceEventType.PINCH_START)
        handler.setInputAction(onMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
        handler.setInputAction(onMove, Cesium.ScreenSpaceEventType.PINCH_MOVE)
        handler.setInputAction(function () {
          moveActive = false
        }, Cesium.ScreenSpaceEventType.LEFT_UP)
        handler.setInputAction(function () {
          moveActive = false
        }, Cesium.ScreenSpaceEventType.PINCH_END)
      }
      const onImageryLayerReady = readyObj => {
        const { cesiumObject: imageryLayer, viewer } = readyObj
        imageryLayer.splitDirection = Cesium.SplitDirection.LEFT
        const slider = sliderRef.value
        viewer.scene.splitPosition = slider.offsetLeft / slider.parentElement.offsetWidth
      }
      const onMove = movement => {
        if (!moveActive) {
          return
        }
        const slider = sliderRef.value
        const relativeOffset = movement.endPosition.x
        const splitPosition = (slider.offsetLeft + relativeOffset) / slider.parentElement.offsetWidth
        slider.style.left = 100.0 * splitPosition + '%'
        myViewer.scene.splitPosition = splitPosition
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
        layer,
        onViewerReady,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast,
        sliderRef,
        onImageryLayerReady
      }
    }
  }
</script>
<style>
  .slider {
    position: absolute;
    left: 50%;
    top: 0px;
    background-color: #d3d3d3;
    width: 5px;
    height: 100%;
    z-index: 9999;
  }

  .slider:hover {
    cursor: ew-resize;
  }
</style>
```

:::

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| -------------- | ----------------------- | ------ | --------------------------------------- |---|
| sortOrder | number | |`optional` 指定图层相对顺序。|
| vcId | string | |`optional` 指定图层的 vcId，`vc-selection-indicator` 拾取排除时需要。|
| imageryProvider | VcImageryProvider | | `optional` 指定影像图层的瓦片提供方式。 |
| rectangle | VcRectangle | `imageryProvider.rectangle` | `optional` 指定影像图层的矩形范围，此矩形限制了影像可见范围。 |
| alpha | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层透明度值，取值范围为 0.0~1.0。 |
| nightAlpha | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层透明度值，取值范围为 0.0~1.0。 |
| dayAlpha | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层透明度值，取值范围为 0.0~1.0。 |
| brightness | number \| LayerPropCallback | `1.0`| `optional` 指定影像图层亮度值。值为 1.0 表示使用原图；值大于 1.0 时图像将变亮；值小于 1.0 时图像将变暗。 |
| contrast | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层对比度。值为 1.0 表示使用原图；值大于 1.0 表示增加对比度；值小于 1.0 表示降低对比度。 |
| hue | number \| LayerPropCallback | `0.0` | `optional` 指定影像图层色调。值为 0.0 表示使用原图。 |
| saturation | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层饱和度。值为 1.0 表示使用原图；值大于 1.0 表示增加饱和度；值小于 1.0 表示降低饱和度。 |
| gamma | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层伽马校正。值为 1.0 表示使用原图。 |
| splitDirection | number \| Cesium.SplitDirection \| LayerPropCallback| `0` | `optional` 指定影像图层分割方向。 **LEFT: -1, NONE: 0, RIGHT: 1**|-1/0/1|
| minificationFilter | number \| Cesium.TextureMinificationFilter | `9729` | `optional` 指定影像图层纹理缩小过滤器。 **NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986**|9728/9729/9984/9985/9986|
| magnificationFilter | number \| Cesium.TextureMagnificationFilter | `9729` | `optional` 指定影像图层纹理缩小过滤器。**NEAREST: 9728, LINEAR: 9729** |9728/9729|
| show | boolean | `true` | `optional` 指定图层是否显示，如果显示图层，则为 true; 否则，false |
| maximumAnisotropy | number | | `optional` 指定纹理过滤的最大各向异性级别。 如果未指定此参数，则将使用 WebGL 堆栈支持的最大各向异性。 较大的值使图像在水平视图中看起来更好。 |
| minimumTerrainLevel | number | | `optional` 指定最小地形细节层次。level 0 是最小细节层次。 |
| maximumTerrainLevel | number | | `optional` 指定最大地形细节层次。 |
| cutoutRectangle | VcRectangle | | `optional` 指定裁剪此影像图层的矩形范围。 |
| colorToAlpha | VcColor | |`optional` 指定透明时的颜色。|
| colorToAlphaThreshold | number | `0.004` |`optional` 指定颜色到 alpha 的阈值。|

## 事件

| 事件名                 | 参数                                    | 描述                         |
| ---------------------- | --------------------------------------- | ---------------------------- |
| beforeLoad             | (instance: VcComponentInternalInstance) | 对象加载前触发。             |
| ready                  | (readyObj: VcReadyObject)               | 对象加载完成触发。           |
| destroyed              | (instance: VcComponentInternalInstance) | 对象销毁时触发。             |
| update:imageryProvider | (payload: VcImageryProvider)            | imageryProvider 更新时触发。 |

## 插槽

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载 vc-layer-imagery 子组件。 | vc-imagery-provider-arcgis/vc-imagery-provider-baidu/vc-imagery-provider-bing/vc-imagery-provider-grid/vc-imagery-provider-ion/vc-imagery-provider-mapbox/vc-imagery-provider-osm/vc-imagery-provider-supermap/vc-imagery-provider-tianditu/vc-imagery-provider-tile-coordinates/vc-imagery-provider-tms/vc-imagery-provider-singletile/vc-imagery-provider-tiledcache/vc-imagery-provider-urltemplate/vc-imagery-provider-wms/vc-imagery-provider-wmts |

## 参考

- 官方文档： **[ImageryLayer](https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html)**
