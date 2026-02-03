# VcGeometryBox

Loads a box geometry, equivalent to initializing a `Cesium.BoxGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-box/usage

:::

## API

### Props

| Property     | Type                | Default | Description               |
| ------------ | ------------------- | ------- | ------------------------- |
| dimensions   | VcPosition          |         | `required` Box dimensions |
| vertexFormat | Cesium.VertexFormat |         | `optional` Vertex format  |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
