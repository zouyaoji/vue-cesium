## VcGraphicsWall

Loading a wall graphic. It is equivalent to initializing a `Cesium.WallGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsWall component.

:::demo Use the `vc-graphics-wall` tag to add some walls to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity description="Hello Vue Cesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-wall
        ref="wall1"
        :positions="[[-115,44,200000],[-90,44,200000]]"
        material="red"
        :minimumHeights="[100000.0, 100000.0]"
      ></vc-graphics-wall>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-wall
        ref="wall2"
        :positions="[-107,43,100000,-97,43,100000,-97,40,100000,-107,40,100000,-107,43,100000]"
        material="green"
        :outline="true"
      ></vc-graphics-wall>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-wall
        :positions="[[-115,50],[-112,50],[-107.5,50],[-105,50],[-102.5,50],[-100,50],[-97.5,50],[-95,50],[-92.5,50],[-90,50]]"
        :material="[0,0,125,125]"
        :outline="true"
        outlineColor="black"
        :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000]"
        :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000]"
        ref="wall3"
      ></vc-graphics-wall>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const wall1 = ref(null)
      const wall2 = ref(null)
      const wall3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([wall1.value.createPromise, wall2.value.createPromise, wall3.value.createPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        wall1,
        wall2,
        wall3,
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
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the wall. |
| positions | Array | | `optional` A Property specifying the array of Cartesian3 positions which define the top of the wall.  |
| minimumHeights | Array | | `optional` A Property specifying an array of heights to be used for the bottom of the wall instead of the globe surface. |
| maximumHeights | Array | | `optional` A Property specifying an array of heights to be used for the top of the wall instead of the height of each position. |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude point. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the wall is filled with the provided material. |
| material | Object\|String\|Array | `'white'` | `optional` A Property specifying the material used to fill the wall. |
| outline | Boolean | false | `optional` A boolean Property specifying whether the wall is outlined. |
| outlineColor | Object\|String\|Array | `'black'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the wall casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | Object\|Array | | `optional` A Property specifying at what distance from the camera that this wall will be displayed. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[WallGraphics](https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html)**
