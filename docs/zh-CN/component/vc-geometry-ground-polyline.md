# VcGeometryGroundPolyline

加载贴地(3DTiles)线几何图形，相当于初始化一个 `Cesium.GroundPolylineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件，并且将 `vc-geometry-instance` 放到 `vc-primitive-ground-polyline` 才能正常加载。

## 基础用法

贴地线几何图形组件的基础用法。

:::demo

geometries/vc-geometry-ground-polyline/usage

:::

## API

### Props

| 属性名    | 类型         | 默认值 | 描述                  |
| --------- | ------------ | ------ | --------------------- |
| positions | VcPosition[] |        | `required` 线段点位置 |
| width     | number       | 1      | `optional` 线宽       |

### Events

| 事件名     | 参数                                    | 描述               |
| ---------- | --------------------------------------- | ------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发     |
