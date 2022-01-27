## VcGraphicsPolyline

Loading a polyline graphic. It is equivalent to initializing a `Cesium.PolylineGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of VcGraphicsPolyline component.

:::demo Use the `vc-graphics-polyline` tag to add some polylines to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-polyline
        :positions="[{ lng: 90, lat: 20, height: 10000 }, { lng: 120, lat: 20, height: 10000 }]"
        material="red"
        :width="5"
        :clampToGround="false"
      ></vc-graphics-polyline>
    </vc-entity>
    <vc-entity>
      <vc-graphics-polyline
        :positions="[90, 30, 1000, 120, 30, 1000]"
        :material="{fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.2, color: 'blue' }}}"
        :width="10"
      ></vc-graphics-polyline>
    </vc-entity>
    <vc-entity>
      <vc-graphics-polyline
        :positions="[[90, 40, 1000], [120, 40, 1000]]"
        :material="{fabric: { type: 'PolylineArrow', uniforms: { color: 'purple' }}}"
        :width="10"
      ></vc-graphics-polyline>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const point1 = ref(null)
      const point2 = ref(null)
      const point3 = ref(null)
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
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the polyline. |
| positions | Array | | `optional` A Property specifying the array of Cartesian3 positions that define the line strip. |
| width | Number | `1.0` | `optional` A numeric Property specifying the width in pixels. |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude if arcType is not ArcType.NONE. |
| material | Object\|String\|Array | `'white'` | `optional` A Property specifying the material used to draw the polyline. |
| depthFailMaterial | Object\|String\|Array | | `optional` A property specifying the material used to draw the polyline when it is below the terrain. |
| arcType | Number | `1` | `optional` The type of line the polyline segments must follow. **NONE: 0, GEODESIC: 1, RHUMB: 2** |0/1/2|
| clampToGround | Boolean | `false` | `optional` A boolean Property specifying whether the Polyline should be clamped to the ground. |
| shadows | Number | | `optional` An enum Property specifying whether the polyline casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| classificationType | Number | `2` | `optional` An enum Property specifying whether this polyline will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**|0/1/2|
| distanceDisplayCondition | Object\|Array | | `optional` A Property specifying at what distance from the camera that this polyline will be displayed. |
| zIndex | Number | `0` | `optional` A Property specifying the zIndex used for ordering ground geometry. Only has an effect if `clampToGround` is true and polylines on terrain is supported. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PolylineGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html)**
