## VcOverlayTyphoon

Typhoon cover kit.

**Note:** Style file need to be imported: `import 'vue-cesium/dist/index.css';`

### Basic usage

Basic usage of Typhoon Overlay Components.

:::demo Use `vc-overlay-typhoon` tag to add typhoon path on viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-overlay-typhoon
      v-if="typhoonRoutes.length"
      ref="typhoonRef"
      :typhoon-routes="typhoonRoutes"
      :point-props="pointProps"
      :line-primitive-props="linePrimitiveProps"
      :label-props="labelProps"
      @ready="onTyphoonReady"
      @forecastRouteAdded="onForecastRouteAdded"
    >
    </vc-overlay-typhoon>
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        typhoonRoutes: []
      }
    },
    mounted() {},
    methods: {
      onViewerReady() {
        Cesium.Resource.fetchJson({
          url: 'https://zouyaoji.top/vue-cesium/SampleData/typhoon/202209.json'
        }).then(res => {
          this.typhoonRoutes = res
        })
      },
      onTyphoonReady() {
        // this.$refs.typhoonRef.flyToTyphoonRoute('202209')
      },
      onForecastRouteAdded(e) {
        this.$refs.typhoonRef.flyToTyphoonRoute('202209')
      },
      pointProps(point) {
        const colorDict = {
          '热带低压(TD)': '#30fc31',
          '热带风暴(TS)': '#307efa',
          '强热带风暴(STS)': '#fffc00',
          '台风(TY)': '#ff9c00',
          '强台风(STY)': '#fb7cff',
          '超强台风(SuperTY)': '#fa3030'
        }

        return {
          color: colorDict[point.strong] || '#409eff',
          pixelSize: 8,
          outlineColor: 'rgba(0,0,0,0.6)',
          outlineWidth: 2
        }
      },
      linePrimitiveProps(typhoonDatasource) {
        const forcColorDict = {
          中国香港: '#f5000e',
          日本: '#0000ff',
          中央: '#ff0000',
          美国: '#000000',
          韩国: '#41c1f6',
          广州: '#ede12c',
          上海: '#cdf3dd',
          福州: '#c7c7c7',
          新德里: '#345cdc',
          乌兰巴托: '#12a3dd',
          莫斯科: '#4fea03',
          河内: '#41c1fd',
          曼谷: '#ddc1f6',
          英国: '#E1DB1A'
        }
        return {
          appearance: {
            type: typhoonDatasource.type === 'live' ? 'PolylineColorAppearance' : 'PolylineMaterialAppearance',
            options: {
              material:
                typhoonDatasource.type === 'live'
                  ? undefined
                  : {
                      fabric: {
                        type: 'PolylineDash',
                        uniforms: {
                          color: forcColorDict[typhoonDatasource.typhoonRoute.sets] || '#000000'
                        }
                      }
                    },
              translucent: true
            }
          }
        }
      },
      labelProps(typhoonDatasource) {
        return {
          text: typhoonDatasource.typhoonRoute.name
        }
      },
      unload() {
        this.$refs.typhoonRef.unload()
      },
      load() {
        this.$refs.typhoonRef.load()
      },
      reload() {
        this.$refs.typhoonRef.reload()
      }
    }
  }
