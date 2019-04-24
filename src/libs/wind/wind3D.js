import DataProcess from './dataProcess'
import ParticleSystem from './customParticleSystem'
import Util from './util'
let Cesium = {}
class Wind3D {
  constructor (CesiumJS, viewer, fileOptions, particleSystemOptions, /* displayOptions, */ mode) {
    var options = {
      baseLayerPicker: false,
      geocoder: false,
      infoBox: false,
      fullscreenElement: 'cesiumContainer',
      scene3DOnly: true
    }

    if (mode.debug) {
      options.useDefaultRenderLoop = false
    }
    Cesium = CesiumJS
    // this.viewer = new Cesium.Viewer('cesiumContainer', options)
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

    DataProcess.loadData(fileOptions).then(windData => {
      this.particleSystem = new ParticleSystem(
        this.scene.context,
        windData,
        particleSystemOptions,
        fileOptions,
        this.viewerParameters
      )

      // the order of primitives.add should respect the dependency of primitives
      this.scene.primitives.add(this.particleSystem.primitives.particlesUpdate)
      this.scene.primitives.add(
        this.particleSystem.primitives.particlesRandomize
      )
      this.scene.primitives.add(this.particleSystem.primitives.segments)
      this.scene.primitives.add(this.particleSystem.primitives.trails)
      this.scene.primitives.add(this.particleSystem.primitives.screen)

      this.setupEventListeners()

      if (mode.debug) {
        this.debug()
      }
    })

    this.imageryLayers = this.viewer.imageryLayers
    // this.setGlobeLayer(displayOptions)
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

  setGlobeLayer (displayOptions) {
    this.viewer.imageryLayers.removeAll()
    this.viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider()

    var layerSource = displayOptions.layerSource
    switch (layerSource) {
      case 'NaturalEarthII': {
        this.viewer.imageryLayers.addImageryProvider(
          Cesium.createTileMapServiceImageryProvider({
            url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
          })
        )
        break
      }
      case 'WMS': {
        this.viewer.imageryLayers.addImageryProvider(
          new Cesium.WebMapServiceImageryProvider({
            url: displayOptions.WMSURL,
            layers: displayOptions.WMSlayer.name,
            parameters: {
              ColorScaleRange: displayOptions.WMSlayer.ColorScaleRange
            }
          })
        )
        break
      }
      case 'WorldTerrain': {
        this.viewer.imageryLayers.addImageryProvider(
          Cesium.createWorldImagery()
        )
        this.viewer.terrainProvider = Cesium.createWorldTerrain()
        break
      }
    }
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

    window.addEventListener('displayOptionsChanged', function (event) {
      that.setGlobeLayer(event.detail)
    })
  }

  debug () {
    const that = this

    var animate = function () {
      that.viewer.resize()
      that.viewer.render()
      // eslint-disable-next-line
      requestAnimationFrame(animate)
    }

    // var spector = new SPECTOR.Spector()
    // spector.displayUI()
    // spector.spyCanvases()

    animate()
  }
}

export default Wind3D
