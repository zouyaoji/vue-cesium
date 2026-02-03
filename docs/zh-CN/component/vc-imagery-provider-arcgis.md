# VcImageryProviderArcgis

加载 ArcGIS MapServer 提供的影像瓦片服务，相当于初始化一个 `Cesium.ArcGisMapServerImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

## 基础用法

`vc-imagery-provider-arcgis` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由 ArcGIS MapServer 提供的影像瓦片服务图层。

providers/vc-imagery-provider-arcgis/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------------- | ------- | -------------------- |--|
| url | string \| Cesium.Resource | `'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'` | `optional` 指定服务地址。 |
| token | string | | `optional` 指定 ArcGIS MapServer 影像服务认证 Token。 |
| tileDiscardPolicy | Cesium.DiscardMissingTileImagePolicy \| Cesium.NeverTileDiscardPolicy | | `optional` 指定无效瓦片丢弃策略。 |
| usePreCachedTilesIfAvailable | boolean | `true` | `optional` 如果为 true，则使用服务器的预缓存切片（如果可用）。 |
| layers | string | | `optional` 指定要显示的层，用逗号分开，如果为 undefined 则显示全部。 |
| enablePickFeatures | boolean | `true` | `optional` 指定是否拾取对象，在 infobox 弹出信息。 |
| rectangle | VcRectangle | | `optional` 指定图层的矩形范围，此矩形限制了影像可见范围。 |
| tilingScheme | Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme | | `optional` 指定将影像瓦片展开到地球的投影方案。 |
| ellipsoid | Cesium.Ellipsoid | | `optional` 指定参考椭球体。 |
| credit | string \| Cesium.Credit | | `optional` 显示在 canvas 上的数据源 credit 信息。访问瓦片服务器时忽略此参数。 |
| tileWidth | number | `256` | `optional` 指定每一张瓦片的像素宽度。 |
| tileHeight | number | `256` | `optional`指定每一张瓦片的像素高度。 |
| maximumLevel | number | | `optional` 指定瓦片加载的最大层级。 |

### Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

## 参考

- 官方文档： **[ArcGisMapServerImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGisMapServerImageryProvider.html)**
