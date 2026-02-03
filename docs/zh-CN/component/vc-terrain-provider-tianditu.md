<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 00:35:06
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 20:45:17
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-terrain-provider-tianditu.md
-->

---

## title: VcTerrainProviderTianditu - TiandituTerrainProvider

# VcTerrainProviderTianditu

加载天地图在线地形。

## 基础用法

`vc-terrain-provider-tianditu` 组件的基础用法。

:::demo 使用 `vc-terrain-provider-tianditu` 标签在三维球上添加由天地图提供的在线地形瓦片服务。

providers/vc-terrain-provider-tianditu/usage

:::

## API

### VcTerrainProviderTianditu Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| --------------- | ------- | -------------------------------- | ------------------------------------------------------------------- |
| url | string | `'https://{s}.tianditu.gov.cn/'` | `required` 指定服务地址。 |
| subdomains | Array  | `['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']` | 指定轮询子域名。 |
| pluginPath | string | `'https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js'` | `optional` 指定天地图地形插件库地址。 |
| dataType | string | `int` | `optional` 指定数据类型。 |
| tileType | string | `heightmap` | `optional` 指定瓦片类型。 |
| token | string | | `optional` 指定天地图服务秘钥。 |

### VcTerrainProviderTianditu Events

| 事件名       | 参数                                    | 描述                                                              |
| ------------ | --------------------------------------- | ----------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发。                                                  |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发。                                              |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发。                                                  |
| errorEvent   | TileProviderError                       | 当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | TerrainProvider                         | 当图层提供者可用时触发, 返回 TerrainProvider 实例。               |

## 参考

- 资料： **[天地图帮助文档](http://lbs.tianditu.gov.cn/docs/#/sanwei/)**

## 已知问题

- 使用未压缩的构建库 `/CesiumUnminified/Cesium.js` 会抛出异常。

  ```
  cesiumTdt.js:12 Uncaught ReferenceError: Zlib is not defined at cesiumTdt.js:12 at XMLHttpRequest.i.onreadystatechange (cesiumTdt.js:12)
  ```

  引入 `/Cesium/Cesium.js` 即可解决。

- Cesium 1.92 + 版本去掉了 when，天地图地形插件没兼容，导致问题。
