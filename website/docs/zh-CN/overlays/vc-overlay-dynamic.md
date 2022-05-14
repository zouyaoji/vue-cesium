<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-24 15:37:18
 * @LastEditTime: 2022-04-28 14:29:47
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
      <vc-imagery-provider-tianditu map-style="vec_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-collection-point v-if="showStop" :points="stops"></vc-collection-point>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-button type="danger" round @click="viewTopDown">俯视</el-button>
    <el-button type="danger" round @click="viewSide">侧视</el-button>
    <el-button type="danger" round @click="trackOverlay('TRACKED')">默认跟随</el-button>
    <el-button type="danger" round @click="trackOverlay('TP')">俯视跟随</el-button>
    <el-button type="danger" round @click="trackOverlay('FP')">第一人称跟随</el-button>
    <el-button type="danger" round @click="trackOverlay('FREE')">取消跟随</el-button>
    <el-radio-group v-model="radio" @change="onRadioChanged">
      <el-radio :label="0">实时轨迹</el-radio>
      <el-radio :label="1">历史轨迹</el-radio>
    </el-radio-group>
    <el-checkbox v-if="radio === 1" v-model="showStop" style="padding-left: 15px;">显示站点</el-checkbox>
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
      const radio = ref(1)
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
            maxCacheSize: 10, // 最大缓存点位数，实时轨迹不要设置太大；历史轨迹要设置得大于总点位数，不然要丢失数据。
            model: {
              uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
              scale: 0.5
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
                position: generatePosition(1, 0.05)[0], // 给一个初始位置 ready 事件才能定位 否则要延后
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
          // 轨迹
          polyline: {
            positions,
            width: 3,
            material: '#69B273',
            depthFailMaterial: '#69B273',
            clampToGround: true
          },
          rectangle: {
            material: 'red',
            coordinates: () => {
              return Cesium.Rectangle.fromDegrees(102, 32, 104, 34)
            }
            // coordinates: [102, 32, 104, 34]
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
        console.log('到达站点：', overlay, stop)
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

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- |---- | ---------------| ----------------- |
| show | boolean | `true` | `optional` 指定加载的动态对象数据源对象是否显示。 |
| name | string | `'__vc__overlay__dynamic__'` | `optional` 指定加载的动态对象数据源名字。 |
| startTime | string\|Date\|JulianDate | | `optional` 指定 `viewer.clock` 时钟的开始时间。 |
| stopTime | string\| Date\|JulianDate | | `optional` 指定 `viewer.clock` 时钟的结束时间。 |
| currentTime | string\| Date\|JulianDate | | `optional` 指定 `viewer.clock` 时钟当前时间。 |
| clockRange | number\| Cesium.ClockRange | `0` | `optional` 指定 `viewer.clock` 时钟走到结束时间时采取的决策。 |
| clockStep | number\| Cesium.ClockStep | `1` | `optional` 指定 `viewer.clock` 时钟的运行是按帧还是按系统时间。 |
| shouldAnimate | boolean | `true` | `optional` 指定 `viewer.clock#tick` 是否改变 `viewer.clock` 时钟当前时间。 |
| canAnimate | boolean | `true` | `optional` 指定 Clock#tick 是否可以驱动时间。 |
| multiplier | number | `1.0` | `optional` 指定 `viewer.clock#tick` 改变 `viewer.clock` 当前时间的倍数。 |
| dynamicOverlays | Array\<DynamicOverlayOpts\> | `[]` | `optional` 指定动态对象采样位置数组。 |
| defaultInterval | number | `3.0` | `optional` 指定默认位置信息默认刷新间隔，实时改变动态模型位置可用。 |
| stopArrivedFlag | string | `'time'` | `optional` 指定到达站点的判定标志。 |
| positionPrecision | number | `0.0000001` | `optional` 指定位置判定精度。 |
| timePrecision | number | `0.01` | `optional` 指定时间判定精度。 |

### 事件

| 事件名                | 参数                                                 | 描述                       |
| --------------------- | ---------------------------------------------------- | -------------------------- |
| beforeLoad            | (instance: VcComponentInternalInstance)              | 对象加载前触发。           |
| ready                 | (readyObj: VcReadyObject)                            | 对象加载成功时触发。       |
| destroyed             | (instance: VcComponentInternalInstance)              | 对象销毁时触发。           |
| onStop                | (clock: Cesium.Clock)                                | 时钟到达结束时间时触发。   |
| stopArrived           | (overlay: DynamicOverlay, position: SampledPosition) | 到达站点时触发。           |
| @update:currentTime   | (currentTime: Cesium.JulianDate)                     | currentTime 改变时触发。   |
| @update:shouldAnimate | (shouldAnimate: boolean)                             | shouldAnimate 改变时触发。 |
| @update:canAnimate    | (canAnimate: boolean)                                | canAnimate 改变时触发。    |
| @update:clockRange    | (clockRange: number )                                | clockRange 改变时触发。    |
| @update:clockStep     | (clockStep: number )                                 | clockStep 改变时触发。     |
| @update:multiplier    | (multiplier: number)                                 | multiplier 改变时触发。    |
| @update:startTime     | (startTime: Cesium.JulianDate)                       | startTime 改变时触发。     |
| @update:stopTime      | (stopTime: Cesium.JulianDate)                        | stopTime 改变时触发。      |

### 方法

<!-- prettier-ignore -->
| 方法名 | 参数 | 描述 |
| ------------------ | --------------------------------------- | ------------------------------------------- |
| load | () => Promise\<false \| VcReadyObject\> | 手动加载组件。 |
| reload | () => Promise\<false \| VcReadyObject\> | 手动重新加载组件。 |
| unload | () => Promise\<boolean\> | 手动卸载组件。 |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject | () => VcCesiumObject | 获取该组件加载的 Cesium 对象。 |
| getOverlay | (e: number \| string \| DynamicOverlay)  => DynamicOverlay | 根据 id 或者索引获取动态对象。 e: 对象 id 或者索引。 |
| getOverlays | () => Array\<DynamicOverlay\> | 获取所有的动态对象。 |
| flyToOverlay | (overlays?: DynamicOverlay \| number \| string \| Array\<DynamicOverlay \| number \| string\>, options?: { duration?: number;      maximumHeight?: number; offset?: VcHeadingPitchRange }) => Promise\<boolean\> | 飞行到动态对象（集合）。 overlays: 动态对象（索引、id）或者动态对象（索引、id）集合。不传或者传入空数组（空对象）则缩放到所有对象。offset: 缩放到对象的相机偏移。|
| zoomToOverlay | (overlays?: DynamicOverlay \| number \| string \| Array\<DynamicOverlay \| number \| string\>, offset?: VcHeadingPitchRange) => Promise\<boolean\> | 缩放到动态对象（集合）。 overlays: 动态对象（索引、id）或者动态对象（索引、id）集合。不传或者传入空数组（空对象）则缩放到所有对象。offset: 缩放到对象的相机偏移。|
| trackOverlay | (trackOverlay?: DynamicOverlay \| string \| number, trackViewOpts?: TrackViewOpts) => void | 跟踪动态对象。trackOverlay: 跟踪对象或者跟踪对象的 id 或者 索引。不传则默认跟踪第一个对象。trackViewOpts: 视角参数。|

### 参考

- [DC-SDK](http://dc.dvgis.cn/#/editor?type=layer&example=dynamic)
