# VcDatasourceCustom

加载自定义数据源,相当于初始化一个 `Cesium.CustomDataSource` 实例,手动管理一组实体对象。

## 基础用法

自定义数据源组件的基础用法。

:::demo 使用 `vc-datasource-custom` 标签在三维球上添加几组自定义数据源对象,并做聚合管理。

datasources/vc-datasource-custom/usage

:::

## API

### Props

| 属性名           | 类型                                                                                  | 默认值  | 描述                                        |
| ---------------- | ------------------------------------------------------------------------------------- | ------- | ------------------------------------------- |
| name             | string                                                                                |         | `optional` 指定数据源名称。                 |
| enableMouseEvent | boolean                                                                               | `true`  | `optional` 指定鼠标事件是否生效。           |
| show             | boolean                                                                               | `true`  | `optional` 指定数据源是否显示。             |
| entities         | Array\<[VcEntityProps](https://zouyaoji.top/vue-cesium/#/zh-CN/component/vc-entity)\> | `[]`    | `optional` 指定要添加到该数据源的实体集合。 |
| destroy          | boolean                                                                               | `false` | `optional` 指定数据源在移除时是否销毁。     |

### Events

| 事件名            | 参数                                    | 描述                         |
| ----------------- | --------------------------------------- | ---------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。             |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。         |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。             |
| changedEvent      |                                         | 数据源改变时触发。           |
| errorEvent        |                                         | 数据源发生错误时触发。       |
| loadingEvent      |                                         | 数据源开始或结束加载时触发。 |
| clusterEvent      | (clusteredEntities, cluster)            | 数据源聚合事件。             |
| collectionChanged | (collection, added, removed, changed)   | 数据源实体集合改变时触       |
| mousedown         | (evt: VcPickEvent)                      | 鼠标在该数据源上按下时触发。 |
| mouseup           | (evt: VcPickEvent)                      | 鼠标在该数据源上弹起时触发。 |
| click             | (evt: VcPickEvent)                      | 鼠标单击该数据源时触发。     |
| clickout          | (evt: VcPickEvent)                      | 鼠标单击该数据源外部时触发。 |
| dblclick          | (evt: VcPickEvent)                      | 鼠标左键双击该数据源时触发。 |
| mousemove         | (evt: VcPickEvent)                      | 鼠标在该数据源上移动时触发。 |
| mouseover         | (evt: VcPickEvent)                      | 鼠标移动到该数据源时触发。   |
| mouseout          | (evt: VcPickEvent)                      | 鼠标移出该数据源时触发。     |

### Methods

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |

### Slots

| 插槽名  | 描述                                    | 子组件    |
| ------- | --------------------------------------- | --------- |
| default | 用于 vue-datasource-custom 挂载子组件。 | vc-entity |

## 参考

- 官方文档: **[CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)**
