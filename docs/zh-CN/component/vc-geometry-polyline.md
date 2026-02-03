# VcGeometryPolyline

加载多段线几何图形，相当于初始化一个 `Cesium.PolylineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

## 基础用法

多段线几何图形组件的基础用法。

:::demo

geometries/vc-geometry-polyline/usage

:::

## API

### Props

| 属性名          | 类型                | 默认值 | 描述                              |
| --------------- | ------------------- | ------ | --------------------------------- |
| positions       | VcPosition[]        |        | `required` 线段点位置             |
| width           | number              | 1      | `optional` 线宽                   |
| colors          | object[]            |        | `optional` 线段颜色               |
| colorsPerVertex | boolean             | false  | `optional` 是否为每个顶点设置颜色 |
| vertexFormat    | Cesium.VertexFormat |        | `optional` 指定要计算的顶点属性   |

### Events

| 事件名     | 参数                                    | 描述               |
| ---------- | --------------------------------------- | ------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发     |
