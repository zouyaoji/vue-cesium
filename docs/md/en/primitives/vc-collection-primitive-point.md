# PointCollection

The `vc-collection-primitive-point` component is used to load a renderable collection of points.

## Example

### Load PointCollection with `vc-collection-primitive-point`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-point :points="points"></vc-collection-primitive-point>
        <vc-collection-primitive-point>
          <template v-for="(polyline, index) of polylines">
            <template v-for="(position, subIndex) of polyline.positions">
              <vc-primitive-point
                :position="position"
                :key="'point' + index + 'position' + subIndex"
                :color="colorPoint"
                :pixelSize="32"
              ></vc-primitive-point>
            </template>
          </template>
        </vc-collection-primitive-point>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          points: [],
          colorPoint: {},
          polylines: [
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313117980957031, height: 1183.3186645507812 },
                { lng: 119.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
              ]
            },
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
                { lng: 119.24906555725632, lat: 30.31316741393502, height: 1183.6849884241819 }
              ]
            },
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313655853271484, height: 1184.2783203125 },
                { lng: 119.24906555725632, lat: 30.313430628046348, height: 1184.1093236654997 }
              ]
            }
          ]
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
          this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
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
      <vc-collection-primitive-point :points="points"></vc-collection-primitive-point>
      <vc-collection-primitive-point>
        <template v-for="(polyline, index) of polylines">
          <template v-for="(position, subIndex) of polyline.positions">
            <vc-primitive-point
              :position="position"
              :key="'point' + index + 'position' + subIndex"
              :color="colorPoint"
              :pixelSize="32"
            ></vc-primitive-point>
          </template>
        </template>
      </vc-collection-primitive-point>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        points: [],
        colorPoint: {},
        polylines: [
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313117980957031, height: 1183.3186645507812 },
              { lng: 119.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
            ]
          },
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
              { lng: 119.24906555725632, lat: 30.31316741393502, height: 1183.6849884241819 }
            ]
          },
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313655853271484, height: 1184.2783203125 },
              { lng: 119.24906555725632, lat: 30.313430628046348, height: 1184.1093236654997 }
            ]
          }
        ]
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
        this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
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
| blendOption             | Number  |         | `optional` The point blending option. The default is used for rendering both opaque and translucent points. However, if either all of the points are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x.|
| points                  | Array   |  `[]`   | `optional` Specifies an array of point collections.The array object structure is a [`vc-primitive-point`](./#/zh/primitive/vc-primitive-point) component property.|

---

- Refer to the official document: **[PointPrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
