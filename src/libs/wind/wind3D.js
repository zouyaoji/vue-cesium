// import DataProcess from './dataProcess'
import ParticleSystem from './customParticleSystem'
import Util from './util'
class Wind3D {
  constructor (viewer, windData, particleSystemOptions, colorTable) {
    this.viewer = viewer
    this.scene = this.viewer.scene
    this.camera = this.viewer.camera

    // use a smaller earth radius to make sure distance to camera > 0
    this.globeBoundingSphere = new Cesium.BoundingSphere(
      Cesium.Cartesian3.ZERO,
      0.99 * 6378137.0
    )
    this.viewerParameters = {}
    this.updateViewerParameters()
    this.imageryLayers = this.viewer.imageryLayers
    this.particleSystem = new ParticleSystem(
      this.scene.context,
      windData,
      particleSystemOptions,
      this.viewerParameters
    )

    // the order of primitives.add should respect the dependency of primitives
    this.scene.primitives.add(this.particleSystem.primitives.particlesUpdate)
    this.scene.primitives.add(this.particleSystem.primitives.particlesRandomize)
    this.scene.primitives.add(this.particleSystem.primitives.segments)
    this.scene.primitives.add(this.particleSystem.primitives.trails)
    this.scene.primitives.add(this.particleSystem.primitives.screen)

    this.setupEventListeners()
  }

  updateViewerParameters () {
    var viewerParameters = {}

    var viewRectangle = this.camera.computeViewRectangle(
      this.scene.globe.ellipsoid
    )
    viewerParameters.lonLatRange = Util.viewRectangleToLonLatRange(
      viewRectangle
    )

    viewerParameters.pixelSize = this.camera.getPixelSize(
      this.globeBoundingSphere,
      this.scene.drawingBufferWidth,
      this.scene.drawingBufferHeight
    )

    if (viewerParameters.pixelSize === 0) {
      viewerParameters.pixelSize = this.viewerParameters.pixelSize
    }

    this.viewerParameters = viewerParameters
  }

  setupEventListeners () {
    const that = this

    this.camera.moveStart.addEventListener(function () {
      that.scene.primitives.show = false
    })

    this.camera.moveEnd.addEventListener(function () {
      that.updateViewerParameters()
      that.particleSystem.refreshParticle(that.viewerParameters, false)
      that.scene.primitives.show = true
    })

    var resized = false
    window.addEventListener('resize', function () {
      resized = true
      that.scene.primitives.show = false
    })

    this.scene.preRender.addEventListener(function () {
      if (resized) {
        that.particleSystem.canvasResize(that.scene.context)
        resized = false
        that.scene.primitives.show = true
      }
    })

    window.addEventListener('particleSystemOptionsChanged', function (event) {
      that.particleSystem.applyParticleSystemOptions(event.detail)
    })

    window.addEventListener('displayOptionsChanged', function (event) {})
  }

  destroy () {
    this.scene.primitives.remove(this.particleSystem.primitives.particlesUpdate)
    this.scene.primitives.remove(this.particleSystem.primitives.particlesRandomize)
    this.scene.primitives.remove(this.particleSystem.primitives.segments)
    this.scene.primitives.remove(this.particleSystem.primitives.trails)
    this.scene.primitives.remove(this.particleSystem.primitives.screen)
  }
}

export default Wind3D
