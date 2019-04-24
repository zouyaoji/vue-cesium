import Util from './util'
import DataProcess from './dataProcess'
import CustomPrimitive from './customPrimitive'
let Cesium = {}
class ParticleSystem {
  constructor (
    CesiumJS,
    cesiumContext,
    windData,
    particleSystemOptions,
    fileOptions,
    viewerParameters
  ) {
    Cesium = CesiumJS
    this.context = cesiumContext
    this.data = windData

    this.particleSystemOptions = particleSystemOptions
    this.particleSystemOptions.particlesTextureSize = Math.ceil(
      Math.sqrt(this.particleSystemOptions.maxParticles)
    )

    this.particlesArray = DataProcess.randomizeParticleLonLatLev(
      this.particleSystemOptions.maxParticles,
      viewerParameters.lonLatRange
    )
    this.particleGeometry = this.setupParticleGeometry()

    this.fileOptions = fileOptions

    this.viewerParameters = viewerParameters

    this.clearCommand = new Cesium.ClearCommand({
      color: new Cesium.Color(0.0, 0.0, 0.0, 0.0),
      depth: 1.0,
      framebuffer: undefined
    })

    /**
     * @typedef {Object} uniformVariables
     * @property {Cesium.Texture} U
     * @property {Cesium.Texture} V
     * @property {Cesium.Texture} colorTable
     * @property {Cesium.Cartesian2} lonRange
     * @property {Cesium.Cartesian2} latRange
     * @property {Number} pixelSize
     * @property {Number} speedFactor
     */

    /**
     * @type {uniformVariables}
     */
    this.uniformVariables = {
      lonRange: new Cesium.Cartesian2(),
      latRange: new Cesium.Cartesian2()
    }

    this.setComputeShaderParameters()
    this.setupDataTextures()

    /**
     * @typedef {Object} outputTextures
     * @property {Cesium.Texture} currentParticlesPosition
     * @property {Cesium.Texture} nextParticlesPosition
     * @property {Cesium.Texture} particlesRelativeSpeed
     * @property {Cesium.Texture} currentParticlesRandomized
     * @property {Cesium.Texture} nextParticlesRandomized
     */

    /**
     * @type {outputTextures}
     */
    this.outputTextures = {}
    this.setupParticlesTextures(this.particlesArray)

    /**
     * @typedef {Object} framebuffers
     * @property {Cesium.Framebuffer} segments
     * @property {Cesium.Framebuffer} currentTrails
     * @property {Cesium.Framebuffer} nextTrails
     */

    /**
     * @type {framebuffers}
     */
    this.framebuffers = {}
    this.setupOutputFramebuffers()

    this.primitives = {
      particlesUpdate: this.initParticlesUpdatePrimitive(),
      particlesRandomize: this.initParticlesRandomizePrimitive(),
      segments: this.initSegmentsPrimitive(),
      trails: this.initTrailsPrimitive(),
      screen: this.initScreenPrimitive()
    }
  }

  setComputeShaderParameters () {
    var lonLatRange = this.viewerParameters.lonLatRange
    this.uniformVariables.lonRange.x = lonLatRange.lon.min
    this.uniformVariables.lonRange.y = lonLatRange.lon.max
    this.uniformVariables.latRange.x = lonLatRange.lat.min
    this.uniformVariables.latRange.y = lonLatRange.lat.max

    this.uniformVariables.pixelSize = this.viewerParameters.pixelSize
    this.uniformVariables.speedFactor = this.particleSystemOptions.speedFactor
  }

