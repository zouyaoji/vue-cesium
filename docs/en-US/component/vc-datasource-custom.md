# VcDatasourceCustom

Load a custom datasource. It is equivalent to initializing a `Cesium.CustomDataSource` instance and manually managing a group of entity objects.

## Basic usage

Basic usage of VcDatasourceCustom component.

:::demo Use the `vc-datasource-custom` tag to add several sets of custom datasource objects on the viewer, and do aggregation management.

datasources/vc-datasource-custom/usage

:::

## API

### Props

| Name             | Type                                                                                  | Default | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------ |
| name             | string                                                                                |         | `optional` A human-readable name for this instance.                            |
| show             | boolean                                                                               | `true`  | `optional` Specify whether the data source is displayed.                       |
| entities         | Array\<[VcEntityProps](https://zouyaoji.top/vue-cesium/#/en-US/component/vc-entity)\> | `[]`    | `optional` Specify the collection of entities to be added to this data source. |
| destroy          | boolean                                                                               | `false` | `optional` Whether to destroy the data source in addition to removing it.      |
| enableMouseEvent | boolean                                                                               | `true`  | `optional` Specify whether to respond to mouse pick events.                    |

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

| Name    | Description                                                | Subtags   |
| ------- | ---------------------------------------------------------- | --------- |
| default | This is where vue-datasource-custom sub tags content goes. | vc-entity |

## Reference

- Refer to the official documentation: **[CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)**
