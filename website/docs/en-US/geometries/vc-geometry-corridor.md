## VcGeometryCorridor

Loading a corridor geometry is equivalent to initializing a `Cesium.CorridorGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryCorridor component.

:::demo Use the `vc-geometry-corridor` and `vc-geometry-corridor-outline` tags to add a corridor on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-corridor ref="geometryRef" :positions="positions" :width="250000"></vc-geometry-corridor>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-corridor-outline ref="geometryOutlineRef" :positions="positions" :width="250000"></vc-geometry-corridor-outline>
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
      const positions = [
        { lng: 100.0, lat: 40.0 },
        { lng: 105.0, lat: 40.0 },
        { lng: 105.0, lat: 35.0 }
      ]
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
        positions
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| positions | Array | | `required` An array of positions that define the center of the corridor. |
| width | number | | `required` The distance between the edges of the corridor in meters. |
| ellipsoid      | Cesium.Ellipsoid | | `optional` The ellipsoid to be used as a reference. |
| granularity | number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| height | number | `0` | `optional` The distance in meters between the ellipsoid surface and the positions. |
| extrudedHeight | number | | `optional` The distance in meters between the ellipsoid surface and the extruded face. |
| vertexFormat | Cesium.VertexFormat | | `optional` The vertex attributes to be computed.|
| cornerType | number | `0` | `optional` Determines the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |0/1/2|

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryCorridorOutline

Loading a corridor geometry outline. It is equivalent to initializing a `Cesium.CorridorOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryCorridorOutline Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| positions | Array | | `required` An array of positions that define the center of the corridor outline. |
| width | number | | `required` The distance between the edges of the corridor outline. |
| ellipsoid      | Cesium.Ellipsoid | | `optional` The ellipsoid to be used as a reference. |
| granularity | number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| height | number | `0` | `optional` The distance in meters between the ellipsoid surface and the positions. |
| extrudedHeight | number | | `optional` The distance in meters between the ellipsoid surface and the extruded face. |
| cornerType | number | `0` | `optional` Determines the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |0/1/2|

### VcGeometryPolygonCoplanarOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[CorridorGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGeometry.html)、[CorridorOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorOutlineGeometry.html)**
