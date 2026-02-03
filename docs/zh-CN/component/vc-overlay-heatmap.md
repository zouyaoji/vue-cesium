## VcOverlayHeatmap

加载热力图覆盖物。

基于 heatmapjs 实现。

### 基础用法

热力图覆盖物组件的基础用法。

:::demo

overlays/vc-overlay-heatmap/usage

:::

### 属性

| 属性名     | 类型                                       | 默认值        | 描述                                                                          | 可选值                         |
| ---------- | ------------------------------------------ | ------------- | ----------------------------------------------------------------------------- | ------------------------------ |
| show       | boolean                                    | `true`        | `optional` 指定热力图是否显示。                                               |
| rectangle  | VcRectangle                                |               | `optional` 指定热力图四至参数。                                               |
| min        | number                                     | `0`           | `optional` 指定热力图数据最小值。                                             |
| max        | number                                     | `100`         | `optional` 指定热力图数据最大值。                                             |
| data       | Array\<VcHeatMapData\>                     | `[]`          | `optional` 指定热力图数据。如果不是 x, y, value 需要在 options 属性指明字段。 |
| options    | HeatmapConfiguration                       |               | `optional` 指定热力图参数。                                                   |
| type       | 'primitive' \| 'entity' \| 'imagery-layer' | `'primitive'` | `optional` 指定热力图对象的类型。                                             | primitive/entity/imagery-layer |
| segments   | Array\<VcColorSegments\>                   |               | `optional` 指定热力图颜色分段。                                               |
| projection | '3857' \| '4326'                           |               | `optional` 指定投影。                                                         |

:::tip

提示：`segments` 和 `options.gradient` 均表达颜色分段，指定其中一个就可以了。`segments` 分段是实际值，而 `options.gradient` 需要归一化处理，详见例子。

:::

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 方法

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |

### 参考

- 资料： [heatmapjs](https://www.patrick-wied.at/static/heatmapjs/docs.html)
