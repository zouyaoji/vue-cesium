## VcCollectionPoint

Loading a renderable collection of points. It is equivalent to initializing a `Cesium.PointPrimitiveCollection` instance. It is recommended to use the `points` prop to express when rendering massive points.

### Basic usage

Basic usage of VcCollectionPoint component.

:::demo Use the `vc-collection-point` and `vc-point` tag to add a point primitive collection object to the viewer.

primitives/vc-collection-point/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| modelMatrix | Cesium.Matrix4 | | `optional` The 4x4 transformation matrix that transforms each billboard from model to world coordinates. |
| debugShowBoundingVolume | boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| blendOption | number | | `optional` The billboard blending option. The default is used for rendering both opaque and translucent billboards. However, if either all of the billboards are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x. **OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2**|0/1/2|
| show | boolean | `true` | `optional` Determines if the primitives in the collection will be shown. |
| points | Array | `[]` | `optional` Specify an array of points collections. The structure of the array object is the same as the attribute of the `vc-point` component. |
| enableMouseEvent | boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### Events

| Name       | Parameters                              | Description                                                      |
| ---------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | (evt: VcPickEvent)                      | Triggers when the mouse bounces up on this primitive.            |
| click      | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the primitive.                 |
| clickout   | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | (evt: VcPickEvent)                      | Triggers when the mouse moves on this primitive.                 |
| mouseover  | (evt: VcPickEvent)                      | Triggers when the mouse moves to this primitive.                 |
| mouseout   | (evt: VcPickEvent)                      | Triggers when the mouse moves out of this primitive.             |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-point tag content goes. | vc-point |

### VcPoint

Loading a graphical point positioned in the 3D scene. It is equivalent to initializing a `Cesium.PointPrimitive` instance.

**Note:** It needs to be a subcomponent of `vc-collection-point` to load normally.

### VcPoint Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| color | VcColor\|Array\|string | `'white'` | `optional` The inner color of the point. |
| disableDepthTestDistance | number | | `optional` The distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied. |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` The condition specifying at what distance from the camera that this point will be displayed. |
| id | \* | | `optional` The user-defined value returned when the point is picked. |
| outlineColor | VcColor \| Array \| string | `'black'` | `optional` The outline color of the point. |
| outlineWidth | number | `0` | `optional`The outline width in pixels. This width adds to pixelSize, increasing the total size of the point. |
| pixelSize | number | `1` | `optional` The inner size of the point in pixels. |
| position       | VcPosition\|Array | | `optional` The position of this point. |
| scaleByDistance | VcNearFarScalar\|Array | | `optional` The near and far scaling properties of a point based on the point's distance from the camera |
| show | boolean | `true` | `optional` Determines if this point will be shown. Use this to hide or show a point, instead of removing it and re-adding it to the collection. |
| translucencyByDistance | VcNearFarScalar\|Array | | `optional` The near and far translucency properties of a point based on the point's distance from the camera. |
| enableMouseEvent | boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### VcPoint Events

| Name       | Parameters                              | Description                                                      |
| ---------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | (evt: VcPickEvent)                      | Triggers when the mouse bounces up on this primitive.            |
| click      | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the primitive.                 |
| clickout   | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | (evt: VcPickEvent)                      | Triggers when the mouse moves on this primitive.                 |
| mouseover  | (evt: VcPickEvent)                      | Triggers when the mouse moves to this primitive.                 |
| mouseout   | (evt: VcPickEvent)                      | Triggers when the mouse moves out of this primitive.             |

### Reference

- Refer to the official documentation: **[PointPrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html)**、**[PointPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html)**
