## VcGraphicsEllipse

Loading a ellipse graphic. It is equivalent to initializing a `Cesium.EllipseGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsEllipse component.

:::demo Use the `vc-graphics-ellipse` tag to add some ellipses to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity
      ref="entity1"
      :position="[111, 40, 150000]"
      description="Hello Vue Cesium"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-ellipse
        :semiMinorAxis="300000.0"
        :semiMajorAxis="300000.0"
        :height="200000.0"
        material="green"
        :outline="true"
      ></vc-graphics-ellipse>
    </vc-entity>
    <vc-entity ref="entity2" :position="[103, 40]" description="Hello Vue Cesium">
      <vc-graphics-ellipse :semiMinorAxis="250000.0" :semiMajorAxis="400000.0" :material="[255, 0, 0, 125]"></vc-graphics-ellipse>
    </vc-entity>
    <vc-entity ref="entity3" :position="[95, 40, 100000]" description="Hello Vue Cesium">
      <vc-graphics-ellipse
        :semiMinorAxis="150000.0"
        :semiMajorAxis="300000.0"
        :extrudedHeight="200000.0"
        :rotation="45/180"
        :material="[0, 0, 255, 125]"
        :outline="true"
      ></vc-graphics-ellipse>
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
      const entity3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([entity1.value.creatingPromise, entity2.value.creatingPromise, entity3.value.creatingPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        entity1,
        entity2,
        entity3,
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
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the ellipse. |
| semiMajorAxis | number | | `optional` The numeric Property specifying the semi-major axis. |
| semiMinorAxis | number | | `optional` The numeric Property specifying the semi-minor axis. |
| height | number | `0` | `optional` A numeric Property specifying the altitude of the ellipse relative to the ellipsoid surface. |
| heightReference | number | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number | | `optional` A numeric Property specifying the altitude of the ellipse's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | number | | `optional` A Property specifying what the extrudedHeight is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| rotation | number | `0.0` | `optional` A numeric property specifying the rotation of the ellipse counter-clockwise from north. |
| stRotation | number | `0.0` | `optional` A numeric property specifying the rotation of the ellipse texture counter-clockwise from north. |
| granularity | number | | `optional` A numeric Property specifying the angular distance between points on the ellipse. |
| fill | boolean | `true` | `optional` A boolean Property specifying whether the ellipse is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'white'` | `optional` A Property specifying the material used to fill the ellipse. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the ellipse is outlined. |
| outlineColor | VcColor\|string\|Array | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| numberOfVerticalLines | number | `16` | `optional` A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline. |
| shadows | number | `0` | `optional` An enum Property specifying whether the ellipse casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition | | `optional` A Property specifying at what distance from the camera that this ellipse will be displayed. |
| classificationType | number | `2` | `optional` An enum Property specifying whether this ellipse will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2**|0/1/2|
| zIndex | number | | `optional` A property specifying the zIndex of the Ellipse. Used for ordering ground geometry. Only has an effect if the ellipse is constant and neither height or exturdedHeight are specified. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[EllipseGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGraphics.html)**
