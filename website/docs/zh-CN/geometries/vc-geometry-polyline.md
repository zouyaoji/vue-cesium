## VcGeometryPolyline

加载多段线几何图形，相当于初始化一个 `Cesium.PolylineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

多段线几何图形组件的基础用法。

:::demo 使用 `vc-geometry-polyline` 标签在三维球上添加多段线。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance>
        <vc-geometry-polyline
          ref="geometryRef"
          :positions="positions1"
          :colors="colors1"
          :width="4"
          :vertexFormat="vertexFormat"
        ></vc-geometry-polyline>
      </vc-geometry-instance>
      <vc-geometry-instance>
        <vc-geometry-polyline
          ref="geometryRef"
          :positions="positions2"
          :colors="colors2"
          :width="4"
          :vertexFormat="vertexFormat"
          colorsPerVertex
        ></vc-geometry-polyline>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>
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
      const positions1 = ref([])
      const colors1 = ref([])
      const positions2 = ref([])
      const colors2 = ref([])
      const vertexFormat = ref(null)
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
        for (let i = 0; i < 12; ++i) {
          positions1.value.push(Cesium.Cartesian3.fromDegrees(105.0 + 5 * i, 35.0))
          colors1.value.push(Cesium.Color.fromRandom({ alpha: 1.0 }))

          positions2.value.push(Cesium.Cartesian3.fromDegrees(105.0 + 5 * i, 30.0))
          colors2.value.push(Cesium.Color.fromRandom({ alpha: 1.0 }))
        }
        window.positions1 = positions1
        window.colors1 = colors1
        appearance.value = new Cesium.PolylineColorAppearance()
        vertexFormat.value = Cesium.PolylineColorAppearance.VERTEX_FORMAT
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
        positions1,
        colors1,
        positions2,
        colors2,
        vertexFormat
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
| width           | number  | `1.0`   | `optional` 指定线的宽度（像素）。                                                |
| colors          | Array   |         | `optional` 指定每个顶点或每个线段的颜色数组。                                    |
| colorsPerVertex | boolean | `false` | `optional` 指定颜色数组是根据线段数取均值还是通过线段顶点插值。                  |
| arcType         | number  | `1`     | `optional` 指定线条类型。 **NONE: 0, GEODESIC: 1, RHUMB: 2**                     | 0/1/2  |
| granularity     | number  |         | `optional` 指定每个纬度和经度之间的距离（以弧度为单位），arcType 不为 0 时有效。 |
| vertexFormat    | Object  |         | `optional` 指定要缓存的顶点属性类型。                                            |
| ellipsoid      | Cesium.Ellipsoid  |         | `optional` 指定参考椭球体。                                                      |        |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[PolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGeometry.html)**
