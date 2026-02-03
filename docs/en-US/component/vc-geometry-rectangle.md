# VcGeometryRectangle

Loads a rectangle geometry, equivalent to initializing a `Cesium.RectangleGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-rectangle/usage

:::

## API

### Props

| Property     | Type                | Default | Description                 |
| ------------ | ------------------- | ------- | --------------------------- |
| rectangle    | object              |         | `required` Rectangle extent |
| height       | number              |         | `optional` Height           |
| vertexFormat | Cesium.VertexFormat |         | `optional` Vertex format    |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
