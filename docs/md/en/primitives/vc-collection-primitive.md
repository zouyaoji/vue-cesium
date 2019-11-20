# PrimitiveCollection

The `vc-collection-primitive` component is used to load a collection of primitives.This is most often used with Scene#primitives, but PrimitiveCollection is also a primitive itself so collections can be added to collections forming a hierarchy.

## Example

### Load PrimitiveCollection with `vc-collection-primitive`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive :show="show">
          <vc-collection-primitive-billboard :billboards="billboards1"></vc-collection-primitive-billboard>
          <vc-collection-primitive>
            <vc-collection-primitive-billboard :billboards="billboards2"></vc-collection-primitive-billboard>
          </vc-collection-primitive>
        </vc-collection-primitive>
        <vc-collection-primitive>
          <vc-primitive-model :url="url" :modelMatrix="modelMatrix" :scale="10000" :minimumPixelSize="128" :maximumScale="200000">
          </vc-primitive-model>
        </vc-collection-primitive>
      </vc-viewer>
      <div class="demo-tool">
        <span>{{ show ? 'Hide' : 'Show' }}</span>
        <md-switch v-model="show"></md-switch>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          show: true,
          billboards1: [],
          billboards2: [],
          url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
          modelMatrix: {}
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const billboards1 = []
          const billboards2 = []
          for (var i = 0; i < 100; i++) {
            let billboard1 = {}
            billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
            billboard1.scale = 0.1
            billboards1.push(billboard1)

            let billboard2 = {}
            billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
            billboard2.scale = 0.15
            billboards2.push(billboard2)
          }
          this.billboards1 = billboards1
          this.billboards2 = billboards2
          this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
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
      <vc-collection-primitive :show="show">
        <vc-collection-primitive-billboard :billboards="billboards1"></vc-collection-primitive-billboard>
        <vc-collection-primitive>
          <vc-collection-primitive-billboard :billboards="billboards2"></vc-collection-primitive-billboard>
        </vc-collection-primitive>
      </vc-collection-primitive>
      <vc-collection-primitive>
        <vc-primitive-model :url="url" :modelMatrix="modelMatrix" :scale="10000" :minimumPixelSize="128" :maximumScale="200000">
        </vc-primitive-model>
      </vc-collection-primitive>
    </vc-viewer>
    <div class="demo-tool">
      <span>{{ show ? 'Hide' : 'Show' }}</span>
      <md-switch v-model="show"></md-switch>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        billboards1: [],
        billboards2: [],
        url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
        modelMatrix: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const billboards1 = []
        const billboards2 = []
        for (var i = 0; i < 100; i++) {
          let billboard1 = {}
          billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard1.scale = 0.1
          billboards1.push(billboard1)

          let billboard2 = {}
          billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard2.scale = 0.15
          billboards2.push(billboard2)
        }
        this.billboards1 = billboards1
        this.billboards2 = billboards2
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      }
    }
  }
</script>
```

## Instance Properties

| name              | type    | default | description                                                                                |
| ----------------- | ------- | ------- | ------------------------------------------------------------------------------------------ |
| show              | Boolean | `true`  | `optional` Determines if the primitives in the collection will be shown.                   |
| destroyPrimitives | Boolean | `true`  | `optional` Determines if primitives in the collection are destroyed when they are removed. |

---

- Refer to the official document: [PrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html)

## Events

| name  | parameter                      | description                                                                                                       |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
