# Cesium3DTileset

`cesium-3dtileset`A 3D Tiles tileset, used for streaming massive heterogeneous 3D geospatial datasets.

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|url|String||`required`The url to a tileset JSON file.|
|show|Boolean|true|`optional`Determines if the tileset will be shown.|
|modelMatrix|Matrix4|Matrix4.IDENTITY|`optional` A 4x4 transformation matrix that transforms the tileset's root tile.|
|shadows|ShadowMode|ShadowMode.ENABLED|`optional` Determines whether the tileset casts or receives shadows from each light source.|
|maximumScreenSpaceError|Number|16|`optional` The maximum screen space error used to drive level of detail refinement.|
|maximumMemoryUsage|Number|512|`optional` The maximum amount of memory in MB that can be used by the tileset.|
|cullWithChildrenBounds|Boolean|true|`optional` Optimization option. Whether to cull tiles using the union of their children bounding volumes.|
|dynamicScreenSpaceError|Boolean|false|`optional` Optimization option. Reduce the screen space error for tiles that are further away from the camera.||
|dynamicScreenSpaceErrorDensity|Number|0.00278|`optional` Density used to adjust the dynamic screen space error, similar to fog density.|
|dynamicScreenSpaceErrorFactor|Number|4.0|`optional` A factor used to increase the computed dynamic screen space error.|
|dynamicScreenSpaceErrorHeightFalloff|Number|0.25|`optional` A ratio of the tileset's height at which the density starts to falloff.|
|skipLevelOfDetail|Boolean|true|`optional` Optimization option. Determines if level of detail skipping should be applied during the traversal.|
|baseScreenSpaceError|Number|1024|`optional` When skipLevelOfDetail is true, the screen space error that must be reached before skipping levels of detail.|
|skipScreenSpaceErrorFactor|Number|16|`optional` When skipLevelOfDetail is true, a multiplier defining the minimum screen space error to skip. Used in conjunction with skipLevels to determine which tiles to load.|
|skipLevels|Number|1|`optional` When skipLevelOfDetail is true, a constant defining the minimum number of levels to skip when loading tiles. When it is 0, no levels are skipped. |Used in conjunction with skipScreenSpaceErrorFactor to determine which tiles to load.|
|immediatelyLoadDesiredLevelOfDetail|Boolean|false|`optional` When skipLevelOfDetail is true, only tiles that meet the maximum screen space error will ever be downloaded.|Skipping factors are ignored and just the desired tiles are loaded.|
|loadSiblings|Boolean|false|`optional` When skipLevelOfDetail is true, determines whether siblings of visible tiles are always downloaded during traversal.|
|clippingPlanes|ClippingPlaneCollection||`optional` The ClippingPlaneCollection used to selectively disable rendering the tileset.|
|classificationType|ClassificationType||`optional` Determines whether terrain, 3D Tiles or both will be classified by this tileset. See Cesium3DTileset#classificationType for details about restrictions and limitations.|
|ellipsoid|Ellipsoid|Ellipsoid.WGS84|`optional` The ellipsoid determining the size and shape of the globe.|
|pointCloudShading|Object||`optional` Options for constructing a PointCloudShading object to control point attenuation based on geometric error and lighting.|
|imageBasedLightingFactor|Cartesian2|new Cartesian2(1.0, 1.0)|`optional` Scales the diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.|
|lightColor|Cartesian3||`optional` The color and intensity of the sunlight used to shade models.|
|debugFreezeFrame|Boolean|false|`optional` For debugging only. Determines if only the tiles from last frame should be used for rendering.|
|debugColorizeTiles|Boolean|false|`optional` For debugging only. When true, assigns a random color to each tile.|
|debugWireframe|Boolean|false|`optional` For debugging only. When true, render's each tile's content as a wireframe.|
|debugShowBoundingVolume|Boolean|false|`optional` For debugging only. When true, renders the bounding volume for each tile.|
|debugShowContentBoundingVolume|Boolean|false|`optional` For debugging only. When true, renders the bounding volume for each tile's content.|
|debugShowViewerRequestVolume|Boolean|false|`optional` For debugging only. When true, renders the viewer request volume for each tile.|
|debugShowGeometricError|Boolean|false|`optional` For debugging only. When true, draws labels to indicate the geometric error of each tile.|
|debugShowRenderingStatistics|Boolean|false|`optional` For debugging only. When true, draws labels to indicate the number of commands, points, triangles and features for each tile.|
|debugShowMemoryUsage|Boolean|false|`optional` For debugging only. When true, draws labels to indicate the texture and geometry memory in megabytes used by each tile.|
|debugShowUrl|Boolean|false|`optional` For debugging only. When true, draws labels to indicate the url of each tile.|
|isZoomTo|Boolean|true|`optional` Determines whether zoomTo the tile.|
---

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when Cesium3DTileset is ready. It returns a core class of Cesium, a viewer instance.|
|allTilesLoaded||The event fired to indicate that all tiles that meet the screen space error this frame are loaded. The tileset is completely loaded for this view.This event is fired at the end of the frame after the scene is rendered.|
|initialTilesLoaded||The event fired to indicate that all tiles that meet the screen space error this frame are loaded. This event is fired once when all tiles in the initial view are loaded.This event is fired at the end of the frame after the scene is rendered.|
|loadProgress||The event fired to indicate progress of loading new tiles. This event is fired when a new tile is requested, when a requested tile is finished downloading, and when a downloaded tile has been processed and is ready to render.The number of pending tile requests, numberOfPendingRequests, and number of tiles processing, numberOfTilesProcessing are passed to the event listener.This event is fired at the end of the frame after the scene is rendered.|
|tileFailed||The event fired to indicate that a tile's content failed to load.If there are no event listeners, error messages will be logged to the console.|
|tileLoad||The event fired to indicate that a tile's content was loaded.The loaded Cesium3DTile is passed to the event listener.|
|tileUnload||The event fired to indicate that a tile's content was unloaded.The unloaded Cesium3DTile is passed to the event listener.This event is fired immediately before the tile's content is unload|
|tileVisible||This event fires once for each visible tile in a frame. This can be used to manually style a tileset.The visible Cesium3DTile is passed to the event listener.|

## Example

### Add a 3DTiles model to CesiumViewer

#### Code

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
      <span>Change Model</span>
      <md-select v-model="url" placeholder="Change Model">
        <md-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </md-option>
      </md-select>
    </div>
    <cesium-viewer>
      <cesium-3dtileset ref="tileset" :url="url" @ready="ready"/>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        options: [{
          value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          label: 'Model1'
        }, {
          value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json',
          label: 'Model2'
        }],
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
      }
    }
  }
</script>
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <span>Change Model</span>
        <el-select v-model="url" placeholder="Change Model">
          <el-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </el-option>
        </el-select>
      </div>
      <cesium-viewer>
        <cesium-3dtileset ref="tileset" :url="url" @ready="ready"/>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          options: [{
            value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
            label: 'Model1'
          }, {
            value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json',
            label: 'Model2'
          }],
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
        }
      }
    }
  </script>
</doc-preview>