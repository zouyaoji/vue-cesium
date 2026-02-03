# VcImageryProviderBing

加载微软必应地图影像服务，相当于初始化一个 `Cesium.BingMapsImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

## 基础用法

`vc-imagery-provider-bing` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由微软必应地图提供的影像瓦片服务图层。

providers/vc-imagery-provider-bing/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ---------------------------- | ------- | -------------------- |--|---|
| url | string \| Cesium.Resource | `'https://dev.virtualearth.net'` | `required` 指定服务地址。 |
| **bmKey** | string | | `optional`指定 BingMaps 地图 API 秘钥，可到[https://www.bingmapsportal.com/](https://www.bingmapsportal.com/)申请 Key。 **注意是bmKey** |
| tileProtocol | string | | `optional`指定地图是 http 还是 https 加载，默认与页面相同。 |
| mapStyle | string | `'Aerial'` | `optional`指定加载的 BingMaps 类型。 |Aerial/AerialWithLabels/AerialWithLabelsOnDemand/CanvasDark/CanvasGray/CanvasLight/CollinsBart/OrdnanceSurvey/Road/RoadOnDemand|
| culture | string | `''` | `optional`指定服务的描述信息。 |
| ellipsoid | Cesium.Ellipsoid | | `optional`参考椭球体 |
| tileDiscardPolicy | Cesium.DiscardMissingTileImagePolicy \| Cesium.NeverTileDiscardPolicy | | `optional`指定 tile 无效时的舍弃瓦片的方案。 |

### Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

## 参考

- 官方文档： **[BingMapsImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html)**
