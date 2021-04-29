## VcPrimitiveClassification

Loading a volume enclosing geometry in the Scene to be highlighted. It is equivalent to initializing a `Cesium.ClassificationPrimitive` instance.

A primitive combines geometry instances with an Appearance that describes the full shading, including Material and RenderState. Roughly, the geometry instance defines the structure and placement, and the appearance defines the visual characteristics. Decoupling geometry and appearance allows us to mix and match most of them and add a new geometry or appearance independently of each other. Only PerInstanceColorAppearance with the same color across all instances is supported at this time when using ClassificationPrimitive directly. For full Appearance support when classifying terrain or 3D Tiles use GroundPrimitive instead.

For correct rendering, this feature requires the EXT_frag_depth WebGL extension. For hardware that do not support this extension, there will be rendering artifacts for some viewing angles.

Valid geometries are BoxGeometry, CylinderGeometry, EllipsoidGeometry, PolylineVolumeGeometry, and SphereGeometry.

Geometries that follow the surface of the ellipsoid, such as CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry, are also valid if they are extruded volumes; otherwise, they will not be rendered.

### Basic usage

Basic usage of VcPrimitiveClassification component.

:::demo Use the `vc-primitive-classification`, `vc-instance-geometry` and `vc-geometry-polygon` tag to add a highlighted closed and extruded polygon to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady" v-model:camera="camera">
    <vc-primitive-classification ref="primitive" @click="onClicked" :asynchronous="false">
      <vc-instance-geometry :attributes="attributes">
        <vc-geometry-polygon
          :polygonHierarchy="[
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 102.1, lat: 33.5 }
          ]"
          :extrudedHeight="6000"
        ></vc-geometry-polygon>
      </vc-instance-geometry>
    </vc-primitive-classification>
    <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
    <vc-layer-imagery>
      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        attributes: null,
        camera: {
          position: {
            x: -1432246.8223880068,
            y: 5761224.588247942,
            z: 3297281.1889481535
          },
          heading: 6.20312220367255,
          pitch: -0.9937536846355606,
          roll: 0.002443376981836387
        }
      }
    },
    methods: {
      onViewerReady({ Cesium, viewer }) {
        viewer.scene.globe.depthTestAgainstTerrain = true
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
        }
      },
      onClicked(e) {
        console.log(e)
      },
      unload() {
        this.$refs.primitive.unload()
      },
      load() {
        this.$refs.primitive.load()
      },
      reload() {
        this.$refs.primitive.reload()
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
| geometryInstances | Object\|Array | | `optional` The geometry instances to render. This can either be a single instance or an array of length one.|
| appearance | Object | | `optional` The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute. |
| show | Boolean | `true` | `optional` Determines if this primitive will be shown. |
| vertexCacheOptimize | Boolean | `false` | `optional` When true, geometry vertices are optimized for the pre and post-vertex-shader caches. |
| interleave | Boolean | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time. |
| compressVertices | Boolean | `true` | `optional` When true, the geometry vertices are compressed, which will save memory. |
| releaseGeometryInstances | Boolean | `true` | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory. |
| allowPicking | Boolean | `true` | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved. |
| asynchronous | Boolean | `true` | `optional` Determines if the primitive will be created asynchronously or block until ready.|
| classificationType | Number | `2` | `optional`Determines whether terrain, 3D Tiles or both will be classified. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| debugShowShadowVolume | Boolean | `false` | `optional` For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false. |
| enableMouseEvent | Boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### Events

| Name       | Parameters                                                 | Description                                                      |
| ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | Vue Instance                                               | Triggers before the cesiumObject is loaded.                      |
| ready      | {Cesium, viewer, cesiumObject, vm}                         | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | Vue Instance                                               | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse bounces up on this primitive.            |
| click      | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks on the primitive.                 |
| clickout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves on this primitive.                 |
| mouseover  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves to this primitive.                 |
| mouseout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves out of this primitive.             |

### Reference

- Refer to the official documentation: **[ClassificationPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html)**
