## VcOverlayHeatmap

Load a heatmap overlay to viewer.

Based on heatmapjs implementation.

### Basic usage

Basic usage of VcOverlayHeatmap component.

:::demo Use the `vc-overlay-heatmap` tag to add a heatmap overlay to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="ready" sceneModePicker>
    <vc-overlay-heatmap
      v-if="data.length"
      ref="heatmap"
      :data="data"
      :rectangle="rectangle"
      :max="max"
      :min="min"
      :show="show"
      :options="options"
      @ready="onHeatmapReady"
      type="primitive"
      :segments="segments"
    >
    </vc-overlay-heatmap>
    <vc-layer-imagery>
      <vc-provider-imagery-osm></vc-provider-imagery-osm>
    </vc-layer-imagery>
    <vc-datasource-geojson data="https://zouyaoji.top/vue-cesium/SampleData/geojson/wuhou.json" stroke="red"></vc-datasource-geojson>
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
        show: true,
        data: [],
        max: 346.05413818359375,
        min: 0.5259535908699036,
        rectangle: [0, 0, 0, 0],
        segments: [
          [10, '#4A90C3'],
          [20, '#81AAAC'],
          [40, '#B2C899'],
          [60, '#E5EA84'],
          [100, '#F8DE6D'],
          [150, '#EFA451'],
          [200, '#E46C38'],
          [346, '#D53127']
        ],
        options: {
          backgroundColor: 'rgba(0,0,0,0)',
          // gradient: {
          //   // enter n keys between 0 and 1 here
          //   // for gradient color customization
          //   0.0289017: '#4A90C3', // 0-10
          //   0.0578035: '#81AAAC', // 11-20
          //   0.1156069: '#B2C899', // 21-40
          //   0.1734104: '#E5EA84', // 41-60
          //   0.2890173: '#F8DE6D', // 61-100
          //   0.433526: '#EFA451', // 101-150
          //   0.5780347: '#E46C38', // 151-200
          //   1: '#D53127' // 201-346
          // },
          opacity: 0.8,
          radius: 10,
          maxOpacity: 0.6,
          minOpacity: 0.3,
          blur: 0.75
        }
      }
    },
    methods: {
      ready({ Cesium, viewer }) {
        Cesium.Resource.fetchJson({ url: 'https://zouyaoji.top/vue-cesium/SampleData/heatmap/pop.json' }).then(res => {
          this.rectangle = res.bounds
          this.min = res.min
          this.max = res.max
          this.data = res.data
        })
      },
      onHeatmapReady({ Cesium, viewer, cesiumObject }) {
        this.$refs.heatmap.childRef.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          console.log(cesiumObject)
          if (cesiumObject instanceof Cesium.GroundPrimitive) {
            const geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry)
            viewer.scene.camera.flyToBoundingSphere(geometry.boundingSphere)
          } else if (cesiumObject instanceof Cesium.Entity) {
            viewer.flyTo(cesiumObject)
          } else {
            viewer.camera.flyTo({ destination: cesiumObject.imageryProvider.rectangle })
          }
        })
      },
      unload() {
        this.$refs.heatmap.unload()
      },
      load() {
        this.$refs.heatmap.load()
      },
      reload() {
        this.$refs.heatmap.reload()
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
| show | Boolean | `true` | `optional` Specify whether to display the heatmap overlay. |
| rectangle | Object\|Array | | `optional`  Specify a rectangle with north, south, east and west properties.  |
| min | Number | `true` | `optional` Specify the minimum value of the heat map data. |
| max | Number | | `optional` Specify the maximum value of the heat map data. |
| data | Array<{x: number, y: number, value: number}> | `[]` | `optional` Specify the heat map data. If it is not x, y, value, you need to specify the fields in the options attribute.|
| options | Object\|HeatmapConfiguration | | `optional` Specify the heatmap configs. |
| type | String | `'primitive'` | `optional` Specify the type of heat map object. **Primitive: primitive, entity: entity, image layer: imagery-layer**| primitive/entity/imagery-layer |
| segments | Array\<ColorSegments\> | | `optional` Specify the color segment of the heatmap. |

:::tip

Tip: `segments` and `options.gradient` both express color segments, just specify one of them. The `segments` segment is the actual value, and `options.gradient` needs to be normalized, see the example for details.

:::

:::tipflex

```js
// options
{
  backgroundColor: string,
  gradient: { [key: string]: string }
  radius: number
  opacity: number
  maxOpacity: number
  minOpacity: number
  blur: number
  xField: string // x
  yField: string // y
  valueField: string //value
}
```

```js
// segments
Array<[number, [number, number, number]] | [number, string | ColorInByteOption | Cartesian4Option | Cesium.Color]>
```

:::

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Reference

- Docs [heatmapjs](https://www.patrick-wied.at/static/heatmapjs/docs.html)
