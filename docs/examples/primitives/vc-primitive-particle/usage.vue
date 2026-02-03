<script setup lang="ts">
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { ref, shallowRef } from 'vue'

const particleCanvas = ref<HTMLCanvasElement | null>(null)
const options = ref<any[]>([])
const list = ref<any[]>([])
const modelMatrix = shallowRef<any>(null)
const emitterInitialLocation = shallowRef<any>(null)
const minimumExplosionSize = ref(30.0)
const maximumExplosionSize = ref(100.0)
const particlePixelSize = shallowRef<any>(null)
const lifetime = ref(5)

function setItemRef(el: any) {
  !list.value.includes(el) && list.value.push(el)
}

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  // window.vm = this
  const scene = viewer.scene
  scene.debugShowFramesPerSecond = true
  Cesium.Math.setRandomNumberSeed(315)
  modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108.59777, 40.03883))
  emitterInitialLocation.value = new Cesium.Cartesian3(0.0, 0.0, 100.0)
  particlePixelSize.value = new Cesium.Cartesian2(7.0, 7.0)
  const burstSize = 400.0
  const numberOfFireworks = 20.0

  const xMin = -100.0
  const xMax = 100.0
  const yMin = -80.0
  const yMax = 100.0
  const zMin = -50.0
  const zMax = 50.0

  const colorOptions = [
    {
      minimumRed: 0.75,
      green: 0.0,
      minimumBlue: 0.8,
      alpha: 1.0
    },
    {
      red: 0.0,
      minimumGreen: 0.75,
      minimumBlue: 0.8,
      alpha: 1.0
    },
    {
      red: 0.0,
      green: 0.0,
      minimumBlue: 0.8,
      alpha: 1.0
    },
    {
      minimumRed: 0.75,
      minimumGreen: 0.75,
      blue: 0.0,
      alpha: 1.0
    }
  ]

  const optionsList = []
  for (let i = 0; i < numberOfFireworks; ++i) {
    const x = Cesium.Math.randomBetween(xMin, xMax)
    const y = Cesium.Math.randomBetween(yMin, yMax)
    const z = Cesium.Math.randomBetween(zMin, zMax)
    const offset = new Cesium.Cartesian3(x, y, z)
    const color = Cesium.Color.fromRandom(colorOptions[i % colorOptions.length])
    console.log(color)

    const bursts = []
    for (let j = 0; j < 3; ++j) {
      bursts.push(
        new Cesium.ParticleBurst({
          time: Cesium.Math.nextRandomNumber() * lifetime.value,
          minimum: burstSize,
          maximum: burstSize
        })
      )
    }

    optionsList.push(createFirework(Cesium, offset, color, bursts))
  }
  options.value = optionsList
  const camera = viewer.scene.camera
  const cameraOffset = new Cesium.Cartesian3(-300.0, 0.0, 0.0)
  camera.lookAtTransform(modelMatrix.value, cameraOffset)
  camera.lookAtTransform(Cesium.Matrix4.IDENTITY)

  const toFireworks = Cesium.Cartesian3.subtract(emitterInitialLocation.value, cameraOffset, new Cesium.Cartesian3())
  Cesium.Cartesian3.normalize(toFireworks, toFireworks)
  const angle = Cesium.Math.PI_OVER_TWO - Math.acos(Cesium.Cartesian3.dot(toFireworks, Cesium.Cartesian3.UNIT_Z))
  camera.lookUp(angle)
}

function createFirework(Cesium: any, offset: any, color: any, bursts: any) {
  const emitterModelMatrixScratch = new Cesium.Matrix4()
  const position = Cesium.Cartesian3.add(emitterInitialLocation.value, offset, new Cesium.Cartesian3())
  const emitterModelMatrix = Cesium.Matrix4.fromTranslation(position, emitterModelMatrixScratch)
  const particleToWorld = Cesium.Matrix4.multiply(modelMatrix.value, emitterModelMatrix, new Cesium.Matrix4())
  const worldToParticle = Cesium.Matrix4.inverseTransformation(particleToWorld, particleToWorld)
  const size = Cesium.Math.randomBetween(minimumExplosionSize.value, maximumExplosionSize.value)
  const particlePositionScratch = new Cesium.Cartesian3()
  const force = function (particle: any) {
    const position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch)
    if (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {
      Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity)
    }
  }

  const normalSize = (size - minimumExplosionSize.value) / (maximumExplosionSize.value - minimumExplosionSize.value)
  const minLife = 0.3
  const maxLife = 1.0
  const life = normalSize * (maxLife - minLife) + minLife
  return {
    color,
    image: getImage(Cesium),
    startColor: color,
    endColor: color.withAlpha(0.0),
    particleLife: life,
    speed: 100.0,
    imageSize: particlePixelSize.value,
    emissionRate: 0,
    emitter: new Cesium.SphereEmitter(0.1),
    bursts,
    lifetime: lifetime.value,
    updateCallback: force,
    modelMatrix: modelMatrix.value,
    emitterModelMatrix
  }
}

function getImage(Cesium: any) {
  if (!Cesium.defined(particleCanvas.value)) {
    const canvas = document.createElement('canvas')
    canvas.width = 20
    canvas.height = 20
    const context2D = canvas.getContext('2d')
    context2D!.beginPath()
    context2D!.arc(8, 8, 8, 0, Cesium.Math.TWO_PI, true)
    context2D!.closePath()
    context2D!.fillStyle = 'rgb(255, 255, 255)'
    context2D!.fill()
    particleCanvas.value = canvas
  }
  return particleCanvas.value
}

function onComplete(e: any) {
  console.log(e)
}

function onClicked(e: any) {
  console.log(e)
}

function unload() {
  list.value.forEach((v) => {
    v.unload()
  })
}

function load() {
  list.value.forEach((v) => {
    v.load()
  })
}

function reload() {
  list.value.forEach((v) => {
    v.reload()
  })
}
</script>

<template>
  <div class="demo-viewer demo-vc-primitive-particle">
    <vc-viewer should-animate @ready="onViewerReady">
      <vc-primitive-particle
        v-for="(option, index) of options"
        :ref="setItemRef"
        :key="index"
        :image="option.image"
        :color="option.color"
        :start-color="option.startColor"
        :end-color="option.endColor"
        :particle-life="option.particleLife"
        :speed="option.speed"
        :image-size="option.imageSize"
        :emission-rate="option.emissionRate"
        :emitter="option.emitter"
        :bursts="option.bursts"
        :lifetime="option.lifetime"
        :update-callback="option.updateCallback"
        :model-matrix="option.modelMatrix"
        :emitter-model-matrix="option.emitterModelMatrix"
        @click="onClicked"
        @complete="onComplete"
      />
    </vc-viewer>
    <div class="demo-toolbar">
      <el-button type="danger" round @click="unload">
        Unload
      </el-button>
      <el-button type="danger" round @click="load">
        Load
      </el-button>
      <el-button type="danger" round @click="reload">
        Reload
      </el-button>
    </div>
  </div>
</template>
