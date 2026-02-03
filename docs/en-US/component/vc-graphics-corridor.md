## VcGraphicsCorridor

Loading a corridor graphic. It is equivalent to initializing a `Cesium.CorridorGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsCorridor component.

:::demo

graphics/vc-graphics-corridor/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the corridor. |
| positions | VcCartesian3Array | | `optional` A Property specifying the positions for the corridor. |
| width | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A numeric Property specifying the width of the corridor. |
| height | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A numeric Property specifying the height of the corridor. |
| heightReference | number \| Cesium.HeightReference \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number | | `optional` A numeric Property specifying the extruded height. |
| extrudedHeightReference | number | | `optional` A Property specifying what the extruded height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| cornerType | number \| Cesium.CornerType \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `0` | `optional` An enum Property specifying the style of the corners. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude. |
| fill | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `true` | `optional` A boolean Property specifying whether the corridor is filled with the provided material. |
| material | VcMaterial | `'white'` | `optional` A Material Property specifying the appearance of the corridor. |
| outline | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `false` | `optional` A boolean Property specifying whether the corridor outline is displayed. |
| outlineColor | VcColor | `'black'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | number \| Cesium.ShadowMode \| VcCallbackPropertyFunction\<number\> | `0` | `optional` An enum Property specifying whether the corridor casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition | | `optional` A Property specifying at what distance from the camera that this corridor will be displayed. |
| classificationType | number \| Cesium.ClassificationType \| VcCallbackPropertyFunction\<Cesium.ClassificationType\> | `2` | `optional` An enum Property specifying the classification type. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| zIndex | number | | `optional` A Property specifying the zIndex used for ordering ground geometry. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[CorridorGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html)**