  setupDataTextures () {
    const uvTextureOptions = {
      context: this.context,
      width: this.data.dimensions.lon,
      height: this.data.dimensions.lat * this.data.dimensions.lev,
      pixelFormat: Cesium.PixelFormat.LUMINANCE,
      pixelDatatype: Cesium.PixelDatatype.FLOAT,
      flipY: false, // the data we provide should not be flipped
      sampler: new Cesium.Sampler({
        // the values of data texture should not be interpolated
        minificationFilter: Cesium.TextureMinificationFilter.NEAREST,
        magnificationFilter: Cesium.TextureMagnificationFilter.NEAREST
      })
    }

    this.uniformVariables.U = Util.createTexture(
      uvTextureOptions,
      this.data.U.array
    )
    this.uniformVariables.V = Util.createTexture(
      uvTextureOptions,
      this.data.V.array
    )

    const colorTableTextureOptions = {
      context: this.context,
      width: this.data.colorTable.colorNum,
      height: 1,
      pixelFormat: Cesium.PixelFormat.RGB,
      pixelDatatype: Cesium.PixelDatatype.FLOAT,
      sampler: new Cesium.Sampler({
        minificationFilter: Cesium.TextureMinificationFilter.LINEAR,
        magnificationFilter: Cesium.TextureMagnificationFilter.LINEAR
      })
    }
    this.uniformVariables.colorTable = Util.createTexture(
      colorTableTextureOptions,
      this.data.colorTable.array
    )
  }

  setupParticleGeometry () {
    const repeatVertex = 4

    var particlesST = []
    for (var s = 0; s < this.particleSystemOptions.particlesTextureSize; s++) {
      for (
        var t = 0;
        t < this.particleSystemOptions.particlesTextureSize;
        t++
      ) {
        for (var i = 0; i < repeatVertex; i++) {
          particlesST.push(s / this.particleSystemOptions.particlesTextureSize)
          particlesST.push(t / this.particleSystemOptions.particlesTextureSize)
        }
      }
    }
    particlesST = new Float32Array(particlesST)

    var particlesNormal = []
    const pointToUse = [-1, 1]
    const offsetSign = [-1, 1]
    for (let i = 0; i < this.particleSystemOptions.maxParticles; i++) {
      for (let j = 0; j < repeatVertex / 2; j++) {
        for (let k = 0; k < repeatVertex / 2; k++) {
          particlesNormal.push(pointToUse[j])
          particlesNormal.push(offsetSign[k])
          particlesNormal.push(0)
        }
      }
    }
    particlesNormal = new Float32Array(particlesNormal)

    const indexSize = 6 * this.particleSystemOptions.maxParticles
    var vertexIndexes = new Uint32Array(indexSize)
    for (let i = 0, j = 0, vertex = 0;
      i < this.particleSystemOptions.maxParticles;
      i++
    ) {
      vertexIndexes[j++] = vertex + 0
      vertexIndexes[j++] = vertex + 1
      vertexIndexes[j++] = vertex + 2
      vertexIndexes[j++] = vertex + 2
      vertexIndexes[j++] = vertex + 1
      vertexIndexes[j++] = vertex + 3
      vertex += 4
    }

    var particleGeometry = new Cesium.Geometry({
      attributes: new Cesium.GeometryAttributes({
        st: new Cesium.GeometryAttribute({
          componentDatatype: Cesium.ComponentDatatype.FLOAT,
          componentsPerAttribute: 2,
          values: particlesST
        }),
        normal: new Cesium.GeometryAttribute({
          componentDatatype: Cesium.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: particlesNormal
        })
      }),
      indices: vertexIndexes
    })

    return particleGeometry
  }

