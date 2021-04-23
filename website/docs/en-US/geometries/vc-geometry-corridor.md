## VcGeometryCorridor

加载廊道几何图形，相当于初始化一个 `Cesium.CorridorGeometry` 实例。

**注意**：需要作为 `vc-instance-geometry` 的子组件才能正常加载。

### 基础用法

廊道几何图形组件的基础用法。

:::demo 使用 `vc-geometry-corridor` 和 `vc-geometry-corridor-outline` 标签在三维球上添加廊道。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-instance-geometry :attributes="attributes">
        <vc-geometry-corridor ref="geometryRef" :positions="positions" :width="250000"></vc-geometry-corridor>
      </vc-instance-geometry>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-instance-geometry :attributes="attributesOutline">
        <vc-geometry-corridor-outline ref="geometryOutlineRef" :positions="positions" :width="250000"></vc-geometry-corridor-outline>
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
      const modelMatrix = ref(null)
      const attributesOutline = ref(null)
      const outline = ref(true)
      const positions = [
        { lng: 100.0, lat: 40.0 },
        { lng: 105.0, lat: 40.0 },
        { lng: 105.0, lat: 35.0 }
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
        positions
      }
    }
  }
</script>
```

:::

### 属性

| 属性名         | 类型   | 默认值 | 描述                                                                      | 可选值 |
| -------------- | ------ | ------ | ------------------------------------------------------------------------- | ------ |
| positions      | Array  |        | `required` 指定描述 corridor 位置的经纬度(高度)数组。                     |
| width          | Number |        | `required` 指定 corridor 边之间的距离。                                   |
| ellipsoid      | Object |        | `optional` 指定 corridor 参考椭球体。                                     |
| granularity    | Number |        | `optional` 指定每个经纬度之间的采样粒度。                                 |
| height         | Number | `0`    | `optional` 指定 corridor 高度。                                           |
| extrudedHeight | Number |        | `optional` 指定 corridor 拉伸高度。                                       |
| vertexFormat   | Object |        | `optional` 指定 corridor 要缓存的顶点属性。                               |
| cornerType     | Number | `0`    | `optional` 指定 corridor 转角样式。**ROUNDED: 0, MITERED: 1, BEVELED: 2** | 0/1/2  |

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### VcGeometryCorridorOutline

加载廊道边框，相当于初始化一个 `Cesium.CorridorOutlineGeometry` 实例。

**注意**：需要作为 `vc-instance-geometry` 的子组件才能正常加载。

### VcGeometryCorridorOutline 属性

| 属性名         | 类型   | 默认值 | 描述                                                                      | 可选值 |
| -------------- | ------ | ------ | ------------------------------------------------------------------------- | ------ |
| positions      | Array  |        | `required` 指定描述 corridor 位置的经纬度(高度)数组。                     |
| width          | Number |        | `required` 指定 corridor 边之间的距离。                                   |
| ellipsoid      | Object |        | `optional` 指定 corridor 参考椭球体。                                     |
| granularity    | Number |        | `optional` 指定每个经纬度之间的采样粒度。                                 |
| height         | Number | `0`    | `optional` 指定 corridor 高度。                                           |
| extrudedHeight | Number |        | `optional` 指定 corridor 拉伸高度。                                       |
| cornerType     | Number | `0`    | `optional` 指定 corridor 转角样式。**ROUNDED: 0, MITERED: 1, BEVELED: 2** | 0/1/2  |

### VcGeometryPolygonCoplanarOutline 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### 参考

- 官方文档： **[CorridorGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGeometry.html)、[CorridorOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorOutlineGeometry.html)**
