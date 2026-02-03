# VcImageryProviderSupermap

加载超图 iServer 影像服务。相当于初始化一个 `Cesium.SuperMapImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

## 基础用法

`vc-imagery-provider-supermap` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加超图iServer影像服务图层。

providers/vc-imagery-provider-supermap/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------- | ------- | ------- | ----------------------------------------------------------------- |
| url | string | | `required` 指定服务地址。 |
| name | string | | `optional` SuperMap iServer 影像图层名称, 图层序列。 |
| minimumLevel | number | `0` | `optional` 最小层级。 |
| maximumLevel | number | | `optional` 最大层级。 |
| alpha | number | `1.0` | `optional` 指定图层的透明度，0 为全透明，1 为完全不透明。 |
| brightness | number | | `optional` 指定亮度。 |
| contrast | number | | `optional` 指定对比度。 |
| transparent | boolean | `true` | `optional` 指定是否透明。 |

### Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

## 参考

- 官方文档： **[SuperMapImageryProvider](http://support.supermap.com.cn:8090/webgl/docs/Documentation/SuperMapImageryProvider.html)**
