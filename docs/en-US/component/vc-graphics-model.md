## VcGraphicsModel

Loading a model graphic. It is equivalent to initializing a `Cesium.ModelGraphics` instance.

**Note:** Needs to be mounted as a subcomponent of `vc-entity` to load properly.

### Basic usage

Basic usage of VcGraphicsModel component.

:::demo

graphics/vc-graphics-model/usage

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the model. |
| uri | string | | `optional` A string Property specifying the URI of the model. |
| scale | number | `1.0` | `optional` A numeric Property specifying the scale to apply to the model. |
| minimumPixelSize | number | `0.0` | `optional` A numeric Property specifying the minimum pixel size. |
| maximumScale | number | | `optional` A numeric Property specifying the maximum pixel size. |
| incrementallyLoadTextures | boolean | `true` | `optional` A boolean Property specifying whether textures may continue to stream in after the model is loaded. |
| runAnimations | boolean | `true` | `optional` A boolean Property specifying whether the model's animations should be started. |
| clampAnimations | boolean | `true` | `optional` A boolean Property specifying whether animations should hold the last pose. |
| shadows | number | `1` | `optional` An enum Property specifying whether the model casts or receives shadows. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| heightReference | number | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| silhouetteColor | VcColor\|string\|Array | `'red'` | `optional` A Color Property specifying the silhouette color. |
| silhouetteSize | number | `0.0` | `optional` A numeric Property specifying the silhouette size in pixels. |
| color | VcColor\|string\|Array | `'white'` | `optional` A Color Property specifying the color to blend with the model. |
| colorBlendMode | number | `0` | `optional` An enum Property specifying how to blend the color. **HIGHLIGHT: 0, REPLACE: 1, MIX: 2** |0/1/2|
| colorBlendAmount | number | `0.5` | `optional` A numeric Property specifying the strength of the color blend. |
| imageBasedLightingFactor | VcCartesian2\|Array | `{x: 1.0, y: 1.0}` | `optional` A VcCartesian2 Property specifying the factors for image-based lighting. |
| lightColor | VcColor\|string\|Array | | `optional` A Color Property specifying the light color used for shading. |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this model will be displayed. |
| nodeTransformations | Cesium.TranslationRotationScale | | `optional` A TranslationRotationScale Property specifying node transformations. |
| articulations | any | | `optional` Articulations for the model. |
| clippingPlanes | Cesium.ClippingPlaneCollection | | `optional` A ClippingPlaneCollection Property specifying clipping planes. |

### Events

| Name              | Parameters                              | Description                                                      |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| definitionChanged |                                         | Triggers when a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[ModelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html)**
