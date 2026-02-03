## VcGraphicsPolylineVolume

Loading a polyline volume graphic. It is equivalent to initializing a `Cesium.PolylineVolumeGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsPolylineVolume component.

:::demo

graphics/vc-graphics-polyline-volume/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the polyline volume. |
| positions | Array | | `optional` An array Property specifying the positions for the polyline volume. |
| shape | Array | | `optional` An array Property specifying the cross-sectional shape of the polyline volume. |
| cornerType | number | `0` | `optional` An enum Property specifying the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |0/1/2|
| granularity | number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the polyline volume is filled with the provided material. |
| material | VcMaterial\|string\|Array | | `optional` A Material Property specifying the appearance of the polyline volume. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the polyline volume outline is displayed. |
| outlineColor | VcColor\|string\|Array | | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | number | `0` | `optional` An enum Property specifying whether the polyline volume casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this polyline volume will be displayed. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PolylineVolumeGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html)**
