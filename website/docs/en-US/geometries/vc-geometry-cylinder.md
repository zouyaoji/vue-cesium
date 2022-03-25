## VcGeometryCylinder

Loading a cylinder geometry. It is equivalent to initializing a `Cesium.CylinderGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryCylinder component.

:::demo Use the `vc-geometry-cylinder` and `vc-geometry-cylinder-outline` tags to add a cylinder (cone) to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes" :modelMatrix="modelMatrix">
        <vc-geometry-cylinder
          ref="geometryRef"
          :length="400000.0"
          :topRadius="200000.0"
          :bottomRadius="200000.0"
          :slices="128"
          :vertexFormat="vertexFormat"
        ></vc-geometry-cylinder>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline" :modelMatrix="modelMatrix">
        <vc-geometry-cylinder-outline
          ref="geometryOutlineRef"
          :length="400000.0"
          :topRadius="200000.0"
          :bottomRadius="200000.0"
          :slices="128"
          :numberOfVerticalLines="16"
        ></vc-geometry-cylinder-outline>
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
          new Cartesian3(0, 0, 0),
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

| Name         | Type   | Default | Description                                                                        |
| ------------ | ------ | ------- | ---------------------------------------------------------------------------------- |
| length       | Array  |         | `required` A numeric Property specifying the length of the cylinder.               |
| topRadius    | Number |         | `required` A numeric Property specifying the radius of the top of the cylinder.    |
| bottomRadius | Number |         | `required` A numeric Property specifying the radius of the bottom of the cylinder. |
| slices       | Number | `128`   | `optional` The number of edges around the perimeter of the cylinder.               |
| vertexFormat | Object |         | `optional` The vertex attributes to be computed.                                   |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryCylinderOutline

Loading a cylinder geometry outline. It is equivalent to initializing a `Cesium.CylinderOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryCylinderOutline Props

| Name                  | Type   | Default | Description                                                                             |
| --------------------- | ------ | ------- | --------------------------------------------------------------------------------------- |
| length                | Array  |         | `required` A numeric Property specifying the length of the cylinder.                    |
| topRadius             | Number |         | `required` A numeric Property specifying the radius of the top of the cylinder.         |
| bottomRadius          | Number |         | `required` A numeric Property specifying the radius of the bottom of the cylinder.      |
| slices                | Number | `128`   | `optional` The number of edges around the perimeter of the cylinder.                    |
| numberOfVerticalLines | Number | `16`    | `optional` Number of lines to draw between the top and bottom surfaces of the cylinder. |

### VcGeometryCylinderOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[CylinderGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGeometry.html)、[CylinderOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderOutlineGeometry.html)**
