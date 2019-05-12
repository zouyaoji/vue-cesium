import Util from './util'
import CustomPrimitive from './customPrimitive'
import segmentDrawVert from './glsl/segmentDraw.vert.js'
import segmentDrawFrag from './glsl/segmentDraw.frag.js'
import trailDrawFrag from './glsl/trailDraw'
import fullscreenVert from './glsl/fullscreen'
import screenDrawFrag from './glsl/screenDraw'

class ParticlesRendering {
  constructor (context, data, particleSystemOptions, viewerParameters, particlesComputing) {
    this.createRenderingTextures(context, data)
    this.createRenderingFramebuffers(context)
    this.createRenderingPrimitives(
      context,
      particleSystemOptions,
      viewerParameters,
      particlesComputing
    )
  }

  createRenderingTextures (context, data) {
    const colorTextureOptions = {
      context: context,
      width: context.drawingBufferWidth,
      height: context.drawingBufferHeight,
      pixelFormat: Cesium.PixelFormat.RGBA,
      pixelDatatype: Cesium.PixelDatatype.UNSIGNED_BYTE
    }
    const depthTextureOptions = {
      context: context,
      width: context.drawingBufferWidth,
      height: context.drawingBufferHeight,
      pixelFormat: Cesium.PixelFormat.DEPTH_COMPONENT,
      pixelDatatype: Cesium.PixelDatatype.UNSIGNED_INT
    }
    const colorTableTextureOptions = {
      context: context,
      width: data.colorTable.colorNum,
      height: 1,
      pixelFormat: Cesium.PixelFormat.RGB,
      pixelDatatype: Cesium.PixelDatatype.FLOAT,
      sampler: new Cesium.Sampler({
        minificationFilter: Cesium.TextureMinificationFilter.LINEAR,
        magnificationFilter: Cesium.TextureMagnificationFilter.LINEAR
      })
    }

    this.textures = {
      segmentsColor: Util.createTexture(colorTextureOptions),
      segmentsDepth: Util.createTexture(depthTextureOptions),

      currentTrailsColor: Util.createTexture(colorTextureOptions),
      currentTrailsDepth: Util.createTexture(depthTextureOptions),

      nextTrailsColor: Util.createTexture(colorTextureOptions),
      nextTrailsDepth: Util.createTexture(depthTextureOptions),

      colorTable: Util.createTexture(
        colorTableTextureOptions,
        data.colorTable.array
      )
    }
  }

  createRenderingFramebuffers (context) {
    this.framebuffers = {
      segments: Util.createFramebuffer(
        context,
        this.textures.segmentsColor,
        this.textures.segmentsDepth
      ),
      currentTrails: Util.createFramebuffer(
        context,
        this.textures.currentTrailsColor,
        this.textures.currentTrailsDepth
      ),
      nextTrails: Util.createFramebuffer(
        context,
        this.textures.nextTrailsColor,
        this.textures.nextTrailsDepth
      )
    }
  }

  createSegmentsGeometry (particleSystemOptions) {
    const repeatVertex = 4

    var st = []
    for (var s = 0; s < particleSystemOptions.particlesTextureSize; s++) {
      for (var t = 0; t < particleSystemOptions.particlesTextureSize; t++) {
        for (var i = 0; i < repeatVertex; i++) {
          st.push(s / particleSystemOptions.particlesTextureSize)
          st.push(t / particleSystemOptions.particlesTextureSize)
        }
      }
    }
    st = new Float32Array(st)

    var normal = []
    const pointToUse = [-1, 1]
    const offsetSign = [-1, 1]
    for (let i = 0; i < particleSystemOptions.maxParticles; i++) {
      for (let j = 0; j < repeatVertex / 2; j++) {
        for (var k = 0; k < repeatVertex / 2; k++) {
          normal.push(pointToUse[j])
          normal.push(offsetSign[k])
          normal.push(0)
        }
      }
    }
    normal = new Float32Array(normal)

    const indexSize = 6 * particleSystemOptions.maxParticles
    var vertexIndexes = new Uint32Array(indexSize)
    for (let i = 0, j = 0, vertex = 0; i < particleSystemOptions.maxParticles; i++) {
      vertexIndexes[j++] = vertex + 0
      vertexIndexes[j++] = vertex + 1
      vertexIndexes[j++] = vertex + 2
      vertexIndexes[j++] = vertex + 2
      vertexIndexes[j++] = vertex + 1
      vertexIndexes[j++] = vertex + 3
      vertex += 4
    }

    var geometry = new Cesium.Geometry({
      attributes: new Cesium.GeometryAttributes({
        st: new Cesium.GeometryAttribute({
          componentDatatype: Cesium.ComponentDatatype.FLOAT,
          componentsPerAttribute: 2,
          values: st
        }),
        normal: new Cesium.GeometryAttribute({
          componentDatatype: Cesium.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: normal
        })
      }),
      indices: vertexIndexes
    })

    return geometry
  }

