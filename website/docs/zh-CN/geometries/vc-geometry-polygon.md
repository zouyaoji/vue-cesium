## VcGeometryPolygon

加载多边形，相当于初始化一个 `Cesium.PolygonGeometry` 实例。

**注意**：需要作为 `vc-instance-geometry` 的子组件才能正常加载。

### 基础用法

多边形几何图形组件的基础用法。

:::demo 使用 `vc-geometry-polygon` 和 `vc-geometry-polygon-outline` 标签在三维球上添加多边形。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-instance-geometry>
        <vc-geometry-polygon
          ref="geometryRef"
          :polygonHierarchy="polygonHierarchy"
          :vertexFormat="vertexFormat"
          :height="100000"
          :extrudedHeight="30"
        ></vc-geometry-polygon>
      </vc-instance-geometry>
    </vc-primitive>
    <vc-primitive :appearance="appearanceOutline" @click="onClicked" v-if="outline">
      <vc-instance-geometry :attributes="attributesOutline">
        <vc-geometry-polygon-outline
          ref="geometryOutlineRef"
          :polygonHierarchy="polygonHierarchy"
          :height="100000"
          :extrudedHeight="30"
        ></vc-geometry-polygon-outline>
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
      const appearanceOutline = ref(null)
      const vertexFormat = ref(null)
      const attributesOutline = ref(null)
      const outline = ref(true)
      const polygonHierarchy = [
        { lng: 102.1, lat: 29.5 },
        { lng: 106.2, lat: 29.5 },
        { lng: 106.2, lat: 33.5 },
        { lng: 108.2, lat: 35.5 },
        { lng: 102.1, lat: 33.5 }
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
        const { PerInstanceColorAppearance, EllipsoidSurfaceAppearance, Material, ColorGeometryInstanceAttribute } = Cesium
        appearanceOutline.value = new PerInstanceColorAppearance({
          flat: true
        })
        vertexFormat.value = EllipsoidSurfaceAppearance.VERTEX_FORMAT

        appearance.value = new EllipsoidSurfaceAppearance({
          material: new Material({
            fabric: {
              type: 'Water',
              uniforms: {
                normalMap: Cesium.buildModuleUrl('Assets/Textures/waterNormals.jpg'),
                frequency: 1000.0,
                animationSpeed: 0.05,
                amplitude: 10.0
              }
            }
          })
        })

        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
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
        appearanceOutline,
        attributesOutline,
        outline,
        polygonHierarchy,
        vertexFormat
      }
    }
  }
</script>
```

:::

### 属性

| 属性名            | 类型          | 默认值  | 描述                                                                 | 可选值 |
| ----------------- | ------------- | ------- | -------------------------------------------------------------------- | ------ |
| polygonHierarchy  | Object\|Array |         | `optional` 指定 polygon 的 PolygonHierarchy 属性，可以包含岛洞。     |
| height            | Number        | `0`     | `optional` 指定 polygon 的高度。                                     |
| extrudedHeight    | Number        |         | `optional` 指定 polygon 拉伸高度。                                   |
| vertexFormat      | Object        |         | `optional` 指定 polygon 要缓存的顶点属性。                           |
| stRotation        | Number        | `0.0`   | `optional` 指定 polygon 纹理按正北方向逆时针旋转角度。               |
| ellipsoid         | Object        |         | `optional` 指定 polygon 参考椭球体。                                 |
| granularity       | Number        |         | `optional` 指定 polygon 每个纬度和经度之间的距离（以弧度为单位）。   |
| perPositionHeight | Boolean       | `false` | `optional` 指定 polygon 是否使用每个位置的高度。                     |
| closeTop          | Boolean       | `true`  | `optional` 指定 polygon 拉伸出来的顶部是否闭合。                     |
| closeBottom       | Boolean       | `true`  | `optional` 指定 polygon 拉伸出来的底部是否闭合。                     |
| arcType           | Number        | `1`     | `optional` 指定 polygon 线条类型。**NONE: 0, GEODESIC: 1, RHUMB: 2** | 0/1/2  |

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### VcGeometryPolygonOutline

加载多边形几何图形边框，相当于初始化一个 `Cesium.PolygonOutlineGeometry` 实例。

**注意**：需要作为 `vc-instance-geometry` 的子组件才能正常加载。

### VcGeometryPolygonOutline 属性

| 属性名            | 类型          | 默认值  | 描述                                                                 | 可选值 |
| ----------------- | ------------- | ------- | -------------------------------------------------------------------- | ------ |
| polygonHierarchy  | Object\|Array |         | `optional` 指定 polygon 的 PolygonHierarchy 属性。                   |
| height            | Number        | `0`     | `optional` 指定 polygon 的高度。                                     |
| extrudedHeight    | Number        |         | `optional` 指定 polygon 拉伸高度。                                   |
| vertexFormat      | Object        |         | `optional` 指定 polygon 要缓存的顶点属性。                           |
| ellipsoid         | Object        |         | `optional` 指定 polygon 参考椭球体。                                 |
| granularity       | Number        |         | `optional` 指定 polygon 每个纬度和经度之间的距离（以弧度为单位）。   |
| perPositionHeight | Boolean       | `false` | `optional` 指定 polygon 是否使用每个位置的高度。                     |
| arcType           | Number        | `1`     | `optional` 指定 polygon 线条类型。**NONE: 0, GEODESIC: 1, RHUMB: 2** | 0/1/2  |

### VcGeometryPolygonOutline 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### 参考

- 官方文档： **[PolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html)、[PolygonOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html)**
