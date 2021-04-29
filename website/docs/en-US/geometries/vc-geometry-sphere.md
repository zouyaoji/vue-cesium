## VcGeometrySphere

Loading a sphere geometry. It is equivalent to initializing a `Cesium.SphereGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-instance-geometry` to load normally.

### Basic usage

The basic usage of VcGeometrySphere component.

:::demo Use the `vc-geometry-sphere` and `vc-geometry-sphere-outline` tags to add a sphere to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrix">
        <vc-geometry-sphere ref="geometryRef" :radius="200000" :vertexFormat="vertexFormat"></vc-geometry-sphere>
      </vc-instance-geometry>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-instance-geometry :attributes="attributesOutline" :modelMatrix="modelMatrix">
        <vc-geometry-sphere-outline ref="geometryOutlineRef" :radius="200000"></vc-geometry-sphere-outline>
      </vc-instance-geometry>
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
      const modelMatrix = ref(null)
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
        appearance.value = new PerInstanceColorAppearance({
          flat: true
        })
        attributes.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
        modelMatrix.value = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
          new Cartesian3(0, 0, 100000),
          new Matrix4()
        )
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

### Props

| Name            | Type   | Default | Description                                                                   |
| --------------- | ------ | ------- | ----------------------------------------------------------------------------- |
| radius          | Number | `1.0`   | `optional` The radius of the sphere.                                          |
| stackPartitions | Number | `0.0`   | `optional` The number of times to partition the ellipsoid into stacks.        |
| slicePartitions | Number | `10`    | `optional` The number of times to partition the ellipsoid into radial slices. |
| vertexFormat    | Object |         | `optional` The vertex attributes to be computed.                              |

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### VcGeometrySphereOutline

Loading a sphere geometry outline. It is equivalent to initializing a `Cesium.SphereOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-instance-geometry` to load normally.

### VcGeometrySphereOutline Props

| Name            | Type   | Default | Description                                                                              |
| --------------- | ------ | ------- | ---------------------------------------------------------------------------------------- |
| radius          | Number | `1.0`   | `optional` The radius of the sphere.                                                     |
| stackPartitions | Number | `0.0`   | `optional` The number of times to partition the ellipsoid into stacks.                   |
| slicePartitions | Number | `10`    | `optional` The number of times to partition the ellipsoid into radial slices.            |
| subdivisions    | Number | `200`   | `optional` The number of points per line, determining the granularity of the curvature . |

### VcGeometrySphereOutline Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[SphereGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SphereGeometry.html)、[SphereOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SphereOutlineGeometry.html)**
