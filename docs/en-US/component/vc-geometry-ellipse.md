# VcGeometryEllipse

Load an ellipse geometry. Equivalent to initializing a `Cesium.EllipseGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

## Basic Usage

Basic usage of the ellipse geometry component.

:::demo

geometries/vc-geometry-ellipse/usage

:::

## API

### VcGeometryEllipse Props

| Name           | Type                | Default | Description                                                       |
| -------------- | ------------------- | ------- | ----------------------------------------------------------------- |
| center         | VcPosition\|Array   |         | `required` Specifies the center position of the ellipse.          |
| semiMajorAxis  | number              |         | `required` Specifies the length of the semi-major axis in meters. |
| semiMinorAxis  | number              |         | `required` Specifies the length of the semi-minor axis in meters. |
| ellipsoid      | Cesium.Ellipsoid    |         | `optional` Specifies the ellipsoid to be used as a reference.     |
| height         | number              | `0`     | `optional` Specifies the height of the ellipse.                   |
| extrudedHeight | number              |         | `optional` Specifies the extrusion height of the ellipse.         |
| rotation       | number              | `0.0`   | `optional` Specifies the rotation angle from north.               |
| stRotation     | number              | `0.0`   | `optional` Specifies the rotation angle of texture coordinates.   |
| granularity    | number              |         | `optional` Specifies the angular distance between points.         |
| vertexFormat   | Cesium.VertexFormat |         | `optional` Specifies the vertex attributes to be computed.        |

### VcGeometryEllipse Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

### VcGeometryEllipseOutline Props

| Name                  | Type              | Default | Description                                                     |
| --------------------- | ----------------- | ------- | --------------------------------------------------------------- |
| center                | VcPosition\|Array |         | `required` Specifies the center position of the ellipse.        |
| semiMajorAxis         | number            |         | `required` Specifies the length of semi-major axis in meters.   |
| semiMinorAxis         | number            |         | `required` Specifies the length of semi-minor axis in meters.   |
| ellipsoid             | Cesium.Ellipsoid  |         | `optional` Specifies the ellipsoid to be used as a reference.   |
| height                | number            | `0`     | `optional` Specifies the height of the ellipse.                 |
| extrudedHeight        | number            |         | `optional` Specifies the extrusion height of the ellipse.       |
| rotation              | number            | `0.0`   | `optional` Specifies the rotation angle from north.             |
| stRotation            | number            | `0.0`   | `optional` Specifies the rotation angle of texture coords.      |
| granularity           | number            |         | `optional` Specifies the angular distance between points.       |
| numberOfVerticalLines | number            | `16`    | `optional` Specifies the number of lines connecting top/bottom. |

### VcGeometryEllipseOutline Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

## Reference

- Official Documentation: **[EllipseGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html), [EllipseOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html)**
