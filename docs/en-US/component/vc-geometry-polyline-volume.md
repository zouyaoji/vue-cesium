# VcGeometryPolylineVolume

Loads a polyline volume geometry, equivalent to initializing a `Cesium.PolylineVolumeGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-polyline-volume/usage

:::

## API

### Props

| Property          | Type                | Default | Description                     |
| ----------------- | ------------------- | ------- | ------------------------------- |
| polylinePositions | VcPosition[]        |         | `required` Polyline path points |
| shapePositions    | VcPosition[]        |         | `required` Shape points         |
| vertexFormat      | Cesium.VertexFormat |         | `optional` Vertex format        |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
