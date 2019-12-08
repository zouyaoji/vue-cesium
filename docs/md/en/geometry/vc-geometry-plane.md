# PlaneGeometry, PlaneOutlineGeometry

- The `vc-geometry-plane` component is used to load a geometry that describes a plane centered at the origin, with a unit width and length.
- The `vc-geometry-outline-plane` component is used to load a geometry that describes the outline of a plane centered at the origin, with a unit width and length.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive`.

## Example

### Load PlaneGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-plane ref="plane" :vertexFormat="vertexFormat"></vc-geometry-plane>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearanceOutline">
          <vc-instance-geometry :attributes="attributesOutline" :modelMatrix="modelMatrix">
            <vc-geometry-outline-plane ref="planeOutline"></vc-geometry-outline-plane>
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
          geometry: null,
          attributes: null,
          vertexFormat: null,
          modelMatrix: null,
          attributesOutline: null
        }
      },
      mounted() {
        Promise.all([this.$refs.plane.createPromise, this.$refs.planeOutline.createPromise]).then((instances) => {
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
          const { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, Matrix4, Transforms } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            closed: true
          })
          this.appearanceOutline = new PerInstanceColorAppearance({
            flat: true,
            renderState: {
              lineWidth: Math.min(2.0, viewer.scene.maximumAliasedLineWidth)
            }
          })
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.attributesOutline = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
          }
          this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
          const dimensions = new Cartesian3(400000.0, 300000.0, 1.0)
          const translateMatrix = Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(108, 38))
          const scaleMatrix = Matrix4.fromScale(dimensions)
          const planeModelMatrix = new Matrix4()
          this.modelMatrix = Matrix4.multiply(translateMatrix, scaleMatrix, planeModelMatrix)
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
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
          <vc-geometry-plane ref="plane" :vertexFormat="vertexFormat"></vc-geometry-plane>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearanceOutline">
        <vc-instance-geometry :attributes="attributesOutline" :modelMatrix="modelMatrix">
          <vc-geometry-outline-plane ref="planeOutline"></vc-geometry-outline-plane>
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
        geometry: null,
        attributes: null,
        vertexFormat: null,
        modelMatrix: null,
        attributesOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.plane.createPromise, this.$refs.planeOutline.createPromise]).then((instances) => {
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
        const { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, Matrix4, Transforms } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          closed: true
        })
        this.appearanceOutline = new PerInstanceColorAppearance({
          flat: true,
          renderState: {
            lineWidth: Math.min(2.0, viewer.scene.maximumAliasedLineWidth)
          }
        })
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.attributesOutline = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
        const dimensions = new Cartesian3(400000.0, 300000.0, 1.0)
        const translateMatrix = Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(108, 38))
        const scaleMatrix = Matrix4.fromScale(dimensions)
        const planeModelMatrix = new Matrix4()
        this.modelMatrix = Matrix4.multiply(translateMatrix, scaleMatrix, planeModelMatrix)
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

### `vc-geometry-plane`

| name         | type   | default | description                                      |
| ------------ | ------ | ------- | ------------------------------------------------ |
| vertexFormat | Object |         | `optional` The vertex attributes to be computed. |

---

### `vc-geometry-outline-plane`

| name | type | default | description |
| ---- | ---- | ------- | ----------- |


---

Refer to the official document: **[PlaneGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGeometry.html)**, **[PlaneOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PlaneOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
