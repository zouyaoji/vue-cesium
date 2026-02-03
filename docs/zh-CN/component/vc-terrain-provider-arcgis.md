---
title: VcTerrainProviderArcgis - ArcGISTiledElevationTerrainProvider
---

# VcTerrainProviderArcgis

加载 ArcGISTiledElevation 格式地形，相当于初始化一个 `Cesium.ArcGISTiledElevationTerrainProvider` 实例。

## 基础用法

`vc-terrain-provider-arcgis` 组件的基础用法。

:::demo 使用 `vc-terrain-provider-arcgis` 标签在三维球上添加由 ArcGIS MapServer 提供的在线地形瓦片服务。

providers/vc-terrain-provider-arcgis/usage

:::

## API

### VcTerrainProviderArcgis Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string \| Cesium.Resource | `'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'` | `required` 指定服务地址。 |
| token | string | | `optional` 指定服务授权令牌。 |
| ellipsoid | Cesium.Ellipsoid | | `optional` 指定参考椭球体。 |

### VcTerrainProviderArcgis Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | (evt: Cesium.TileProviderError)         | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | (evt: boolean )                         | 当 provider 准备好使用时触发。                                    |

## 参考

- 官方文档： **[ArcGISTiledElevationTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGISTiledElevationTerrainProvider.html)**
