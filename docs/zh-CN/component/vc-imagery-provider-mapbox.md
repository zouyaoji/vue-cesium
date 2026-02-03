# VcImageryProviderMapbox

加载 Mapbox 瓦片服务，相当于初始化一个 `Cesium.MapboxStyleImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

## 基础用法

`vc-imagery-provider-mapbox` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由 Mapbox 提供的影像瓦片服务图层。

providers/vc-imagery-provider-mapbox/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------------- | ------- | -------------------- |--|
| url | string\|Cesium.Resource | `'https://api.mapbox.com/style/v1/'` | `optional`指定 Mapbox 服务地址。 |
| username | string | `'mapbox'` | `optional` 指定加载的 mapbox 服务用户名。 |
| styleId | string | | `optional` 指定加载的 mapbox 服务的 StyleID。 |
| accessToken | string | | `optional` 指定加载的 mapbox 服务秘钥。 |
| tilesize | number | `512` | `optional` 指定加载的 mapbox 服务的瓦片大小。 |
| scaleFactor | boolean |  | `optional` 指定是否以 @2x 比例渲染。 |
| ellipsoid | Cesium.Ellipsoid | | `optional`参考椭球体，没指定的话默认 WGS84。 |
| minimumLevel | number | `0` | `optional`最小层级。 |
| maximumLevel | number | | `optional`最大层级。 |
| rectangle | VcRectangle | | `optional`图层的矩形范围,此矩形限制了影像可见范围。 |
| credit | string | | `optional`服务描述信息。 |

### Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

## 参考

- 官方文档： **[MapboxStyleImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/MapboxStyleImageryProvider.html)**
