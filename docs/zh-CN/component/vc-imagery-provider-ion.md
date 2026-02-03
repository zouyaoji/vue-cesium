# VcImageryProviderIon

加载 Cesium ion 影像服务，相当于初始化一个 `Cesium.IonImageryProvider` 实例。

**注意**：需要作为 `vc-layer-imagery` 的子组件才能正常加载。

## 基础用法

`vc-imagery-provider-ion` 组件的基础用法。

:::demo 使用 `vc-layer-imagery` 标签在三维球上添加由 Cesium Ion REST API 提供的影像瓦片服务图层。

providers/vc-imagery-provider-ion/usage

:::

## API

### Props

| 属性名      | 类型                    | 默认值 | 描述                                           |
| ----------- | ----------------------- | ------ | ---------------------------------------------- |
| assetId     | number                  |        | `required` 指定 Cesium Ion 在线影像 asset ID。 |
| accessToken | string                  |        | `optional` 指定密钥。                          |
| server      | string\|Cesium.Resource |        | `optional` 指定 Cesium 在线服务器地址。        |

### Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider                         | 当图层提供者可用时触发, 返回 ImageryProvider 实例。               |

## 参考

- 官方文档： **[IonImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/IonImageryProvider.html)**
