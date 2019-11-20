# PolylineGeometry

The `vc-geometry-polyline` component is used to load a polyline modeled as a line strip; the first two positions define a line segment, and each additional position defines a line segment from the previous position. The polyline is capable of displaying with a material. Need to be used as a subcomponent of `vc-instance-geometry`. Can be mounted to `vc-primitive` or `vc-primitive-ground`.

## Example

### Load PolylineGeometry with `vc-geometry-polyline`

#### preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
          <vc-instance-geometry>
            <vc-geometry-polyline :positions="positions" :width="4"></vc-geometry-polyline>
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
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
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
      <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
        <vc-instance-geometry>
          <vc-geometry-polyline :positions="positions" :width="4"></vc-geometry-polyline>
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
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.appearance = new Cesium.PolylineMaterialAppearance()
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| -------------- | ------ | ------- | --------------------------------------------------------------------------------------------------- |
| positions | Array | | `required` An array of Cartesian3 defining the positions in the polyline as a line strip. **Structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | `1.0` | `optional` The width in pixels. |
| colors | Array |  | `optional` An Array of Color defining the per vertex or per segment colors. |
| colorsPerVertex | Boolean | `false` | `optional` A boolean that determines whether the colors will be flat across each segment of the line or interpolated across the vertices. |
| arcType | Number | `1` | `optional` The type of line the polyline segments must follow. **NONE: 0, GEODESIC: 1, RHUMB: 2** |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude if options.arcType is not ArcType.NONE. Determines the number of positions in the buffer. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |

---

Refer to the official document: **[PolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGeometry.html)**

## Events

| name  | parameter                      | description                                                                                                       |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
