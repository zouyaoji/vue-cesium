## VcGraphicsPolygon

Loading a polygon graphic. It is equivalent to initializing a `Cesium.PolygonGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsPolygon component.

:::demo

graphics/vc-graphics-polygon/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the polygon. |
| hierarchy | VcPolygonHierarchy\|Array | | `optional` A Property specifying the polygon hierarchy. |
| height | number | `0` | `optional` A numeric Property specifying the height of the polygon. |
| heightReference | number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number | | `optional` A numeric Property specifying the extruded height. |
| extrudedHeightReference | number | | `optional` A Property specifying what the extruded height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| stRotation | number | `0.0` | `optional` A numeric Property specifying the rotation of the texture counterclockwise from north. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the polygon is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Material Property specifying the appearance of the polygon. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the polygon outline is displayed. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| perPositionHeight | boolean | `false` | `optional` A boolean Property specifying whether the polygon uses per-position heights. |
| closeTop | boolean | `true` | `optional` A boolean Property specifying whether the top of the polygon is closed. |
| closeBottom | boolean | `true` | `optional` A boolean Property specifying whether the bottom of the polygon is closed. |
| arcType | number | `1` | `optional` An enum Property specifying the type of line. **NONE: 0, GEODESIC: 1, RHUMB: 2** |0/1/2|
| shadows | number | `0` | `optional` An enum Property specifying whether the polygon casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this polygon will be displayed. |
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

- Refer to the official documentation: **[PolygonGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html)**
