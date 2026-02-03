# VcLayerImagery

加载影像图层,相当于初始化一个 `Cesium.ImageryLayer` 实例。

需要作为 `vc-viewer` 的子组件才能正常加载。可以直接指定 `vc-layer-imagery` 的 `imageryProvider` 属性,或者用 VueCesium 提供的 `vc-imagery-provider-xxx` 系列组件作为 `vc-layer-imagery` 子组件挂载各个 `imageryProvider`,但一个影像图层只能挂载一个 `provider`。

## 基础用法

影像图层组件的基础用法。

:::demo 使用 `vc-layer-imagery` 组件在三维球上添加 `OpenStreetMapImageryProvider` 影像服务瓦片图层。

imagery-layer/vc-layer-imagery/usage

:::

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| -------------- | ----------------------- | ------ | --------------------------------------- |---|
| sortOrder | number | |`optional` 指定图层相对顺序。|
| vcId | string | |`optional` 指定图层的 vcId,`vc-selection-indicator` 拾取排除时需要。|
| imageryProvider | VcImageryProvider | | `optional` 指定影像图层的瓦片提供方式。 |
| rectangle | VcRectangle | `imageryProvider.rectangle` | `optional` 指定影像图层的矩形范围,此矩形限制了影像可见范围。 |
| alpha | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层透明度值,取值范围为 0.0~1.0。 |
| nightAlpha | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层透明度值,取值范围为 0.0~1.0。 |
| dayAlpha | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层透明度值,取值范围为 0.0~1.0。 |
| brightness | number \| LayerPropCallback | `1.0`| `optional` 指定影像图层亮度值。值为 1.0 表示使用原图;值大于 1.0 时图像将变亮;值小于 1.0 时图像将变暗。 |
| contrast | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层对比度。值为 1.0 表示使用原图;值大于 1.0 表示增加对比度;值小于 1.0 表示降低对比度。 |
| hue | number \| LayerPropCallback | `0.0` | `optional` 指定影像图层色调。值为 0.0 表示使用原图。 |
| saturation | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层饱和度。值为 1.0 表示使用原图;值大于 1.0 表示增加饱和度;值小于 1.0 表示降低饱和度。 |
| gamma | number \| LayerPropCallback | `1.0` | `optional` 指定影像图层伽马校正。值为 1.0 表示使用原图。 |
| splitDirection | number \| Cesium.SplitDirection \| LayerPropCallback| `0` | `optional` 指定影像图层分割方向。 **LEFT: -1, NONE: 0, RIGHT: 1**|-1/0/1|
| minificationFilter | number \| Cesium.TextureMinificationFilter | `9729` | `optional` 指定影像图层纹理缩小过滤器。 **NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986**|9728/9729/9984/9985/9986|
| magnificationFilter | number \| Cesium.TextureMagnificationFilter | `9729` | `optional` 指定影像图层纹理缩小过滤器。**NEAREST: 9728, LINEAR: 9729** |9728/9729|
| show | boolean | `true` | `optional` 指定图层是否显示,如果显示图层,则为 true; 否则,false |
| maximumAnisotropy | number | | `optional` 指定纹理过滤的最大各向异性级别。 如果未指定此参数,则将使用 WebGL 堆栈支持的最大各向异性。 较大的值使图像在水平视图中看起来更好。 |
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

- 官方文档: **[ImageryLayer](https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html)**
