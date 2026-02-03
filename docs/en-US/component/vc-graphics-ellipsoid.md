## VcGraphicsEllipsoid

Loading an ellipsoid graphic. It is equivalent to initializing a `Cesium.EllipsoidGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsEllipsoid component.

:::demo

graphics/vc-graphics-ellipsoid/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the ellipsoid. |
| radii | VcPosition | | `optional` A VcPosition Property specifying the radii of the ellipsoid. |
| innerRadii | VcPosition | | `optional` A VcPosition Property specifying the inner radii of the ellipsoid. |
| minimumClock | number | `0.0` | `optional` A numeric Property specifying the minimum clock angle of the ellipsoid. |
| maximumClock | number | `2*Math.PI` | `optional` A numeric Property specifying the maximum clock angle of the ellipsoid. |
| minimumCone | number | `0.0` | `optional` A numeric Property specifying the minimum cone angle of the ellipsoid. |
| maximumCone | number | `Math.PI` | `optional` A numeric Property specifying the maximum cone angle of the ellipsoid. |
| heightReference | number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fill | boolean | `true` | `optional` A boolean Property specifying whether the ellipsoid is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'WHITE'` | `optional` A Material Property specifying the appearance of the ellipsoid. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the ellipsoid outline is displayed. |
| outlineColor | VcColor\|string\|Array | `'BLACK'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| stackPartitions | number | `64` | `optional` A numeric Property specifying the number of stacked layers. |
| slicePartitions | number | `64` | `optional` A numeric Property specifying the number of radial slices. |
| subdivisions | number | `128` | `optional` A numeric Property specifying the number of samples per outline ring. |
| shadows | number | `0` | `optional` An enum Property specifying whether the ellipsoid casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this ellipsoid will be displayed. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[EllipsoidGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html)**
