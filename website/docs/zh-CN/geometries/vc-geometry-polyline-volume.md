## VcGeometryPolylineVolume

加载线柱体，相当于初始化一个 `Cesium.PolylineVolumeGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### 基础用法

线柱体几何图形组件的基础用法。

:::demo 使用 `vc-geometry-polyline-volume` 和 `vc-geometry-polyline-volume-outline` 标签在三维球上添加线柱体。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-polyline-volume
          ref="geometryRef"
          :polylinePositions="polylinePositions"
          :shapePositions="shape"
          :vertexFormat="vertexFormat"
        ></vc-geometry-polyline-volume>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-polyline-volume-outline
          ref="geometryOutlineRef"
          :polylinePositions="polylinePositions"
          :shapePositions="shape"
        ></vc-geometry-polyline-volume-outline>
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
      const shape = ref([])
      const polylinePositions = [
        { lng: 105.0, lat: 32.0 },
        { lng: 105.0, lat: 36.0 },
        { lng: 108.0, lat: 36.0 }
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
        vertexFormat.value = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
        shape.value = computeCircle(60000.0)
      }
      const computeCircle = radius => {
        let positions = []
        for (let i = 0; i < 360; i++) {
          let radians = Cesium.Math.toRadians(i)
          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
        }
        return positions
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
        vertexFormat,
        shape,
        polylinePositions
      }
    }
  }
</script>
```

:::

### 属性

| 属性名            | 类型   | 默认值 | 描述                                                                              | 可选值 |
| ----------------- | ------ | ------ | --------------------------------------------------------------------------------- | ------ |
| polylinePositions | Array  |        | `required` 指定 polyline volume 位置信息。                                        |
| shapePositions    | Array  |        | `required` 指定 polyline volume 拉伸的形状数组。                                  |
| ellipsoid         | Object |        | `optional` 指定 polyline volume 参考椭球体。                                      |
| granularity       | Number |        | `optional` 指定 polyline volume 每个经纬度之间的距离（弧度）。                    |
| vertexFormat      | Object |        | `optional` 指定 polyline volume 顶点属性渲染方式。                                |
| cornerType        | Number |        | `optional` 指定 polyline volume 转角类型。 **ROUNDED: 0, MITERED: 1, BEVELED: 2** | 0/1/2  |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcGeometryPolylineVolumeOutline

加载线柱体几何图形边框，相当于初始化一个 `Cesium.PolylineVolumeOutlineGeometry` 实例。

**注意**：需要作为 `vc-geometry-instance` 的子组件才能正常加载。

### VcGeometryPolylineVolumeOutline 属性

| 属性名            | 类型   | 默认值 | 描述                                                                              | 可选值 |
| ----------------- | ------ | ------ | --------------------------------------------------------------------------------- | ------ |
| polylinePositions | Array  |        | `required` 指定 polyline volume 位置信息。                                        |
| shapePositions    | Array  |        | `required` 指定 polyline volume 拉伸的形状数组。                                  |
| ellipsoid         | Object |        | `optional` 指定 polyline volume 参考椭球体。                                      |
| granularity       | Number |        | `optional` 指定 polyline volume 每个经纬度之间的距离（弧度）。                    |
| cornerType        | Number |        | `optional` 指定 polyline volume 转角类型。 **ROUNDED: 0, MITERED: 1, BEVELED: 2** | 0/1/2  |

### VcGeometryPolylineVolumeOutline 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： **[PolylineVolumeGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGeometry.html)、[PolylineVolumeOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeOutlineGeometry.html)**
