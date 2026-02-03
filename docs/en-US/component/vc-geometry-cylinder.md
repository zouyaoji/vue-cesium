# VcGeometryCylinder

Load a cylinder geometry. Equivalent to initializing a `Cesium.CylinderGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

## Basic Usage

Basic usage of the cylinder geometry component.

:::demo

geometries/vc-geometry-cylinder/usage

:::

## API

### VcGeometryCylinder Props

| Name         | Type                | Default | Description                                                |
| ------------ | ------------------- | ------- | ---------------------------------------------------------- |
| length       | number              |         | `required` Specifies the length of the cylinder.           |
| topRadius    | number              |         | `required` Specifies the radius of the top of cylinder.    |
| bottomRadius | number              |         | `required` Specifies the radius of the bottom of cylinder. |
| slices       | number              | `128`   | `optional` Specifies the number of edges around perimeter. |
| vertexFormat | Cesium.VertexFormat |         | `optional` Specifies the vertex attributes to be computed. |

### VcGeometryCylinder Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

### VcGeometryCylinderOutline Props

| Name                  | Type   | Default | Description                                                  |
| --------------------- | ------ | ------- | ------------------------------------------------------------ |
| length                | number |         | `required` Specifies the length of the cylinder.             |
| topRadius             | number |         | `required` Specifies the radius of the top of cylinder.      |
| bottomRadius          | number |         | `required` Specifies the radius of the bottom of cylinder.   |
| slices                | number | `128`   | `optional` Specifies the number of edges around perimeter.   |
| numberOfVerticalLines | number | `16`    | `optional` Specifies the number of lines from top to bottom. |

### VcGeometryCylinderOutline Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

## Reference

- Official Documentation: **[CylinderGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGeometry.html), [CylinderOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderOutlineGeometry.html)**
