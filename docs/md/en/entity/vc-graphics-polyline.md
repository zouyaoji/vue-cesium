# PolylineGraphics

The `vc-graphics-polyline` component is used to load a polyline which the first two positions define a line segment, and each additional position defines a line segment from the previous position. The segments can be linear connected points, great arcs, or clamped to terrain.

## Example

### Load PolylineGraphics with `vc-graphics-polyline`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :polyline.sync="polyline1">
          <vc-graphics-polyline :positions="positions1" :material="material1" :width="5" :clampToGround="false" heightPositions></vc-graphics-polyline>
        </vc-entity>
        <vc-entity :polyline.sync="polyline2">
          <vc-graphics-polyline :positions="positions2" :material="material2" :width="10"></vc-graphics-polyline>
        </vc-entity>
        <vc-entity :polyline.sync="polyline3">
          <vc-graphics-polyline :positions="positions3" :material="material3" :width="10"></vc-graphics-polyline>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          polyline1: {},
          positions1: [
            { lng: 90, lat: 20, height: 10000 },
            { lng: 120, lat: 20, height: 10000 }
          ],
          material1: undefined,
          polyline2: {},
          positions2: [
            { lng: 90, lat: 30, height: 10000 },
            { lng: 120, lat: 30, height: 10000 }
          ],
          material2: undefined,
          polyline3: {},
          positions3: [],
          material3: undefined
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material1 = Cesium.Color.RED
          this.material2 = new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.2,
            color: Cesium.Color.BLUE
          })
          this.material3 = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
          this.positions3 = [
            { lng: 90, lat: 40, height: 10000 },
            { lng: 120, lat: 40, height: 10000 }
          ]
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
      <vc-entity :polyline.sync="polyline1">
        <vc-graphics-polyline :positions="positions1" :material="material1" :width="5" :clampToGround="false" heightPositions></vc-graphics-polyline>
      </vc-entity>
      <vc-entity :polyline.sync="polyline2">
        <vc-graphics-polyline :positions="positions2" :material="material2" :width="10"></vc-graphics-polyline>
      </vc-entity>
      <vc-entity :polyline.sync="polyline3">
        <vc-graphics-polyline :positions="positions3" :material="material3" :width="10"></vc-graphics-polyline>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polyline1: {},
        positions1: [
          { lng: 90, lat: 20, height: 10000 },
          { lng: 120, lat: 20, height: 10000 }
        ],
        material1: undefined,
        polyline2: {},
        positions2: [
          { lng: 90, lat: 30, height: 10000 },
          { lng: 120, lat: 30, height: 10000 }
        ],
        material2: undefined,
        polyline3: {},
        positions3: [],
        material3: undefined
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = Cesium.Color.RED
        this.material2 = new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.2,
          color: Cesium.Color.BLUE
        })
        this.material3 = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
        this.positions3 = [
          { lng: 90, lat: 40, height: 10000 },
          { lng: 120, lat: 40, height: 10000 }
        ]
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the polyline. |
| positions | Array | | `optional` A Property specifying the array of Cartesian3 positions that define the line strip. **structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | `1.0` | `optional` A numeric Property specifying the width in pixels. |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude if arcType is not ArcType.NONE. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to draw the polyline. |
| depthFailMaterial | Object\|String\|Array | | `optional` A property specifying the material used to draw the polyline when it is below the terrain. |
| arcType | Number | `1` | `optional` The type of line the polyline segments must follow. **NONE: 0, GEODESIC: 1, RHUMB: 2** |
| clampToGround | Boolean | `false` | `optional` A boolean Property specifying whether the Polyline should be clamped to the ground. |
| shadows | Number | | `optional` An enum Property specifying whether the polyline casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| classificationType | Number | `2` | `optional` An enum Property specifying whether this polyline will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this polyline will be displayed. **structure: { near: number, far: number }** |
| zIndex | Number | `0` | `optional` A Property specifying the zIndex used for ordering ground geometry. Only has an effect if `clampToGround` is true and polylines on terrain is supported. |

---

- Refer to the official document: [PolylineGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
