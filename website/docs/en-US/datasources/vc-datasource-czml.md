## VcDatasourceCzml

Load [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide) format datasource. It is equivalent to initializing a `Cesium.CzmlDataSource` instance.

### Basic usage

Basic usage of VcDatasourceCzml component.

:::demo Use the `vc-datasource-czml` tag to add CZML format datasource objects on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer shouldAnimate>
    <vc-datasource-czml
      ref="datasourceRef"
      czml="https://zouyaoji.top/vue-cesium/SampleData/simple.czml"
      @ready="onDatasourceReady"
      :show="show"
      @click="onClicked"
    ></vc-datasource-czml>
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
        // viewer.zoomTo(cesiumObject)
        viewer.camera.flyHome(0)
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

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| -------- | -------------- | ------- | ------------------------------------------- |
| czml | String\|Object | | `required` An optional name for the data source. This value will be overwritten if a loaded document contains a name. |
| show | Boolean | `true` | `optional` Specifies whether the datasource is visible. |
| entities | Array | `[]` | `optional` Specify the collection of entities to be added to this datasource. |
| sourceUri | String | | `optional` Overrides the url to use for resolving relative links. |
| credit | String\|Object | | `optional` A credit for the data source, which is displayed on the canvas. |

### Events

<!-- prettier-ignore -->
| Name | Parameters | Description |
| ---- | ------------------- | --------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded. |
| ready | (readyObj: VcReadyObject)    | Triggers when the cesiumObject is successfully loaded. |
| destroyed | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed. |
| changedEvent | | Gets an event that will be raised when the underlying data changes. |
| errorEvent | | Gets an event that will be raised if an error is encountered during processing. |
| loadingEvent | | Gets an event that will be raised when the data source either starts or stops loading. |
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
| default | This is where vue-datasource-czml sub tags content goes. | vc-entity |

### Reference

- Refer to the official documentation: **[CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)**
