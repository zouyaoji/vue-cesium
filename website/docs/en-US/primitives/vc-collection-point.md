## VcCollectionPoint

Loading a renderable collection of points. It is equivalent to initializing a `Cesium.PointPrimitiveCollection` instance. It is recommended to use the `points` prop to express when rendering massive points.

### Basic usage

Basic usage of VcCollectionPoint component.

:::demo Use the `vc-collection-point` and `vc-point` tag to add a point primitive collection object to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-point @click="onClicked" ref="collectionRef" :points="points">
      <template v-for="(polyline, index) of polylines">
        <template v-for="(position, subIndex) of polyline.positions">
          <vc-point :position="position" :color="[255, 229, 0]" :pixelSize="32"></vc-point>
        </template>
      </template>
    </vc-collection-point>
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
      const points = ref([])
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
        for (var i = 0; i < 10000; i++) {
          let point = {}
          point.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          point.color = 'rgb(255,229,0)'
          point.pixelSize = 8
          points.value.push(point)
        }
      }

      return {
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        collectionRef,
        points,
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
| blendOption | Number | | `optional` The billboard blending option. The default is used for rendering both opaque and translucent billboards. However, if either all of the billboards are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x. **OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2**|0/1/2|
| show | Boolean | `true` | `optional` Determines if the primitives in the collection will be shown. |
| points | Array | `[]` | `optional` Specify an array of points collections. The structure of the array object is the same as the attribute of the `vc-point` component. |
| enableMouseEvent | Boolean | `true` | `optional` Specify whether the mouse event takes effect. |

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
| default | This is where vc-point tag content goes. | vc-point |

### VcPoint

Loading a graphical point positioned in the 3D scene. It is equivalent to initializing a `Cesium.PointPrimitive` instance.

**Note:** It needs to be a subcomponent of `vc-collection-point` to load normally.

### VcPoint Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| color | Object\|Array\|String | `'white'` | `optional` The inner color of the point. |
| disableDepthTestDistance | Number | | `optional` The distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied. |
| distanceDisplayCondition | Object\|Array | | `optional` The condition specifying at what distance from the camera that this point will be displayed. |
| id | \* | | `optional` The user-defined value returned when the point is picked. |
| outlineColor | Object \| Array \| String | `'black'` | `optional` The outline color of the point. |
| outlineWidth | Number | `0` | `optional`The outline width in pixels. This width adds to pixelSize, increasing the total size of the point. |
| pixelSize | Number | `1` | `optional` The inner size of the point in pixels. |
| position | Object\|Array | | `optional` The position of this point. |
| scaleByDistance | Object\|Array | | `optional` The near and far scaling properties of a point based on the point's distance from the camera |
| show | Boolean | `true` | `optional` Determines if this point will be shown. Use this to hide or show a point, instead of removing it and re-adding it to the collection. |
| translucencyByDistance | Object\|Array | | `optional` The near and far translucency properties of a point based on the point's distance from the camera. |
| enableMouseEvent | Boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### VcPoint Events

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

- Refer to the official documentation: **[PointPrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html)**、**[PointPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html)**
