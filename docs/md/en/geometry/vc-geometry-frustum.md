# FrustumGeometry, FrustumOutlineGeometry

- The `vc-geometry-frustum` component is used to load a geometry that describes a frustum at the given the origin and orientation.
- The `vc-geometry-outline-frustum` component is used to load a geometry that describes the outline of a frustum with the given the origin and orientation.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive`.

## Example

### Load FrustumGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-frustum
              ref="frustum"
              :frustum="frustum"
              :origin="origin"
              :orientation="orientation"
              :vertexFormat="vertexFormat"
            ></vc-geometry-frustum>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-frustum
              ref="frustumOutline"
              :frustum="frustum"
              :origin="originOutline"
              :orientation="orientation"
            ></vc-geometry-outline-frustum>
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
          orientation: { x: 0, y: 0, z: 0, w: 1},
          frustum: null,
          origin: { lng: 105, lat: 35 },
          originOutline: { lng: 110, lat: 35 }
        }
      },
      mounted () {
        Promise.all([
          this.$refs.frustum.createPromise,
          this.$refs.frustumOutline.createPromise,
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
          const { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, PerspectiveFrustum, Quaternion } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat : true
          })
          this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.frustum = new PerspectiveFrustum({
            fov: Cesium.Math.toRadians(30.0),
            aspectRatio: 1920.0 / 1080.0,
            near: 1.0,
            far: 500000
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
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-frustum
            ref="frustum"
            :frustum="frustum"
            :origin="origin"
            :orientation="orientation"
            :vertexFormat="vertexFormat"
          ></vc-geometry-frustum>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-frustum
            ref="frustumOutline"
            :frustum="frustum"
            :origin="originOutline"
            :orientation="orientation"
          ></vc-geometry-outline-frustum>
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
        orientation: { x: 0, y: 0, z: 0, w: 1 },
        frustum: null,
        origin: { lng: 105, lat: 35 },
        originOutline: { lng: 110, lat: 35 }
      }
    },
    mounted() {
      Promise.all([this.$refs.frustum.createPromise, this.$refs.frustumOutline.createPromise]).then((instances) => {
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
        const { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, PerspectiveFrustum, Quaternion } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.frustum = new PerspectiveFrustum({
          fov: Cesium.Math.toRadians(30.0),
          aspectRatio: 1920.0 / 1080.0,
          near: 1.0,
          far: 500000
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

### `vc-geometry-frustum`

| name         | type   | default | description                                      |
| ------------ | ------ | ------- | ------------------------------------------------ |
| frustum      | Object |         | `optional` The frustum.                          |
| origin       | Object |         | `optional` The origin of the frustum.            |
| orientation  | Object |         | `optional` The orientation of the frustum.       |
| vertexFormat | Object |         | `optional` The vertex attributes to be computed. |

---

### `vc-geometry-outline-frustum`

| name        | type   | default | description                                |
| ----------- | ------ | ------- | ------------------------------------------ |
| frustum     | Object |         | `optional` The frustum.                    |
| origin      | Object |         | `optional` The origin of the frustum.      |
| orientation | Object |         | `optional` The orientation of the frustum. |

Refer to the official document: **[FrustumGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumGeometry.html)**, **[FrustumOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
