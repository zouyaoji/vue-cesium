<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 13:30:13
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:27:24
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-geometry-instance.md
-->

# VcGeometryInstance

加载实例化的几何体，相当于初始化一个 `Cesium.GeometryInstance` 实例。

**注意**：需要作为 `vc-primitive`、`vc-primitive-classification`、`vc-primitive-ground`、`vc-primitive-ground-polyline` 的子组件才能正常加载。

## 基础用法

几何体实例组件的基础用法。

:::demo

geometries/vc-geometry-instance/usage

:::

## API

### Props

| 属性名      | 类型            | 默认值 | 描述                  |
| ----------- | --------------- | ------ | --------------------- |
| geometry    | Cesium.Geometry |        | `optional` 几何体实例 |
| attributes  | object          |        | `optional` 几何体属性 |
| modelMatrix | Cesium.Matrix4  |        | `optional` 模型矩阵   |
| id          | string          |        | `optional` 实例ID     |

### Events

| 事件名     | 参数                                    | 描述               |
| ---------- | --------------------------------------- | ------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发     |
