# VcImageryProviderTianditu

加载天地图 WMTS 影像服务，相当于初始化一个 `Cesium.WebMapTileServiceImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

## 基础用法

`vc-imagery-provider-tianditu` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由天地图提供的影像瓦片服务图层。

providers/vc-imagery-provider-tianditu/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------ | ------------------------ | ------------ | --------------------------------------------------------------- |
| url | string | | `optional`指定服务地址。默认: `https://{s}.tianditu.gov.cn`。 |
| subdomains | string\| Array\<string\> | `['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']` | `optional`指定服务轮询参数。 |
| token | string | | `optional`指定天地图服务秘钥, 注册账号后获取。**仅 `mapStyle` 为影像和地形图底图以及注记有效**。 |
| mapStyle | TiandituImageryStyle | `'img_w'` | `optional`指定天地图影像地图风格。 |
| format | string | `'tiles'` | `optional` 指定图片格式。 |
| tileMatrixSetID | string | `'w'` | `optional` 用于 WMTS 请求的 TileMatrixSet 的标识符。 |
| minimumLevel | number | `0` | `optional`最小层级。 |
| maximumLevel | number | `18` | `optional`最大层级。 |
| rectangle | VcRectangle | | `optional`图层的矩形范围，此矩形限制了影像可见范围。 |
| credit | string\| Cesium.Credit | `'天地图全球影像服务'` | `optional`服务描述信息。 |
| projectionTransforms | ProjectionTransforms | `false` | `optional` 指定投影变换参数。**结构: { from: 'GCJ02', to: 'WGS84' }** |

### Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

## 参考

- 官方文档： **[WebMapTileServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html)**
