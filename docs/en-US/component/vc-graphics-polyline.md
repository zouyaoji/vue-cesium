## VcGraphicsPolyline

Loading a polyline graphic. It is equivalent to initializing a `Cesium.PolylineGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsPolyline component.

:::demo

graphics/vc-graphics-polyline/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the polyline. |
| positions | Array | | `optional` An array Property specifying the positions of the polyline. |
| width | number | `1.0` | `optional` A numeric Property specifying the width of the polyline in pixels. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Material Property specifying the appearance of the polyline. |
| depthFailMaterial | VcMaterial\|string\|Array | | `optional` A Material Property specifying the appearance of the polyline below terrain. |
| arcType | number | `1` | `optional` An enum Property specifying the type of line. **NONE: 0, GEODESIC: 1, RHUMB: 2** |0/1/2|
| clampToGround | boolean | `false` | `optional` A boolean Property specifying whether the polyline is clamped to ground. |
| shadows | number | | `optional` An enum Property specifying whether the polyline casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| classificationType | number | `2` | `optional` An enum Property specifying the classification type. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this polyline will be displayed. |
| zIndex | number | `0` | `optional` A Property specifying the zIndex used for ordering ground geometry. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PolylineGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html)**
