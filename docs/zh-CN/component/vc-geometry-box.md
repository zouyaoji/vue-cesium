# VcGeometryBox

加载立方盒几何体，相当于初始化一个 `Cesium.BoxGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

## 基础用法

立方盒几何体组件的基础用法。

:::demo

geometries/vc-geometry-box/usage

:::

## API

### Props

| 属性名       | 类型                | 默认值 | 描述                            |
| ------------ | ------------------- | ------ | ------------------------------- |
| dimensions   | VcPosition          |        | `required` 指定 box 的长宽高    |
| vertexFormat | Cesium.VertexFormat |        | `optional` 指定要计算的顶点属性 |

### Events

| 事件名     | 参数                                    | 描述               |
| ---------- | --------------------------------------- | ------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发     |
