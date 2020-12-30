# LabelCollection

The `vc-collection-primitive-label` component is used to load a renderable collection of labels. Labels are viewport-aligned text positioned in the 3D scene. Each label can have a different font, color, scale, etc.

## Example

### Load LabelCollection with `vc-collection-primitive-label`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-label :labels="labels"></vc-collection-primitive-label>
        <vc-collection-primitive-label>
          <template v-for="(polyline, index) of polylines">
            <vc-primitive-label
              :position="polyline.positions[polyline.positions.length-1]"
              :key="'label'+index"
              :text="'Area'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
              showBackground
              :horizontalOrigin="1"
            >
            </vc-primitive-label>
          </template>
        </vc-collection-primitive-label>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          labels: [],
          polylines: [
            {
              positions: [
                { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },
                { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
              ],
              area: 100000.3
            },
            {
              positions: [
                { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
                { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }
              ],
              area: 8000.658
            },
            {
              positions: [
                { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },
                { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }
              ],
              area: 200000.55
            }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const labels = []
          for (var i = 0; i < 100; i++) {
            let label = {}
            label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            label.text = i.toString()
            labels.push(label)
          }
          this.labels = labels
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
      <vc-collection-primitive-label :labels="labels"></vc-collection-primitive-label>
      <vc-collection-primitive-label>
        <template v-for="(polyline, index) of polylines">
          <vc-primitive-label
            :position="polyline.positions[polyline.positions.length-1]"
            :key="'label'+index"
            :text="'Area'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
            showBackground
            :horizontalOrigin="1"
          >
          </vc-primitive-label>
        </template>
      </vc-collection-primitive-label>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labels: [],
        polylines: [
          {
            positions: [
              { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },
              { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
            ],
            area: 100000.3
          },
          {
            positions: [
              { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
              { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }
            ],
            area: 8000.658
          },
          {
            positions: [
              { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },
              { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }
            ],
            area: 200000.55
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const labels = []
        for (var i = 0; i < 100; i++) {
          let label = {}
          label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          label.text = i.toString()
          labels.push(label)
        }
        this.labels = labels
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
| blendOption             | Number  |         | `optional` The billboard blending option. The default is used for rendering both opaque and translucent billboards. However, if either all of the billboards are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x.                                 |
| scene                   | Object  |         | `optional` Must be passed in for billboards that use the height reference property or will be depth tested against the globe. |
| labels                  | Array   | `[]`    | `optional` Specifies an array of label collections. The array object structure is a [`vc-primitive-label`](./#/zh/primitive/vc-primitive-label) component property. |

---

- Refer to the official document: **[LabelCollection](https://cesium.com/docs/cesiumjs-ref-doc/LabelCollection.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse is pressed on the collection of primitives. |
| mouseup | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse bounces on the collection of primitives. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the collection of primitives. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the collection of primitives.|
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the collection of primitives. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on the collection of primitives. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to the collection of primitives. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the collection of primitives. |
---
