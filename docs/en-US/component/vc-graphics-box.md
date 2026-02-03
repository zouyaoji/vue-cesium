## VcGraphicsBox

Loading a box graphic. It is equivalent to initializing a `Cesium.BoxGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsBox component.

:::demo

graphics/vc-graphics-box/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the box. |
| dimensions | VcPosition | | `optional` A VcPosition Property specifying the length, width, and height of the box. |
| heightReference | number \| Cesium.HeightReference \| VcCallbackPropertyFunction\<number\> | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fill | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `true` | `optional` A boolean Property specifying whether the box is filled with the provided material. |
| material | VcMaterial | `'WHITE'` | `optional` A Material Property specifying the appearance of the box. |
| outline | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `false` | `optional` A boolean Property specifying whether the box outline is displayed. |
| outlineColor | VcColor | `'BLACK'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `0` | `optional` An enum Property specifying whether the box casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition | | `optional` A Property specifying at what distance from the camera that this box will be displayed. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[BoxGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html)**
