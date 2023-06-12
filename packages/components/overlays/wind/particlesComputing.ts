import * as Util from './util'
import calculateSpeedFrag from './glsl/calculateSpeed.frag'
import updatePositionFrag from './glsl/updatePosition.frag'
import postProcessingPositionFrag from './glsl/postProcessingPosition.frag'
import CustomPrimitive from './customPrimitive'

class ParticlesComputing {
  windTextures: any
  particlesTextures: any
  primitives: any
  data: any

  constructor(context, data, particleSystemOptions, viewerParameters) {
    this.data = data
    this.createWindTextures(context, data)
    this.createParticlesTextures(context, particleSystemOptions, viewerParameters)
    this.createComputingPrimitives(data, particleSystemOptions, viewerParameters, context)
  }

  createWindTextures(context, data) {
    const windTextureOptions = {
      context: context,
      width: data.dimensions.lon,
      height: data.dimensions.lat * data.dimensions.lev,
      pixelFormat: !context?.webgl2 ? Cesium.PixelFormat.LUMINANCE : Cesium.PixelFormat.RED,
      pixelDatatype: Cesium.PixelDatatype.FLOAT,
      flipY: false,
      sampler: new Cesium.Sampler({
        // the values of texture will not be interpolated
        minificationFilter: Cesium.TextureMinificationFilter.NEAREST,
        magnificationFilter: Cesium.TextureMagnificationFilter.NEAREST
      })
    }

    this.windTextures = {
      U: Util.createTexture(windTextureOptions, data.U.array),
      V: Util.createTexture(windTextureOptions, data.V.array)
    }
  }

  createParticlesTextures(context, particleSystemOptions, viewerParameters) {
    const particlesTextureOptions = {
      context: context,
      width: particleSystemOptions.particlesTextureSize,
      height: particleSystemOptions.particlesTextureSize,
      pixelFormat: Cesium.PixelFormat.RGBA,
      pixelDatatype: Cesium.PixelDatatype.FLOAT,
      flipY: false,
      sampler: new Cesium.Sampler({
        // the values of texture will not be interpolated
        minificationFilter: Cesium.TextureMinificationFilter.NEAREST,
        magnificationFilter: Cesium.TextureMagnificationFilter.NEAREST
      })
    }

    const particlesArray = this.randomizeParticles(particleSystemOptions.maxParticles, viewerParameters)
    const zeroArray = new Float32Array(4 * particleSystemOptions.maxParticles).fill(0)

    this.particlesTextures = {
      previousParticlesPosition: Util.createTexture(particlesTextureOptions, particlesArray),
      currentParticlesPosition: Util.createTexture(particlesTextureOptions, particlesArray),
      nextParticlesPosition: Util.createTexture(particlesTextureOptions, particlesArray),
      postProcessingPosition: Util.createTexture(particlesTextureOptions, particlesArray),

      particlesSpeed: Util.createTexture(particlesTextureOptions, zeroArray)
    }
  }

  randomizeParticles(maxParticles, viewerParameters) {
    const array = new Float32Array(4 * maxParticles)
    for (let i = 0; i < maxParticles; i++) {
      array[4 * i] = Cesium.Math.randomBetween(viewerParameters.lonRange.x, viewerParameters.lonRange.y)
      array[4 * i + 1] = Cesium.Math.randomBetween(viewerParameters.latRange.x, viewerParameters.latRange.y)
      array[4 * i + 2] = Cesium.Math.randomBetween(this.data.lev.min, this.data.lev.max)
      array[4 * i + 3] = 0.0
    }
    return array
  }

  destroyParticlesTextures() {
    Object.keys(this.particlesTextures).forEach(key => {
      this.particlesTextures[key].destroy()
    })
  }