  setupParticlesTextures () {
    const particlesTextureOptions = {
      context: this.context,
      width: this.particleSystemOptions.particlesTextureSize,
      height: this.particleSystemOptions.particlesTextureSize,
      pixelFormat: Cesium.PixelFormat.RGB,
      pixelDatatype: Cesium.PixelDatatype.FLOAT,
      sampler: new Cesium.Sampler({
        // the values of particles texture should not be interpolated
        minificationFilter: Cesium.TextureMinificationFilter.NEAREST,
        magnificationFilter: Cesium.TextureMagnificationFilter.NEAREST
      })
    }

    var particlesPositionTexture0 = Util.createTexture(
      particlesTextureOptions,
      this.particlesArray
    )
    var particlesPositionTexture1 = Util.createTexture(
      particlesTextureOptions,
      this.particlesArray
    )

    var particlesPositionTexture2 = Util.createTexture(
      particlesTextureOptions,
      this.particlesArray
    )
    var particlesPositionTexture3 = Util.createTexture(
      particlesTextureOptions,
      this.particlesArray
    )

    this.outputTextures.particlesRelativeSpeed = Util.createTexture(
      particlesTextureOptions
    )

    // used for ping-pong render
    this.outputTextures.currentParticlesPosition = particlesPositionTexture0
    this.outputTextures.nextParticlesPosition = particlesPositionTexture1

    this.outputTextures.currentParticlesRandomized = particlesPositionTexture2
    this.outputTextures.nextParticlesRandomized = particlesPositionTexture3
  }

  setupOutputFramebuffers () {
    const colorTextureOptions = {
      context: this.context,
      width: this.context.drawingBufferWidth,
      height: this.context.drawingBufferHeight,
      pixelFormat: Cesium.PixelFormat.RGBA,
      pixelDatatype: Cesium.PixelDatatype.UNSIGNED_BYTE
    }

    const depthTextureOptions = {
      context: this.context,
      width: this.context.drawingBufferWidth,
      height: this.context.drawingBufferHeight,
      pixelFormat: Cesium.PixelFormat.DEPTH_COMPONENT,
      pixelDatatype: Cesium.PixelDatatype.UNSIGNED_INT
    }

    var segmentsColorTexture = Util.createTexture(colorTextureOptions)
    var segmentsDepthTexture = Util.createTexture(depthTextureOptions)
    this.framebuffers.segments = Util.createFramebuffer(
      this.context,
      segmentsColorTexture,
      segmentsDepthTexture
    )

    var trailsColorTexture0 = Util.createTexture(colorTextureOptions)
    var trailsDepthTexture0 = Util.createTexture(depthTextureOptions)
    var trailsFramebuffer0 = Util.createFramebuffer(
      this.context,
      trailsColorTexture0,
      trailsDepthTexture0
    )

    var trailsColorTexture1 = Util.createTexture(colorTextureOptions)
    var trailsDepthTexture1 = Util.createTexture(depthTextureOptions)
    var trailsFramebuffer1 = Util.createFramebuffer(
      this.context,
      trailsColorTexture1,
      trailsDepthTexture1
    )

    // used for ping-pong render
    this.framebuffers.currentTrails = trailsFramebuffer0
    this.framebuffers.nextTrails = trailsFramebuffer1
  }

  initParticlesUpdatePrimitive () {
    const minimum = new Cesium.Cartesian3(
      this.data.lon.min,
      this.data.lat.min,
      this.data.lev.min
    )
    const maximum = new Cesium.Cartesian3(
      this.data.lon.max,
      this.data.lat.max,
      this.data.lev.max
    )
    const dimension = new Cesium.Cartesian3(
      this.data.dimensions.lon,
      this.data.dimensions.lat,
      this.data.dimensions.lev
    )
    const interval = new Cesium.Cartesian3(
      (maximum.x - minimum.x) / (dimension.x - 1),
      (maximum.y - minimum.y) / (dimension.y - 1),
      dimension.z > 1 ? (maximum.z - minimum.z) / (dimension.z - 1) : 1.0
    )
    const uSpeedRange = new Cesium.Cartesian2(this.data.U.min, this.data.U.max)
    const vSpeedRange = new Cesium.Cartesian2(this.data.V.min, this.data.V.max)

    const that = this
    const uniformMap = {
      U: function () {
        return that.uniformVariables.U
      },
      V: function () {
        return that.uniformVariables.V
      },
      currentParticlesPosition: function () {
        return that.outputTextures.currentParticlesPosition
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
        return that.uniformVariables.pixelSize
      },
      speedFactor: function () {
        return that.uniformVariables.speedFactor
      }
    }

    const fragmentShaderSource = new Cesium.ShaderSource({
      sources: [Util.loadText(this.fileOptions.glslDirectory + 'update.frag')]
    })

    var primitive = new CustomPrimitive({
      commandType: 'Compute',
      uniformMap: uniformMap,
      fragmentShaderSource: fragmentShaderSource,
      outputTextures: [
        this.outputTextures.nextParticlesPosition,
        this.outputTextures.particlesRelativeSpeed
      ]
    })

    // redefine the preExecute function for ping-pong particles computation
    primitive.preExecute = function () {
      // swap framebuffers before binding them
      var temp

      temp = that.outputTextures.currentParticlesPosition
      that.outputTextures.currentParticlesPosition =
        that.outputTextures.nextParticlesRandomized
      that.outputTextures.nextParticlesRandomized = temp

      // keep the outputTextures up to date
      this.commandToExecute.outputTextures = [
        that.outputTextures.nextParticlesPosition,
        that.outputTextures.particlesRelativeSpeed
      ]
    }

    return primitive
  }

