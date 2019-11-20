# PolylineVolumeGraphics

The `vc-graphics-polyline-volume` component is used to load a polyline volume defined as a line strip and corresponding two dimensional shape which is extruded along it. The resulting volume conforms to the curvature of the globe.

## Example

### Load PolylineVolumeGraphics with `vc-graphics-polyline-volume`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :polylineVolume.sync="polylineVolume1">
          <vc-graphics-polyline-volume :positions="positions1" :shape="shape1" :material="material1"></vc-graphics-polyline-volume>
        </vc-entity>
        <vc-entity :polylineVolume.sync="polylineVolume2">
          <vc-graphics-polyline-volume
            :positions="positions2"
            :shape="shape2"
            :material="material2"
            :outline="true"
            :outlineColor="outlineColor2"
            :cornerType="cornerType2"
          ></vc-graphics-polyline-volume>
        </vc-entity>
        <vc-entity :polylineVolume.sync="polylineVolume3">
          <vc-graphics-polyline-volume
            :positions="positions3"
            :shape="shape3"
            :material="material3"
            :cornerType="cornerType3"
            @ready="subReady"
          ></vc-graphics-polyline-volume>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          polylineVolume1: {},
          positions1: [
            { lng: -85.0, lat: 32.0 },
            { lng: -85.0, lat: 36.0 },
            { lng: -89.0, lat: 36.0 }
          ],
          shape1: [],
          material1: 'RED',
          polylineVolume2: {},
          positions2: [
            { lng: -90.0, lat: 32.0, height: 0.0 },
            { lng: -90.0, lat: 36.0, height: 100000.0 },
            { lng: -94.0, lat: 36.0, height: 0.0 }
          ],
          shape2: [
            { x: -50000, y: -50000 },
            { x: 50000, y: -50000 },
            { x: -50000, y: 50000 },
            { x: -50000, y: 50000 }
          ],
          material2: undefined,
          cornerType2: 0,
          outlineColor2: 'BLACK',
          polylineVolume3: {},
          shape3: [],
          positions3: [
            { lng: -95.0, lat: 32.0, height: 0.0 },
            { lng: -95.0, lat: 36.0, height: 100000.0 },
            { lng: -99.0, lat: 36.0, height: 200000.0 }
          ],
          material3: 'BLUE',
          cornerType3: 0
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance

          this.shape1 = this.computeCircle(60000.0)

          this.cornerType2 = Cesium.CornerType.BEVELED
          this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
          this.outlineColor2 = Cesium.Color.BLACK

          this.shape3 = this.computeStar(7, 70000, 50000)
          this.cornerType3 = Cesium.CornerType.MITERED
        },
        computeCircle(radius) {
          let positions = []
          for (let i = 0; i < 360; i++) {
            let radians = Cesium.Math.toRadians(i)
            positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
          }
          return positions
        },
        computeStar(arms, rOuter, rInner) {
          let angle = Math.PI / arms
          let length = 2 * arms
          let positions = new Array(length)
          for (let i = 0; i < length; i++) {
            let r = i % 2 === 0 ? rOuter : rInner
            positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }
          }
          return positions
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
      <vc-entity :polylineVolume.sync="polylineVolume1">
        <vc-graphics-polyline-volume :positions="positions1" :shape="shape1" :material="material1"></vc-graphics-polyline-volume>
      </vc-entity>
      <vc-entity :polylineVolume.sync="polylineVolume2">
        <vc-graphics-polyline-volume
          :positions="positions2"
          :shape="shape2"
          :material="material2"
          :outline="true"
          :outlineColor="outlineColor2"
          :cornerType="cornerType2"
        ></vc-graphics-polyline-volume>
      </vc-entity>
      <vc-entity :polylineVolume.sync="polylineVolume3">
        <vc-graphics-polyline-volume
          :positions="positions3"
          :shape="shape3"
          :material="material3"
          :cornerType="cornerType3"
          @ready="subReady"
        ></vc-graphics-polyline-volume>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polylineVolume1: {},
        positions1: [
          { lng: -85.0, lat: 32.0 },
          { lng: -85.0, lat: 36.0 },
          { lng: -89.0, lat: 36.0 }
        ],
        shape1: [],
        material1: 'RED',
        polylineVolume2: {},
        positions2: [
          { lng: -90.0, lat: 32.0, height: 0.0 },
          { lng: -90.0, lat: 36.0, height: 100000.0 },
          { lng: -94.0, lat: 36.0, height: 0.0 }
        ],
        shape2: [
          { x: -50000, y: -50000 },
          { x: 50000, y: -50000 },
          { x: -50000, y: 50000 },
          { x: -50000, y: 50000 }
        ],
        material2: undefined,
        cornerType2: 0,
        outlineColor2: 'BLACK',
        polylineVolume3: {},
        shape3: [],
        positions3: [
          { lng: -95.0, lat: 32.0, height: 0.0 },
          { lng: -95.0, lat: 36.0, height: 100000.0 },
          { lng: -99.0, lat: 36.0, height: 200000.0 }
        ],
        material3: 'BLUE',
        cornerType3: 0
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance

        this.shape1 = this.computeCircle(60000.0)

        this.cornerType2 = Cesium.CornerType.BEVELED
        this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
        this.outlineColor2 = Cesium.Color.BLACK

        this.shape3 = this.computeStar(7, 70000, 50000)
        this.cornerType3 = Cesium.CornerType.MITERED
      },
      computeCircle(radius) {
        let positions = []
        for (let i = 0; i < 360; i++) {
          let radians = Cesium.Math.toRadians(i)
          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
        }
        return positions
      },
      computeStar(arms, rOuter, rInner) {
        let angle = Math.PI / arms
        let length = 2 * arms
        let positions = new Array(length)
        for (let i = 0; i < length; i++) {
          let r = i % 2 === 0 ? rOuter : rInner
          positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }
        }
        return positions
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
| ---- | ---- | ------- | ----------- |
| show | Boolean | true | `optional` A boolean Property specifying the visibility of the volume. |
| positions | Array | | `optional` A Property specifying the array of Cartesian3 positions which define the line strip. **struct: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| shape | Array | | `optional` A Property specifying the array of Cartesian2 positions which define the shape to be extruded. **struct: [{ x: number, y: number },...,{ x: number, y: number }]** |
| cornerType | Number | | `optional` A CornerType Property specifying the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude point. |
| fill | Boolean | true | `optional` A boolean Property specifying whether the volume is filled with the provided material. |
| material | Object\|String\|Array | | `optional` A Property specifying the material used to fill the volume. |
| outline | Boolean | false | `optional` A boolean Property specifying whether the volume is outlined. |
| outlineColor | Object\|String\|Array | | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | 1.0 | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | | `optional` An enum Property specifying whether the box casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this volume will be displayed. **struct: { near: number, far: number }** |

---

- Refer to the official document: [PolylineVolumeGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
