## VcGeometrySphere

加载球体几何图形，相当于初始化一个 `Cesium.SphereGeometry` 实例。

**注意**：需要作为 `vc-instance-geometry` 的子组件才能正常加载。

### 基础用法

球体几何图形组件的基础用法。

:::demo 使用 `vc-geometry-sphere` 和 `vc-geometry-sphere-outline` 标签在三维球上添加球体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrix">
        <vc-geometry-sphere ref="geometryRef" :radius="200000" :vertexFormat="vertexFormat"></vc-geometry-sphere>
      </vc-instance-geometry>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-instance-geometry :attributes="attributesOutline" :modelMatrix="modelMatrix">
        <vc-geometry-sphere-outline ref="geometryOutlineRef" :radius="200000"></vc-geometry-sphere-outline>
      </vc-instance-geometry>
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
      const modelMatrix = ref(null)
      const outline = ref(true)
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
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
        appearance.value = new PerInstanceColorAppearance({
          flat: true
        })
        attributes.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
        modelMatrix.value = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
          new Cartesian3(0, 0, 100000),
          new Matrix4()
        )
      }
      // lifecycle
      onMounted(() => {
        Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {
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
        modelMatrix,
        vertexFormat
      }
    }
  }
</script>
```

:::

### 属性

| 属性名          | 类型   | 默认值 | 描述                                      |
| --------------- | ------ | ------ | ----------------------------------------- |
| radius          | Number | `1.0`  | `optional` 指定球体半径。                 |
| stackPartitions | Number | `0.0`  | `optional` 指定将球体横向划分为层的次数。 |
| slicePartitions | Number | `10`   | `optional` 指定将球体纵向划分为片的次数。 |
| vertexFormat    | Object |        | `optional` 指定椭球体顶点属性渲染方式。   |

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### VcGeometrySphereOutline

加载球体几何图形边框，相当于初始化一个 `Cesium.SphereOutlineGeometry` 实例。

**注意**：需要作为 `vc-instance-geometry` 的子组件才能正常加载。

### VcGeometrySphereOutline 属性

| 属性名          | 类型   | 默认值 | 描述                                                    |
| --------------- | ------ | ------ | ------------------------------------------------------- |
| radius          | Number | `1.0`  | `optional` 指定球体半径。                               |
| stackPartitions | Number | `0.0`  | `optional` 指定将球体横向划分为层的次数。               |
| slicePartitions | Number | `10`   | `optional` 指定将球体纵向划分为片的次数。               |
| subdivisions    | Number | `200`  | `optional` 指定球体轮廓线上的点数，确定弧线的光滑粒度。 |

### VcGeometrySphereOutline 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### 参考

- 官方文档： **[SphereGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SphereGeometry.html)、[SphereOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SphereOutlineGeometry.html)**
