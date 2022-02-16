## VcGraphicsBox

Loading a box graphic. It is equivalent to initializing a `Cesium.BoxGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsBox component.

:::demo Use the `vc-graphics-box` tag to add some entity with box on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- Load through attributes and load subcomponents separately -->
    <vc-entity
      ref="entity1"
      :position="options.position1"
      :description="options.description"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-box :dimensions="options.dimensions1" :material="options.material1"></vc-graphics-box>
    </vc-entity>
    <vc-entity ref="entity2" :position="options.position2" :description="options.description">
      <vc-graphics-box
        :dimensions="options.dimensions2"
        :material="options.material2"
        :outline-color="options.outlineColor2"
        :outline="true"
      ></vc-graphics-box>
    </vc-entity>
    <vc-entity ref="entity3" :position="options.position3" :description="options.description">
      <vc-graphics-box :dimensions="options.dimensions3" :outline-color="options.outlineColor3" :fill="false" :outline="true"></vc-graphics-box>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const options = {
        description: 'Hello Vue Cesium',

        position1: { lng: 105.0, lat: 40.0, height: 300000.0 },
        dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material1: 'BLUE',

        position2: { lng: 110.0, lat: 40.0, height: 300000.0 },
        dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material2: 'RED',
        outlineColor2: 'BLACK',

        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },
        outlineColor3: 'YELLOW'
      }
      const entity1 = ref(null)
      const entity2 = ref(null)
      const entity3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
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
        options
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name  | Type | Default | Description | Accepted Values |
| ----- | ---- | ------- | ----------- | --------------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the box. |
| dimensions | VcPosition | | `optional` A Cartesian3 Property specifying the length, width, and height of the box. |
| heightReference | Number \| Cesium.HeightReference \| VcCallbackPropertyFunction`<number>` | `0` | `optional` A Property specifying what the height from the entity position is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fill | Boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction`<boolean>` | true | `optional` A boolean Property specifying whether the box is filled with the provided material. |
| material | VcMaterial | `'white'` | `optional` A Property specifying the material used to fill the box. |
| outline | Boolean \| Cesium.CallbackProperty \| VcCallbackPropertyFunction`<boolean>` | `false` | `optional` A boolean Property specifying whether the box is outlined. |
| outlineColor | VcColor | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction`<number>` | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number \| Cesium.CallbackProperty \| VcCallbackPropertyFunction`<number>` | `0` | `optional` An enum Property specifying whether the box casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | VcDistanceDisplayCondition | | `optional` A Property specifying at what distance from the camera that this box will be displayed. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[BoxGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html)**
