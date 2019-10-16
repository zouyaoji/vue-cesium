# PolylineCollection

`polyline-collection` Used to add line primitives, you can also add tags by mounting the [`polyline-primitive`](./#/zh/primitives/polyline-primitive) component.

## Example

### Add some polylines to viewer by PolylineCollection

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <polyline-collection :polylines="polylines"> </polyline-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          polylines: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const polylines = [];
          for (var i = 0; i < 1000; i++) {
            let polyline = {}
            let positions = []
            positions.push({lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21})
            positions.push({lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21})
            polyline.positions = positions
            polylines.push(polyline)
          }
          this.polylines = polylines
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <polyline-collection :polylines="polylines"> </polyline-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polylines: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const polylines = []
        for (var i = 0; i < 1000; i++) {
          let polyline = {}
          let positions = []
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          polyline.positions = positions
          polylines.push(polyline)
        }
        this.polylines = polylines
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
|name|type|default|description|
| ----------------------- | ------- | ------- | ------------------------------------------------------------- |
| modelMatrix             | Object  |         | `optional` The 4x4 transformation matrix that transforms each billboard from model to world coordinates.  |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| polylines               | Array   | `[]`    | `optional` Specifies an array of line collections. The array object structure is a [`polyline-primitive`](./#/zh/primitives/polyline-primitive) component property. |

---

- Reference official document [PolylineCollection](https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html).

## Events

| name  | parameter        | description                                                                                 |
| ----- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
