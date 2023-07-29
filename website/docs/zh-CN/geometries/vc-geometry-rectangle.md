## VcGeometryRectangle

加载矩形几何图形，相当于初始化一个 `Cesium.RectangleGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

矩形几何图形组件的基础用法。

:::demo 使用 `vc-geometry-rectangle` 和 `vc-geometry-rectangle-outline` 标签在三维球上添加矩形。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance>
        <vc-geometry-rectangle ref="geometryRef" :rectangle="rectangle" :vertexFormat="vertexFormat"></vc-geometry-rectangle>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearanceOutline" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-rectangle-outline ref="geometryOutlineRef" :rectangle="rectangle"></vc-geometry-rectangle-outline>
      </vc-geometry-instance>
    </vc-primitive>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-switch v-model="outline" active-color="#13ce66" inactive-text="边框"> </el-switch>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const geometryRef = ref(null)
      const geometryOutlineRef = ref(null)
      const appearance = ref(null)
      const appearanceOutline = ref(null)
      const attributesOutline = ref(null)
      const outline = ref(true)
      const vertexFormat = ref(null)
      const rectangle = { west: -180, south: -90, east: 180, north: 90 }
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        geometryRef.value.unload()
        geometryOutlineRef.value.unload()
      }
      const reload = () => {
        geometryRef.value.reload()
        geometryOutlineRef.value.reload()
      }
      const load = () => {
        geometryRef.value.load()
        geometryOutlineRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        window.viewer = viewer
        console.log('onViewerReady')
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Cartesian3, MaterialAppearance } = Cesium
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.8)
        }
        appearance.value = new MaterialAppearance()
        appearanceOutline.value = new PerInstanceColorAppearance({
          flat: true
        })
        vertexFormat.value = MaterialAppearance.vertexFormat
      }
      // lifecycle
      onMounted(() => {
        Promise.all([geometryRef.value.creatingPromise, geometryOutlineRef.value.creatingPromise]).then(geometries => {
          const { BoundingSphere } = Cesium
          const boundingSphereUnion = geometries.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.proxy.$parent.modelMatrix
              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.proxy.$parent.modelMatrix)
              : geometry.boundingSphere
            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
          }, null)
          geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
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
        geometryOutlineRef,
        appearance,
        appearanceOutline,
        attributesOutline,
        outline,
        rectangle,
        vertexFormat
      }
    }
  }
</script>
```

:::

### 属性

| 属性名         | 类型          | 默认值 | 描述                                                             |
| -------------- | ------------- | ------ | ---------------------------------------------------------------- |
| rectangle | VcRectangle\|Array |        | `required` 指定矩形四至参数。                                    |
| vertexFormat   | number        |        | `optional` 指定矩形要缓存的顶点属性。                            |
| ellipsoid      | Cesium.Ellipsoid        |        | `optional` 指定矩形所在的椭球体。                                |
| granularity    | number        |        | `optional` 指定每个纬度和经度之间的距离（以弧度为单位）。        |
| height         | number        | `0`    | `optional` 指定矩形高度。                                        |
| rotation       | number        | `0.0`  | `optional` 指定矩形的旋转角（弧度），逆时针方向为正旋转。        |
| stRotation     | number        | `0.0`  | `optional` 指定矩形的纹理旋转坐标（弧度）， 逆时针方向为正旋转。 |
| extrudedHeight | number        |        | `optional` 指定矩形拉伸高度。                                    |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryRectangleOutline

加载矩形几何图形边框，相当于初始化一个 `Cesium.CircleOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryRectangleOutline 属性

| 属性名         | 类型          | 默认值 | 描述                                                      |
| -------------- | ------------- | ------ | --------------------------------------------------------- |
| rectangle | VcRectangle\|Array |        | `required` 指定矩形四至参数。                             |
| ellipsoid      | Cesium.Ellipsoid        |        | `optional` 指定矩形所在的椭球体。                         |
| granularity    | number        |        | `optional` 指定每个纬度和经度之间的距离（以弧度为单位）。 |
| height         | number        | `0`    | `optional` 指定矩形高度。                                 |
| rotation       | number        | `0.0`  | `optional` 指定矩形的旋转角（弧度），逆时针方向为正旋转。 |
| extrudedHeight | number        |        | `optional` 指定矩形拉伸高度。                             |

### VcGeometryRectangleOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[RectangleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGeometry.html)、[RectangleOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleOutlineGeometry.html)**
