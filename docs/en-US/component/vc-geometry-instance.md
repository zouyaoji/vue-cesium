# VcGeometryInstance

Loads an instance of a geometry, equivalent to initializing a `Cesium.GeometryInstance` instance.

**Note**: Must be used as a child component of `vc-primitive`, `vc-primitive-classification`, `vc-primitive-ground`, or `vc-primitive-ground-polyline`.

## Basic Usage

:::demo

geometries/vc-geometry-instance/usage

:::

## API

### Props

| Property    | Type            | Default | Description                    |
| ----------- | --------------- | ------- | ------------------------------ |
| geometry    | Cesium.Geometry |         | `optional` Geometry instance   |
| attributes  | object          |         | `optional` Geometry attributes |
| modelMatrix | Cesium.Matrix4  |         | `optional` Model matrix        |
| id          | string          |         | `optional` Instance ID         |

### Events

| Event      | Parameter                               | Description                   |
| ---------- | --------------------------------------- | ----------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed        |
