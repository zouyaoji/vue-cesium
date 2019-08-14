# LabelGraphics

`label-graphics` Add an entity containing a cylinder object to the viewer as a subcomponent of `entity`. Describes a two dimensional label located at the position of the containing Entity. As shown in the example below.

## Examples

### add a LabelGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :label.sync="label1">
          <label-graphics text="Hello Vue Cesium" font="20px sans-serif" :pixelOffset="pixelOffset1"></label-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          label1: {},
          pixelOffset1: {},
          position1: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 300000.0)
          this.pixelOffset1 = new Cesium.Cartesian2(0.0, 20)
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
      <entity :position="position1" :description="description" :label.sync="label1">
        <label-graphics text="Hello Vue Cesium" font="20px sans-serif" :pixelOffset="pixelOffset1"></label-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        label1: {},
        pixelOffset1: {},
        position1: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 300000.0)
        this.pixelOffset1 = new Cesium.Cartesian2(0.0, 20)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| -------------------------- | --------------------- | ----------------- | ----------------------------------------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the label. |
| text | String | | `optional` A Property specifying the text. Explicit newlines '\n' are supported. |
| font | String | `'30px sans-serif'` | `optional` A Property specifying the CSS font. |
| labelStyle | Number | `0` | `optional` A Property specifying the LabelStyle. **FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2** |
| scale | Number | `1.0` | `optional` A numeric Property specifying the scale to apply to the text. |
| showBackground | Boolean | `false` | `optional` A boolean Property specifying the visibility of the background behind the label. |
| backgroundColor | Object\|String\|Array | `[0.165, 0.165, 0.165, 0.8]` | `optional` A Property specifying the background Color. |
| backgroundPadding | Object | `{x: 7, y: 5}` | `optional` A Cartesian2 Property specifying the horizontal and vertical background padding in pixels. **结构：{ x: number, y: number }** |
| pixelOffset | Object | `{x: 0, y: 0 }` | `optional` A Cartesian2 Property specifying the pixel offset. **structure: { x: number, y: number }** |
| eyeOffset | Object | `{x: 0, y: 0, z: 0}` | `optional` A Cartesian3 Property specifying the eye offset. **structure: { x: number, y: number, z: number }** |
| horizontalOrigin | Number | `0` | `optional` A Property specifying the HorizontalOrigin. |
| verticalOrigin | Number | `0` | `optional` A Property specifying the VerticalOrigin. |
| heightReference | Number | `0` | `optional` A Property specifying what the height is relative to. |
| fillColor | Object\|String\|Array | `white` | `optional` A Property specifying the fill Color. |
| outlineColor | Object\|String\|Array | `black` | `optional` A Property specifying the outline Color. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the outline width. |
| translucencyByDistance | Object | | `optional` A NearFarScalar Property used to set translucency based on distance from the camera. **structure: { near: number, nearValue: number, far: number, farValue: number }** |
| pixelOffsetScaleByDistance | Object | | `optional` A NearFarScalar Property used to set pixelOffset based on distance from the camera. **structure: { near: number, nearValue: number, far: number, farValue: number }** |
| scaleByDistance | Object | | `optional` A NearFarScalar Property used to set scale based on distance from the camera. **structure: { near: number, nearValue: number, far: number, farValue: number }** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this label will be displayed. **structure: { near: number, far: number }** |
| disableDepthTestDistance | Number | | `optional` A Property specifying the distance from the camera at which to disable the depth test to. |

---

- Reference official document [LabelGraphics](https://cesiumjs.org/Cesium/Build/Documentation/LabelGraphics.html)

## Events

| name              | parameter        | description                                                                                    |
| ----------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
| definitionChanged |                  | Gets the event that is raised whenever a property or sub-property is changed or modified.      |
