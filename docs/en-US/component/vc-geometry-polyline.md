# VcGeometryPolyline

Loads a polyline geometry, equivalent to initializing a `Cesium.PolylineGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-polyline/usage

:::

## API

### Props

| Property        | Type                | Default | Description                 |
| --------------- | ------------------- | ------- | --------------------------- |
| positions       | VcPosition[]        |         | `required` Line points      |
| width           | number              | 1       | `optional` Line width       |
| colors          | object[]            |         | `optional` Line colors      |
| colorsPerVertex | boolean             | false   | `optional` Color per vertex |
| vertexFormat    | Cesium.VertexFormat |         | `optional` Vertex format    |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
