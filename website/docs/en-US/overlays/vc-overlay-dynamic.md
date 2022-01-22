<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 15:37:18
 * @LastEditTime: 2021-12-29 13:35:10
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
      v-model:currentTime="currentTime"
      v-model:startTime="startTime"
      v-model:stopTime="stopTime"
      :dynamicOverlays="dynamicOverlays"
      :clockRange="clockRange"
      :multiplier="multiplier"
      @ready="ready"
    >
    </vc-overlay-dynamic>
    <vc-layer-imagery :sortOrder="10">
      <vc-imagery-provider-osm></vc-imagery-provider-osm>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-radio-group v-model="radio" @change="onRadioChanged">
      <el-radio :label="0">Real Time</el-radio>
      <el-radio :label="1">History</el-radio>
    </el-radio-group>
    <el-row v-if="radio === 1">
      <el-button type="danger" round @click="viewTopDown">ViewTopDown</el-button>
      <el-button type="danger" round @click="viewSide">ViewSide</el-button>
      <el-button type="danger" round @click="viewAircraft">ViewAircraft</el-button>
    </el-row>
  </el-row>
</el-row>

<script>
  import { ref, nextTick, onMounted, onUnmounted } from 'vue'
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
            maxCacheSize: 10, //The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.
            model: {
              uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
              scale: 1
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
                interval: 3
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
        // The time string must be in Iso8601 format
        startTime.value = datas[0].time.replace(' ', 'T')
        currentTime.value = datas[0].time.replace(' ', 'T')
        stopTime.value = datas[datas.length - 1].time.replace(' ', 'T')
        multiplier.value = 10
        clockRange.value = Cesium.ClockRange.LOOP_STOP
        const totalSeconds = Cesium.JulianDate.fromIso8601(stopTime.value).secondsOfDay - Cesium.JulianDate.fromIso8601(startTime.value).secondsOfDay
        // Store the wheel's rotation over time in a SampledProperty.
        const wheelAngleProperty = new Cesium.SampledProperty(Number)
        let wheelAngle = 0

        for (let i = 0; i < datas.length; i++) {
          const data = datas[i]
          sampledPositions.push({
            position: [data.lon, data.lat],
            time: data.time.replace(' ', 'T')
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
          return Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_X, wheelAngleProperty.getValue(time), result)
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
              if (dynamicOverlayRef.value.overlays.value.length) {
                const velocityVector = dynamicOverlayRef.value.overlays.value[0]._velocityVectorProperty.getValue(time, {})
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
        viewer.flyTo(cesiumObject, {
          duration: 3
        })
      }

      const onRadioChanged = async e => {
        timer && clearInterval(timer)
        if (e === 0) {
          dynamicOverlays.value = makeRealTimeTrajectory()
          timer = setInterval(() => {
            dynamicOverlayRef.value.overlays.value.forEach(v => v.addPosition(generatePosition(1, 0.05)[0], 3))
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
        _viewer.trackedEntity = undefined
        const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions
        const positions = sampledPositions.map(v => {
          return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])
        })
        const boundingSphere = Cesium.BoundingSphere.fromPoints(positions)
        _viewer.camera.flyToBoundingSphere(boundingSphere, {
          duration: 1.5,
          offset: new Cesium.HeadingPitchRange(Cesium.Math.toRadians(360), Cesium.Math.toRadians(-90), boundingSphere.radius * 5)
        })
      }

      const viewSide = () => {
        _viewer.trackedEntity = undefined
        const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions
        const positions = sampledPositions.map(v => {
          return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])
        })
        const boundingSphere = Cesium.BoundingSphere.fromPoints(positions)
        _viewer.camera.flyToBoundingSphere(boundingSphere, {
          duration: 1.5,
          offset: new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), boundingSphere.radius * 2)
        })
      }

      const viewAircraft = () => {
        _viewer.trackedEntity = dynamicOverlayRef.value.cesiumObject.entities.values[0]
        const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions
        const positions = sampledPositions.map(v => {
          return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])
        })
        const boundingSphere = Cesium.BoundingSphere.fromPoints(positions)
        dynamicOverlayRef.value.cesiumObject.entities.values[0].viewFrom = new Cesium.Cartesian3(boundingSphere.radius, 0, boundingSphere.radius)
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
        viewAircraft
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
| startTime | String\| Date \| JulianDate | | `optional` The start time of the clock. |
| stopTime | String\| Date \| JulianDate | | `optional` The stop time of the clock. |
| currentTime | String\| Date \| JulianDate | | `optional` The current time. |
| clockRange | Number\| Cesium.ClockRange | `0` | `optional` Determines how the clock should behave when Clock#startTime or Clock#stopTime is reached. |
| clockStep | Number\| Cesium.ClockStep | `1` | `optional` Determines if calls to Clock#tick are frame dependent or system clock dependent. |
| shouldAnimate | Boolean | `true` | `optional` Indicates whether Clock#tick should attempt to advance time. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true. |
| multiplier | Number | `1.0` | `optional` Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards. |
| dynamicOverlays | Array\<DynamicOverlayOpts\> | `[]` | `optional` A SampledProperty and a PositionProperty array. |
| defaultInterval | Number | `3.0` | `optional` Specify the default refresh interval of the default position information, and it is available to change the position of the dynamic overlays in real time. |

### Events

| Name                  | Parameters                         | Description                                                |
| --------------------- | ---------------------------------- | ---------------------------------------------------------- |
| beforeLoad            | Vue Instance                       | Triggers before the cesiumObject is loaded.                |
| ready                 | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.     |
| destroyed             | Vue Instance                       | Triggers when the cesiumObject is destroyed.               |
| onStop                | Cesium.JulianDate                  | An Event that is fired whenever Clock#stopTime is reached. |
| @update:currentTime   | Cesium.JulianDate                  | Triggered when currentTime changed.                        |
| @update:shouldAnimate |                                    | Triggered when shouldAnimate changed.                      |
| @update:canAnimate    |                                    | Triggered when canAnimate changed.                         |
| @update:clockRange    |                                    | Triggered when clockRange changed.                         |
| @update:clockStep     |                                    | Triggered when clockStep changed.                          |
| @update:multiplier    |                                    | Triggered when multiplier changed.                         |
| @update:startTime     |                                    | Triggered when startTime changed.                          |
| @update:stopTime      |                                    | Triggered when stopTime changed.                           |

### Reference

- [DC-SDK](http://dc.dvgis.cn/#/editor?type=layer&example=dynamic)
