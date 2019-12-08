# CircleGeometry, CircleOutlineGeometry

- The `vc-geometry-circle` component is used to load a geometry that describes a circle on the ellipsoid.
- The `vc-geometry-outline-circle` component is used to load a geometry that describes the outline of a circle on the ellipsoid.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive` or `vc-primitive-ground`.

## Example

### Load CircleGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive-ground :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-circle ref="circle" :center="center" :radius="250000"></vc-geometry-circle>
          </vc-instance-geometry>
        </vc-primitive-ground>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-circle ref="circleOutline" :center="centerOutline" :radius="250000"></vc-geometry-outline-circle>
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
          attributes: null,
          geometry: null,
          center: { lng: 102, lat: 38 },
          centerOutline: { lng: 110, lat: 38 }
        }
      },
      mounted() {
        Promise.all([this.$refs.circle.createPromise, this.$refs.circleOutline.createPromise]).then((instances) => {
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
          this.viewer = viewer
          const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
        },
        LEFT_CLICK(movement) {
          const feature = this.viewer.scene.pick(movement.position)
          console.log(feature)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
      <vc-primitive-ground :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-circle ref="circle" :center="center" :radius="250000"></vc-geometry-circle>
        </vc-instance-geometry>
      </vc-primitive-ground>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-circle ref="circleOutline" :center="centerOutline" :radius="250000"></vc-geometry-outline-circle>
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
        attributes: null,
        geometry: null,
        center: { lng: 102, lat: 38 },
        centerOutline: { lng: 110, lat: 38 }
      }
    },
    mounted() {
      Promise.all([this.$refs.circle.createPromise, this.$refs.circleOutline.createPromise]).then((instances) => {
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
        this.viewer = viewer
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
      },
      LEFT_CLICK(movement) {
        const feature = this.viewer.scene.pick(movement.position)
        console.log(feature)
      }
    }
  }
</script>
```

## Instance Properties

### `vc-geometry-box`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| center | Object | | `required` The circle's center point in the fixed frame. **Structure: { lng: number, lat: number, height: number }** |
| radius | Number | | `required` The radius in meters. |
| ellipsoid | Object | | `optional` The ellipsoid the circle will be on. |
| height | Number | `0.0` | `optional` The distance in meters between the circle and the ellipsoid surface. |
| granularity | Number | `0.02` | `optional` The angular distance between points on the circle in radians. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| extrudedHeight | Number | `0.0` | `optional` The distance in meters between the circle's extruded face and the ellipsoid surface. |
| stRotation | Number | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.|

---

### `vc-geometry-outline-box`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| center | Object | | `required` The circle's center point in the fixed frame. **Structure: { lng: number, lat: number, height: number }** |
| radius | Number | | `required` The radius in meters. |
| ellipsoid | Object | | `optional` The ellipsoid the circle will be on. |
| height | Number | `0.0` | `optional` The distance in meters between the circle and the ellipsoid surface. |
| granularity | Number | `0.02` | `optional` The angular distance between points on the circle in radians. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| extrudedHeight | Number | `0.0` | `optional` The distance in meters between the circle's extruded face and the ellipsoid surface. |
| stRotation | Number | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.|

---

Refer to the official document: **[CircleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CircleGeometry.html)**, **[CircleOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CircleOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
