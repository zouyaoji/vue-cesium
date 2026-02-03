<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 09:45:18
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:27:49
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-geometry-corridor.md
-->

# VcGeometryCorridor

加载廊道几何图形，相当于初始化一个 `Cesium.CorridorGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

## 基础用法

廊道几何图形组件的基础用法。

:::demo

geometries/vc-geometry-corridor/usage

:::

## API

### VcGeometryCorridor Props

| 属性名         | 类型                | 默认值 | 描述                                                                      |
| -------------- | ------------------- | ------ | ------------------------------------------------------------------------- |
| positions      | Array               |        | `required` 指定描述 corridor 位置的经纬度(高度)数组。                     |
| width          | number              |        | `required` 指定 corridor 边之间的距离。                                   |
| ellipsoid      | Cesium.Ellipsoid    |        | `optional` 指定 corridor 参考椭球体。                                     |
| granularity    | number              |        | `optional` 指定每个经纬度之间的采样粒度。                                 |
| height         | number              | `0`    | `optional` 指定 corridor 高度。                                           |
| extrudedHeight | number              |        | `optional` 指定 corridor 拉伸高度。                                       |
| vertexFormat   | Cesium.VertexFormat |        | `optional` 指定 corridor 要缓存的顶点属性。                               |
| cornerType     | number              | `0`    | `optional` 指定 corridor 转角样式。**ROUNDED: 0, MITERED: 1, BEVELED: 2** |

### VcGeometryCorridor Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryCorridorOutline Props

| 属性名         | 类型             | 默认值 | 描述                                                                      |
| -------------- | ---------------- | ------ | ------------------------------------------------------------------------- |
| positions      | Array            |        | `required` 指定描述 corridor 位置的经纬度(高度)数组。                     |
| width          | number           |        | `required` 指定 corridor 边之间的距离。                                   |
| ellipsoid      | Cesium.Ellipsoid |        | `optional` 指定 corridor 参考椭球体。                                     |
| granularity    | number           |        | `optional` 指定每个经纬度之间的采样粒度。                                 |
| height         | number           | `0`    | `optional` 指定 corridor 高度。                                           |
| extrudedHeight | number           |        | `optional` 指定 corridor 拉伸高度。                                       |
| cornerType     | number           | `0`    | `optional` 指定 corridor 转角样式。**ROUNDED: 0, MITERED: 1, BEVELED: 2** |

### VcGeometryCorridorOutline Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

## 参考

- 官方文档：**[CorridorGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGeometry.html)、[CorridorOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorOutlineGeometry.html)**