</script>
```

:::

### Props

| Name                  | Type                                                                             | Default                   | Description                                                                       |
| --------------------- | -------------------------------------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------- |
| typhoonRoutes         | VcTyphoonRoute[]                                                                 |                           | `required` Specify the routes of typhoon.                                         |
| clampToGround         | boolean                                                                          | `false`                   | `optional` Specify whether the route object is attached to the ground or 3dtiles. |
| radius7Color          | VcColor                                                                          | `rgba(68, 255, 230, 0.3)` | `optional` Specify the color of radius7.                                          |
| radius10Color         | VcColor                                                                          | `rgba(32, 237, 39, 0.3)`  | `optional` Specify the color of radius10.                                         |
| radius12Color         | VcColor                                                                          | `rgba(255, 247, 16, 0.3)` | `optional` Specify the color of radius12.                                         |
| pointProps            | VcPointProps \| ((e: VcTyphoonPoint) => VcPointProps)                            |                           | `optional` Specify the props of point.                                            |
| linePrimitiveProps    | VcPrimitiveProps \| ((e: VcTyphoonDatasource) => VcPrimitiveProps)               |                           | `optional` Specify the props of line primitive.                                   |
| lineGeometryProps     | VcGeometryPolylineProps \| ((e: VcTyphoonDatasource) => VcGeometryPolylineProps) |                           | `optional` Specify the props of line geometry.                                    |
| labelProps            | VcLabelProps \| ((e: VcTyphoonDatasource) => VcLabelProps)                       |                           | `optional` Specify the props of typhoon name label.                               |
| circleOverlayPosition | string \| ((e: VcTyphoonPoint) => string)                                        |                           | `optional` Specify the position of the background map of the typhoon wind circle. |
| setsArray             | string[]                                                                         |                           | `optional` Specify the forecasting agency.                                        |

### Events

| Name               | Parameters                                                                                   | Description                                                |
| ------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| beforeLoad         | (instance: VcComponentInternalInstance)                                                      | Triggers before the cesiumObject is loaded.                |
| ready              | (readyObj: VcReadyObject)                                                                    | Triggers when the cesiumObject is successfully loaded.     |
| unready            | (error: any)                                                                                 | Triggers when the cesiumObject is failed to load.          |
| destroyed          | (instance: VcComponentInternalInstance)                                                      | Triggers when the cesiumObject is destroyed.               |
| mouseover          | (evt: VcPickEvent)                                                                           | Triggers when the mouse moves over to the typhoon object.  |
| mouseout           | (evt: VcPickEvent)                                                                           | Triggers when the mouse moves out to the typhoon object.   |
| click              | (evt: VcPickEvent)                                                                           | Triggers when the mouse clicks on the typhoon object.      |
| clickout           | (evt: VcPickEvent)                                                                           | Triggers when the mouse clicks outside the typhoon object. |
| forecastRouteAdded | (evt: { livePoint: VcTyphoonPoint; datasource: VcTyphoonDatasource; addedByClick: boolean }) | Triggers when the forecast route is added.                 |

### Methods

| Name                  | Parameters                                                                                                | Description                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| load                  | () => Promise\<false \| VcReadyObject\>                                                                   | Load components manually.                           |
| reload                | () => Promise\<false \| VcReadyObject\>                                                                   | Reload components manually.                         |
| unload                | () => Promise\<boolean\>                                                                                  | Destroy the loaded component manually.              |
| getCreatingPromise    | () => Promise\<boolean \| VcReadyObject>                                                                  | Get the creatingPromise.                            |
| addTyphoonRoute       | (typhoonRoute: VcTyphoonRoute) => VcTyphoonDatasource                                                     | Add typhoon track data.                             |
| playTyphoonRoute      | (tfbh: string) => void                                                                                    | Play typhoon route data.                            |
| flyToTyphoonRoute     | (tfbhs: string \| string[]) => void                                                                       | Fly to typhoon route data.                          |
| showForecast          | (livePoint: VcTyphoonPoint, datasource: VcTyphoonDatasource, index?: number, fromClick?: boolean) => void | Shows the forecast typhoon track of the live point. |
| removeTyphoonData     | (datasource: VcTyphoonDatasource) => void                                                                 | Remove typhoon track data.                          |
| removeAllTyphoonData  | () => void                                                                                                | Remove all typhoon track data.                      |
| getTyphoonDatasources | () => VcTyphoonDatasource[]                                                                               | Get all typhoon track data.                         |

### Reference

- [wztf](http://www.wztf121.com/)
