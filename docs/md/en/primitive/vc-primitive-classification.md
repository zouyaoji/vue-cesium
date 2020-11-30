# ClassificationPrimitive

The `vc-primitive-classification` component is used to load a classification primitive represents a volume enclosing geometry in the Scene to be highlighted. Valid geometries are BoxGeometry, CylinderGeometry, EllipsoidGeometry, PolylineVolumeGeometry, and SphereGeometry. Geometries that follow the surface of the ellipsoid, such as CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry, are also valid if they are extruded volumes; otherwise, they will not be rendered.

## Example

### Load ClassificationPrimitive with `vc-primitive-classification`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-primitive-classification :asynchronous="false">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></vc-geometry-polygon>
          </vc-instance-geometry>
        </vc-primitive-classification>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          geometry: {},
          image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
          rectangle: { west: 102.4, south: 29.5, east: 106.5, north: 33.5 },
          vertexFormat: null,
          attributes: null,
          extrudedHeight: 3000,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 102.1, lat: 33.5 }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
          this.attributes = {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
          }
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      <vc-primitive-classification :asynchronous="false">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></vc-geometry-polygon>
        </vc-instance-geometry>
      </vc-primitive-classification>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometry: {},
        image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
        rectangle: { west: 102.4, south: 29.5, east: 106.5, north: 33.5 },
        vertexFormat: null,
        attributes: null,
        extrudedHeight: 3000,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 102.1, lat: 33.5 }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
        }
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------- | ------------- | ------- | ------------------------------------------------------------------------------------ |
| geometryInstances | Object\|Array | | `optional` The geometry instances to render. |
| appearance | Object | | `optional` The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute. |
| show | Boolean | `true` | `optional` Determines if this primitive will be shown. |
| vertexCacheOptimize | Boolean | `false` | `optional` When true, geometry vertices are optimized for the pre and post-vertex-shader caches. |
| interleave | Boolean | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time. |
| compressVertices | Boolean | `true` | `optional` When true, the geometry vertices are compressed, which will save memory. |
| releaseGeometryInstances | Boolean | `true` | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory. |
| allowPicking | Boolean | `true` | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved. |
| asynchronous | Boolean | `true` | `optional` Determines if the primitive will be created asynchronously or block until ready.|
| classificationType | Number | `2` | `optional`Determines whether terrain, 3D Tiles or both will be classified. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| debugShowShadowVolume | Boolean | `false` | `optional` For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false. |

---

Refer to the official document: **[ClassificationPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| mousedown | {button,surfacePosition,target,type,windowPosition} | Triggered when the mouse is pressed on this primitive. |
| mouseup | {button,surfacePosition,target,type,windowPosition} | Triggered when the mouse bounces on the primitive. |
| click | {button,surfacePosition,target,type,windowPosition} | Triggered when the mouse clicks on the primitive. |
| dblclick | {button,surfacePosition,target,type,windowPosition} | Triggered when the left mouse button double-clicks the primitive. |
| mousemove | {button,surfacePosition,target,type,windowPosition} | Triggered when the mouse moves to this primitive. |
---
