## VcLayerImagery

Loading an image layer is equivalent to initializing a `Cesium.ImageryLayer` instance.

It needs to be a child component of `vc-viewer` to load normally. You can directly specify the `imageryProvider` property of `vc-layer-imagery`, and use the `vc-provider-xxx` series components provided by VueCesium as the `vc-layer-imagery` sub-components to mount each `imageryProvider`, but an image Only one `provider` can be attached to a layer.

### Basic usage

The basic usage of the image layer component.

:::demo Use the `vc-layer-imagery` component to add the `OpenStreetMapImageryProvider` image service tile layer on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-layer-imagery ref="layer" :imageryProvider="imageryProvider" :alpha="alpha" :brightness="brightness" :contrast="contrast"></vc-layer-imagery>
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

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| -------------- | ----------------------- | ------ | --------------------------------------- |---|
| sortOrder | Number | |`optional` Specify the relative order of the layers.|
| imageryProvider | Object | | `optional` The imagery provider to use. |
| rectangle | Rectangle | `imageryProvider.rectangle` | `optional` The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider. |
| alpha | Number\|function | `1.0` | `optional` The alpha blending value of this layer, from 0.0 to 1.0.  |
| nightAlpha | Number\|function | `1.0` | `optional` The alpha blending value of this layer on the night side of the globe, from 0.0 to 1.0.  |
| dayAlpha | Number\|function | `1.0` | `optional` The alpha blending value of this layer on the day side of the globe, from 0.0 to 1.0.  |
| brightness | Number\|function | `1.0`| `optional` The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter.  |
| contrast | Number\|function | `1.0` | `optional` The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it.  |
| hue | Number\|function | `0.0` | `optional` The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level).  |
| saturation | Number\|function | `1.0` | `optional` The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. |
|gamma|Number\|function|`1.0`|`optional`The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|splitDirection|Number| `0` |`optional`The ImagerySplitDirection split to apply to this layer.  **LEFT: -1, NONE: 0, RIGHT: 1** |-1/0/1|
|minificationFilter|Number|`9729`|`optional` The texture minification filter to apply to this layer. Possible values are TextureMinificationFilter.LINEAR and TextureMinificationFilter.NEAREST. **NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986, NEAREST_MIPMAP_NEAREST: 9984** |9728/9729/9984/9985/9986|
|magnificationFilter|Number|`9729`|`optional` The texture minification filter to apply to this layer. Possible values are TextureMagnificationFilter.LINEAR and TextureMagnificationFilter.NEAREST. **NEAREST: 9728, LINEAR: 9729** |9728/9729|
|show|Boolean|`true`|`optional` True if the layer is shown; otherwise, false.|
|maximumAnisotropy|Number|maximum supported|`optional` The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.|
|minimumTerrainLevel|Number||`optional`The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
|maximumTerrainLevel|Number||`optional`The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
cutoutRectangle|Rectangle||`optional` Cartographic rectangle for cutting out a portion of this ImageryLayer.|
| colorToAlpha | Object | |`optional` Color to be used as alpha.|
| colorToAlphaThreshold | Number | `0.004` |`optional` Threshold for color-to-alpha.|

:::tip

Tip: In addition to passing `Cesium.Rectangle`, the `rectangle` property can also pass `PlainObject(RectangleInDegreeOption|Cartesian4Option`) and `Array<number>` (degrees)

:::

:::tipflex

```js
// RectangleInDegreeOption
{
  west: number,
  south: number,
  east: number,
  north: number
}
```

```js
// Cartesian4Option
{
  x: number,
  y: number,
  z: number,
  w: number
}
```

```js
// Array<number> in degrees
;[number, number, number, number]
```

:::

### Events

| Name       | Parameters                         | Description                             |
| ---------- | ---------------------------------- | --------------------------------------- |
| beforeLoad | Vue Instance                       | Triggers before the object is loaded.  |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the object is loaded.    |
| destroyed  | Vue Instance                       | Triggers when the object is destroyed. |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-layer-imagery sub tags content goes. | vc-provider-imagery-arcgis/vc-provider-imagery-baidumap/vc-provider-imagery-bingmaps/vc-provider-imagery-grid/vc-provider-imagery-ion/vc-provider-imagery-mapbox/vc-provider-imagery-osm/vc-provider-imagery-supermap/vc-provider-imagery-tianditu/vc-provider-imagery-tile-coordinates/vc-provider-imagery-tms/vc-provider-imagery-singletile/vc-provider-imagery-tiledcache/vc-provider-imagery-urltemplate/vc-provider-imagery-wms/vc-provider-imagery-wmts |

### Reference

- Official documents: **[ImageryLayer](https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html)**
