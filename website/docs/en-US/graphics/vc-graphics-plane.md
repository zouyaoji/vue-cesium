## VcGraphicsPlane

Loading a plane graphic. It is equivalent to initializing a `Cesium.PlaneGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsPlane component.

:::demo Use the `vc-graphics-plane` tag to add plane to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[114, 40, 300000]" description="Hello Vue Cesium">
      <vc-graphics-plane
        ref="plane1"
        :plane="{normal: { x: 1, y: 0, z: 0 }, distance: 0.0}"
        :dimensions="[400000, 300000]"
        material="blue"
      ></vc-graphics-plane>
    </vc-entity>
    <vc-entity :position="[107,40, 300000]" description="Hello Vue Cesium">
      <vc-graphics-plane
        ref="plane2"
        :plane="[{ x: 0, y: 1, z: 0 }, 0]"
        :dimensions="[400000, 300000]"
        :material="[255, 0, 0, 125]"
        :outline="true"
        outlineColor="black"
      ></vc-graphics-plane>
    </vc-entity>
    <vc-entity :position="[100, 40, 300000]" description="Hello Vue Cesium">
      <vc-graphics-plane
        ref="plane3"
        :plane="{ normal: { x: 0, y: 0, z: 1 }, distance: 0.0 }"
        :dimensions="{ x: 400000.0, y: 300000.0 }"
        :fill="false"
        :outline="true"
        outlineColor="yellow"
      ></vc-graphics-plane>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const plane1 = ref(null)
      const plane2 = ref(null)
      const plane3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([plane1.value.createPromise, plane2.value.createPromise, plane3.value.createPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        plane1,
        plane2,
        plane3,
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
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the plane. |
| plane | Object\|Array | | `optional` A Plane Property specifying the normal and distance for the plane. |
| dimensions | Object\|Array | | `optional` A Cartesian2 Property specifying the width and height of the plane. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the plane is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the plane. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the plane is outlined. |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the plane casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | Object\|Array | | `optional` A Property specifying at what distance from the camera that this plane will be displayed. |

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                         | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PlaneGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html)**
