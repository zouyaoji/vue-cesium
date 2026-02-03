<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 14:44:11
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 00:25:03
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-primitive-ground.md
-->

# VcPrimitiveGround

加载贴地(3DTiles)图元，相当于初始化一个 `Cesium.GroundPrimitive` 实例。

**注意：** 支持的几何图形有`CircleGeometry`、 `CorridorGeometry`、 `EllipseGeometry`、 `PolygonGeometry`、`RectangleGeometry`。

## 基础用法

贴地图元组件的基础用法。

:::demo

primitives/vc-primitive-ground/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| --- | --- | --- | --- | --- |
| geometryInstances | Cesium.GeometryInstance \| Array\<Cesium.GeometryInstance\>\|Array | | `optional` 指定要渲染的几何体实例或者几何体实例集合。 |
| appearance | VcAppearance | | `optional` 指定图元的外观参数。 |
| show | boolean | `true` | `optional` 指定图元是否显示。 |
| vertexCacheOptimize | boolean | `false` | `optional` 指定是否优化几何体顶点着色器之前和之后的缓存。 |
| interleave | boolean | `false` | `optional` 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。 |
| compressVertices | boolean | `true` | `optional` 指定是否压缩几何体顶点，压缩可以以节省内存。 |
| releaseGeometryInstances | boolean | `true` | `optional` 指定是否保留图元对几何体实例的输入，不保留可以节省内存。 |
| allowPicking | boolean | `true` | `optional` 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。 |
| asynchronous | boolean | `true` | `optional` 指定图元时异步加载还是同步加载。 |
| classificationType | number | `2` | `optional` 指定是贴地形还是贴 3DTiles，还是两者都贴。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** | 0/1/2 |
| debugShowBoundingVolume | boolean | `false` | `optional` 指定是否显示图元的边界球，用于调试使用。 |
| debugShowShadowVolume | boolean | `false` | `optional` 指定是否绘制图元中每个几何图形的阴影体积，用于调试使用。 |
| enableMouseEvent | boolean | `true` | `optional` 指定鼠标事件是否生效。 |

### Events

| 事件名     | 参数                                    | 描述                       |
| ---------- | --------------------------------------- | -------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。           |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。       |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。           |
| mousedown  | (evt: VcPickEvent)                      | 鼠标在该图元上按下时触发。 |
| mouseup    | (evt: VcPickEvent)                      | 鼠标在该图元上弹起时触发。 |
| click      | (evt: VcPickEvent)                      | 鼠标单击该图元时触发。     |
| clickout   | (evt: VcPickEvent)                      | 鼠标单击该图元外部时触发。 |
| dblclick   | (evt: VcPickEvent)                      | 鼠标左键双击该图元时触发。 |
| mousemove  | (evt: VcPickEvent)                      | 鼠标在该图元上移动时触发。 |
| mouseover  | (evt: VcPickEvent)                      | 鼠标移动到该图元时触发。   |
| mouseout   | (evt: VcPickEvent)                      | 鼠标移出该图元时触发。     |

### Slots

| 插槽名  | 描述                                 | 子组件               |
| ------- | ------------------------------------ | -------------------- |
| default | 用于挂载 vc-geometry-instance 组件。 | vc-geometry-instance |

## Reference

- 官方文档： **[GroundPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html)**
