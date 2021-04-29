## VcDatasourceGeojson

Load the data source in the format of [GeoJSON](https://geojson.org/) and [TopoJSON](https://github.com/topojson/topojson). It is equivalent to initializing a `Cesium.GeoJsonDataSource` instance.

### Basic usage

Basic usage of VcDatasourceGeojson component.

:::demo Use the `vc-datasource-geojson` tag to add GeoJSON format datasource objects on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-datasource-geojson
      ref="datasourceRef"
      data="./SampleData/geojson/china.json"
      @ready="onDatasourceReady"
      :show="show"
      :options="options"
      @click="onClicked"
      :entities="entities"
    ></vc-datasource-geojson>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-switch v-model="show" active-color="#13ce66" inactive-text="Show/Hide"> </el-switch>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const show = ref(true)
      const datasourceRef = ref(null)
      const options = reactive({
        stroke: 'red'
      })
      const entities = reactive([])

      for (let i = 0; i < 100; i++) {
        entities.push({
          position: { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 },
          label: {
            text: i.toString(),
            pixelOffset: { x: 25, y: 20 }
          },
          point: {
            pixelSize: 8,
            outlineWidth: 2,
            color: 'red',
            outlineColor: 'yellow'
          }
        })
      }
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        datasourceRef.value.unload()
      }
      const reload = () => {
        datasourceRef.value.reload()
      }
      const load = () => {
        datasourceRef.value.load()
      }
      const onDatasourceReady = ({ Cesium, viewer, cesiumObject }) => {
        viewer.zoomTo(cesiumObject)
      }

      return {
        unload,
        reload,
        load,
        show,
        onClicked,
        onDatasourceReady,
        datasourceRef,
        options,
        entities
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ------------- | --------------------- | ------- | --------------------------------------------------------------------------------- |
| data | String\|Object | | `required` A url, GeoJSON object, or TopoJSON object to be loaded. |
| show | Boolean | `true` | `optional` Overrides the url to use for resolving relative links. |
| entities | Array | `[]` | `optional` Specify the collection of entities to be added to the datasource. |
| sourceUri | String | | `optional` lOverrides the url to use for resolving relative links.|
| describe | Function | | `optional` A function which returns a Property object (or just a string), which converts the properties into an html description. |
| markerSize | Number | `48` | `optional` The default size of the map pin created for each point, in pixels. |
| markerSymbol | String | | `optional` The default symbol of the map pin created for each point. |
| markerColor | Object\|String\|Array | | `optional` The default color of the map pin created for each point. |
| stroke | Object\|String\|Array | | `optional` lThe default color of polylines and polygon outlines. |
| strokeWidth | Number | `2` | `optional` The default width of polylines and polygon outlines. |
| fill | Object\|String\|Array | | `optional` The default color for polygon interiors. |
| clampToGround | Boolean | `false` | `optional` true if we want the features clamped to the ground. |
| credit | String\|Object | | `optional` A credit for the data source, which is displayed on the canvas. |

### Events

<!-- prettier-ignore -->
| Name | Parameters | Description |
| --- | ----------- | ----------- |
| beforeLoad | Vue Instance | Triggers before the cesiumObject is loaded. |
| ready | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed | Vue Instance | Triggers when the cesiumObject is destroyed. |
| changedEvent | | Gets an event that will be raised when the underlying data changes. |
| errorEvent | | Gets an event that will be raised if an error is encountered during processing. |
| loadingEvent | | Gets an event that will be raised when the data source either starts or stops loading. |
| clusterEvent | (clusteredEntities, cluster) | Gets the event that will be raised when a new cluster will be displayed |
| collectionChanged | (collection, added, removed, changed) | Gets the event that is fired when entities are added or removed from the collection. |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse is pressed on the data source. |
| mouseup | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse bounces up on the data source. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks on the data source. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks outside the data source. |
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the left mouse button double-clicks the data source. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves on the data source. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves to the data source. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves out of the data source. |

### Reference

- Refer to the official documentation: **[GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)**
