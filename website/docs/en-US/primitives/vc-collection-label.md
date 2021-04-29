## VcCollectionLabel

Loading a renderable collection of labels. It is equivalent to initializing a `Cesium.LabelCollection` instance. It is recommended to use the `labels` prop to express when rendering massive labels.

### Basic usage

Basic usage of VcCollectionLabel component.

:::demo Use the `vc-collection-label` and `vc-label` tag to add a label primitive collection object to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-label @click="onClicked" ref="collectionRef" :labels="labels" @mouseout="onMouseout" @mouseover="onMouseover">
      <vc-label
        v-for="(polyline, index) of polylines"
        :position="polyline.positions[polyline.positions.length-1]"
        :key="'label'+index"
        :text="'Area'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
        showBackground
        :horizontalOrigin="1"
      ></vc-label>
    </vc-collection-label>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const collectionRef = ref(null)
      const labels = ref([])
      const instance = getCurrentInstance()
      const polylines = [
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
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        collectionRef.value.unload()
      }
      const reload = () => {
        collectionRef.value.reload()
      }
      const load = () => {
        collectionRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        for (var i = 0; i < 100; i++) {
          let label = {}
          label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          label.text = i.toString()
          labels.value.push(label)
        }
      }
      const onMouseover = e => {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Label) {
          this.scale = 1.5 // or e.cesiumObject.scale = 1.5
          e.pickedFeature.primitive.scale = 1.5
        } else if (e.cesiumObject instanceof Cesium.LabelCollection) {
          e.pickedFeature.primitive.scale = 1.5
        }
      }

      const onMouseout = e => {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Label) {
          this.scale = 1 // or e.cesiumObject.scale = 1
        } else if (e.cesiumObject instanceof Cesium.LabelCollection) {
          e.pickedFeature.primitive.scale = 1
        }
      }

      return {
        unload,
        reload,
        load,
        onClicked,
        onMouseout,
        onMouseover,
        onViewerReady,
        collectionRef,
        labels,
        polylines
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
| modelMatrix | Object | | `optional` The 4x4 transformation matrix that transforms each billboard from model to world coordinates. |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| scene | Object | | `optional` Must be passed in for billboards that use the height reference property or will be depth tested against the globe. |
| blendOption | Number | | `optional` The billboard blending option. The default is used for rendering both opaque and translucent billboards. However, if either all of the billboards are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x. **OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2**|0/1/2|
| show | Boolean | `true` | `optional` Determines if the primitives in the collection will be shown. |
| labels | Array | `[]` | `optional` Specify an array of label collections. The structure of the array object is the same as the attribute of the `vc-label` component. |
| enableMouseEvent | Boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### Events

| Name       | Parameters                                                 | Description                                                      |
| ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | Vue Instance                                               | Triggers before the cesiumObject is loaded.                      |
| ready      | {Cesium, viewer, cesiumObject, vm}                         | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | Vue Instance                                               | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse bounces up on this primitive.            |
| click      | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks on the primitive.                 |
| clickout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves on this primitive.                 |
| mouseover  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves to this primitive.                 |
| mouseout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves out of this primitive.             |

### VcLabel

Loading a viewport-aligned text positioned in the 3D scene. It is equivalent to initializing a `Cesium.Label` instance.

**Note:** It needs to be a subcomponent of `vc-collection-billboard` to load normally.

### VcLabel Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| backgroundColor  | Object\|Array\|String | `{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }` | `optional` The background color of this label. |
| backgroundPadding  | Object\|Array | | `optional` The background padding, in pixels, of this label.|
| disableDepthTestDistance | Number | | `optional` The distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied. |
| distanceDisplayCondition | Object\|Array | | `optional` The condition specifying at what distance from the camera that this label will be displayed. |
| eyeOffset | Object\Array | `{x: 0, y: 0, z: 0}` | `optional` The 3D Cartesian offset applied to this label in eye coordinates.|
| fillColor | Object\|String\|Array | `white` | `optional` The fill color of this label. |
| font | String | `'30px sans-serif'` | `optional`  The font used to draw this label. Fonts are specified using the same syntax as the CSS 'font' property. |
| heightReference | Number | `0` | `optional` The height reference of this billboard. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| horizontalOrigin | Number | `0` | `optional` The horizontal origin of this label, which determines if the label is drawn to the left, center, or right of its anchor position. **CENTER: 0, LEFT: 1, RIGHT: -1** |0/1/-1|
| id | \* | | `optional` The user-defined value returned when the label is picked. |
| outlineColor | Object\|Array\|String | `'black'` | `optional` The outline color of this label. |
| outlineWidth | Number | `0` | `optional` The outline width of this label. |
| pixelOffset | Object\|Array | `{x: 0, y: 0}` | `optional` The pixel offset in screen space from the origin of this label. |
| pixelOffsetScaleByDistance | Object\|Array | | `optional` The near and far pixel offset scaling properties of a Label based on the Label's distance from the camera.|
| position | Object | | `optional` The position of this label.|
| scale | Number | `1.0` | `optional` The uniform scale that is multiplied with the label's size in pixels. |
| scaleByDistance | Object\|Array | | `optional` The near and far scaling properties of a Label based on the label's distance from the camera. |
| show | Boolean | `true` | `optional` Determines if this label will be shown. Use this to hide or show a label, instead of removing it and re-adding it to the collection. |
| showBackground | Boolean | `false` | `optional` Determines if a background behind this label will be shown. |
| labelStyle | Number | `0` | `optional` The style of this label. **FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2** |0/1/2|
| text | String | | `optional` The text of this label. |
| totalScale  | Number | `1.0` | `optional` The total scale of the label, which is the label's scale multiplied by the computed relative size of the desired font compared to the generated glyph size. |
| translucencyByDistance | Object\|Array | | `optional` The near and far translucency properties of a Label based on the Label's distance from the camera.|
| verticalOrigin | Number | `0` | `optional` The vertical origin of this label, which determines if the label is to the above, below, or at the center of its anchor position.**CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |0/1/2/-1|
| enableMouseEvent | Boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### VcLabel Events

| Name       | Parameters                                                 | Description                                                      |
| ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | Vue Instance                                               | Triggers before the cesiumObject is loaded.                      |
| ready      | {Cesium, viewer, cesiumObject, vm}                         | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | Vue Instance                                               | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse bounces up on this primitive.            |
| click      | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks on the primitive.                 |
| clickout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves on this primitive.                 |
| mouseover  | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves to this primitive.                 |
| mouseout   | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggers when the mouse moves out of this primitive.             |

### Reference

- Refer to the official documentation: **[LabelCollection](https://cesium.com/docs/cesiumjs-ref-doc/LabelCollection.html)**、**[Label](https://cesium.com/docs/cesiumjs-ref-doc/Label.html)**
