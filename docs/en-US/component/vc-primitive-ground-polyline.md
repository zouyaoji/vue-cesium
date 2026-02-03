# VcPrimitiveGroundPolyline

Loads a polyline draped over terrain or 3D Tiles in the scene, equivalent to initializing a `Cesium.GroundPolylinePrimitive` instance.

**Note:** Only use with geometry instances that contain `GroundPolylineGeometry` (`vc-geometry-ground-polyline`).

## Basic Usage

:::demo

primitives/vc-primitive-ground-polyline/usage

:::

## API

### Props

| Property                 | Type                                                             | Default | Description                                                                                                                                          | Accepted Values |
| ------------------------ | ---------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| geometryInstances        | Cesium.GeometryInstance \| Array<Cesium.GeometryInstance>\|Array |         | `optional` GeometryInstances containing GroundPolylineGeometry.                                                                                      |                 |
| appearance               | VcAppearance                                                     |         | `optional` The appearance used to render the polyline. Defaults to a white color material on a PolylineMaterialAppearance.                           |                 |
| show                     | boolean                                                          | `true`  | `optional` Determines if this primitive will be shown.                                                                                               |                 |
| interleave               | boolean                                                          | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.          |                 |
| releaseGeometryInstances | boolean                                                          | `true`  | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory.                                         |                 |
| allowPicking             | boolean                                                          | `true`  | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.                                 |                 |
| asynchronous             | boolean                                                          | `true`  | `optional` Determines if the primitive will be created asynchronously or block until ready.                                                          |                 |
| classificationType       | number                                                           | `2`     | `optional` Determines whether terrain, 3D Tiles, or both will be classified. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**                              | 0/1/2           |
| debugShowBoundingVolume  | boolean                                                          | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown.                                                  |                 |
| debugShowShadowVolume    | boolean                                                          | `false` | `optional` For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation to have effect. |                 |
| enableMouseEvent         | boolean                                                          | `true`  | `optional` Specify whether the mouse event takes effect.                                                                                             |                 |

### Events

| Event      | Parameter                               | Description                    |
| ---------- | --------------------------------------- | ------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading.        |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds. |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed.        |

### Slots

| Slot    | Description                                | Subtags              |
| ------- | ------------------------------------------ | -------------------- |
| default | Where `vc-geometry-instance` content goes. | vc-geometry-instance |

## Reference

- Refer to the official documentation: **[GroundPolylinePrimitive](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html)**
