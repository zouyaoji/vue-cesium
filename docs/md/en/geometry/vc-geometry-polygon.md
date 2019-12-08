# PolygonGeometry、PolygonOutlineGeometry

- The `vc-geometry-polygon` component is used to load a geometry that describes a polygon on the ellipsoid.
- The `vc-geometry-outline-polygon` component is used to load a geometry that describes the outline of a polygon on the ellipsoid.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive` or `vc-primitive-ground`.

## Example

### Load PolygonGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-polygon
              ref="polygon"
              :vertexFormat="vertexFormat"
              :polygonHierarchy="polygonHierarchy"
              :height="height"
              :extrudedHeight="30"
            ></vc-geometry-polygon>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearanceOutline">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-polygon ref="polygonOutline" :polygonHierarchy="polygonHierarchyOutline">
            </vc-geometry-outline-polygon>
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
          vertexFormat: null,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 100000,
          polygonHierarchyOutline: [
            { lng: 107.1, lat: 29.5 },
            { lng: 111.2, lat: 29.5 },
            { lng: 111.2, lat: 33.5 },
            { lng: 113.2, lat: 35.5 },
            { lng: 107.1, lat: 33.5 }
          ],
          appearanceOutline: null
        }
      },
      mounted() {
        Promise.all([this.$refs.polygon.createPromise, this.$refs.polygonOutline.createPromise]).then((instances) => {
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
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute, EllipsoidSurfaceAppearance, Material } = Cesium
          this.appearanceOutline = new PerInstanceColorAppearance({
            flat: true
          })
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.vertexFormat = EllipsoidSurfaceAppearance.VERTEX_FORMAT
          this.appearance = new EllipsoidSurfaceAppearance({
            material: new Material({
              fabric: {
                type: 'Water',
                uniforms: {
                  normalMap: './statics/SampleData/images/waterNormals.jpg',
                  frequency: 1000.0,
                  animationSpeed: 0.05,
                  amplitude: 10.0
                }
              }
            })
          })
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
        <vc-instance-geometry>
          <vc-geometry-polygon
            ref="polygon"
            :vertexFormat="vertexFormat"
            :polygonHierarchy="polygonHierarchy"
            :height="height"
            :extrudedHeight="30"
          ></vc-geometry-polygon>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearanceOutline">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-polygon ref="polygonOutline" :polygonHierarchy="polygonHierarchyOutline">
          </vc-geometry-outline-polygon>
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
        vertexFormat: null,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        height: 100000,
        polygonHierarchyOutline: [
          { lng: 107.1, lat: 29.5 },
          { lng: 111.2, lat: 29.5 },
          { lng: 111.2, lat: 33.5 },
          { lng: 113.2, lat: 35.5 },
          { lng: 107.1, lat: 33.5 }
        ],
        appearanceOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.polygon.createPromise, this.$refs.polygonOutline.createPromise]).then((instances) => {
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
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute, EllipsoidSurfaceAppearance, Material } = Cesium
        this.appearanceOutline = new PerInstanceColorAppearance({
          flat: true
        })
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.vertexFormat = EllipsoidSurfaceAppearance.VERTEX_FORMAT
        this.appearance = new EllipsoidSurfaceAppearance({
          material: new Material({
            fabric: {
              type: 'Water',
              uniforms: {
                normalMap: './statics/SampleData/images/waterNormals.jpg',
                frequency: 1000.0,
                animationSpeed: 0.05,
                amplitude: 10.0
              }
            }
          })
        })
      }
    }
  }
</script>
```

## Instance Properties

### `vc-geometry-polygon`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| polygonHierarchy | Object\|Array | | `required` A polygon hierarchy that can include holes. |
| height | Number | `0` | `optional` The distance in meters between the polygon and the ellipsoid surface. |
| extrudedHeight | Number | | `optional` The distance in meters between the polygon's extruded face and the ellipsoid surface. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| stRotation | Number\|Object | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| perPositionHeight | Boolean | `false` | `optional` Use the height of options.positions for each position instead of using options.height to determine the height. |
| closeTop | Boolean | `true` | `optional` When false, leaves off the top of an extruded polygon open. |
| closeBottom | Boolean | `true` | `optional` When false, leaves off the bottom of an extruded polygon open. |
| arcType | Number | `1` | `optional` The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. **NONE: 0, GEODESIC: 1, RHUMB: 2** |

---

### `vc-geometry-outline-polygon`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| polygonHierarchy | Object\|Array | | `required` A polygon hierarchy that can include holes. |
| height | Number | `0` | `optional` The distance in meters between the polygon and the ellipsoid surface. |
| extrudedHeight | Number | | `optional` The distance in meters between the polygon's extruded face and the ellipsoid surface. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| perPositionHeight | Boolean | `false` | `optional` Use the height of options.positions for each position instead of using options.height to determine the height. |
| arcType | Number | `1` | `optional` The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. **NONE: 0, GEODESIC: 1, RHUMB: 2** |

---

- structure of hierarchy

```js
// Array
[{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
// Object
{
  positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
  holes: [
    {
      positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
      holes: [
        positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
        // ...
      ]
    }
  ]
}

```

Refer to the official document: **[PolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html)**, **[PolygonOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
