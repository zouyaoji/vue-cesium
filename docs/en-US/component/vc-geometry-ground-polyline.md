# VcGeometryGroundPolyline

Loads a ground polyline geometry, equivalent to initializing a `Cesium.GroundPolylineGeometry` instance.

**Note**: Must be used with `vc-primitive-ground-polyline`.

## Basic Usage

:::demo

geometries/vc-geometry-ground-polyline/usage

:::

## API

### Props

| Property  | Type         | Default | Description            |
| --------- | ------------ | ------- | ---------------------- |
| positions | VcPosition[] |         | `required` Line points |
| width     | number       | 1       | `optional` Line width  |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
