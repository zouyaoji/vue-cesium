# VcDatasourceCzml

加载 [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide) 格式数据源。相当于初始化一个 `Cesium.CzmlDataSource` 实例。

## 基础用法

Czml 数据源组件的基础用法。

:::demo 使用 `vc-datasource-czml` 标签在三维球上添加 CZML 格式数据源对象。

datasources/vc-datasource-czml/usage

:::

## API

### Props

| 属性名           | 类型                                                                                  | 默认值 | 描述                                        |
| ---------------- | ------------------------------------------------------------------------------------- | ------ | ------------------------------------------- |
| czml             | string\|Cesium.Resource\|any[]                                                        |        | `required` 指定 czml 对象或者 url。         |
| show             | boolean                                                                               | `true` | `optional` 指定数据源是否可见。             |
| enableMouseEvent | boolean                                                                               | `true` | `optional` 指定鼠标事件是否生效。           |
| entities         | Array\<[VcEntityProps](https://zouyaoji.top/vue-cesium/#/zh-CN/component/vc-entity)\> | `[]`   | `optional` 指定要添加到该数据源的实体集合。 |
| sourceUri        | string                                                                                |        | `optional` 指定引用资源 url 的相对路径。    |
| credit           | string\|Cesium.Credit                                                                 |        | `optional` 指定数据源描述信息。             |

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

### Slots

| 插槽名  | 描述                                  | 子组件    |
| ------- | ------------------------------------- | --------- |
| default | 用于 vue-datasource-czml 挂载子组件。 | vc-entity |

## 参考

- 官方文档: **[CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)**
