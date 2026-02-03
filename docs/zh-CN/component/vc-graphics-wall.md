## VcGraphicsWall

加载墙实体，相当于初始化一个 `Cesium.WallGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

墙体组件的基础用法。

:::demo

graphics/vc-graphics-wall/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ------ | --- | ----- | ----- | ----- |
| show | boolean | `true` | `optional` 指定 wall 是否显示。 |
| positions | Array | | `optional` 指定 wall 顶部的位置数组。 |
| minimumHeights | Array | | `optional` 指定 wall 底部的高度数组。 |
| maximumHeights | Array | | `optional` 指定 wall 顶部的高度数组。 |
| granularity | number | | `optional` 指定每个纬度和经度之间的角距离。 |
| fill | boolean | `true` | `optional` 指定 wall 是否填充材质。 |
| material | VcMaterial\|string\|Array | `'white'` | `optional` 指定 wall 材质。 |
| outline | boolean | `false` | `optional` 指定 wall 是否绘制轮廓线。 |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` 指定 wall 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 wall 轮廓线宽度。 |
| shadows | number | `0` | `optional` 指定 wall 是否投射或接收阴影。**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 wall 随相机距离改变的显示条件。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[WallGraphics](https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html)**
