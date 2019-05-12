import Util from './util'
import CustomPrimitive from './customPrimitive'
import getWind from './glsl/getWind'
import updateSpeed from './glsl/updateSpeed'
import updatePosition from './glsl/updatePosition'
import postProcessingPosition from './glsl/postProcessingPosition'
import postProcessingSpeed from './glsl/postProcessingSpeed'

class ParticlesComputing {
  constructor (context, data, particleSystemOptions, viewerParameters) {
    this.data = data
    this.createWindTextures(context, data)
    this.createParticlesTextures(
      context,
      particleSystemOptions,
      viewerParameters
    )
    this.createComputingPrimitives(
      data,
      particleSystemOptions,
      viewerParameters
    )
  }

  createWindTextures (context, data) {
    var windTextureOptions = {
      context: context,
      width: data.dimensions.lon,
      height: data.dimensions.lat * data.dimensions.lev,
      pixelFormat: Cesium.PixelFormat.LUMINANCE,
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

  randomizeParticles (maxParticles, viewerParameters) {
    var array = new Float32Array(4 * maxParticles)
    for (var i = 0; i < maxParticles; i++) {
      array[4 * i] = Cesium.Math.randomBetween(viewerParameters.lonRange.x, viewerParameters.lonRange.y)
      array[4 * i + 1] = Cesium.Math.randomBetween(viewerParameters.latRange.x, viewerParameters.latRange.y)
      array[4 * i + 2] = Cesium.Math.randomBetween(this.data.lev.min, this.data.lev.max)
      array[4 * i + 3] = 0.0
    }
    return array
  }

  createParticlesTextures (context, particleSystemOptions, viewerParameters) {
    var particlesTextureOptions = {
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

    var particlesArray = this.randomizeParticles(
      particleSystemOptions.maxParticles,
      viewerParameters
    )

    this.particlesTextures = {
      particlesWind: Util.createTexture(particlesTextureOptions),

      currentParticlesPosition: Util.createTexture(
        particlesTextureOptions,
        particlesArray
      ),
      nextParticlesPosition: Util.createTexture(
        particlesTextureOptions,
        particlesArray
      ),

      currentParticlesSpeed: Util.createTexture(particlesTextureOptions),
      nextParticlesSpeed: Util.createTexture(particlesTextureOptions),

      postProcessingPosition: Util.createTexture(
        particlesTextureOptions,
        particlesArray
      ),
      postProcessingSpeed: Util.createTexture(particlesTextureOptions)
    }
  }

  destroyParticlesTextures () {
    Object.keys(this.particlesTextures).forEach(key => {
      this.particlesTextures[key].destroy()
    })
  }

  createComputingPrimitives (data, particleSystemOptions, viewerParameters) {
    const dimension = new Cesium.Cartesian3(
      data.dimensions.lon,
      data.dimensions.lat,
      data.dimensions.lev
    )
    const minimum = new Cesium.Cartesian3(
      data.lon.min,
      data.lat.min,
      data.lev.min
    )
    const maximum = new Cesium.Cartesian3(
      data.lon.max,
      data.lat.max,
      data.lev.max
    )
    const interval = new Cesium.Cartesian3(
      (maximum.x - minimum.x) / (dimension.x - 1),
      (maximum.y - minimum.y) / (dimension.y - 1),
      dimension.z > 1 ? (maximum.z - minimum.z) / (dimension.z - 1) : 1.0
    )
    const uSpeedRange = new Cesium.Cartesian2(data.U.min, data.U.max)
    const vSpeedRange = new Cesium.Cartesian2(data.V.min, data.V.max)

    const that = this

    this.primitives = {
      getWind: new CustomPrimitive({
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
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [getWind]
        }),
        outputTexture: this.particlesTextures.particlesWind,
        preExecute: function () {
          // keep the outputTexture up to date
          that.primitives.getWind.commandToExecute.outputTexture =
            that.particlesTextures.particlesWind
        }
      }),

      updateSpeed: new CustomPrimitive({
        commandType: 'Compute',
        uniformMap: {
          currentParticlesSpeed: function () {
            return that.particlesTextures.currentParticlesSpeed
          },
          particlesWind: function () {
            return that.particlesTextures.particlesWind
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
          sources: [updateSpeed]
        }),
        outputTexture: this.particlesTextures.nextParticlesSpeed,
        preExecute: function () {
          // swap textures before binding
          var temp
          temp = that.particlesTextures.currentParticlesSpeed
          that.particlesTextures.currentParticlesSpeed =
            that.particlesTextures.postProcessingSpeed
          that.particlesTextures.postProcessingSpeed = temp

          // keep the outputTexture up to date
          that.primitives.updateSpeed.commandToExecute.outputTexture =
            that.particlesTextures.nextParticlesSpeed
        }
      }),

      updatePosition: new CustomPrimitive({
        commandType: 'Compute',
        uniformMap: {
          currentParticlesPosition: function () {
            return that.particlesTextures.currentParticlesPosition
          },
          currentParticlesSpeed: function () {
            return that.particlesTextures.currentParticlesSpeed
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [updatePosition]
        }),
        outputTexture: this.particlesTextures.nextParticlesPosition,
        preExecute: function () {
          // swap textures before binding
          var temp
          temp = that.particlesTextures.currentParticlesPosition
          that.particlesTextures.currentParticlesPosition =
            that.particlesTextures.postProcessingPosition
          that.particlesTextures.postProcessingPosition = temp

          // keep the outputTexture up to date
          that.primitives.updatePosition.commandToExecute.outputTexture =
            that.particlesTextures.nextParticlesPosition
        }
      }),

      postProcessingPosition: new CustomPrimitive({
        commandType: 'Compute',
        uniformMap: {
          nextParticlesPosition: function () {
            return that.particlesTextures.nextParticlesPosition
          },
          nextParticlesSpeed: function () {
            return that.particlesTextures.nextParticlesSpeed
          },
          lonRange: function () {
            return viewerParameters.lonRange
          },
          latRange: function () {
            return viewerParameters.latRange
          },
          lonDataRange: function () {
            return viewerParameters.lonDataRange
          },
          latDataRange: function () {
            return viewerParameters.latDataRange
          },
          randomCoef: function () {
            var randomCoef = Math.random()
            return randomCoef
          },
          dropRate: function () {
            return particleSystemOptions.dropRate
          },
          dropRateBump: function () {
            return particleSystemOptions.dropRateBump
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [postProcessingPosition]
        }),
        outputTexture: this.particlesTextures.postProcessingPosition,
        preExecute: function () {
          // keep the outputTexture up to date
          that.primitives.postProcessingPosition.commandToExecute.outputTexture =
            that.particlesTextures.postProcessingPosition
        }
      }),

      postProcessingSpeed: new CustomPrimitive({
        commandType: 'Compute',
        uniformMap: {
          postProcessingPosition: function () {
            return that.particlesTextures.postProcessingPosition
          },
          nextParticlesSpeed: function () {
            return that.particlesTextures.nextParticlesSpeed
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [postProcessingSpeed]
        }),
        outputTexture: this.particlesTextures.postProcessingSpeed,
        preExecute: function () {
          // keep the outputTexture up to date
          that.primitives.postProcessingSpeed.commandToExecute.outputTexture =
            that.particlesTextures.postProcessingSpeed
        }
      })
    }
  }
}

export default ParticlesComputing
