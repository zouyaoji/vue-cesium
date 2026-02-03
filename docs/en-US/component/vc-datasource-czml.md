# VcDatasourceCzml

Load [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide) format datasource. It is equivalent to initializing a `Cesium.CzmlDataSource` instance.

## Basic usage

Basic usage of VcDatasourceCzml component.

:::demo Use the `vc-datasource-czml` tag to add CZML format datasource objects on the viewer.

datasources/vc-datasource-czml/usage

:::

## API

### Props

| Name             | Type                                                                                  | Default | Description                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| czml             | string\|Cesium.Resource\|any[]                                                        |         | `required` An optional name for the data source. This value will be overwritten if a loaded document contains a name. |
| show             | boolean                                                                               | `true`  | `optional` Specifies whether the datasource is visible.                                                               |
| entities         | Array\<[VcEntityProps](https://zouyaoji.top/vue-cesium/#/en-US/component/vc-entity)\> | `[]`    | `optional` Specify the collection of entities to be added to this datasource.                                         |
| sourceUri        | string                                                                                |         | `optional` Overrides the url to use for resolving relative links.                                                     |
| credit           | string\|Cesium.Credit                                                                 |         | `optional` A credit for the data source, which is displayed on the canvas.                                            |
| enableMouseEvent | boolean                                                                               | `true`  | `optional` Specify whether the mouse events are enabled.                                                              |

### Events

| Name              | Parameters                              | Description                                                                            |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                                            |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.                                 |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                                           |
| changedEvent      |                                         | Gets an event that will be raised when the underlying data changes.                    |
| errorEvent        |                                         | Gets an event that will be raised if an error is encountered during processing.        |
| loadingEvent      |                                         | Gets an event that will be raised when the data source either starts or stops loading. |
| clusterEvent      | (clusteredEntities, cluster)            | Gets the event that will be raised when a new cluster will be displayed                |
| collectionChanged | (collection, added, removed, changed)   | Gets the event that is fired when entities are added or removed from the collection.   |
| mousedown         | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on the data source.                                 |
| mouseup           | (evt: VcPickEvent)                      | Triggers when the mouse bounces up on the data source.                                 |
| click             | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the data source.                                     |
| clickout          | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the data source.                                |
| dblclick          | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the data source.                     |
| mousemove         | (evt: VcPickEvent)                      | Triggers when the mouse moves on the data source.                                      |
| mouseover         | (evt: VcPickEvent)                      | Triggers when the mouse moves to the data source.                                      |
| mouseout          | (evt: VcPickEvent)                      | Triggers when the mouse moves out of the data source.                                  |

### Slots

| Name    | Description                                              | Subtags   |
| ------- | -------------------------------------------------------- | --------- |
| default | This is where vue-datasource-czml sub tags content goes. | vc-entity |

## Reference

- Refer to the official documentation: **[CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)**
