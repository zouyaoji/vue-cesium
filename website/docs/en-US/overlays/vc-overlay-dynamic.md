<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 15:37:18
 * @LastEditTime: 2022-07-04 15:01:32
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
  <vc-viewer timeline animation @ready="onViewerReady" fullscreenButton>
    <vc-overlay-dynamic
      ref="dynamicOverlayRef"
      v-model:current-time="currentTime"
      v-model:start-time="startTime"
      v-model:stop-time="stopTime"
      :dynamic-overlays="dynamicOverlays"
      :clock-range="clockRange"
      :multiplier="multiplier"
      :should-animate="shouldAnimate"
      @update:should-animate="shouldAnimate=$event"
      @stop-arrived="stopArrived"
      @ready="ready"
    >
    </vc-overlay-dynamic>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-osm></vc-imagery-provider-osm>
    </vc-layer-imagery>
    <vc-collection-point v-if="showStop" :points="stops"></vc-collection-point>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-radio-group v-model="radio" @change="onRadioChanged">
      <el-radio :label="0">Real Time</el-radio>
      <el-radio :label="1">History</el-radio>
    </el-radio-group>
    <el-checkbox v-if="radio === 1" v-model="showStop" style="padding-left: 15px;">Show Stops</el-checkbox>
  </el-row>
  <el-row class="demo-toolbar" style="top: 65px">
    <el-button type="danger" round @click="viewTopDown">ViewTopDown</el-button>
    <el-button type="danger" round @click="viewSide">ViewSide</el-button>
    <el-button type="danger" round @click="trackOverlay('TRACKED')">Default Tracking</el-button>
    <el-button type="danger" round @click="trackOverlay('TP')">Tracking(TP)</el-button>
    <el-button type="danger" round @click="trackOverlay('FP')">Tracking(FP)</el-button>
    <el-button type="danger" round @click="trackOverlay('FREE')">No Tracking</el-button>
  </el-row>
</el-row>

