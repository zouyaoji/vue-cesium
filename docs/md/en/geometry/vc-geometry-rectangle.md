# RectangleGeometry, RectangleOutlineGeometry

- The `vc-geometry-rectangle` component is used to load a geometry that describes a cartographic rectangle on an ellipsoid centered at the origin.
- The `vc-geometry-outline-rectangle` component is used to load a geometry that describes the outline of a a cartographic rectangle on an ellipsoid centered at the origin.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive` or `vc-primitive-ground`.

## Example

### Load RectangleGeometry

#### preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-rectangle ref="rectangle" :rectangle="rectangle" :vertexFormat="vertexFormat"></vc-geometry-rectangle>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearanceOutline">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-rectangle ref="rectangleOutline" :rectangle="rectangleOutline"></vc-geometry-outline-rectangle>
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
          appearanceOutline: null,
          vertexFormat: null,
          rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 },
          rectangleOutline: { west: 100.5, south: 29.5, east: 105.5, north: 34.5 },
          attributes: null
        }
      },
      mounted() {
        Promise.all([this.$refs.rectangle.createPromise, this.$refs.rectangleOutline.createPromise]).then((instances) => {
          console.log('All geometries are loaded.')
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.$parent.modelMatrix
              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
              : geometry.boundingSphere
            return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
        })
      },
      methods: {
        ready({ Cesium, viewer }) {
          const { MaterialAppearance, Material, Cartesian2, PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.vertexFormat = MaterialAppearance.vertexFormat
          this.appearance = new MaterialAppearance({
            material: Material.fromType('Checkerboard', {
              repeat: new Cartesian2(20.0, 6.0)
            }),
            materialSupport: MaterialAppearance.MaterialSupport.TEXTURED
          })
          this.appearanceOutline = new PerInstanceColorAppearance({
            flat: true
          })
          this.attributes = {
            color: ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
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
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry>
          <vc-geometry-rectangle ref="rectangle" :rectangle="rectangle" :vertexFormat="vertexFormat"></vc-geometry-rectangle>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearanceOutline">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-rectangle ref="rectangleOutline" :rectangle="rectangleOutline"></vc-geometry-outline-rectangle>
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
        appearanceOutline: null,
        vertexFormat: null,
        rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 },
        rectangleOutline: { west: 100.5, south: 29.5, east: 105.5, north: 34.5 },
        attributes: null
      }
    },
    mounted() {
      Promise.all([this.$refs.rectangle.createPromise, this.$refs.rectangleOutline.createPromise]).then((instances) => {
        console.log('All geometries are loaded.')
        const boundingSphereUnion = instances.reduce((prev, cur) => {
          const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
          const boundingSphere = cur.vm.$parent.modelMatrix
            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
            : geometry.boundingSphere
          return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
        }, null)
        instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        const { MaterialAppearance, Material, Cartesian2, PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.vertexFormat = MaterialAppearance.vertexFormat
        this.appearance = new MaterialAppearance({
          material: Material.fromType('Checkerboard', {
            repeat: new Cartesian2(20.0, 6.0)
          }),
          materialSupport: MaterialAppearance.MaterialSupport.TEXTURED
        })
        this.appearanceOutline = new PerInstanceColorAppearance({
          flat: true
        })
        this.attributes = {
          color: ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
        }
      }
    }
  }
</script>
```

## Instance Properties

### `vc-geometry-rectangle`

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

### `vc-geometry-outline-rectangle`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| rectangle | Object | | `required` A cartographic rectangle with north, south, east and west properties in radians. **structure: { west: number, south: number, east: number, north: number }** |
| ellipsoid | Object | | `optional` The ellipsoid on which the rectangle lies. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| height | Number | `0` | `optional` The distance in meters between the rectangle and the ellipsoid surface. |
| rotation | Number | `0.0` | `optional` The rotation of the rectangle, in radians. A positive rotation is counter-clockwise. |
| extrudedHeight | Number | | `optional` The distance in meters between the rectangle's extruded face and the ellipsoid surface. |

---

Refer to the official document: **[RectangleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGeometry.html)**, **[RectangleOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
