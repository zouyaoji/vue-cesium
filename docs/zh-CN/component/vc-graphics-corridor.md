## VcGraphicsCorridor

加载走廊实体，相当于初始化一个 `Cesium.CorridorGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

走廊实体组件的基础用法。

:::demo

graphics/vc-graphics-corridor/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ------ | ----| ----- | ---- | ------ |
| show | boolean | `true` | `optional` 指定 corridor 是否显示。 |
| positions | VcCartesian3Array | | `optional` 指定描述 corridor 位置的经纬度(高度)数组。 |
| width | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` 指定 corridor 边之间的距离。 |
| height | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` 指定 corridor 高度。 |
| heightReference | number \| Cesium.HeightReference \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\>  | | `optional` 指定 corridor 高度模式。**NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number | | `optional` 指定 corridor 拉伸高度。 |
| extrudedHeightReference | number | | `optional` 指定 corridor 拉伸高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2**|0/1/2|
| cornerType | number \| Cesium.CornerType \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `0` | `optional` 指定 corridor 转角样式。 |
| granularity | number | | `optional` 指定每个经纬度之间的采样粒度。 |
| fill | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `true` | `optional` 指定 corridor 是否填充材质。 |
| material | VcMaterial | `'white'` | `optional` 指定 corridor 的材质。 |
| outline | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `false` | `optional` 指定 corridor 是否绘制轮廓线。 |
| outlineColor | VcColor | `'black'` | `optional` 指定 corridor 轮廓线颜色。 |
| outlineWidth |  number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `1.0` | `optional` 指定 corridor 轮廓线宽度。 |
| shadows | number \| Cesium.ShadowMode \| VcCallbackPropertyFunction\<number\> | `0` | `optional` 指定 corridor 是否接收或者发射每个点光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3**|0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition | | `optional` 指定 corridor 随相机距离改变是否显示参数。 |
| classificationType |  number \| Cesium.ClassificationType \| VcCallbackPropertyFunction\<Cesium.ClassificationType\> | `2` | `optional` 指定 corridor 的贴对象模式。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**|0/1/2|
| zIndex | number | | `optional` 指定 corridor 顺序，没有高度和拉伸高度才有效。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[CorridorGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html)**
