## VcGeometryPlane

Loading a plane geometry. It is equivalent to initializing a `Cesium.PlaneGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryPlane component.

:::demo Use the `vc-geometry-plane` and `vc-geometry-plane-outline` tags to add a plane on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes" :modelMatrix="modelMatrix">
        <vc-geometry-plane ref="geometryRef" :vertexFormat="vertexFormat"></vc-geometry-plane>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearanceOutline" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline" :modelMatrix="modelMatrix">
        <vc-geometry-plane-outline ref="geometryOutlineRef"></vc-geometry-plane-outline>
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
      const appearanceOutline = ref(null)
      const attributes = ref(null)
      const modelMatrix = ref(null)
      const attributesOutline = ref(null)
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
          closed: true
        })
        appearanceOutline.value = new PerInstanceColorAppearance({
          flat: true,
          renderState: {
            lineWidth: Math.min(2.0, viewer.scene.maximumAliasedLineWidth)
          }
        })
        attributes.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
        const dimensions = new Cartesian3(400000.0, 300000.0, 1.0)
        const translateMatrix = Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(108, 38))
        const scaleMatrix = Matrix4.fromScale(dimensions)
        const planeModelMatrix = new Matrix4()
        modelMatrix.value = Matrix4.multiply(translateMatrix, scaleMatrix, planeModelMatrix)
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
        appearanceOutline,
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

| Name         | Type   | Default | Description                                      |
| ------------ | ------ | ------- | ------------------------------------------------ |
| vertexFormat | Cesium.VertexFormat |         | `optional` The vertex attributes to be computed. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryPlaneOutline

Loading a plane geometry outline. It is equivalent to initializing a `Cesium.PlaneOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryPlaneOutline Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### VcGeometryPlaneOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[PlaneGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGeometry.html)、[PlaneOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PlaneOutlineGeometry.html)**
