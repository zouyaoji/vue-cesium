## VcGraphicsCylinder

Loading a cylinder graphic. It is equivalent to initializing a `Cesium.CylinderGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsCylinder component.

:::demo Use the `vc-graphics-cylinder` tag to add some cylinders to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity
      ref="entity1"
      :position="[105, 40, 200000]"
      description="Hello Vue Cesium"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-cylinder
        :length="400000.0"
        :topRadius="200000.0"
        :bottomRadius="200000.0"
        :material="[0,128,0,125]"
        :outline="true"
        outlineColor="#006400"
      ></vc-graphics-cylinder>
    </vc-entity>
    <vc-entity ref="entity2" :position="[110, 40, 200000]" description="Hello Vue Cesium">
      <vc-graphics-cylinder :length="400000.0" :topRadius="0.0" :bottomRadius="200000.0" material="RED"></vc-graphics-cylinder>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const entity1 = ref(null)
      const entity2 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([entity1.value.creatingPromise, entity2.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        entity1,
        entity2,
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
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the cylinder. |
| length | Array | | `optional` A numeric Property specifying the length of the cylinder. |
| topRadius | Number | | `optional` A numeric Property specifying the radius of the top of the cylinder. |
| bottomRadius | Number | | `optional` A numeric Property specifying the radius of the bottom of the cylinder. |
| heightReference | Number | `0` | `optional` A Property specifying what the height from the entity position is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the cylinder is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the cylinder. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the cylinder is outlined. |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| numberOfVerticalLines | Number | `16` | `optional` A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline. |
| slices | Number | `128` | `optional` The number of edges around the perimeter of the cylinder. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the cylinder casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | Object\|Array | | `optional` A Property specifying at what distance from the camera that this cylinder will be displayed. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html)**
