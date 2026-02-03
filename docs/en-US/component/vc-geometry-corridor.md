# VcGeometryCorridor

Load a corridor geometry. Equivalent to initializing a `Cesium.CorridorGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

## Basic Usage

Basic usage of the corridor geometry component.

:::demo

geometries/vc-geometry-corridor/usage

:::

## API

### VcGeometryCorridor Props

| Name           | Type                | Default | Description                                                                        |
| -------------- | ------------------- | ------- | ---------------------------------------------------------------------------------- |
| positions      | Array               |         | `required` Specifies an array of positions defining the corridor.                  |
| width          | number              |         | `required` Specifies the distance between the edges of the corridor.               |
| ellipsoid      | Cesium.Ellipsoid    |         | `optional` Specifies the ellipsoid to be used as a reference.                      |
| granularity    | number              |         | `optional` Specifies the sampling granularity between each latitude and longitude. |
| height         | number              | `0`     | `optional` Specifies the corridor height.                                          |
| extrudedHeight | number              |         | `optional` Specifies the corridor extrusion height.                                |
| vertexFormat   | Cesium.VertexFormat |         | `optional` Specifies the vertex attributes to be computed.                         |
| cornerType     | number              | `0`     | `optional` Specifies the corner style. **ROUNDED: 0, MITERED: 1, BEVELED: 2**      |

### VcGeometryCorridor Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

### VcGeometryCorridorOutline Props

| Name           | Type             | Default | Description                                                                        |
| -------------- | ---------------- | ------- | ---------------------------------------------------------------------------------- |
| positions      | Array            |         | `required` Specifies an array of positions defining the corridor.                  |
| width          | number           |         | `required` Specifies the distance between the edges of the corridor.               |
| ellipsoid      | Cesium.Ellipsoid |         | `optional` Specifies the ellipsoid to be used as a reference.                      |
| granularity    | number           |         | `optional` Specifies the sampling granularity between each latitude and longitude. |
| height         | number           | `0`     | `optional` Specifies the corridor height.                                          |
| extrudedHeight | number           |         | `optional` Specifies the corridor extrusion height.                                |
| cornerType     | number           | `0`     | `optional` Specifies the corner style. **ROUNDED: 0, MITERED: 1, BEVELED: 2**      |

### VcGeometryCorridorOutline Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

## Reference

- Official Documentation: **[CorridorGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGeometry.html), [CorridorOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorOutlineGeometry.html)**
