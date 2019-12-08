# BoxGraphics

The `vc-graphics-box` component is used to load a box and needs to be used as a subcomponent of `vc-entity`.

## Example

### Load BoxGraphics with vc-graphics-box

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity ref="entity1" :position="position1" :description="description" :box.sync="box1">
          <vc-graphics-box :dimensions="dimensions1" :material="material1"></vc-graphics-box>
        </vc-entity>
        <vc-entity ref="entity2" :position="position2" :description="description" :box.sync="box2">
          <vc-graphics-box
            :dimensions="dimensions2"
            :material="material2"
            :outlineColor="outlineColor2"
            :outline="true"
          ></vc-graphics-box>
        </vc-entity>
        <vc-entity ref="entity3" :position="position3" :description="description" :box.sync="box3">
          <vc-graphics-box :dimensions="dimensions3" :outlineColor="outlineColor3" :fill="false" :outline="true"></vc-graphics-box>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          box1: {},
          position1: { lng: 105.0, lat: 40.0, height: 300000.0 },
          dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },
          material1: 'BLUE',

          box2: {},
          position2: { lng: 110.0, lat: 40.0, height: 300000.0 },
          dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },
          material2: {},
          outlineColor2: 'BLACK',

          box3: {},
          position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
          dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },
          outlineColor3: 'YELLOW'
        }
      },
      mounted() {
        Promise.all([this.$refs.entity1.createPromise, this.$refs.entity2.createPromise, this.$refs.entity3.createPromise]).then(
          (instances) => {
            instances[0].viewer.zoomTo(instances[0].viewer.entities)
          }
        )
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material2 = Cesium.Color.RED.withAlpha(0.5)
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
      <vc-entity ref="entity1" :position="position1" :description="description" :box.sync="box1">
        <vc-graphics-box :dimensions="dimensions1" :material="material1"></vc-graphics-box>
      </vc-entity>
      <vc-entity ref="entity2" :position="position2" :description="description" :box.sync="box2">
        <vc-graphics-box
          :dimensions="dimensions2"
          :material="material2"
          :outlineColor="outlineColor2"
          :outline="true"
        ></vc-graphics-box>
      </vc-entity>
      <vc-entity ref="entity3" :position="position3" :description="description" :box.sync="box3">
        <vc-graphics-box :dimensions="dimensions3" :outlineColor="outlineColor3" :fill="false" :outline="true"></vc-graphics-box>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        box1: {},
        position1: { lng: 105.0, lat: 40.0, height: 300000.0 },
        dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material1: 'BLUE',

        box2: {},
        position2: { lng: 110.0, lat: 40.0, height: 300000.0 },
        dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material2: {},
        outlineColor2: 'BLACK',

        box3: {},
        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },
        outlineColor3: 'YELLOW'
      }
    },
    mounted() {
      Promise.all([this.$refs.entity1.createPromise, this.$refs.entity2.createPromise, this.$refs.entity3.createPromise]).then(
        (instances) => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        }
      )
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material2 = Cesium.Color.RED.withAlpha(0.5)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------------ | ------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the box. |
| dimensions | Object | | `optional` A Cartesian3 Property specifying the length, width, and height of the box. **structure: { x: number, y: number, z: number }** |
| heightReference | Number | `0` | `optional` A Property specifying what the height from the entity position is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| fill | Boolean | true | `optional` A boolean Property specifying whether the box is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the box. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the box is outlined. |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the box casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this box will be displayed. **structure: { near: number, far: number }** |

---

- Refer to the official document: **[BoxGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
