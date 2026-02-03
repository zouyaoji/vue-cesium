## VcGraphicsBillboard

Loading a billboard graphic. It is equivalent to initializing a `Cesium.BillboardGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsBillboard component.

:::demo

graphics/vc-graphics-billboard/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the billboard. |
| image | string \| HTMLCanvasElement \|Cesium.CallbackProperty \| VcCallbackPropertyFunction\<string\>| | `optional` A Property specifying the Image, URI, or Canvas to use for the billboard. |
| scale | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `1.0` | `optional` A numeric Property specifying the scale to apply to the image size. |
| pixelOffset | VcCartesian2 | `{x: 0, y: 0}` | `optional` A VcCartesian2 Property specifying the pixel offset. |
| eyeOffset | VcPosition | `{x: 0, y: 0, z: 0}` | `optional` A VcPosition Property specifying the eye offset. |
| horizontalOrigin | number \| Cesium.HorizontalOrigin \| VcCallbackPropertyFunction\<number\> | `0` | `optional` A Property specifying the HorizontalOrigin. **CENTER: 0, LEFT: 1, RIGHT: -1** |0/1/-1|
| verticalOrigin | number \| Cesium.VerticalOrigin \| VcCallbackPropertyFunction\<number\> | `0` | `optional` A Property specifying the VerticalOrigin. **CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |0/1/2/-1|
| heightReference | number \| Cesium.HeightReference \| VcCallbackPropertyFunction\<number\> | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| color | VcColor | `'white'` | `optional` A Property specifying the tint Color of the image. |
| rotation  | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `0` | `optional` A numeric Property specifying the rotation about the alignedAxis. |
| alignedAxis | VcPosition | `{x: 0, y: 0, z: 0}` | `optional` A VcPosition Property specifying the unit vector axis of rotation. |
| sizeInMeters  | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | | `optional` A boolean Property specifying whether this billboard's size should be measured in meters. |
| width  | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A numeric Property specifying the width of the billboard in pixels, overriding the native size. |
| height  | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A numeric Property specifying the height of the billboard in pixels, overriding the native size. |
| scaleByDistance | VcNearFarScalar | | `optional` A VcNearFarScalar Property used to scale the point based on distance from the camera. |
| translucencyByDistance | VcNearFarScalar | | `optional` A VcNearFarScalar Property used to set translucency based on distance from the camera. |
| pixelOffsetScaleByDistance | VcNearFarScalar| | `optional` A VcNearFarScalar Property used to set pixelOffset based on distance from the camera. |
| imageSubRegion | VcBoundingRectangle | | `optional` A Property specifying a BoundingRectangle that defines a sub-region of the image to use for the billboard, rather than the entire image, measured in pixels from the bottom-left. |
| distanceDisplayCondition | VcDistanceDisplayCondition | | `optional` A Property specifying at what distance from the camera that this billboard will be displayed. |
| disableDepthTestDistance | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A Property specifying the distance from the camera at which to disable the depth test to. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged | (property: Cesium.Property)             | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[BillboardGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BillboardGraphics.html)**
