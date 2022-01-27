## VcGeometryEllipsoid

加载(椭)球体，相当于初始化一个 `Cesium.EllipsoidGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

(椭)球体几何图形组件的基础用法。

:::demo 使用 `vc-geometry-ellipsoid` 和 `vc-geometry-ellipsoid-outline` 标签在三维球上添加(椭)球体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes" :modelMatrix="modelMatrix">
        <vc-geometry-ellipsoid
          ref="geometryRef"
          :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }"
          :vertexFormat="vertexFormat"
        ></vc-geometry-ellipsoid>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline" :modelMatrix="modelMatrix">
        <vc-geometry-ellipsoid-outline
          ref="geometryOutlineRef"
          :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }"
          :vertexFormat="vertexFormat"
        ></vc-geometry-ellipsoid-outline>
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
      const modelMatrix = ref(null)
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
          new Cartesian3(0, 0, 100000),
          new Matrix4()
        )
        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
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

| 属性名          | 类型          | 默认值 | 描述                                                        |
| --------------- | ------------- | ------ | ----------------------------------------------------------- |
| radii           | Object\|Array |        | `optional` 指定椭球体在 x、y、z 方向上的半径。              |
| innerRadii      | Number        |        | `optional` 指定椭球体在 x、y、z 方向上的内半径。            |
| minimumClock    | Number        | `0.0`  | `optional` 指定椭球体在 xy 平面内从 x 轴到 y 轴的最小角度。 |
| maximumClock    | Number        | `2*PI` | `optional` 指定椭球体在 xy 平面内从 x 轴到 y 轴的最大角度。 |
| minimumCone     | Number        | `0.0`  | `optional` 指定椭球体从 z 轴正半轴到 z 轴负半轴的最小角度。 |
| maximumCone     | Number        | `PI`   | `optional` 指定椭球体从 z 轴正半轴到 z 轴负半轴的最大角度。 |
| stackPartitions | Number        | `64`   | `optional` 指定将椭球体横向划分为层的次数。                 |
| slicePartitions | Number        | `64`   | `optional` 指定将椭球体纵向划分为片的次数。                 |
| vertexFormat    | Object        |        | `optional` 指定椭球体顶点属性渲染方式。                     |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryEllipsoidOutline

加载(椭)球体几何图形边框，相当于初始化一个 `Cesium.EllipsoidOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryEllipsoidOutline 属性

| 属性名          | 类型          | 默认值 | 描述                                                        |
| --------------- | ------------- | ------ | ----------------------------------------------------------- |
| radii           | Object\|Array |        | `optional` 指定椭球体在 x、y、z 方向上的半径。              |
| innerRadii      | Number        |        | `optional` 指定椭球体在 x、y、z 方向上的内半径。            |
| minimumClock    | Number        | `0.0`  | `optional` 指定椭球体在 xy 平面内从 x 轴到 y 轴的最小角度。 |
| maximumClock    | Number        | `2*PI` | `optional` 指定椭球体在 xy 平面内从 x 轴到 y 轴的最大角度。 |
| minimumCone     | Number        | `0.0`  | `optional` 指定椭球体从 z 轴正半轴到 z 轴负半轴的最小角度。 |
| maximumCone     | Number        | `PI`   | `optional` 指定椭球体从 z 轴正半轴到 z 轴负半轴的最大角度。 |
| stackPartitions | Number        | `10`   | `optional` 指定将椭球体横向划分为层的次数。                 |
| slicePartitions | Number        | `8`    | `optional` 指定将椭球体纵向划分为片的次数。                 |
| subdivisions    | Number        | `128`  | `optional` 指定椭球体轮廓线上的点数，确定弧线的光滑粒度。   |

### VcGeometryEllipsoidOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[EllipsoidGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGeometry.html)、[EllipsoidOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidOutlineGeometry.html)**
