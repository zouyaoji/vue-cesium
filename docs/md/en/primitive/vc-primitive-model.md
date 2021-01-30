# Model

The `vc-primitive-model` component is used to load a 3D model based on glTF, the runtime asset format for WebGL, OpenGL ES, and OpenGL.

## Example

### Load a model with `vc-primitive-model`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-model
          :url="url"
          @readyPromise="readyPromise"
          :modelMatrix="modelMatrix"
          :scale="10000"
          :minimumPixelSize="128"
          :maximumScale="200000"
          @click="clicked"
          :luminanceAtZenith="luminanceAtZenith"
          :specularEnvironmentMaps="specularEnvironmentMaps"
          :sphericalHarmonicCoefficients="sphericalHarmonicCoefficients"
        >
        </vc-primitive-model>
        <div class="demo-tool">
          <span>Luminance at Zenith</span>
          <vue-slider v-model="luminanceAtZenith" :min="0" :max="2" :interval="0.01"></vue-slider>
          <md-checkbox v-model="proceduralEnvironmentLighting" class="md-primary">Use procedural environment lighting</md-checkbox>
        </div>
      </vc-viewer>
    </div>
  </template>

  <script>
    const coefficients = [
      [-0.066550267689383, -0.022088055746048, 0.078835009246127],
      [0.038364097478591, 0.045714300098753, 0.063498904606215],
      [-0.01436536331281, -0.026490613715151, -0.05018940406602],
      [-0.05153278691789, -0.050777795729986, -0.056449044453032],
      [0.043454596136534, 0.046672590104157, 0.05753010764661],
      [-0.00164046627411, 0.001286638231156, 0.007228908989616],
      [-0.042260855700641, -0.046394335094707, -0.057562936365585],
      [-0.004953478914091, -0.000479681664876, 0.008508150106928]
    ]
    const environmentMapURL = './statics/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'
    export default {
      data() {
        return {
          url: './statics/SampleData/models/Pawns/Pawns.glb',
          modelMatrix: {},
          proceduralEnvironmentLighting: false,
          luminanceAtZenith: 0.2,
          specularEnvironmentMaps: environmentMapURL,
          sphericalHarmonicCoefficients: coefficients
        }
      },
      watch: {
        proceduralEnvironmentLighting(val) {
          if (val) {
            this.specularEnvironmentMaps = undefined
            this.sphericalHarmonicCoefficients = undefined
          } else {
            this.specularEnvironmentMaps = environmentMapURL
            this.sphericalHarmonicCoefficients = coefficients
          }
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.viewer = viewer
          this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
        },
        readyPromise(model) {
          const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)
          this.viewer.scene.camera.flyToBoundingSphere(boundingSphere)
        },
        clicked(e) {
          console.log(e)
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
      <vc-primitive-model
        :url="url"
        @readyPromise="readyPromise"
        :modelMatrix="modelMatrix"
        :scale="10000"
        :minimumPixelSize="128"
        :maximumScale="200000"
        @click="clicked"
        :luminanceAtZenith="luminanceAtZenith"
        :specularEnvironmentMaps="specularEnvironmentMaps"
        :sphericalHarmonicCoefficients="sphericalHarmonicCoefficients"
      >
      </vc-primitive-model>
      <div class="demo-tool">
        <span>Luminance at Zenith</span>
        <vue-slider v-model="luminanceAtZenith" :min="0" :max="2" :interval="0.01"></vue-slider>
        <md-checkbox v-model="proceduralEnvironmentLighting" class="md-primary">Use procedural environment lighting</md-checkbox>
      </div>
    </vc-viewer>
  </div>
</template>

<script>
  const coefficients = [
    [-0.066550267689383, -0.022088055746048, 0.078835009246127],
    [0.038364097478591, 0.045714300098753, 0.063498904606215],
    [-0.01436536331281, -0.026490613715151, -0.05018940406602],
    [-0.05153278691789, -0.050777795729986, -0.056449044453032],
    [0.043454596136534, 0.046672590104157, 0.05753010764661],
    [-0.00164046627411, 0.001286638231156, 0.007228908989616],
    [-0.042260855700641, -0.046394335094707, -0.057562936365585],
    [-0.004953478914091, -0.000479681664876, 0.008508150106928]
  ]
  const environmentMapURL = './statics/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'
  export default {
    data() {
      return {
        url: './statics/SampleData/models/Pawns/Pawns.glb',
        modelMatrix: {},
        proceduralEnvironmentLighting: false,
        luminanceAtZenith: 0.2,
        specularEnvironmentMaps: environmentMapURL,
        sphericalHarmonicCoefficients: coefficients
      }
    },
    watch: {
      proceduralEnvironmentLighting(val) {
        if (val) {
          this.specularEnvironmentMaps = undefined
          this.sphericalHarmonicCoefficients = undefined
        } else {
          this.specularEnvironmentMaps = environmentMapURL
          this.sphericalHarmonicCoefficients = coefficients
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.viewer = viewer
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      },
      readyPromise(model) {
        const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)
        this.viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      },
      clicked(e) {
        console.log(e)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
|name|type|default|description|
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
| shadows | Number | `1` | `optional` Determines whether the model casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4** |
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
| dequantizeInShader | Boolean | `true` | `optional` Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models.|
| imageBasedLightingFactor | Array\|Object | | `optional` Scales diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.|
| lightColor | Array\|Object | | `optional` The light color when shading the model. When undefined the scene's light color is used instead. |
| luminanceAtZenith | Number | `0.2` | `optional` The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map.|
| sphericalHarmonicCoefficients | Array\|Object || `optional` The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.|
| specularEnvironmentMaps | String || `optional` A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps. |
| credit | Object\|String | | `optional` A credit for the model, which is displayed on the canvas. |
| backFaceCulling | Boolean | `true` | `optional` Whether to cull back-facing geometry. When true, back face culling is determined by the material's doubleSided property; when false, back face culling is disabled. Back faces are not culled if Model#color is translucent or Model#silhouetteSize is greater than 0.0. |

---

- Refer to the official document: **[Model](https://cesium.com/docs/cesiumjs-ref-doc/Model.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| readyPromise | model | Triggers when the model is ready for use.|
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse is pressed on this primitive. |
| mouseup | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse bounces on the primitive. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the primitive. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the primitive.|
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the primitive. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on this primitive. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to this primitive. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the primitive. |
---
