## VcLayerImagery

Loading an image layer is equivalent to initializing a `Cesium.ImageryLayer` instance.

Needs to be a child of `vc-viewer` to load properly. You can directly specify the `imageryProvider` property of `vc-layer-imagery`, or use the `vc-imagery-provider-xxx` series components provided by VueCesium as the `vc-layer-imagery` sub-components to mount each `imageryProvider`, but an image Only one `provider` can be attached to a layer.

## Basic usage

The basic usage of the image layer component.

:::demo Use the `vc-layer-imagery` component to add the `OpenStreetMapImageryProvider` image service tile layer on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-layer-imagery ref="layer" :imagery-provider="imageryProvider" :alpha="alpha" :brightness="brightness" :contrast="contrast"></vc-layer-imagery>
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
          <span class="demonstration">Alpha</span>
          <el-slider v-model="alpha" :min="0" :max="1" :step="0.01"></el-slider>
          <span class="demonstration">Brightness</span>
          <el-slider v-model="brightness" :min="0" :max="3" :step="0.01"></el-slider>
          <span class="demonstration">Contrast</span>
          <el-slider v-model="contrast" :min="0" :max="3" :step="0.01"></el-slider>
        </div>
      </el-col>
    </el-row>
  </div>
</el-row>

<script>
  import { ref, getCurrentInstance } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const imageryProvider = ref(null)
      const layer = ref(null)
      const alpha = ref(1)
      const brightness = ref(1)
      const contrast = ref(1)
      // methods
      const onViewerReady = ({ Cesium, viewer }) => {
        imageryProvider.value = new Cesium.OpenStreetMapImageryProvider({
          url: 'https://a.tile.openstreetmap.org/'
        })
      }
      const unload = () => {
        layer.value.unload()
      }
      const reload = () => {
        layer.value.reload()
      }
      const load = () => {
        layer.value.load()
      }
      return {
        imageryProvider,
        layer,
        onViewerReady,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast
      }
    }
  }
</script>
```

:::

## Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| -------------- | ----------------------- | ------ | --------------------------------------- |---|
| sortOrder | number | |`optional` Specify the relative order of the layers.|
| imageryProvider | VcImageryProvider | | `optional` The imagery provider to use. |
| rectangle | VcRectangle | `imageryProvider.rectangle` | `optional` The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider. |
| alpha | number \| AnyFunction\<number\> | `1.0` | `optional` The alpha blending value of this layer, from 0.0 to 1.0.  |
| nightAlpha | number \| AnyFunction\<number\> | `1.0` | `optional` The alpha blending value of this layer on the night side of the globe, from 0.0 to 1.0.  |
| dayAlpha | number \| AnyFunction\<number\> | `1.0` | `optional` The alpha blending value of this layer on the day side of the globe, from 0.0 to 1.0.  |
| brightness | number \| AnyFunction\<number\> | `1.0`| `optional` The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter.  |
| contrast | number \| AnyFunction\<number\> | `1.0` | `optional` The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it.  |
| hue | number \| AnyFunction\<number\> | `0.0` | `optional` The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level).  |
| saturation | number \| AnyFunction\<number\> | `1.0` | `optional` The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. |
|gamma|number \| AnyFunction\<number\>|`1.0`|`optional`The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|splitDirection|number \| Cesium.ImagerySplitDirection \| AnyFunction\<number \| Cesium.ImagerySplitDirection\>| `0` |`optional`The ImagerySplitDirection split to apply to this layer.  **LEFT: -1, NONE: 0, RIGHT: 1** |-1/0/1|
|minificationFilter|number \| Cesium.TextureMinificationFilter|`9729`|`optional` The texture minification filter to apply to this layer. Possible values are TextureMinificationFilter.LINEAR and TextureMinificationFilter.NEAREST. **NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986, NEAREST_MIPMAP_NEAREST: 9984** |9728/9729/9984/9985/9986|
|magnificationFilter|number \| Cesium.TextureMagnificationFilter|`9729`|`optional` The texture minification filter to apply to this layer. Possible values are TextureMagnificationFilter.LINEAR and TextureMagnificationFilter.NEAREST. **NEAREST: 9728, LINEAR: 9729** |9728/9729|
|show|boolean|`true`|`optional` True if the layer is shown; otherwise, false.|
|maximumAnisotropy|number|maximum supported|`optional` The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.|
|minimumTerrainLevel|number||`optional`The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
|maximumTerrainLevel|number||`optional`The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
cutoutRectangle|VcRectangle||`optional` Cartographic rectangle for cutting out a portion of this ImageryLayer.|
| colorToAlpha | VcColor | |`optional` Color to be used as alpha.|
| colorToAlphaThreshold | number | `0.004` |`optional` Threshold for color-to-alpha.|

## Events

| Name                   | Parameters                              | Description                               |
| ---------------------- | --------------------------------------- | ----------------------------------------- |
| beforeLoad             | (instance: VcComponentInternalInstance) | Triggers before the object is loaded.     |
| ready                  | (readyObj: VcReadyObject)               | Triggers when the object is loaded.       |
| destroyed              | (instance: VcComponentInternalInstance) | Triggers when the object is destroyed.    |
| update:imageryProvider | (payload: VcImageryProvider)            | Triggers when imageryProvider is updated. |

## Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-layer-imagery sub tags content goes. | vc-imagery-provider-arcgis/vc-imagery-provider-baidu/vc-imagery-provider-bing/vc-imagery-provider-grid/vc-imagery-provider-ion/vc-imagery-provider-mapbox/vc-imagery-provider-osm/vc-imagery-provider-supermap/vc-imagery-provider-tianditu/vc-imagery-provider-tile-coordinates/vc-imagery-provider-tms/vc-imagery-provider-singletile/vc-imagery-provider-tiledcache/vc-imagery-provider-urltemplate/vc-imagery-provider-wms/vc-imagery-provider-wmts |

## Reference

- Official documents: **[ImageryLayer](https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html)**
