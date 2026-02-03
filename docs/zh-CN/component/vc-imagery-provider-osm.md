# VcImageryProviderOsm

加载 OpenStreetMap 提供的或者其他 `Slippy` 格式的影像瓦片服务，相当于初始化一个 `Cesium.OpenStreetMapImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

## 基础用法

`vc-imagery-provider-osm` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由 OpenStreetMap 提供的影像瓦片服务图层。

providers/vc-imagery-provider-osm/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------- | -------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| url | string | `'https://a.tile.openstreetmap.org'` | `optional`指定 OpenStreetMap 服务地址。 |
| fileExtension | string | `'png'` | `required`指定图片格式。 |
| rectangle | VcRectangle | | `optional`图层的矩形范围，此矩形限制了影像可见范围。 |
| minimumLevel | number | `0` | `optional`最小层级。 |
| maximumLevel | number | | `optional`最大层级。 |
| ellipsoid | Cesium.Ellipsoid | | `optional`参考椭球体，没指定的话默认 WGS84。 |
| credit | string\|Cesium.Credit | `'MapQuest, Open Street Map and contributors, CC-BY-SA'` | `optional`服务描述信息。 |

### Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

## 参考

- 官方文档： **[OpenStreetMapImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/OpenStreetMapImageryProvider.html)**
