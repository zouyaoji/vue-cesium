## VcGraphicsCylinder

Loading a cylinder graphic. It is equivalent to initializing a `Cesium.CylinderGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsCylinder component.

:::demo

graphics/vc-graphics-cylinder/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the cylinder. |
| length | Array | | `optional` A numeric Property specifying the length of the cylinder. |
| topRadius | number | | `optional` A numeric Property specifying the radius of the top of the cylinder. |
| bottomRadius | number | | `optional` A numeric Property specifying the radius of the bottom of the cylinder. |
| heightReference | number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fill | boolean | `true` | `optional` A boolean Property specifying whether the cylinder is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'WHITE'` | `optional` A Material Property specifying the appearance of the cylinder. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the cylinder outline is displayed. |
| outlineColor | VcColor\|string\|Array | `'BLACK'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| numberOfVerticalLines | number | `16` | `optional` A numeric Property specifying the number of vertical lines to draw along the perimeter. |
| slices | number | `128` | `optional` A numeric Property specifying the number of edges around the perimeter of the cylinder. |
| shadows | number | `0` | `optional` An enum Property specifying whether the cylinder casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this cylinder will be displayed. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html)**
