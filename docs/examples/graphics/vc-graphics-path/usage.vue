<script setup lang="ts">
import { onMounted, ref } from 'vue'

const position = ref<Cesium.SampledPositionProperty>()
const positions = ref<Cesium.Cartesian3[]>([])
const model = ref()
const path = ref()
const availability = ref(null)
const orientation = ref(null)
const entity = ref()
let _viewer

function onEntityEvt(e) {
  console.log(e)
}

function onViewerReady({ Cesium, viewer }) {
  console.log('viewer ready')
  _viewer = viewer
  viewer.scene.globe.enableLighting = true
  viewer.scene.globe.depthTestAgainstTerrain = true
  Cesium.Math.setRandomNumberSeed(3)
  const start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))
  const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())
  viewer.clock.startTime = start.clone()
  viewer.clock.stopTime = stop.clone()
  viewer.clock.currentTime = start.clone()
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP
  viewer.clock.multiplier = 10
  viewer.timeline.zoomTo(start, stop)
  position.value = computeCirclularFlight(-112.110693, 36.0994841, 0.03, start)
  availability.value = new Cesium.TimeIntervalCollection([
    new Cesium.TimeInterval({
      start,
      stop
    })
  ])
  orientation.value = new Cesium.VelocityOrientationProperty(position.value)
}

function computeCirclularFlight(lon, lat, radius, start) {
  const property = new Cesium.SampledPositionProperty()
  for (let i = 0; i <= 360; i += 45) {
    const radians = Cesium.Math.toRadians(i)
    const time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate())
    const pos = Cesium.Cartesian3.fromDegrees(
      lon + radius * 1.5 * Math.cos(radians),
      lat + radius * Math.sin(radians),
      Cesium.Math.nextRandomNumber() * 500 + 1750
    )
    property.addSample(time, pos)
    positions.value.push(pos)
  }
  return property
}

function viewTopDown() {
  _viewer.trackedEntity = undefined
  _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))
}

function viewSide() {
  _viewer.trackedEntity = undefined
  _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))
}

function viewAircraft() {
  _viewer.trackedEntity = entity.value?.getCesiumObject()
}

onMounted(() => {
  model.value?.creatingPromise.then(({ Cesium, viewer }) => {
    viewer.zoomTo(viewer.entities)
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-graphics-path">
    <vc-viewer should-animate animation timeline @ready="onViewerReady">
      <vc-entity ref="entity" :availability="availability" :position="position" :orientation="orientation" description="Hello VueCesium">
        <vc-graphics-path
          ref="path"
          :resolution="1"
          :material="{ fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }"
          :width="10"
        />
        <vc-graphics-model
          ref="model"
          uri="https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb"
          :minimum-pixel-size="128"
        />
      </vc-entity>
      <vc-entity v-for="(pos, index) of positions" :key="`entity${index}`" :position="pos">
        <vc-graphics-point :pixel-size="8" color="TRANSPARENT" outline-color="YELLOW" :outline-width="3" />
      </vc-entity>
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis />
      </vc-layer-imagery>
    </vc-viewer>
    <el-row class="demo-toolbar">
      <el-button type="danger" round @click="viewTopDown">
        俯视
      </el-button>
      <el-button type="danger" round @click="viewSide">
        侧视
      </el-button>
      <el-button type="danger" round @click="viewAircraft">
        跟随
      </el-button>
    </el-row>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
}
</style>
