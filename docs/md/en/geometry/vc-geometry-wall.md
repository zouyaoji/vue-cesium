# WallGeometry, WallOutlineGeometry

- The `vc-geometry-wall` component is used to load a geometry that describes a wall, which is similar to a KML line string. A wall is defined by a series of points, which extrude down to the ground. Optionally, they can extrude downwards to a specified height.
- The `vc-geometry-outline-wall` component is used to load a geometry that describes a wall outline. A wall is defined by a series of points, which extrude down to the ground. Optionally, they can extrude downwards to a specified height.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive`.

## Example

### Load WallGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-wall ref="wall" :positions="positions" :vertexFormat="vertexFormat"></vc-geometry-wall>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-wall ref="wallOutline" :positions="positionsOutline"></vc-geometry-outline-wall>
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
          attributes: null,
          vertexFormat: null,
          positions: [
            { lng: 107.0, lat: 40.0, height: 100000.0 },
            { lng: 97.0, lat: 40.0, height: 100000.0 },
            { lng: 97.0, lat: 37.0, height: 100000.0 },
            { lng: 107.0, lat: 37.0, height: 100000.0 },
            { lng: 107.0, lat: 40.0, height: 100000.0 }
          ],
          positionsOutline: [
            { lng: 115.0, lat: 30.0, height: 200000.0 },
            { lng: 90.0, lat: 30.0, height: 200000.0 }
          ]
        }
      },
      mounted() {
        Promise.all([this.$refs.wall.createPromise, this.$refs.wallOutline.createPromise]).then((instances) => {
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
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
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
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-wall ref="wall" :positions="positions" :vertexFormat="vertexFormat"></vc-geometry-wall>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-wall ref="wallOutline" :positions="positionsOutline"></vc-geometry-outline-wall>
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
        attributes: null,
        vertexFormat: null,
        positions: [
          { lng: 107.0, lat: 40.0, height: 100000.0 },
          { lng: 97.0, lat: 40.0, height: 100000.0 },
          { lng: 97.0, lat: 37.0, height: 100000.0 },
          { lng: 107.0, lat: 37.0, height: 100000.0 },
          { lng: 107.0, lat: 40.0, height: 100000.0 }
        ],
        positionsOutline: [
          { lng: 115.0, lat: 30.0, height: 200000.0 },
          { lng: 90.0, lat: 30.0, height: 200000.0 }
        ]
      }
    },
    mounted() {
      Promise.all([this.$refs.wall.createPromise, this.$refs.wallOutline.createPromise]).then((instances) => {
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
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
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

### `vc-geometry-wall`

<!-- prettier-ignore -->
| name | type | default | description |
| --------------- | ------ | ------- | ----------------------------------------------------------------------------- |
| positions | Array | | `required` An array of Cartesian objects, which are the points of the wall. **structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| maximumHeights | Array | | `optional` An array parallel to positions that give the maximum height of the wall at positions. If undefined, the height of each position in used.|
| minimumHeights | Array | | `optional`An array parallel to positions that give the minimum height of the wall at positions. If undefined, the height at each position is 0.0.|
| ellipsoid | Object | | `optional` The ellipsoid for coordinate manipulation. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed.|

---

### `vc-geometry-outline-wall`

<!-- prettier-ignore -->
| name            | type   | default | description                                                                              |
| --------------- | ------ | ------- | ---------------------------------------------------------------------------------------- |
| positions | Array | | `required` An array of Cartesian objects, which are the points of the wall. **structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| maximumHeights | Array | | `optional` An array parallel to positions that give the maximum height of the wall at positions. If undefined, the height of each position in used.|
| minimumHeights | Array | | `optional`An array parallel to positions that give the minimum height of the wall at positions. If undefined, the height at each position is 0.0.|
| ellipsoid | Object | | `optional` The ellipsoid for coordinate manipulation. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed.|

---

Refer to the official document: **[WallGeometry](https://cesium.com/docs/cesiumjs-ref-doc/WallGeometry.html)**, **[WallOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/WallOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
