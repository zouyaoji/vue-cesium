# CoplanarPolygonGeometry, CoplanarPolygonOutlineGeometry

- The `vc-geometry-polygon-coplanar` component is used to load a geometry that describes a coplanar polygon from an array of positions.
- The `vc-geometry-outline-polygon-coplanar` component is used to load a geometry that describes coplanar polygon outline from an array of positions.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive`.

## Example

### Load CoplanarPolygonGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-polygon-coplanar ref="polygonCoplanar" :positions="positions" :vertexFormat="vertexFormat"></vc-geometry-polygon-coplanar>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributesOutline">
            <vc-geometry-outline-polygon-coplanar ref="polygonCoplanarOutline" :positions="positions"></vc-geometry-outline-polygon-coplanar>
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
          positions: [
            { lng: 110, lat: 33.5, height: 0 },
            { lng: 110, lat: 33.5, height: 200000 },
            { lng: 105, lat: 33.5, height: 200000 },
            { lng: 105, lat: 33.5, height: 0 }
          ],
          vertexFormat: null,
          attributes: null,
          attributesOutline: null
        }
      },
      mounted () {
        Promise.all([
          this.$refs.polygonCoplanar.createPromise,
          this.$refs.polygonCoplanarOutline.createPromise,
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
          const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.attributesOutline = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
          }
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-polygon-coplanar
            ref="polygonCoplanar"
            :positions="positions"
            :vertexFormat="vertexFormat"
          ></vc-geometry-polygon-coplanar>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributesOutline">
          <vc-geometry-outline-polygon-coplanar
            ref="polygonCoplanarOutline"
            :positions="positions"
          ></vc-geometry-outline-polygon-coplanar>
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
        positions: [
          { lng: 110, lat: 33.5, height: 0 },
          { lng: 110, lat: 33.5, height: 200000 },
          { lng: 105, lat: 33.5, height: 200000 },
          { lng: 105, lat: 33.5, height: 0 }
        ],
        vertexFormat: null,
        attributes: null,
        attributesOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.polygonCoplanar.createPromise, this.$refs.polygonCoplanarOutline.createPromise]).then(
        (instances) => {
          console.log('All geometries are loaded.')
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.$parent.modelMatrix
              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
              : geometry.boundingSphere
            return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
        }
      )
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.viewer = viewer
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.attributesOutline = {
          color: new ColorGeometryInstanceAttribute(100, 200, 200)
        }
      }
    }
  }
</script>
```

## Instance Properties

### `vc-geometry-polygon-coplanar`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| positions | Object\|Array | | `required` An array of positions that defined the corner points of the polygon. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| stRotation | Number\|Object | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |

---

### `vc-geometry--outline-polygon-coplanar`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| positions | Object\|Array | | `required` An array of positions that defined the corner points of the polygon. |

---

- structure of hierarchy

```js
// Array
[{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
```

Refer to the official document: **[CoplanarPolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CoplanarPolygonGeometry.html)**, **[CoplanarPolygonOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CoplanarPolygonOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
