## VcDatasourceCustom

Load a custom datasource. It is equivalent to initializing a `Cesium.CustomDataSource` instance and manually managing a group of entity objects.

### Basic usage

Basic usage of VcDatasourceCustom component.

:::demo Use the `vc-datasource-custom` tag to add several sets of custom datasource objects on the viewer, and do aggregation management.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-datasource-custom name="custom" :entities="entities" @click="onClicked" :show="show">
      <vc-entity
        ref="entity1"
        @click="onClicked"
        :position="[108, 35, 100]"
        :billboard="{
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          show: true,
          pixelOffset: [0, -20],
          eyeOffset: {x: 0, y: 0, z: 0},
          horizontalOrigin: 0,
          verticalOrigin: 1,
          scale: 0.25,
          color: 'lime'
        }"
        description="Hello Vue Cesium"
        id="This is a billboard"
      >
      </vc-entity>
      <vc-entity ref="entity2" :position="[105,40,200000]" description="Hello Vue Cesium">
        <vc-graphics-cylinder
          ref="cylinder1"
          :length="400000.0"
          :topRadius="200000.0"
          :bottomRadius="200000.0"
          :material="[0,255,0,125]"
          :outline="true"
          outlineColor="#006400"
        ></vc-graphics-cylinder>
      </vc-entity>
    </vc-datasource-custom>
    <vc-datasource-custom
      ref="datasourceRef"
      @click="onClicked"
      :key="index"
      :show="show"
      :name="datasource.name"
      v-for="(datasource, index) of datasources"
      :entities="datasource.entities"
      @clusterEvent="onDatasourceClusterEvent"
      @ready="onDatasourceReady"
    >
    </vc-datasource-custom>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-switch v-model="show" active-color="#13ce66" inactive-text="Show/Hide"> </el-switch>
    <el-switch v-model="clusterSch" active-color="#13ce66" inactive-text="Scheme1" active-text="Scheme2"> </el-switch>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const show = ref(true)
      const datasourceRef = ref(null)
      const datasources = reactive([])
      const entities = reactive([
        {
          position: { lng: 105, lat: 35, height: 200 },
          point: {
            pixelSize: 5,
            color: 'red'
          }
        },
        {
          position: { lng: 105, lat: 36, height: 300 },
          point: {
            pixelSize: 8,
            color: 'yellow'
          }
        },
        {
          position: { lng: 105, lat: 37, height: 400 },
          billboard: {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.25
          }
        }
      ])
      const clusterSch = ref(true)
      let _viewer
      // watch
      watch(clusterSch, () => {
        _viewer.scene.camera.changed.raiseEvent()
      })
      // methods
      const addPoints = (options, flag) => {
        if (flag) {
          Cesium.Resource.fetchJson(options.datauri).then(res => {
            const img = new Image()
            img.src = options.iconOn
            img.onload = () => {
              let datasource = {
                name: options.code,
                clustering: true,
                entities: []
              }
              datasource.entities = res.reduce((pre, cur) => {
                return pre.concat({
                  position: [Number(cur.Longitude), Number(cur.Latitude), 1000],
                  id: cur.id,
                  description: cur.name,
                  billboard: {
                    width: img.width,
                    height: img.height,
                    image: options.iconOn,
                    scale: 0.5
                  }
                })
              }, [])

              datasources.push(datasource)
            }
          })
        } else {
          datas = []
        }
      }
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
      const onViewerReady = ({ Cesium, viewer }) => {
        _viewer = viewer
        const options = {
          id: '1001',
          code: '1001',
          name: 'test',
          iconOn: './SampleData/points/pic.png',
          giscolor: '#fb7228',
          datauri: './SampleData/points/custom-data.json'
        }
        addPoints(options, true)
      }
      const onDatasourceReady = ({ Cesium, viewer, cesiumObject }) => {
        viewer.zoomTo(cesiumObject)
        //开启聚合功能
        cesiumObject.clustering.enabled = true
        cesiumObject.clustering.pixelRange = 30
        cesiumObject.clustering.minimumClusterSize = 3
      }
      const onDatasourceClusterEvent = (clusteredEntities, cluster) => {
        if (clusterSch.value) {
          cluster.billboard.show = !0
          cluster.label.show = !1
          cluster.billboard.id = cluster.label.id
          cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM
          clusteredEntities.length >= 300
            ? (cluster.billboard.image = './SampleData/images/cluser/300+.png')
            : clusteredEntities.length >= 150
            ? (cluster.billboard.image = './SampleData/images/cluser/150+.png')
            : clusteredEntities.length >= 90
            ? (cluster.billboard.image = './SampleData/images/cluser/90+.png')
            : clusteredEntities.length >= 30
            ? (cluster.billboard.image = './SampleData/images/cluser/30+.png')
            : clusteredEntities.length > 10
            ? (cluster.billboard.image = './SampleData/images/cluser/10+.png')
            : (cluster.billboard.image = './SampleData/images/cluser/' + clusteredEntities.length + '.png')
        } else {
          cluster.label.show = true
          cluster.label.scale = 0.5
          cluster.label.fillColor = Cesium.Color.fromCssColorString('#FFFFFF')
          cluster.label.style = Cesium.LabelStyle.FILL
          cluster.label.font = '30px caption'
          cluster.label.VerticalOrigin = Cesium.VerticalOrigin.BOTTOM
          cluster.label.pixelOffset = new Cesium.Cartesian2(-7, 5)
          cluster.label.disableDepthTestDistance = Number.POSITIVE_INFINITY
          cluster.point.show = true
          cluster.point.id = cluster.label.id
          cluster.point.color = Cesium.Color.LIGHTSLATEGRAY
          if (clusteredEntities.length >= 100) {
            cluster.point.pixelSize = 38
            cluster.label.pixelOffset = new Cesium.Cartesian2(-12, 5)
          } else if (clusteredEntities.length >= 50) {
            cluster.point.pixelSize = 36
          } else if (clusteredEntities.length >= 40) {
            cluster.point.pixelSize = 33
          } else if (clusteredEntities.length >= 30) {
            cluster.point.pixelSize = 28
          } else if (clusteredEntities.length >= 20) {
            cluster.point.pixelSize = 25
          } else if (clusteredEntities.length >= 10) {
            cluster.label.pixelOffset = new Cesium.Cartesian2(-6, 4)
            cluster.label.scale = 0.4
            cluster.point.pixelSize = 20
          } else if (clusteredEntities.length >= 5) {
            cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
            cluster.label.scale = 0.4
            cluster.point.pixelSize = 15
          } else {
            cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
            cluster.label.scale = 0.4
            cluster.point.pixelSize = 13
          }
        }
      }
      // life cycle
      onMounted(() => {})

      return {
        unload,
        reload,
        load,
        show,
        onClicked,
        onViewerReady,
        onDatasourceReady,
        onDatasourceClusterEvent,
        datasourceRef,
        datasources,
        entities,
        clusterSch
      }
    }
  }
</script>
```

:::

### Props

| Name     | Type    | Default | Description                                                                    |
| -------- | ------- | ------- | ------------------------------------------------------------------------------ |
| name     | String  |         | `optional` A human-readable name for this instance.                            |
| show     | Boolean | `true`  | `optional` Specify whether the data source is displayed.                       |
| entities | Array   | `[]`    | `optional` Specify the collection of entities to be added to this data source. |

### Events

<!-- prettier-ignore -->
| Name | Parameters | Description |
| ----------------- | ---------------------------------------------------------- | ------------------------------------------------------------------- |
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

- Refer to the official documentation: **[CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)**
