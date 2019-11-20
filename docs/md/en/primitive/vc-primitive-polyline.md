# Polyline

The `vc-primitive-polyline` component is used to load a renderable polyline, that is created and rendered using a `vc-collection-primitive-polyline`.

## Example

### Load polylines with `vc-primitive-polyline`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" scene3DOnly>
        <vc-collection-primitive-polyline>
          <vc-primitive-polyline :positions="positions1" :material="material1" :width="5"></vc-primitive-polyline>
          <vc-primitive-polyline :positions="positions2" :material="material2" :width="10"></vc-primitive-polyline>
          <vc-primitive-polyline :positions="positions3" :material="material3" :width="10"></vc-primitive-polyline>
        </vc-collection-primitive-polyline>
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
          positions3: [
            { lng: 90, lat: 40, height: 10000 },
            { lng: 120, lat: 40, height: 10000 }
          ],
          material3: undefined,
          polylines: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material1 = new Cesium.Material({
            fabric: {
              type: 'Color',
              uniforms: {
                color: Cesium.Color.RED
              }
            }
          })
          this.material2 = new Cesium.Material({
            fabric: {
              type: 'PolylineGlow',
              uniforms: {
                color: Cesium.Color.BLUE
              }
            }
          })
          this.material3 = new Cesium.Material({
            fabric: {
              type: 'PolylineArrow',
              uniforms: {
                color: Cesium.Color.PURPLE
              }
            }
          })
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" scene3DOnly>
      <vc-collection-primitive-polyline>
        <vc-primitive-polyline :positions="positions1" :material="material1" :width="5"></vc-primitive-polyline>
        <vc-primitive-polyline :positions="positions2" :material="material2" :width="10"></vc-primitive-polyline>
        <vc-primitive-polyline :positions="positions3" :material="material3" :width="10"></vc-primitive-polyline>
      </vc-collection-primitive-polyline>
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
        positions3: [
          { lng: 90, lat: 40, height: 10000 },
          { lng: 120, lat: 40, height: 10000 }
        ],
        material3: undefined,
        polylines: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = new Cesium.Material({
          fabric: {
            type: 'Color',
            uniforms: {
              color: Cesium.Color.RED
            }
          }
        })
        this.material2 = new Cesium.Material({
          fabric: {
            type: 'PolylineGlow',
            uniforms: {
              color: Cesium.Color.BLUE
            }
          }
        })
        this.material3 = new Cesium.Material({
          fabric: {
            type: 'PolylineArrow',
            uniforms: {
              color: Cesium.Color.PURPLE
            }
          }
        })
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------------ | ------- | ------------------ | ------------------------------------------- |
| show | Boolean | true | `optional` true if this polyline will be shown; otherwise, false. |
| width | Number | 1.0 | `optional` The width of the polyline in pixels. |
| loop | Boolean | false | `optional` Whether a line segment will be added between the last and first line positions to make this line a loop. |
| material | Object | Material.ColorType | `optional` The material. |
| positions | Array | | `optional` The positions. |
| id | Object | | `optional` The user-defined object to be returned when this polyline is picked. |
| distanceDisplayCondition | Object | | `optional` The condition specifying at what distance from the camera that this polyline will be displayed. |

---

- Refer to the official document: [Polyline](https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html).

## Events

| name  | parameter                      | description                                                                                                       |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
