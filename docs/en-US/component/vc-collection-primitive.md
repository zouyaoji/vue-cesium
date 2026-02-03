## VcCollectionPrimitive

Loading a collection of primitives. It is equivalent to initializing a `Cesium.PrimitiveCollection` instance.

:::tip
A member attribute `Scene.primitives(PrimitiveCollection)` of the `Viewer` instance that is initialized by `vc-viewer`. It is also a primitive itself so collections can be added to collections forming a hierarchy.
:::

### Basic usage

Basic usage of VcCollectionPrimitive component.

:::demo Use the `vc-collection-primitive` tag to add a collection of billboard primitives and model primitives to the viewer.

primitives/vc-collection-primitive/usage

:::

### Props

| Name             | Type    | Default | Description                                                                                                                                                 | Accepted Values |
| ---------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| destroyChildren  | boolean | `true`  | `optional` Specify whether to destroy child primitives.                                                                                                     |
| modelMatrix      | Matrix4 |         | `optional` The 4x4 transformation matrix that transforms each billboard from model to world coordinates.                                                    |
| show             | boolean | `true`  | `optional` Determines if the primitives in the collection will be shown.                                                                                    |
| polygons         | Array   | `[]`    | `optional` Specify an array of polygon primitive collections. The structure of the array object is the same as the attribute of the `vc-polygon` component. |
| enableMouseEvent | boolean | `true`  | `optional` Specify whether the mouse event takes effect.                                                                                                    |

### Events

| Name           | Parameters                                                     | Description                                                      |
| -------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad     | (instance: VcComponentInternalInstance)                        | Triggers before the cesiumObject is loaded.                      |
| ready          | (readyObj: VcReadyObject)                                      | Triggers when the cesiumObject is successfully loaded.           |
| destroyed      | (instance: VcComponentInternalInstance)                        | Triggers when the cesiumObject is destroyed.                     |
| mousedown      | (evt: VcPickEvent)                                             | Triggers when the mouse is pressed on this primitive.            |
| mouseup        | (evt: VcPickEvent)                                             | Triggers when the mouse bounces up on this primitive.            |
| click          | (evt: VcPickEvent)                                             | Triggers when the mouse clicks on the primitive.                 |
| clickout       | (evt: VcPickEvent)                                             | Triggers when the mouse clicks outside the primitive.            |
| dblclick       | (evt: VcPickEvent)                                             | Triggers when the left mouse button double-clicks the primitive. |
| mousemove      | (evt: VcPickEvent)                                             | Triggers when the mouse moves on this primitive.                 |
| mouseover      | (evt: VcPickEvent)                                             | Triggers when the mouse moves to this primitive.                 |
| mouseout       | (evt: VcPickEvent)                                             | Triggers when the mouse moves out of this primitive.             |
| primitiveAdded | (primitive: VcCesiumObject, collection: VcCollectionPrimitive) | Triggers when a primitive is added to the collection.            |

### Slots

| Name    | Description                                                               | Subtags    |
| ------- | ------------------------------------------------------------------------- | ---------- |
| default | This is where other primitive collections or primitives tag content goes. | Primitives |

### Methods

| Name               | Parameters                               | Description                                     |
| ------------------ | ---------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\>  | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                 | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component. |

### Reference

- Refer to the official documentation: **[PrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html)**
