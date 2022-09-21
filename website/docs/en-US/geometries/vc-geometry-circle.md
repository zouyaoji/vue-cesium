## VcGeometryCircle

Loading a circle geometry. It is equivalent to initializing a `Cesium.CircleGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryCircle component.

:::demo Use the `vc-geometry-circle` and `vc-geometry-circle-outline` tags to add a circle on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-circle ref="geometryRef" :center="[110, 38]" :radius="250000"></vc-geometry-circle>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-circle-outline ref="geometryOutlineRef" :center="[110, 38]" :radius="250000"></vc-geometry-circle-outline>
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
        dimensions
      }
    }
  }
</script>
```

:::

### Props

| Name           | Type   | Default | Description                                                                                               |
| -------------- | ------ | ------- | --------------------------------------------------------------------------------------------------------- |
| center         | Object |         | `required` The circle's center point in the fixed frame.                                                  |
| radius         | number |         | `required` The radius in meters.                                                                          |
| ellipsoid      | Cesium.Ellipsoid |         | `optional` The ellipsoid the circle will be on.                                                           |
| height         | number | `0.0`   | `optional` The distance in meters between the circle and the ellipsoid surface.                           |
| granularity    | number | `0.02`  | `optional` The angular distance between points on the circle in radians.                                  |
| vertexFormat   | Object |         | `optional` The vertex attributes to be computed.                                                          |
| extrudedHeight | number | `0.0`   | `optional` The distance in meters between the circle's extruded face and the ellipsoid surface.           |
| stRotation     | number | `0.0`   | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryCicleOutline

Loading the circle geometry outline. It is equivalent to initializing a `Cesium.CircleOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryCicleOutline Props

| Name                  | Type   | Default | Description                                                                                     |
| --------------------- | ------ | ------- | ----------------------------------------------------------------------------------------------- |
| center                | Object |         | `required` The circle's center point in the fixed frame.                                        |
| radius                | number |         | `required` The radius in meters.                                                                |
| ellipsoid      | Cesium.Ellipsoid |         | `optional` The ellipsoid the circle will be on.                                                 |
| height                | number | `0.0`   | `optional` The distance in meters between the circle and the ellipsoid surface.                 |
| granularity           | number | `0.02`  | `optional` The angular distance between points on the circle in radians.                        |
| extrudedHeight        | number | `0.0`   | `optional` The distance in meters between the circle's extruded face and the ellipsoid surface. |
| numberOfVerticalLines | number | `16`    | `optional` Number of lines to draw between the top and bottom of an extruded circle.            |

### VcGeometryCicleOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[CircleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CircleGeometry.html)、[CircleOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CircleOutlineGeometry.html)**
