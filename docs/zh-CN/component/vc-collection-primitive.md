## VcCollectionPrimitive

加载通用图元集合，相当于初始化一个 `Cesium.PrimitiveCollection` 实例。

:::tip
`vc-viewer` 初始化得到的 `Viewer` 实例自带的一个成员属性 `Scene.primitives(PrimitiveCollection)`。它可作为一切图元的父组件，如有需要也可以作为子集嵌套一层或多层。
:::

### 基础用法

通用图元集合组件的基础用法。

:::demo 使用 `vc-collection-primitive` 标签在三维球上添加布告板图元集合和模型图元。

primitives/vc-collection-primitive/usage

:::

### 属性

| 属性名           | 类型    | 默认值 | 描述                                                                           | 可选值 |
| ---------------- | ------- | ------ | ------------------------------------------------------------------------------ | ------ |
| destroyChildren  | boolean | `true` | `optional` 指定是否销毁子图元。                                                |
| modelMatrix      | Matrix4 |        | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。                   |
| show             | boolean | `true` | `optional` 指定该图元集合是否显示。                                            |
| polygons         | Array   | `[]`   | `optional` 指定多边形图元集合数组。 数组对象结构与 `vc-polygon` 组件属性相同。 |
| enableMouseEvent | boolean | `true` | `optional` 指定鼠标事件是否生效。                                              |

### 事件

| 事件名         | 参数                                                           | 描述                             |
| -------------- | -------------------------------------------------------------- | -------------------------------- |
| beforeLoad     | (instance: VcComponentInternalInstance)                        | 对象加载前触发。                 |
| ready          | (readyObj: VcReadyObject)                                      | 对象加载成功时触发。             |
| destroyed      | (instance: VcComponentInternalInstance)                        | 对象销毁时触发。                 |
| mousedown      | (evt: VcPickEvent)                                             | 鼠标在该图元上按下时触发。       |
| mouseup        | (evt: VcPickEvent)                                             | 鼠标在该图元上弹起时触发。       |
| click          | (evt: VcPickEvent)                                             | 鼠标单击该图元时触发。           |
| clickout       | (evt: VcPickEvent)                                             | 鼠标单击该图元外部时触发。       |
| dblclick       | (evt: VcPickEvent)                                             | 鼠标左键双击该图元时触发。       |
| mousemove      | (evt: VcPickEvent)                                             | 鼠标在该图元上移动时触发。       |
| mouseover      | (evt: VcPickEvent)                                             | 鼠标移动到该图元时触发。         |
| mouseout       | (evt: VcPickEvent)                                             | 鼠标移出该图元时触发。           |
| primitiveAdded | (primitive: VcCesiumObject, collection: VcCollectionPrimitive) | 原始对象被添加到图元集合时触发。 |

### 插槽

| 插槽名  | 描述                             | 子组件     |
| ------- | -------------------------------- | ---------- |
| default | 用于挂载其他各类图元集合或图元。 | Primitives |

### 方法

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |

### 参考

- 官方文档： **[PrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html)**
