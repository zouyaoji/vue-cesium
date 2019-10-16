# BillboardCollection

`billboard-collection` Used to add billboard primitive, or add tags by mounting the [`billboard-primitive`](./#/zh/primitives/billboard-primitive) component.

## Example

### Add some billboard to viewer by BillboardCollection

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <billboard-collection :billboards="billboards">
          </billboard-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          billboards: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const billboards = [];
          for (var i = 0; i < 1000; i++) {
            let billboard = {}
            billboard.position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
            billboard.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
            billboard.scale = 0.1
            billboards.push(billboard)
          }
          this.billboards = billboards
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
      <billboard-collection :billboards="billboards"> </billboard-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        billboards: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const billboards = []
        for (var i = 0; i < 1000; i++) {
          let billboard = {}
          billboard.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard.scale = 0.1
          billboards.push(billboard)
        }
        this.billboards = billboards
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
| billboards              | Array   | `[]`    | `optional` Specifies an array of label collections. The array object structure is a [`billboard-primitive`](./#/zh/primitives/billboard-primitive) component property. |

---

- Reference official document [BillboardCollection](https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html).

## Events

| name  | parameter        | description                                                                                 |
| ----- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
