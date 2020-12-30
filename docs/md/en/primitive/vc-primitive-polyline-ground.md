# GroundPolylinePrimitive

The `vc-primitive-polyline-ground` component is used to load a a GroundPolylinePrimitive represents a polyline draped over the terrain or 3D Tiles in the Scene. Only to be used with GeometryInstances containing GroundPolylineGeometry.

## Example

### Load GroundPolylinePrimitive with `vc-primitive-polyline-ground`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-polyline-ground
          :appearance="appearance"
          :geometryInstances="geometryInstances"
        ></vc-primitive-polyline-ground>
        <vc-primitive-polyline-ground :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-polyline-ground :positions="positions" :width="2"></vc-geometry-polyline-ground>
          </vc-instance-geometry>
        </vc-primitive-polyline-ground>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-mapbox mapId="mapbox.streets"></vc-provider-imagery-mapbox>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          appearance: {},
          geometryInstances: {},
          positions: [
            { lng: 100.1340164450331, lat: 31.05494287836128 },
            { lng: 108.08821010582645, lat: 31.05494287836128 }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.geometryInstances = new Cesium.GeometryInstance({
            geometry: new Cesium.GroundPolylineGeometry({
              positions: Cesium.Cartesian3.fromDegreesArray([
                100.1340164450331,
                32.05494287836128,
                108.08821010582645,
                32.097804071380715
              ]),
              width: 4.0
            }),
            id: 'object returned when this instance is picked and to get/set per-instance attributes'
          })
          this.appearance = new Cesium.PolylineMaterialAppearance()
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
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
      <vc-primitive-polyline-ground
        :appearance="appearance"
        :geometryInstances="geometryInstances"
      ></vc-primitive-polyline-ground>
      <vc-primitive-polyline-ground :appearance="appearance">
        <vc-instance-geometry>
          <vc-geometry-polyline-ground :positions="positions" :width="2"></vc-geometry-polyline-ground>
        </vc-instance-geometry>
      </vc-primitive-polyline-ground>
      <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      <vc-layer-imagery>
        <vc-provider-imagery-mapbox mapId="mapbox.streets"></vc-provider-imagery-mapbox>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        appearance: {},
        geometryInstances: {},
        positions: [
          { lng: 100.1340164450331, lat: 31.05494287836128 },
          { lng: 108.08821010582645, lat: 31.05494287836128 }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.geometryInstances = new Cesium.GeometryInstance({
          geometry: new Cesium.GroundPolylineGeometry({
            positions: Cesium.Cartesian3.fromDegreesArray([
              100.1340164450331,
              32.05494287836128,
              108.08821010582645,
              32.097804071380715
            ]),
            width: 4.0
          }),
          id: 'object returned when this instance is picked and to get/set per-instance attributes'
        })
        this.appearance = new Cesium.PolylineMaterialAppearance()
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
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
| interleave | Boolean | `false` | `optional` When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time. |
| releaseGeometryInstances | Boolean | `true` | `optional` When true, the primitive does not keep a reference to the input geometryInstances to save memory. |
| allowPicking | Boolean | `true` | `optional` When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved. |
| asynchronous | Boolean | `true` | `optional` Determines if the primitive will be created asynchronously or block until ready.|
| classificationType | Number | `2` | `optional`Determines whether terrain, 3D Tiles or both will be classified. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| debugShowShadowVolume | Boolean | `false` | `optional` For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false. |

---

- Refer to the official document: **[GroundPolylinePrimitive](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse is pressed on this primitive. |
| mouseup | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse bounces on the primitive. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the primitive. |
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the primitive. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to this primitive. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the primitive. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the primitive.|
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the primitive. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on this primitive. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to this primitive. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the primitive. |
---