  initParticlesRandomizePrimitive () {
    const that = this
    const uniformMap = {
      currentParticlesPosition: function () {
        return that.outputTextures.currentParticlesPosition
      },
      nextParticlesPosition: function () {
        return that.outputTextures.nextParticlesPosition
      },
      particlesRelativeSpeed: function () {
        return that.outputTextures.particlesRelativeSpeed
      },
      lonRange: function () {
        return that.uniformVariables.lonRange
      },
      latRange: function () {
        return that.uniformVariables.latRange
      },
      randomCoef: function () {
        var randomCoef = Math.random()
        return randomCoef
      },
      dropRate: function () {
        return that.particleSystemOptions.dropRate
      },
      dropRateBump: function () {
        return that.particleSystemOptions.dropRateBump
      }
    }

    const fragmentShaderSource = new Cesium.ShaderSource({
      sources: [Util.loadText(this.fileOptions.glslDirectory + 'random.frag')]
    })

    var primitive = new CustomPrimitive({
      commandType: 'Compute',
      uniformMap: uniformMap,
      fragmentShaderSource: fragmentShaderSource,
      outputTextures: [
        this.outputTextures.currentParticlesRandomized,
        this.outputTextures.nextParticlesRandomized
      ]
    })

    primitive.preExecute = function () {
      // keep the outputTextures up to date
      this.commandToExecute.outputTextures = [
        that.outputTextures.currentParticlesRandomized,
        that.outputTextures.nextParticlesRandomized
      ]
    }

    return primitive
  }

  initSegmentsPrimitive () {
    const attributeLocations = {
      st: 0,
      normal: 1
    }

    const that = this
    const uniformMap = {
      currentParticlesRandomized: function () {
        return that.outputTextures.currentParticlesRandomized
      },
      nextParticlesRandomized: function () {
        return that.outputTextures.nextParticlesRandomized
      },
      particlesRelativeSpeed: function () {
        return that.outputTextures.particlesRelativeSpeed
      },
      colorTable: function () {
        return that.uniformVariables.colorTable
      },
      particleHeight: function () {
        return that.particleSystemOptions.particleHeight
      },
      aspect: function () {
        return (
          that.context.drawingBufferWidth / that.context.drawingBufferHeight
        )
      },
      pixelSize: function () {
        return that.uniformVariables.pixelSize
      },
      lineWidth: function () {
        return that.particleSystemOptions.lineWidth
      }
    }

    const rawRenderState = Util.createRawRenderState({
      // undefined value means let Cesium deal with it
      viewport: undefined,
      depthTest: {
        enabled: true
      },
      depthMask: true
    })

    const vertexShaderSource = new Cesium.ShaderSource({
      sources: [
        Util.loadText(this.fileOptions.glslDirectory + 'segmentDraw.vert')
      ]
    })

    const fragmentShaderSource = new Cesium.ShaderSource({
      sources: [
        Util.loadText(this.fileOptions.glslDirectory + 'segmentDraw.frag')
      ]
    })

    var primitive = new CustomPrimitive({
      geometry: this.particleGeometry,
      attributeLocations: attributeLocations,
      primitiveType: Cesium.PrimitiveType.TRIANGLES,
      uniformMap: uniformMap,
      vertexShaderSource: vertexShaderSource,
      fragmentShaderSource: fragmentShaderSource,
      rawRenderState: rawRenderState,
      framebuffer: this.framebuffers.segments,
      autoClear: true
    })

    // keep the framebuffer up to date
    primitive.preExecute = function () {
      this.clearCommand.framebuffer = that.framebuffers.segments
      this.commandToExecute.framebuffer = that.framebuffers.segments
    }

    return primitive
  }

