# VcPrimitiveClassification

Loads a volume-enclosing geometry to highlight it in the scene, equivalent to initializing a `Cesium.ClassificationPrimitive` instance.

A primitive combines geometry instances with an appearance that describes full shading, including material and render state. The geometry instance defines structure and placement, and the appearance defines visual characteristics. Decoupling geometry and appearance allows mixing and matching. Only `PerInstanceColorAppearance` with the same color across all instances is supported when using ClassificationPrimitive directly. For full appearance support when classifying terrain or 3D Tiles, use `GroundPrimitive` instead.

For correct rendering, this feature requires the EXT_frag_depth WebGL extension. Hardware without this extension may show artifacts from some viewing angles.

Valid geometries include BoxGeometry, CylinderGeometry, EllipsoidGeometry, PolylineVolumeGeometry, and SphereGeometry. Ellipsoid-surface geometries such as CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry are valid only when extruded.

## Basic Usage

:::demo

primitives/vc-primitive-classification/usage

:::

## API

### Props

| Property                 | Type                                                             | Default | Description                                                                                                                                                                                                                                          | Accepted Values |
| ------------------------ | ---------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| geometryInstances        | Cesium.GeometryInstance \| Array<Cesium.GeometryInstance>\|Array |         | `optional` The geometry instances to render. This can either be a single instance or an array of length one.                                                                                                                                         |                 |
| appearance               | VcAppearance                                                     |         | `optional` The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute.                                                                                                 |                 |
| show                     | boolean                                                          | `true`  | `optional` Determines if this primitive will be shown.                                                                                                                                                                                               |                 |
| vertexCacheOptimize      | boolean                                                          | `false` | `optional` When true, geometry vertices are optimized for the pre and post-vertex-shader caches.                                                                                                                                                     |                 |
| interleave               | boolean                                                          | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.                                                                                                          |                 |
| compressVertices         | boolean                                                          | `true`  | `optional` When true, the geometry vertices are compressed, which will save memory.                                                                                                                                                                  |                 |
| releaseGeometryInstances | boolean                                                          | `true`  | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory.                                                                                                                                         |                 |
| allowPicking             | boolean                                                          | `true`  | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.                                                                                                                                 |                 |
| asynchronous             | boolean                                                          | `true`  | `optional` Determines if the primitive will be created asynchronously or block until ready.                                                                                                                                                          |                 |
| classificationType       | number                                                           | `2`     | `optional` Determines whether terrain, 3D Tiles, or both will be classified. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**                                                                                                                              | 0/1/2           |
| debugShowBoundingVolume  | boolean                                                          | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown.                                                                                                                                                  |                 |
| debugShowShadowVolume    | boolean                                                          | `false` | `optional` For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false. |                 |
| enableMouseEvent         | boolean                                                          | `true`  | `optional` Specify whether the mouse event takes effect.                                                                                                                                                                                             |                 |

### Events

| Event      | Parameter                               | Description                                                     |
| ---------- | --------------------------------------- | --------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Emitted before loading.                                         |
| ready      | (readyObj: VcReadyObject)               | Emitted when loading succeeds.                                  |
| destroyed  | (instance: VcComponentInternalInstance) | Emitted when destroyed.                                         |
| mousedown  | (evt: VcPickEvent)                      | Emitted when the mouse is pressed on this primitive.            |
| mouseup    | (evt: VcPickEvent)                      | Emitted when the mouse bounces up on this primitive.            |
| click      | (evt: VcPickEvent)                      | Emitted when the mouse clicks on the primitive.                 |
| clickout   | (evt: VcPickEvent)                      | Emitted when the mouse clicks outside the primitive.            |
| dblclick   | (evt: VcPickEvent)                      | Emitted when the left mouse button double-clicks the primitive. |
| mousemove  | (evt: VcPickEvent)                      | Emitted when the mouse moves on this primitive.                 |
| mouseover  | (evt: VcPickEvent)                      | Emitted when the mouse moves to this primitive.                 |
| mouseout   | (evt: VcPickEvent)                      | Emitted when the mouse moves out of this primitive.             |

### Slots

| Slot    | Description                                | Subtags              |
| ------- | ------------------------------------------ | -------------------- |
| default | Where `vc-geometry-instance` content goes. | vc-geometry-instance |

## Reference

- Refer to the official documentation: **[ClassificationPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html)**
