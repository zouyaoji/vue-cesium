<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 15:37:18
 * @LastEditTime: 2021-11-25 23:50:53
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\overlays\vc-overlay-dynamic.md
-->

## VcOverlayDynamic

Load dynamic objects.

### Basic usage

Basic usage of VcOverlayDynamic component.

:::demo Use the `vc-overlay-dynamic` tag to load and manage a group of dynamic entity objects on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer timeline animation>
    <vc-overlay-dynamic ref="dynamicOverlayRef" v-model:currentTime="currentTime" :dynamicOverlays="dynamicOverlays" @ready="ready">
    </vc-overlay-dynamic>
    <vc-layer-imagery :sortOrder="10">
      <vc-provider-imagery-baidumap></vc-provider-imagery-baidumap>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  import { ref, nextTick, onUnmounted } from 'vue'
  export default {
    setup() {
      const generatePosition = num => {
        let list = []
        for (let i = 0; i < num; i++) {
          let lng = 120.65276089 + Math.random() * 0.5
          let lat = 31.310530293 + Math.random() * 0.5
          list.push([lng, lat])
        }
        return list
      }

      const dynamicOverlays = ref([])
      const dynamicOverlayRef = ref(null)
      const currentTime = ref(null)
      window.dynamicOverlays = dynamicOverlays
      window.currentTime = currentTime

      for (let i = 0; i < 50; i++) {
        dynamicOverlays.value.push({
          //The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.
          maxCacheSize: 10,
          model: {
            uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
            scale: 12
          },
          // trajectory
          path: {
            leadTime: 0,
            trailTime: 0.5,
            resolution: 1,
            width: 3,
            material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }
          },
          // A SampledProperty and a PositionProperty array.
          sampledPositions: [
            {
              position: generatePosition(1)[0], // Given an initial position
              interval: 3
            }
          ]
        })
      }

      const unload = () => {
        dynamicOverlayRef.value.unload()
      }
      const load = () => {
        dynamicOverlayRef.value.load()
      }
      const reload = () => {
        dynamicOverlayRef.value.reload()
      }
      let timer
      const ready = ({ viewer }) => {
        viewer.flyTo(dynamicOverlayRef.value.cesiumObject, {
          duration: 3
        })
        // Change the position of all dynamic objects every 3 seconds
        timer = setInterval(() => {
          dynamicOverlayRef.value.overlays.value.forEach(v => v.addPosition(generatePosition(1)[0], 3))
        }, 3000)
      }

      onUnmounted(() => {
        clearInterval(timer)
      })

      return {
        dynamicOverlays,
        dynamicOverlayRef,
        currentTime,
        unload,
        load,
        reload,
        ready
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
| show | Boolean | `true` | `optional` Specifies whether to display the CustomDataSource that hosts the dynamic overlays. |
| name | String | `'__vc__overlay__dynamic__'` | `optional` Specifies the name of the CustomDataSource. |
| startTime | String\| Cesium.JulianDate | | `optional` The start time of the clock. |
| stopTime | String\| Cesium.JulianDate | | `optional` The stop time of the clock. |
| currentTime | String\| Cesium.JulianDate | | `optional` The current time. |
| clockRange | Number\| Cesium.ClockRange | `0` | `optional` Determines how the clock should behave when Clock#startTime or Clock#stopTime is reached. |
| clockStep | Number\| Cesium.ClockStep | `1` | `optional` Determines if calls to Clock#tick are frame dependent or system clock dependent. |
| shouldAnimate | Boolean | `true` | `optional` Indicates whether Clock#tick should attempt to advance time. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true. |
| multiplier | Number | `1.0` | `optional` Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards. |
| dynamicOverlays | Array\<DynamicOverlayOpts\> | `[]` | `optional` A SampledProperty and a PositionProperty array. |
| defaultInterval | Number | `3.0` | `optional` Specify the default refresh interval of the default position information, and it is available to change the position of the dynamic overlays in real time. |

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Reference

- [DC-SDK](http://dc.dvgis.cn/#/editor?type=layer&example=dynamic)
