## VcPrimitiveTileset

Loading a 3D Tiles tileset, used for streaming massive heterogeneous 3D geospatial datasets. It is equivalent to initializing a `Cesium.Cesium3DTileset` instance.

### Basic usage

Basic usage of VcPrimitiveTileset component.

:::demo Use the `vc-primitive-tileset` tag to add a 3DTiles model to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-primitive-tileset
      ref="primitive"
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @ready-promise="onReadyPromise"
      @click="onClicked"
    >
    </vc-primitive-tileset>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    methods: {
      onReadyPromise(tileset, viewer) {
        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
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
| url | string | | `required` The url to a tileset JSON file. |
| show | boolean | `true` | `optional` Determines if the tileset will be shown. |
| modelMatrix | Cesium.Matrix4 | `Matrix4.IDENTITY` | `optional` A 4x4 transformation matrix that transforms the tileset's root tile. |
| shadows | number | `1` | `optional` Determines whether the tileset casts or receives shadows from light sources. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3**|0/1/2/3|
| maximumScreenSpaceError | number | `16` | `optional` The maximum screen space error used to drive level of detail refinement. |
| maximumMemoryUsage | number | `512` | `optional` The maximum amount of memory in MB that can be used by the tileset. |
| cullWithChildrenBounds | boolean | `true` | `optional` Optimization option. Whether to cull tiles using the union of their children bounding volumes. |
| cullRequestsWhileMoving | boolean | `true` | `optional` Optimization option. Don't request tiles that will likely be unused when they come back because of the camera's movement. This optimization only applies to stationary tilesets. |
| cullRequestsWhileMovingMultiplier | number | `60.0` | `optional` Optimization option. Multiplier used in culling requests while moving. Larger is more aggressive culling, smaller less aggressive culling. |
| preloadWhenHidden | boolean| `false` | `optional` Preload tiles when tileset.show is false. Loads tiles as if the tileset is visible but does not render them. |
| preloadFlightDestinations | boolean | `true` | `optional` Optimization option. Preload tiles at the camera's flight destination while the camera is in flight. |
| preferLeaves | boolean | `false` | `optional` Optimization option. Prefer loading of leaves first.|
| dynamicScreenSpaceError | boolean | `false` | `optional` Optimization option. Reduce the screen space error for tiles that are further away from the camera. |
| dynamicScreenSpaceErrorDensity | number | `0.00278`| `optional` Density used to adjust the dynamic screen space error, similar to fog density. |
| dynamicScreenSpaceErrorFactor | number | `4.0` | `optional` A factor used to increase the computed dynamic screen space error. |
| dynamicScreenSpaceErrorHeightFalloff | number | `0.25` | `optional` A ratio of the tileset's height at which the density starts to falloff. |
| progressiveResolutionHeightFraction | number | `0.3` | `optional` Optimization option. If between (0.0, 0.5], tiles at or above the screen space error for the reduced screen resolution of progressiveResolutionHeightFraction*screenHeight will be prioritized first. This can help get a quick layer of tiles down while full resolution tiles continue to load. |
| foveatedScreenSpaceError | boolean | `true` | `optional` Optimization option. Prioritize loading tiles in the center of the screen by temporarily raising the screen space error for tiles around the edge of the screen. Screen space error returns to normal once all the tiles in the center of the screen as determined by the Cesium3DTileset#foveatedConeSize are loaded.|
| foveatedConeSize | number | `0.1` | `optional` Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the cone size that determines which tiles are deferred. Tiles that are inside this cone are loaded immediately. Tiles outside the cone are potentially deferred based on how far outside the cone they are and their screen space error. This is controlled by Cesium3DTileset#foveatedInterpolationCallback and Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation. Setting this to 0.0 means the cone will be the line formed by the camera position and its view direction. Setting this to 1.0 means the cone encompasses the entire field of view of the camera, disabling the effect. |
| foveatedMinimumScreenSpaceErrorRelaxation | number | `0.0` | `optional` Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the starting screen space error relaxation for tiles outside the foveated cone. The screen space error will be raised starting with tileset value up to Cesium3DTileset#maximumScreenSpaceError based on the provided Cesium3DTileset#foveatedInterpolationCallback.|
| foveatedInterpolationCallback | Function| | `optional` Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how much to raise the screen space error for tiles outside the foveated cone, interpolating between Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation and Cesium3DTileset#maximumScreenSpaceError |
| foveatedTimeDelay | number | `0.2` | `optional` Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how long in seconds to wait after the camera stops moving before deferred tiles start loading in. This time delay prevents requesting tiles around the edges of the screen when the camera is moving. Setting this to 0.0 will immediately request all tiles in any given view.|
| skipLevelOfDetail | boolean | true | `optional` Optimization option. Determines if level of detail skipping should be applied during the traversal. |
| baseScreenSpaceError | number | `1024` | `optional` When skipLevelOfDetail is true, the screen space error that must be reached before skipping levels of detail. |
| skipScreenSpaceErrorFactor | number | `16` | `optional` When skipLevelOfDetail is true, a multiplier defining the minimum screen space error to skip. Used in conjunction with skipLevels to determine which tiles to load. |
| skipLevels | number | 1 | `optional` When skipLevelOfDetail is true, a constant defining the minimum number of levels to skip when loading tiles. When it is 0, no levels are skipped. Used in conjunction with skipScreenSpaceErrorFactor to determine which tiles to load. |
| immediatelyLoadDesiredLevelOfDetail | boolean | false | `optional` When skipLevelOfDetail is true, only tiles that meet the maximum screen space error will ever be downloaded. Skipping factors are ignored and just the desired tiles are loaded.|
| loadSiblings | boolean | false | `optional` When skipLevelOfDetail is true, determines whether siblings of visible tiles are always downloaded during traversal. |
| clippingPlanes | Cesium.ClippingPlaneCollection \| VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection> | | `optional` The ClippingPlaneCollection used to selectively disable rendering the tileset. |
| classificationType | number | | `optional` Determines whether terrain, 3D Tiles or both will be classified by this tileset. See Cesium3DTileset#classificationType for details about restrictions and limitations. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| ellipsoid      | Cesium.Ellipsoid | Ellipsoid.WGS84 | `optional` The ellipsoid determining the size and shape of the globe. |
| pointCloudShading | Object | | `optional` Options for constructing a PointCloudShading object to control point attenuation based on geometric error and lighting. |
| imageBasedLightingFactor | VcCartesian2\|Array | `[1.0, 1.0]` | `optional` Scales the diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox. |
| lightColor | VcColor\|Array | | `optional` The light color when shading models. When undefined the scene's light color is used instead. |
| luminanceAtZenith | number | `0.2` | `optional` The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map. |
| sphericalHarmonicCoefficients | Array || `optional` The third order spherical harmonic coefficients used for the diffuse color of image-based lighting. |
| specularEnvironmentMaps | string | | `optional` A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps. |
| backFaceCulling | boolean |`false`| `optional`Whether to cull back-facing geometry. When true, back face culling is determined by the glTF material's doubleSided property; when false, back face culling is disabled.|
| showOutline | boolean |`true`| `optional`Whether to display the outline for models using the CESIUM_primitive_outline extension. When true, outlines are displayed. When false, outlines are not displayed.|
| vectorKeepDecodedPositions | boolean |`false`| `optional`Whether vector tiles should keep decoded positions in memory. This is used with Cesium3DTileFeature.getPolylinePositions.|
| vectorClassificationOnly | boolean |`false`| `optional` Indicates that only the tileset's vector tiles should be used for classification. |
| debugHeatmapTilePropertyName | string || `optional` The tile variable to colorize as a heatmap. All rendered tiles will be colorized relative to each other's specified variable value.|
| debugFreezeFrame | boolean | false | `optional` For debugging only. Determines if only the tiles from last frame should be used for rendering. |
| debugColorizeTiles | boolean | false | `optional` For debugging only. When true, assigns a random color to each tile. |
| debugWireframe | boolean | false | `optional` For debugging only. When true, render's each tile's content as a wireframe. |
| debugShowBoundingVolume | boolean | false | `optional` For debugging only. When true, renders the bounding volume for each tile. |
| debugShowContentBoundingVolume | boolean | false | `optional` For debugging only. When true, renders the bounding volume for each tile's content. |
| debugShowViewerRequestVolume | boolean | false | `optional` For debugging only. When true, renders the viewer request volume for each tile. |
| debugShowGeometricError | boolean | false | `optional` For debugging only. When true, draws labels to indicate the geometric error of each tile. |
| debugShowRenderingStatistics | boolean | false | `optional` For debugging only. When true, draws labels to indicate the number of commands, points, triangles and features for each tile. |
| debugShowMemoryUsage | boolean | false | `optional` For debugging only. When true, draws labels to indicate the texture and geometry memory in megabytes used by each tile. |
| debugShowUrl | boolean | false | `optional` For debugging only. When true, draws labels to indicate the url of each tile. |
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

- Refer to the official documentation: **[Cesium3DTileset](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html)**
