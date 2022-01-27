## VcDatasourceKml

Load the data source in KML(2.2) format. It is equivalent to initializing a `Cesium.KmlDataSource` instance.

### Basic usage

Basic usage of VcDatasourceKml component.

:::demo Use the `vc-datasource-geojson` tag to add KML format datasource objects on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-datasource-kml
      ref="datasourceRef"
      data="https://zouyaoji.top/vue-cesium/SampleData/kml/gdpPerCapita2008.kmz"
      :show="show"
      @click="onClicked"
      @ready="onDatasourceReady"
    ></vc-datasource-kml>
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
        datasourceRef
      }
    }
  }
</script>
```

:::

### Props

| Name          | Type              | Default | Description                                                                                             |
| ------------- | ----------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| data          | String\|Object    |         | `required` Overrides the url to use for resolving relative links and other KML network features.        |
| show          | Boolean           | `true`  | `optional` Specify whether the data source is displayed.                                                |
| entities      | Array             | `[]`    | `optional` Specify the collection of entities to be added to this data source.                          |
| camera        | Object            |         | `optional` The camera that is used for viewRefreshModes and sending camera properties to network links. |
| canvas        | HTMLCanvasElement |         | `optional` The canvas that is used for sending viewer properties to network links.                      |
| sourceUri     | String            |         | `optional` Overrides the url to use for resolving relative links and other KML network features.        |
| clampToGround | Boolean           | `false` | `optional` true if the geometry features (Polygons, LineStrings and LinearRings) clamped to the ground. |
| ellipsoid     | Object            |         | `optional` The global ellipsoid used for geographical calculations.                                     |
| credit        | String\|Object    |         | `optional` A credit for the data source, which is displayed on the canvas.                              |

### Events

<!-- prettier-ignore -->
| Name | Parameters | Description |
| ---- | --------- | ------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded. |
| ready | (readyObj: VcReadyObject)    | Triggers when the cesiumObject is successfully loaded. |
| destroyed | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed. |
| changedEvent | | Gets an event that will be raised when the underlying data changes. |
| errorEvent | | Gets an event that will be raised if an error is encountered during processing. |
| loadingEvent | | Gets an event that will be raised when the data source either starts or stops loading. |
| refreshEvent | | Triggers when the data source refreshes the node. |
| unsupportedNodeEvent | | Triggers when the data source has unsupported nodes. |
| clusterEvent | (clusteredEntities, cluster) | Gets the event that will be raised when a new cluster will be displayed |
| collectionChanged | (collection, added, removed, changed) | Gets the event that is fired when entities are added or removed from the collection. |
| mousedown | (evt: VcPickEvent) | Triggers when the mouse is pressed on the data source. |
| mouseup | (evt: VcPickEvent) | Triggers when the mouse bounces up on the data source. |
| click | (evt: VcPickEvent) | Triggers when the mouse clicks on the data source. |
| clickout | (evt: VcPickEvent) | Triggers when the mouse clicks outside the data source. |
| dblclick | (evt: VcPickEvent) | Triggers when the left mouse button double-clicks the data source. |
| mousemove | (evt: VcPickEvent) | Triggers when the mouse moves on the data source. |
| mouseover | (evt: VcPickEvent) | Triggers when the mouse moves to the data source. |
| mouseout | (evt: VcPickEvent) | Triggers when the mouse moves out of the data source. |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vue-datasource-kml sub tags content goes. | vc-entity |

### Reference

- Refer to the official documentation: **[KmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html)**
