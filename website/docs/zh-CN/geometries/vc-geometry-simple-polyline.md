## VcGeometrySimplePolyline

加载线段几何图形，相当于初始化一个 `Cesium.SimplePolylineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

线段几何图形组件的基础用法。

:::demo 使用 `vc-geometry-simple-polyline` 标签在三维球上添加线段。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-simple-polyline
          ref="geometryRef"
          :positions="[
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ]"
        ></vc-geometry-simple-polyline>
      </vc-geometry-instance>
    </vc-primitive>
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
      const attributes = ref(null)
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
        appearance.value = new Cesium.PerInstanceColorAppearance({
          flat: true
        })
        attributes.value = {
          color: new Cesium.ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
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
        attributes
      }
    }
  }
</script>
```

:::

### 属性

| 属性名          | 类型    | 默认值  | 描述                                                                             | 可选值 |
| --------------- | ------- | ------- | -------------------------------------------------------------------------------- | ------ |
| positions       | Array   |         | `required` 指定表示线条的位置数组。                                              |
| colors          | Array   |         | `optional` 指定每个顶点或每个线段的颜色数组。                                    |
| colorsPerVertex | boolean | `false` | `optional` 指定颜色数组是根据线段数取均值还是通过线段顶点插值。                  |
| arcType         | number  | `1`     | `optional` 指定线条类型。 **NONE: 0, GEODESIC: 1, RHUMB: 2**                     | 0/1/2  |
| granularity     | number  |         | `optional` 指定每个纬度和经度之间的距离（以弧度为单位），arcType 不为 0 时有效。 |
| ellipsoid      | Cesium.Ellipsoid  |         | `optional` 指定参考椭球体。                                                      |        |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[SimplePolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SimplePolylineGeometry.html)**
