<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 20:16:51
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 17:52:24
 * @FilePath: \vue-cesium\docs\en-US\component\vc-primitive.md
-->

# VcPrimitive

Loads a primitive from one or more geometry instances or `vc-geometry-xxx` components, equivalent to initializing a `Cesium.Primitive` instance.

## Basic Usage

:::demo

primitives/vc-primitive/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Property | Type | Default | Description | Accepted Values |
| -------- | ---- | ------- | ----------- | --------------- |
| geometryInstances | Cesium.GeometryInstance \| Array<Cesium.GeometryInstance>\|Array | | `optional` The geometry instances - or a single geometry instance - to render. | |
| appearance | VcAppearance | | `optional` The appearance used to render the primitive. | |
| depthFailAppearance | VcAppearance | | `optional` The appearance used to shade this primitive when it fails the depth test. | |
| show | boolean | `true` | `optional` Determines if this primitive will be shown. | |
| modelMatrix | Cesium.Matrix4 | | `optional` The 4x4 transformation matrix that transforms the primitive (all geometry instances) from model to world coordinates. | |
| vertexCacheOptimize | boolean | `false` | `optional` When true, geometry vertices are optimized for the pre and post-vertex-shader caches. | |
| interleave | boolean | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time. | |
| compressVertices | boolean | `true` | `optional` When true, the geometry vertices are compressed, which will save memory. | |
| releaseGeometryInstances | boolean | `true` | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory. | |
| allowPicking | boolean | `true` | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved. | |
| cull | boolean | `true` | `optional` When true, the renderer frustum culls and horizon culls the primitive's commands based on their bounding volume. Set this to false for a small performance gain if you are manually culling the primitive. | |
| asynchronous | boolean | `true` | `optional` Determines if the primitive will be created asynchronously or block until ready. | |
| debugShowBoundingVolume | boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. | |
| shadows | number | `0` | `optional` Determines whether this primitive casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** | 0/1/2/3 |
| enableMouseEvent | boolean | `true` | `optional` Specify whether the mouse event takes effect. | |

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

- Refer to the official documentation: **[Primitive](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html)**
