# Model

The `vc-primitive-model` component is used to load a 3D model based on glTF, the runtime asset format for WebGL, OpenGL ES, and OpenGL.

## Example

### Load a model with `vc-primitive-model`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-model :url="url" :modelMatrix="modelMatrix" :scale="10000" :minimumPixelSize="128" :maximumScale="200000"> </vc-primitive-model>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
          modelMatrix: {}
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-primitive-model :url="url" :modelMatrix="modelMatrix" :scale="10000" :minimumPixelSize="128" :maximumScale="200000">
      </vc-primitive-model>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
        modelMatrix: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
|name|type|default|description|                                                                                     |
| ------------------------- | ------- | ------ | ---------------------------------------------------------------------------------------------- |
| url                       | String  |        | `required` The url to the .gltf file.                                                         |
| basePath                  | String  |        | `optional` The base path that paths in the glTF JSON are relative to.                                           |
| show                      | Boolean | `true` | `optional` Determines if the model primitive will be shown. |
| modelMatrix               | Object  |        | `optional` The 4x4 transformation matrix that transforms the model from model to world coordinates. |
| scale                     | Number  | `1.0`  | `optional` A uniform scale applied to this model.                                                               |
| minimumPixelSize          | Number  | `0.0`  | `optional` The approximate minimum pixel size of the model regardless of zoom. |
| maximumScale              | Number  |        | `optional` The maximum scale for the model.                                                              |
| id                        | \*      |        | `optional` A user-defined object to return when the model is picked with Scene#pick. |
| allowPicking              | Boolean | `true` | `optional` When true, each glTF mesh and primitive is pickable with Scene#pick. |
| incrementallyLoadTextures | Boolean | `true` | `optional` Determine if textures may continue to stream in after the model is loaded. |
| asynchronous              | Boolean | `true` | `optional` Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded. |
| clampAnimations | Boolean | `true` | `optional` Determines if the model's animations should hold a pose over frames where no keyframes are specified. |
| shadows | Number | `1` | `optional` Determines whether the model casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Draws the bounding sphere for each DrawCommand in the model. |
| debugWireframe | Boolean | `false` | `optional` For debugging only. Draws the model in wireframe. |
| heightReference | Number | `0` | `optional` Determines how the model is drawn relative to terrain. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| scene | Object | `false` | `optional` Must be passed in for models that use the height reference property. |
| distanceDisplayCondition | Object | | `optional` The condition specifying at what distance from the camera that this model will be displayed. **Structure: { near: number, far: number }** |
| color | Object\|String\|Array | `'WHITE'` | `optional` A color that blends with the model's rendered color. |
| colorBlendMode | Number | `0` | `optional` Defines how the color blends with the model. **HIGHLIGHT: 0, REPLACE: 1, MIX: 2** |
| colorBlendAmount | Number | `0.5` | `optional` Value used to determine the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two. |
| silhouetteColor | Object\|String\|Array | `'RED'` | `optional` The silhouette color. If more than 256 models have silhouettes enabled, there is a small chance that overlapping models will have minor artifacts. |
| silhouetteSize | Number | `0.0` | `optional` The size of the silhouette in pixels. |
| clippingPlanes | Object | | `optional` The ClippingPlaneCollection used to selectively disable rendering the model. |
| debugWireframe | Boolean | `true` | `optional` Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models. |
| credit | Object\|String | | `optional` A credit for the model, which is displayed on the canvas. |

---

- Refer to the official document: **[Model](https://cesium.com/docs/cesiumjs-ref-doc/Model.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
