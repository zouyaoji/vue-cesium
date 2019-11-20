# CylinderGraphics

The vc-graphics-cylinder`component is used to load cylinder, cone, or truncated cone. Need to be used as a subcomponent of vc-entity`.

## Example

### Load CylinderGraphics with vc-graphics-cylinder

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :position="position1" :description="description" :cylinder.sync="cylinder1">
          <vc-graphics-cylinder :length="400000.0" :topRadius="200000.0" :bottomRadius="200000.0" :material="material1"
            :outline="true" :outlineColor="outlineColor1"></vc-graphics-cylinder>
        </vc-entity>
        <vc-entity :position="position2" :description="description" :cylinder.sync="cylinder2">
          <vc-graphics-cylinder :length="400000.0" :topRadius="0.0" :bottomRadius="200000.0" :material="material2" @ready="subReady"></vc-graphics-cylinder>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          cylinder1: {},
          position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
          outlineColor1: 'DARK_GREEN',
          material1: {},

          cylinder2: {},
          position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
          material2: 'RED'
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
        },
        subReady(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          viewer.zoomTo(viewer.entities)
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
      <vc-entity :position="position1" :description="description" :cylinder.sync="cylinder1">
        <vc-graphics-cylinder
          :length="400000.0"
          :topRadius="200000.0"
          :bottomRadius="200000.0"
          :material="material1"
          :outline="true"
          :outlineColor="outlineColor1"
        ></vc-graphics-cylinder>
      </vc-entity>
      <vc-entity :position="position2" :description="description" :cylinder.sync="cylinder2">
        <vc-graphics-cylinder
          :length="400000.0"
          :topRadius="0.0"
          :bottomRadius="200000.0"
          :material="material2"
          @ready="subReady"
        ></vc-graphics-cylinder>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        cylinder1: {},
        position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
        outlineColor1: 'DARK_GREEN',
        material1: {},

        cylinder2: {},
        position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
        material2: 'RED'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the cylinder. |
| length | Array | | `optional` A numeric Property specifying the length of the cylinder. |
| topRadius | Number | | `optional` A numeric Property specifying the radius of the top of the cylinder. |
| bottomRadius | Number | | `optional` A numeric Property specifying the radius of the bottom of the cylinder. |
| heightReference | Number | `0` | `optional` A Property specifying what the height from the entity position is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the cylinder is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the cylinder. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the cylinder is outlined. |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| numberOfVerticalLines | Number | `16` | `optional` A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline. |
| slices | Number | `128` | `optional` The number of edges around the perimeter of the cylinder. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the cylinder casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this cylinder will be displayed. **structure: { near: number, far: number }** |

---

- Refer to the official document: [CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
