# CorridorGraphics

The `vc-graphics-corridor` component is used to load corridor objects, which is a shape defined by a centerline and width that conforms to the curvature of the globe. It can be placed on the surface or at altitude and can optionally be extruded into a volume.. Need to be used as a subcomponent of `vc-entity`.

## Example

### Load CorridorGraphics with vc-graphics-corridor

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :name="name1" :description="description" :corridor.sync="corridor1">
          <vc-graphics-corridor :positions="positions1" :material="material1" :width="200000.0"></vc-graphics-corridor>
        </vc-entity>
        <vc-entity :name="name2" :description="description" :corridor.sync="corridor2">
          <vc-graphics-corridor :positions="positions2" :height="100000.0" :width="200000.0" :cornerType="0"
            material="GREEN" :outline="true"></vc-graphics-corridor>
        </vc-entity>
        <vc-entity :name="name3" :description="description" :corridor.sync="corridor3">
          <vc-graphics-corridor :positions="positions3" :material="material3" outlineColor="WHITE" :outline="true"
            :height="200000.0" :extrudedHeight="100000.0" :width="200000.0" :cornerType="cornerType3"></vc-graphics-corridor>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',

          corridor1: {},
          name1: 'Red corridor on surface with rounded corners',
          positions1: [{ lng: 100.0, lat: 40.0 }, { lng: 105.0, lat: 40.0 }, { lng: 105.0, lat: 35.0 }],
          material1: {},

          corridor2: {},
          name2: 'Green corridor at height with mitered corners and outline',
          positions2: [{ lng: 90.0, lat: 40.0 }, { lng: 95.0, lat: 40.0 }, { lng: 95.0, lat: 35.0 }],
          cornerType2: 0,

          corridor3: {},
          name3: 'Blue extruded corridor with beveled corners and outline',
          positions3: [{ lng: 80.0, lat: 40.0 }, { lng: 85.0, lat: 40.0 }, { lng: 85.0, lat: 35.0 }],
          cornerType3: 0,
          material3: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.material1 = Cesium.Color.RED.withAlpha(0.5)

          this.cornerType2 = Cesium.CornerType.MITERED

          this.cornerType3 = Cesium.CornerType.BEVELED
          this.material3 =  Cesium.Color.BLUE.withAlpha(0.5)
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
      <vc-entity :name="name1" :description="description" :corridor.sync="corridor1">
        <vc-graphics-corridor :positions="positions1" :material="material1" :width="200000.0"></vc-graphics-corridor>
      </vc-entity>
      <vc-entity :name="name2" :description="description" :corridor.sync="corridor2">
        <vc-graphics-corridor
          :positions="positions2"
          :height="100000.0"
          :width="200000.0"
          :cornerType="0"
          material="GREEN"
          :outline="true"
        ></vc-graphics-corridor>
      </vc-entity>
      <vc-entity :name="name3" :description="description" :corridor.sync="corridor3">
        <vc-graphics-corridor
          :positions="positions3"
          :material="material3"
          outlineColor="WHITE"
          :outline="true"
          :height="200000.0"
          :extrudedHeight="100000.0"
          :width="200000.0"
          :cornerType="cornerType3"
        ></vc-graphics-corridor>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',

        corridor1: {},
        name1: 'Red corridor on surface with rounded corners',
        positions1: [
          { lng: 100.0, lat: 40.0 },
          { lng: 105.0, lat: 40.0 },
          { lng: 105.0, lat: 35.0 }
        ],
        material1: {},

        corridor2: {},
        name2: 'Green corridor at height with mitered corners and outline',
        positions2: [
          { lng: 90.0, lat: 40.0 },
          { lng: 95.0, lat: 40.0 },
          { lng: 95.0, lat: 35.0 }
        ],
        cornerType2: 0,

        corridor3: {},
        name3: 'Blue extruded corridor with beveled corners and outline',
        positions3: [
          { lng: 80.0, lat: 40.0 },
          { lng: 85.0, lat: 40.0 },
          { lng: 85.0, lat: 35.0 }
        ],
        cornerType3: 0,
        material3: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = Cesium.Color.RED.withAlpha(0.5)

        this.cornerType2 = Cesium.CornerType.MITERED

        this.cornerType3 = Cesium.CornerType.BEVELED
        this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the corridor. |
| positions | Array | | `optional` A Property specifying the array of Cartesian3 positions that define the centerline of the corridor. **structure:[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]**|
| width | Number | | `optional` A numeric Property specifying the distance between the edges of the corridor. |
| height | Number | `0` | `optional` A numeric Property specifying the altitude of the corridor relative to the ellipsoid surface. |
| heightReference | Number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| extrudedHeight | Number | | `optional` A numeric Property specifying the altitude of the corridor's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | Number | | `optional` A Property specifying what the extrudedHeight is relative to.  **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| cornerType | Number | `0` | `optional` A CornerType Property specifying the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |
| granularity | Number | RADIANS_PER_DEGREE | `optional` A numeric Property specifying the distance between each latitude and longitude. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the corridor is filled with the provided material. |
| material | Object\|String\|Array | `'white'` | `optional` A Property specifying the material used to fill the corridor. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the corridor is outlined. |
| outlineColor | Object\|String\|Array | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the corridor casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this corridor will be displayed. **structure:{ near: number, far: number }** |
| classificationType | Number | `2` | `optional` An enum Property specifying whether this corridor will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3** |
| zIndex | Number | | `optional` A Property specifying the zIndex of the corridor, used for ordering. Only has an effect if height and extrudedHeight are undefined, and if the corridor is static. |

---

- Refer to the official document: [CorridorGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
