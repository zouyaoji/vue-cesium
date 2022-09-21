## VcGeometryFrustum

Loading a frustum geometry. It is equivalent to initializing a `Cesium.FrustumGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of the VcGeometryFrustum component.

:::demo Use the `vc-geometry-frustum` and `vc-geometry-frustum-outline` tags to add a frustum on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-frustum
          ref="geometryRef"
          :frustum="frustum"
          :origin="{ lng: 105, lat: 35 }"
          :orientation="{ x: 0, y: 0, z: 0, w: 1}"
          :vertexFormat="vertexFormat"
        ></vc-geometry-frustum>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-frustum-outline
          ref="geometryOutlineRef"
          :frustum="frustum"
          :origin="{ lng: 105, lat: 35 }"
          :orientation="{ x: 0, y: 0, z: 0, w: 1}"
        ></vc-geometry-frustum-outline>
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
      const frustum = ref(null)
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
        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
        frustum.value = new PerspectiveFrustum({
          fov: Cesium.Math.toRadians(30.0),
          aspectRatio: 1920.0 / 1080.0,
          near: 1.0,
          far: 500000
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
        outline,
        frustum,
        vertexFormat
      }
    }
  }
</script>
```

:::

### Props

| Name         | Type          | Default | Description                                      |
| ------------ | ------------- | ------- | ------------------------------------------------ |
| frustum     | Cesium.PerspectiveFrustum \| Cesium.OrthographicFrustum        |         | `optional` The frustum.                          |
| origin       | VcPosition\|Array |         | `optional` The origin of the frustum.            |
| orientation  | Cesium.Quaternion\|Array |         | `optional` The orientation of the frustum.       |
| vertexFormat | Cesium.VertexFormat        |         | `optional` The vertex attributes to be computed. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryFrustumOutline

Loading a frustum geometry outline. It is equivalent to initializing a `Cesium.FrustumOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryFrustumOutline Props

| Name        | Type          | Default | Description                                |
| ----------- | ------------- | ------- | ------------------------------------------ |
| frustum     | Cesium.PerspectiveFrustum \| Cesium.OrthographicFrustum        |         | `optional` The frustum.                    |
| origin       | VcPosition\|Array |         | `optional` The origin of the frustum.      |
| orientation  | Cesium.Quaternion\|Array |         | `optional` The orientation of the frustum. |

### VcGeometryFrustumOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[FrustumGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumGeometry.html)、[FrustumOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumOutlineGeometry.html)**
