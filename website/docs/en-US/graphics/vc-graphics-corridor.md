## VcGraphicsCorridor

Loading a corridor graphic. It is equivalent to initializing a `Cesium.CorridorGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsCorridor component.

:::demo Use the `vc-graphics-corridor` tag to add some corridors to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity
      ref="entity1"
      :name="options.name1"
      :description="options.description"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-corridor :positions="options.positions1" :material="options.material1" :width="200000.0"></vc-graphics-corridor>
    </vc-entity>
    <vc-entity ref="entity2" :name="options.name2" :description="options.description">
      <vc-graphics-corridor
        :positions="options.positions2"
        :height="100000.0"
        :width="200000.0"
        :corner-type="0"
        material="GREEN"
        :outline="true"
      ></vc-graphics-corridor>
    </vc-entity>
    <vc-entity ref="entity3" :name="options.name3" :description="options.description">
      <vc-graphics-corridor
        :positions="options.positions3"
        :material="options.material3"
        outline-color="WHITE"
        :outline="true"
        :height="200000.0"
        :extruded-height="100000.0"
        :width="200000.0"
        :corner-type="options.cornerType3"
      ></vc-graphics-corridor>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted, reactive } from 'vue'
  export default {
    setup() {
      // state
      const options = reactive({
        description: 'Hello Vue Cesium',

        corridor1: {},
        name1: 'Red corridor on surface with rounded corners',
        positions1: [
          { lng: 100.0, lat: 40.0 },
          { lng: 105.0, lat: 40.0 },
          { lng: 105.0, lat: 35.0 }
        ],
        material1: {},

        corridor2: {},
        name2: 'Green corridor at height with mitered corners and outline',
        positions2: [
          { lng: 90.0, lat: 40.0 },
          { lng: 95.0, lat: 40.0 },
          { lng: 95.0, lat: 35.0 }
        ],
        cornerType2: 0,

        corridor3: {},
        name3: 'Blue extruded corridor with beveled corners and outline',
        positions3: [
          { lng: 80.0, lat: 40.0 },
          { lng: 85.0, lat: 40.0 },
          { lng: 85.0, lat: 35.0 }
        ],
        cornerType3: 0,
        material3: {}
      })
      const entity1 = ref(null)
      const entity2 = ref(null)
      const entity3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        const { Cesium, viewer } = cesiumInstance
        options.material1 = Cesium.Color.RED.withAlpha(0.5)

        options.cornerType2 = Cesium.CornerType.MITERED

        options.cornerType3 = Cesium.CornerType.BEVELED
        options.material3 = Cesium.Color.BLUE.withAlpha(0.5)
      }
      // life cycle
      onMounted(() => {
        Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        entity1,
        entity2,
        entity3,
        options,
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
| ---- | -----| ------- | ----------- | --------------- |
| show | boolean | `true` | `optional` A boolean Property specifying the visibility of the corridor. |
| positions | VcCartesian3Array | | `optional` A Property specifying the array of Cartesian3 positions that define the centerline of the corridor. |
| width | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A numeric Property specifying the distance between the edges of the corridor. |
| height | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A numeric Property specifying the altitude of the corridor relative to the ellipsoid surface. |
| heightReference | number \| Cesium.HeightReference \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| extrudedHeight | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A numeric Property specifying the altitude of the corridor's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | number \| Cesium.HeightReference \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | | `optional` A Property specifying what the extrudedHeight is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| cornerType | number \| Cesium.CornerType \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `0` | `optional` A CornerType Property specifying the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |0/1/2|
| granularity | number | | `optional` A numeric Property specifying the distance between each latitude and longitude. |
| fill | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `true` | `optional` A boolean Property specifying whether the corridor is filled with the provided material. |
| material | VcMaterial | `'white'` | `optional` A Property specifying the material used to fill the corridor. |
| outline | boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<boolean\> | `false` | `optional` A boolean Property specifying whether the corridor is outlined. |
| outlineColor | VcColor | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<number\> | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | number \| Cesium.ShadowMode \| VcCallbackPropertyFunction\<number\> | `0` | `optional` An enum Property specifying whether the corridor casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3**|0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition | | `optional` A Property specifying at what distance from the camera that this corridor will be displayed.|
| classificationType | number \| Cesium.ClassificationType \| VcCallbackPropertyFunction\<Cesium.ClassificationType\> | `2` | `optional` An enum Property specifying whether this corridor will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| zIndex | number | | `optional` A Property specifying the zIndex of the corridor, used for ordering. Only has an effect if height and extrudedHeight are undefined, and if the corridor is static. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[CorridorGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html)**
