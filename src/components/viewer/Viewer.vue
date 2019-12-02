/*
 * @Author: zouyaoji
 * @Date: 2018-02-06 17:56:48
 * @Last Modified by: zouyaoji
 * @Last Modified time: 2019-12-02 19:27:54
 */
<template>
  <div id="cesiumContainer" ref="viewer" style="width:100%; height:100%;">
    <slot></slot>
  </div>
</template>

<script>
import bindEvents from '../../utils/bindEvent.js'
import { Events } from '../../utils/events'
import services from '../../mixins/services'
import mergeDescriptors from '../../utils/mergeDescriptors.js'
import { dirname, getDocumentByClassName } from '../../utils/util.js'
export default {
  name: 'vc-viewer',
  mixins: [services],
  props: {
    cesiumPath: String,
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
    clockViewModel: Object,
    selectedImageryProviderViewModel: Object,
    imageryProviderViewModels: Object,
    selectedTerrainProviderViewModel: Object,
    terrainProviderViewModels: Object,
    imageryProvider: Object,
    terrainProvider: Object,
    skyBox: Object,
    skyAtmosphere: Object,
    /* eslint-disable no-undef */
    fullscreenElement: {
      type: Element | String
    },
    useDefaultRenderLoop: {
      type: Boolean,
      default: true
    },
    targetFrameRate: Number,
    showRenderLoopErrors: {
      type: Boolean,
      default: true
    },
    automaticallyTrackDataSourceClocks: {
      type: Boolean,
      default: true
    },
    contextOptions: Object,
    sceneMode: {
      type: Number,
      default: 3
    },
    mapProjection: Object,
    globe: Object,
    orderIndependentTranslucency: {
      type: Boolean,
      default: true
    },
    creditContainer: String,
    creditViewport: String,
    dataSources: Object,
    terrainExaggeration: {
      type: Number,
      default: 1.0
    },
    shadows: {
      type: Boolean,
      default: false
    },
    terrainShadows: {
      type: Number,
      default: 3
    },
    mapMode2D: {
      type: Number,
      default: 1
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
    logo: {
      type: Boolean,
      default: true
    },
    accessToken: String,
    camera: {
      type: Object,
      default: function () {
        return {
          position: {
            lng: 105,
            lat: 29.999999999999993,
            height: 19059568.497290563
          },
          heading: 360,
          pitch: -90,
          roll: 0
        }
      }
    }
  },
  watch: {
    selectionIndicator (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.selectionIndicator) && !viewer.selectionIndicator.isDestroyed() && !val) {
        viewer.selectionIndicator.destroy()
        viewer._selectionIndicator = undefined
        let selectionIndicatorContainer = getDocumentByClassName(
          viewerContainer.children,
          'cesium-viewer-selectionIndicatorContainer'
        )
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
      const { viewer, viewerContainer } = this
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
        viewer.forceResize()
      }
    },
    geocoder (val) {
      const { viewer, resizeToolbar, viewerContainer } = this
      let toolbar = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-toolbar')
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
          geocoderServices: Cesium.defined(this.geocoder)
            ? Cesium.isArray(this.geocoder)
              ? this.geocoder
              : [this.geocoder]
            : undefined,
          scene: viewer.scene,
          viewer: viewer
        })
        viewer._eventHelper.add(geocoder.viewModel.search.beforeExecute, viewer._clearObjects, viewer)
        viewer._geocoder = geocoder
        resizeToolbar(toolbar, geocoderContainer)
      }
    },
    homeButton (val) {
      const { viewer, resizeToolbar, viewerContainer } = this
      let toolbar = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-toolbar')
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
      const { viewer, resizeToolbar, viewerContainer } = this
      let toolbar = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-toolbar')
      if (Cesium.defined(viewer.sceneModePicker) && !viewer.sceneModePicker.isDestroyed() && !val) {
        viewer.sceneModePicker.destroy()
        viewer._sceneModePicker = undefined
      } else if (!Cesium.defined(viewer.sceneModePicker) || viewer.sceneModePicker.isDestroyed()) {
        if (this.sceneModePicker === true && this.scene3DOnly) {
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
      const { viewer, resizeToolbar, viewerContainer } = this
      let toolbar = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-toolbar')
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
      const { viewer, resizeToolbar, viewerContainer } = this
      let toolbar = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-toolbar')
      if (Cesium.defined(viewer.baseLayerPicker) && !viewer.baseLayerPicker.isDestroyed() && !val) {
        viewer.imageryLayers.removeAll()
        viewer.baseLayerPicker.destroy()
        viewer._baseLayerPicker = undefined

        if (Cesium.defined(Cesium.SuperMapImageryProvider)) {
          viewer.imageryLayers.add(
            new Cesium.ImageryLayer(
              new Cesium.SingleTileImageryProvider({
                url: Cesium.buildModuleUrl('Assets/Textures/GlobalBkLayer.jpg')
              })
            )
          )
        } else {
          viewer.imageryLayers.addImageryProvider(
            Cesium.createTileMapServiceImageryProvider({
              url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
            })
          )
        }
      } else if (!Cesium.defined(viewer.baseLayerPicker) || viewer.baseLayerPicker.isDestroyed()) {
        let createBaseLayerPicker =
          (!Cesium.defined(viewer.globe) || this.globe !== false) &&
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
          let imageryProviderViewModels = Cesium.defaultValue(
            this.imageryProviderViewModels,
            Cesium.createDefaultImageryProviderViewModels()
          )
          let terrainProviderViewModels = Cesium.defaultValue(
            this.terrainProviderViewModels,
            Cesium.createDefaultTerrainProviderViewModels()
          )
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
      const { viewer, resizeToolbar, viewerContainer } = this
      let toolbar = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-toolbar')
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
        } catch (e) { }
        let navigationHelpButton = new Cesium.NavigationHelpButton({
          container: toolbar,
          instructionsInitiallyVisible: Cesium.defaultValue(this.navigationInstructionsInitiallyVisible, showNavHelp)
        })
        viewer._navigationHelpButton = navigationHelpButton
        resizeToolbar(toolbar, navigationHelpButton)
      }
    },
    animation (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.animation) && !viewer.animation.isDestroyed() && !val) {
        viewer.animation.destroy()
        let animationContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-animationContainer')
        viewerContainer.removeChild(animationContainer)
        viewer._animation = undefined
        viewer.forceResize()
      } else if (!Cesium.defined(viewer.animation) || viewer.animation.isDestroyed()) {
        let animationContainer = document.createElement('div')
        animationContainer.className = 'cesium-viewer-animationContainer'
        this.viewerContainer.appendChild(animationContainer)
        let animation = new Cesium.Animation(animationContainer, new Cesium.AnimationViewModel(viewer.clockViewModel))
        // var d = new Date()
        // var hour = 0 - d.getTimezoneOffset()
        // animation.viewModel.timeFormatter = function (date, viewModel) {
        //   var dateZone8 = Cesium.JulianDate.addMinutes(date, hour, new Cesium.JulianDate())
        //   var gregorianDate = Cesium.JulianDate.toGregorianDate(dateZone8)
        //   var millisecond = Math.round(gregorianDate.millisecond)
        //   if (Math.abs(viewModel._clockViewModel.multiplier) < 1) {
        //     return Cesium.sprintf('%02d:%02d:%02d.%03d', gregorianDate.hour, gregorianDate.minute, gregorianDate.second, millisecond)
        //   }
        //   return Cesium.sprintf('%02d:%02d:%02d GMT+8', gregorianDate.hour, gregorianDate.minute, gregorianDate.second)
        // }
        viewer._animation = animation
        viewer.forceResize()
      }
    },

    timeline (val) {
      const { viewer, viewerContainer, onTimelineScrubfunction } = this
      if (Cesium.defined(viewer.timeline) && !viewer.timeline.isDestroyed() && !val) {
        viewer.timeline.destroy()
        viewer._timeline = undefined
        let timelineContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-timelineContainer')
        viewerContainer.removeChild(timelineContainer)
        viewer.forceResize()
      } else if (!Cesium.defined(viewer.timeline) || viewer.timeline.isDestroyed()) {
        let timelineContainer = document.createElement('div')
        timelineContainer.className = 'cesium-viewer-timelineContainer'
        viewerContainer.appendChild(timelineContainer)
        let timeline = new Cesium.Timeline(timelineContainer, viewer.clock)
        timeline.addEventListener('settime', onTimelineScrubfunction, false)
        timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
        viewer._timeline = timeline
        viewer.forceResize()
      }
    },
    fullscreenButton (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.fullscreenButton) && !viewer.fullscreenButton.isDestroyed() && !val) {
        viewer.fullscreenButton.destroy()
        viewer._fullscreenButton = undefined
        let fullscreenContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-fullscreenContainer')
        viewerContainer.removeChild(fullscreenContainer)
        viewer.forceResize()
      } else if (!Cesium.defined(viewer.fullscreenButton) || viewer.fullscreenButton.isDestroyed()) {
        let fullscreenContainer = document.createElement('div')
        fullscreenContainer.className = 'cesium-viewer-fullscreenContainer'
        viewerContainer.appendChild(fullscreenContainer)
        let fullscreenButton = new Cesium.FullscreenButton(fullscreenContainer, this.$refs.viewer)
        viewer._fullscreenButton = fullscreenButton
        viewer.forceResize()
      }
    },
    fullscreenElement (val) {
      const { viewer } = this
      if (!Cesium.defined(viewer.fullscreenButton)) {
        return
      }
      if (Cesium.defined(val)) {
        this.viewer.fullscreenButton.viewModel.fullscreenElement = val
      }
    },
    vrButton (val) {
      const { viewer, viewerContainer, enableVRUI } = this
      if (Cesium.defined(viewer.vrButton) && !viewer.vrButton.isDestroyed() && !val) {
        viewer.vrButton.destroy()
        viewer._vrButton = undefined
        let vrContainer = getDocumentByClassName(viewerContainer.children, 'cesium-viewer-vrContainer')
        viewerContainer.removeChild(vrContainer)
        viewer.forceResize()
      } else if (!Cesium.defined(viewer.vrButton) || viewer.vrButton.isDestroyed()) {
        let vrContainer = document.createElement('div')
        vrContainer.className = 'cesium-viewer-vrContainer'
        viewerContainer.appendChild(vrContainer)
        let vrButton = new Cesium.VRButton(vrContainer, viewer.scene, viewerContainer)
        let viewModelCommand = vrButton.viewModel._command
        vrButton.viewModel._command = function (VRButtonViewModel) {
          viewModelCommand()
          enableVRUI(viewer, VRButtonViewModel.isVRMode)
        }
        viewer._vrButton = vrButton
        viewer.forceResize()
      }
    },
    useDefaultRenderLoop (val) {
      this.viewer.useDefaultRenderLoop = val
    },
    navigation (val) {
      const { viewer, viewerContainer } = this
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
        viewer.forceResize()
      }
    },
    sceneMode (val) {
      const { viewer } = this
      if (
        Cesium.SceneMode.COLUMBUS_VIEW === val ||
        Cesium.SceneMode.MORPHING === val ||
        Cesium.SceneMode.SCENE2D === val ||
        Cesium.SceneMode.SCENE3D === val
      ) {
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
    terrainProvider (val) {
      const { viewer } = this
      viewer.terrainProvider = val
    },
    camera: {
      handler (val) {
        const { viewer } = this
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(val.position.lng, val.position.lat, val.position.height),
          orientation: {
            heading: Cesium.Math.toRadians(val.heading),
            pitch: Cesium.Math.toRadians(val.pitch),
            roll: Cesium.Math.toRadians(val.roll)
          }
        })
      },
      deep: true
    },
    imageryProvider (val, oldvalue) {
      const { viewer } = this
      if (Cesium.defined(val)) {
        for (let i = 0; i < viewer.imageryLayers.length; i++) {
          viewer.imageryLayers[i].imageryProvider === oldvalue && viewer.imageryLayers.remove(viewer.imageryLayers[i])
        }
        viewer.imageryLayers.addImageryProvider(val)
      }
    }
  },
  methods: {
    onTimelineScrubfunction (e) {
      let clock = e.clock
      clock.currentTime = e.timeJulian
      clock.shouldAnimate = false
    },
    resizeToolbar (parent, child) {
      Array.prototype.slice.call(parent.children).forEach((element) => {
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
      Array.prototype.slice.call(parent.children).forEach((element) => {
        arr.push(element)
      })
      arr.sort(function (a, b) {
        return a.customIndex - b.customIndex
      })
      for (var i = 0; i < arr.length; i++) {
        parent.appendChild(arr[i])
      }
    },
    enableVRUI (viewer, enabled) {
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
      if (this._mounted) {
        return false
      }
      this.Cesium = Cesium
      const $el = this.$refs.viewer
      const accessToken = this.accessToken
        ? this.accessToken
        : typeof this._Cesium !== 'undefined' && this._Cesium().hasOwnProperty('accessToken')
          ? this._Cesium().accessToken
          : this.accessToken

      Cesium.Ion.defaultAccessToken = accessToken
      const {
        animation,
        baseLayerPicker,
        fullscreenButton,
        vrButton,
        geocoder,
        homeButton,
        infoBox,
        sceneModePicker,
        selectionIndicator,
        timeline,
        navigationHelpButton,
        navigationInstructionsInitiallyVisible,
        scene3DOnly,
        shouldAnimate,
        clockViewModel,
        selectedImageryProviderViewModel,
        imageryProviderViewModels,
        selectedTerrainProviderViewModel,
        terrainProviderViewModels,
        imageryProvider,
        terrainProvider,
        skyBox,
        skyAtmosphere,
        fullscreenElement,
        useDefaultRenderLoop,
        targetFrameRate,
        showRenderLoopErrors,
        automaticallyTrackDataSourceClocks,
        contextOptions,
        sceneMode,
        mapProjection,
        globe,
        orderIndependentTranslucency,
        creditContainer,
        creditViewport,
        dataSources,
        terrainExaggeration,
        shadows,
        terrainShadows,
        mapMode2D,
        projectionPicker,
        requestRenderMode,
        maximumRenderTimeChange,
        navigation,
        registerEvents
      } = this
      const url = Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
      let options = {
        animation,
        baseLayerPicker,
        fullscreenButton,
        vrButton,
        geocoder,
        homeButton,
        infoBox,
        sceneModePicker,
        selectionIndicator,
        timeline,
        navigationHelpButton,
        navigationInstructionsInitiallyVisible,
        scene3DOnly,
        shouldAnimate,
        clockViewModel,
        selectedImageryProviderViewModel,
        imageryProviderViewModels,
        selectedTerrainProviderViewModel,
        terrainProviderViewModels,
        imageryProvider: this.isEmptyObj(imageryProvider)
          ? Cesium.defined(Cesium.TileMapServiceImageryProvider)
            ? new Cesium.TileMapServiceImageryProvider({
              url: url
            })
            : Cesium.createTileMapServiceImageryProvider({ url: url })
          : imageryProvider,
        terrainProvider,
        skyBox,
        skyAtmosphere,
        fullscreenElement: this.isEmptyObj(fullscreenElement) ? this.$refs.viewer : fullscreenElement,
        useDefaultRenderLoop,
        targetFrameRate,
        showRenderLoopErrors,
        automaticallyTrackDataSourceClocks,
        contextOptions,
        sceneMode,
        mapProjection,
        globe,
        orderIndependentTranslucency,
        creditContainer,
        creditViewport,
        dataSources,
        terrainExaggeration,
        shadows,
        terrainShadows,
        mapMode2D,
        projectionPicker,
        requestRenderMode,
        maximumRenderTimeChange,
        navigation
      }
      this.removeNullItem(options)
      const viewer = new Cesium.Viewer($el, options)
      if (Cesium.defined(this.camera)) {
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(
            this.camera.position.lng,
            this.camera.position.lat,
            this.camera.position.height
          ),
          orientation: {
            heading: Cesium.Math.toRadians(this.camera.heading),
            pitch: Cesium.Math.toRadians(this.camera.pitch),
            roll: Cesium.Math.toRadians(this.camera.roll)
          }
        })
      }

      let _this = this
      viewer.camera.changed.addEventListener(() => {
        const listener = _this.$listeners['update:camera']
        const cartographic = viewer.camera.positionCartographic
        const camera = {
          position: {
            lng: Cesium.Math.toDegrees(cartographic.longitude),
            lat: Cesium.Math.toDegrees(cartographic.latitude),
            height: cartographic.height
          },
          heading: Cesium.Math.toDegrees(viewer.camera.heading),
          pitch: Cesium.Math.toDegrees(viewer.camera.pitch),
          roll: Cesium.Math.toDegrees(viewer.camera.roll)
        }
        if (listener) {
          this.$emit('update:camera', camera)
        }
      })
      // if (Cesium.defined(viewer.animation)) {
      //   var d = new Date()
      //   var hour = 0 - d.getTimezoneOffset()
      //   viewer.animation.viewModel.timeFormatter = function (date, viewModel) {
      //     var dateZone8 = Cesium.JulianDate.addMinutes(date, hour, new Cesium.JulianDate())
      //     var gregorianDate = Cesium.JulianDate.toGregorianDate(dateZone8)
      //     var millisecond = Math.round(gregorianDate.millisecond)
      //     if (Math.abs(viewModel._clockViewModel.multiplier) < 1) {
      //       return Cesium.sprintf('%02d:%02d:%02d.%03d', gregorianDate.hour, gregorianDate.minute, gregorianDate.second, millisecond)
      //     }
      //     return Cesium.sprintf('%02d:%02d:%02d GMT+8', gregorianDate.hour, gregorianDate.minute, gregorianDate.second)
      //   }
      // }
      this.viewerContainer = getDocumentByClassName(this.$refs.viewer.children, 'cesium-viewer')
      if (Cesium.defined(Cesium.SuperMapImageryProvider) && !this.logo) {
        let credit = viewer.scene.frameState.creditDisplay
        credit.container.removeChild(credit._imageContainer)
      }
      if (!this.logo) {
        viewer.cesiumWidget.creditContainer.style.display = 'none'
      }
      this.viewer = viewer
      registerEvents(true)
      this.$emit('ready', { Cesium, viewer })
      this._mounted = true
    },
    getCesiumScript () {
      if (!global.Cesium) {
        const cesiumPath = this.cesiumPath
          ? this.cesiumPath
          : typeof this._Cesium !== 'undefined' && this._Cesium().hasOwnProperty('cesiumPath')
            ? this._Cesium().cesiumPath
            : 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'

        let dirName = dirname(cesiumPath)
        const $link = document.createElement('link')
        $link.rel = 'stylesheet'
        global.document.head.appendChild($link)
        $link.href = `${dirName}/Widgets/widgets.css`

        const $script = document.createElement('script')
        global.document.body.appendChild($script)
        $script.src = cesiumPath
        return new Promise((resolve, reject) => {
          $script.onload = () => {
            // 超图WebGL3D需要引入zlib.min.js
            if (Cesium.SuperMapImageryProvider) {
              const $scriptZlib = document.createElement('script')
              global.document.body.appendChild($scriptZlib)
              $scriptZlib.src = `${dirName}/Workers/zlib.min.js`
            }
            resolve(global.Cesium)
          }
        })
      } else {
        return Promise.resolve(global.Cesium)
      }
    },
    registerEvents (flag) {
      const { viewer } = this
      bindEvents.call(this, viewer, undefined, flag)
      Events['viewer-children-events'].forEach((eventName) => {
        bindEvents.call(this, viewer[eventName.name], eventName.events, flag)
      })
      let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
      Events['viewer-mouse-events'].forEach((eventName) => {
        const listener = this.$listeners[eventName]
        const methodName = flag ? 'setInputAction' : 'removeInputAction'
        listener && handler[methodName](listener.fns, Cesium.ScreenSpaceEventType[eventName])
      })
    },
    getServices () {
      const vm = this
      return mergeDescriptors(
        {},
        {
          get Cesium () {
            return vm.Cesium
          },
          get viewer () {
            return vm.viewer
          },
          get dataSources () {
            return vm.dataSources
          },
          get entities () {
            return vm.entities
          },
          get imageryLayers () {
            return vm.imageryLayers
          },
          get primitives () {
            return vm.primitives
          }
        }
      )
    }
  },
  mounted () {
    const { getCesiumScript, init } = this
    getCesiumScript().then(init)
  },
  created () {
    this._mounted = false
    Object.defineProperties(this, {
      cesiumObject: {
        enumerable: true,
        get: () => this.viewer
      },
      dataSources: {
        enumerable: true,
        get: () => this.viewer && this.viewer.dataSources
      },
      entities: {
        enumerable: true,
        get: () => this.viewer && this.viewer.entities
      },
      imageryLayers: {
        enumerable: true,
        get: () => this.viewer && this.viewer.imageryLayers
      },
      primitives: {
        enumerable: true,
        get: () => this.viewer && this.viewer.scene.primitives
      }
    })
  },
  destroyed () {
    if (global.Cesium) {
      let scripts = document.getElementsByTagName('script')
      let removeScripts = []
      for (let script of scripts) {
        if (script.src.indexOf('/Cesium.js') > -1) {
          removeScripts.push(script)
        }
        if (global.Cesium.SuperMapImageryProvider) {
          if (script.src.indexOf('/Workers/zlib.min.js') > -1) {
            removeScripts.push(script)
          }
        }
      }
      removeScripts.forEach((script) => {
        document.getElementsByTagName('body')[0].removeChild(script)
      })
      let links = document.getElementsByTagName('link')
      for (let link of links) {
        if (link.href.indexOf('Widgets/widgets.css') > -1) {
          document.getElementsByTagName('head')[0].removeChild(link)
        }
      }
      global.Cesium = null
      this.viewer = null
      this._mounted = false
    }
  }
}
</script>
