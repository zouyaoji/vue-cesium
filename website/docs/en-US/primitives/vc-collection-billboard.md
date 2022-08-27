## VcCollectionBillboard

Loading a renderable collection of billboards. It is equivalent to initializing a `Cesium.BillboardCollection` instance. It is recommended to use the `billboards` prop to express when rendering massive billboards.

### Basic usage

Basic usage of VcCollectionBillboard component.

:::demo Use the `vc-collection-billboard` and `vc-billboard` tag to add a billboard primitive collection object to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-billboard ref="billboardCollectionRef" @mouseout="onMouseout" @mouseover="onMouseover" :billboards="billboards">
      <vc-billboard
        :position="[108, 35, 10000]"
        :distance-display-condition="[0, 20000000]"
        :scale="0.25"
        image="https://zouyaoji.top/vue-cesium/favicon.png"
      ></vc-billboard>
    </vc-collection-billboard>
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
      const billboardCollectionRef = ref(null)
      const billboards = ref([])
      const instance = getCurrentInstance()
      // methods
      const onClicked = e => {
        console.log(e)
      }
      const unload = () => {
        billboardCollectionRef.value.unload()
      }
      const reload = () => {
        billboardCollectionRef.value.reload()
      }
      const load = () => {
        billboardCollectionRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        for (var i = 0; i < 50; i++) {
          const billboard = {}
          billboard.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard.image = Cesium.writeTextToCanvas(i + 1, {
            font: '100px sans-serif',
            strokeWidth: 2
          }).toDataURL()
          billboard.scale = 0.25
          billboard.id = i
          billboards.value.push(billboard)
        }
      }

      const onMouseover = e => {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Billboard) {
          this.scale = 0.5 // or e.cesiumObject.scale = 0.5
          e.pickedFeature.primitive.scale = 0.5
        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
          e.pickedFeature.primitive.scale = 0.5
        }
      }

      const onMouseout = e => {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Billboard) {
          this.scale = 0.25 // or e.cesiumObject.scale = 0.25
        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
          e.pickedFeature.primitive.scale = 0.25
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
        billboardCollectionRef,
        billboards
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
| debugShowBoundingVolume | boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| scene | Object | | `optional` Must be passed in for billboards that use the height reference property or will be depth tested against the globe. |
| blendOption | number | | `optional` The billboard blending option. The default is used for rendering both opaque and translucent billboards. However, if either all of the billboards are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x. **OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2**|0/1/2|
| show | boolean | `true` | `optional` Determines if the primitives in the collection will be shown. |
| billboards | Array | `[]` | `optional` Specify an array of billboard collections. The structure of the array object is the same as the attribute of the `vc-billboard` component. |
| enableMouseEvent | boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### Events

| Name       | Parameters                              | Description                                                      |
| ---------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | (evt: VcPickEvent)                      | Triggers when the mouse bounces up on this primitive.            |
| click      | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the primitive.                 |
| clickout   | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | (evt: VcPickEvent)                      | Triggers when the mouse moves on this primitive.                 |
| mouseover  | (evt: VcPickEvent)                      | Triggers when the mouse moves to this primitive.                 |
| mouseout   | (evt: VcPickEvent)                      | Triggers when the mouse moves out of this primitive.             |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-billboard tag content goes. | vc-billboard |

### VcBillboard

Loading a viewport-aligned image positioned in the 3D scene. It is equivalent to initializing a `Cesium.Billboard` instance.

**Note:** It needs to be a subcomponent of `vc-collection-billboard` to load normally.

### VcBillboard Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| alignedAxis | Object\|Array | `{x: 0, y: 0, z: 0}` | `optional` The aligned axis in world space. The aligned axis is the unit vector that the billboard up vector points towards. The default is the zero vector, which means the billboard is aligned to the screen up vector. |
| color | Object\|string\|Array | `'white'` | `optional` The color that is multiplied with the billboard's texture. |
| disableDepthTestDistance | number | | `optional` The distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied. |
| distanceDisplayCondition | Object\|Array | | `optional` The condition specifying at what distance from the camera that this billboard will be displayed.|
| eyeOffset | Object\|Array | `{x: 0, y: 0, z: 0}` | `optional` The 3D Cartesian offset applied to this billboard in eye coordinates.|
| height | number | | `optional` The height for the billboard. If undefined, the image height will be used. |
| heightReference | number | `0` | `optional` The height reference of this billboard. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| horizontalOrigin | number | `0` | `optional` The horizontal origin of this billboard, which determines if the billboard is to the left, center, or right of its anchor position. **CENTER: 0, LEFT: 1, RIGHT: -1** |0/1/2|
| id | \* | | `optional` The user-defined object returned when the billboard is picked. |
| image | string\|Object | | `optional` The image to be used for this billboard. If a texture has already been created for the given image, the existing texture is used. |
| pixelOffset | Object\|Array | `{x: 0, y: 0}` | `optional` The pixel offset in screen space from the origin of this billboard. |
| pixelOffsetScaleByDistance | Object\|Array | | `optional` The near and far pixel offset scaling properties of a Billboard based on the billboard's distance from the camera.|
| position | Object\|Array | | `optional` The position of this billboard.|
| rotation | number | `0` | `optional` The rotation angle in radians. |
| scale | number | `1.0` | `optional`  The uniform scale that is multiplied with the billboard's image size in pixels. |
| scaleByDistance | Object\|Array | | `optional` The near and far scaling properties of a Billboard based on the billboard's distance from the camera.|
| show | boolean | `true` | `optional` Determines if this billboard will be shown. Use this to hide or show a billboard, instead of removing it and re-adding it to the collection. |
| sizeInMeters | boolean | | `optional` Determines if the billboard size is in meters or pixels. true to size the billboard in meters; otherwise, the size is in pixels. |
| translucencyByDistance | Object\|Array | | `optional` The near and far translucency properties of a Billboard based on the billboard's distance from the camera.|
| verticalOrigin | number | `0` | `optional` The vertical origin of this billboard, which determines if the billboard is to the above, below, or at the center of its anchor position. **CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |0/1/2/-1|
| width  | number | | `optional` The width for the billboard. If undefined, the image width will be used. |
| enableMouseEvent | boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### VcBillboard Events

| Name       | Parameters                              | Description                                                      |
| ---------- | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| mousedown  | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on this primitive.            |
| mouseup    | (evt: VcPickEvent)                      | Triggers when the mouse bounces up on this primitive.            |
| click      | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the primitive.                 |
| clickout   | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the primitive.            |
| dblclick   | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the primitive. |
| mousemove  | (evt: VcPickEvent)                      | Triggers when the mouse moves on this primitive.                 |
| mouseover  | (evt: VcPickEvent)                      | Triggers when the mouse moves to this primitive.                 |
| mouseout   | (evt: VcPickEvent)                      | Triggers when the mouse moves out of this primitive.             |

### Reference

- Refer to the official documentation: **[BillboardCollection](https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html)**、**[Billboard](https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html)**
