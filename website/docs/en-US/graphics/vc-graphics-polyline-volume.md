## VcGraphicsPolylineVolume

Loading a polyline volume graphic. It is equivalent to initializing a `Cesium.PolylineVolumeGraphics` instance.

**Note:** It needs to be a subcomponent of `vc-entity` to load normally.

### Basic usage

Basic usage of the VcGraphicsPolylineVolume component.

:::demo Use the `vc-graphics-polyline-volume` tag to add some polyline volumes to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity>
      <vc-graphics-polyline-volume
        ref="polylineVolume1"
        :positions="[[-85,32],[-85,36],[-89,36]]"
        :shape="shape1"
        material="red"
      ></vc-graphics-polyline-volume>
    </vc-entity>
    <vc-entity>
      <vc-graphics-polyline-volume
        :positions="[-90,32,0,-90,36,100000,-94,36,0]"
        :shape="[{ x: -50000, y: -50000 }, { x: 50000, y: -50000 }, { x: -50000, y: 50000 }, { x: -50000, y: 50000 }]"
        :material="[0,255,0,125]"
        :outline="true"
        outlineColor="black"
        :cornerType="2"
        ref="polylineVolume2"
      ></vc-graphics-polyline-volume>
    </vc-entity>
    <vc-entity>
      <vc-graphics-polyline-volume
        :positions="[{ lng: -95.0, lat: 32.0, height: 0.0 }, { lng: -95.0, lat: 36.0, height: 100000.0 }, { lng: -99.0, lat: 36.0, height: 200000.0 }]"
        :shape="shape3"
        material="blue"
        :cornerType="0"
        ref="polylineVolume3"
      ></vc-graphics-polyline-volume>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const polylineVolume1 = ref(null)
      const polylineVolume2 = ref(null)
      const polylineVolume3 = ref(null)
      const shape1 = ref(null)
      const shape3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
        shape1.value = computeCircle(60000)
        shape3.value = computeStar(7, 70000, 50000)
      }
      const computeCircle = radius => {
        let positions = []
        for (let i = 0; i < 360; i++) {
          let radians = Cesium.Math.toRadians(i)
          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
        }
        return positions
      }
      const computeStar = (arms, rOuter, rInner) => {
        let angle = Math.PI / arms
        let length = 2 * arms
        let positions = new Array(length)
        for (let i = 0; i < length; i++) {
          let r = i % 2 === 0 ? rOuter : rInner
          positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }
        }
        return positions
      }
      // life cycle
      onMounted(() => {
        Promise.all([polylineVolume1.value.createPromise, polylineVolume2.value.createPromise, polylineVolume3.value.createPromise]).then(
          instances => {
            instances[0].viewer.zoomTo(instances[0].viewer.entities)
          }
        )
      })

      return {
        onEntityEvt,
        polylineVolume1,
        polylineVolume2,
        polylineVolume3,
        onViewerReady,
        shape1,
        shape3
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
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the volume. |
| positions | Array | | `optional` A Property specifying the array of Cartesian3 positions which define the line strip. |
| shape | Array | | `optional` A Property specifying the array of Cartesian2 positions which define the shape to be extruded. |
| cornerType | Number | `0` | `optional` A CornerType Property specifying the style of the corners. **ROUNDED: 0, MITERED: 1, BEVELED: 2** |0/1/2|
| granularity | Number | | `optional` A numeric Property specifying the angular distance between each latitude and longitude point. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the volume is filled with the provided material. |
| material | Object\|String\|Array | | `optional` A Property specifying the material used to fill the volume. |
| outline | Boolean | false | `optional` A boolean Property specifying whether the volume is outlined. |
| outlineColor | Object\|String\|Array | | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | | `optional` An enum Property specifying whether the box casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
| distanceDisplayCondition | Object\|Array | | `optional` A Property specifying at what distance from the camera that this volume will be displayed. |

### Events

| Name              | Parameters                         | Description                                                          |
| ----------------- | ---------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | Vue Instance                       | Triggers before the cesiumObject is loaded.                          |
| ready             | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | Vue Instance                       | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged |                                    | Triggers whenever a property or sub-property is changed or modified. |

### Reference

- Refer to the official documentation: **[PolylineVolumeGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html)**
