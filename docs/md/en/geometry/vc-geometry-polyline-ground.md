# GroundPolylineGeometry

The `vc-geometry-polyline-ground` component is used to load a polyline on terrain or 3D Tiles. Only to be used with GroundPolylinePrimitive. Need to be used as a subcomponent of `vc-instance-geometry`. Only can be mounted to `vc-primitive-polyline-ground`.

## Example

### Load GroundPolylineGeometry with `vc-geometry-polyline-ground`

#### preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-polyline-ground :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-polyline-ground ref="polylineGround" :positions="positions" :width="2"></vc-geometry-polyline-ground>
          </vc-instance-geometry>
        </vc-primitive-polyline-ground>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-arcgis-mapserver url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"></vc-provider-imagery-arcgis-mapserver>
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
      mounted() {
        this.$refs.polylineGround.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
          viewer.scene.camera.flyToBoundingSphere(boundingSphere)
        })
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.appearance = new Cesium.PolylineMaterialAppearance()
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
      <vc-primitive-polyline-ground :appearance="appearance">
        <vc-instance-geometry>
          <vc-geometry-polyline-ground ref="polylineGround" :positions="positions" :width="2"></vc-geometry-polyline-ground>
        </vc-instance-geometry>
      </vc-primitive-polyline-ground>
      <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      <vc-layer-imagery>
        <vc-provider-imagery-arcgis-mapserver url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"></vc-provider-imagery-arcgis-mapserver>
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
    mounted() {
      this.$refs.polylineGround.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
        viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.appearance = new Cesium.PolylineMaterialAppearance()
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| positions | Array | | `required` An array of Cartesian3 defining the polyline's points. Heights above the ellipsoid will be ignored. **Structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | `1.0` | `optional` The screen space width in pixels. |
| granularity | Number | | `optional` The distance interval in meters used for interpolating options.points. Defaults to 9999.0 meters. Zero indicates no interpolation. |
| loop | Boolean | false | `optional` Whether during geometry creation a line segment will be added between the last and first line positions to make this Polyline a loop. |
| arcType | Number | `1` | `optional` The type of line the polyline segments must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. **NONE: 0, GEODESIC: 1, RHUMB: 2** |

Refer to the official document: **[GroundPolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
