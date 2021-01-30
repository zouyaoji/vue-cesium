# Cesium3DTileset

The `vc-primitive-tileset` component is used to load a 3D Tiles tileset, used for streaming massive heterogeneous 3D geospatial datasets.

## Example

### Load a Cesium3DTileset with `vc-primitive-tileset`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-tileset
          :url="url"
          @readyPromise="readyPromise"
          @initialTilesLoaded="initialTilesLoaded"
          @allTilesLoaded="allTilesLoaded"
          @loadProgress="loadProgress"
          @tileFailed="tileFailed"
          @tileLoad="tileLoad"
          @tileUnload="tileUnload"
          @tileVisible="tileVisible"
        >
        </vc-primitive-tileset>
      </vc-viewer>
      <div class="demo-tool">
        <span>Switch Source</span>
        <md-select v-model="url" placeholder="Switch Source">
          <md-option v-for="item in options" :key="item.value" :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          options: [
            {
              value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
              label: 'tileset one'
            },
            {
              value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json',
              label: 'tileset two'
            }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = cesiumInstance
        },
        readyPromise(tileset) {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
        },
        allTilesLoaded() {
          console.log('All tiles are loaded')
        },
        initialTilesLoaded() {
          console.log('Initial tiles are loaded')
        },
        loadProgress(numberOfPendingRequests, numberOfTilesProcessing) {
          if (numberOfPendingRequests === 0 && numberOfTilesProcessing === 0) {
            console.log('Stopped loading')
            return
          }

          console.log('Loading: requests: ' + numberOfPendingRequests + ', processing: ' + numberOfTilesProcessing)
        },
        tileFailed(error) {
          console.log('An error occurred loading tile: ' + error.url)
          console.log('Error: ' + error.message)
        },
        tileLoad(tile) {
          console.log('A tile was loaded.')
        },
        tileUnload(tile) {
          console.log('A tile was unloaded from the cache.')
        },
        tileVisible(tile) {}
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-primitive-tileset
        :url="url"
        @readyPromise="readyPromise"
        @initialTilesLoaded="initialTilesLoaded"
        @allTilesLoaded="allTilesLoaded"
        @loadProgress="loadProgress"
        @tileFailed="tileFailed"
        @tileLoad="tileLoad"
        @tileUnload="tileUnload"
        @tileVisible="tileVisible"
      >
      </vc-primitive-tileset>
    </vc-viewer>
    <div class="demo-tool">
      <span>Switch Source</span>
      <md-select v-model="url" placeholder="Switch Source">
        <md-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        options: [
          {
            value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
            label: 'tileset one'
          },
          {
            value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json',
            label: 'tileset two'
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = cesiumInstance
      },
      readyPromise(tileset) {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      },
      allTilesLoaded() {
        console.log('All tiles are loaded')
      },
      initialTilesLoaded() {
        console.log('Initial tiles are loaded')
      },
      loadProgress(numberOfPendingRequests, numberOfTilesProcessing) {
        if (numberOfPendingRequests === 0 && numberOfTilesProcessing === 0) {
          console.log('Stopped loading')
          return
        }

        console.log('Loading: requests: ' + numberOfPendingRequests + ', processing: ' + numberOfTilesProcessing)
      },
      tileFailed(error) {
        console.log('An error occurred loading tile: ' + error.url)
        console.log('Error: ' + error.message)
      },
      tileLoad(tile) {
        console.log('A tile was loaded.')
      },
      tileUnload(tile) {
        console.log('A tile was unloaded from the cache.')
      },
      tileVisible(tile) {}
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| -------------- | -------------- | ------------- | --------- |
| url | String | | `required`The url to a tileset JSON file. |
| show | Boolean | true | `optional`Determines if the tileset will be shown. |
| modelMatrix | Matrix4 | Matrix4.IDENTITY | `optional` A 4x4 transformation matrix that transforms the tileset's root tile. |
| shadows | ShadowMode | ShadowMode.ENABLED | `optional` Determines whether the tileset casts or receives shadows from each light source. |
| maximumScreenSpaceError | Number | 16 | `optional` The maximum screen space error used to drive level of detail refinement. |
| maximumMemoryUsage | Number | 512 | `optional` The maximum amount of memory in MB that can be used by the tileset. |
| cullWithChildrenBounds | Boolean | true | `optional` Optimization option. Whether to cull tiles using the union of their children bounding volumes. |
| cullRequestsWhileMoving | Boolean | `true` | `optional` Optimization option. Don't request tiles that will likely be unused when they come back because of the camera's movement. This optimization only applies to stationary tilesets. |
| cullRequestsWhileMovingMultiplier | Number | `60.0` | `optional` Optimization option. Multiplier used in culling requests while moving. Larger is more aggressive culling, smaller less aggressive culling. |
| preloadWhenHidden | Boolean| `false` | `optional` Preload tiles when tileset.show is false. Loads tiles as if the tileset is visible but does not render them.|
| preloadFlightDestinations | Boolean | `true` | `optional` Optimization option. Preload tiles at the camera's flight destination while the camera is in flight.|
| preferLeaves | Boolean | `false` | `optional` Optimization option. Prefer loading of leaves first.|
| dynamicScreenSpaceError | Boolean | false | `optional` Optimization option. Reduce the screen space error for tiles that are further away from the camera. |
| dynamicScreenSpaceErrorDensity | Number | 0.00278 | `optional` Density used to adjust the dynamic screen space error, similar to fog density. |
| dynamicScreenSpaceErrorFactor | Number | 4.0 | `optional` A factor used to increase the computed dynamic screen space error. |
| dynamicScreenSpaceErrorHeightFalloff | Number | 0.25 | `optional` A ratio of the tileset's height at which the density starts to falloff. |
| progressiveResolutionHeightFraction | Number | `0.3` | `optional` Optimization option. If between (0.0, 0.5], tiles at or above the screen space error for the reduced screen resolution of progressiveResolutionHeightFraction*screenHeight will be prioritized first. This can help get a quick layer of tiles down while full resolution tiles continue to load.|
| foveatedScreenSpaceError | Boolean | `true` | `optional` Optimization option. Prioritize loading tiles in the center of the screen by temporarily raising the screen space error for tiles around the edge of the screen. Screen space error returns to normal once all the tiles in the center of the screen as determined by the Cesium3DTileset#foveatedConeSize are loaded.|
| foveatedConeSize | Number | `0.1` | `optional` Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the cone size that determines which tiles are deferred. Tiles that are inside this cone are loaded immediately. Tiles outside the cone are potentially deferred based on how far outside the cone they are and their screen space error. This is controlled by Cesium3DTileset#foveatedInterpolationCallback and Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation. Setting this to 0.0 means the cone will be the line formed by the camera position and its view direction. Setting this to 1.0 means the cone encompasses the entire field of view of the camera, disabling the effect. |
| foveatedMinimumScreenSpaceErrorRelaxation | Number | `0.0` | `optional` Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the starting screen space error relaxation for tiles outside the foveated cone. The screen space error will be raised starting with tileset value up to Cesium3DTileset#maximumScreenSpaceError based on the provided Cesium3DTileset#foveatedInterpolationCallback.|
| foveatedInterpolationCallback | Function| | `optional` Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how much to raise the screen space error for tiles outside the foveated cone, interpolating between Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation and Cesium3DTileset#maximumScreenSpaceError |
| foveatedTimeDelay | Number | `0.2` | `optional` Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how long in seconds to wait after the camera stops moving before deferred tiles start loading in. This time delay prevents requesting tiles around the edges of the screen when the camera is moving. Setting this to 0.0 will immediately request all tiles in any given view.|
| skipLevelOfDetail | Boolean | true | `optional` Optimization option. Determines if level of detail skipping should be applied during the traversal. |
| baseScreenSpaceError | Number | 1024 | `optional` When skipLevelOfDetail is true, the screen space error that must be reached before skipping levels of detail. |
| skipScreenSpaceErrorFactor | Number | 16 | `optional` When skipLevelOfDetail is true, a multiplier defining the minimum screen space error to skip. Used in conjunction with skipLevels to determine which tiles to load. |
| skipLevels | Number | 1 | `optional` When skipLevelOfDetail is true, a constant defining the minimum number of levels to skip when loading tiles. When it is 0, no levels are skipped. | Used in conjunction with skipScreenSpaceErrorFactor to determine which tiles to load. |
| immediatelyLoadDesiredLevelOfDetail | Boolean | false | `optional` When skipLevelOfDetail is true, only tiles that meet the maximum screen space error will ever be downloaded. | Skipping factors are ignored and just the desired tiles are loaded. |
| loadSiblings | Boolean | false | `optional` When skipLevelOfDetail is true, determines whether siblings of visible tiles are always downloaded during traversal. |
| clippingPlanes | ClippingPlaneCollection | | `optional` The ClippingPlaneCollection used to selectively disable rendering the tileset. |
| classificationType | ClassificationType | | `optional` Determines whether terrain, 3D Tiles or both will be classified by this tileset. See Cesium3DTileset#classificationType for details about restrictions and limitations. |
| ellipsoid | Ellipsoid | Ellipsoid.WGS84 | `optional` The ellipsoid determining the size and shape of the globe. |
| pointCloudShading | Object | | `optional` Options for constructing a PointCloudShading object to control point attenuation based on geometric error and lighting. |
| imageBasedLightingFactor | Cartesian2 | new Cartesian2(1.0, 1.0) | `optional` Scales the diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox. |
| lightColor | Cartesian3 | | `optional` The color and intensity of the sunlight used to shade models. |
| luminanceAtZenith | Number | `0.2` | `optional` The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map. |
| sphericalHarmonicCoefficients | Array | `optional` The third order spherical harmonic coefficients used for the diffuse color of image-based lighting. |
| specularEnvironmentMaps | String | | `optional` A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps. |
| backFaceCulling | Boolean |`false`|| `optional` Whether to cull back-facing geometry. When true, back face culling is determined by the glTF material's doubleSided property; when false, back face culling is disabled. |
| debugHeatmapTilePropertyName | String || `optional` The tile variable to colorize as a heatmap. All rendered tiles will be colorized relative to each other's specified variable value.|
| debugFreezeFrame | Boolean | false | `optional` For debugging only. Determines if only the tiles from last frame should be used for rendering. |
| debugColorizeTiles | Boolean | false | `optional` For debugging only. When true, assigns a random color to each tile. |
| debugWireframe | Boolean | false | `optional` For debugging only. When true, render's each tile's content as a wireframe. |
| debugShowBoundingVolume | Boolean | false | `optional` For debugging only. When true, renders the bounding volume for each tile. |
| debugShowContentBoundingVolume | Boolean | false | `optional` For debugging only. When true, renders the bounding volume for each tile's content. |
| debugShowViewerRequestVolume | Boolean | false | `optional` For debugging only. When true, renders the viewer request volume for each tile. |
| debugShowGeometricError | Boolean | false | `optional` For debugging only. When true, draws labels to indicate the geometric error of each tile. |
| debugShowRenderingStatistics | Boolean | false | `optional` For debugging only. When true, draws labels to indicate the number of commands, points, triangles and features for each tile. |
| debugShowMemoryUsage | Boolean | false | `optional` For debugging only. When true, draws labels to indicate the texture and geometry memory in megabytes used by each tile. |
| debugShowUrl | Boolean | false | `optional` For debugging only. When true, draws labels to indicate the url of each tile. |

---

- Refer to the official document: **[Cesium3DTileset](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ------------------ | ---------------- | ------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| allTilesLoaded | | The event fired to indicate that all tiles that meet the screen space error this frame are loaded. The tileset is completely loaded for this view.This event is fired at the end of the frame after the scene is rendered. |
| initialTilesLoaded | | The event fired to indicate that all tiles that meet the screen space error this frame are loaded. This event is fired once when all tiles in the initial view are loaded.This event is fired at the end of the frame after the scene is rendered. |
| loadProgress | | The event fired to indicate progress of loading new tiles. This event is fired when a new tile is requested, when a requested tile is finished downloading, and when a downloaded tile has been processed and is ready to render.The number of pending tile requests, numberOfPendingRequests, and number of tiles processing, numberOfTilesProcessing are passed to the event listener.This event is fired at the end of the frame after the scene is rendered. |
| tileFailed | | The event fired to indicate that a tile's content failed to load.If there are no event listeners, error messages will be logged to the console. |
| tileLoad | | The event fired to indicate that a tile's content was loaded.The loaded Cesium3DTile is passed to the event listener. |
| tileUnload | | The event fired to indicate that a tile's content was unloaded.The unloaded Cesium3DTile is passed to the event listener.This event is fired immediately before the tile's content is unload |
| tileVisible | | This event fires once for each visible tile in a frame. This can be used to manually style a tileset.The visible Cesium3DTile is passed to the event listener. |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse is pressed on this primitive. |
| mouseup | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse bounces on the primitive. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the primitive. |
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the primitive. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to this primitive. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the primitive. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the primitive.|
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the primitive. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on this primitive. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to this primitive. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the primitive. |
---
