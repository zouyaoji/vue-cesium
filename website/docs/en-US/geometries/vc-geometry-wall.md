## VcGeometryWall

Loading a wall geometry. It is equivalent to initializing a `Cesium.WallGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryWall component.

:::demo Use the `vc-geometry-wall` and `vc-geometry-wal-outline` tags to add a wall to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive
      :appearance="{ type: 'MaterialAppearance',
      options: {
        material: {
          fabric: {
            type: 'VcLineFlow',
            uniforms: { image: '/images/textures/fence.png', axisY: true, color: '#bdf700', repeat: { x: 5, y: 1 }, speed: 5 }
          }
        }
      }}"
      @click="onClicked"
    >
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-wall ref="geometryRef" :positions="positions"></vc-geometry-wall>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-wall-outline ref="geometryOutlineRef" :positions="positions"></vc-geometry-wall-outline>
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
      const attributesOutline = ref(null)
      const outline = ref(true)
      const vertexFormat = ref(null)
      const positions = [
        { lng: 107.0, lat: 40.0, height: 100000.0 },
        { lng: 97.0, lat: 40.0, height: 100000.0 },
        { lng: 97.0, lat: 37.0, height: 100000.0 },
        { lng: 107.0, lat: 37.0, height: 100000.0 },
        { lng: 107.0, lat: 40.0, height: 100000.0 }
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
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Cartesian3, MaterialAppearance } = Cesium
        appearance.value = new PerInstanceColorAppearance({
          flat: true
        })
        attributes.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        attributesOutline.value = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        vertexFormat.value = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
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
        attributes,
        attributesOutline,
        outline,
        positions,
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
| positions | Array | | `required` An array of Cartesian objects, which are the points of the wall. |
| granularity | number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| maximumHeights | Array | | `optional` An array parallel to positions that give the maximum height of the wall at positions. If undefined, the height of each position in used.|
| minimumHeights | Array | | `optional`An array parallel to positions that give the minimum height of the wall at positions. If undefined, the height at each position is 0.0.|
| ellipsoid      | Cesium.Ellipsoid | | `optional` The ellipsoid for coordinate manipulation. |
| vertexFormat | Cesium.VertexFormat | | `optional` The vertex attributes to be computed.|

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryWallOutline

Loading a wall geometry outline. It is equivalent to initializing a `Cesium.WallOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryWallOutline Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| positions | Array | | `required` An array of Cartesian objects, which are the points of the wall. |
| granularity | number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| maximumHeights | Array | | `optional` An array parallel to positions that give the maximum height of the wall at positions. If undefined, the height of each position in used.|
| minimumHeights | Array | | `optional` An array parallel to positions that give the minimum height of the wall at positions. If undefined, the height at each position is 0.0.|
| ellipsoid      | Cesium.Ellipsoid | | `optional` The ellipsoid for coordinate manipulation. |
| vertexFormat | Cesium.VertexFormat | | `optional` The vertex attributes to be computed.|

### VcGeometryWallOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[WallGeometry](https://cesium.com/docs/cesiumjs-ref-doc/WallGeometry.html)、[WallOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/WallOutlineGeometry.html)**
