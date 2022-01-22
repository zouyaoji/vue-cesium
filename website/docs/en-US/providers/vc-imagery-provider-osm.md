## VcImageryProviderOsm

Loading a tiled imagery provider that provides tiled imagery hosted by OpenStreetMap or another provider of Slippy tiles. It is equivalent to initializing a `Cesium.OpenStreetMapImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-osm` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with OpenStreetMapImageryProvider to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-osm ref="provider"></vc-imagery-provider-osm>
    </vc-layer-imagery>
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
          <el-slider v-model="brightness" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">Contrast</span>
          <el-slider v-model="contrast" :min="0" :max="5" :step="0.01"></el-slider>
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
      const provider = ref(null)
      const alpha = ref(1)
      const brightness = ref(1)
      const contrast = ref(1)
      // methods
      const unload = () => {
        provider.value.unload()
      }
      const reload = () => {
        provider.value.reload()
      }
      const load = () => {
        provider.value.load()
      }
      return {
        provider,
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
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | String | `'https://a.tile.openstreetmap.org'` | `optional`The OpenStreetMap server url. |
| fileExtension | String | `'png'` | `required`The file extension for images on the server. |
| rectangle | Object\|Array | | `optional` The rectangle of the layer. |
| minimumLevel | Number | `0` | `optional`The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | Number | | `optional`The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| ellipsoid | Object | | `optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| credit | String\| Object | `'MapQuest, Open Street Map and contributors, CC-BY-SA'` | `optional`A credit for the data source, which is displayed on the canvas. |

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

| Name         | Parameters                         | Description                                                          |
| ------------ | ---------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | Vue Instance                       | Triggers before the cesiumObject is loaded.                          |
| ready        | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | Vue Instance                       | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                  | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                    | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[OpenStreetMapImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/OpenStreetMapImageryProvider.html)**
