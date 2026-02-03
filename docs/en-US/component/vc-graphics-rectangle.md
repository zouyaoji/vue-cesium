## VcGraphicsRectangle

Loading a rectangle graphic. It is equivalent to initializing a `Cesium.RectangleGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsRectangle component.

:::demo

graphics/vc-graphics-rectangle/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the rectangle. |
| coordinates | VcRectangle\|Array | | `optional` A Rectangle Property specifying the rectangle coordinates. |
| height | number | `0` | `optional` A numeric Property specifying the height of the rectangle. |
| heightReference | number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number | | `optional` A numeric Property specifying the extruded height. |
| extrudedHeightReference | number | | `optional` A Property specifying what the extruded height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| rotation | number | `0.0` | `optional` A numeric Property specifying the rotation of the rectangle clockwise from north. |
| stRotation | number | `0.0` | `optional` A numeric Property specifying the rotation of the rectangle texture counterclockwise from north. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the rectangle is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Material Property specifying the appearance of the rectangle. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the rectangle outline is displayed. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | number | `0` | `optional` An enum Property specifying whether the rectangle casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this rectangle will be displayed. |
| classificationType | number | `2` | `optional` An enum Property specifying the classification type. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| zIndex | number | `0` | `optional` A Property specifying the zIndex used for ordering ground geometry. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[RectangleGraphics](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html)**
