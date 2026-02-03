## VcGraphicsCylinder

加载圆柱、圆锥、圆台实体，相当于初始化一个 `Cesium.CylinderGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

圆柱(锥)体组件的基础用法。

:::demo

graphics/vc-graphics-cylinder/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ---- | ----- | ----- | ----- | ----  |
| show | boolean | `true` | `optional` 指定 cylinder 是否显示。 |
| length | Array | | `optional` 指定 cylinder 的长。 |
| topRadius | number | | `optional` 指定 cylinder 的顶部半径。 |
| bottomRadius | number | | `optional` 指定 cylinder 的底部半径。 |
| heightReference | number | | `optional` 指定 cylinder 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2**|0/1/2|
| fill | boolean | `true` | `optional` 指定 cylinder 是否填充材质。 |
| material | VcMaterial\|string\|Array | `'WHITE'` | `optional` 指定 cylinder 的材质。 |
| outline | boolean | `false` | `optional` 指定 cylinder 是否绘制轮廓线。 |
| outlineColor | VcColor\|string\|Array | `'BLACK'` | `optional` 指定 cylinder 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 cylinder 轮廓线宽度。 |
| numberOfVerticalLines | number | `16` | `optional` 指定沿轮廓线周长绘制的垂直线数。 |
| slices | number | `128` | `optional` 指定 cylinder 边节点数量。 |
| shadows | number | `0` | `optional` 指定 cylinder 是否投射或接收每个点光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 cylinder 随相机距离显示条件。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html)**
