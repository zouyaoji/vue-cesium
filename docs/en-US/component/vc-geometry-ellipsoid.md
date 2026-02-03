# VcGeometryEllipsoid

Load an ellipsoid geometry. Equivalent to initializing a `Cesium.EllipsoidGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

## Basic Usage

Basic usage of the ellipsoid geometry component.

:::demo

geometries/vc-geometry-ellipsoid/usage

:::

## API

### VcGeometryEllipsoid Props

| Name            | Type                | Default | Description                                                  |
| --------------- | ------------------- | ------- | ------------------------------------------------------------ |
| radii           | VcPosition\|Array   |         | `optional` Specifies the radii in x, y, and z directions.    |
| innerRadii      | VcPosition\|Array   |         | `optional` Specifies the inner radii in x, y, z directions.  |
| minimumClock    | number              | `0.0`   | `optional` Specifies the minimum angle from x to y axis.     |
| maximumClock    | number              | `2*PI`  | `optional` Specifies the maximum angle from x to y axis.     |
| minimumCone     | number              | `0.0`   | `optional` Specifies the minimum angle from positive z axis. |
| maximumCone     | number              | `PI`    | `optional` Specifies the maximum angle from positive z axis. |
| stackPartitions | number              | `64`    | `optional` Specifies the number of stack partitions.         |
| slicePartitions | number              | `64`    | `optional` Specifies the number of slice partitions.         |
| vertexFormat    | Cesium.VertexFormat |         | `optional` Specifies the vertex attributes to be computed.   |

### VcGeometryEllipsoid Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

### VcGeometryEllipsoidOutline Props

| Name            | Type              | Default | Description                                                  |
| --------------- | ----------------- | ------- | ------------------------------------------------------------ |
| radii           | VcPosition\|Array |         | `optional` Specifies the radii in x, y, and z directions.    |
| innerRadii      | VcPosition\|Array |         | `optional` Specifies the inner radii in x, y, z directions.  |
| minimumClock    | number            | `0.0`   | `optional` Specifies the minimum angle from x to y axis.     |
| maximumClock    | number            | `2*PI`  | `optional` Specifies the maximum angle from x to y axis.     |
| minimumCone     | number            | `0.0`   | `optional` Specifies the minimum angle from positive z axis. |
| maximumCone     | number            | `PI`    | `optional` Specifies the maximum angle from positive z axis. |
| stackPartitions | number            | `10`    | `optional` Specifies the number of stack partitions.         |
| slicePartitions | number            | `8`     | `optional` Specifies the number of slice partitions.         |
| subdivisions    | number            | `128`   | `optional` Specifies the number of points for smooth curves. |

### VcGeometryEllipsoidOutline Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

## Reference

- Official Documentation: **[EllipsoidGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGeometry.html), [EllipsoidOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidOutlineGeometry.html)**
