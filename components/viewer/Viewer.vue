/*
 * @Author: zouyaoji 
 * @Date: 2018-02-06 17:56:48 
 * @Last Modified by: zouyaoji
 * @Last Modified time: 2018-11-09 15:39:00
 */

<template>
  <div ref="viewer" style="width:100%; height:100%;">
    <slot></slot>
  </div>
</template>

<script>
  import bindEvents from '../base/bindEvent'
  import { getDocumentByClassName } from '../base/util'
  import { createDefaultImageryProviderViewModels, createDefaultTerrainProviderViewModels } from '../base/providerViewModels'
  // const sceneEventList = [
  //   'morphComplete',
  //   'morphStart',
  //   'postRender',
  //   'preRender',
  //   'preUpdate',
  //   'renderError',
  //   'terrainProviderChanged'
  // ]
  // const dataSourcesEventList = [
  //   'dataSourceAdded',
  //   'dataSourceRemoved'
  // ]
  export default {
    name: 'cesium-viewer',
    props: {
      cesiumPath: {
        type: String
      },
      animation: {
        type: Boolean,
        default: false
      },
      baseLayerPicker: {
        type: Boolean,
        default: false
      },
      fullscreenButton: {
        type: Boolean,
        default: false
      },
      vrButton: {
        type: Boolean,
        default: false
      },
      geocoder: {
        type: Boolean,
        default: false
      },
      homeButton: {
        type: Boolean,
        default: false
      },
      infoBox: {
        type: Boolean,
        default: true
      },
      sceneModePicker: {
        type: Boolean,
        default: false
      },
      selectionIndicator: {
        type: Boolean,
        default: true
      },
      timeline: {
        type: Boolean,
        default: false
      },
      navigationHelpButton: {
        type: Boolean,
        default: false
      },
      navigationInstructionsInitiallyVisible: {
        type: Boolean,
        default: false
      },
      scene3DOnly: {
        type: Boolean,
        default: false
      },
      shouldAnimate: {
        type: Boolean,
        default: false
      },
      clockViewModel: {
        type: Object
      },
      selectedImageryProviderViewModel: {
        type: Object
      },
      imageryProviderViewModels: {
        type: Object
      },
      selectedTerrainProviderViewModel: {
        type: Object
      },
      terrainProviderViewModels: {
        type: Object
      },
      imageryProvider: {
        type: Object
      },
      terrainProvider: {
        type: Object
      },
      skyBox: {
        type: Object
      },
      skyAtmosphere: {
        type: Object
      },
      fullscreenElement: {
        /* eslint-disable no-undef */
        type: [Element]
      },
      useDefaultRenderLoop: {
        type: Boolean,
        default: true
      },
      targetFrameRate: {
        type: Number
      },
      showRenderLoopErrors: {
        type: Boolean,
        default: true
      },
      automaticallyTrackDataSourceClocks: {
        type: Boolean,
        default: true
      },
      contextOptions: {
        type: Object
      },
      sceneMode: {
        type: Number,
        default: 3
      },
      mapProjection: {
        type: Object
      },
      globe: {
        type: Object
      },
      orderIndependentTranslucency: {
        type: Boolean,
        default: true
      },
      creditContainer: {
        type: String
      },
      creditViewport: {
        type: String
      },
      dataSources: {
        type: Object
      },
      terrainExaggeration: {
        type: Number,
        default: 1.0
      },
      shadows: {
        type: Boolean,
        default: false
      },
      terrainShadows: {
        type: Number
        // default: Cesium.ShadowMode.RECEIVE_ONLY
      },
      mapMode2D: {
        type: Number
        // default: Cesium.MapMode2D.INFINITE_SCROLL
      },
      projectionPicker: {
        type: Boolean,
        default: false
      },
      requestRenderMode: {
        type: Boolean,
        default: false
      },
      maximumRenderTimeChange: {
        type: Number,
        default: 0.0
      },
      navigation: {
        type: Boolean,
        default: false
      },
      camera: {
        type: Object
      }
    },
    watch: {
      selectionIndicator (val) {
        const { Cesium, viewer, viewerContainer } = this
        if (Cesium.defined(viewer.selectionIndicator) && !viewer.selectionIndicator.isDestroyed() && !val) {
          viewer.selectionIndicator.destroy()
          viewer._selectionIndicator = undefined
          let selectionIndicatorContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-selectionIndicatorContainer')
          viewerContainer.removeChild(selectionIndicatorContainer)
        } else if (!Cesium.defined(viewer.selectionIndicator) || viewer.selectionIndicator.isDestroyed()) {
          let selectionIndicatorContainer = document.createElement('div')
          selectionIndicatorContainer.className = 'cesium-viewer-selectionIndicatorContainer'
          viewerContainer.appendChild(selectionIndicatorContainer)
          let selectionIndicator = new Cesium.SelectionIndicator(selectionIndicatorContainer, viewer.scene)
          viewer._selectionIndicator = selectionIndicator
        }
      },
      infoBox (val) {
        const { Cesium, viewer, viewerContainer, resizeControl } = this
        if (Cesium.defined(viewer.infoBox) && !viewer.infoBox.isDestroyed() && !val) {
          viewer.infoBox.destroy()
          viewer._infoBox = undefined
          let infoBoxContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-infoBoxContainer')
          viewerContainer.removeChild(infoBoxContainer)
        } else if (!Cesium.defined(viewer.infoBox) || viewer.infoBox.isDestroyed()) {
          let infoBoxContainer = document.createElement('div')
          infoBoxContainer.className = 'cesium-viewer-infoBoxContainer'
          viewerContainer.appendChild(infoBoxContainer)
          let infoBox = new Cesium.InfoBox(infoBoxContainer)
          let infoBoxViewModel = infoBox.viewModel
          viewer._eventHelper.add(infoBoxViewModel.cameraClicked, viewer._onInfoBoxCameraClicked, viewer)
          viewer._eventHelper.add(infoBoxViewModel.closeClicked, viewer._onInfoBoxClockClicked, viewer)
          viewer._infoBox = infoBox
          resizeControl()
        }
      },
      geocoder (val) {
        const { Cesium, viewer, resizeToolbar } = this
        let toolbar = getDocumentByClassName(viewer.container.firstChild.children, 'cesium-viewer-toolbar')
        if (Cesium.defined(viewer.geocoder) && !viewer.geocoder.isDestroyed() && !val) {
          viewer.geocoder.destroy()
          viewer._geocoder = undefined
          let geocoderContainer = getDocumentByClassName(toolbar.children, 'cesium-viewer-geocoderContainer')
          toolbar.removeChild(geocoderContainer)
        } else if (!Cesium.defined(viewer.geocoder) || viewer.geocoder.isDestroyed()) {
          let geocoderContainer = document.createElement('div')
          geocoderContainer.className = 'cesium-viewer-geocoderContainer'
          toolbar.appendChild(geocoderContainer)
          let geocoder = new Cesium.Geocoder({
            container: geocoderContainer,
            geocoderServices: Cesium.defined(this.geocoder) ? (Cesium.isArray(this.geocoder) ? this.geocoder : [this.geocoder]) : undefined,
            scene: viewer.scene,
            viewer: viewer
          })
          viewer._eventHelper.add(geocoder.viewModel.search.beforeExecute, viewer._clearObjects, viewer)
          viewer._geocoder = geocoder
          resizeToolbar(toolbar, geocoderContainer)
        }
      },
      homeButton (val) {
        const { Cesium, viewer, resizeToolbar } = this
        let toolbar = getDocumentByClassName(viewer.container.firstChild.children, 'cesium-viewer-toolbar')
        if (Cesium.defined(viewer.homeButton) && !viewer.homeButton.isDestroyed() && !val) {
          viewer.homeButton.destroy()
          viewer._homeButton = undefined
        } else if (!Cesium.defined(viewer.homeButton) || viewer.homeButton.isDestroyed()) {
          let homeButton = new Cesium.HomeButton(toolbar, viewer.scene)
          if (Cesium.defined(viewer.geocoder)) {
            viewer._eventHelper.add(homeButton.viewModel.command.afterExecute, function () {
              var viewModel = viewer.geocoder.viewModel
              viewModel.searchText = ''
              if (viewModel.isSearchInProgress) {
                viewModel.search()
              }
            })
          }
          viewer._eventHelper.add(homeButton.viewModel.command.beforeExecute, viewer._clearTrackedObject, viewer)
          viewer._homeButton = homeButton
          resizeToolbar(toolbar, homeButton)
        }
      },
      sceneModePicker (val) {
        const { Cesium, viewer, resizeToolbar } = this
        let toolbar = getDocumentByClassName(viewer.container.firstChild.children, 'cesium-viewer-toolbar')
        if (Cesium.defined(viewer.sceneModePicker) && !viewer.sceneModePicker.isDestroyed() && !val) {
          viewer.sceneModePicker.destroy()
          viewer._sceneModePicker = undefined
        } else if (!Cesium.defined(viewer.sceneModePicker) || viewer.sceneModePicker.isDestroyed()) {
          if ((this.sceneModePicker === true) && this.scene3DOnly) {
            throw new Cesium.DeveloperError('options.sceneModePicker is not available when options.scene3DOnly is set to true.')
          }
          if (!this.scene3DOnly && this.sceneModePicker === true) {
            let sceneModePicker = new Cesium.SceneModePicker(toolbar, viewer.scene)
            viewer._sceneModePicker = sceneModePicker
            resizeToolbar(toolbar, sceneModePicker)
          }
        }
      },
      projectionPicker (val) {
        const { Cesium, viewer, resizeToolbar } = this
        let toolbar = getDocumentByClassName(viewer.container.firstChild.children, 'cesium-viewer-toolbar')
        if (Cesium.defined(viewer.projectionPicker) && !viewer.projectionPicker.isDestroyed() && !val) {
          viewer.projectionPicker.destroy()
          viewer._projectionPicker = undefined
        } else if (!Cesium.defined(viewer.projectionPicker) || viewer.projectionPicker.isDestroyed()) {
          let projectionPicker = new Cesium.ProjectionPicker(toolbar, viewer.scene)
          viewer._projectionPicker = projectionPicker
          resizeToolbar(toolbar, projectionPicker)
        }
      },
      baseLayerPicker (val) {
        const { Cesium, viewer, resizeToolbar } = this
        let toolbar = getDocumentByClassName(viewer.container.firstChild.children, 'cesium-viewer-toolbar')
        if (Cesium.defined(viewer.baseLayerPicker) && !viewer.baseLayerPicker.isDestroyed() && !val) {
          viewer.baseLayerPicker.destroy()
          viewer._baseLayerPicker = undefined
          viewer.imageryLayers.removeAll()
          let cesiumPath = this.cesiumPath || this._Cesium().cesiumPath
          if (cesiumPath.charAt(cesiumPath.length - 1) !== '/') {
            cesiumPath = cesiumPath + '/'
          }
          viewer.imageryLayers.add(
            new Cesium.ImageryLayer(
              new Cesium.SingleTileImageryProvider({
                url: `${cesiumPath}Assets/Textures/GlobalBkLayer.jpg`
              })
            )
          )
        } else if (!Cesium.defined(viewer.baseLayerPicker) || viewer.baseLayerPicker.isDestroyed()) {
          let createBaseLayerPicker = (!Cesium.defined(viewer.globe) || this.globe !== false) &&
                                    (!Cesium.defined(viewer.baseLayerPicker) || this.baseLayerPicker !== false)

          // >>includeStart('debug', pragmas.debug);
          // If using BaseLayerPicker, imageryProvider is an invalid option
          if (createBaseLayerPicker && Cesium.defined(this.imageryProvider)) {
            throw new Cesium.DeveloperError(`options.imageryProvider is not available when using the BaseLayerPicker widget.
Either specify options.selectedImageryProviderViewModel instead or set options.baseLayerPicker to false.`)
          }

          // If not using BaseLayerPicker, selectedImageryProviderViewModel is an invalid option
          if (!createBaseLayerPicker && Cesium.defined(this.selectedImageryProviderViewModel)) {
            throw new Cesium.DeveloperError(`options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget.
Either specify options.imageryProvider instead or set options.baseLayerPicker to true.`)
          }

          // If using BaseLayerPicker, terrainProvider is an invalid option
          if (createBaseLayerPicker && Cesium.defined(this.terrainProvider)) {
            throw new Cesium.DeveloperError(`options.terrainProvider is not available when using the BaseLayerPicker widget.
Either specify options.selectedTerrainProviderViewModel instead or set options.baseLayerPicker to false.`)
          }

          // If not using BaseLayerPicker, selectedTerrainProviderViewModel is an invalid option
          if (!createBaseLayerPicker && Cesium.defined(this.selectedTerrainProviderViewModel)) {
            throw new Cesium.DeveloperError(`options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget.
Either specify options.terrainProvider instead or set options.baseLayerPicker to true.`)
          }

          if (createBaseLayerPicker) {
            viewer.imageryLayers.removeAll()
            let cesiumPath = this.cesiumPath || this._Cesium().cesiumPath
            if (cesiumPath.charAt(cesiumPath.length - 1) !== '/') {
              cesiumPath = cesiumPath + '/'
            }
            let imageryProviderViewModels = Cesium.defaultValue(this.imageryProviderViewModels, createDefaultImageryProviderViewModels(Cesium, cesiumPath))
            let terrainProviderViewModels = Cesium.defaultValue(this.terrainProviderViewModels, createDefaultTerrainProviderViewModels(Cesium, cesiumPath))
            let baseLayerPicker = new Cesium.BaseLayerPicker(toolbar, {
              globe: viewer.scene.globe,
              imageryProviderViewModels: imageryProviderViewModels,
              selectedImageryProviderViewModel: imageryProviderViewModels[0],
              terrainProviderViewModels: terrainProviderViewModels,
              selectedTerrainProviderViewModel: terrainProviderViewModels[0]
            })
            var elements = toolbar.getElementsByClassName('cesium-baseLayerPicker-dropDown')
  
            let baseLayerPickerDropDown = elements[0]
            viewer._baseLayerPickerDropDown = baseLayerPickerDropDown
            viewer._baseLayerPicker = baseLayerPicker
            resizeToolbar(toolbar, baseLayerPicker)
          }
        }
      },
      navigationHelpButton (val) {
        const { Cesium, viewer, resizeToolbar } = this
        let toolbar = getDocumentByClassName(viewer.container.firstChild.children, 'cesium-viewer-toolbar')
        if (Cesium.defined(viewer.navigationHelpButton) && !viewer.navigationHelpButton.isDestroyed() && !val) {
          viewer.navigationHelpButton.destroy()
          viewer._navigationHelpButton = undefined
        } else if (!Cesium.defined(viewer.navigationHelpButton) || viewer.navigationHelpButton.isDestroyed()) {
          let showNavHelp = true
          try {
            if (Cesium.defined(window.localStorage)) {
              var hasSeenNavHelp = window.localStorage.getItem('cesium-hasSeenNavHelp')
              if (Cesium.defined(hasSeenNavHelp) && Boolean(hasSeenNavHelp)) {
                showNavHelp = false
              } else {
                window.localStorage.setItem('cesium-hasSeenNavHelp', 'true')
              }
            }
          } catch (e) {
  
          }
          let navigationHelpButton = new Cesium.NavigationHelpButton({
            container: toolbar,
            instructionsInitiallyVisible: Cesium.defaultValue(this.navigationInstructionsInitiallyVisible, showNavHelp)
          })
          viewer._navigationHelpButton = navigationHelpButton
          resizeToolbar(toolbar, navigationHelpButton)
        }
      },
      animation (val) {
        const { Cesium, viewer, viewerContainer, resizeControl } = this
        if (Cesium.defined(viewer.animation) && !viewer.animation.isDestroyed() && !val) {
          viewer.animation.destroy()
          let animationContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-animationContainer')
          viewerContainer.removeChild(animationContainer)
          viewer._animation = undefined
          resizeControl()
        } else if (!Cesium.defined(viewer.animation) || viewer.animation.isDestroyed()) {
          let animationContainer = document.createElement('div')
          animationContainer.className = 'cesium-viewer-animationContainer'
          this.viewerContainer.appendChild(animationContainer)
          let animation = new Cesium.Animation(animationContainer, new Cesium.AnimationViewModel(viewer.clockViewModel))
          var d = new Date()
          var hour = 0 - d.getTimezoneOffset()
          animation.viewModel.timeFormatter = function (date, viewModel) {
            var dateZone8 = Cesium.JulianDate.addMinutes(date, hour, new Cesium.JulianDate())
            var gregorianDate = Cesium.JulianDate.toGregorianDate(dateZone8)
            var millisecond = Math.round(gregorianDate.millisecond)
            if (Math.abs(viewModel._clockViewModel.multiplier) < 1) {
              return Cesium.sprintf('%02d:%02d:%02d.%03d', gregorianDate.hour, gregorianDate.minute, gregorianDate.second, millisecond)
            }
            return Cesium.sprintf('%02d:%02d:%02d GMT+8', gregorianDate.hour, gregorianDate.minute, gregorianDate.second)
          }
          viewer._animation = animation
          resizeControl()
        }
      },
      timeline (val) {
        const { Cesium, viewer, viewerContainer, onTimelineScrubfunction, resizeControl } = this
        if (Cesium.defined(viewer.timeline) && !viewer.timeline.isDestroyed() && !val) {
          viewer.timeline.destroy()
          viewer._timeline = undefined
          let timelineContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-timelineContainer')
          viewerContainer.removeChild(timelineContainer)
          resizeControl()
        } else if (!Cesium.defined(viewer.timeline) || viewer.timeline.isDestroyed()) {
          let timelineContainer = document.createElement('div')
          timelineContainer.className = 'cesium-viewer-timelineContainer'
          viewerContainer.appendChild(timelineContainer)
          let timeline = new Cesium.Timeline(timelineContainer, viewer.clock)
          timeline.addEventListener('settime', onTimelineScrubfunction, false)
          timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
          viewer._timeline = timeline
          resizeControl()
        }
      },
      fullscreenButton (val) {
        const { Cesium, viewer, viewerContainer, resizeControl } = this
        if (Cesium.defined(viewer.fullscreenButton) && !viewer.fullscreenButton.isDestroyed() && !val) {
          viewer.fullscreenButton.destroy()
          viewer._fullscreenButton = undefined
          let fullscreenContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-fullscreenContainer')
          viewerContainer.removeChild(fullscreenContainer)
          resizeControl()
        } else if (!Cesium.defined(viewer.fullscreenButton) || viewer.fullscreenButton.isDestroyed()) {
          let fullscreenContainer = document.createElement('div')
          fullscreenContainer.className = 'cesium-viewer-fullscreenContainer'
          viewerContainer.appendChild(fullscreenContainer)
          let fullscreenButton = new Cesium.FullscreenButton(fullscreenContainer, document.body)
          viewer._fullscreenButton = fullscreenButton
          resizeControl()
        }
      },
      fullscreenElement (val) {
        const { Cesium, viewer } = this
        if (!Cesium.defined(viewer.fullscreenButton)) {
          return
        }
        if (Cesium.defined(val)) {
          this.viewer.fullscreenButton.viewModel.fullscreenElement = val
        }
      },
      'viewer.fullscreenButton.viewModel.isFullscreenEnabled' (val) {
        const { Cesium, viewer } = this
        if (viewer.fullscreenButton) {
          viewer.fullscreenButton.container.style.display = val ? 'block' : 'none'
          let right = 0
          if (Cesium.defined(viewer.vrButton)) {
            viewer.vrButton.container.style.right = viewer.fullscreenButton.container.clientWidth + 'px'
            right += viewer.fullscreenButton.container.clientWidth
          }
          if (Cesium.defined(viewer.timeline)) {
            viewer.timeline.container.style.right = right + viewer.fullscreenButton.container.clientWidth + 'px'
            viewer.timeline.resize()
          }
        } else {
          if (Cesium.defined(viewer.vrButton)) { viewer.vrButton.container.style.right = 0 + 'px' }
        }
      },
      vrButton (val) {
        const { Cesium, viewer, viewerContainer, resizeControl, enableVRUI } = this
        if (Cesium.defined(viewer.vrButton) && !viewer.vrButton.isDestroyed() && !val) {
          viewer.vrButton.destroy()
          viewer._vrButton = undefined
          let vrContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-vrContainer')
          viewerContainer.removeChild(vrContainer)
          resizeControl()
        } else if (!Cesium.defined(viewer.vrButton) || viewer.vrButton.isDestroyed()) {
          let vrContainer = document.createElement('div')
          vrContainer.className = 'cesium-viewer-vrContainer'
          viewerContainer.appendChild(vrContainer)
          let vrButton = new Cesium.VRButton(vrContainer, viewer.scene, document.body)
          let viewModelCommand = vrButton.viewModel._command
          vrButton.viewModel._command = function (VRButtonViewModel) {
            viewModelCommand()
            enableVRUI(viewer, VRButtonViewModel.isVRMode)
          }
          viewer._vrButton = vrButton
          resizeControl()
        }
      },
      'viewer.vrButton.viewModel.isVREnabled' (val) {
        const { Cesium, viewer } = this
        if (viewer.vrButton) {
          viewer.vrButton.container.style.display = val ? 'block' : 'none'
          let right = 0
          if (Cesium.defined(viewer.fullscreenButton)) {
            viewer.vrButton.container.style.right = viewer.fullscreenButton.container.clientWidth + 'px'
            right += viewer.fullscreenButton.container.clientWidth
          }
          if (Cesium.defined(viewer.timeline)) {
            viewer.timeline.container.style.right = right + viewer.vrButton.container.clientWidth + 'px'
            viewer.timeline.resize()
          }
        }
      },
      navigation (val) {
        const { Cesium, viewer, viewerContainer, resizeControl } = this
        if (Cesium.defined(viewer.navigation) && !val) {
          viewer.navigation.viewModel.eventHelper.removeAll()
          Cesium.destroyObject(viewer.navigation.viewModel)
          viewer._navigation = undefined
          let navigationContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-navigationContainer')
          viewerContainer.removeChild(navigationContainer)
        } else if (!Cesium.defined(viewer.navigation)) {
          let navigationContainer = document.createElement('div')
          navigationContainer.className = 'cesium-viewer-navigationContainer'
          viewerContainer.appendChild(navigationContainer)
          let navigation = new Cesium.Navigation({ container: navigationContainer, viewer: viewer, scene: viewer.scene })
          viewer._navigation = navigation
          resizeControl()
        }
      },
      sceneMode (val) {
        const { Cesium, viewer } = this
        if (Cesium.SceneMode.COLUMBUS_VIEW === val ||
          Cesium.SceneMode.MORPHING === val ||
          Cesium.SceneMode.SCENE2D === val ||
          Cesium.SceneMode.SCENE3D === val) {
          viewer.scene.mode = val
        }
      },
      shouldAnimate (val) {
        const { viewer } = this
        viewer.clock.shouldAnimate = val
      },
      terrainExaggeration (val) {
        const { viewer } = this
        viewer.scene._terrainExaggeration = val
      },
      shadows (val) {
        const { viewer } = this
        viewer.scene.shadowMap.enabled = val
      },
      'camera': {
        handler (val) {
          const { Cesium, viewer } = this
          viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(val.position.longitude, val.position.latitude, val.position.height),
            orientation: {
              heading: Cesium.Math.toRadians(val.heading),
              pitch: Cesium.Math.toRadians(val.pitch),
              roll: Cesium.Math.toRadians(val.roll)
            }
          })
        },
        deep: true
      },
      imageryProvider (val) {
        const { Cesium, viewer } = this
        if (Cesium.defined(val)) {
          viewer.imageryLayers.removeAll()
          viewer.imageryLayers.addImageryProvider(val, 0)
        }
      },
      'viewer.imageryLayers' (val) {
      }
    },
    methods: {
      onTimelineScrubfunction (e) {
        let clock = e.clock
        clock.currentTime = e.timeJulian
        clock.shouldAnimate = false
      },
      resizeToolbar (parent, child) {
        Array.prototype.slice.call(parent.children).forEach(element => {
          switch (element.className) {
            case 'cesium-viewer-geocoderContainer':
              element.customIndex = 1
              break
            case 'cesium-button cesium-toolbar-button cesium-home-button':
              element.customIndex = 2
              break
            case 'cesium-sceneModePicker-wrapper cesium-toolbar-button':
              element.customIndex = 3
              break
            case 'cesium-projectionPicker-wrapper cesium-toolbar-button':
              element.customIndex = 4
              break
            case 'cesium-button cesium-toolbar-button':
            case 'cesium-baseLayerPicker-dropDown':
              element.customIndex = 5
              break
            case 'cesium-navigationHelpButton-wrapper':
              element.customIndex = 6
              break
          }
        })
        let arr = []
        Array.prototype.slice.call(parent.children).forEach(element => {
          arr.push(element)
        })
        arr.sort(function (a, b) { return a.customIndex - b.customIndex })
        for (var i = 0; i < arr.length; i++) {
          parent.appendChild(arr[i])
        }
      },
      resizeControl () {
        const { Cesium, viewer, viewerContainer } = this
        let animationExists = Cesium.defined(viewer._animation)
        let timelineExists = Cesium.defined(viewer._timeline)
        let timeline = viewer._timeline
        let width = viewerContainer.clientWidth
        var height = viewerContainer.clientHeight
        let animationContainer
        let animationWidth = 0
        let creditLeft = 0
        let creditBottom = 0

        if (animationExists && window.getComputedStyle(viewer._animation.container).visibility !== 'hidden') {
          var lastWidth = this._lastWidth
          animationContainer = viewer._animation.container
          if (width > 900) {
            animationWidth = 169
            if (lastWidth <= 900) {
              animationContainer.style.width = '169px'
              animationContainer.style.height = '112px'
              viewer._animation.resize()
            }
          } else if (width >= 600) {
            animationWidth = 136
            if (lastWidth < 600 || lastWidth > 900) {
              animationContainer.style.width = '136px'
              animationContainer.style.height = '90px'
              viewer._animation.resize()
            }
          } else {
            animationWidth = 106
            if (lastWidth > 600 || lastWidth === 0) {
              animationContainer.style.width = '106px'
              animationContainer.style.height = '70px'
              viewer._animation.resize()
            }
          }
          creditLeft = animationWidth + 5
        }

        if (timelineExists && window.getComputedStyle(viewer._timeline.container).visibility !== 'hidden') {
          let fullscreenButton = viewer._fullscreenButton
          let vrButton = viewer._vrButton
          let timelineContainer = timeline.container
          let timelineStyle = timelineContainer.style

          creditBottom = timelineContainer.clientHeight + 3
          timelineStyle.left = animationWidth + 'px'

          var pixels = 0
          if (Cesium.defined(viewer.fullscreenButton)) {
            pixels += fullscreenButton.container.clientWidth
          }
          if (Cesium.defined(vrButton)) {
            pixels += vrButton.container.clientWidth
          }

          timelineStyle.right = pixels + 'px'
          timeline.resize()
        }

        if (Cesium.defined(viewer.navigation)) {
          let toolbarContainer = getDocumentByClassName(viewer.container.firstChild.children, 'cesium-viewer-toolbar')
          let navigationContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-navigationContainer')
          navigationContainer.style.top = toolbarContainer.clientHeight + 'px'

          if (Cesium.defined(viewer.infoBox)) {
            viewer.infoBox.container.firstChild.style.right = navigationContainer.clientWidth + 'px'
          }
        }

        viewer._bottomContainer.style.left = creditLeft + 'px'
        viewer._bottomContainer.style.bottom = creditBottom + 'px'
        this._lastWidth = width
        this._lastHeight = height
      },
      enableVRUI (viewer, enabled) {
        const { Cesium } = this
        let geocoder = viewer._geocoder
        let homeButton = viewer._homeButton
        let sceneModePicker = viewer._sceneModePicker
        let projectionPicker = viewer._projectionPicker
        let baseLayerPicker = viewer._baseLayerPicker
        let animation = viewer._animation
        let timeline = viewer._timeline
        let fullscreenButton = viewer._fullscreenButton
        let infoBox = viewer._infoBox
        let selectionIndicator = viewer._selectionIndicator
        let visibility = enabled ? 'hidden' : 'visible'

        if (Cesium.defined(geocoder)) {
          geocoder.container.style.visibility = visibility
        }
        if (Cesium.defined(homeButton)) {
          homeButton.container.style.visibility = visibility
        }
        if (Cesium.defined(sceneModePicker)) {
          sceneModePicker.container.style.visibility = visibility
        }
        if (Cesium.defined(projectionPicker)) {
          projectionPicker.container.style.visibility = visibility
        }
        if (Cesium.defined(baseLayerPicker)) {
          baseLayerPicker.container.style.visibility = visibility
        }
        if (Cesium.defined(animation)) {
          animation.container.style.visibility = visibility
        }
        if (Cesium.defined(timeline)) {
          timeline.container.style.visibility = visibility
        }
        if (Cesium.defined(fullscreenButton) && fullscreenButton.viewModel.isFullscreenEnabled) {
          fullscreenButton.container.style.visibility = visibility
        }
        if (Cesium.defined(infoBox)) {
          infoBox.container.style.visibility = visibility
        }
        if (Cesium.defined(selectionIndicator)) {
          selectionIndicator.container.style.visibility = visibility
        }

        if (viewer._container) {
          var right = enabled || !Cesium.defined(fullscreenButton) ? 0 : fullscreenButton.container.clientWidth
          viewer._vrButton.container.style.right = right + 'px'
          viewer.forceResize()
        }
      },
      init (Cesium) {
        if (this.viewer) {
          return
        }

        let $el = this.$refs.viewer
        // for (let $node of this.$slots.default || []) {
        //   if ($node.componentOptions && $node.componentOptions.tag === 'sm-cesium-view') {
        //     this.hasSmCesiumView = true
        //     $el = $node.elm
        //   }
        // }
        const viewer = new Cesium.Viewer($el, {
          animation: this.animation,
          baseLayerPicker: this.baseLayerPicker,
          fullscreenButton: this.fullscreenButton,
          vrButton: this.vrButton,
          geocoder: this.geocoder,
          homeButton: this.homeButton,
          infoBox: this.infoBox,
          sceneModePicker: this.sceneModePicker,
          selectionIndicator: this.selectionIndicator,
          timeline: this.timeline,
          navigationHelpButton: this.navigationHelpButton,
          navigationInstructionsInitiallyVisible: this.navigationInstructionsInitiallyVisible,
          scene3DOnly: this.scene3DOnly,
          shouldAnimate: this.shouldAnimate,
          clockViewModel: this.clockViewModel,
          selectedImageryProviderViewModel: this.selectedImageryProviderViewModel,
          imageryProviderViewModels: this.imageryProviderViewModels,
          selectedTerrainProviderViewModel: this.selectedTerrainProviderViewModel,
          terrainProviderViewModels: this.terrainProviderViewModels,
          imageryProvider: this.imageryProvider,
          terrainProvider: this.terrainProvider,
          skyBox: this.skyBox,
          skyAtmosphere: this.skyAtmosphere,
          fullscreenElement: this.fullscreenElement,
          useDefaultRenderLoop: this.useDefaultRenderLoop,
          targetFrameRate: this.targetFrameRate,
          showRenderLoopErrors: this.showRenderLoopErrors,
          automaticallyTrackDataSourceClocks: this.automaticallyTrackDataSourceClocks,
          contextOptions: this.contextOptions,
          sceneMode: this.sceneMode,
          mapProjection: this.mapProjection,
          globe: this.globe,
          orderIndependentTranslucency: this.orderIndependentTranslucency,
          creditContainer: this.creditContainer,
          creditViewport: this.creditViewport,
          dataSources: this.dataSources,
          terrainExaggeration: this.terrainExaggeration,
          shadows: this.shadows,
          terrainShadows: this.terrainShadows,
          mapMode2D: this.mapMode2D,
          projectionPicker: this.projectionPicker,
          requestRenderMode: this.requestRenderMode,
          maximumRenderTimeChange: this.maximumRenderTimeChange,
          navigation: this.navigation
        })
        this.viewer = viewer
        // options待完善
        bindEvents.call(this, viewer)
        // bindEvents.call(this, viewer.scene, sceneEventList)
        // bindEvents.call(this, viewer.dataSources, dataSourcesEventList)
        // viewer.reset()
        if (Cesium.defined(this.camera)) {
          viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(this.camera.position.longitude, this.camera.position.latitude, this.camera.position.height),
            orientation: {
              heading: Cesium.Math.toRadians(this.camera.heading),
              pitch: Cesium.Math.toRadians(this.camera.pitch),
              roll: Cesium.Math.toRadians(this.camera.roll)
            }
          })
        }
        if (Cesium.defined(viewer.animation)) {
          var d = new Date()
          var hour = 0 - d.getTimezoneOffset()
          viewer.animation.viewModel.timeFormatter = function (date, viewModel) {
            var dateZone8 = Cesium.JulianDate.addMinutes(date, hour, new Cesium.JulianDate())
            var gregorianDate = Cesium.JulianDate.toGregorianDate(dateZone8)
            var millisecond = Math.round(gregorianDate.millisecond)
            if (Math.abs(viewModel._clockViewModel.multiplier) < 1) {
              return Cesium.sprintf('%02d:%02d:%02d.%03d', gregorianDate.hour, gregorianDate.minute, gregorianDate.second, millisecond)
            }
            return Cesium.sprintf('%02d:%02d:%02d GMT+8', gregorianDate.hour, gregorianDate.minute, gregorianDate.second)
          }
        }
        this.$emit('ready', { Cesium, viewer })
        this.viewerContainer = this.$refs.viewer.children[0]
        this.resizeControl()
        window.someObject = this.someObject
      },
      initViewer (Cesium) {
        this.Cesium = Cesium
        this.init(Cesium)
      },
      getCesiumScript () {
        if (!global.Cesium) {
          let cesiumPath = this.cesiumPath || this._Cesium().cesiumPath
          if (cesiumPath.charAt(cesiumPath.length - 1) !== '/') {
            cesiumPath = cesiumPath + '/'
          }
          global.Cesium = {}
          global.Cesium._preloader = new Promise((resolve, reject) => {
            global._initCesium = function () {
              resolve(global.Cesium)
              global.Cesium._preloader = null
              global._initCesium = null
            }

            const $link = document.createElement('link')
            $link.rel = 'stylesheet'
            global.document.head.appendChild($link)
            $link.href = `${cesiumPath}Widgets/widgets.css`

            const $script = document.createElement('script')
            global.document.body.appendChild($script)
            $script.src = `${cesiumPath}Cesium.js`
            $script.onload = function () {
              global._initCesium()

              // 超图WebGL3D需要引入zlib.min.js
              if (global.Cesium.SuperMapImageryProvider) {
                const $scriptZlib = document.createElement('script')
                global.document.body.appendChild($scriptZlib)
                $scriptZlib.src = `${cesiumPath}/Workers/zlib.min.js`
              }
            }
          })
          return global.Cesium._preloader
        } else if (!global.Cesium._preloader) {
          return Promise.resolve(global.Cesium)
        } else {
          return global.Cesium._preloader
        }
      },
      reset () {
        const { getCesiumScript, initViewer } = this
        getCesiumScript().then(initViewer)
      }
    },
    mounted () {
      this.reset()
    },
    beforeDestroy () {
    },
    data () {
      return {
        viewer: null,
        viewerContainer: null
      }
    }
  }
</script>
