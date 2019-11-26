# Label

The `vc-primitive-label` component is used to load a Label draws viewport-aligned text positioned in the 3D scene. This can only be used as a subcomponent of `vc-collection-primitive-label`.

## Example

### Load labels with `vc-primitive-label`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-label>
          <template v-for="(polyline, index) of polylines">
            <vc-primitive-label
              :position="polyline.positions[polyline.positions.length-1]"
              :key="'label'+index"
              :text="'Area: '+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
              showBackground
              :horizontalOrigin="1"
            >
            </vc-primitive-label>
          </template>
        </vc-collection-primitive-label>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          polylines: [
            {
              positions: [
                { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },
                { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
              ],
              area: 100000.3
            },
            {
              positions: [
                { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
                { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }
              ],
              area: 8000.658
            },
            {
              positions: [
                { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },
                { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }
              ],
              area: 200000.55
            }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
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
      <vc-collection-primitive-label>
        <template v-for="(polyline, index) of polylines">
          <vc-primitive-label
            :position="polyline.positions[polyline.positions.length-1]"
            :key="'label'+index"
            :text="'Area: '+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
            showBackground
            :horizontalOrigin="1"
          >
          </vc-primitive-label>
        </template>
      </vc-collection-primitive-label>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polylines: [
          {
            positions: [
              { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },
              { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
            ],
            area: 100000.3
          },
          {
            positions: [
              { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
              { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }
            ],
            area: 8000.658
          },
          {
            positions: [
              { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },
              { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }
            ],
            area: 200000.55
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
|name|type|default|description|
| ------------------------ | ------- | ------------------ | ------------------------------------------- |
| backgroundColor  | Object|Array|String | [0.165, 0.165, 0.165, 0.8] | `optional` Gets or sets the background color of this label. |
| backgroundPadding  | Object | | `optional` Gets or sets the background padding, in pixels, of this label. The x value controls horizontal padding, and the y value controls vertical padding. **Structure: { x: number, y: number }** |
| disableDepthTestDistance | Number | | `optional` Gets or sets the distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied. |
| distanceDisplayCondition | Object | | `optional` Gets or sets the condition specifying at what distance from the camera that this label will be displayed. **Structure: { near: number, far: number }** |
| eyeOffset | Object | `{x: 0, y: 0, z: 0}` | `optional` Gets and sets the 3D Cartesian offset applied to this label in eye coordinates. Eye coordinates is a left-handed coordinate system, where x points towards the viewer's right, y points up, and z points into the screen. Eye coordinates use the same scale as world and model coordinates, which is typically meter. **Structure{ x: number, y: number, z: number }** |
| fillColor | Object\|String\|Array | `white` | `optional` Gets or sets the fill color of this label. |
| font | String | `'30px sans-serif'` | `optional`Gets or sets the font used to draw this label. Fonts are specified using the same syntax as the CSS 'font' property. |
| heightReference | Number | `0` | `optional` Gets or sets the height reference of this billboard. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| horizontalOrigin | Number | `0` | `optional` Gets or sets the horizontal origin of this label, which determines if the label is drawn to the left, center, or right of its anchor position. **CENTER: 0, LEFT: 1, RIGHT: -1** |
| id | \* | | `optional` Gets or sets the user-defined value returned when the label is picked. |
| outlineColor | Object|Array|String | `'BLACK'` | `optional` Gets or sets the outline color of this label. |
| outlineWidth | Number | `0` | `optional` Gets or sets the outline width of this label. |
| pixelOffset | Object | `{x: 0, y: 0}` | `optional` Gets or sets the pixel offset in screen space from the origin of this label. This is commonly used to align multiple labels and billboards at the same position, e.g., an image and text. The screen space origin is the top, left corner of the canvas; x increases from left to right, and y increases from top to bottom. **Structure{ x: number, y: number }** |
| pixelOffsetScaleByDistance | Object | | `optional` Gets or sets near and far pixel offset scaling properties of a Label based on the Label's distance from the camera. A label's pixel offset will be scaled between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's pixel offset scaling remains clamped to the nearest bound. If undefined, pixelOffsetScaleByDistance will be disabled. **Structure{ near: number, nearValue: number, far: number, farValue: number }** |
| position | Object | | `optional` Gets or sets the Cartesian position of this label. **Structure{ lng: number, lat: number, height: number }** |
| scale | Number | `1.0` | `optional` Gets or sets the uniform scale that is multiplied with the label's size in pixels. A scale of 1.0 does not change the size of the label; a scale greater than 1.0 enlarges the label; a positive scale less than 1.0 shrinks the label. |
| scaleByDistance | Object | | `optional` Gets or sets near and far scaling properties of a Label based on the label's distance from the camera. A label's scale will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's scale remains clamped to the nearest bound. If undefined, scaleByDistance will be disabled. **Structure { near: number, nearValue: number, far: number, farValue: number }** |
| show | Boolean | `true` | `optional` Determines if this label will be shown. Use this to hide or show a label, instead of removing it and re-adding it to the collection. |
| showBackground | Boolean | `false` | `optional` Determines if a background behind this label will be shown. |
| text | String | | `optional` Gets or sets the text of this label. |
| totalScale  | Number | `1.0` | `optional` Gets the total scale of the label, which is the label's scale multiplied by the computed relative size of the desired font compared to the generated glyph size. |
| translucencyByDistance | Object | | `optional` Gets or sets near and far translucency properties of a Label based on the Label's distance from the camera. A label's translucency will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's translucency remains clamped to the nearest bound. If undefined, translucencyByDistance will be disabled. **Structure { near: number, nearValue: number, far: number, farValue: number }** |
| verticalOrigin | Number | `0` | `optional` Gets or sets the vertical origin of this label, which determines if the label is to the above, below, or at the center of its anchor position. **CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |

---

- Refer to the official document: **[Label](https://cesium.com/docs/cesiumjs-ref-doc/Label.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
