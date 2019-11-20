# PointPrimitive

The `vc-primitive-point` component is used to load a graphical point positioned in the 3D scene, that is created and rendered using a `vc-collection-primitive-point`.

## Example

### Load points with `vc-primitive-point`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-point>
          <template v-for="(polyline, index) of polylines">
            <template v-for="(position, subIndex) of polyline.positions">
              <vc-primitive-point
                :position="position"
                :key="'point' + index + 'position' + subIndex"
                :color="colorPoint"
                :pixelSize="8"
              ></vc-primitive-point>
            </template>
          </template>
        </vc-collection-primitive-point>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          colorPoint: {},
          polylines: [
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313117980957031, height: 1183.3186645507812 },
                { lng: 119.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
              ]
            },
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
                { lng: 119.24906555725632, lat: 30.31316741393502, height: 1183.6849884241819 }
              ]
            },
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313655853271484, height: 1184.2783203125 },
                { lng: 119.24906555725632, lat: 30.313430628046348, height: 1184.1093236654997 }
              ]
            }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
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
      <vc-collection-primitive-point>
        <template v-for="(polyline, index) of polylines">
          <template v-for="(position, subIndex) of polyline.positions">
            <vc-primitive-point
              :position="position"
              :key="'point' + index + 'position' + subIndex"
              :color="colorPoint"
              :pixelSize="8"
            ></vc-primitive-point>
          </template>
        </template>
      </vc-collection-primitive-point>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        colorPoint: {},
        polylines: [
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313117980957031, height: 1183.3186645507812 },
              { lng: 119.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
            ]
          },
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
              { lng: 119.24906555725632, lat: 30.31316741393502, height: 1183.6849884241819 }
            ]
          },
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313655853271484, height: 1184.2783203125 },
              { lng: 119.24906555725632, lat: 30.313430628046348, height: 1184.1093236654997 }
            ]
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------------ | ------- | ------------------ | ------------------------------------------- |
| color | Object|Array|String | `'WHITE'` | `optional` A Property specifying the Color of the point. |
| disableDepthTestDistance | Number |  | `optional` A Property specifying the distance from the camera at which to disable the depth test to. |
| distanceDisplayCondition | Object |  | `optional` A Property specifying at what distance from the camera that this point will be displayed. **Structure: { near: number, far: number }** |
| id | * | | `optional` Gets or sets the user-defined value returned when the point is picked. |
| outlineColor | Object|Array|String | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `0` | `optional` A numeric Property specifying the the outline width in pixels. |
| pixelSize | Number | `1` | `optional` A numeric Property specifying the size in pixels. |
| position | Object | | `optional` Gets or sets the Cartesian position of this point. **Structure: { lng: number, lat: number, height: number }** |
| scaleByDistance | Object | | `optional` A NearFarScalar Property used to scale the point based on distance. **Structure: { near: number, nearValue: number, far: number, farValue: number }** |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the point. |
| translucencyByDistance | Object | | `optional` A NearFarScalar Property used to set translucency based on distance from the camera. **Structure: { near: number, nearValue: number, far: number, farValue: number }** |

---

- Refer to the official document: [PointPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html)

## Events

| name  | parameter                      | description                                                                                                       |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
