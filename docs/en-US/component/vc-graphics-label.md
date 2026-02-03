## VcGraphicsLabel

Loading a label graphic. It is equivalent to initializing a `Cesium.LabelGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsLabel component.

:::demo

graphics/vc-graphics-label/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the label. |
| text | string | | `optional` A string Property specifying the text of the label. Supports '\n' for line breaks. |
| font | string | `'30px sans-serif'` | `optional` A string Property specifying the CSS font of the label. |
| labelStyle | number | `0` | `optional` An enum Property specifying the style of the label. **FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2** |0/1/2|
| scale | number | `1.0` | `optional` A numeric Property specifying the scale to apply to the text size. |
| showBackground | boolean | `false` | `optional` A boolean Property specifying the visibility of the background. |
| backgroundColor | VcColor\|string\|Array | `{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }` | `optional` A Color Property specifying the color of the background. |
| backgroundPadding | VcCartesian2\|Array | `{x: 7, y: 5}` | `optional` A VcCartesian2 Property specifying the padding of the background. |
| pixelOffset | VcCartesian2\|Array | `{x: 0, y: 0}` | `optional` A VcCartesian2 Property specifying the pixel offset. |
| eyeOffset | VcPosition\|Array | `{x: 0, y: 0, z: 0}` | `optional` A VcPosition Property specifying the eye offset. |
| horizontalOrigin | number | `0` | `optional` A Property specifying the HorizontalOrigin. **CENTER: 0, LEFT: 1, RIGHT: -1** |0/1/-1|
| verticalOrigin | number | `0` | `optional` A Property specifying the VerticalOrigin. **CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |0/1/2/-1|
| heightReference | number | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fillColor | VcColor\|string\|Array | `white` | `optional` A Color Property specifying the fill color. |
| outlineColor | VcColor\|string\|Array | `black` | `optional` A Color Property specifying the outline color. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the outline width. |
| translucencyByDistance | VcNearFarScalar\|Array | | `optional` A VcNearFarScalar Property used to set translucency based on distance from the camera. |
| pixelOffsetScaleByDistance | VcNearFarScalar\|Array | | `optional` A VcNearFarScalar Property used to set pixelOffset based on distance from the camera. |
| scaleByDistance | VcNearFarScalar\|Array | | `optional` A VcNearFarScalar Property used to scale the label based on distance from the camera. |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this label will be displayed. |
| disableDepthTestDistance | number | | `optional` A Property specifying the distance from the camera at which to disable the depth test. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[LabelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html)**
