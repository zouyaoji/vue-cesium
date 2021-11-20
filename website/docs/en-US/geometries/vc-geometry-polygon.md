## VcGeometryPolygon

Loading a polygon geometry. It is equivalent to initializing a `Cesium.PolygonGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-instance-geometry` to load normally. When loading massive polygon primitives, consider using the `vc-collection-primitive` component and its `polygons` property for rendering.

### Basic usage

Basic usage of VcGeometryPolygon component.

:::demo Use the `vc-geometry-polygon` and `vc-geometry-polygon-outline` tags to add polygons on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-instance-geometry>
        <vc-geometry-polygon
          ref="geometryRef"
          :polygonHierarchy="polygonHierarchy"
          :vertexFormat="vertexFormat"
          :height="100000"
          :extrudedHeight="30"
        ></vc-geometry-polygon>
      </vc-instance-geometry>
    </vc-primitive>
    <vc-primitive :appearance="appearanceOutline" @click="onClicked" v-if="outline">
      <vc-instance-geometry :attributes="attributesOutline">
        <vc-geometry-polygon-outline
          ref="geometryOutlineRef"
          :polygonHierarchy="polygonHierarchy"
          :height="100000"
          :extrudedHeight="30"
        ></vc-geometry-polygon-outline>
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
      const appearanceOutline = ref(null)
      const vertexFormat = ref(null)
      const attributesOutline = ref(null)
      const outline = ref(true)
      const polygonHierarchy = [
        { lng: 102.1, lat: 29.5 },
        { lng: 106.2, lat: 29.5 },
        { lng: 106.2, lat: 33.5 },
        { lng: 108.2, lat: 35.5 },
        { lng: 102.1, lat: 33.5 }
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
        const { PerInstanceColorAppearance, EllipsoidSurfaceAppearance, Material, ColorGeometryInstanceAttribute } = Cesium
        appearanceOutline.value = new PerInstanceColorAppearance({
          flat: true
        })
        vertexFormat.value = EllipsoidSurfaceAppearance.VERTEX_FORMAT

        appearance.value = new EllipsoidSurfaceAppearance({
          material: new Material({
            fabric: {
              type: 'Water',
              uniforms: {
                normalMap: Cesium.buildModuleUrl('Assets/Textures/waterNormals.jpg'),
                frequency: 1000.0,
                animationSpeed: 0.05,
                amplitude: 10.0
              }
            }
          })
        })

        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
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
        appearanceOutline,
        attributesOutline,
        outline,
        polygonHierarchy,
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
| ----------------- | ------------- | ------- | -------------------------------------------------------------------- | --------------- |
| polygonHierarchy | Object\|Array | | `required` A polygon hierarchy that can include holes. |
| height | Number | `0` | `optional` The distance in meters between the polygon and the ellipsoid surface. |
| extrudedHeight | Number | | `optional` The distance in meters between the polygon's extruded face and the ellipsoid surface. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| stRotation | Number\|Object | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| perPositionHeight | Boolean | `false` | `optional` Use the height of options.positions for each position instead of using options.height to determine the height. |
| closeTop | Boolean | `true` | `optional` When false, leaves off the top of an extruded polygon open. |
| closeBottom | Boolean | `true` | `optional` When false, leaves off the bottom of an extruded polygon open. |
| arcType | Number | `1` | `optional` The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. **NONE: 0, GEODESIC: 1, RHUMB: 2** |0/1/2|

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### VcGeometryPolygonOutline

Loading a polygon geometry outline. It is equivalent to initializing a `Cesium.PolygonOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-instance-geometry` to load normally.

### VcGeometryPolygonOutline Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| polygonHierarchy | Object\|Array | | `required` A polygon hierarchy that can include holes. |
| height | Number | `0` | `optional` The distance in meters between the polygon and the ellipsoid surface. |
| extrudedHeight | Number | | `optional` The distance in meters between the polygon's extruded face and the ellipsoid surface. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| perPositionHeight | Boolean | `false` | `optional` Use the height of options.positions for each position instead of using options.height to determine the height. |
| arcType | Number | `1` | `optional` The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. **NONE: 0, GEODESIC: 1, RHUMB: 2** | 0/1/2|

### VcGeometryPolygonOutline Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[PolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html)、[PolygonOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html)**
