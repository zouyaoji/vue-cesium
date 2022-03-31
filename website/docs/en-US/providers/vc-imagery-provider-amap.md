## AMapImageryProvider

Load the amap tile service.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-amap` component.

:::demo uses the `vc-layer-imagery` tag to add a tile service layer provided by Gaode on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- annotation layer -->
    <!-- <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="20">
      <vc-imagery-provider-amap map-style="8" ltype="4"></vc-imagery-provider-amap>
    </vc-layer-imagery> -->
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-imagery-provider-amap
        :map-style="mapStyle"
        :ltype="ltype"
        :projectionTransforms="projectionTransforms"
        lang="en"
        ref="provider"
      ></vc-imagery-provider-amap>
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
        <div class="block" style="display: flex; flex-direction: column;">
          <span class="demonstration">alpha</span>
          <el-slider v-model="alpha" :min="0" :max="1" :step="0.01"></el-slider>
          <span class="demonstration">brightness</span>
          <el-slider v-model="brightness" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">contrast</span>
          <el-slider v-model="contrast" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">switch style</span>
          <el-select v-model="mapStyle" placeholder="mapStyle">
            <el-option v-for="item in mapStyleOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
          <span class="demonstration" v-if="mapStyle !== '6'">switch type</span>
          <el-select v-model="ltype" placeholder="ltype" v-if="mapStyle !== '6'">
            <el-option v-for="item in ltypeOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
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
      const mapStyleOptions = [
        {
          value: '6',
          label: 'satellite imagery'
        },
        {
          value: '7',
          label: 'road map'
        },
        {
          value: '8',
          label: 'road map(transparent)）'
        }
      ]
      const ltypeOptions = [
        {
          value: '0',
          label: 'default'
        },
        {
          value: '4',
          label: 'only annotation'
        },
        {
          value: '11',
          label: 'only the road'
        }
      ]
      const mapStyle = ref('7')
      const ltype = ref('0')
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
      const projectionTransforms = {
        from: 'GCJ02',
        to: 'WGS84'
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast,
        mapStyleOptions,
        mapStyle,
        ltypeOptions,
        ltype,
        projectionTransforms
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
| url | string | `'https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}'` | `optional` Specify the URL template.|
|domain| 'webst' \| 'webrd'| `'webst'` |`optional` Specify the domain name.|webst/webrd|
|subdomains|Array\<string\>|`['01', '02', '03', '04']`|`optional` Specify the service polling parameters.|
|lang| 'zh_cn' \| 'en'| `'zh_cn'` | `optional` Specify the language.|zh_cn/en|
| mapStyle | string | `'6'` | `optional` Specify the map style type of the amap service. '6': satellite image; '7': road map; '8': road map (with transparent background) | 6/7/8 |
| scl | '1' \| '2' | `'1'` | `optional` Specify size control parameters. '1': 256\*256; '2': 512\*512| 1/2 |
|ltype| string | `'0'` | Specify the type parameter. '0': default; '4': only annotations; '8': only roads |0/4/11|
| credit | string\|Cesium.Credit | `''` | `optional` 	A credit for the data source, which is displayed on the canvas. |
| rectangle | VcRectangle | | `optional` The rectangle, in radians, covered by the image.|
| minimumLevel | number | `0` | `optional` 	The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | number | `20` | `optional` The maximum level-of-detail supported by the imagery provider. |
| tilingScheme | Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme | `new Cesium.WebMercatorTilingScheme()` | `optional` The tiling scheme specifying how the ellipsoidal surface is broken into tiles.  |
| projectionTransforms | false\|ProjectionTransforms | `false` | `optional` Specify the projection transformation parameters. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- Refer to **[高德 WMTS 瓦片地图服务地图图源规律](https://www.jianshu.com/p/e34f85029fd7)**
