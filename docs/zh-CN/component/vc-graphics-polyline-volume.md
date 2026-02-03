## VcGraphicsPolylineVolume

加载线柱体，相当于初始化一个 `Cesium.PolylineVolumeGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

线柱体组件的基础用法。

:::demo

graphics/vc-graphics-polyline-volume/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ------ | ----- | ----- | -----| ------ |
| show | boolean | `true` | `optional` 指定 volume 是否显示。 |
| positions | Array | | `optional` 指定 volume 位置信息数组。 |
| shape | Array | | `optional` 指定表达 volume 拉伸的形状参数。 |
| cornerType | number | `0` | `optional` 指定 volume 转角类型。 **ROUNDED: 0, MITERED: 1, BEVELED: 2** |0/1/2|
| granularity | number | | `optional` 指定每个经度和纬度之间的角距离。 |
| fill | boolean | `true` | `optional` 指定 volume 是否填充材质。 |
| material | VcMaterial\|string\|Array | | `optional` 指定 volume 材质。 |
| outline | boolean | `false` | `optional` 指定 volume 是否绘制轮廓线。 |
| outlineColor | VcColor\|string\|Array | | `optional` 指定 volume 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 volume 轮廓线宽度。 |
| shadows | number | `0` | `optional` 指定 volume 是否投射或接受每个光源的阴影。**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 volume 随相机距离改变是否显示参数。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PolylineVolumeGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html)**
