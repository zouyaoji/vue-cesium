# VcPostProcessStage

Loading post-processing effects. It is equivalent to initializing a `Cesium.PostProcessStage` instance.

## Basic usage

Basic usage of VcPostProcessStage component.

:::demo Use the `vc-post-process-stage` tag to add a raining effect on the viewer.

post-processes/vc-post-process-stage/usage

:::

## Props

| Name             | Type                   | Default | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fragmentShader   | string                 |         | `required` The fragment shader to use. The default sampler2D uniforms are colorTexture and depthTexture. The color texture is the output of rendering the scene or the previous stage. The depth texture is the output from rendering the scene. The shader should contain one or both uniforms. There is also a vec2 varying named v_textureCoordinates that can be used to sample the textures. |
| uniforms         | any                    |         | `optional` An object whose properties will be used to set the shaders uniforms. The properties can be constant values or a function. A constant value can also be a URI, data URI, or HTML element to use as a texture.                                                                                                                                                                           |
| textureScale     | number                 | `1.0`   | `optional` A number in the range (0.0, 1.0] used to scale the texture dimensions. A scale of 1.0 will render this post-process stage to a texture the size of the viewport.                                                                                                                                                                                                                       |
| forcePowerOfTwo  | boolean                | `false` | `optional` Whether or not to force the texture dimensions to be both equal powers of two. The power of two will be the next power of two of the minimum of the dimensions.                                                                                                                                                                                                                        |
| sampleMode       | number                 | `0`     | `optional` How to sample the input color texture. **{NEAREST: 0, LINEAR: 1}**                                                                                                                                                                                                                                                                                                                     |
| pixelFormat      | number                 |         | `optional` The color pixel format of the output texture.                                                                                                                                                                                                                                                                                                                                          |
| pixelDatatype    | number                 |         | `optional` The pixel data type of the output texture.                                                                                                                                                                                                                                                                                                                                             |
| clearColor       | VcColor\|Array\|string | `BLACK` | `optional` The color to clear the output texture to.                                                                                                                                                                                                                                                                                                                                              |
| scissorRectangle | VcBoundingRectangle    |         | `optional` The rectangle to use for the scissor test.                                                                                                                                                                                                                                                                                                                                             |
| name             | string                 |         | `optional` The unique name of this post-process stage for reference by other stages in a composite. If a name is not supplied, a GUID will be generated.                                                                                                                                                                                                                                          |

## Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

## Reference

- Official document: [PostProcessStage](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStage.html)
