<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 13:30:37
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:29:18
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-geometry-simple-polyline.md
-->

# VcGeometrySimplePolyline

加载线段几何图形，相当于初始化一个 `Cesium.SimplePolylineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

## 基础用法

线段几何图形组件的基础用法。

:::demo

geometries/vc-geometry-simple-polyline/usage

:::

## API

### Props

| 属性名    | 类型         | 默认值 | 描述                  |
| --------- | ------------ | ------ | --------------------- |
| positions | VcPosition[] |        | `required` 线段点位置 |

### Events

| 事件名     | 参数                                    | 描述               |
| ---------- | --------------------------------------- | ------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发     |
