## VcGraphicsEllipse

Loading an ellipse graphic. It is equivalent to initializing a `Cesium.EllipseGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsEllipse component.

:::demo

graphics/vc-graphics-ellipse/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the ellipse. |
| semiMajorAxis | number | | `optional` A numeric Property specifying the length of the semi-major axis. |
| semiMinorAxis | number | | `optional` A numeric Property specifying the length of the semi-minor axis. |
| height | number | `0` | `optional` A numeric Property specifying the height of the ellipse. |
| heightReference | number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number | | `optional` A numeric Property specifying the extruded height. |
| extrudedHeightReference | number | | `optional` A Property specifying what the extruded height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| rotation | number | `0.0` | `optional` A numeric Property specifying the rotation of the ellipse counterclockwise from north. |
| stRotation | number | `0.0` | `optional` A numeric Property specifying the rotation of the ellipse texture counterclockwise from north. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the ellipse is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Material Property specifying the appearance of the ellipse. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the ellipse outline is displayed. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| numberOfVerticalLines | number | `16` | `optional` A numeric Property specifying the number of vertical lines to draw along the perimeter. |
| shadows | number | `0` | `optional` An enum Property specifying whether the ellipse casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this ellipse will be displayed. |
| classificationType | number | `2` | `optional` An enum Property specifying the classification type. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| zIndex | number | | `optional` A Property specifying the zIndex used for ordering ground geometry. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[EllipseGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGraphics.html)**