  initTrailsPrimitive () {
    const attributeLocations = {
      position: 0,
      st: 1
    }

    const that = this
    const uniformMap = {
      segmentsColorTexture: function () {
        return that.framebuffers.segments.getColorTexture(0)
      },
      segmentsDepthTexture: function () {
        return that.framebuffers.segments.depthTexture
      },
      currentTrailsColor: function () {
        return that.framebuffers.currentTrails.getColorTexture(0)
      },
      trailsDepthTexture: function () {
        return that.framebuffers.currentTrails.depthTexture
      },
      fadeOpacity: function () {
        return that.particleSystemOptions.fadeOpacity
      }
    }

    const rawRenderState = Util.createRawRenderState({
      viewport: undefined,
      depthTest: {
        enabled: true,
        func: Cesium.DepthFunction.ALWAYS // always pass depth test for the full control of depth information
      },
      depthMask: true
    })

    // prevent Cesium from writing depth because the depth here should be written manually
    const vertexShaderSource = new Cesium.ShaderSource({
      defines: ['DISABLE_GL_POSITION_LOG_DEPTH'],
      sources: [
        Util.loadText(this.fileOptions.glslDirectory + 'fullscreen.vert')
      ]
    })

    const fragmentShaderSource = new Cesium.ShaderSource({
      defines: ['DISABLE_LOG_DEPTH_FRAGMENT_WRITE'],
      sources: [
        Util.loadText(this.fileOptions.glslDirectory + 'trailDraw.frag')
      ]
    })

    var primitive = new CustomPrimitive({
      geometry: Util.getFullscreenQuad(),
      attributeLocations: attributeLocations,
      primitiveType: Cesium.PrimitiveType.TRIANGLES,
      uniformMap: uniformMap,
      vertexShaderSource: vertexShaderSource,
      fragmentShaderSource: fragmentShaderSource,
      rawRenderState: rawRenderState,
      framebuffer: this.framebuffers.nextTrails,
      autoClear: true
    })

    // redefine the preExecute function for ping-pong trails render
    primitive.preExecute = function () {
      var temp
      temp = that.framebuffers.currentTrails
      that.framebuffers.currentTrails = that.framebuffers.nextTrails
      that.framebuffers.nextTrails = temp

      this.commandToExecute.framebuffer = that.framebuffers.nextTrails
      this.clearCommand.framebuffer = that.framebuffers.nextTrails
    }

    return primitive
  }

