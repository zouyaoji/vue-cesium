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
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the label. |
| text | string | | `optional` A Property specifying the text. Explicit newlines '\n' are supported. |
| font | string | `'30px sans-serif'` | `optional` A Property specifying the CSS font. |
| labelStyle | number | `0` | `optional` A Property specifying the LabelStyle. **FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2** |0/1/2|
| scale | number | `1.0` | `optional` A numeric Property specifying the scale to apply to the text. |
| showBackground | boolean | `false` | `optional` A boolean Property specifying the visibility of the background behind the label. |
| backgroundColor | Object\|string\|Array | `{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }` | `optional` A Property specifying the background Color. |
| backgroundPadding | Object\|Array | `{x: 7, y: 5}` | `optional` A Cartesian2 Property specifying the horizontal and vertical background padding in pixels. |
| pixelOffset | Object\|Array | `{x: 0, y: 0 }` | `optional` A Cartesian2 Property specifying the pixel offset. |
| eyeOffset | Object\|Array | `{x: 0, y: 0, z: 0}` | `optional` A Cartesian3 Property specifying the eye offset.|
| horizontalOrigin | number | `0` | `optional` A Property specifying the HorizontalOrigin. |
| verticalOrigin | number | `0` | `optional` A Property specifying the VerticalOrigin. |
| heightReference | number | `0` | `optional` A Property specifying what the height is relative to. |
| fillColor | Object\|string\|Array | `white` | `optional` A Property specifying the fill Color. |
| outlineColor | Object\|string\|Array | `black` | `optional` A Property specifying the outline Color. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the outline width. |
| translucencyByDistance | Object\|Array | | `optional` A NearFarScalar Property used to set translucency based on distance from the camera. |
| pixelOffsetScaleByDistance | Object\|Array | | `optional` A NearFarScalar Property used to set pixelOffset based on distance from the camera. |
| scaleByDistance | Object\|Array | | `optional` A NearFarScalar Property used to set scale based on distance from the camera. |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this label will be displayed. |
| disableDepthTestDistance | number | | `optional` A Property specifying the distance from the camera at which to disable the depth test to. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[LabelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html)**
