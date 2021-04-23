## VcInstanceGeometry

加载实例化的几何体，相当于初始化一个 `Cesium.GeometryInstance` 实例。

**注意**：需要作为 `vc-primitive`、`vc-primitive-classification`、`vc-primitive-ground`、`vc-primitive-polyline-ground` 的子组件才能正常加载。

### 基础用法

几何体实例组件的基础用法。

:::demo 使用 `vc-instance-geometry` 标签在三维球上添加立方盒几何体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-instance-geometry ref="instanceBoxTop" id="top" :geometry="geometry" :attributes="attributes" :modelMatrix="modelMatrixTop">
      </vc-instance-geometry>
      <vc-instance-geometry ref="instanceBoxBottom" id="bottom" :geometry="geometry" :attributes="attributes" :modelMatrix="modelMatrixBottom">
      </vc-instance-geometry>
    </vc-primitive>
    <vc-primitive :appearance="appearance2" @click="onClicked">
      <vc-instance-geometry>
        <vc-geometry-rectangle ref="instanceRectangle" :rectangle="[110.5, 29.5, 115.5, 34.5]"></vc-geometry-rectangle>
      </vc-instance-geometry>
      <vc-instance-geometry>
        <vc-geometry-polygon
          ref="instancePolygon"
          :polygonHierarchy="[
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ]"
          :height="20000"
        ></vc-geometry-polygon>
      </vc-instance-geometry>
    </vc-primitive>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const geometry = ref(null)
      const appearance = ref(null)
      const appearance2 = ref(null)
      const attributes = ref(null)
      const modelMatrixTop = ref(null)
      const modelMatrixBottom = ref(null)
      const instanceBoxTop = ref(null)
      const instanceBoxBottom = ref(null)
      const instanceRectangle = ref(null)
      const instancePolygon = ref(null)

      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        instanceBoxBottom.value.unload()
        instanceBoxTop.value.unload()
        instanceRectangle.value.unload()
        // instancePolygon.value.unload()
      }
      const reload = () => {
        instanceBoxBottom.value.reload()
        instanceBoxTop.value.reload()
        instanceRectangle.value.reload()
        // instancePolygon.value.reload()
      }
      const load = () => {
        instanceBoxBottom.value.load()
        instanceBoxTop.value.load()
        instanceRectangle.value.load()
        // instancePolygon.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        window.vm = instance
        geometry.value = Cesium.BoxGeometry.fromDimensions({
          vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,
          dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 250000.0)
        })
        appearance.value = new Cesium.PerInstanceColorAppearance()
        attributes.value = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
        }
        modelMatrixBottom.value = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
          new Cesium.Cartesian3(0.0, 0.0, 100000.0),
          new Cesium.Matrix4()
        )
        modelMatrixTop.value = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
          new Cesium.Cartesian3(0.0, 0.0, 1500000.0),
          new Cesium.Matrix4()
        )
        appearance2.value = new Cesium.MaterialAppearance({
          material: Cesium.Material.fromType('Checkerboard', {
            repeat: new Cesium.Cartesian2(20.0, 6.0)
          }),
          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
        })
      }
      // lifecycle
      onMounted(() => {
        Promise.all([
          instanceBoxTop.value.createPromise,
          instanceBoxBottom.value.createPromise,
          instanceRectangle.value.createPromise,
          instancePolygon.value.createPromise
        ]).then(instances => {
          const { BoundingSphere } = Cesium
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.geometry || cur.cesiumObject
            const computGeometry = geometry.constructor.createGeometry(geometry)
            const boundingSphere =
              cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix
                ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix)
                : computGeometry.boundingSphere
            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
          console.log('All instances are loaded.')
        })
      })
      return {
        unload,
        reload,
        load,
        geometry,
        appearance,
        appearance2,
        attributes,
        modelMatrixBottom,
        modelMatrixTop,
        onClicked,
        onViewerReady,
        instanceBoxTop,
        instanceBoxBottom,
        instanceRectangle,
        instancePolygon
      }
    }
  }
</script>
```

:::

### 属性

| 属性名      | 类型   | 默认值 | 描述                                                                                                           |
| ----------- | ------ | ------ | -------------------------------------------------------------------------------------------------------------- |
| geometry    | Object |        | `required` 指定 geometry。                                                                                     |
| modelMatrix | Object |        | `optional` 指定将几何图形从模型坐标转换为世界坐标的模型矩阵。                                                  |
| id          | \*     |        | `optional` 指定与 geometry 关联的信息，拾取时或者 Primitive#getGeometryInstanceAttributes 方法将返回该属性值。 |
| attributes  | Object |        | `optional` 指定每个实例的属性。                                                                                |

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### 参考

- 官方文档： **[GeometryInstance](https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html)**
