# SimplePolylineGeometry

The `vc-geometry-polyline-simple` component is used to a polyline modeled as a line strip; the first two positions define a line segment, and each additional position defines a line segment from the previous position. Need to be used as a subcomponent of `vc-instance-geometry`. Can be mounted to `vc-primitive`.

## Example

### Load SimplePolylineGeometry with `vc-geometry-polyline-simple`

#### preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-polyline-simple ref="polyline" :positions="positions"></vc-geometry-polyline-simple>
          </vc-instance-geometry>
        </vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          geometry: null,
          geometryInstances: null,
          positions: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          attributes: null
        }
      },
      mounted() {
        this.$refs.polyline.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
          viewer.scene.camera.flyToBoundingSphere(boundingSphere)
        })
      },
      methods: {
        ready({ Cesium, viewer }) {
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
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
      <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-polyline-simple ref="polyline" :positions="positions"></vc-geometry-polyline-simple>
        </vc-instance-geometry>
      </vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometry: null,
        geometryInstances: null,
        positions: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        attributes: null
      }
    },
    mounted() {
      this.$refs.polyline.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
        viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| positions | Array | | `required` 	An array of Cartesian3 defining the positions in the polyline as a line strip. **Structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| colors | Array |  | `optional` An Array of Color defining the per vertex or per segment colors. |
| colorsPerVertex | Boolean | `false` | `optional` A boolean that determines whether the colors will be flat across each segment of the line or interpolated across the vertices. |
| arcType | Number | `1` | `optional` The type of line the polyline segments must follow. **NONE: 0, GEODESIC: 1, RHUMB: 2** |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude if options.arcType is not ArcType.NONE. Determines the number of positions in the buffer. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |

---

Refer to the official document: **[SimplePolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SimplePolylineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
