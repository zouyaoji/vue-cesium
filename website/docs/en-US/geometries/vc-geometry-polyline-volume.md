## VcGeometryPolylineVolume

Loading a polyline with a volume(a 2D shape extruded along a polyline). It is equivalent to initializing a `Cesium.PolylineVolumeGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-instance-geometry` to load normally.

### Basic usage

The basic usage of the VcGeometryPolylineVolume component.

:::demo Use the `vc-geometry-polyline-volume` and `vc-geometry-polyline-volume-outline` tags to add a polyline with a volume on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-instance-geometry :attributes="attributes">
        <vc-geometry-polyline-volume
          ref="geometryRef"
          :polylinePositions="polylinePositions"
          :shapePositions="shape"
          :vertexFormat="vertexFormat"
        ></vc-geometry-polyline-volume>
      </vc-instance-geometry>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-instance-geometry :attributes="attributesOutline">
        <vc-geometry-polyline-volume-outline
          ref="geometryOutlineRef"
          :polylinePositions="polylinePositions"
          :shapePositions="shape"
        ></vc-geometry-polyline-volume-outline>
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
      const outline = ref(true)
      const vertexFormat = ref(null)
      const shape = ref([])
      const polylinePositions = [
        { lng: 105.0, lat: 32.0 },
        { lng: 105.0, lat: 36.0 },
        { lng: 108.0, lat: 36.0 }
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
        vertexFormat.value = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
        shape.value = computeCircle(60000.0)
      }
      const computeCircle = radius => {
        let positions = []
        for (let i = 0; i < 360; i++) {
          let radians = Cesium.Math.toRadians(i)
          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
        }
        return positions
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
        vertexFormat,
        shape,
        polylinePositions
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
| polylinePositions | Array | | `required` An array of Cartesain3 positions that define the center of the polyline volume. |
| shapePositions | Array | | `required` An array of Cartesian2 positions that define the shape to be extruded along the polyline.|
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| cornerType | Number | | `optional` Determines the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |0/1/2|

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### VcGeometryPolylineVolumeOutline

Loading a polyline with a volume outline. It is equivalent to initializing a `Cesium.PolylineVolumeOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-instance-geometry` to load normally.

### VcGeometryPolylineVolumeOutline Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| polylinePositions | Array | | `required` An array of Cartesain3 positions that define the center of the polyline volume. |
| shapePositions | Array | | `required` An array of Cartesian2 positions that define the shape to be extruded along the polyline. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| cornerType | Number | | `optional` Determines the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |0/1/2|

### VcGeometryPolylineVolumeOutline Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[PolylineVolumeGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGeometry.html)、[PolylineVolumeOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeOutlineGeometry.html)**
