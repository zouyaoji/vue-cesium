# PointCollection

`point-collection` PointPrimitivePoint container. Mount the [`point-primitive`](./#/zh/primitives/point-primitive) component to add points.

## Example

### Add some points to viewer by PointCollection

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <point-collection :points="points">
        </point-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          points: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const points = [];
          for (var i = 0; i < 50000; i++) {
            let point = {}
            point.position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
            point.color = 'rgb(255,229,0)'
            point.pixelSize = 8
            points.push(point)
          }
          this.points = points
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
      <point-collection :points="points"> </point-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        points: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const points = []
        for (var i = 0; i < 50000; i++) {
          let point = {}
          point.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          point.color = 'rgb(255,229,0)'
          point.pixelSize = 8
          points.push(point)
        }
        this.points = points
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ----------------------- | ------- | ------- | ------------------------------------------------------------- |
| modelMatrix             | Object  |         | `optional` The 4x4 transformation matrix that transforms each point from model to world coordinates.  |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| blendOption             | Number  |         | `optional` The point blending option. The default is used for rendering both opaque and translucent points. However, if either all of the points are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x.                                 |
| points                  | Array   |  `[]`   | `optional` Specifies an array of point collections.                                       |

---

- Reference official document [PointPrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html).

## Events

| name  | parameter        | description                                                                                 |
| ----- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