  createRenderingPrimitives (
    context,
    particleSystemOptions,
    viewerParameters,
    particlesComputing
  ) {
    const that = this
    this.primitives = {
      segments: new CustomPrimitive({
        commandType: 'Draw',
        attributeLocations: {
          st: 0,
          normal: 1
        },
        geometry: this.createSegmentsGeometry(particleSystemOptions),
        primitiveType: Cesium.PrimitiveType.TRIANGLES,
        uniformMap: {
          currentParticlesPosition: function () {
            return particlesComputing.particlesTextures.currentParticlesPosition
          },
          postProcessingPosition: function () {
            return particlesComputing.particlesTextures.postProcessingPosition
          },
          postProcessingSpeed: function () {
            return particlesComputing.particlesTextures.postProcessingSpeed
          },
          colorTable: function () {
            return that.textures.colorTable
          },
          aspect: function () {
            return context.drawingBufferWidth / context.drawingBufferHeight
          },
          pixelSize: function () {
            return viewerParameters.pixelSize
          },
          lineWidth: function () {
            return particleSystemOptions.lineWidth
          },
          particleHeight: function () {
            return particleSystemOptions.particleHeight
          }
        },
        vertexShaderSource: new Cesium.ShaderSource({
          sources: [segmentDrawVert]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [segmentDrawFrag]
        }),
        rawRenderState: Util.createRawRenderState({
          // undefined value means let Cesium deal with it
          viewport: undefined,
          depthTest: {
            enabled: true
          },
          depthMask: true
        }),
        framebuffer: this.framebuffers.segments,
        autoClear: true
      }),

      trails: new CustomPrimitive({
        commandType: 'Draw',
        attributeLocations: {
          position: 0,
          st: 1
        },
        geometry: Util.getFullscreenQuad(),
        primitiveType: Cesium.PrimitiveType.TRIANGLES,
        uniformMap: {
          segmentsColorTexture: function () {
            return that.textures.segmentsColor
          },
          segmentsDepthTexture: function () {
            return that.textures.segmentsDepth
          },
          currentTrailsColor: function () {
            return that.framebuffers.currentTrails.getColorTexture(0)
          },
          trailsDepthTexture: function () {
            return that.framebuffers.currentTrails.depthTexture
          },
          fadeOpacity: function () {
            return particleSystemOptions.fadeOpacity
          }
        },
        // prevent Cesium from writing depth because the depth here should be written manually
        vertexShaderSource: new Cesium.ShaderSource({
          defines: ['DISABLE_GL_POSITION_LOG_DEPTH'],
          sources: [fullscreenVert]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          defines: ['DISABLE_LOG_DEPTH_FRAGMENT_WRITE'],
          sources: [trailDrawFrag]
        }),
        rawRenderState: Util.createRawRenderState({
          viewport: undefined,
          depthTest: {
            enabled: true,
            func: Cesium.DepthFunction.ALWAYS // always pass depth test for full control of depth information
          },
          depthMask: true
        }),
        framebuffer: this.framebuffers.nextTrails,
        autoClear: true,
        preExecute: function () {
          // swap framebuffers before binding
          var temp
          temp = that.framebuffers.currentTrails
          that.framebuffers.currentTrails = that.framebuffers.nextTrails
          that.framebuffers.nextTrails = temp

          // keep the framebuffers up to date
          that.primitives.trails.commandToExecute.framebuffer =
            that.framebuffers.nextTrails
          that.primitives.trails.clearCommand.framebuffer =
            that.framebuffers.nextTrails
        }
      }),

      screen: new CustomPrimitive({
        commandType: 'Draw',
        attributeLocations: {
          position: 0,
          st: 1
        },
        geometry: Util.getFullscreenQuad(),
        primitiveType: Cesium.PrimitiveType.TRIANGLES,
        uniformMap: {
          trailsColorTexture: function () {
            return that.framebuffers.nextTrails.getColorTexture(0)
          },
          trailsDepthTexture: function () {
            return that.framebuffers.nextTrails.depthTexture
          }
        },
        // prevent Cesium from writing depth because the depth here should be written manually
        vertexShaderSource: new Cesium.ShaderSource({
          defines: ['DISABLE_GL_POSITION_LOG_DEPTH'],
          sources: [fullscreenVert]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          defines: ['DISABLE_LOG_DEPTH_FRAGMENT_WRITE'],
          sources: [screenDrawFrag]
        }),
        rawRenderState: Util.createRawRenderState({
          viewport: undefined,
          depthTest: {
            enabled: false
          },
          depthMask: true,
          blending: {
            enabled: true
          }
        }),
        framebuffer: undefined // undefined value means let Cesium deal with it
      })
    }
  }
}
export default ParticlesRendering
