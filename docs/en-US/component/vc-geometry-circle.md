# VcGeometryCircle

Loads a circle geometry, equivalent to initializing a `Cesium.CircleGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-circle/usage

:::

## API

### Props

| Property     | Type                | Default | Description              |
| ------------ | ------------------- | ------- | ------------------------ |
| center       | VcPosition          |         | `required` Circle center |
| radius       | number              |         | `required` Circle radius |
| height       | number              |         | `optional` Height        |
| vertexFormat | Cesium.VertexFormat |         | `optional` Vertex format |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
