## VcGeometryEllipsoid

Loading a ellipsoid geometry. It is equivalent to initializing a `Cesium.EllipsoidGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

The basic usage of VcGeometryEllipsoid component.

:::demo Use the `vc-geometry-ellipsoid` and `vc-geometry-ellipsoid-outline` tags to add ellipsoid sphere to the viewer.

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
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-switch v-model="outline" active-color="#13ce66" inactive-text="Show border"> </el-switch>
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

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| --------------- | ------------- | ------ | ----------------------------------------------------------- |
| radii | Object\|Array | | `optional` The radii of the ellipsoid in the x, y, and z directions. |
| innerRadii | number | | `optional` The inner radii of the ellipsoid in the x, y, and z directions.|
| minimumClock | number | `0.0` | `optional` The minimum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis. |
| maximumClock | number | `2*PI` | `optional` The maximum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis. |
| minimumCone | number | `0.0` | `optional` The minimum angle measured from the positive z-axis and toward the negative z-axis. |
| maximumCone | number | `PI` | `optional` The maximum angle measured from the positive z-axis and toward the negative z-axis. |
| stackPartitions | number | `10` | `optional` The number of times to partition the ellipsoid into stacks. |
| slicePartitions | number | `8` | `optional` The number of times to partition the ellipsoid into radial slices.|
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryEllipsoidOutline

Loading a ellipsoid geometry outline. It is equivalent to initializing a `Cesium.EllipsoidOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryEllipsoidOutline Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| --------------- | ------------- | ------- | ----------------------------------------------------------- |
| radii | Object\|Array | | `optional` The radii of the ellipsoid in the x, y, and z directions. |
| innerRadii | number | | `optional` The inner radii of the ellipsoid in the x, y, and z directions.|
| minimumClock | number | `0.0` | `optional` The minimum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis. |
| maximumClock | number | `2*PI` | `optional` The maximum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis. |
| minimumCone | number | `0.0` | `optional` The minimum angle measured from the positive z-axis and toward the negative z-axis. |
| maximumCone | number | `PI` | `optional` The maximum angle measured from the positive z-axis and toward the negative z-axis. |
| stackPartitions | number | `10` | `optional` The count of stacks for the ellipsoid (1 greater than the number of parallel lines). |
| slicePartitions | number | `8` | `optional` The count of slices for the ellipsoid (Equal to the number of radial lines).|
| subdivisions | number | `128` | `optional` The number of points per line, determining the granularity of the curvature. |

### VcGeometryEllipsoidOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[EllipsoidGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGeometry.html)、[EllipsoidOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidOutlineGeometry.html)**
