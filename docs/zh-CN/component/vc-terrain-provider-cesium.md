---
title: VcTerrainProviderCesium - CesiumTerrainProvider
---

# VcTerrainProviderCesium

加载 Cesium 格式地形，相当于初始化一个 `Cesium.CesiumTerrainProvider` 实例。如果 `url` 为空，默认通过 `Cesium.createWorldTerrain` 加载 CesiumIon 在线全球地形，需要 CesiumIon 授权， 具体可以到 [`https://cesium.com/ion/`](https://cesium.com/ion/) 申请一个账户，获取 Access Token。

## 基础用法

`vc-terrain-provider-cesium` 组件的基础用法。

:::demo 使用 `vc-terrain-provider-cesium` 标签在三维球上添加由 Cesium Ion 提供的在线地形瓦片服务。

providers/vc-terrain-provider-cesium/usage

:::

## API

### VcTerrainProviderCesium Props

| 属性名               | 类型             | 默认值  | 描述                                                        |
| -------------------- | ---------------- | ------- | ----------------------------------------------------------- |
| url                  | string           |         | `required` 指定服务地址。                                   |
| requestVertexNormals | boolean          | `false` | `optional` 指定是否请求其他光照信息，否则使用每个顶点法线。 |
| requestWaterMask     | boolean          | `false` | `optional` 指定是否请求水面数据。                           |
| requestMetadata      | boolean          | `true`  | `optional` 指定是否请求每个切片元数据。                     |
| ellipsoid            | Cesium.Ellipsoid |         | `optional` 指定参考椭球体。                                 |
| credit               | string           |         | `optional` 指定服务的描述信息                               |

### VcTerrainProviderCesium Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | TerrainProvider                         | 当图层提供者可用时触发, 返回 TerrainProvider 实例。               |

## 参考

- 官方文档： **[CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)**
