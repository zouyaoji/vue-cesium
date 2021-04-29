## VcGraphicsLabel

Loading a label graphic. It is equivalent to initializing a `Cesium.LabelGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsLabel component.

:::demo Use the `vc-graphics-label` tag to add a label to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[114, 40, 300000]" description="Hello Vue Cesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-label text="Hello Vue Cesium" font="20px sans-serif" :pixelOffset="[0, 20]" fillColor="red"></vc-graphics-label>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }

      return {
        onEntityEvt,
        onViewerReady
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the label. |
| text | String | | `optional` A Property specifying the text. Explicit newlines '\n' are supported. |
| font | String | `'30px sans-serif'` | `optional` A Property specifying the CSS font. |
| labelStyle | Number | `0` | `optional` A Property specifying the LabelStyle. **FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2** |0/1/2|
| scale | Number | `1.0` | `optional` A numeric Property specifying the scale to apply to the text. |
| showBackground | Boolean | `false` | `optional` A boolean Property specifying the visibility of the background behind the label. |
| backgroundColor | Object\|String\|Array | `{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }` | `optional` A Property specifying the background Color. |
| backgroundPadding | Object\|Array | `{x: 7, y: 5}` | `optional` A Cartesian2 Property specifying the horizontal and vertical background padding in pixels. |
| pixelOffset | Object\|Array | `{x: 0, y: 0 }` | `optional` A Cartesian2 Property specifying the pixel offset. |
| eyeOffset | Object\|Array | `{x: 0, y: 0, z: 0}` | `optional` A Cartesian3 Property specifying the eye offset.|
| horizontalOrigin | Number | `0` | `optional` A Property specifying the HorizontalOrigin. |
| verticalOrigin | Number | `0` | `optional` A Property specifying the VerticalOrigin. |
| heightReference | Number | `0` | `optional` A Property specifying what the height is relative to. |
| fillColor | Object\|String\|Array | `white` | `optional` A Property specifying the fill Color. |
| outlineColor | Object\|String\|Array | `black` | `optional` A Property specifying the outline Color. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the outline width. |
| translucencyByDistance | Object\|Array | | `optional` A NearFarScalar Property used to set translucency based on distance from the camera. |
| pixelOffsetScaleByDistance | Object\|Array | | `optional` A NearFarScalar Property used to set pixelOffset based on distance from the camera. |
| scaleByDistance | Object\|Array | | `optional` A NearFarScalar Property used to set scale based on distance from the camera. |
| distanceDisplayCondition | Object\|Array | | `optional` A Property specifying at what distance from the camera that this label will be displayed. |
| disableDepthTestDistance | Number | | `optional` A Property specifying the distance from the camera at which to disable the depth test to. |

### Events

| Name   | Parameters | Description |
| ----------------- | ---------------------------------- | ---------------------------------------- |
| beforeLoad        | Vue Instance                       | Triggers before the cesiumObject is loaded.                          |
| ready             | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.                       |
| destroyed         | Vue Instance                       | Triggers when the cesiumObject is destroyed.                          |
| definitionChanged |                                    | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[LabelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html)**
