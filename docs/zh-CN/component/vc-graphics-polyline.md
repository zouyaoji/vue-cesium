## VcGraphicsPolyline

加载线实体，相当于初始化一个 `Cesium.PolylineGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

线实体组件的基础用法。

:::demo

graphics/vc-graphics-polyline/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | ---- | ----- | -------- | --- |
| show | boolean | `true` | `optional` 指定线是否可显示。 |
| positions | Array | | `optional` 指定表示线条的位置数组。 |
| width | number | `1.0` | `optional` 指定线的宽度（像素）。 |
| granularity | number | | `optional` 指定每个经纬度之间的采样粒度。 arcType 不是 ArcType.NONE 时有效。 |
| material | VcMaterial\|string\|Array | `'white'` | `optional` 指定用于绘制线的材质。 |
| depthFailMaterial | VcMaterial\|string\|Array | | `optional` 指定用于绘制低于地形的线的材质。 |
| arcType | number | `1` | `optional` 指定线条类型。 **NONE: 0, GEODESIC: 1, RHUMB: 2** | 0/1/2|
| clampToGround | boolean | `false` | `optional` 指定线是否贴地。 |
| shadows | number | | `optional` 指定这些是否投射或接收来自每个光源的阴影。**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| classificationType | number | `2` | `optional` 指定相机到线的距离。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**|0/1/2|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定相机到线的距离。 |
| zIndex | number | `0` | `optional` 指定用于排序地面几何的 zIndex。 仅当`clampToGround`为真且支持地形上的折线时才有效。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PolylineGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html)**
