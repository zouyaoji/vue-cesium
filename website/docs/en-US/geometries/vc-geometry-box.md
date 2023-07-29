## VcGeometryBox

Loading a box geometry. It is equivalent to initializing a `Cesium.BoxGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryBox component.

:::demo Use the `vc-geometry-box` and `vc-geometry-box-outline` tags to add cube box geometry objects on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes" :modelMatrix="modelMatrix">
        <vc-geometry-box ref="geometryRef" :dimensions="dimensions"></vc-geometry-box>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline" :modelMatrix="modelMatrix">
        <vc-geometry-box-outline ref="geometryOutlineRef" :dimensions="dimensions"></vc-geometry-box-outline>
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
      const modelMatrix = ref(null)
      const attributesOutline = ref(null)
      const outline = ref(true)
      const dimensions = { x: 400000.0, y: 300000.0, z: 500000.0 }
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
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.8)
        }
        appearance.value = new PerInstanceColorAppearance({
          flat: true
        })
        modelMatrix.value = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 40.0)),
          new Cartesian3(0.0, 0.0, 250000),
          new Matrix4()
        )
      }
      // lifecycle
      onMounted(() => {
        Promise.all([geometryRef.value.creatingPromise, geometryOutlineRef.value.creatingPromise]).then(geometries => {
          const { BoundingSphere } = Cesium
          const boundingSphereUnion = geometries.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = BoundingSphere.transform(geometry.boundingSphere, cur.vm.proxy.$parent.modelMatrix)
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
        modelMatrix,
        attributesOutline,
        outline,
        dimensions
      }
    }
  }
</script>
```

:::

### Props

| Name         | Type   | Default | Description                                                                                                 |
| ------------ | ------ | ------- | ----------------------------------------------------------------------------------------------------------- |
| dimensions   | VcPosition |         | `required` The width, depth, and height of the box stored in the x, y, and z coordinates of the Cartesian3. |
| vertexFormat | Cesium.VertexFormat |         | `optional` The vertex attributes to be computed.                                                            |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryBoxOutline

Loading a box geometry outline. It is equivalent to initializing a `Cesium.BoxOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryBoxOutline Props

| Name       | Type   | Default | Description                                                                                                 |
| ---------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------- |
| dimensions   | VcPosition |         | `required` The width, depth, and height of the box stored in the x, y, and z coordinates of the Cartesian3. |

### VcGeometryBoxOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[BoxGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxGeometry.html)、[BoxOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxOutlineGeometry.html)**
