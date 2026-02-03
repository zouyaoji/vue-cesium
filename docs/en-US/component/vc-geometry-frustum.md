# VcGeometryFrustum

Load a frustum geometry. Equivalent to initializing a `Cesium.FrustumGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

## Basic Usage

Basic usage of the frustum geometry component.

:::demo

geometries/vc-geometry-frustum/usage

:::

## API

### VcGeometryFrustum Props

| Name         | Type                                                  | Default | Description                                          |
| ------------ | ----------------------------------------------------- | ------- | ---------------------------------------------------- |
| frustum      | Cesium.PerspectiveFrustum\|Cesium.OrthographicFrustum |         | `optional` Specifies the frustum.                    |
| origin       | VcPosition\|Array                                     |         | `optional` Specifies the origin of the frustum.      |
| orientation  | Cesium.Quaternion\|Array                              |         | `optional` Specifies the orientation of the frustum. |
| vertexFormat | Cesium.VertexFormat                                   |         | `optional` Specifies the vertex attributes.          |

### VcGeometryFrustum Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

### VcGeometryFrustumOutline Props

| Name        | Type                                                  | Default | Description                                          |
| ----------- | ----------------------------------------------------- | ------- | ---------------------------------------------------- |
| frustum     | Cesium.PerspectiveFrustum\|Cesium.OrthographicFrustum |         | `optional` Specifies the frustum.                    |
| origin      | VcPosition\|Array                                     |         | `optional` Specifies the origin of the frustum.      |
| orientation | Cesium.Quaternion\|Array                              |         | `optional` Specifies the orientation of the frustum. |

### VcGeometryFrustumOutline Events

| Name       | Parameters                              | Description                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggers when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed. |

## Reference

- Official Documentation: **[FrustumGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumGeometry.html), [FrustumOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumOutlineGeometry.html)**
