<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 09:45:42
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:27:56
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-geometry-cylinder.md
-->

# VcGeometryCylinder

加载圆柱(锥)体，相当于初始化一个 `Cesium.CylinderGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

## 基础用法

圆柱(锥)体几何图形组件的基础用法。

:::demo

geometries/vc-geometry-cylinder/usage

:::

## API

### VcGeometryCylinder Props

| 属性名       | 类型                | 默认值 | 描述                              |
| ------------ | ------------------- | ------ | --------------------------------- |
| length       | number              |        | `required` 指定圆柱体长度。       |
| topRadius    | number              |        | `required` 指定圆柱体顶部半径。   |
| bottomRadius | number              |        | `required` 指定圆柱体底部半径。   |
| slices       | number              | `128`  | `optional` 指定圆柱圆周边数。     |
| vertexFormat | Cesium.VertexFormat |        | `optional` 指定顶点属性渲染方式。 |

### VcGeometryCylinder Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryCylinderOutline Props

| 属性名                | 类型   | 默认值 | 描述                                      |
| --------------------- | ------ | ------ | ----------------------------------------- |
| length                | number |        | `required` 指定圆柱体长度。               |
| topRadius             | number |        | `required` 指定圆柱体顶部半径。           |
| bottomRadius          | number |        | `required` 指定圆柱体底部半径。           |
| slices                | number | `128`  | `optional` 指定圆柱圆周边数。             |
| numberOfVerticalLines | number | `16`   | `optional` 指定圆柱体顶部到底部的线条数。 |

### VcGeometryCylinderOutline Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

## 参考

- 官方文档：**[CylinderGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGeometry.html)、[CylinderOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderOutlineGeometry.html)**
