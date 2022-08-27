## VcGeometryGroundPolyline

加载贴地(3DTiles)线几何图形，相当于初始化一个 `Cesium.GroundPolylineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件，并且将 `vc-geometry-instance` 放到 `vc-primitive-ground-polyline` 才能正常加载。

### 基础用法

贴地线几何图形组件的基础用法。

:::demo 使用 `vc-geometry-ground-polyline` 标签在三维球上添加贴地线。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive-ground-polyline :appearance="appearance" :geometryInstances="geometryInstances" @click="onClicked">
      <vc-geometry-instance>
        <vc-geometry-ground-polyline
          ref="geometryRef"
          :positions="[
            { lng: 100.1340164450331, lat: 31.05494287836128 },
            { lng: 108.08821010582645, lat: 31.05494287836128 }
          ]"
          :width="2"
        ></vc-geometry-ground-polyline>
      </vc-geometry-instance>
    </vc-primitive-ground-polyline>
    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const geometryRef = ref(null)
      const appearance = ref(null)
      const geometryInstances = ref(null)
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        geometryRef.value.unload()
      }
      const reload = () => {
        geometryRef.value.reload()
      }
      const load = () => {
        geometryRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        console.log('onViewerReady')
        appearance.value = new Cesium.PolylineMaterialAppearance()
        geometryInstances.value = new Cesium.GeometryInstance({
          geometry: new Cesium.GroundPolylineGeometry({
            positions: Cesium.Cartesian3.fromDegreesArray([100.1340164450331, 32.05494287836128, 108.08821010582645, 32.097804071380715]),
            width: 4.0
          }),
          id: 'object returned when this instance is picked and to get/set per-instance attributes'
        })
      }
      // lifecycle
      onMounted(() => {
        geometryRef.value.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {
          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
          viewer.scene.camera.flyToBoundingSphere(boundingSphere)
          console.log('All geometries are loaded.')
        })
      })
      return {
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        geometryRef,
        appearance,
        geometryInstances
      }
    }
  }
</script>
```

:::

### 属性

| 属性名      | 类型    | 默认值 | 描述                                                                                | 可选值 |
| ----------- | ------- | ------ | ----------------------------------------------------------------------------------- | ------ |
| positions   | Array   |        | `required` 指定表示线条的位置数组。                                                 |
| width       | number  | `1.0`  | `optional` 指定线的宽度（像素）。                                                   |
| granularity | number  |        | `optional` 指定插值点的距离间隔（以米为单位）。 默认为 9999.0 米。 零表示没有插值。 |
| loop        | boolean | false  | `optional` 指定折线是否首尾相连。                                                   |
| arcType     | number  | `1`    | `optional` 指定线条类型。 **NONE: 0, GEODESIC: 1, RHUMB: 2**                        | 0/1/2  |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[GroundPolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylineGeometry.html)**
