# RectangleGeometry

The `vc-geometry-rectangle` component is used to load a rectangle geometry that describes a cartographic rectangle on an ellipsoid centered at the origin. Need to be used as a subcomponent of `vc-instance-geometry`. Can be mounted to `vc-primitive` or `vc-primitive-ground`.

## Example

### Load RectangleGeometry with `vc-geometry-rectangle`

#### preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
          <vc-instance-geometry>
            <vc-geometry-rectangle :rectangle="rectangle"></vc-geometry-rectangle>
          </vc-instance-geometry>
          <vc-instance-geometry :geometry.sync="geometry">
            <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :height="height"></vc-geometry-polygon>
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
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 200,
          rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          this.appearance = new Cesium.MaterialAppearance({
            material: Cesium.Material.fromType('Checkerboard', {
              repeat: new Cesium.Cartesian2(20.0, 6.0)
            }),
            materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
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
      <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
        <vc-instance-geometry>
          <vc-geometry-rectangle :rectangle="rectangle"></vc-geometry-rectangle>
        </vc-instance-geometry>
        <vc-instance-geometry :geometry.sync="geometry">
          <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :height="height"></vc-geometry-polygon>
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
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        height: 200,
        rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.appearance = new Cesium.MaterialAppearance({
          material: Cesium.Material.fromType('Checkerboard', {
            repeat: new Cesium.Cartesian2(20.0, 6.0)
          }),
          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
        })
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| rectangle | Object | | `required` A cartographic rectangle with north, south, east and west properties in radians. **structure: { west: number, south: number, east: number, north: number }** |
| vertexFormat | Number | | `optional` The vertex attributes to be computed. |
| ellipsoid | Object | | `optional` The ellipsoid on which the rectangle lies. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| height | Number | `0` | `optional` The distance in meters between the rectangle and the ellipsoid surface. |
| rotation | Number | `0.0` | `optional` The rotation of the rectangle, in radians. A positive rotation is counter-clockwise. |
| stRotation | Number | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |
| extrudedHeight | Number | | `optional` The distance in meters between the rectangle's extruded face and the ellipsoid surface. |

---

Refer to the official document: **[RectangleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