  createComputingPrimitives(data, particleSystemOptions, viewerParameters, context) {
    const webgl2 = context?.webgl2

    let calculateSpeedFragText = calculateSpeedFrag
    if (!webgl2) {
      calculateSpeedFragText = calculateSpeedFragText.replace('in vec2 v_textureCoordinates;', 'varying vec2 v_textureCoordinates;')
      calculateSpeedFragText = calculateSpeedFragText.replace(/texture\(/g, 'texture2D(')
      calculateSpeedFragText = calculateSpeedFragText.replace(/out_FragColor/g, 'gl_FragColor')
    }

    let updatePositionFragText = updatePositionFrag
    if (!webgl2) {
      updatePositionFragText = updatePositionFragText.replace('in vec2 v_textureCoordinates;', 'varying vec2 v_textureCoordinates;')
      updatePositionFragText = updatePositionFragText.replace(/texture\(/g, 'texture2D(')
      updatePositionFragText = updatePositionFragText.replace(/out_FragColor/g, 'gl_FragColor')
    }

    let postProcessingPositionFragText = postProcessingPositionFrag
    if (!webgl2) {
      postProcessingPositionFragText = postProcessingPositionFragText.replace('in vec2 v_textureCoordinates;', 'varying vec2 v_textureCoordinates;')
      postProcessingPositionFragText = postProcessingPositionFragText.replace(/texture\(/g, 'texture2D(')
      postProcessingPositionFragText = postProcessingPositionFragText.replace(/out_FragColor/g, 'gl_FragColor')
    }

    const dimension = new Cesium.Cartesian3(data.dimensions.lon, data.dimensions.lat, data.dimensions.lev)
    const minimum = new Cesium.Cartesian3(data.lon.min, data.lat.min, data.lev.min)
    const maximum = new Cesium.Cartesian3(data.lon.max, data.lat.max, data.lev.max)
    const interval = new Cesium.Cartesian3(
      (maximum.x - minimum.x) / (dimension.x - 1),
      (maximum.y - minimum.y) / (dimension.y - 1),
      dimension.z > 1 ? (maximum.z - minimum.z) / (dimension.z - 1) : 1.0
    )
    const uSpeedRange = new Cesium.Cartesian2(data.U.min, data.U.max)
    const vSpeedRange = new Cesium.Cartesian2(data.V.min, data.V.max)

    const that = this

    this.primitives = {
      calculateSpeed: new CustomPrimitive({
        commandType: 'Compute',
        uniformMap: {
          U: function () {
            return that.windTextures.U
          },
          V: function () {
            return that.windTextures.V
          },
          currentParticlesPosition: function () {
            return that.particlesTextures.currentParticlesPosition
          },
          dimension: function () {
            return dimension
          },
          minimum: function () {
            return minimum
          },
          maximum: function () {
            return maximum
          },
          interval: function () {
            return interval
          },
          uSpeedRange: function () {
            return uSpeedRange
          },
          vSpeedRange: function () {
            return vSpeedRange
          },
          pixelSize: function () {
            return viewerParameters.pixelSize
          },
          speedFactor: function () {
            return particleSystemOptions.speedFactor
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [calculateSpeedFragText]
        }),
        outputTexture: this.particlesTextures.particlesSpeed,
        preExecute: function () {
          // swap textures before binding
          const temp = that.particlesTextures.previousParticlesPosition
          that.particlesTextures.previousParticlesPosition = that.particlesTextures.currentParticlesPosition
          that.particlesTextures.currentParticlesPosition = that.particlesTextures.postProcessingPosition
          that.particlesTextures.postProcessingPosition = temp

          // keep the outputTexture up to date
          that.primitives.calculateSpeed.commandToExecute.outputTexture = that.particlesTextures.particlesSpeed
        }
      }),

      updatePosition: new CustomPrimitive({
        commandType: 'Compute',
        uniformMap: {
          currentParticlesPosition: function () {
            return that.particlesTextures.currentParticlesPosition
          },
          particlesSpeed: function () {
            return that.particlesTextures.particlesSpeed
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [updatePositionFragText]
        }),
        outputTexture: this.particlesTextures.nextParticlesPosition,
        preExecute: function () {
          // keep the outputTexture up to date
          that.primitives.updatePosition.commandToExecute.outputTexture = that.particlesTextures.nextParticlesPosition
        }
      }),

      postProcessingPosition: new CustomPrimitive({
        commandType: 'Compute',
        uniformMap: {
          nextParticlesPosition: function () {
            return that.particlesTextures.nextParticlesPosition
          },
          particlesSpeed: function () {
            return that.particlesTextures.particlesSpeed
          },
          lonRange: function () {
            return viewerParameters.lonRange
          },
          latRange: function () {
            return viewerParameters.latRange
          },
          randomCoefficient: function () {
            const randomCoefficient = Math.random()
            return randomCoefficient
          },
          dropRate: function () {
            return particleSystemOptions.dropRate
          },
          dropRateBump: function () {
            return particleSystemOptions.dropRateBump
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [postProcessingPositionFragText]
        }),
        outputTexture: this.particlesTextures.postProcessingPosition,
        preExecute: function () {
          // keep the outputTexture up to date
          that.primitives.postProcessingPosition.commandToExecute.outputTexture = that.particlesTextures.postProcessingPosition
        }
      })
    }
  }
}
export default ParticlesComputing
