## VcPrimitiveParticle

Loading a ParticleSystem manages the updating and display of a collection of particles. It is equivalent to initializing a `Cesium.ParticleSystem` instance.

### Basic usage

Basic usage of VcPrimitiveParticle component.

:::demo Use the `vc-primitive-particle` tag to add firework particle effects to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady" shouldAnimate>
    <vc-primitive-particle
      :ref="setItemRef"
      v-for="(option, index) of options"
      :key="index"
      :image="option.image"
      :color="option.color"
      :startColor="option.startColor"
      :endColor="option.endColor"
      :particleLife="option.particleLife"
      :speed="option.speed"
      :imageSize="option.imageSize"
      :emissionRate="option.emissionRate"
      :emitter="option.emitter"
      :bursts="option.bursts"
      :lifetime="option.lifetime"
      :updateCallback="option.updateCallback"
      :modelMatrix="option.modelMatrix"
      :emitterModelMatrix="option.emitterModelMatrix"
      @click="onClicked"
      @complete="onComplete"
    >
    </vc-primitive-particle>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        particleCanvas: null,
        options: [],
        list: []
      }
    },
    methods: {
      setItemRef(el) {
        this.list.indexOf(el) === -1 && this.list.push(el)
      },
      onViewerReady({ Cesium, viewer }) {
        var scene = viewer.scene
        scene.debugShowFramesPerSecond = true
        Cesium.Math.setRandomNumberSeed(315)
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108.59777, 40.03883))
        this.emitterInitialLocation = new Cesium.Cartesian3(0.0, 0.0, 100.0)
        this.minimumExplosionSize = 30.0
        this.maximumExplosionSize = 100.0
        this.particlePixelSize = new Cesium.Cartesian2(7.0, 7.0)
        var burstSize = 400.0
        this.lifetime = 5
        var numberOfFireworks = 20.0

        var xMin = -100.0
        var xMax = 100.0
        var yMin = -80.0
        var yMax = 100.0
        var zMin = -50.0
        var zMax = 50.0

        var colorOptions = [
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

        const options = []
        for (var i = 0; i < numberOfFireworks; ++i) {
          var x = Cesium.Math.randomBetween(xMin, xMax)
          var y = Cesium.Math.randomBetween(yMin, yMax)
          var z = Cesium.Math.randomBetween(zMin, zMax)
          var offset = new Cesium.Cartesian3(x, y, z)
          var color = Cesium.Color.fromRandom(colorOptions[i % colorOptions.length])

          var bursts = []
          for (var j = 0; j < 3; ++j) {
            bursts.push(
              new Cesium.ParticleBurst({
                time: Cesium.Math.nextRandomNumber() * this.lifetime,
                minimum: burstSize,
                maximum: burstSize
              })
            )
          }

          options.push(this.createFirework(offset, color, bursts))
        }
        this.options = options
        var camera = viewer.scene.camera
        var cameraOffset = new Cesium.Cartesian3(-300.0, 0.0, 0.0)
        camera.lookAtTransform(this.modelMatrix, cameraOffset)
        camera.lookAtTransform(Cesium.Matrix4.IDENTITY)

        var toFireworks = Cesium.Cartesian3.subtract(this.emitterInitialLocation, cameraOffset, new Cesium.Cartesian3())
        Cesium.Cartesian3.normalize(toFireworks, toFireworks)
        var angle = Cesium.Math.PI_OVER_TWO - Math.acos(Cesium.Cartesian3.dot(toFireworks, Cesium.Cartesian3.UNIT_Z))
        camera.lookUp(angle)
      },
      createFirework(offset, color, bursts) {
        var emitterModelMatrixScratch = new Cesium.Matrix4()
        var position = Cesium.Cartesian3.add(this.emitterInitialLocation, offset, new Cesium.Cartesian3())
        var emitterModelMatrix = Cesium.Matrix4.fromTranslation(position, emitterModelMatrixScratch)
        var particleToWorld = Cesium.Matrix4.multiply(this.modelMatrix, emitterModelMatrix, new Cesium.Matrix4())
        var worldToParticle = Cesium.Matrix4.inverseTransformation(particleToWorld, particleToWorld)

        var size = Cesium.Math.randomBetween(this.minimumExplosionSize, this.maximumExplosionSize)
        var particlePositionScratch = new Cesium.Cartesian3()
        var force = function (particle) {
          var position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch)
          if (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {
            Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity)
          }
        }

        var normalSize = (size - this.minimumExplosionSize) / (this.maximumExplosionSize - this.minimumExplosionSize)
        var minLife = 0.3
        var maxLife = 1.0
        var life = normalSize * (maxLife - minLife) + minLife
        return {
          color: {},
          image: this.getImage(),
          startColor: color,
          endColor: color.withAlpha(0.0),
          particleLife: life,
          speed: 100.0,
          imageSize: this.particlePixelSize,
          emissionRate: 0,
          emitter: new Cesium.SphereEmitter(0.1),
          bursts: bursts,
          lifetime: this.lifetime,
          updateCallback: force,
          modelMatrix: this.modelMatrix,
          emitterModelMatrix: emitterModelMatrix
        }
      },
      getImage() {
        let particleCanvas = this.particleCanvas
        if (!Cesium.defined(particleCanvas)) {
          particleCanvas = document.createElement('canvas')
          particleCanvas.width = 20
          particleCanvas.height = 20
          var context2D = particleCanvas.getContext('2d')
          context2D.beginPath()
          context2D.arc(8, 8, 8, 0, Cesium.Math.TWO_PI, true)
          context2D.closePath()
          context2D.fillStyle = 'rgb(255, 255, 255)'
          context2D.fill()
          this.particleCanvas = particleCanvas
        }
        return particleCanvas
      },
      onComplete(e) {
        console.log(e)
      },
      onClicked(e) {
        console.log(e)
      },
      unload() {
        this.list.forEach(v => {
          v.unload()
        })
      },
      load() {
        this.list.forEach(v => {
          v.load()
        })
      },
      reload() {
        this.list.forEach(v => {
          v.reload()
        })
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| show | boolean | true | `optional`Whether to display the particle system. |
| updateCallback | Function | | `optional` The callback function to be called each frame to update a particle.|
| emitter | Object | | `optional` The particle emitter for this system. |
| modelMatrix | Cesium.Matrix4 | | `optional` The 4x4 transformation matrix that transforms the particle system from model to world coordinates. |
| emitterModelMatrix | Object | | `optional` The 4x4 transformation matrix that transforms the particle system emitter within the particle systems local coordinate system. |
| emissionRate | number | `5` | `optional` The number of particles to emit per second. |
| bursts | Array | `false` | `optional` An array of [ParticleBurst](https://cesium.com/docs/cesiumjs-ref-doc/ParticleBurst.html), emitting bursts of particles at periodic times.|
| loop | boolean | `true` | `optional` Whether the particle system should loop its bursts when it is complete. |
| scale | number | `1.0` | `optional` Sets the scale to apply to the image of the particle for the duration of its particleLife. |
| startScale | number | | `optional` The final scale to apply to the image of the particle at the end of its life. |
| endScale | number | | `optional` Sets the color of a particle for the duration of its particleLife. |
| color | Object\|Array\|string | | `optional` Sets the color of a particle for the duration of its particleLife. |
| startColor | Object\|Array\|string | | `optional` The color of the particle at the beginning of its life. |
| endColor | Object\|Array\|string | | `optional` The color of the particle at the end of its life.|
| image | Object\|string | | `optional` The URI, HTMLImageElement, or HTMLCanvasElement to use for the billboard. |
| imageSize | Object | | `optional` If set, overrides the minimumImageSize and maximumImageSize inputs that scale the particle image's dimensions in pixels. |
| minimumImageSize | Object | | `optional` Sets the minimum bound, width by height, above which to randomly scale the particle image's dimensions in pixels. |
| maximumImageSize | Object | | `optional` Sets the maximum bound, width by height, below which to randomly scale the particle image's dimensions in pixels. |
| speed | number | `1.0` | `optional` If set, overrides the minimumSpeed and maximumSpeed inputs with this value. |
| minimumSpeed | number | | `optional` Sets the minimum bound in meters per second above which a particle's actual speed will be randomly chosen.|
| maximumSpeed | number | | `optional` Sets the maximum bound in meters per second below which a particle's actual speed will be randomly chosen. |
| lifetime | number | | `optional` How long the particle system will emit particles, in seconds. |
| particleLife | number | `5.0` | `optional` If set, overrides the minimumParticleLife and maximumParticleLife inputs with this value. |
| minimumParticleLife | number | | `optional` Sets the minimum bound in seconds for the possible duration of a particle's life above which a particle's actual life will be randomly chosen. |
| maximumParticleLife | number | | `optional` Sets the maximum bound in seconds for the possible duration of a particle's life below which a particle's actual life will be randomly chosen. |
| mass | number | `1.0` | `optional` Sets the minimum and maximum mass of particles in kilograms. |
| minimumMass | number | | `optional` Sets the minimum bound for the mass of a particle in kilograms. A particle's actual mass will be chosen as a random amount above this value. |
| maximumMass | number | | `optional` Sets the maximum mass of particles in kilograms. A particle's actual mass will be chosen as a random amount below this value. |
| enableMouseEvent | boolean | `true` | `optional` Specify whether the mouse event takes effect. |

### Events

| Name         | Parameters                              | Description                                                      |
| ------------ | --------------------------------------- | ---------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                      |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.           |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                     |
| readyPromise |                                         | Triggers when the primitive is ready to render.                  |
| mousedown    | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on this primitive.            |
| mouseup      | (evt: VcPickEvent)                      | Triggers when the mouse bounces up on this primitive.            |
| click        | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the primitive.                 |
| clickout     | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the primitive.            |
| dblclick     | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the primitive. |
| mousemove    | (evt: VcPickEvent)                      | Triggers when the mouse moves on this primitive.                 |
| mouseover    | (evt: VcPickEvent)                      | Triggers when the mouse moves to this primitive.                 |
| mouseout     | (evt: VcPickEvent)                      | Triggers when the mouse moves out of this primitive.             |

### Reference

- Refer to the official documentation: **[ParticleSystem](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html)**
