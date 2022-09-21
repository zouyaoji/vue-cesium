## VcGraphicsEllipsoid

Loading an ellipsoid graphic. It is equivalent to initializing a `Cesium.EllipsoidGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsEllipsoid component.

:::demo Use the `vc-graphics-ellipsoid` tag to add some ellipsoids to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity
      ref="entity1"
      :position="[114, 40, 300000]"
      description="Hello Vue Cesium"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-ellipsoid :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }" material="blue" :outline="true"></vc-graphics-ellipsoid>
    </vc-entity>
    <vc-entity ref="entity2" :position="{lng: 107, lat: 40, height: 300000}" description="Hello Vue Cesium">
      <vc-graphics-ellipsoid
        :radii="{ x: 300000.0, y: 300000.0, z: 300000.0 }"
        :outline="true"
        :material="[255, 0, 0, 125]"
        outlineColor="black"
      ></vc-graphics-ellipsoid>
    </vc-entity>
    <vc-entity ref="entity3" :position="[100, 40, 300000]" description="Hello Vue Cesium">
      <vc-graphics-ellipsoid
        :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }"
        :fill="false"
        :outline="true"
        outlineColor="yellow"
        :slicePartitions="24"
        :stackPartitions="36"
      ></vc-graphics-ellipsoid>
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
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the ellipsoid. |
| radii | VcPosition | | `optional` A Cartesian3 Property specifying the radii of the ellipsoid. |
| heightReference | number | | `optional` A Property specifying what the height from the entity position is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fill | boolean | `true` | `optional` A boolean Property specifying whether the ellipsoid is filled with the provided material. |
| material | VcMaterial\|string\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the ellipsoid. |
| outline | boolean | `false` | `optional` A boolean Property specifying whether the ellipsoid is outlined. |
| outlineColor | VcColor\|string\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| stackPartitions | number | `64` | `optional` A Property specifying the number of stacks. |
| slicePartitions | number | `64` | `optional` A Property specifying the number of radial slices. |
| subdivisions | number | `128` | `optional` A Property specifying the number of samples per outline ring, determining the granularity of the curvature. |
| shadows | number | `0` | `optional` An enum Property specifying whether the ellipsoid casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition\|Array | | `optional` A Property specifying at what distance from the camera that this ellipsoid will be displayed. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[EllipsoidGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html)**
