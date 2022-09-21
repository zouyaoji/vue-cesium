## VcGeometryPolygonCoplanar

Loading a coplanar polygon geometry. It is equivalent to initializing a `Cesium.CoplanarPolygonGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### Basic usage

Basic usage of VcGeometryPolygonCoplanar component.

:::demo Use the `vc-geometry-polygon-coplanar` and `vc-geometry-polygon-coplanar-outline` tags to add coplanar polygons on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-primitive :appearance="appearance" @click="onClicked">
      <vc-geometry-instance :attributes="attributes">
        <vc-geometry-polygon-coplanar ref="geometryRef" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon-coplanar>
      </vc-geometry-instance>
    </vc-primitive>
    <vc-primitive :appearance="appearance" @click="onClicked" v-if="outline">
      <vc-geometry-instance :attributes="attributesOutline">
        <vc-geometry-polygon-coplanar-outline ref="geometryOutlineRef" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon-coplanar-outline>
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
      const polygonHierarchy = [
        { lng: 110, lat: 33.5, height: 0 },
        { lng: 110, lat: 33.5, height: 200000 },
        { lng: 105, lat: 33.5, height: 200000 },
        { lng: 105, lat: 33.5, height: 0 }
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
        polygonHierarchy
      }
    }
  }
</script>
```

:::

### Props

| Name             | Type           | Default | Description                                                                                               |
| ---------------- | -------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| polygonHierarchy | Object\|Array  |         | `required` A polygon hierarchy that can include holes.                                                    |
| vertexFormat | Cesium.VertexFormat         |         | `optional` The vertex attributes to be computed.                                                          |
| stRotation       | number\|Object | `0.0`   | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |
| ellipsoid      | Cesium.Ellipsoid         |         | `optional` The ellipsoid to be used as a reference.                                                       |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### VcGeometryPolygonCoplanarOutline

Loading a coplanar polygon geometry outline. It is equivalent to initializing a `Cesium.CircleOutlineGeometry` instance.

**Note**: It needs to be a subcomponent of `vc-geometry-instance` to load normally.

### VcGeometryPolygonCoplanarOutline Props

| Name             | Type          | Default | Description                                            |
| ---------------- | ------------- | ------- | ------------------------------------------------------ |
| polygonHierarchy | Object\|Array |         | `optional` A polygon hierarchy that can include holes. |

### VcGeometryPolygonCoplanarOutline Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: **[CoplanarPolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CoplanarPolygonGeometry.html)、[CoplanarPolygonOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CoplanarPolygonOutlineGeometry.html)**
