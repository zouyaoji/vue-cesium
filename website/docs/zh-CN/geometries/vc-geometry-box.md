## VcGeometryBox

加载立方盒几何体，相当于初始化一个 `Cesium.BoxGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

立方盒几何体组件的基础用法。

:::demo 使用 `vc-geometry-box` 和 `vc-geometry-box-outline` 标签在三维球上添加立方盒几何体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes" :modelMatrix="modelMatrix">
        <vc-geometry-box ref="geometryRef" :dimensions="dimensions"></vc-geometry-box>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline" :modelMatrix="modelMatrix">
        <vc-geometry-box-outline ref="geometryOutlineRef" :dimensions="dimensions"></vc-geometry-box-outline>
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
        modelMatrix.value = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 40.0)),
          new Cartesian3(0.0, 0.0, 250000),
          new Matrix4()
        )
      }
      // lifecycle
      onMounted(() => {
        Promise.all([geometryRef.value.creatingPromise, geometryOutlineRef.value.creatingPromise]).then(geometries => {
          const { BoundingSphere } = Cesium
          const boundingSphereUnion = geometries.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
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
        modelMatrix,
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

| 属性名       | 类型                | 默认值 | 描述                              |
| ------------ | ------------------- | ------ | --------------------------------- |
| dimensions   | VcPosition          |        | `required` 指定 box 的长宽高。    |
| vertexFormat | Cesium.VertexFormat |        | `optional` 指定要计算的顶点属性。 |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryBoxOutline

加载立方盒几何体边框，相当于初始化一个 `Cesium.BoxOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryBoxOutline 属性

| 属性名     | 类型       | 默认值 | 描述                           |
| ---------- | ---------- | ------ | ------------------------------ |
| dimensions | VcPosition |        | `required` 指定 box 的长宽高。 |

### VcGeometryBoxOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[BoxGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxGeometry.html)、[BoxOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxOutlineGeometry.html)**
