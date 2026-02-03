<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { computed, nextTick, onUnmounted, ref } from 'vue'

const dynamicOverlays = ref([])
const dynamicOverlayRef = ref(null)
const currentTime = ref(null)
const startTime = ref(null)
const stopTime = ref(null)
const clockRange = ref(0)
const radio = ref(1)
const multiplier = ref(1.0)
const showStop = ref(false)
const shouldAnimate = ref(false)

const stops = computed(() => {
  return dynamicOverlays.value
    .map((v) => {
      return v.sampledPositions.map(v => ({ position: v.position, color: 'rgb(255,229,0)' }))
    })?.[0]
})

function makeRealTimeTrajectory() {
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
      maxCacheSize: 10,
      model: {
        uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
        scale: 0.5
      },
      path: {
        leadTime: 0,
        trailTime: 0.5,
        resolution: 1,
        width: 3,
        material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }
      },
      sampledPositions: [
        {
          position: generatePosition(1, 0.05)[0],
          interval: 3,
          id: Cesium.createGuid()
        }
      ]
    })
  }
  return overlays
}

async function makeHistoryTrajectory() {
  const datas = await Cesium.Resource.fetchJson({
    url: '/SampleData/json/trajectory.json'
  })
  const overlays = []
  const sampledPositions = []
  const positions = []
  startTime.value = new Date(datas[0].time)
  currentTime.value = new Date(datas[0].time)
  stopTime.value = new Date(datas[datas.length - 1].time)
  multiplier.value = 10
  clockRange.value = Cesium.ClockRange.LOOP_STOP
  const totalSeconds = Cesium.JulianDate.fromDate(stopTime.value).secondsOfDay - Cesium.JulianDate.fromDate(startTime.value).secondsOfDay
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
    const wheelRadius = 0.52
    const circumference = Math.PI * wheelRadius * 2
    const rotationsPerSecond = metersPerSecond / circumference
    const time = Cesium.JulianDate.fromIso8601(data.time.replace(' ', 'T'))

    wheelAngle += ((Math.PI * 2 * totalSeconds) / datas.length) * rotationsPerSecond
    wheelAngleProperty.addSample(time, wheelAngle)
  }

  const rotationProperty = new Cesium.CallbackProperty((time, result) => {
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
    maxCacheSize: datas.length,
    model: {
      uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb',
      scale: 5,
      runAnimations: false,
      nodeTransformations
    },
    path: {
      leadTime: 0,
      trailTime: 25,
      resolution: 1,
      width: 10,
      material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }
    },
    label: {
      text: new Cesium.CallbackProperty((time) => {
        if (dynamicOverlayRef.value.getOverlays().length) {
          const velocityVector = dynamicOverlayRef.value.getOverlays()[0]._velocityVectorProperty.getValue(time, {})
          const metersPerSecond = Cesium.Cartesian3.magnitude(velocityVector)
          const kmPerHour = Math.round(metersPerSecond * 3.6)
          return `${kmPerHour} km/h`
        }
        return 'hello'
      }, false),
      verticalOrigin: 1,
      showBackground: true,
      font: '20px sans-serif',
      distanceDisplayCondition: [0, 3000],
      eyeOffset: { x: 0, y: 25, z: 0 }
    },
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

function generatePosition(num, range) {
  const list = []
  for (let i = 0; i < num; i++) {
    const lng = 120.65276089 + Math.random() * range
    const lat = 31.310530293 + Math.random() * range
    list.push([lng, lat])
  }
  return list
}

let timer
let _viewer

function unload() {
  dynamicOverlayRef.value.unload()
}
function load() {
  dynamicOverlayRef.value.load()
}
function reload() {
  dynamicOverlayRef.value.reload()
}

function ready({ viewer, cesiumObject }: VcReadyObject) {
  const scene = viewer.scene
  scene.debugShowFramesPerSecond = true
  shouldAnimate.value = true
  viewer.flyTo(cesiumObject as Cesium.Entity, {
    duration: 3
  })
}

async function onRadioChanged(e) {
  timer && clearInterval(timer)
  if (e === 0) {
    dynamicOverlays.value = makeRealTimeTrajectory()
    timer = setInterval(() => {
      dynamicOverlays.value.forEach((v) => {
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
  }
  else {
    dynamicOverlays.value = await makeHistoryTrajectory()

    nextTick(() => {
      _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)
      viewTopDown()
    })
  }
}

function onViewerReady({ viewer }) {
  _viewer = viewer
  onRadioChanged(radio.value)
}

function viewTopDown() {
  if (radio.value === 0) {
    dynamicOverlayRef.value.zoomToOverlay()
  }
  else {
    dynamicOverlayRef.value.zoomToOverlay([], [0, -90, 1500])
  }
}

function viewSide() {
  if (radio.value === 0) {
    dynamicOverlayRef.value.zoomToOverlay([], [-50, -20, 8000])
  }
  else {
    dynamicOverlayRef.value.zoomToOverlay([], [-50, -20, 1800])
  }
}

function trackOverlay(mode) {
  dynamicOverlayRef.value.trackOverlay(0, {
    mode,
    viewFrom: [0, 0, 1800]
  })
}

function stopArrived(overlay) {
  console.log('Arrived at stop:', overlay)
}

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="demo-viewer demo-vc-overlay-dynamic">
    <vc-viewer timeline animation fullscreen-button @ready="onViewerReady">
      <vc-overlay-dynamic
        ref="dynamicOverlayRef"
        v-model:current-time="currentTime"
        v-model:start-time="startTime"
        v-model:stop-time="stopTime"
        :dynamic-overlays="dynamicOverlays"
        :clock-range="clockRange"
        :multiplier="multiplier"
        :should-animate="shouldAnimate"
        @update:should-animate="shouldAnimate = $event"
        @stop-arrived="stopArrived"
        @ready="ready"
      />
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="vec_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-collection-point v-if="showStop" :points="stops" />
    </vc-viewer>
    <el-row class="demo-toolbar">
      <el-button type="danger" round @click="unload">
        Unload
      </el-button>
      <el-button type="danger" round @click="load">
        Load
      </el-button>
      <el-button type="danger" round @click="reload">
        Reload
      </el-button>
      <el-button type="danger" round @click="viewTopDown">
        Top view
      </el-button>
      <el-button type="danger" round @click="viewSide">
        Side view
      </el-button>
      <el-button type="danger" round @click="trackOverlay('TRACKED')">
        Default follow
      </el-button>
      <el-button type="danger" round @click="trackOverlay('TP')">
        Top-down follow
      </el-button>
      <el-button type="danger" round @click="trackOverlay('FP')">
        First-person follow
      </el-button>
      <el-button type="danger" round @click="trackOverlay('FREE')">
        Stop following
      </el-button>
      <el-radio-group v-model="radio" @change="onRadioChanged">
        <el-radio :label="0">
          Live track
        </el-radio>
        <el-radio :label="1">
          History track
        </el-radio>
      </el-radio-group>
      <el-checkbox v-if="radio === 1" v-model="showStop" style="padding-left: 15px;">
        Show stops
      </el-checkbox>
    </el-row>
  </div>
</template>
