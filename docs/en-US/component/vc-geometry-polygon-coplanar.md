# VcGeometryPolygonCoplanar

Loads a coplanar polygon geometry, equivalent to initializing a `Cesium.CoplanarPolygonGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-polygon-coplanar/usage

:::

## API

### Props

| Property         | Type                | Default | Description                  |
| ---------------- | ------------------- | ------- | ---------------------------- |
| polygonHierarchy | object              |         | `required` Polygon hierarchy |
| vertexFormat     | Cesium.VertexFormat |         | `optional` Vertex format     |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
