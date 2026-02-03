## VcGraphicsPoint

Loading a point graphic. It is equivalent to initializing a `Cesium.PointGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsPoint component.

:::demo

graphics/vc-graphics-point/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the point. |
| pixelSize | number | `1` | `optional` A numeric Property specifying the size of the point in pixels. |
| heightReference | number | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| color | VcColor\|string\|Array | `'white'` | `optional` A Color Property specifying the color of the point. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Color Property specifying the color of the outline. |
| outlineWidth | number | `0` | `optional` A numeric Property specifying the width of the outline in pixels. |
| scaleByDistance | VcNearFarScalar\|Array | | `optional` A VcNearFarScalar Property used to scale the point based on distance from the camera. |
| translucencyByDistance | VcNearFarScalar\|Array | | `optional` A VcNearFarScalar Property used to set translucency based on distance from the camera. |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this point will be displayed. |
| disableDepthTestDistance | number | | `optional` A Property specifying the distance from the camera at which to disable the depth test. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PointGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PointGraphics.html)**
