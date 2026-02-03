# VcGeometrySimplePolyline

Loads a simple polyline geometry, equivalent to initializing a `Cesium.SimplePolylineGeometry` instance.

**Note**: Must be used as a child component of `vc-geometry-instance`.

## Basic Usage

:::demo

geometries/vc-geometry-simple-polyline/usage

:::

## API

### Props

| Property  | Type         | Default | Description            |
| --------- | ------------ | ------- | ---------------------- |
| positions | VcPosition[] |         | `required` Line points |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
