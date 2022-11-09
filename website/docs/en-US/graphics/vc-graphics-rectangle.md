<!--
 * @Author: ly
 * @Date: 2022-09-21 09:41:12
 * @LastEditors: ly
 * @LastEditTime: 2022-09-21 11:25:39
 * @FilePath: \vue-cesium\website\docs\en-US\graphics\vc-graphics-rectangle.md
-->
<!--
 * @Author: ly
 * @Date: 2022-09-21 09:41:12
 * @LastEditors: ly
 * @LastEditTime: 2022-09-21 11:24:44
 * @FilePath: \vue-cesium\website\docs\en-US\graphics\vc-graphics-rectangle.md
-->

## VcGraphicsRectangle

Loading a rectangle graphic. It is equivalent to initializing a `Cesium.RectangleGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of VcGraphicsRectangle component.

:::demo Use the `vc-graphics-rectangle` tag to add some rectangles to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-rectangle
        ref="rectangle1"
        :coordinates="{ west: -110, south: 20, east: -80, north: 25 }"
        :material="[255,0,0,125]"
      ></vc-graphics-rectangle>
    </vc-entity>
    <vc-entity description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-rectangle
        :coordinates="[-110, 30, -100, 40]"
        :material="[0, 255, 0, 125]"
        :rotation="45/180"
        :extrudedHeight="300000.0"
        :height="100000.0"
        :outline="true"
        outlineColor="black"
        ref="rectangle2"
      ></vc-graphics-rectangle>
    </vc-entity>
    <vc-entity description="Hello VueCesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-rectangle
        :coordinates="{ west: -92.0, south: 30.0, east: -82.0, north: 40.0 }"
        material="https://zouyaoji.top/vue-cesium/favicon.png"
        :rotation="getRotationValue"
        :stRotation="getRotationValue"
        :classificationType="0"
        ref="rectangle3"
      ></vc-graphics-rectangle>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const rectangle1 = ref(null)
      const rectangle2 = ref(null)
      const rectangle3 = ref(null)
      const rotation = ref(0)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      const getRotationValue = () => {
        rotation.value += 0.005
        return rotation.value
      }
      // life cycle
      onMounted(() => {
        Promise.all([rectangle1.value.creatingPromise, rectangle2.value.creatingPromise, rectangle3.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        rectangle1,
        rectangle2,
        rectangle3,
        onViewerReady,
        getRotationValue
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
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the rectangle. |
| coordinates | VcRectangle\|Array | | `optional` The Property specifying the Rectangle. |
| height | number | `0` | `optional` A numeric Property specifying the altitude of the rectangle relative to the ellipsoid surface. |
| heightReference | number | `true` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number | | `optional` A numeric Property specifying the altitude of the rectangle's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | number | | `optional` A Property specifying what the extrudedHeight is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| rotation | number | `0.0` | `optional` A numeric property specifying the rotation of the rectangle clockwise from north. |
| stRotation | number | `0.0` | `optional` A numeric property specifying the rotation of the rectangle texture counter-clockwise from north. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between points on the rectangle. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the rectangle is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Property specifying the material used to fill the rectangle. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the rectangle is outlined. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | number | `0` | `optional` An enum Property specifying whether the rectangle casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this box will be displayed. |
| classificationType | number | `2` | `optional` An enum Property specifying whether this rectangle will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**|0/1/2|
| zIndex | number | `0` | `optional` A Property specifying the zIndex used for ordering ground geometry. Only has an effect if the rectangle is constant and neither height or extrudedHeight are specified. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[RectangleGraphics](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html)**
