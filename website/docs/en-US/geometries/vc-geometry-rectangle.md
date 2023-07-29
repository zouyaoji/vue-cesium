## VcGeometryRectangle

Loading a rectangle geometry. It is equivalent to initializing a `Cesium.RectangleGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryRectangle component.

:::demo Use the `vc-geometry-rectangle` and `vc-geometry-rectangle-outline` tags to add a rectangle on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance>
        <vc-geometry-rectangle ref="geometryRef" :rectangle="rectangle" :vertexFormat="vertexFormat"></vc-geometry-rectangle>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearanceOutline" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-rectangle-outline ref="geometryOutlineRef" :rectangle="rectangle"></vc-geometry-rectangle-outline>
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
      const attributesOutline = ref(null)
      const outline = ref(true)
      const vertexFormat = ref(null)
      const rectangle = { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }
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
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Cartesian3, MaterialAppearance } = Cesium
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.8)
        }
        appearance.value = new MaterialAppearance()
        appearanceOutline.value = new PerInstanceColorAppearance({
          flat: true
        })
        vertexFormat.value = MaterialAppearance.vertexFormat
      }
      // lifecycle
      onMounted(() => {
        Promise.all([geometryRef.value.creatingPromise, geometryOutlineRef.value.creatingPromise]).then(geometries => {
          const { BoundingSphere } = Cesium
          const boundingSphereUnion = geometries.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.proxy.$parent.modelMatrix
              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.proxy.$parent.modelMatrix)
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
        attributesOutline,
        outline,
        rectangle,
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
| ---- | ---- | ------- | ----------- |
| rectangle | VcRectangle\|Array | | `required` A cartographic rectangle with north, south, east and west properties. |
| vertexFormat | number | | `optional` The vertex attributes to be computed. |
| ellipsoid      | Cesium.Ellipsoid | | `optional` The ellipsoid on which the rectangle lies. |
| granularity | number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| height | number | `0` | `optional` The distance in meters between the rectangle and the ellipsoid surface. |
| rotation | number | `0.0` | `optional` The rotation of the rectangle, in radians. A positive rotation is counter-clockwise. |
| stRotation | number | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |
| extrudedHeight | number | | `optional` The distance in meters between the rectangle's extruded face and the ellipsoid surface. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryRectangleOutline

Loading a rectangle geometry outline. It is equivalent to initializing a `Cesium.CircleOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryRectangleOutline Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| rectangle | VcRectangle\|Array | | `required` A cartographic rectangle with north, south, east and west properties. |
| ellipsoid      | Cesium.Ellipsoid | | `optional` The ellipsoid on which the rectangle lies. |
| granularity | number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| height | number | `0` | `optional` The distance in meters between the rectangle and the ellipsoid surface. |
| rotation | number | `0.0` | `optional` The rotation of the rectangle, in radians. A positive rotation is counter-clockwise. |
| stRotation | number | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |
| extrudedHeight | number | | `optional` The distance in meters between the rectangle's extruded face and the ellipsoid surface. |

### VcGeometryRectangleOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[RectangleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGeometry.html)、[RectangleOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleOutlineGeometry.html)**
