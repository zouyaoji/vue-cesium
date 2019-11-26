# BillboardCollection

The `vc-collection-primitive-billboard` component is used to load a renderable collection of billboards. Billboards are viewport-aligned images positioned in the 3D scene.

## Example

### Load BillboardCollection with `vc-collection-primitive-billboard`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-billboard :billboards="billboards"></vc-collection-primitive-billboard>
        <vc-collection-primitive-billboard>
          <vc-primitive-billboard
            :image="image"
            :scale="0.4"
            :show="show"
            :distanceDisplayCondition="distanceDisplayCondition"
            :horizontalOrigin="horizontalOrigin"
            :position="position"
          ></vc-primitive-billboard>
        </vc-collection-primitive-billboard>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          billboards: [],
          id: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 108, lat: 35, height: 10000 },
          billboard: {},
          show: true,
          distanceDisplayCondition: { near: 0, far: 20000000 },
          horizontalOrigin: 0
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const billboards = []
          for (var i = 0; i < 500; i++) {
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
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-collection-primitive-billboard :billboards="billboards"></vc-collection-primitive-billboard>
      <vc-collection-primitive-billboard>
        <vc-primitive-billboard
          :image="image"
          :scale="0.4"
          :show="show"
          :distanceDisplayCondition="distanceDisplayCondition"
          :horizontalOrigin="horizontalOrigin"
          :position="position"
        ></vc-primitive-billboard>
      </vc-collection-primitive-billboard>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        billboards: [],
        id: 'Hello Vue Cesium',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 108, lat: 35, height: 10000 },
        billboard: {},
        show: true,
        distanceDisplayCondition: { near: 0, far: 20000000 },
        horizontalOrigin: 0
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const billboards = []
        for (var i = 0; i < 500; i++) {
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
| billboards              | Array   | `[]`    | `optional` Specifies an array of label collections. The array object structure is a [`vc-primitive-billboard`](./#/zh/primitive/vc-primitive-billboard) component property. |

---

- Refer to the official document: **[BillboardCollection](https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
