## VcDatasourceKml

加载 KML(2.2) 格式的数据源。相当于初始化一个 `Cesium.KmlDataSource` 实例。

### 基础用法

KML 数据源组件的基础用法。

:::demo 使用 `vc-datasource-geojson` 标签在三维球上添加 KML 格式数据源对象。

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
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-switch v-model="show" active-color="#13ce66" inactive-text="显示/隐藏"> </el-switch>
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

### 属性

| 属性名           | 类型              | 默认值  | 描述                                        |
| ---------------- | ----------------- | ------- | ------------------------------------------- |
| data             | String\|Object    |         | `required` 指定要加载的 KML 对象 url。      |
| show             | Boolean           | `true`  | `optional` 指定数据源是否显示。             |
| enableMouseEvent | Boolean           | `true`  | `optional` 指定鼠标事件是否生效。           |
| entities         | Array             | `[]`    | `optional` 指定要添加到该数据源的实体集合。 |
| camera           | Object            |         | `optional` 指定相机参数。                   |
| canvas           | HTMLCanvasElement |         | `optional` 指定画布。                       |
| sourceUri        | String            |         | `optional` 指定引用资源 url 的相对路径。    |
| clampToGround    | Boolean           | `false` | `optional` 指定线、面对象是否贴地。         |
| ellipsoid        | Object            |         | `optional` 指定参考椭球。                   |
| credit           | String\|Object    |         | `optional` 指定数据源描述信息。             |

### 事件

| 事件名               | 参数                                                       | 描述                         |
| -------------------- | ---------------------------------------------------------- | ---------------------------- |
| beforeLoad           | Vue Instance                                               | 对象加载前触发。             |
| ready                | {Cesium, viewer, cesiumObject, vm}                         | 对象加载成功时触发。         |
| destroyed            | Vue Instance                                               | 对象销毁时触发。             |
| changedEvent         |                                                            | 数据源改变时触发。           |
| errorEvent           |                                                            | 数据源发生错误时触发。       |
| loadingEvent         |                                                            | 数据源开始或结束加载时触发。 |
| refreshEvent         |                                                            | 数据源刷新节点时触发。       |
| unsupportedNodeEvent |                                                            | 数据源有不支持的节点时触发。 |
| clusterEvent         | (clusteredEntities, cluster)                               | 数据源聚合事件。             |
| collectionChanged    | (collection, added, removed, changed)                      | 数据源实体集合改变时触       |
| mousedown            | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上按下时触发。 |
| mouseup              | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上弹起时触发。 |
| click                | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该数据源时触发。     |
| clickout             | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该数据源外部时触发。 |
| dblclick             | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该数据源时触发。 |
| mousemove            | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上移动时触发。 |
| mouseover            | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该数据源时触发。   |
| mouseout             | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该数据源时触发。     |

### 插槽

| 插槽名  | 描述                                 | 子组件    |
| ------- | ------------------------------------ | --------- |
| default | 用于 vue-datasource-kml 挂载子组件。 | vc-entity |

### 参考

- 官方文档： **[KmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html)**
