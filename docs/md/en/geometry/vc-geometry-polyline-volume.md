# PolylineVolumeGeometry, PolylineVolumeOutlineGeometry

- The `vc-geometry-polyline-volume` component is used to load a geometry that describes a polyline with a volume (a 2D shape extruded along a polyline).
- The `vc-geometry-outline-polyline-volume` component is used to load a geometry that describes a polyline with a volume (a 2D shape extruded along a polyline).
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive`.

## Example

### Load PolylineVolumeGeometry

#### preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer ref="viewer" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-polyline-volume
              ref="polylineVolume"
              :polylinePositions="positions"
              :shapePositions="shape"
              :vertexFormat="vertexFormat"
            ></vc-geometry-polyline-volume>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-polyline-volume
              ref="polylineVolumeOutline"
              :polylinePositions="positionsOutline"
              :shapePositions="shape"
            >
            </vc-geometry-outline-polyline-volume>
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
            { lng: 105.0, lat: 32.0 },
            { lng: 105.0, lat: 36.0 },
            { lng: 108.0, lat: 36.0 }
          ],
          positionsOutline: [
            { lng: 110.0, lat: 32.0 },
            { lng: 110.0, lat: 36.0 },
            { lng: 113.0, lat: 36.0 }
          ],
          shape: [],
          vertexFormat: null,
          attributes: null
        }
      },
      mounted() {
        this.$refs.viewer.createPromise.then(({ Cesium, viewer }) => {
          this.viewer = viewer
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.shape = this.computeCircle(60000.0)
        })
        Promise.all([this.$refs.polylineVolume.createPromise, this.$refs.polylineVolumeOutline.createPromise]).then((instances) => {
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
        computeCircle(radius) {
          let positions = []
          for (let i = 0; i < 360; i++) {
            let radians = Cesium.Math.toRadians(i)
            positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
          }
          return positions
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
    <vc-viewer ref="viewer" @LEFT_CLICK="LEFT_CLICK">
      <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-polyline-volume
            ref="polylineVolume"
            :polylinePositions="positions"
            :shapePositions="shape"
            :vertexFormat="vertexFormat"
          ></vc-geometry-polyline-volume>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-polyline-volume
            ref="polylineVolumeOutline"
            :polylinePositions="positionsOutline"
            :shapePositions="shape"
          >
          </vc-geometry-outline-polyline-volume>
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
          { lng: 105.0, lat: 32.0 },
          { lng: 105.0, lat: 36.0 },
          { lng: 108.0, lat: 36.0 }
        ],
        positionsOutline: [
          { lng: 110.0, lat: 32.0 },
          { lng: 110.0, lat: 36.0 },
          { lng: 113.0, lat: 36.0 }
        ],
        shape: [],
        vertexFormat: null,
        attributes: null
      }
    },
    mounted() {
      this.$refs.viewer.createPromise.then(({ Cesium, viewer }) => {
        this.viewer = viewer
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.shape = this.computeCircle(60000.0)
      })
      Promise.all([this.$refs.polylineVolume.createPromise, this.$refs.polylineVolumeOutline.createPromise]).then((instances) => {
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
      computeCircle(radius) {
        let positions = []
        for (let i = 0; i < 360; i++) {
          let radians = Cesium.Math.toRadians(i)
          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
        }
        return positions
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

### `vc-geometry-polyline-volume`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| polylinePositions | Array | | `required` 	An array of Cartesain3 positions that define the center of the polyline volume. **struct: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| shapePositions | Array | | `required` An array of Cartesian2 positions that define the shape to be extruded along the polyline. **struct: [{ x: number, y: number },...,{ x: number, y: number }]** |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| cornerType | Number | | `optional` Determines the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |

---

### `vc-geometry-outline-polyline-volume`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| polylinePositions | Array | | `required` 	An array of Cartesain3 positions that define the center of the polyline volume. **struct: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| shapePositions | Array | | `required` An array of Cartesian2 positions that define the shape to be extruded along the polyline. **struct: [{ x: number, y: number },...,{ x: number, y: number }]** |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| cornerType | Number | | `optional` Determines the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |

---

Refer to the official document: **[PolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGeometry.html)**, **[PolylineVolumeOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
