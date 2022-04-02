/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-28 10:10:09
 * @LastEditTime: 2022-03-09 14:20:51
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\wind\particleSystem.ts
 */

import ParticlesComputing from './particlesComputing'
import ParticlesRendering from './particlesRendering'
import { ParticleSystemOptions, VcWindData, ViewerParameters } from './types'
class ParticleSystem {
  context: any
  data: VcWindData
  particleSystemOptions: ParticleSystemOptions
  viewerParameters: ViewerParameters
  particlesComputing: ParticlesComputing
  particlesRendering: ParticlesRendering
  constructor(context, data: VcWindData, particleSystemOptions: ParticleSystemOptions, viewerParameters: ViewerParameters) {
    this.context = context
    this.data = data
    this.particleSystemOptions = particleSystemOptions
    this.viewerParameters = viewerParameters

    this.particlesComputing = new ParticlesComputing(this.context, this.data, this.particleSystemOptions, this.viewerParameters)
    this.particlesRendering = new ParticlesRendering(
      this.context,
      this.data,
      this.particleSystemOptions,
      this.viewerParameters,
      this.particlesComputing
    )
  }

  canvasResize(context) {
    this.particlesComputing.destroyParticlesTextures()
    Object.keys(this.particlesComputing.windTextures).forEach(key => {
      this.particlesComputing.windTextures[key].destroy()
    })

    Object.keys(this.particlesRendering.framebuffers).forEach(key => {
      this.particlesRendering.framebuffers[key].destroy()
    })

    this.context = context
    this.particlesComputing = new ParticlesComputing(this.context, this.data, this.particleSystemOptions, this.viewerParameters)
    this.particlesRendering = new ParticlesRendering(
      this.context,
      this.data,
      this.particleSystemOptions,
      this.viewerParameters,
      this.particlesComputing
    )
  }

  clearFramebuffers() {
    const clearCommand = new Cesium.ClearCommand({
      color: new Cesium.Color(0.0, 0.0, 0.0, 0.0),
      depth: 1.0,
      framebuffer: undefined,
      pass: Cesium.Pass.OPAQUE
    })

    Object.keys(this.particlesRendering.framebuffers).forEach(key => {
      clearCommand.framebuffer = this.particlesRendering.framebuffers[key]
      clearCommand.execute(this.context)
    })
  }

  refreshParticles(maxParticlesChanged) {
    this.clearFramebuffers()

    this.particlesComputing.destroyParticlesTextures()
    this.particlesComputing.createParticlesTextures(this.context, this.particleSystemOptions, this.viewerParameters)

    if (maxParticlesChanged) {
      const geometry = this.particlesRendering.createSegmentsGeometry(this.particleSystemOptions)
      this.particlesRendering.primitives.segments.geometry = geometry
      const vertexArray = Cesium.VertexArray.fromGeometry({
        context: this.context,
        geometry: geometry,
        attributeLocations: this.particlesRendering.primitives.segments.attributeLocations,
        bufferUsage: Cesium.BufferUsage.STATIC_DRAW
      })
      this.particlesRendering.primitives.segments.commandToExecute.vertexArray = vertexArray
    }
  }

  applyParticleSystemOptions(particleSystemOptions) {
    let maxParticlesChanged = false
    if (this.particleSystemOptions.maxParticles !== particleSystemOptions.maxParticles) {
      maxParticlesChanged = true
    }

    Object.keys(particleSystemOptions).forEach(key => {
      this.particleSystemOptions[key] = particleSystemOptions[key]
    })
    this.refreshParticles(maxParticlesChanged)
  }

  applyViewerParameters(viewerParameters) {
    Object.keys(viewerParameters).forEach(key => {
      this.viewerParameters[key] = viewerParameters[key]
    })
    this.refreshParticles(false)
  }
}

export default ParticleSystem
