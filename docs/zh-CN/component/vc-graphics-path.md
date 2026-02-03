## VcGraphicsPath

加载与时间关联的路径实体，相当于初始化一个 `Cesium.PathGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

路径实体组件的基础用法。

:::demo

graphics/vc-graphics-path/usage

:::

### 属性

| 属性名                   | 类型                              | 默认值    | 描述                                              |
| ------------------------ | --------------------------------- | --------- | ------------------------------------------------- |
| show                     | boolean                           | `true`    | `optional` 指定 path 是否显示。                   |
| leadTime                 | number                            |           | `optional` 指定 path 前面要显示的秒数。           |
| trailTime                | number                            |           | `optional` 指定 path 后面要显示的秒数。           |
| width                    | number                            | `1.0`     | `optional` 指定 path 像素宽度。                   |
| resolution               | number                            | `60`      | `optional` 指定 path 步进最大秒数。               |
| material                 | VcMaterial\|string\|Array         | `'white'` | `optional` 指定 path 材质。                       |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array |           | `optional` 指定 path 随相机距离改变是否显示参数。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PathGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html)**
