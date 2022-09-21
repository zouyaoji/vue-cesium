## VcPrimitiveModel

Loading a 3D model based on glTF, the runtime asset format for WebGL, OpenGL ES, and OpenGL. It is equivalent to initializing a `Cesium.Model` instance.

Cesium includes support for geometry and materials, glTF animations, and glTF skinning. In addition, individual glTF nodes are pickable with Scene#pick and animatable with Model#getNode. glTF cameras and lights are not currently supported.

An external glTF asset is created with Model.fromGltf. glTF JSON can also be created at runtime and passed to this constructor function. In either case, the Model#readyPromise is resolved when the model is ready to render, i.e., when the external binary, image, and shader files are downloaded and the WebGL resources are created.

### Basic usage

Basic usage of VcPrimitiveGround component.

:::demo Use the `vc-primitive-model` tag to add a model to the viewer and change its lighting.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive-model
      ref="primitive"
      :url="url"
      @ready-promise="onReadyPromise"
      :modelMatrix="modelMatrix"
      :scale="10000"
      :minimumPixelSize="128"
      :maximumScale="200000"
      @click="onClicked"
      :luminanceAtZenith="luminanceAtZenith"
      :specularEnvironmentMaps="specularEnvironmentMaps"
      :sphericalHarmonicCoefficients="sphericalHarmonicCoefficients"
    >
    </vc-primitive-model>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">Unload</el-button>
      <el-button type="danger" round @click="load">Load</el-button>
      <el-button type="danger" round @click="reload">Reload</el-button>
    </el-row>
    <el-row>
      <el-col>
        <div class="block">
          <span class="demonstration">Luminance at Zenith</span>
          <el-slider v-model="luminanceAtZenith" :min="0" :max="2" :step="0.01"></el-slider>
          <el-checkbox v-model="proceduralEnvironmentLighting" :min="0" :max="5" :step="0.01">Use procedural environment lighting</el-checkbox>
        </div>
      </el-col>
    </el-row>
  </div>
</el-row>

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
  const environmentMapURL = 'https://zouyaoji.top/vue-cesium/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'
  export default {
    data() {
      return {
        url: 'https://zouyaoji.top/vue-cesium/SampleData/models/Pawns/Pawns.glb',
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
      onViewerReady({ Cesium, viewer }) {
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      },
      onReadyPromise(model, viewer) {
        const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)
        viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      },
      onClicked(e) {
        console.log(e)
      },
      unload() {
        this.$refs.primitive.unload()
      },
      load() {
        this.$refs.primitive.load()
      },
      reload() {
        this.$refs.primitive.reload()
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| url | string | | `required` The url to the .gltf file. |
| basePath | string | | `optional` The base path that paths in the glTF JSON are relative to. |
| show | boolean | `true` | `optional` Determines if the model primitive will be shown. |
| modelMatrix | Cesium.Matrix4 | | `optional` The 4x4 transformation matrix that transforms the model from model to world coordinates. |
| scale | number | `1.0` | `optional` A uniform scale applied to this model. |
| minimumPixelSize | number | `0.0` | `optional` The approximate minimum pixel size of the model regardless of zoom. |
| maximumScale | number | | `optional` The maximum scale for the model. |
| id | \* | | `optional` A user-defined object to return when the model is picked with Scene#pick. |
| allowPicking | boolean | `true` | `optional` When true, each glTF mesh and primitive is pickable with Scene#pick. |
| incrementallyLoadTextures | boolean | `true` | `optional` Determine if textures may continue to stream in after the model is loaded. |
| asynchronous | boolean | `true` | `optional` Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded. |
| clampAnimations | boolean | `true` | `optional` Determines if the model's animations should hold a pose over frames where no keyframes are specified. |
| shadows | number | `1` | `optional` Determines whether the model casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| debugShowBoundingVolume | boolean | `false` | `optional` For debugging only. Draws the bounding sphere for each DrawCommand in the model. |
| debugWireframe | boolean | `false` | `optional` For debugging only. Draws the model in wireframe. |
| heightReference | number | `0` | `optional` Determines how the model is drawn relative to terrain. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| scene | Cesium.Scene | `false` | `optional` Must be passed in for models that use the height reference property. |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` The condition specifying at what distance from the camera that this model will be displayed. |
| color | VcColor\|string\|Array | `'white'` | `optional` A color that blends with the model's rendered color. |
| colorBlendMode | number | `0` | `optional` Defines how the color blends with the model. **HIGHLIGHT: 0, REPLACE: 1, MIX: 2** |0/1/2|
| colorBlendAmount | number | `0.5` | `optional` Value used to determine the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two. |
| silhouetteColor | VcColor\|string\|Array | `'red'` | `optional` The silhouette color. If more than 256 models have silhouettes enabled, there is a small chance that overlapping models will have minor artifacts. |
| silhouetteSize | number | `0.0` | `optional` The size of the silhouette in pixels. |
| clippingPlanes | Cesium.ClippingPlaneCollection \| VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection> | | `optional` The ClippingPlaneCollection used to selectively disable rendering the model. |
| dequantizeInShader | boolean | `true` | `optional` Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models.|
| imageBasedLightingFactor | Array\|Object | | `optional` Scales diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.|
| lightColor | Array\|Object | | `optional` The light color when shading the model. When undefined the scene's light color is used instead. |
| luminanceAtZenith | number | `0.2` | `optional` The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map.|
| sphericalHarmonicCoefficients | Array\|Object || `optional` The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.|
| specularEnvironmentMaps | string || `optional` A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps. |
| credit | Object\|string | | `optional` A credit for the model, which is displayed on the canvas. |
| backFaceCulling | boolean | `true` | `optional` Whether to cull back-facing geometry. When true, back face culling is determined by the material's doubleSided property; when false, back face culling is disabled. Back faces are not culled if Model#color is translucent or Model#silhouetteSize is greater than 0.0. |
| enableMouseEvent | boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### Events

| Name         | Parameters                              | Description                                                      |
| ------------ | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| readyPromise |                                         | Triggers when the primitive is ready to render.                  |
| mousedown    | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on this primitive.            |
| mouseup      | (evt: VcPickEvent)                      | Triggers when the mouse bounces up on this primitive.            |
| click        | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the primitive.                 |
| clickout     | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the primitive.            |
| dblclick     | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the primitive. |
| mousemove    | (evt: VcPickEvent)                      | Triggers when the mouse moves on this primitive.                 |
| mouseover    | (evt: VcPickEvent)                      | Triggers when the mouse moves to this primitive.                 |
| mouseout     | (evt: VcPickEvent)                      | Triggers when the mouse moves out of this primitive.             |

### Reference

- Refer to the official documentation: **[Model](https://cesium.com/docs/cesiumjs-ref-doc/Model.html)**
