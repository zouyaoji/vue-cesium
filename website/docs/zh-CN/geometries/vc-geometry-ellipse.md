## VcGeometryEllipse

加载椭圆几何图形，相当于初始化一个 `Cesium.EllipseGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

椭圆多边形几何图形组件的基础用法。

:::demo 使用 `vc-geometry-ellipse` 和 `vc-geometry-ellipse-outline` 标签在三维球上添加椭圆。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-ellipse
          ref="geometryRef"
          :center="{ lng: 102, lat: 38 }"
          :semiMinorAxis="200000.0"
          :semiMajorAxis="300000.0"
          :height="50000"
        ></vc-geometry-ellipse>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-ellipse-outline
          ref="geometryOutlineRef"
          :center="{ lng: 102, lat: 38 }"
          :semiMinorAxis="200000.0"
          :semiMajorAxis="300000.0"
          :height="50000"
        ></vc-geometry-ellipse-outline>
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
        outline
      }
    }
  }
</script>
```

:::

### 属性

| 属性名         | 类型          | 默认值 | 描述                                                |
| -------------- | ------------- | ------ | --------------------------------------------------- |
| center         | Object\|Array |        | `required` 指定椭圆的中心位置。                     |
| semiMajorAxis  | number        |        | `required` 指定椭圆的长半轴长度，单位是米。         |
| semiMinorAxis  | number        |        | `required` 指定椭圆的短半轴长度，单位是米。         |
| ellipsoid      | Cesium.Ellipsoid        |        | `optional` 指定椭圆的参考椭球体。                   |
| height         | number        | `0`    | `optional` 指定椭圆离地表的高度。                   |
| extrudedHeight | number        |        | `optional` 指定椭圆拉伸高度。                       |
| rotation       | number        | `0.0`  | `optional` 指定椭圆以正北逆时针方向旋转的角度。     |
| stRotation     | number        | `0.0`  | `optional` 指定椭圆纹理以正北逆时针方向旋转的角度。 |
| granularity    | number        |        | `optional` 指定椭圆上点之间的角距离（弧度）。       |
| vertexFormat | Cesium.VertexFormat        |        | `optional` 指定顶点属性渲染方式。                   |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryEllipseOutline

加载椭圆几何图形边框，相当于初始化一个 `Cesium.EllipseOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryEllipseOutline 属性

| 属性名                | 类型          | 默认值 | 描述                                                |
| --------------------- | ------------- | ------ | --------------------------------------------------- |
| center                | Object\|Array |        | `required` 指定椭圆的中心位置。                     |
| semiMajorAxis         | number        |        | `required` 指定椭圆的长半轴长度，单位是米。         |
| semiMinorAxis         | number        |        | `required` 指定椭圆的短半轴长度，单位是米。         |
| ellipsoid      | Cesium.Ellipsoid        |        | `optional` 指定椭圆的参考椭球体。                   |
| height                | number        | `0`    | `optional` 指定椭圆离地表的高度。                   |
| extrudedHeight        | number        |        | `optional` 指定椭圆拉伸高度。                       |
| rotation              | number        | `0.0`  | `optional` 指定椭圆以正北逆时针方向旋转的角度。     |
| stRotation            | number        | `0.0`  | `optional` 指定椭圆纹理以正北逆时针方向旋转的角度。 |
| granularity           | number        |        | `optional` 指定椭圆上点之间的角距离（弧度）。       |
| numberOfVerticalLines | number        | `16`   | `optional` 指定拉伸的椭圆连接顶部与底部的线条数量。 |

### VcGeometryEllipseOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[EllipseGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html)、[EllipseOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html)**
