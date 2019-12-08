# CorridorGeometry, CorridorOutlineGeometry

- The `vc-geometry-corridor` component is used to load a geometry that describes a corridor.
- The `vc-geometry-outline-corridor` component is used to load a geometry that describes a corridor outline.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive` or `vc-primitive-ground`.

## Example

### Load CorridorGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive-ground :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-corridor ref="corridor" :positions="positions" :width="width"></vc-geometry-corridor>
          </vc-instance-geometry>
        </vc-primitive-ground>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributesOutline">
            <vc-geometry-outline-corridor
              ref="corridorOutline"
              :positions="positionsOutline"
              :width="width"
            ></vc-geometry-outline-corridor>
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
          width: 250000,
          attributes: null,
          attributesOutline: null,
          positions: [
            { lng: 100.0, lat: 40.0 },
            { lng: 105.0, lat: 40.0 },
            { lng: 105.0, lat: 35.0 }
          ],
          positionsOutline: [
            { lng: 102.0, lat: 40.0 },
            { lng: 107.0, lat: 40.0 },
            { lng: 107.0, lat: 35.0 }
          ]
        }
      },
      mounted() {
        Promise.all([this.$refs.corridor.createPromise, this.$refs.corridorOutline.createPromise]).then((instances) => {
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
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(1.0, 1.0, 0.0, 1.0)
          }
          this.attributesOutline = {
            color: new ColorGeometryInstanceAttribute(1.0, 0.0, 0.0, 1.0)
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
      <vc-primitive-ground :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-corridor ref="corridor" :positions="positions" :width="width"></vc-geometry-corridor>
        </vc-instance-geometry>
      </vc-primitive-ground>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributesOutline">
          <vc-geometry-outline-corridor
            ref="corridorOutline"
            :positions="positionsOutline"
            :width="width"
          ></vc-geometry-outline-corridor>
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
        width: 250000,
        attributes: null,
        attributesOutline: null,
        positions: [
          { lng: 100.0, lat: 40.0 },
          { lng: 105.0, lat: 40.0 },
          { lng: 105.0, lat: 35.0 }
        ],
        positionsOutline: [
          { lng: 102.0, lat: 40.0 },
          { lng: 107.0, lat: 40.0 },
          { lng: 107.0, lat: 35.0 }
        ]
      }
    },
    mounted() {
      Promise.all([this.$refs.corridor.createPromise, this.$refs.corridorOutline.createPromise]).then((instances) => {
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
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(1.0, 1.0, 0.0, 1.0)
        }
        this.attributesOutline = {
          color: new ColorGeometryInstanceAttribute(1.0, 0.0, 0.0, 1.0)
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

### `vc-geometry-corridor`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| positions | Array | | `required` An array of positions that define the center of the corridor. **Structure[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | | `required` The distance between the edges of the corridor in meters. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| height | Number | `0` | `optional` The distance in meters between the ellipsoid surface and the positions. |
| extrudedHeight | Number | | `optional` The distance in meters between the ellipsoid surface and the extruded face. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed.|
| cornerType | Number | `0` | `optional` Determines the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |

---

### `vc-geometry-outline-corridor`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| positions | Array | | `required` An array of positions that define the center of the corridor outline. **Structure[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | | `required` 	The distance between the edges of the corridor outline. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| height | Number | `0` | `optional` The distance in meters between the ellipsoid surface and the positions. |
| extrudedHeight | Number | | `optional` The distance in meters between the ellipsoid surface and the extruded face. |
| cornerType | Number | `0` | `optional` Determines the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |

---

Refer to the official document: **[CorridorGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGeometry.html)**, **[CorridorOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
