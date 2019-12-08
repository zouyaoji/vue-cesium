# CylinderGeometry, CylinderOutlineGeometry

- The `vc-geometry-cylinder` component is used to load a geometry that describes a cylinder.
- The `vc-geometry-outline-cylinder` component is used to load a geometry that describes a cylinder outline.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive`.

## Example

### Load CorridorGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-cylinder
              ref="cylinder"
              :length="400000.0"
              :topRadius="200000.0"
              :bottomRadius="200000.0"
              :slices="1024"
              :vertexFormat="vertexFormat"
            ></vc-geometry-cylinder>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
            <vc-geometry-outline-cylinder
              ref="cylinderOutline"
              :length="400000.0"
              :topRadius="200000.0"
              :bottomRadius="200000.0"
              :slices="1024"
              :numberOfVerticalLines="128"
            ></vc-geometry-outline-cylinder>
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
          modelMatrixOutline: null
        }
      },
      mounted () {
        Promise.all([
          this.$refs.cylinder.createPromise,
          this.$refs.cylinderOutline.createPromise,
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
            new Cartesian3(0, 0, 0),
            new Matrix4()
          )
          this.modelMatrixOutline = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 35.0)),
            new Cartesian3(0, 0, 0),
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
    <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
          <vc-geometry-cylinder
            ref="cylinder"
            :length="400000.0"
            :topRadius="200000.0"
            :bottomRadius="200000.0"
            :slices="1024"
            :vertexFormat="vertexFormat"
          ></vc-geometry-cylinder>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
          <vc-geometry-outline-cylinder
            ref="cylinderOutline"
            :length="400000.0"
            :topRadius="200000.0"
            :bottomRadius="200000.0"
            :slices="1024"
            :numberOfVerticalLines="128"
          ></vc-geometry-outline-cylinder>
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
        modelMatrixOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.cylinder.createPromise, this.$refs.cylinderOutline.createPromise]).then((instances) => {
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
          new Cartesian3(0, 0, 0),
          new Matrix4()
        )
        this.modelMatrixOutline = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 35.0)),
          new Cartesian3(0, 0, 0),
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

### `vc-geometry-cylinder`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| length | Array | | `required` A numeric Property specifying the length of the cylinder. |
| topRadius | Number | | `required` A numeric Property specifying the radius of the top of the cylinder. |
| bottomRadius | Number | | `required` A numeric Property specifying the radius of the bottom of the cylinder. |
| slices | Number | `128` | `optional` The number of edges around the perimeter of the cylinder. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed.|

---

### `vc-geometry-outline-cylinder`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| length | Array | | `required` A numeric Property specifying the length of the cylinder. |
| topRadius | Number | | `required` A numeric Property specifying the radius of the top of the cylinder. |
| bottomRadius | Number | | `required` A numeric Property specifying the radius of the bottom of the cylinder. |
| slices | Number | `128` | `optional` The number of edges around the perimeter of the cylinder. |
| numberOfVerticalLines | Number | `16`| `optional` Number of lines to draw between the top and bottom surfaces of the cylinder.|

Refer to the official document: **[CylinderGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGeometry.html)**, **[CylinderOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
