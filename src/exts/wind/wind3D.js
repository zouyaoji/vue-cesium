/**
  @license
  3D-Wind-Field - https://github.com/RaymanNg/3D-Wind-Field

  Copyright (c) 2019 RaymanNg

 * Visualize the wind on earth, powered by Cesium JS.
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version -
 */

import ParticleSystem from './particleSystem'
import Util from './util'
class Wind3D {
  constructor (viewer, data, particleSystemOptions) {
    this.viewer = viewer
    this.scene = this.viewer.scene
    this.camera = this.viewer.camera
    this.data = data
    this.viewerParameters = {
      lonRange: new Cesium.Cartesian2(),
      latRange: new Cesium.Cartesian2(),
      pixelSize: 0.0,
      lonDataRange: new Cesium.Cartesian2(),
      latDataRange: new Cesium.Cartesian2()
    }
    // use a smaller earth radius to make sure distance to camera > 0
    this.globeBoundingSphere = new Cesium.BoundingSphere(
      Cesium.Cartesian3.ZERO,
      0.99 * 6378137.0
    )
    this.updateViewerParameters()
    this.particleSystem = new ParticleSystem(
      this.scene.context,
      data,
      particleSystemOptions,
      this.viewerParameters
    )

    this.addPrimitives()
    this.setupEventListeners()
    this.imageryLayers = this.viewer.imageryLayers
  }

  addPrimitives () {
    // the order of primitives.add() should respect the dependency of primitives
    this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.getWind
    )
    this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.updateSpeed
    )
    this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.updatePosition
    )
    this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.postProcessingPosition
    )
    this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.postProcessingSpeed
    )

    this.scene.primitives.add(
      this.particleSystem.particlesRendering.primitives.segments
    )
    this.scene.primitives.add(
      this.particleSystem.particlesRendering.primitives.trails
    )
    this.scene.primitives.add(
      this.particleSystem.particlesRendering.primitives.screen
    )
  }

  removePrimitives () {
    this.scene.primitives.remove(
      this.particleSystem.particlesRendering.primitives.screen
    )
    this.scene.primitives.remove(
      this.particleSystem.particlesRendering.primitives.trails
    )
    this.scene.primitives.remove(
      this.particleSystem.particlesRendering.primitives.segments
    )
    this.scene.primitives.remove(
      this.particleSystem.particlesComputing.primitives.postProcessingSpeed
    )
    this.scene.primitives.remove(
      this.particleSystem.particlesComputing.primitives.postProcessingPosition
    )
    this.scene.primitives.remove(
      this.particleSystem.particlesComputing.primitives.updatePosition
    )
    this.scene.primitives.remove(
      this.particleSystem.particlesComputing.primitives.updateSpeed
    )
    this.scene.primitives.remove(
      this.particleSystem.particlesComputing.primitives.getWind
    )
  }

  updateViewerParameters () {
    const viewRectangle = this.camera.computeViewRectangle(
      this.scene.globe.ellipsoid
    )
    const lonLatRange = Util.viewRectangleToLonLatRange(viewRectangle)
    this.viewerParameters.lonRange.x = lonLatRange.lon.min
    this.viewerParameters.lonRange.y = lonLatRange.lon.max
    this.viewerParameters.latRange.x = lonLatRange.lat.min
    this.viewerParameters.latRange.y = lonLatRange.lat.max

    this.viewerParameters.lonDataRange.x = this.data.lon.min
    this.viewerParameters.lonDataRange.y = this.data.lon.max
    this.viewerParameters.latDataRange.x = this.data.lat.min
    this.viewerParameters.latDataRange.y = this.data.lat.max

    const pixelSize = this.camera.getPixelSize(
      this.globeBoundingSphere,
      this.scene.drawingBufferWidth,
      this.scene.drawingBufferHeight
    )

    if (pixelSize > 0) {
      this.viewerParameters.pixelSize = pixelSize
    }
  }

  moveStartListener () {
    this.scene.primitives.show = false
  }

  moveEndListener () {
    this.updateViewerParameters()
    this.particleSystem.applyViewerParameters(this.viewerParameters)
    this.scene.primitives.show = true
  }

  preRenderListener () {
    if (this.resized) {
      this.particleSystem.canvasResize(this.scene.context)
      this.resized = false
      this.addPrimitives()
      this.scene.primitives.show = true
    }
  }

  setupEventListeners () {
    const that = this

    this.camera.moveStart.addEventListener(this.moveStartListener, this)
    this.camera.moveEnd.addEventListener(this.moveEndListener, this)

    this.resized = false
    window.addEventListener('resize', function () {
      that.resized = true
      that.scene.primitives.show = false
      that.scene.primitives.removeAll()
    })

    this.scene.preRender.addEventListener(this.preRenderListener, this)
  }

  destroy () {
    this.removePrimitives()
    this.camera.moveStart.removeEventListener(this.moveStartListener, this)
    this.camera.moveEnd.removeEventListener(this.moveEndListener, this)
    this.scene.preRender.removeEventListener(this.preRenderListener, this)
  }
}

export default Wind3D
