# VcDatasourceGeojson

Load the data source in the format of [GeoJSON](https://geojson.org/) and [TopoJSON](https://github.com/topojson/topojson). It is equivalent to initializing a `Cesium.GeoJsonDataSource` instance.

## Basic usage

Basic usage of VcDatasourceGeojson component.

:::demo Use the `vc-datasource-geojson` tag to add GeoJSON format datasource objects on the viewer.

datasources/vc-datasource-geojson/usage

:::

## API

### Props

| Name             | Type                                                                                  | Default | Description                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| data             | Cesium.Resource \| string \| AnyObject                                                |         | `required` A url, GeoJSON object, or TopoJSON object to be loaded.                                                                |
| show             | boolean                                                                               | `true`  | `optional` Overrides the url to use for resolving relative links.                                                                 |
| entities         | Array\<[VcEntityProps](https://zouyaoji.top/vue-cesium/#/en-US/component/vc-entity)\> | `[]`    | `optional` Specify the collection of entities to be added to the datasource.                                                      |
| sourceUri        | string                                                                                |         | `optional` Overrides the url to use for resolving relative links.                                                                 |
| describe         | (properties: AnyObject, nameProperty: string) => string \| AnyObject                  |         | `optional` A function which returns a Property object (or just a string), which converts the properties into an html description. |
| markerSize       | number                                                                                | `48`    | `optional` The default size of the map pin created for each point, in pixels.                                                     |
| markerSymbol     | string                                                                                |         | `optional` The default symbol of the map pin created for each point.                                                              |
| markerColor      | VcColor                                                                               |         | `optional` The default color of the map pin created for each point.                                                               |
| stroke           | VcColor                                                                               |         | `optional` The default color of polylines and polygon outlines.                                                                   |
| strokeWidth      | number                                                                                | `2`     | `optional` The default width of polylines and polygon outlines.                                                                   |
| fill             | VcColor                                                                               |         | `optional` The default color for polygon interiors.                                                                               |
| clampToGround    | boolean                                                                               | `false` | `optional` true if we want the features clamped to the ground.                                                                    |
| credit           | string\|Cesium.Credit                                                                 |         | `optional` A credit for the data source, which is displayed on the canvas.                                                        |
| enableMouseEvent | boolean                                                                               | `true`  | `optional` Specify whether the mouse events are enabled.                                                                          |

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

| Name    | Description                                                 | Subtags   |
| ------- | ----------------------------------------------------------- | --------- |
| default | This is where vue-datasource-geojson sub tags content goes. | vc-entity |

## Reference

- Refer to the official documentation: **[GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)**
