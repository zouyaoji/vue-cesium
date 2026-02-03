# VcGeometryPolygon

Loads a polygon geometry, equivalent to initializing a `Cesium.PolygonGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-polygon/usage

:::

## API

### Props

| Property         | Type                | Default | Description                  |
| ---------------- | ------------------- | ------- | ---------------------------- |
| polygonHierarchy | object              |         | `required` Polygon hierarchy |
| height           | number              |         | `optional` Height            |
| extrudedHeight   | number              |         | `optional` Extruded height   |
| vertexFormat     | Cesium.VertexFormat |         | `optional` Vertex format     |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
