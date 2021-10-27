## VcDatasourceCzml

加载 [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide) 格式数据源。相当于初始化一个 `Cesium.CzmlDataSource` 实例。

### 基础用法

Czml 数据源组件的基础用法。

:::demo 使用 `vc-datasource-czml` 标签在三维球上添加 CZML 格式数据源对象。

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

### 属性

| 属性名           | 类型           | 默认值 | 描述                                        |
| ---------------- | -------------- | ------ | ------------------------------------------- |
| czml             | String\|Object |        | `required` 指定 czml 对象或者 url。         |
| show             | Boolean        | `true` | `optional` 指定数据源是否可见。             |
| enableMouseEvent | Boolean        | `true` | `optional` 指定鼠标事件是否生效。           |
| entities         | Array          | `[]`   | `optional` 指定要添加到该数据源的实体集合。 |
| sourceUri        | String         |        | `optional` 指定引用资源 url 的相对路径。    |
| credit           | String\|Object |        | `optional` 指定数据源描述信息。             |

### 事件

| 事件名            | 参数                                                       | 描述                         |
| ----------------- | ---------------------------------------------------------- | ---------------------------- |
| beforeLoad        | Vue Instance                                               | 对象加载前触发。             |
| ready             | {Cesium, viewer, cesiumObject, vm}                         | 对象加载成功时触发。         |
| destroyed         | Vue Instance                                               | 对象销毁时触发。             |
| changedEvent      |                                                            | 数据源改变时触发。           |
| errorEvent        |                                                            | 数据源发生错误时触发。       |
| loadingEvent      |                                                            | 数据源开始或结束加载时触发。 |
| clusterEvent      | (clusteredEntities, cluster)                               | 数据源聚合事件。             |
| collectionChanged | (collection, added, removed, changed)                      | 数据源实体集合改变时触       |
| mousedown         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上按下时触发。 |
| mouseup           | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上弹起时触发。 |
| click             | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该数据源时触发。     |
| clickout          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该数据源外部时触发。 |
| dblclick          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该数据源时触发。 |
| mousemove         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该数据源上移动时触发。 |
| mouseover         | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该数据源时触发。   |
| mouseout          | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该数据源时触发。     |

### 参考

- 官方文档： **[CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)**