  initScreenPrimitive () {
    const attributeLocations = {
      position: 0,
      st: 1
    }

    const that = this
    const uniformMap = {
      trailsColorTexture: function () {
        return that.framebuffers.nextTrails.getColorTexture(0)
      },
      trailsDepthTexture: function () {
        return that.framebuffers.nextTrails.depthTexture
      }
    }

    const rawRenderState = Util.createRawRenderState({
      viewport: undefined,
      depthTest: {
        enabled: false
      },
      depthMask: true,
      blending: {
        enabled: true
      }
    })

    // prevent Cesium from writing depth because the depth here should be written manually
    const vertexShaderSource = new Cesium.ShaderSource({
      defines: ['DISABLE_GL_POSITION_LOG_DEPTH'],
      sources: [
        Util.loadText(this.fileOptions.glslDirectory + 'fullscreen.vert')
      ]
    })

    const fragmentShaderSource = new Cesium.ShaderSource({
      defines: ['DISABLE_LOG_DEPTH_FRAGMENT_WRITE'],
      sources: [
        Util.loadText(this.fileOptions.glslDirectory + 'screenDraw.frag')
      ]
    })

    var primitive = new CustomPrimitive({
      geometry: Util.getFullscreenQuad(),
      attributeLocations: attributeLocations,
      primitiveType: Cesium.PrimitiveType.TRIANGLES,
      uniformMap: uniformMap,
      vertexShaderSource: vertexShaderSource,
      fragmentShaderSource: fragmentShaderSource,
      rawRenderState: rawRenderState,
      framebuffer: undefined // undefined value means let Cesium deal with it
    })

    return primitive
  }

  clearOutputFramebuffers () {
    this.clearCommand.framebuffer = this.framebuffers.segments
    this.clearCommand.execute(this.context)

    this.clearCommand.framebuffer = this.framebuffers.currentTrails
    this.clearCommand.execute(this.context)
    this.clearCommand.framebuffer = this.framebuffers.nextTrails
    this.clearCommand.execute(this.context)
  }

  destroyParticlesTextures () {
    this.outputTextures.currentParticlesPosition.destroy()
    this.outputTextures.nextParticlesPosition.destroy()
    this.outputTextures.particlesRelativeSpeed.destroy()
    this.outputTextures.currentParticlesRandomized.destroy()
    this.outputTextures.nextParticlesRandomized.destroy()
  }

  refreshParticle (viewerParameters, maxParticlesChanged) {
    this.viewerParameters = viewerParameters

    this.clearOutputFramebuffers()

    this.setComputeShaderParameters()

    var maxParticles = this.particleSystemOptions.maxParticles
    var lonLatRange = this.viewerParameters.lonLatRange
    this.particlesArray = DataProcess.randomizeParticleLonLatLev(
      maxParticles,
      lonLatRange
    )

    if (maxParticlesChanged) {
      this.particleGeometry = this.setupParticleGeometry()
      this.primitives.segments.setGeometry(this.context, this.particleGeometry)
    }

    this.destroyParticlesTextures()
    this.setupParticlesTextures()
  }

  destroyAll () {
    this.uniformVariables.U.destroy()
    this.uniformVariables.V.destroy()
    this.uniformVariables.colorTable.destroy()

    this.destroyParticlesTextures()

    this.framebuffers.segments.destroy()
    this.framebuffers.currentTrails.destroy()
    this.framebuffers.nextTrails.destroy()
  }

  canvasResize (cesiumContext) {
    this.destroyAll()

    this.context = cesiumContext
    this.setupDataTextures()
    this.setupParticlesTextures()
    this.setupOutputFramebuffers()
  }

  applyParticleSystemOptions (particleSystemOptions) {
    var maxParticlesChanged = false
    if (
      this.particleSystemOptions.maxParticles !==
      particleSystemOptions.maxParticles
    ) {
      maxParticlesChanged = true
    }

    this.particleSystemOptions = particleSystemOptions
    this.particleSystemOptions.particlesTextureSize = Math.ceil(
      Math.sqrt(this.particleSystemOptions.maxParticles)
    )
    this.particleSystemOptions.maxParticles =
      this.particleSystemOptions.particlesTextureSize *
      this.particleSystemOptions.particlesTextureSize

    this.refreshParticle(this.viewerParameters, maxParticlesChanged)
  }
}

export default ParticleSystem
