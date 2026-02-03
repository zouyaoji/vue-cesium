<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 09:46:49
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:28:23
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-geometry-ellipsoid.md
-->

# VcGeometryEllipsoid

加载(椭)球体，相当于初始化一个 `Cesium.EllipsoidGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

## 基础用法

(椭)球体几何图形组件的基础用法。

:::demo

geometries/vc-geometry-ellipsoid/usage

:::

## API

### VcGeometryEllipsoid Props

| 属性名          | 类型                | 默认值 | 描述                                                        |
| --------------- | ------------------- | ------ | ----------------------------------------------------------- |
| radii           | VcPosition\|Array   |        | `optional` 指定椭球体在 x、y、z 方向上的半径。              |
| innerRadii      | VcPosition\|Array   |        | `optional` 指定椭球体在 x、y、z 方向上的内半径。            |
| minimumClock    | number              | `0.0`  | `optional` 指定椭球体在 xy 平面内从 x 轴到 y 轴的最小角度。 |
| maximumClock    | number              | `2*PI` | `optional` 指定椭球体在 xy 平面内从 x 轴到 y 轴的最大角度。 |
| minimumCone     | number              | `0.0`  | `optional` 指定椭球体从 z 轴正半轴到 z 轴负半轴的最小角度。 |
| maximumCone     | number              | `PI`   | `optional` 指定椭球体从 z 轴正半轴到 z 轴负半轴的最大角度。 |
| stackPartitions | number              | `64`   | `optional` 指定将椭球体横向划分为层的次数。                 |
| slicePartitions | number              | `64`   | `optional` 指定将椭球体纵向划分为片的次数。                 |
| vertexFormat    | Cesium.VertexFormat |        | `optional` 指定椭球体顶点属性渲染方式。                     |

### VcGeometryEllipsoid Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryEllipsoidOutline Props

| 属性名          | 类型              | 默认值 | 描述                                                        |
| --------------- | ----------------- | ------ | ----------------------------------------------------------- |
| radii           | VcPosition\|Array |        | `optional` 指定椭球体在 x、y、z 方向上的半径。              |
| innerRadii      | VcPosition\|Array |        | `optional` 指定椭球体在 x、y、z 方向上的内半径。            |
| minimumClock    | number            | `0.0`  | `optional` 指定椭球体在 xy 平面内从 x 轴到 y 轴的最小角度。 |
| maximumClock    | number            | `2*PI` | `optional` 指定椭球体在 xy 平面内从 x 轴到 y 轴的最大角度。 |
| minimumCone     | number            | `0.0`  | `optional` 指定椭球体从 z 轴正半轴到 z 轴负半轴的最小角度。 |
| maximumCone     | number            | `PI`   | `optional` 指定椭球体从 z 轴正半轴到 z 轴负半轴的最大角度。 |
| stackPartitions | number            | `10`   | `optional` 指定将椭球体横向划分为层的次数。                 |
| slicePartitions | number            | `8`    | `optional` 指定将椭球体纵向划分为片的次数。                 |
| subdivisions    | number            | `128`  | `optional` 指定椭球体轮廓线上的点数，确定弧线的光滑粒度。   |

### VcGeometryEllipsoidOutline Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

## 参考

- 官方文档：**[EllipsoidGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGeometry.html)、[EllipsoidOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidOutlineGeometry.html)**
