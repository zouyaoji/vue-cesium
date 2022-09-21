## VcGeometryCylinder

加载圆柱(锥)体，相当于初始化一个 `Cesium.CylinderGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

圆柱(锥)体几何图形组件的基础用法。

:::demo 使用 `vc-geometry-cylinder` 和 `vc-geometry-cylinder-outline` 标签在三维球上添加圆柱(锥)体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes" :modelMatrix="modelMatrix">
        <vc-geometry-cylinder
          ref="geometryRef"
          :length="400000.0"
          :topRadius="200000.0"
          :bottomRadius="200000.0"
          :slices="128"
          :vertexFormat="vertexFormat"
        ></vc-geometry-cylinder>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline" :modelMatrix="modelMatrix">
        <vc-geometry-cylinder-outline
          ref="geometryOutlineRef"
          :length="400000.0"
          :topRadius="200000.0"
          :bottomRadius="200000.0"
          :slices="128"
          :numberOfVerticalLines="16"
        ></vc-geometry-cylinder-outline>
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
        attributes.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        appearance.value = new PerInstanceColorAppearance({
          flat: true
        })

        modelMatrix.value = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
          new Cartesian3(0, 0, 0),
          new Matrix4()
        )
        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
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
        modelMatrix,
        vertexFormat
      }
    }
  }
</script>
```

:::

### 属性

| 属性名       | 类型   | 默认值 | 描述                              |
| ------------ | ------ | ------ | --------------------------------- |
| length       | Array  |        | `required` 指定圆柱体长度。       |
| topRadius    | number |        | `required` 指定圆柱体顶部半径。   |
| bottomRadius | number |        | `required` 指定圆柱体底部半径。   |
| slices       | number | `128`  | `optional` 指定圆柱圆周边数。     |
| vertexFormat | Cesium.VertexFormat |        | `optional` 指定顶点属性渲染方式。 |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryCylinderOutline

加载圆柱(锥)体边框，相当于初始化一个 `Cesium.CylinderOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryCylinderOutline 属性

| 属性名                | 类型   | 默认值 | 描述                                      |
| --------------------- | ------ | ------ | ----------------------------------------- |
| length                | Array  |        | `required` 指定圆柱体长度。               |
| topRadius             | number |        | `required` 指定圆柱体顶部半径。           |
| bottomRadius          | number |        | `required` 指定圆柱体底部半径。           |
| slices                | number | `128`  | `optional` 指定圆柱圆周边数。             |
| numberOfVerticalLines | number | `16`   | `optional` 指定圆柱体顶部到底部的线条数。 |

### VcGeometryCylinderOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[CylinderGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGeometry.html)、[CylinderOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderOutlineGeometry.html)**
