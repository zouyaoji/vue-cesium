# CylinderGraphics

`cylinder-graphics` Add an entity containing a cylinder object to the viewer as a subcomponent of `entity`. Describes a cylinder, truncated cone, or cone defined by a length, top radius, and bottom radius. The center position and orientation are determined by the containing Entity. As shown in the example below.

## Examples

### add a CylinderGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :cylinder.sync="cylinder1">
          <cylinder-graphics
            :length="400000.0"
            :topRadius="200000.0"
            :bottomRadius="200000.0"
            :material="material1"
            :outline="true"
            :outlineColor="outlineColor1"
          ></cylinder-graphics>
        </entity>
        <entity :position="position2" :description="description" :cylinder.sync="cylinder2">
          <cylinder-graphics
            :length="400000.0"
            :topRadius="0.0"
            :bottomRadius="200000.0"
            :material="material2"
            @ready="subReady"
          ></cylinder-graphics>
        </entity>
      </cesium-viewer>
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
    <cesium-viewer @ready="ready">
      <entity :position="position1" :description="description" :cylinder.sync="cylinder1">
        <cylinder-graphics
          :length="400000.0"
          :topRadius="200000.0"
          :bottomRadius="200000.0"
          :material="material1"
          :outline="true"
          :outlineColor="outlineColor1"
        ></cylinder-graphics>
      </entity>
      <entity :position="position2" :description="description" :cylinder.sync="cylinder2">
        <cylinder-graphics
          :length="400000.0"
          :topRadius="0.0"
          :bottomRadius="200000.0"
          :material="material2"
          @ready="subReady"
        ></cylinder-graphics>
      </entity>
    </cesium-viewer>
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

- Reference official document [CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html)

## Events

| name              | parameter        | description                                                                                 |
| ----------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
| definitionChanged |                  | Gets the event that is raised whenever a property or sub-property is changed or modified.   |
