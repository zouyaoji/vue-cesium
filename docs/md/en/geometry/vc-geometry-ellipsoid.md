# EllipsoidGeometry, EllipsoidOutlineGeometry

- The `vc-geometry-ellipsoid` component is used to load a geometry that describes a ellipsoid.
- The `vc-geometry-outline-ellipsoid` component is used to load a geometry that describes a ellipsoid outline.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive`.

## Example

### Load EllipsoidGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer ref="viewer" @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive ref="primitive" :appearance="appearance">
          <vc-instance-geometry ref="geometry" :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-ellipsoid
              ref="ellipsoid"
              :radii="radii"
              :vertexFormat="vertexFormat"
            ></vc-geometry-ellipsoid>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
            <vc-geometry-outline-ellipsoid
              ref="ellipsoidOutline"
              :radii="radii"
            ></vc-geometry-outline-ellipsoid>
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
          modelMatrix: null,
          vertexFormat: null,
          radii: { x: 200000.0, y: 200000.0, z: 300000.0 },
          modelMatrixOutline: null
        }
      },
      mounted () {
        Promise.all([
          this.$refs.ellipsoid.createPromise,
          this.$refs.ellipsoidOutline.createPromise,
        ]).then(instances => {
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
          const { Matrix4, PerInstanceColorAppearance, Transforms, Cartesian3, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat : true
          })
          this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.modelMatrix = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
            new Cartesian3(0, 0, 100000),
            new Matrix4()
          )
          this.modelMatrixOutline = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 35.0)),
            new Cartesian3(0, 0, 200000),
            new Matrix4()
          )
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
    <vc-viewer ref="viewer" @ready="ready" @LEFT_CLICK="LEFT_CLICK">
      <vc-primitive ref="primitive" :appearance="appearance">
        <vc-instance-geometry ref="geometry" :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
          <vc-geometry-ellipsoid ref="ellipsoid" :radii="radii" :vertexFormat="vertexFormat"></vc-geometry-ellipsoid>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
          <vc-geometry-outline-ellipsoid ref="ellipsoidOutline" :radii="radii"></vc-geometry-outline-ellipsoid>
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
        modelMatrix: null,
        vertexFormat: null,
        radii: { x: 200000.0, y: 200000.0, z: 300000.0 },
        modelMatrixOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.ellipsoid.createPromise, this.$refs.ellipsoidOutline.createPromise]).then((instances) => {
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
        const { Matrix4, PerInstanceColorAppearance, Transforms, Cartesian3, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.modelMatrix = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
          new Cartesian3(0, 0, 100000),
          new Matrix4()
        )
        this.modelMatrixOutline = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 35.0)),
          new Cartesian3(0, 0, 200000),
          new Matrix4()
        )
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

### `vc-geometry-ellipsoid`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| radii | Object | | `optional` The radii of the ellipsoid in the x, y, and z directions. **structure: { x: number, y: number, z: number }** |
| innerRadii | Number | | `optional` The inner radii of the ellipsoid in the x, y, and z directions.|
| minimumClock | Number | `0.0` | `optional` The minimum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis. |
| maximumClock | Number | `2*PI` | `optional` The maximum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis. |
| minimumCone | Number | `0.0` | `optional` The minimum angle measured from the positive z-axis and toward the negative z-axis. |
| maximumCone | Number | `PI` | `optional` The maximum angle measured from the positive z-axis and toward the negative z-axis. |
| stackPartitions | Number | `10` | `optional` The number of times to partition the ellipsoid into stacks. |
| slicePartitions | Number | `8` | `optional` The number of times to partition the ellipsoid into radial slices.|
| vertexFormat | Object |  | `optional` The vertex attributes to be computed. |

---

### `vc-geometry-outline-ellipsoid`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| radii | Object | | `optional` The radii of the ellipsoid in the x, y, and z directions. **structure: { x: number, y: number, z: number }** |
| innerRadii | Number | | `optional` The inner radii of the ellipsoid in the x, y, and z directions.|
| minimumClock | Number | `0.0` | `optional` The minimum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis. |
| maximumClock | Number | `2*PI` | `optional` The maximum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis. |
| minimumCone | Number | `0.0` | `optional` The minimum angle measured from the positive z-axis and toward the negative z-axis. |
| maximumCone | Number | `PI` | `optional` The maximum angle measured from the positive z-axis and toward the negative z-axis. |
| stackPartitions | Number | `10` | `optional` The count of stacks for the ellipsoid (1 greater than the number of parallel lines). |
| slicePartitions | Number | `8` | `optional` The count of slices for the ellipsoid (Equal to the number of radial lines).|
| subdivisions | Number | `128` | `optional` The number of points per line, determining the granularity of the curvature. |

Refer to the official document: **[EllipsoidGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGeometry.html)**, **[EllipsoidOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
