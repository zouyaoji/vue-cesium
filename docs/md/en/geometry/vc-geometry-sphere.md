# SphereGeometry, SphereOutlineGeometry

- The `vc-geometry-sphere` component is used to load a geometry that describes a sphere centered at the origin.
- The `vc-geometry-outline-sphere` component is used to load a geometry that describes the outline of a sphere.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive`.

## Example

### Load SphereGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer ref="viewer" @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive ref="primitive" :appearance="appearance">
          <vc-instance-geometry ref="geometry" :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-sphere
              ref="sphere"
              :radius="radius"
              :vertexFormat="vertexFormat"
            ></vc-geometry-ellipsoid>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
            <vc-geometry-outline-sphere
              ref="sphereOutline"
              :radius="radius"
            ></vc-geometry-outline-sphere>
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
          radius: 200000,
          modelMatrixOutline: null
        }
      },
      mounted () {
        Promise.all([
          this.$refs.sphere.createPromise,
          this.$refs.sphereOutline.createPromise,
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
            <vc-geometry-sphere
              ref="sphere"
              :radius="radius"
              :vertexFormat="vertexFormat"
            ></vc-geometry-ellipsoid>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
            <vc-geometry-outline-sphere
              ref="sphereOutline"
              :radius="radius"
            ></vc-geometry-outline-sphere>
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
          radius: 200000,
          modelMatrixOutline: null
        }
      },
      mounted () {
        Promise.all([
          this.$refs.sphere.createPromise,
          this.$refs.sphereOutline.createPromise,
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
```

## Instance Properties

### `vc-geometry-sphere`

| name            | type   | default | description                                                                   |
| --------------- | ------ | ------- | ----------------------------------------------------------------------------- |
| radius          | Number | `1.0`   | `optional` The radius of the sphere.                                          |
| stackPartitions | Number | `0.0`   | `optional` The number of times to partition the ellipsoid into stacks.        |
| slicePartitions | Number | `10`    | `optional` The number of times to partition the ellipsoid into radial slices. |
| vertexFormat    | Object |         | `optional` The vertex attributes to be computed.                              |

---

### `vc-geometry-outline-sphere`

| name            | type   | default | description                                                                              |
| --------------- | ------ | ------- | ---------------------------------------------------------------------------------------- |
| radius          | Number | `1.0`   | `optional` The radius of the sphere.                                                     |
| stackPartitions | Number | `0.0`   | `optional` The number of times to partition the ellipsoid into stacks.                   |
| slicePartitions | Number | `10`    | `optional` The number of times to partition the ellipsoid into radial slices.            |
| subdivisions    | Number | `200`   | `optional` The number of points per line, determining the granularity of the curvature . |

Refer to the official document: **[SphereGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SphereGeometry.html)**, **[SphereOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SphereOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
