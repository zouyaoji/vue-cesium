<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 15:37:18
 * @LastEditTime: 2021-12-31 14:09:06
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\overlays\vc-overlay-dynamic.md
-->

## VcOverlayDynamic

加载动态对象。

### 基础用法

动态对象组件的基础用法。

:::demo 使用 `vc-overlay-dynamic` 标签在三维球上加载并管理一组动态实体对象。

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
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu mapStyle="vec_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-radio-group v-model="radio" @change="onRadioChanged">
      <el-radio :label="0">实时轨迹</el-radio>
      <el-radio :label="1">历史轨迹</el-radio>
    </el-radio-group>
    <el-row v-if="radio === 1">
      <el-button type="danger" round @click="viewTopDown">俯视</el-button>
      <el-button type="danger" round @click="viewSide">侧视</el-button>
      <el-button type="danger" round @click="viewAircraft">跟随</el-button>
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
            maxCacheSize: 10, // 最大缓存点位数，实时轨迹不要设置太大；历史轨迹要设置得大于总点位数，不然要丢失数据。
            model: {
              uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
              scale: 1
            },
            // 轨迹
            path: {
              leadTime: 0,
              trailTime: 0.5,
              resolution: 1,
              width: 3,
              material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }
            },
            // 采样位置
            sampledPositions: [
              {
                position: generatePosition(1, 0.05)[0], // 给一个初始位置
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
        // 时间为字符串时需是 Iso8601 格式的
        startTime.value = new Date(datas[0].time) // datas[0].time.replace(' ', 'T')
        currentTime.value = new Date(datas[0].time) // datas[0].time.replace(' ', 'T')
        stopTime.value = new Date(datas[datas.length - 1].time) // datas[datas.length - 1].time.replace(' ', 'T')
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
          maxCacheSize: datas.length, // 最大缓存点位数，实时轨迹不要设置太大；历史轨迹要设置得大于总点位数，不然要丢失数据。
          model: {
            uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb',
            scale: 5,
            runAnimations: false,
            nodeTransformations: nodeTransformations
          },
          // 尾迹
          path: {
            leadTime: 0,
            trailTime: 25,
            resolution: 1,
            width: 10,
            material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }
          },
          // 标签
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
          // 轨迹
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

### 属性

| 属性名          | 类型                        | 默认值                       | 描述                                                                       |
| --------------- | --------------------------- | ---------------------------- | -------------------------------------------------------------------------- |
| show            | Boolean                     | `true`                       | `optional` 指定加载的动态对象数据源对象是否显示。                          |
| name            | String                      | `'__vc__overlay__dynamic__'` | `optional` 指定加载的动态对象数据源名字。                                  |
| startTime       | String\|Date\|JulianDate    |                              | `optional` 指定 `viewer.clock` 时钟的开始时间。                            |
| stopTime        | String\| Date\|JulianDate   |                              | `optional` 指定 `viewer.clock` 时钟的结束时间。                            |
| currentTime     | String\| Date\|JulianDate   |                              | `optional` 指定 `viewer.clock` 时钟当前时间。                              |
| clockRange      | Number\| Cesium.ClockRange  | `0`                          | `optional` 指定 `viewer.clock` 时钟走到结束时间时采取的决策。              |
| clockStep       | Number\| Cesium.ClockStep   | `1`                          | `optional` 指定 `viewer.clock` 时钟的运行是按帧还是按系统时间。            |
| shouldAnimate   | Boolean                     | `true`                       | `optional` 指定 `viewer.clock#tick` 是否改变 `viewer.clock` 时钟当前时间。 |
| multiplier      | Number                      | `1.0`                        | `optional` 指定 `viewer.clock#tick` 改变 `viewer.clock` 当前时间的倍数。   |
| dynamicOverlays | Array\<DynamicOverlayOpts\> | `[]`                         | `optional` 指定动态对象采样位置数组。                                      |
| defaultInterval | Number                      | `3.0`                        | `optional` 指定默认位置信息默认刷新间隔，实时改变动态模型位置可用。        |

:::tip
时间参数为字符串时，要求是 Iso8601 格式的。
:::

### 事件

| 事件名                | 参数                                    | 描述                       |
| --------------------- | --------------------------------------- | -------------------------- |
| beforeLoad            | (instance: VcComponentInternalInstance) | 对象加载前触发。           |
| ready                 | (readyObj: VcReadyObject)               | 对象加载成功时触发。       |
| destroyed             | (instance: VcComponentInternalInstance) | 对象销毁时触发。           |
| onStop                | Cesium.JulianDate                       | 时钟到达结束时间时触发。   |
| @update:currentTime   | Cesium.JulianDate                       | currentTime 改变时触发。   |
| @update:shouldAnimate |                                         | shouldAnimate 改变时触发。 |
| @update:canAnimate    |                                         | canAnimate 改变时触发。    |
| @update:clockRange    |                                         | clockRange 改变时触发。    |
| @update:clockStep     |                                         | clockStep 改变时触发。     |
| @update:multiplier    |                                         | multiplier 改变时触发。    |
| @update:startTime     |                                         | startTime 改变时触发。     |
| @update:stopTime      |                                         | stopTime 改变时触发。      |

### 参考

- [DC-SDK](http://dc.dvgis.cn/#/editor?type=layer&example=dynamic)
