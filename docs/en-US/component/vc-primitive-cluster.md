# VcPrimitiveCluster

Clusters points, billboards, and labels using the primitive API.

## Basic Usage

:::demo

primitives/vc-primitive-cluster/usage

:::

## API

### Props

| Property           | Type               | Default | Description                                                                                                 |
| ------------------ | ------------------ | ------- | ----------------------------------------------------------------------------------------------------------- |
| show               | boolean            | `true`  | `optional` Determines if this primitive will be shown.                                                      |
| enabled            | boolean            | `true`  | `optional` Whether clustering is enabled.                                                                   |
| pixelRange         | number             | `80`    | `optional` Pixel range to extend the screen-space bounding box.                                             |
| minimumClusterSize | number             | `2`     | `optional` Minimum number of screen-space objects that can be clustered.                                    |
| clusterBillboards  | boolean            | `true`  | `optional` Whether clustering billboard primitives is enabled.                                              |
| clusterLabels      | boolean            | `true`  | `optional` Whether clustering label primitives is enabled.                                                  |
| clusterPoints      | boolean            | `true`  | `optional` Whether clustering point primitives is enabled.                                                  |
| billboards         | VcBillboardProps[] | `[]`    | `optional` Array of billboard collections. Same structure as the `vc-collection-billboard` component props. |
| labels             | VcLabelProps[]     | `[]`    | `optional` Array of label collections. Same structure as the `vc-collection-label` component props.         |
| points             | VcPointProps[]     | `[]`    | `optional` Array of point collections. Same structure as the `vc-collection-point` component props.         |
| enableMouseEvent   | boolean            | `true`  | `optional` Specifies whether to respond to mouse pick events.                                               |

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

## Reference

- Refer to the official documentation: **[Primitive clustering example](https://github.com/tingyuxuan2302/cesium-vue3-vite/blob/github/src/utils/cesiumCtrl/primitiveCluster.js)**
