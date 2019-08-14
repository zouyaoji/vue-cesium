# WallGraphics

`wall-graphics` Add an entity containing a wall object to the viewer as a subcomponent of `entity`. Describes a two dimensional wall defined as a line strip and optional maximum and minimum heights. The wall conforms to the curvature of the globe and can be placed along the surface or at altitude. As shown in the example below.

## Examples

### add a WallGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :description="description" :wall.sync="wall1">
          <wall-graphics
            :positions="positions1"
            :material="material1"
            :minimumHeights="[100000.0, 100000.0]"
          ></wall-graphics>
        </entity>
        <entity :description="description" :wall.sync="wall2">
          <wall-graphics :positions="positions2" :material="material2" :outline="true" heightPositions></wall-graphics>
        </entity>
        <entity :description="description" :wall.sync="wall3">
          <wall-graphics
            :positions="positions3"
            :material="material3"
            :outline="true"
            :outlineColor="outlineColor3"
            :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000]"
            :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]"
            @ready="subReady"
          ></wall-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          wall1: {},
          positions1: [],
          material1: 'RED',

          wall2: {},
          positions2: [
            { lng: -107.0, lat: 43.0, height: 100000.0 },
            { lng: -97.0, lat: 43.0, height: 100000.0 },
            { lng: -97.0, lat: 40.0, height: 100000.0 },
            { lng: -107.0, lat: 40.0, height: 100000.0 },
            { lng: -107.0, lat: 43.0, height: 100000.0 }
          ],
          material2: {},

          wall3: {},
          positions3: [
            { lng: -115.0, lat: 50.0 },
            { lng: -112.0, lat: 50.0 },
            { lng: -107.5, lat: 50.0 },
            { lng: -105.0, lat: 50.0 },
            { lng: -102.5, lat: 50.0 },
            { lng: -100.0, lat: 50.0 },
            { lng: -97.5, lat: 50.0 },
            { lng: -95.0, lat: 50.0 },
            { lng: -92.5, lat: 50.0 },
            { lng: -90.0, lat: 50.0 }
          ],
          material3: {},
          outlineColor3: {}
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.positions1 = [{ lng: -115.0, lat: 44.0, height: 200000.0 }, { lng: -90.0, lat: 44.0, height: 200000.0 }]
          this.material1 = Cesium.Color.RED

          this.material2 = Cesium.Color.GREEN

          this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
          this.outlineColor3 = Cesium.Color.BLACK
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
      <entity :description="description" :wall.sync="wall1">
        <wall-graphics
          :positions="positions1"
          :material="material1"
          :minimumHeights="[100000.0, 100000.0]"
        ></wall-graphics>
      </entity>
      <entity :description="description" :wall.sync="wall2">
        <wall-graphics :positions="positions2" :material="material2" :outline="true" heightPositions></wall-graphics>
      </entity>
      <entity :description="description" :wall.sync="wall3">
        <wall-graphics
          :positions="positions3"
          :material="material3"
          :outline="true"
          :outlineColor="outlineColor3"
          :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000]"
          :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]"
          @ready="subReady"
        ></wall-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        wall1: {},
        positions1: [],
        material1: 'RED',

        wall2: {},
        positions2: [
          { lng: -107.0, lat: 43.0, height: 100000.0 },
          { lng: -97.0, lat: 43.0, height: 100000.0 },
          { lng: -97.0, lat: 40.0, height: 100000.0 },
          { lng: -107.0, lat: 40.0, height: 100000.0 },
          { lng: -107.0, lat: 43.0, height: 100000.0 }
        ],
        material2: {},

        wall3: {},
        positions3: [
          { lng: -115.0, lat: 50.0 },
          { lng: -112.0, lat: 50.0 },
          { lng: -107.5, lat: 50.0 },
          { lng: -105.0, lat: 50.0 },
          { lng: -102.5, lat: 50.0 },
          { lng: -100.0, lat: 50.0 },
          { lng: -97.5, lat: 50.0 },
          { lng: -95.0, lat: 50.0 },
          { lng: -92.5, lat: 50.0 },
          { lng: -90.0, lat: 50.0 }
        ],
        material3: {},
        outlineColor3: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.positions1 = [{ lng: -115.0, lat: 44.0, height: 200000.0 }, { lng: -90.0, lat: 44.0, height: 200000.0 }]
        this.material1 = Cesium.Color.RED

        this.material2 = Cesium.Color.GREEN

        this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
        this.outlineColor3 = Cesium.Color.BLACK
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
| ------------------------ | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the wall. |
| positions | Array | | `optional` A Property specifying the array of Cartesian3 positions which define the top of the wall. **structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| minimumHeights | Array | | `optional` A Property specifying an array of heights to be used for the bottom of the wall instead of the globe surface. |
| maximumHeights | Array | | `optional` A Property specifying an array of heights to be used for the top of the wall instead of the height of each position. |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude point. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the wall is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the wall. |
| outline | Boolean | false | `optional` A boolean Property specifying whether the wall is outlined. |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the wall casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this wall will be displayed. **structure:{ near: number, far: number }** |

---

- Reference official document [WallGraphics](https://cesiumjs.org/Cesium/Build/Documentation/WallGraphics.html)

## Events

| name              | parameter        | description                                                                                    |
| ----------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
| definitionChanged |                  | Gets the event that is raised whenever a property or sub-property is changed or modified.      |
