## VcImageryProviderBaidu

Loading a tiled imagery provider that provides tiled imagery hosted by Baidu Map. You can use `projectionTransforms` to transform the coordinates of the tiles.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-baidu` component.

:::demo Use the `vc-layer-imagery` tag to add a imagery layer provided by Baidu Maps on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-baidu ref="provider" :url="url" :projectionTransforms="{ form: 'BD09', to: 'WGS84' }"></vc-imagery-provider-baidu>
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
          <span class="demonstration">Swich</span>
          <el-select v-model="url" placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
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
      const options = [
        {
          value: 'http://{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
          label: 'vector'
        },
        {
          value: 'http://shangetu1.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
          label: 'image'
        },
        {
          value: 'http://api0.map.bdimg.com/customimage/tile?=&x={x}&y={y}&z={z}&scale=1&customid=midnight',
          label: 'vector-dark'
        },
        {
          value: 'https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png',
          label: 'vector-custom'
        }
      ]
      const url = ref('https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png')
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
        contrast,
        options,
        url
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
| url | String | `'http://{s}.map.bdimg.com/onlinelabel/?qt=tile&styles=pl&x={x}&y={y}&z={z}'` | `optional` Specify the service address. |
| rectangle | Object\|Object | | `optional` The rectangle of the layer. This parameter is ignored when accessing a tiled layer. |
| credit | String\|Object | `''` | `optional` A credit for the data source, which is displayed on the canvas. |
| minimumLevel | Number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems. |
| maximumLevel | Number | `18` | `optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| projectionTransforms | Boolean\|Object |  | `optional` Specify the projection transformation parameters. such as { from: 'BD09', to: 'WGS84' }** |

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

- **[openlayers#3522](https://github.com/openlayers/openlayers/issues/3522)**
