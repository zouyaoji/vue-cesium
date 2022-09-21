## VcGeometryFrustum

加载视锥体，相当于初始化一个 `Cesium.FrustumGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

视锥体几何图形组件的基础用法。

:::demo 使用 `vc-geometry-frustum` 和 `vc-geometry-frustum-outline` 标签在三维球上添加视锥体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-frustum
          ref="geometryRef"
          :frustum="frustum"
          :origin="{ lng: 105, lat: 35 }"
          :orientation="{ x: 0, y: 0, z: 0, w: 1}"
          :vertexFormat="vertexFormat"
        ></vc-geometry-frustum>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-frustum-outline
          ref="geometryOutlineRef"
          :frustum="frustum"
          :origin="{ lng: 105, lat: 35 }"
          :orientation="{ x: 0, y: 0, z: 0, w: 1}"
        ></vc-geometry-frustum-outline>
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
      const attributes = ref(null)
      const attributesOutline = ref(null)
      const outline = ref(true)
      const frustum = ref(null)
      const vertexFormat = ref(null)
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
        console.log('onViewerReady')
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, PerspectiveFrustum } = Cesium
        attributes.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        appearance.value = new PerInstanceColorAppearance({
          flat: true
        })
        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
        frustum.value = new PerspectiveFrustum({
          fov: Cesium.Math.toRadians(30.0),
          aspectRatio: 1920.0 / 1080.0,
          near: 1.0,
          far: 500000
        })
      }
      // lifecycle
      onMounted(() => {
        Promise.all([geometryRef.value.creatingPromise, geometryOutlineRef.value.creatingPromise]).then(geometries => {
          const { BoundingSphere } = Cesium
          const boundingSphereUnion = geometries.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.$parent.modelMatrix
              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
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
        attributes,
        attributesOutline,
        outline,
        frustum,
        vertexFormat
      }
    }
  }
</script>
```

:::

### 属性

| 属性名       | 类型          | 默认值 | 描述                                |
| ------------ | ------------- | ------ | ----------------------------------- |
| frustum     | Cesium.PerspectiveFrustum \| Cesium.OrthographicFrustum        |        | `optional` 指定视锥体参数。         |
| origin       | VcPosition\|Array |        | `optional` 指定视锥体原点。         |
| orientation  | Cesium.Quaternion\|Array |        | `optional` 指定视锥体旋转参数。     |
| vertexFormat | Cesium.VertexFormat        |        | `optional` 指定视锥体顶点渲染方式。 |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryFrustumOutline

加载视锥体几何图形边框，相当于初始化一个 `Cesium.FrustumOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryFrustumOutline 属性

| 属性名      | 类型          | 默认值 | 描述                            |
| ----------- | ------------- | ------ | ------------------------------- |
| frustum     | Cesium.PerspectiveFrustum \| Cesium.OrthographicFrustum        |        | `optional` 指定视锥体参数。     |
| origin       | VcPosition\|Array |        | `optional` 指定视锥体原点。     |
| orientation  | Cesium.Quaternion\|Array |        | `optional` 指定视锥体旋转参数。 |

### VcGeometryFrustumOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[FrustumGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumGeometry.html)、[FrustumOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumOutlineGeometry.html)**
