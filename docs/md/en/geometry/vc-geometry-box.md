# BoxGeometry, BoxOutlineGeometry

- The `vc-geometry-box` component is used to load a box geometry that describes a cube centered at the origin.
- The `vc-geometry-outline-box` component is used to load a box geometry that describes the outline of a cube centered at the origin.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive` or `vc-primitive-ground`.

## Example

### Load BoxGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive  @click="clicked" :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-box ref="box" :dimensions="dimensions"></vc-geometry-box>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrix2">
            <vc-geometry-outline-box ref="boxOutline" :dimensions="dimensions"></vc-geometry-outline-box>
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
          modelMatrix: null,
          modelMatrix2: null,
          dimensions: { x: 400000.0, y: 300000.0, z: 500000.0 }
        }
      },
      mounted() {
        Promise.all([this.$refs.box.createPromise, this.$refs.boxOutline.createPromise]).then((instances) => {
          console.log('All geometries are loaded.')
          const { BoundingSphere } = Cesium
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
        })
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.viewer = viewer
          const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.modelMatrix = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 40.0)),
            new Cartesian3(0.0, 0.0, 250000),
            new Matrix4()
          )
          this.modelMatrix2 = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 40.0)),
            new Cartesian3(0.0, 0.0, 250000),
            new Matrix4()
          )
        },
        LEFT_CLICK(movement) {
          const feature = this.viewer.scene.pick(movement.position)
          console.log(feature)
        },
        clicked(e) {
          console.log(e)
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
      <vc-primitive @click="clicked" :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
          <vc-geometry-box ref="box" :dimensions="dimensions"></vc-geometry-box>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrix2">
          <vc-geometry-outline-box ref="boxOutline" :dimensions="dimensions"></vc-geometry-outline-box>
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
        modelMatrix: null,
        modelMatrix2: null,
        dimensions: { x: 400000.0, y: 300000.0, z: 500000.0 }
      }
    },
    mounted() {
      Promise.all([this.$refs.box.createPromise, this.$refs.boxOutline.createPromise]).then((instances) => {
        console.log('All geometries are loaded.')
        const { BoundingSphere } = Cesium
        const boundingSphereUnion = instances.reduce((prev, cur) => {
          const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
          const boundingSphere = BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
          return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
        }, null)
        instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.viewer = viewer
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.modelMatrix = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 40.0)),
          new Cartesian3(0.0, 0.0, 250000),
          new Matrix4()
        )
        this.modelMatrix2 = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 40.0)),
          new Cartesian3(0.0, 0.0, 250000),
          new Matrix4()
        )
      },
      LEFT_CLICK(movement) {
        const feature = this.viewer.scene.pick(movement.position)
        console.log(feature)
      },
      clicked(e) {
        console.log(e)
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
| dimensions | Object | | `required` The width, depth, and height of the box stored in the x, y, and z coordinates of the Cartesian3, respectively. **structure: { x: number, y: number, z: number }** |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |

---

### `vc-geometry-outline-box`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| dimensions | Object | | `required` The width, depth, and height of the box stored in the x, y, and z coordinates of the Cartesian3, respectively. **structure: { x: number, y: number, z: number }** |

---

Refer to the official document: **[BoxGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxGeometry.html)**, **[BoxOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
