## VcPrimitiveGroundPolyline

加载贴地(3DTiles)线几何图形，相当于初始化一个 `Cesium.GroundPolylineGeometry` 实例。

**注意:** 仅支持添加贴地线几何图形 `vc-geometry-ground-polyline`。

### 基础用法

贴地线几何图形组件的基础用法。

:::demo 使用 `vc-primitive-ground-polyline` 标签在三维球上添加贴地线。

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

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ------ | ---- | ------ | ---- |---|
| Cesium.GeometryInstance \| Array\<Cesium.GeometryInstance\>\|Array | | `optional` 指定要渲染的贴地线几何体实例或者它的实例集合。 |
| appearance | VcAppearance | | `optional` 指定图元的外观参数。 |
| show | boolean | `true` | `optional` 指定图元是否显示。 |
| interleave | boolean | `false` | `optional` 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。 |
| releaseGeometryInstances | boolean | `true` | `optional` 指定是否保留图元对几何体实例的输入，不保留可以节省内存。 |
| allowPicking | boolean | `true` | `optional` 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。 |
| asynchronous | boolean | `true` | `optional` 指定图元时异步加载还是同步加载。 |
| classificationType | number | `2` | `optional` 指定是贴地形还是贴 3DTiles，还是两者都贴。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| debugShowBoundingVolume | boolean | `false` | `optional` 指定是否显示图元的边界球，用于调试使用。 |
| debugShowShadowVolume | boolean | `false` | `optional` 指定是否绘制图元中每个几何图形的阴影体积，用于调试使用。 |
| enableMouseEvent | boolean | `true` | `optional` 指定鼠标事件是否生效。 |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 插槽

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载 vc-geometry-instance 组件。 | vc-geometry-instance |

### 参考

- 官方文档： **[GroundPolylinePrimitive](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html)**
