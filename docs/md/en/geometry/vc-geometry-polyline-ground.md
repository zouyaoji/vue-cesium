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
| -------------- | ------ | ------- | --------------------------------------------------------------------------------------------------- |
| positions | Array | | `required` An array of Cartesian3 defining the polyline's points. Heights above the ellipsoid will be ignored. **Structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | `1.0` | `optional` The screen space width in pixels. |
| granularity | Number | | `optional` The distance interval in meters used for interpolating options.points. Defaults to 9999.0 meters. Zero indicates no interpolation. |
| loop | Boolean | false | `optional` Whether during geometry creation a line segment will be added between the last and first line positions to make this Polyline a loop. |
| arcType | Number | `1` | `optional` The type of line the polyline segments must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. **NONE: 0, GEODESIC: 1, RHUMB: 2** |

Refer to the official document: **[GroundPolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylineGeometry.html)**

## Events

| name  | parameter                      | description                                                                                                       |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
