import * as Util from './util'
import segmentDrawVert from './glsl/segmentDraw.vert'
import segmentDrawFrag from './glsl/segmentDraw.frag'
import fullscreenVert from './glsl/fullscreen.vert'
import trailDrawFrag from './glsl/trailDraw.frag'
import screenDrawFrag from './glsl/screenDraw.frag'
import CustomPrimitive from './customPrimitive'

class ParticlesRendering {
  textures: any
  framebuffers: any
  primitives: any
  constructor(context, data, particleSystemOptions, viewerParameters, particlesComputing) {
    this.createRenderingTextures(context, data)
    this.createRenderingFramebuffers(context)
    this.createRenderingPrimitives(context, particleSystemOptions, viewerParameters, particlesComputing)
  }

  createRenderingTextures(context, data) {
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

    this.textures = {
      segmentsColor: Util.createTexture(colorTextureOptions),
      segmentsDepth: Util.createTexture(depthTextureOptions),

      currentTrailsColor: Util.createTexture(colorTextureOptions),
      currentTrailsDepth: Util.createTexture(depthTextureOptions),

      nextTrailsColor: Util.createTexture(colorTextureOptions),
      nextTrailsDepth: Util.createTexture(depthTextureOptions)
    }
  }

  createRenderingFramebuffers(context) {
    this.framebuffers = {
      segments: Util.createFramebuffer(context, this.textures.segmentsColor, this.textures.segmentsDepth),
      currentTrails: Util.createFramebuffer(context, this.textures.currentTrailsColor, this.textures.currentTrailsDepth),
      nextTrails: Util.createFramebuffer(context, this.textures.nextTrailsColor, this.textures.nextTrailsDepth)
    }
  }

  createSegmentsGeometry(particleSystemOptions) {
    const repeatVertex = 6

    const typedArray: Array<number> = []
    for (let s = 0; s < particleSystemOptions.particlesTextureSize; s++) {
      for (let t = 0; t < particleSystemOptions.particlesTextureSize; t++) {
        for (let i = 0; i < repeatVertex; i++) {
          typedArray.push(s / particleSystemOptions.particlesTextureSize)
          typedArray.push(t / particleSystemOptions.particlesTextureSize)
        }
      }
    }
    const st = new Float32Array(typedArray)

    const normalArray: number[] = []
    const pointToUse: number[] = [-1, 0, 1]
    const offsetSign: number[] = [-1, 1]
    for (let i = 0; i < particleSystemOptions.maxParticles; i++) {
      for (let j = 0; j < pointToUse.length; j++) {
        for (let k = 0; k < offsetSign.length; k++) {
          normalArray.push(pointToUse[j])
          normalArray.push(offsetSign[k])
          normalArray.push(0)
        }
      }
    }
    const normal = new Float32Array(normalArray)

    const indexSize = 12 * particleSystemOptions.maxParticles
    const vertexIndexes = new Uint32Array(indexSize)
    for (let i = 0, j = 0, vertex = 0; i < particleSystemOptions.maxParticles; i++) {
      vertexIndexes[j++] = vertex + 0
      vertexIndexes[j++] = vertex + 1
      vertexIndexes[j++] = vertex + 2

      vertexIndexes[j++] = vertex + 2
      vertexIndexes[j++] = vertex + 1
      vertexIndexes[j++] = vertex + 3

      vertexIndexes[j++] = vertex + 2
      vertexIndexes[j++] = vertex + 4
      vertexIndexes[j++] = vertex + 3

      vertexIndexes[j++] = vertex + 4
      vertexIndexes[j++] = vertex + 3
      vertexIndexes[j++] = vertex + 5

      vertex += repeatVertex
    }
    const GeometryAttributes = Cesium.GeometryAttributes as any
    const geometry = new Cesium.Geometry({
      attributes: new GeometryAttributes({
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

  createRenderingPrimitives(context, particleSystemOptions, viewerParameters, particlesComputing) {
    const that = this

    const webgl2 = context?.webgl2

    let segmentDrawVertText = segmentDrawVert
    if (!webgl2) {
      segmentDrawVertText = segmentDrawVertText.replace('in vec2 st;', 'attribute vec2 st;')
      segmentDrawVertText = segmentDrawVertText.replace('in vec3 normal;', 'attribute vec3 normal;')
      segmentDrawVertText = segmentDrawVertText.replace(/texture\(/g, 'texture2D(')
    }

    let segmentDrawFragText = segmentDrawFrag
    if (!webgl2) {
      segmentDrawFragText = segmentDrawFragText.replace(/out_FragColor/g, 'gl_FragColor')
    }

    let fullscreenVertText = fullscreenVert
    if (!webgl2) {
      fullscreenVertText = fullscreenVertText.replace('out vec2 textureCoordinate;', 'varying vec2 textureCoordinate;')
      fullscreenVertText = fullscreenVertText.replace('in vec3 position;', 'attribute vec3 position;')
      fullscreenVertText = fullscreenVertText.replace('in vec2 st;', 'attribute vec2 st;')
    }

    let trailDrawFragText = trailDrawFrag
    if (!webgl2) {
      trailDrawFragText = trailDrawFragText.replace('in vec2 textureCoordinate;', 'varying vec2 textureCoordinate;')
      trailDrawFragText = trailDrawFragText.replace(/out_FragColor/g, 'gl_FragColor')
      trailDrawFragText = trailDrawFragText.replace(/gl_FragDepth/g, 'gl_FragDepthEXT')
      trailDrawFragText = trailDrawFragText.replace(/texture\(/g, 'texture2D(')
    }

    let screenDrawFragText = screenDrawFrag
    if (!webgl2) {
      screenDrawFragText = screenDrawFragText.replace('in vec2 textureCoordinate;', 'varying vec2 textureCoordinate;')
      screenDrawFragText = screenDrawFragText.replace(/out_FragColor/g, 'gl_FragColor')
      screenDrawFragText = screenDrawFragText.replace(/texture\(/g, 'texture2D(')
    }

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
          previousParticlesPosition: function () {
            return particlesComputing.particlesTextures.previousParticlesPosition
          },
          currentParticlesPosition: function () {
            return particlesComputing.particlesTextures.currentParticlesPosition
          },
          postProcessingPosition: function () {
            return particlesComputing.particlesTextures.postProcessingPosition
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
          sources: [segmentDrawVertText]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [segmentDrawFragText]
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
          sources: [fullscreenVertText]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          defines: ['DISABLE_LOG_DEPTH_FRAGMENT_WRITE'],
          sources: [trailDrawFragText]
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
          const temp = that.framebuffers.currentTrails
          that.framebuffers.currentTrails = that.framebuffers.nextTrails
          that.framebuffers.nextTrails = temp

          // keep the framebuffers up to date
          that.primitives.trails.commandToExecute.framebuffer = that.framebuffers.nextTrails
          that.primitives.trails.clearCommand.framebuffer = that.framebuffers.nextTrails
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
          sources: [fullscreenVertText]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          defines: ['DISABLE_LOG_DEPTH_FRAGMENT_WRITE'],
          sources: [screenDrawFragText]
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
