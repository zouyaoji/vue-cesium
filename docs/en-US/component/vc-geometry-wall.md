# VcGeometryWall

Loads a wall geometry, equivalent to initializing a `Cesium.WallGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-wall/usage

:::

## API

### Props

| Property     | Type                | Default | Description                 |
| ------------ | ------------------- | ------- | --------------------------- |
| positions    | VcPosition[]        |         | `required` Wall path points |
| height       | number              |         | `optional` Height           |
| vertexFormat | Cesium.VertexFormat |         | `optional` Vertex format    |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
