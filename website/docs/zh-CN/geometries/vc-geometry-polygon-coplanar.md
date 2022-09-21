## VcGeometryPolygonCoplanar

加载共面多边形，相当于初始化一个 `Cesium.CoplanarPolygonGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

共面多边形几何图形组件的基础用法。

:::demo 使用 `vc-geometry-polygon-coplanar` 和 `vc-geometry-polygon-coplanar-outline` 标签在三维球上添加共面多边形。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-polygon-coplanar ref="geometryRef" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon-coplanar>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-polygon-coplanar-outline ref="geometryOutlineRef" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon-coplanar-outline>
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
      const modelMatrix = ref(null)
      const attributesOutline = ref(null)
      const outline = ref(true)
      const polygonHierarchy = [
        { lng: 110, lat: 33.5, height: 0 },
        { lng: 110, lat: 33.5, height: 200000 },
        { lng: 105, lat: 33.5, height: 200000 },
        { lng: 105, lat: 33.5, height: 0 }
      ]
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
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
        attributes.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        appearance.value = new PerInstanceColorAppearance({
          flat: true
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
        polygonHierarchy
      }
    }
  }
</script>
```

:::

### 属性

| 属性名           | 类型          | 默认值 | 描述                                                   |
| ---------------- | ------------- | ------ | ------------------------------------------------------ |
| polygonHierarchy | VcPolygonHierarchy\|Array |        | `optional` 指定 polygon 的位置，可以包含岛洞。         |
| stRotation       | number        | `0.0`  | `optional` 指定 polygon 纹理按正北方向逆时针旋转角度。 |
| vertexFormat | Cesium.VertexFormat        |        | `optional` 指定 polygon 要缓存的顶点属性。             |
| ellipsoid      | Cesium.Ellipsoid        |        | `optional` 指定 polygon 参考椭球体。                   |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryPolygonCoplanarOutline

加载共面多边形几何图形边框，相当于初始化一个 `Cesium.CoplanarPolygonOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryPolygonCoplanarOutline 属性

| 属性名           | 类型          | 默认值 | 描述                                           |
| ---------------- | ------------- | ------ | ---------------------------------------------- |
| polygonHierarchy | VcPolygonHierarchy\|Array |        | `optional` 指定 polygon 的位置，可以包含岛洞。 |

### VcGeometryPolygonCoplanarOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[CoplanarPolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CoplanarPolygonGeometry.html)、[CoplanarPolygonOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CoplanarPolygonOutlineGeometry.html)**
