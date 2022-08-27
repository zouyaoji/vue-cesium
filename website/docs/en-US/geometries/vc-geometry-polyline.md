## VcGeometryPolyline

Loading a polyline geometry modeled as a line strip. It is equivalent to initializing a `Cesium.PolylineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryPolyline component.

:::demo Use the `vc-geometry-polyline` tag to add a polyline on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance>
        <vc-geometry-polyline
          ref="geometryRef"
          :positions="positions1"
          :colors="colors1"
          :width="4"
          :vertexFormat="vertexFormat"
        ></vc-geometry-polyline>
      </vc-geometry-instance>
      <vc-geometry-instance>
        <vc-geometry-polyline
          ref="geometryRef"
          :positions="positions2"
          :colors="colors2"
          :width="4"
          :vertexFormat="vertexFormat"
          colorsPerVertex
        ></vc-geometry-polyline>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const geometryRef = ref(null)
      const appearance = ref(null)
      const positions1 = ref([])
      const colors1 = ref([])
      const positions2 = ref([])
      const colors2 = ref([])
      const vertexFormat = ref(null)
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        geometryRef.value.unload()
      }
      const reload = () => {
        geometryRef.value.reload()
      }
      const load = () => {
        geometryRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        console.log('onViewerReady')
        for (let i = 0; i < 12; ++i) {
          positions1.value.push(Cesium.Cartesian3.fromDegrees(105.0 + 5 * i, 35.0))
          colors1.value.push(Cesium.Color.fromRandom({ alpha: 1.0 }))

          positions2.value.push(Cesium.Cartesian3.fromDegrees(105.0 + 5 * i, 30.0))
          colors2.value.push(Cesium.Color.fromRandom({ alpha: 1.0 }))
        }
        appearance.value = new Cesium.PolylineColorAppearance()
        vertexFormat.value = Cesium.PolylineColorAppearance.VERTEX_FORMAT
      }
      // lifecycle
      onMounted(() => {
        geometryRef.value.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {
          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
          viewer.scene.camera.flyToBoundingSphere(boundingSphere)
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
        appearance,
        positions1,
        colors1,
        positions2,
        colors2,
        vertexFormat
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
| positions | Array | | `required` An array of Cartesian3 defining the positions in the polyline as a line strip.|
| width | number | `1.0` | `optional` The width in pixels. |
| colors | Array | | `optional` An Array of Color defining the per vertex or per segment colors. |
| colorsPerVertex | boolean | `false` | `optional` A boolean that determines whether the colors will be flat across each segment of the line or interpolated across the vertices. |
| arcType | number | `1` | `optional` The type of line the polyline segments must follow. **NONE: 0, GEODESIC: 1, RHUMB: 2** |0/1/2|
| granularity | number | | `optional` The distance, in radians, between each latitude and longitude if options.arcType is not ArcType.NONE. Determines the number of positions in the buffer. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[PolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGeometry.html)**
