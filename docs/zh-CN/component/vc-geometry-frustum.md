<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 09:49:43
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:28:30
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-geometry-frustum.md
-->

# VcGeometryFrustum

加载视锥体，相当于初始化一个 `Cesium.FrustumGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

## 基础用法

视锥体几何图形组件的基础用法。

:::demo

geometries/vc-geometry-frustum/usage

:::

## API

### VcGeometryFrustum Props

| 属性名       | 类型                                                  | 默认值 | 描述                                |
| ------------ | ----------------------------------------------------- | ------ | ----------------------------------- |
| frustum      | Cesium.PerspectiveFrustum\|Cesium.OrthographicFrustum |        | `optional` 指定视锥体参数。         |
| origin       | VcPosition\|Array                                     |        | `optional` 指定视锥体原点。         |
| orientation  | Cesium.Quaternion\|Array                              |        | `optional` 指定视锥体旋转参数。     |
| vertexFormat | Cesium.VertexFormat                                   |        | `optional` 指定视锥体顶点渲染方式。 |

### VcGeometryFrustum Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryFrustumOutline Props

| 属性名      | 类型                                                  | 默认值 | 描述                            |
| ----------- | ----------------------------------------------------- | ------ | ------------------------------- |
| frustum     | Cesium.PerspectiveFrustum\|Cesium.OrthographicFrustum |        | `optional` 指定视锥体参数。     |
| origin      | VcPosition\|Array                                     |        | `optional` 指定视锥体原点。     |
| orientation | Cesium.Quaternion\|Array                              |        | `optional` 指定视锥体旋转参数。 |

### VcGeometryFrustumOutline Events

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

## 参考

- 官方文档：**[FrustumGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumGeometry.html)、[FrustumOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumOutlineGeometry.html)**
