# PointPrimitive

`point-primitive` Used to add points, load it with the `point-collection` component.

## Example

### Add PointPrimitive to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <point-collection>
          <template v-for="(polyline, index) of polylines">
            <template v-for="(position, subIndex) of polyline.positions">
              <point-primitive
                :position="position"
                :key="'point' + index + 'position' + subIndex"
                :color="colorPoint"
                :pixelSize="8"
              ></point-primitive>
            </template>
          </template>
        </point-collection>
      </cesium-viewer>
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
    <cesium-viewer @ready="ready">
      <point-collection>
        <template v-for="(polyline, index) of polylines">
          <template v-for="(position, subIndex) of polyline.positions">
            <point-primitive
              :position="position"
              :key="'point' + index + 'position' + subIndex"
              :color="colorPoint"
              :pixelSize="8"
            ></point-primitive>
          </template>
        </template>
      </point-collection>
    </cesium-viewer>
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

## Events

| name  | parameter        | description                                                                                    |
| ----- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