<script>
  import { ref, nextTick, onMounted, onUnmounted, computed } from 'vue'
  export default {
    setup() {
      const dynamicOverlays = ref([])
      const dynamicOverlayRef = ref(null)
      const currentTime = ref(null)
      const startTime = ref(null)
      const stopTime = ref(null)
      const clockRange = ref(0)
      const radio = ref(0)
      const multiplier = ref(1.0)
      const text = ref('yeah')
      const showStop = ref(false)
      const shouldAnimate = ref(false)
      const stops = computed(() => {
        return dynamicOverlays.value.map(v => {
          return v.sampledPositions.map(v => ({ position: v.position, color: 'rgb(255,229,0)' }))
        })?.[0]
      })

      const makeRealTimeTrajectory = () => {
        multiplier.value = 1
        clockRange.value = Cesium.ClockRange.UNBOUNDED
        const start = Cesium.JulianDate.fromDate(new Date())
        const stop = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate())
        stopTime.value = stop.clone()
        currentTime.value = start.clone()
        startTime.value = start.clone()

        const overlays = []
        for (let i = 0; i < 50; i++) {
          overlays.push({
            id: i,
            maxCacheSize: 10, //The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.
            model: {
              uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
              scale: 0.5
            },
            // wake
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
                position: generatePosition(1, 0.05)[0], // Given an initial position
                interval: 3,
                id: Cesium.createGuid()
              }
            ]
          })
        }
        return overlays
      }

      const makeHistoryTrajectory = async () => {
        const datas = await Cesium.Resource.fetchJson('./SampleData/json/trajectory.json')
        const overlays = []
        const sampledPositions = []
        const positions = []
        startTime.value = new Date(datas[0].time)
        currentTime.value = new Date(datas[0].time)
        stopTime.value = new Date(datas[datas.length - 1].time)
        multiplier.value = 10
        clockRange.value = Cesium.ClockRange.LOOP_STOP
        const totalSeconds = Cesium.JulianDate.fromDate(stopTime.value).secondsOfDay - Cesium.JulianDate.fromDate(startTime.value).secondsOfDay
        // Store the wheel's rotation over time in a SampledProperty.
        const wheelAngleProperty = new Cesium.SampledProperty(Number)
        let wheelAngle = 0

        for (let i = 0; i < datas.length; i++) {
          const data = datas[i]
          sampledPositions.push({
            position: [data.lon, data.lat],
            time: data.time,
            id: data.id
          })
          positions.push([data.lon, data.lat])

          const metersPerSecond = Number(data.speed)
          const wheelRadius = 0.52 //in meters.
          const circumference = Math.PI * wheelRadius * 2
          const rotationsPerSecond = metersPerSecond / circumference
          const time = Cesium.JulianDate.fromIso8601(data.time.replace(' ', 'T'))

          wheelAngle += ((Math.PI * 2 * totalSeconds) / datas.length) * rotationsPerSecond
          wheelAngleProperty.addSample(time, wheelAngle)
        }

        const rotationProperty = new Cesium.CallbackProperty(function (time, result) {
          const wheelAngle = wheelAngleProperty.getValue(time)
          return Cesium.defined(wheelAngle) ? Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_X, wheelAngle, result) : new Cesium.Quaternion()
        }, false)

        const wheelTransformation = new Cesium.NodeTransformationProperty({
          rotation: rotationProperty
        })

        const nodeTransformations = {
          Wheels: wheelTransformation,
          Wheels_mid: wheelTransformation,
          Wheels_rear: wheelTransformation
        }

        overlays.push({
          maxCacheSize: datas.length, // The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.
          model: {
            uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb',
            scale: 5,
            runAnimations: false,
            nodeTransformations: nodeTransformations
          },
          // wake
          path: {
            leadTime: 0,
            trailTime: 25,
            resolution: 1,
            width: 10,
            material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }
          },
          // label
          label: {
            text: new Cesium.CallbackProperty(time => {
              if (dynamicOverlayRef.value.getOverlays().length) {
                const velocityVector = dynamicOverlayRef.value.getOverlays()[0]._velocityVectorProperty.getValue(time, {})
                var metersPerSecond = Cesium.Cartesian3.magnitude(velocityVector)
                var kmPerHour = Math.round(metersPerSecond * 3.6)

                return kmPerHour + ' km/h'
              }
              return 'hello'
            }, false),
            verticalOrigin: 1,
            showBackground: true,
            font: '20px sans-serif',
            distanceDisplayCondition: [0, 3000],
            eyeOffset: { x: 0, y: 25, z: 0 }
          },
          // trajectory
          polyline: {
            positions,
            width: 3,
            material: '#69B273',
            depthFailMaterial: '#69B273',
            clampToGround: true
          },
          sampledPositions
        })
        return overlays
      }

      const generatePosition = (num, range) => {
        let list = []
        for (let i = 0; i < num; i++) {
          let lng = 120.65276089 + Math.random() * range
          let lat = 31.310530293 + Math.random() * range
          list.push([lng, lat])
        }
        return list
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
      let timer, _viewer

      const ready = ({ viewer, cesiumObject }) => {
        var scene = viewer.scene
        scene.debugShowFramesPerSecond = true
        shouldAnimate.value = true
        viewer.flyTo(cesiumObject, {
          duration: 3
        })
      }

      const onRadioChanged = async e => {
        timer && clearInterval(timer)
        if (e === 0) {
          dynamicOverlays.value = makeRealTimeTrajectory()
          timer = setInterval(() => {
            // dynamicOverlayRef.value.getOverlays().forEach(v => v.addPosition(generatePosition(1, 0.05)[0], 3))
            dynamicOverlays.value.forEach(v => {
              v.sampledPositions.push({
                position: generatePosition(1, 0.05)[0],
                time: Cesium.JulianDate.addSeconds(Cesium.JulianDate.now(), 3, new Cesium.JulianDate()),
                id: Cesium.createGuid()
              })
              v.sampledPositions.length > 10 && v.sampledPositions.splice(0, 1)
            })
          }, 3000)
          nextTick(() => {
            dynamicOverlayRef.value.cesiumObject && _viewer?.flyTo(dynamicOverlayRef.value.cesiumObject, { duration: 3 })
            _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)
          })
        } else {
          dynamicOverlays.value = await makeHistoryTrajectory()

          nextTick(() => {
            const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions
            const positions = sampledPositions.map(v => {
              return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])
            })
            _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)
            viewTopDown()
          })
        }
      }

      const onViewerReady = ({ viewer }) => {
        _viewer = viewer
        onRadioChanged(radio.value)
      }

      const viewTopDown = () => {
        if (radio.value === 0) {
          dynamicOverlayRef.value.zoomToOverlay()
        } else {
          dynamicOverlayRef.value.zoomToOverlay([], [0, -90, 1500])
        }
      }

      const viewSide = () => {
        if (radio.value === 0) {
          dynamicOverlayRef.value.zoomToOverlay([], [-50, -20, 8000])
        } else {
          dynamicOverlayRef.value.zoomToOverlay([], [-50, -20, 1800])
        }
      }

      const trackOverlay = mode => {
        dynamicOverlayRef.value.trackOverlay(0, {
          mode,
          viewFrom: [0, 0, 1800]
        })
      }

      const stopArrived = (overlay, stop) => {
        console.log('arrived stop:', overlay, stop)
      }

      onUnmounted(() => {
        clearInterval(timer)
      })

      return {
        dynamicOverlays,
        dynamicOverlayRef,
        currentTime,
        startTime,
        stopTime,
        clockRange,
        onViewerReady,
        unload,
        load,
        reload,
        ready,
        radio,
        onRadioChanged,
        multiplier,
        viewTopDown,
        viewSide,
        trackOverlay,
        stops,
        showStop,
        stopArrived,
        shouldAnimate
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
| show | boolean | `true` | `optional` Specify whether to display the CustomDataSource that hosts the dynamic overlays. |
| name | string | `'__vc__overlay__dynamic__'` | `optional` Specify the name of the CustomDataSource. |
| startTime | string\| Date \| JulianDate | | `optional` Specify the start time of the clock. |
| stopTime | string\| Date \| JulianDate | | `optional` Specify the stop time of the clock. |
| currentTime | string\| Date \| JulianDate | | `optional` Specify the current time. |
| clockRange | number\| Cesium.ClockRange | `0` | `optional` Determines how the clock should behave when Clock#startTime or Clock#stopTime is reached. |
| clockStep | number\| Cesium.ClockStep | `1` | `optional` Determines if calls to Clock#tick are frame dependent or system clock dependent. |
| shouldAnimate | boolean | `true` | `optional` Indicates whether Clock#tick should attempt to advance time. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true. |
| canAnimate | boolean | `true` | `optional` Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards. |
| multiplier | number | `1.0` | `optional` Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards. |
| dynamicOverlays | Array\<DynamicOverlayOpts\> | `[]` | `optional` Specify the dynamicOverlays array. |
| defaultInterval | number | `3.0` | `optional` Specify the default refresh interval of the default position information, and it is available to change the position of the dynamic overlays in real time. |

### Events

| Name                  | Parameters                                           | Description                                            |
| --------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| beforeLoad            | (instance: VcComponentInternalInstance)              | Triggers before the cesiumObject is loaded.            |
| ready                 | (readyObj: VcReadyObject)                            | Triggers when the cesiumObject is successfully loaded. |
| destroyed             | (instance: VcComponentInternalInstance)              | Triggers when the cesiumObject is destroyed.           |
| onStop                | (clock: Cesium.Clock)                                | Triggers when Clock#stopTime is reached.               |
| stopArrived           | (overlay: DynamicOverlay, position: SampledPosition) | Triggers when a stop is reached.                       |
| @update:currentTime   | (currentTime: Cesium.JulianDate)                     | Triggers when currentTime changed.                     |
| @update:shouldAnimate | (shouldAnimate: boolean)                             | Triggers when shouldAnimate changed.                   |
| @update:canAnimate    | (canAnimate: boolean)                                | Triggers when canAnimate changed.                      |
| @update:clockRange    | (clockRange: number )                                | Triggers when clockRange changed.                      |
| @update:clockStep     | (clockStep: number )                                 | Triggers when clockStep changed.                       |
| @update:multiplier    | (multiplier: number)                                 | Triggers when multiplier changed.                      |
| @update:startTime     | (startTime: Cesium.JulianDate)                       | Triggers when startTime changed.                       |
| @update:stopTime      | (stopTime: Cesium.JulianDate)                        | Triggers when stopTime changed.                        |

### Methods

<!-- prettier-ignore -->
| Name | Parameters | Description |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| load | () => Promise\<false \| VcReadyObject\> | Load components manually. |
| reload | () => Promise\<false \| VcReadyObject\> | Reload components manually. |
| unload | () => Promise\<boolean\> | Destroy the loaded component manually. |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | Get the creatingPromise. |
| getCesiumObject | () => VcCesiumObject | Get the Cesium object loaded by this component. |
| getOverlay | (e: number \| string \| DynamicOverlay)  => DynamicOverlay | Get dynamic overlay by id or index. e: id or index. |
| getOverlays | () => Array\<DynamicOverlay\> | Get dynamic overlays. |
| flyToOverlay | (overlays?: DynamicOverlay \| number \| string \| Array\<DynamicOverlay \| number \| string\>, options?: { duration?: number;      maximumHeight?: number; offset?: VcHeadingPitchRange }) => Promise\<boolean\>  | Fly to dynamic overlay(s). overlays: dynamic overlays (index, id) or a collection of dynamic overlay (index, id). If you don't pass it or pass in an empty array (empty object), it scales to all overlays. offset: The camera offset to zoom to the object. |
| zoomToOverlay | (overlays?: DynamicOverlay \| number \| string \| Array\<DynamicOverlay \| number \| string\>, offset?: VcHeadingPitchRange) => Promise\<boolean\>  | Zoom to dynamic overlay(s). overlays: dynamic overlays (index, id) or a collection of dynamic overlay (index, id). If you don't pass it or pass in an empty array (empty object), it scales to all overlays. offset: The camera offset to zoom to the object. |
| trackOverlay | (trackOverlay?: DynamicOverlay \| string \| number, trackViewOpts?: TrackViewOpts) => void | Track dynamic overlay. trackOverlay: tracked overlay or tracked overlay's id or index. If not passed, the first overlay is tracked by default. trackViewOpts: View parameters. |

### Reference

- [DC-SDK](http://dc.dvgis.cn/#/editor?type=layer&example=dynamic)
