## VcGraphicsPoint

Loading the point graphic. It is equivalent to initializing a `Cesium.PointGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsPoint component.

:::demo Use the `vc-graphics-point` tag to add some points to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[-75.59777, 40.03883]" description="Hello VueCesium">
      <vc-graphics-point ref="point1" color="red" :pixel-size="8"></vc-graphics-point>
    </vc-entity>
    <vc-entity :position="[-80.5, 35.14]" description="Hello VueCesium">
      <vc-graphics-point ref="point2" color="blue" :pixel-size="16"></vc-graphics-point>
    </vc-entity>
    <vc-entity :position="[-80.12, 25.46]" description="Hello VueCesium">
      <vc-graphics-point ref="point3" color="lime" :pixel-size="32"></vc-graphics-point>
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
      // life cycle
      onMounted(() => {
        Promise.all([point1.value.creatingPromise, point2.value.creatingPromise, point3.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        point1,
        point2,
        point3,
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
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the point. |
| pixelSize | number | `1` | `optional` A numeric Property specifying the size in pixels. |
| heightReference | number | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| color | VcColor\|string\|Array | `'white'` | `optional` A Property specifying the Color of the point. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | number | `0` | `optional` A numeric Property specifying the the outline width in pixels. |
| scaleByDistance | VcNearFarScalar\|Array | | `optional` A NearFarScalar Property used to scale the point based on distance. |
| translucencyByDistance | VcNearFarScalar\|Array | | `optional` A NearFarScalar Property used to set translucency based on distance from the camera. |
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this point will be displayed. |
| disableDepthTestDistance | number | | `optional` A Property specifying the distance from the camera at which to disable the depth test to. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PointGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PointGraphics.html)**
