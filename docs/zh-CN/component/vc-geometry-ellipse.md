# VcGeometryEllipse

加载椭圆几何图形，相当于初始化一个 `Cesium.EllipseGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

## 基础用法

椭圆多边形几何图形组件的基础用法。

:::demo

geometries/vc-geometry-ellipse/usage

:::

## API

### VcGeometryEllipse Props

| 属性名         | 类型                | 默认值 | 描述                                                |
| -------------- | ------------------- | ------ | --------------------------------------------------- |
| center         | VcPosition\|Array   |        | `required` 指定椭圆的中心位置。                     |
| semiMajorAxis  | number              |        | `required` 指定椭圆的长半轴长度，单位是米。         |
| semiMinorAxis  | number              |        | `required` 指定椭圆的短半轴长度，单位是米。         |
| ellipsoid      | Cesium.Ellipsoid    |        | `optional` 指定椭圆的参考椭球体。                   |
| height         | number              | `0`    | `optional` 指定椭圆离地表的高度。                   |
| extrudedHeight | number              |        | `optional` 指定椭圆拉伸高度。                       |
| rotation       | number              | `0.0`  | `optional` 指定椭圆以正北逆时针方向旋转的角度。     |
| stRotation     | number              | `0.0`  | `optional` 指定椭圆纹理以正北逆时针方向旋转的角度。 |
| granularity    | number              |        | `optional` 指定椭圆上点之间的角距离（弧度）。       |
| vertexFormat   | Cesium.VertexFormat |        | `optional` 指定顶点属性渲染方式。                   |

### VcGeometryEllipse Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryEllipseOutline Props

| 属性名                | 类型              | 默认值 | 描述                                                |
| --------------------- | ----------------- | ------ | --------------------------------------------------- |
| center                | VcPosition\|Array |        | `required` 指定椭圆的中心位置。                     |
| semiMajorAxis         | number            |        | `required` 指定椭圆的长半轴长度，单位是米。         |
| semiMinorAxis         | number            |        | `required` 指定椭圆的短半轴长度，单位是米。         |
| ellipsoid             | Cesium.Ellipsoid  |        | `optional` 指定椭圆的参考椭球体。                   |
| height                | number            | `0`    | `optional` 指定椭圆离地表的高度。                   |
| extrudedHeight        | number            |        | `optional` 指定椭圆拉伸高度。                       |
| rotation              | number            | `0.0`  | `optional` 指定椭圆以正北逆时针方向旋转的角度。     |
| stRotation            | number            | `0.0`  | `optional` 指定椭圆纹理以正北逆时针方向旋转的角度。 |
| granularity           | number            |        | `optional` 指定椭圆上点之间的角距离（弧度）。       |
| numberOfVerticalLines | number            | `16`   | `optional` 指定拉伸的椭圆连接顶部与底部的线条数量。 |

### VcGeometryEllipseOutline Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

## 参考

- 官方文档：**[EllipseGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html)、[EllipseOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html)**
