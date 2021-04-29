## VcCollectionPolyline

Loading a renderable collection of polylines. It is equivalent to initializing a `Cesium.PolylineCollection` instance. It is recommended to use the `polylines` prop to express when rendering massive polylines.

### Basic usage

Basic usage of VcCollectionPolyline component.

:::demo Use the `vc-collection-polyline` and `vc-polyline` tag to add a polyline primitive collection object to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-polyline @click="onClicked" ref="collectionRef" :polylines="polylines">
      <vc-polyline
        :positions="[[90, 20, 10000], [120, 20, 10000]]"
        :material="{
          fabric: {
            type: 'Color',
            uniforms: {
              color: 'red'
            }
          }
        }"
        :width="5"
      ></vc-polyline>
      <vc-polyline
        :positions="[[90, 30, 10000], [120, 30, 10000]]"
        :material="{
          fabric: {
            type: 'PolylineGlow',
            uniforms: {
              color: 'blue'
            }
          }
        }"
        :width="10"
      ></vc-polyline>
      <vc-polyline
        :positions="[[90, 40, 10000], [120, 40, 10000]]"
        :material="{
          fabric: {
            type: 'PolylineArrow',
            uniforms: {
              color: 'purple'
            }
          }
        }"
        :width="10"
      ></vc-polyline>
    </vc-collection-polyline>
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
      const polylines = ref([])
      const instance = getCurrentInstance()
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
        for (var i = 0; i < 500; i++) {
          let polyline = {}
          let positions = []
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          polyline.positions = positions
          polylines.value.push(polyline)
        }
      }

      return {
        unload,
        reload,
        load,
        onClicked,
        onViewerReady,
        collectionRef,
        polylines
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| modelMatrix | Object | | `optional` The 4x4 transformation matrix that transforms each billboard from model to world coordinates. |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| show | Boolean | `true` | `optional` Determines if the primitives in the collection will be shown. |
| polylines | Array | `[]` | `optional` Specify an array of polylines collections. The structure of the array object is the same as the attribute of the `vc-point` component. |
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

### VcPolyline

Loading a renderable polyline. It is equivalent to initializing a `Cesium.Polyline` instance.

**Note:** It needs to be a subcomponent of `vc-collection-polyline` to load normally.

### VcPolyline Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| distanceDisplayCondition | Object\|Array | | `optional` The condition specifying at what distance from the camera that this polyline will be displayed. |
| id | Object | | `optional` The user-defined value returned when the polyline is picked. |
| loop | Boolean | false | `optional` Whether a line segment will be added between the first and last polyline positions. |
| material | Object\|Array\|String | | `optional` The surface appearance of the polyline.This can be one of several built-in Material objects or a custom material, scripted with Fabric. |
| positions | Array | | `optional` The positions of the polyline. |
| show | Boolean | true | `optional` Determines if this polyline will be shown. Use this to hide or show a polyline, instead of removing it and re-adding it to the collection. |
| width | Number | 1.0 | `optional` The width of the polyline. |
| enableMouseEvent | Boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### VcPolyline Events

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

- Refer to the official documentation: **[PolylineCollection](https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html)**、**[Polyline](https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html)**
