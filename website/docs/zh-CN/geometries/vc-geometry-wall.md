## VcGeometryWall

加载墙体几何图形，相当于初始化一个 `Cesium.WallGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

墙体几何图形组件的基础用法。

:::demo 使用 `vc-geometry-wall` 和 `vc-geometry-wal-outline` 标签在三维球上添加墙体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-wall ref="geometryRef" :positions="positions" :vertexFormat="vertexFormat"></vc-geometry-wall>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-wall-outline ref="geometryOutlineRef" :positions="positions"></vc-geometry-wall-outline>
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
      const vertexFormat = ref(null)
      const positions = [
        { lng: 107.0, lat: 40.0, height: 100000.0 },
        { lng: 97.0, lat: 40.0, height: 100000.0 },
        { lng: 97.0, lat: 37.0, height: 100000.0 },
        { lng: 107.0, lat: 37.0, height: 100000.0 },
        { lng: 107.0, lat: 40.0, height: 100000.0 }
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
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Cartesian3, MaterialAppearance } = Cesium
        appearance.value = new PerInstanceColorAppearance({
          flat: true
        })
        attributes.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        vertexFormat.value = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
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
        positions,
        vertexFormat
      }
    }
  }
</script>
```

:::

### 属性

| 属性名         | 类型   | 默认值 | 描述                                              |
| -------------- | ------ | ------ | ------------------------------------------------- |
| positions      | Array  |        | `required` 指定 wall 位置数组。                   |
| granularity    | number |        | `optional` 指定每个纬度和经度之间的距离（弧度）。 |
| maximumHeights | Array  |        | `optional` 指定 wall 顶部的高度数组。             |
| minimumHeights | Array  |        | `optional` 指定 wall 底部的高度数组。             |
| ellipsoid      | Object |        | `optional` 指定参考椭球体。                       |
| vertexFormat   | Object |        | `optional` 指定顶点属性渲染方式。                 |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryWallOutline

加载墙体几何图形边框，相当于初始化一个 `Cesium.WallOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryWallOutline 属性

| 属性名         | 类型   | 默认值 | 描述                                              |
| -------------- | ------ | ------ | ------------------------------------------------- |
| positions      | Array  |        | `required` 指定 wall 位置数组。                   |
| granularity    | number |        | `optional` 指定每个纬度和经度之间的距离（弧度）。 |
| maximumHeights | Array  |        | `optional` 指定 wall 顶部的高度数组。             |
| minimumHeights | Array  |        | `optional` 指定 wall 底部的高度数组。             |
| ellipsoid      | Object |        | `optional` 指定参考椭球体。                       |

### VcGeometryWallOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[WallGeometry](https://cesium.com/docs/cesiumjs-ref-doc/WallGeometry.html)、[WallOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/WallOutlineGeometry.html)**
