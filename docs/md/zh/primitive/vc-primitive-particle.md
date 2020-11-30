# ParticleSystem

`vc-primitive-particle` 组件用于加载粒子系统。

## 示例

### 加载 ParticleSystem 烟火特效

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" shouldAnimate>
        <vc-primitive-particle
          v-for="(option, index) of options"
          :key="index"
          :image="option.image"
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
          @complete="complete"
        >
        </vc-primitive-particle>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          particleCanvas: null,
          options: []
        }
      },
      methods: {
        complete () {
          console.log('cc')
        },
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = cesiumInstance
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

            this.createFirework(offset, color, bursts)
          }

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
          var force = function(particle) {
            var position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch)
            if (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {
              Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity)
            }
          }

          var normalSize = (size - this.minimumExplosionSize) / (this.maximumExplosionSize - this.minimumExplosionSize)
          var minLife = 0.3
          var maxLife = 1.0
          var life = normalSize * (maxLife - minLife) + minLife
          this.options.push({
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
          })
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
          }
          return particleCanvas
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" shouldAnimate>
      <vc-primitive-particle
        v-for="(option, index) of options"
        :key="index"
        :image="option.image"
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
      >
      </vc-primitive-particle>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        particleCanvas: null,
        options: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = cesiumInstance
        var scene = viewer.scene
        scene.debugShowFramesPerSecond = true
        Cesium.Math.setRandomNumberSeed(315)
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108.59777, 40.03883))
        this.emitterInitialLocation = new Cesium.Cartesian3(0.0, 0.0, 100.0)
        this.minimumExplosionSize = 30.0
        this.maximumExplosionSize = 100.0
        this.particlePixelSize = new Cesium.Cartesian2(7.0, 7.0)
        var burstSize = 400.0
        this.lifetime = 10.0
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

          this.createFirework(offset, color, bursts)
        }

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
        var force = function(particle) {
          var position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch)
          if (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {
            Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity)
          }
        }

        var normalSize = (size - this.minimumExplosionSize) / (this.maximumExplosionSize - this.minimumExplosionSize)
        var minLife = 0.3
        var maxLife = 1.0
        var life = normalSize * (maxLife - minLife) + minLife
        this.options.push({
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
        })
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
        }
        return particleCanvas
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | ---- | ---- | --- |
| show | Boolean | true | `optional`是否显示粒子。  |
| updateCallback | Function | | `optional` 更新回调函数。|
| emitter | Object |  | `optional` 粒子触发器类型。 |
| modelMatrix | Object | | `optional` 4x4转换矩阵，可将粒子系统从模型转换为世界坐标。 |
| emitterModelMatrix | Object | | `optional` 4x4转换矩阵，用于转换粒子系统局部坐标系内的粒子系统发射器。 |
| emissionRate | Number | `5` | `optional` 每秒要发射的粒子数。 |
| bursts | Array | `false` | `optional` ParticleBurst 数组，在周期性时间发射粒子。 |
| loop | Boolean | `true` | `optional` 粒子系统完成后是否应循环其爆发。 |
| scale | Number | `1.0` | `optional` 设置比例尺，以在其粒子寿命期间应用到粒子图像。 |
| startScale | Number |  | `optional` 在粒子寿命开始时应用于粒子图像的初始比例。|
| endScale | Number | | `optional` 在粒子寿命结束时应用于粒子图像的最终比例。 |
| color | Object\|Array\|String | | `optional` 设置粒子在其粒子寿命期间的颜色。 |
| startColor | Object\|Array\|String | | `optional` 粒子在其生命初期的颜色。 |
| endColor | Object\|Array\|String | | `optional` 粒子寿命结束时的颜色。|
| image | Object\|String | | `optional` 用于广告牌的URI，HTMLImageElement或HTMLCanvasElement。 |
| imageSize | Object | | `optional` 如果设置，则将覆盖用来缩放粒子图像尺寸（以像素为单位）的minimumImageSize和maximumImageSize输入。 |
| minimumImageSize | Object | | `optional` 设置宽度的最小范围，以高度为单位，在该范围之上可以随机缩放粒子图像的尺寸（以像素为单位）。 |
| maximumImageSize | Object | | `optional` 设置最大边界（宽度乘以高度），在该边界以下可以随机缩放粒子图像的尺寸（以像素为单位）。 |
| speed | Number | `1.0` | `optional` 如果设置，则用该值覆盖minimumSpeed和maximumSpeed输入。 |
| minimumSpeed | Number | | `optional` 设置以米/秒为单位的最小范围，在该范围上可以随机选择粒子的实际速度。|
| maximumSpeed | Number | | `optional` 设置以米/秒为单位的最大范围，在该范围内将随机选择粒子的实际速度。 |
| lifetime | Number | | `optional` 粒子系统发射粒子的时间（以秒为单位）。 |
| particleLife | Number | `5.0` | `optional` 如果设置，则使用此值覆盖minimumParticleLife和maximumParticleLife输入。 |
| minimumParticleLife | Number | | `optional` 设置以秒为单位的粒子寿命的可能持续时间的最小范围，在该范围内可以随机选择粒子的实际寿命。 |
| maximumParticleLife | Number | | `optional` 设置以秒为单位的粒子生命的可能持续时间的最大范围，在该范围内将随机选择粒子的实际生命。 |
| mass | Number | `1.0` | `optional` 设置粒子的最小和最大质量（以千克为单位）。 |
| minimumMass | Number | | `optional` 设置粒子质量的最小范围（以千克为单位）。 粒子的实际质量将被选择为高于此值的随机量。 |
| maximumMass | Number | | `optional` 设置最大粒子质量（以千克为单位）。 粒子的实际质量将选择为低于此值的随机量。 |

---

- 参考官方文档：**[ParticleSystem](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html)**

## 事件

| 事件名    | 参数                                                | 描述                                                                             |
| --------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready     | {Cesium, viewer, cesiumObject}                      | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| complete  |                                                     | 当粒子系统达到其生命周期尽头时触发事件。                                         |
| mousedown | {button,surfacePosition,target,type,windowPosition} | 鼠标在该图元上按下时触发。                                                       |
| mouseup   | {button,surfacePosition,target,type,windowPosition} | 鼠标在该图元上弹起时触发。                                                       |
| click     | {button,surfacePosition,target,type,windowPosition} | 鼠标单击该图元时触发。                                                           |
| dblclick  | {button,surfacePosition,target,type,windowPosition} | 鼠标左键双击该图元时触发。                                                       |
| mousemove | {button,surfacePosition,target,type,windowPosition} | 鼠标移动到该图元时触发。                                                         |

---
