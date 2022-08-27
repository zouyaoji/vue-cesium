## VcGeometryGroundPolyline

Loading a polyline geometry on terrain or 3D Tiles. It is equivalent to initializing a `Cesium.GroundPolylineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance`, and put `vc-geometry-instance` in `vc-primitive-ground-polyline` to load normally.

### Basic usage

The basic usage of the VcGeometryGroundPolyline component.

:::demo Use the `vc-geometry-ground-polyline` tag to add a ground polyline to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive-ground-polyline :appearance="appearance" :geometryInstances="geometryInstances" @click="onClicked">
      <vc-geometry-instance>
        <vc-geometry-ground-polyline
          ref="geometryRef"
          :positions="[
            { lng: 100.1340164450331, lat: 31.05494287836128 },
            { lng: 108.08821010582645, lat: 31.05494287836128 }
          ]"
          :width="2"
        ></vc-geometry-ground-polyline>
      </vc-geometry-instance>
    </vc-primitive-ground-polyline>
    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
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
      const geometryInstances = ref(null)
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
        appearance.value = new Cesium.PolylineMaterialAppearance()
        geometryInstances.value = new Cesium.GeometryInstance({
          geometry: new Cesium.GroundPolylineGeometry({
            positions: Cesium.Cartesian3.fromDegreesArray([100.1340164450331, 32.05494287836128, 108.08821010582645, 32.097804071380715]),
            width: 4.0
          }),
          id: 'object returned when this instance is picked and to get/set per-instance attributes'
        })
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
        geometryInstances
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
| positions | Array | | `required` An array of Cartesian3 defining the polyline's points. Heights above the ellipsoid will be ignored. |
| width | number | `1.0` | `optional` The screen space width in pixels. |
| granularity | number | | `optional` The distance interval in meters used for interpolating options.points. Defaults to 9999.0 meters. Zero indicates no interpolation. |
| loop | boolean | false | `optional` Whether during geometry creation a line segment will be added between the last and first line positions to make this Polyline a loop. |
| arcType | number | `1` | `optional` The type of line the polyline segments must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. **NONE: 0, GEODESIC: 1, RHUMB: 2** |0/1/2/|

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[GroundPolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylineGeometry.html)**
