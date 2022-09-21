## VcGeometryInstance

加载实例化的几何体，相当于初始化一个 `Cesium.GeometryInstance` 实例。

**注意**：需要作为 `vc-primitive`、`vc-primitive-classification`、`vc-primitive-ground`、`vc-primitive-ground-polyline` 的子组件才能正常加载。

### 基础用法

几何体实例组件的基础用法。

:::demo 使用 `vc-geometry-instance` 标签在三维球上添加立方盒几何体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance ref="instanceBoxTop" id="top" :geometry="geometry" :attributes="attributes" :modelMatrix="modelMatrixTop">
      </vc-geometry-instance>
      <vc-geometry-instance ref="instanceBoxBottom" id="bottom" :geometry="geometry" :attributes="attributes" :modelMatrix="modelMatrixBottom">
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance2" @click="onClicked">
      <vc-geometry-instance>
        <vc-geometry-rectangle ref="instanceRectangle" :rectangle="[110.5, 29.5, 115.5, 34.5]"></vc-geometry-rectangle>
      </vc-geometry-instance>
      <vc-geometry-instance>
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
      </vc-geometry-instance>
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
          instanceBoxTop.value.creatingPromise,
          instanceBoxBottom.value.creatingPromise,
          instanceRectangle.value.creatingPromise,
          instancePolygon.value.creatingPromise
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
| geometry    | Cesium.Geometry \| Cesium.GeometryFactory |        | `required` 指定 geometry。                                                                                     |
| modelMatrix | Cesium.Matrix4 |        | `optional` 指定将几何图形从模型坐标转换为世界坐标的模型矩阵。                                                  |
| id          | \*     |        | `optional` 指定与 geometry 关联的信息，拾取时或者 Primitive#getGeometryInstanceAttributes 方法将返回该属性值。 |
| attributes  | Object |        | `optional` 指定每个实例的属性。                                                                                |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 方法

| 方法名             | 参数                                    | 描述                                        |
| ------------------ | --------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\> | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                | 手动卸载组件。                              |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                    | 获取通过该组件加载的 Cesium 对象。          |

### 插槽

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载 vc-geometry-xxx 子组件。 | vc-geometry-box/vc-geometry-box-outline/vc-geometry-circle/vc-geometry-circle-outline/vc-geometry-corridor/vc-geometry-corridor-outline/vc-geometry-cylinder/vc-geometry-cylinder-outline/vc-geometry-ellipse/vc-geometry-ellipse-outline/vc-geometry-ellipsoid/vc-geometry-ellipsoid-outline/vc-geometry-frustum/vc-geometry-frustum-outline/vc-geometry-plane/vc-geometry-plane-outline/vc-geometry-polygon/vc-geometry-polygon-outline/vc-geometry-polygon-coplanar/vc-geometry-polygon-coplanar-outline/vc-geometry-polyline/vc-geometry-ground-polyline/vc-geometry-simple-polyline/vc-geometry-polyline-volume/vc-geometry-rectangle/vc-geometry-rectangle-outline/vc-geometry-sphere/vc-geometry-sphere-outline/vc-geometry-wall/vc-geometry-wall-outline |

### 参考

- 官方文档： **[GeometryInstance](https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html)**
