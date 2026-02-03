## VcGraphicsEllipsoid

加载(椭)球实体，相当于初始化一个 `Cesium.EllipsoidGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

(椭)球体组件的基础用法。

:::demo

graphics/vc-graphics-ellipsoid/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | ----- | ----- | --- | ------ |
| show | boolean | `true` | `optional` 指定 ellipsoid 是否显示。 |
| radii | VcPosition | | `optional` 指定 ellipsoid 的半径参数。 |
| innerRadii | VcPosition | | `optional` 指定 ellipsoid 的内部半径参数。 |
| minimumClock | number | `0.0` | `optional` 指定椭圆体的最小时钟角。 |
| maximumClock | number | `2*Math.PI` | `optional` 指定椭球的最大时钟角。 |
| minimumCone | number | `0.0` | `optional` 指定椭圆体的最小锥角。 |
| maximumCone | number | `Math.PI` | `optional` 指定椭圆体的最大锥角。 |
| heightReference | number | | `optional` 指定 ellipsoid 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** | 0/1/2 |
| fill | boolean | `true` | `optional` 指定 ellipsoid 是否填充材质。 |
| material | VcMaterial\|string\|Array | `'WHITE'` | `optional` 指定 ellipsoid 材质。 |
| outline | boolean | `false` | `optional` 指定 ellipsoid 是否绘制轮廓线。 |
| outlineColor | VcColor\|string\|Array | `'BLACK'` | `optional` 指定 ellipsoid 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 ellipsoid 轮廓线宽度。 |
| stackPartitions | number | `64` | `optional` 指定 ellipsoid 横向线数量。 |
| slicePartitions | number | `64` | `optional` 指定 ellipsoid 径向线数量。 |
| subdivisions | number | `128` | `optional` 指定 ellipsoid 每个轮环的样本数，确定曲率粒度。 |
| shadows | number | `0` | `optional` 指定 ellipsoid 是否投射或接受每一个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` 指定 ellipsoid 随相机距离的显示条件。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[EllipsoidGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html)**
