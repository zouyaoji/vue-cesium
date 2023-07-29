## VcGeometryCircle

加载圆几何图形，相当于初始化一个 `Cesium.CircleGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

圆几何图形组件的基础用法。

:::demo 使用 `vc-geometry-circle` 和 `vc-geometry-circle-outline` 标签在三维球上添加圆形。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-circle ref="geometryRef" :center="[110, 38]" :radius="250000"></vc-geometry-circle>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-circle-outline ref="geometryOutlineRef" :center="[110, 38]" :radius="250000"></vc-geometry-circle-outline>
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
      const dimensions = { x: 400000.0, y: 300000.0, z: 500000.0 }
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
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.8)
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
        attributes,
        attributesOutline,
        outline,
        dimensions
      }
    }
  }
</script>
```

:::

### 属性

| 属性名         | 类型   | 默认值 | 描述                                                                     |
| -------------- | ------ | ------ | ------------------------------------------------------------------------ |
| center         | VcPosition |        | `required` 指定圆形中心点。                                              |
| radius         | number |        | `required` 指定圆形半径。                                                |
| ellipsoid      | Cesium.Ellipsoid |        | `optional` 指定圆形参考椭球体。                                          |
| height         | number | `0.0`  | `optional` 指定圆形离地表的高度（米）。                                  |
| granularity    | number | `0.02` | `optional` 指定圆形圆弧每个点的角间距（弧度）。                          |
| vertexFormat | Cesium.VertexFormat |        | `optional` 指定要计算的顶点属性。                                        |
| extrudedHeight | number | `0.0`  | `optional` 指定圆形拉伸的高度（米）。                                    |
| stRotation     | number | `0.0`  | `optional` 指定圆形纹理的旋转坐标（以弧度为单位）。 正旋转为逆时针方向。 |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryCicleOutline

加载圆几何图形边框，相当于初始化一个 `Cesium.CircleOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryCicleOutline 属性

| 属性名                | 类型   | 默认值 | 描述                                                  |
| --------------------- | ------ | ------ | ----------------------------------------------------- |
| center         | VcPosition |        | `required` 指定圆形中心点。                           |
| radius                | number |        | `required` 指定圆形半径。                             |
| ellipsoid      | Cesium.Ellipsoid |        | `optional` 指定圆形参考椭球体。                       |
| height                | number | `0.0`  | `optional` 指定圆形离地表的高度（米）。               |
| granularity           | number | `0.02` | `optional` 指定圆形圆弧每个点的角间距（弧度）。       |
| extrudedHeight        | number | `0.0`  | `optional` 指定圆形拉伸的高度（米）。                 |
| numberOfVerticalLines | number | `16`   | `optional` 指定圆形在拉伸时顶部与底部之间绘制的线数。 |

### VcGeometryCicleOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[CircleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CircleGeometry.html)、[CircleOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CircleOutlineGeometry.html)**
