# BillboardPrimitive

`billboard-primitive` Used to add a billboard and load it with the `billboard-collection` component.

## Example

### Add a billboard to viewer by BillboardPrimitive

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <billboard-collection>
          <billboard-primitive
            :image="image"
            :scale="0.4"
            :show="show"
            :distanceDisplayCondition="distanceDisplayCondition"
            :horizontalOrigin="horizontalOrigin"
            :position="position"
            ></billboard-primitive>
          </billboard-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          id: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 108, lat: 35, height: 10000 },
          billboard: {},
          show: true,
          distanceDisplayCondition: { near: 0, far: 20000000 },
          horizontalOrigin: 0
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
    <cesium-viewer @ready="ready">
      <billboard-collection>
        <billboard-primitive
          :image="image"
          :scale="0.4"
          :show="show"
          :distanceDisplayCondition="distanceDisplayCondition"
          :horizontalOrigin="horizontalOrigin"
          :position="position"
        ></billboard-primitive>
      </billboard-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 'Hello Vue Cesium',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 108, lat: 35, height: 10000 },
        billboard: {},
        show: true,
        distanceDisplayCondition: { near: 0, far: 20000000 },
        horizontalOrigin: 0
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
| alignedAxis | Cartesian3 | `{x: 0, y: 0, z: 0}` | `optional` Gets or sets the aligned axis in world space. The aligned axis is the unit vector that the billboard up vector points towards. The default is the zero vector, which means the billboard is aligned to the screen up vector. **Structure: { x: number, y: number, z: number }** |
| color | Object\|String\|Array | `'white'` | `optional` Gets or sets the color that is multiplied with the billboard's texture. This has two common use cases. First, the same white texture may be used by many different billboards, each with a different color, to create colored billboards. Second, the color's alpha component can be used to make the billboard translucent as shown below. An alpha of 0.0 makes the billboard transparent, and 1.0 makes the billboard opaque. |
| disableDepthTestDistance | Number | | `optional` Gets or sets the distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied. |
| distanceDisplayCondition | Object | | `optional` Gets or sets the condition specifying at what distance from the camera that this billboard will be displayed. **Structure: { near: number, far: number }** |
| eyeOffset | Object | `{x: 0, y: 0, z: 0}` | `optional` Gets or sets the 3D Cartesian offset applied to this billboard in eye coordinates. Eye coordinates is a left-handed coordinate system, where x points towards the viewer's right, y points up, and z points into the screen. Eye coordinates use the same scale as world and model coordinates, which is typically meters. **Structure: { x: number, y: number, z: number }** |
| height | Number | | `optional` Gets or sets a height for the billboard. If undefined, the image height will be used. |
| heightReference | Number | `0` | `optional` Gets or sets the height reference of this billboard. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| horizontalOrigin | Number | `0` | `optional` Gets or sets the horizontal origin of this billboard, which determines if the billboard is to the left, center, or right of its anchor position. **CENTER: 0, LEFT: 1, RIGHT: -1** |
| id | \* | | `optional` Gets or sets the user-defined object returned when the billboard is picked. |
| image | String\|Object | | `optional` Gets or sets the image to be used for this billboard. If a texture has already been created for the given image, the existing texture is used.This property can be set to a loaded Image, a URL which will be loaded as an Image automatically, a canvas, or another billboard's image property (from the same billboard collection). |
| pixelOffset | Object | `{x: 0, y: 0}` | `optional` Gets or sets the pixel offset in screen space from the origin of this billboard. This is commonly used to align multiple billboards and labels at the same position, e.g., an image and text. The screen space origin is the top, left corner of the canvas; x increases from left to right, and y increases from top to bottom. **Structure: { x: number, y: number }** |
| pixelOffsetScaleByDistance | Object | | `optional` Gets or sets near and far pixel offset scaling properties of a Billboard based on the billboard's distance from the camera. A billboard's pixel offset will be scaled between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's pixel offset scale remains clamped to the nearest bound. If undefined, pixelOffsetScaleByDistance will be disabled. **Structure: { near: number, nearValue: number, far: number, farValue: number }** |
| position | Object | | `optional` Gets or sets the Cartesian position of this billboard. **Structure: { lng: number, lat: number, height: number }** |
| rotation | Number | `0` | `optional` Gets or sets the rotation angle in radians. |
| scale | Number | `1.0` | `optional` Gets or sets the uniform scale that is multiplied with the billboard's image size in pixels. A scale of 1.0 does not change the size of the billboard; a scale greater than 1.0 enlarges the billboard; a positive scale less than 1.0 shrinks the billboard. |
| scaleByDistance | Object | | `optional` Gets or sets near and far scaling properties of a Billboard based on the billboard's distance from the camera. A billboard's scale will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's scale remains clamped to the nearest bound. If undefined, scaleByDistance will be disabled. **Structure: { near: number, nearValue: number, far: number, farValue: number }** |
| show | Boolean | `true` | `optional` Determines if this billboard will be shown. Use this to hide or show a billboard, instead of removing it and re-adding it to the collection. |
| sizeInMeters | Boolean | | `optional` Gets or sets if the billboard size is in meters or pixels. true to size the billboard in meters; otherwise, the size is in pixels. |
| translucencyByDistance | Object | | `optional` Gets or sets near and far translucency properties of a Billboard based on the billboard's distance from the camera. A billboard's translucency will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's translucency remains clamped to the nearest bound. If undefined, translucencyByDistance will be disabled. **Structure: { near: number, nearValue: number, far: number, farValue: number }** |
| verticalOrigin | Number | `0` | `optional` Gets or sets the vertical origin of this billboard, which determines if the billboard is to the above, below, or at the center of its anchor position. **CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |

---

- Reference official document [Billboard](https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html).

## Events

| name  | parameter        | description                                                                                 |
| ----- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
