## VcGeometryEllipse

Loading an ellipse geometry. It is equivalent to initializing a `Cesium.EllipseGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryEllipse component.

:::demo Use the `vc-geometry-ellipse` and `vc-geometry-ellipse-outline` tags to add an ellipse on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-ellipse
          ref="geometryRef"
          :center="{ lng: 102, lat: 38 }"
          :semiMinorAxis="200000.0"
          :semiMajorAxis="300000.0"
          :height="50000"
        ></vc-geometry-ellipse>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-ellipse-outline
          ref="geometryOutlineRef"
          :center="{ lng: 102, lat: 38 }"
          :semiMinorAxis="200000.0"
          :semiMajorAxis="300000.0"
          :height="50000"
        ></vc-geometry-ellipse-outline>
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
        outline
      }
    }
  }
</script>
```

:::

### Props

| Name           | Type           | Default | Description                                                                                      |
| -------------- | -------------- | ------- | ------------------------------------------------------------------------------------------------ |
| center         | Object\|Array  |         | `required` The ellipse's center point in the fixed frame.                                        |
| semiMajorAxis  | Number         |         | `required` The length of the ellipse's semi-major axis in meters.                                |
| semiMinorAxis  | Number         |         | `required` The length of the ellipse's semi-minor axis in meters.                                |
| ellipsoid      | Object         |         | `optional` The ellipsoid the ellipse will be on.                                                 |
| height         | Number         | `0`     | `optional` The distance in meters between the ellipse and the ellipsoid surface.                 |
| extrudedHeight | Number         |         | `optional` The distance in meters between the ellipse's extruded face and the ellipsoid surface. |
| rotation       | Number         | `0.0`   | `optional` The angle of rotation counter-clockwise from north.                                   |
| stRotation     | Number\|Object | `0.0`   | `optional` The rotation of the texture coordinates counter-clockwise from north.                 |
| granularity    | Number         |         | `optional` The angular distance between points on the ellipse in radians.                        |
| vertexFormat   | Object         |         | `optional` The vertex attributes to be computed.                                                 |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryEllipseOutline

Loading an ellipse geometry outline. It is equivalent to initializing a `Cesium.EllipseOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryEllipseOutline Props

| Name                  | Type           | Default | Description                                                                                      |
| --------------------- | -------------- | ------- | ------------------------------------------------------------------------------------------------ |
| center                | Object         |         | `required` The ellipse's center point in the fixed frame.                                        |
| semiMajorAxis         | Number         |         | `required` The length of the ellipse's semi-major axis in meters.                                |
| semiMinorAxis         | Number         |         | `required` The length of the ellipse's semi-minor axis in meters.                                |
| ellipsoid             | Object         |         | `optional` The ellipsoid the ellipse will be on.                                                 |
| height                | Number         | `0`     | `optional` The distance in meters between the ellipse and the ellipsoid surface.                 |
| extrudedHeight        | Number         |         | `optional` The distance in meters between the ellipse's extruded face and the ellipsoid surface. |
| rotation              | Number         | `0.0`   | `optional` The angle of rotation counter-clockwise from north.                                   |
| stRotation            | Number\|Object | `0.0`   | `optional` The rotation of the texture coordinates counter-clockwise from north.                 |
| granularity           | Number         |         | `optional` The angular distance between points on the ellipse in radians.                        |
| numberOfVerticalLines | Number         | `16`    | `optional` Number of lines to draw between the top and bottom surface of an extruded ellipse.    |

### VcGeometryEllipseOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[EllipseGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html)、[EllipseOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html)**
