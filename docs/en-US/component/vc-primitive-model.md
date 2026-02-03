# VcPrimitiveModel

Loads a 3D model based on glTF, equivalent to initializing a `Cesium.Model` instance.

Cesium supports geometry, materials, glTF animations, and glTF skinning. Individual glTF nodes are pickable with Scene#pick and animatable with Model#getNode. glTF cameras and lights are not currently supported.

An external glTF asset is created with `Model.fromGltf`. glTF JSON can also be created at runtime and passed to this constructor. The `readyPromise` resolves when the model is ready to render: all external files are downloaded and WebGL resources are created.

## Basic Usage

:::demo

primitives/vc-primitive-model/usage

:::

## API

### Props

| Property                      | Type                                                                                         | Default   | Description                                                                                                                                             | Accepted Values |
| ----------------------------- | -------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| url                           | string                                                                                       |           | `required` The url to the .gltf file.                                                                                                                   |                 |
| basePath                      | string                                                                                       |           | `optional` The base path that paths in the glTF JSON are relative to.                                                                                   |                 |
| show                          | boolean                                                                                      | `true`    | `optional` Determines if the model primitive will be shown.                                                                                             |                 |
| modelMatrix                   | Cesium.Matrix4                                                                               |           | `optional` The 4x4 transformation matrix that transforms the model from model to world coordinates.                                                     |                 |
| scale                         | number                                                                                       | `1.0`     | `optional` A uniform scale applied to this model.                                                                                                       |                 |
| minimumPixelSize              | number                                                                                       | `0.0`     | `optional` The approximate minimum pixel size of the model regardless of zoom.                                                                          |                 |
| maximumScale                  | number                                                                                       |           | `optional` The maximum scale for the model.                                                                                                             |                 |
| id                            | \*                                                                                           |           | `optional` A user-defined object to return when the model is picked with Scene#pick.                                                                    |                 |
| allowPicking                  | boolean                                                                                      | `true`    | `optional` When true, each glTF mesh and primitive is pickable with Scene#pick.                                                                         |                 |
| incrementallyLoadTextures     | boolean                                                                                      | `true`    | `optional` Determine if textures may continue to stream in after the model is loaded.                                                                   |                 |
| asynchronous                  | boolean                                                                                      | `true`    | `optional` Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded. |                 |
| clampAnimations               | boolean                                                                                      | `true`    | `optional` Determines if the model's animations should hold a pose over frames where no keyframes are specified.                                        |                 |
| shadows                       | number                                                                                       | `1`       | `optional` Determines whether the model casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3**    | 0/1/2/3         |
| debugShowBoundingVolume       | boolean                                                                                      | `false`   | `optional` For debugging only. Draws the bounding sphere for each DrawCommand in the model.                                                             |                 |
| debugWireframe                | boolean                                                                                      | `false`   | `optional` For debugging only. Draws the model in wireframe.                                                                                            |                 |
| heightReference               | number                                                                                       | `0`       | `optional` Determines how the model is drawn relative to terrain. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2**                                |                 |
| scene                         | Cesium.Scene                                                                                 | `false`   | `optional` Must be passed in for models that use the height reference property.                                                                         |                 |
| distanceDisplayCondition      | VcDistanceDisplayCondition\|Array                                                            |           | `optional` The condition specifying at what distance from the camera this model will be displayed.                                                      |                 |
| color                         | VcColor\|string\|Array                                                                       | `'white'` | `optional` A color that blends with the model's rendered color.                                                                                         |                 |
| colorBlendMode                | number                                                                                       | `0`       | `optional` Defines how the color blends with the model. **HIGHLIGHT: 0, REPLACE: 1, MIX: 2**                                                            | 0/1/2           |
| colorBlendAmount              | number                                                                                       | `0.5`     | `optional` Value used to determine the color strength when the colorBlendMode is MIX.                                                                   |                 |
| silhouetteColor               | VcColor\|string\|Array                                                                       | `'red'`   | `optional` The silhouette color.                                                                                                                        |                 |
| silhouetteSize                | number                                                                                       | `0.0`     | `optional` The size of the silhouette in pixels.                                                                                                        |                 |
| clippingPlanes                | Cesium.ClippingPlaneCollection \| VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection> |           | `optional` The clipping planes used to selectively disable rendering the model.                                                                         |                 |
| dequantizeInShader            | boolean                                                                                      | `true`    | `optional` Determines if a Draco encoded model is dequantized on the GPU to save memory.                                                                |                 |
| imageBasedLightingFactor      | VcCartesian2                                                                                 |           | `optional` Scales diffuse and specular image-based lighting from the earth, sky, atmosphere, and star skybox.                                           |                 |
| lightColor                    | VcColor                                                                                      |           | `optional` The light color when shading the model. When undefined the scene's light color is used instead.                                              |                 |
| luminanceAtZenith             | number                                                                                       | `0.2`     | `optional` The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map.                      |                 |
| sphericalHarmonicCoefficients | VcCartesian3Array                                                                            |           | `optional` The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.                                          |                 |
| specularEnvironmentMaps       | string                                                                                       |           | `optional` A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps.                                   |                 |
| credit                        | Cesium.Credit\|string                                                                        |           | `optional` A credit for the model, which is displayed on the canvas.                                                                                    |                 |
| backFaceCulling               | boolean                                                                                      | `true`    | `optional` Whether to cull back-facing geometry. Back faces are not culled if Model#color is translucent or Model#silhouetteSize is greater than 0.0.   |                 |
| enableMouseEvent              | boolean                                                                                      | `true`    | `optional` Specify whether the mouse event takes effect.                                                                                                |                 |

### Events

| Event        | Parameter                               | Description                                                     |
| ------------ | --------------------------------------- | --------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Emitted before loading.                                         |
| ready        | (readyObj: VcReadyObject)               | Emitted when loading succeeds.                                  |
| destroyed    | (instance: VcComponentInternalInstance) | Emitted when destroyed.                                         |
| readyPromise |                                         | Emitted when the primitive is ready to render.                  |
| mousedown    | (evt: VcPickEvent)                      | Emitted when the mouse is pressed on this primitive.            |
| mouseup      | (evt: VcPickEvent)                      | Emitted when the mouse bounces up on this primitive.            |
| click        | (evt: VcPickEvent)                      | Emitted when the mouse clicks on the primitive.                 |
| clickout     | (evt: VcPickEvent)                      | Emitted when the mouse clicks outside the primitive.            |
| dblclick     | (evt: VcPickEvent)                      | Emitted when the left mouse button double-clicks the primitive. |
| mousemove    | (evt: VcPickEvent)                      | Emitted when the mouse moves on this primitive.                 |
| mouseover    | (evt: VcPickEvent)                      | Emitted when the mouse moves to this primitive.                 |
| mouseout     | (evt: VcPickEvent)                      | Emitted when the mouse moves out of this primitive.             |

## Reference

- Refer to the official documentation: **[Model](https://cesium.com/docs/cesiumjs-ref-doc/Model.html)**
