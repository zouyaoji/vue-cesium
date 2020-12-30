/*
 * @Author: zouyaoji
 * @Date: 2018-02-06 17:56:48
 * @Last Modified by: zouyaoji
 * @Last Modified time: 2020-12-26 23:58:13
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
import { dirname, isArray } from '../../utils/util.js'

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
    },
    navigation: { // for supermap
      type: Boolean,
      default: false
    },
    TZcode: {
      type: String,
      default: new Date().getTimezoneOffset() === 0 ? 'UTC' : 'UTC' + '+' + -(new Date().getTimezoneOffset() / 60)
    },
    UTCoffset: {
      type: Number,
      default: -(new Date().getTimezoneOffset())
    },
    removeCesiumScript: {
      type: Boolean,
      default: true
    },
    autoSortImageryLayers: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    selectionIndicator (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.selectionIndicator) && !viewer.selectionIndicator.isDestroyed() && !val) {
        let selectionIndicatorContainer = viewer.selectionIndicator.container
        viewerContainer.removeChild(selectionIndicatorContainer)
        viewer.selectionIndicator.destroy()
        viewer._selectionIndicator = undefined
      } else if (!Cesium.defined(viewer.selectionIndicator) || viewer.selectionIndicator.isDestroyed()) {
        let selectionIndicatorContainer = document.createElement('div')
        selectionIndicatorContainer.className = 'cesium-viewer-selectionIndicatorContainer'
        viewerContainer.appendChild(selectionIndicatorContainer)
        let selectionIndicator = new Cesium.SelectionIndicator(selectionIndicatorContainer, viewer.scene)
        viewer._selectionIndicator = selectionIndicator
      }
      viewer.widgetResized.raiseEvent()
    },
    infoBox (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.infoBox) && !viewer.infoBox.isDestroyed() && !val) {
        let infoBoxContainer = viewer.infoBox.container
        viewerContainer.removeChild(infoBoxContainer)
        viewer.infoBox.destroy()
        viewer._infoBox = undefined
      } else if (!Cesium.defined(viewer.infoBox) || viewer.infoBox.isDestroyed()) {
        let infoBoxContainer = document.createElement('div')
        infoBoxContainer.className = 'cesium-viewer-infoBoxContainer'
        viewerContainer.appendChild(infoBoxContainer)
        let infoBox = new Cesium.InfoBox(infoBoxContainer)
        let infoBoxViewModel = infoBox.viewModel
        viewer._eventHelper.add(infoBoxViewModel.cameraClicked, viewer._onInfoBoxCameraClicked, viewer)
        viewer._eventHelper.add(infoBoxViewModel.closeClicked, viewer._onInfoBoxClockClicked, viewer)
        const events = ['cameraClicked', 'closeClicked']
        infoBoxViewModel && bindEvents.call(this, infoBoxViewModel, events, true)
        viewer._infoBox = infoBox
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },
    geocoder (val) {
      const { viewer, resizeToolbar } = this
      let toolbar = viewer._toolbar
      if (Cesium.defined(viewer.geocoder) && !viewer.geocoder.isDestroyed() && !val) {
        let geocoderContainer = viewer.geocoder.container
        toolbar.removeChild(geocoderContainer)
        viewer.geocoder.destroy()
        viewer._geocoder = undefined
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
      viewer.widgetResized.raiseEvent()
    },
    homeButton (val) {
      const { viewer, resizeToolbar } = this
      let toolbar = viewer._toolbar
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
      viewer.widgetResized.raiseEvent()
    },
    sceneModePicker (val) {
      const { viewer, resizeToolbar } = this
      let toolbar = viewer._toolbar
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
      viewer.widgetResized.raiseEvent()
    },
    projectionPicker (val) {
      const { viewer, resizeToolbar } = this
      let toolbar = viewer._toolbar
      if (Cesium.defined(viewer.projectionPicker) && !viewer.projectionPicker.isDestroyed() && !val) {
        viewer.projectionPicker.destroy()
        viewer._projectionPicker = undefined
      } else if (!Cesium.defined(viewer.projectionPicker) || viewer.projectionPicker.isDestroyed()) {
        let projectionPicker = new Cesium.ProjectionPicker(toolbar, viewer.scene)
        viewer._projectionPicker = projectionPicker
        resizeToolbar(toolbar, projectionPicker)
      }
      viewer.widgetResized.raiseEvent()
    },
    baseLayerPicker (val) {
      const { viewer, resizeToolbar } = this
      let toolbar = viewer._toolbar
      if (Cesium.defined(viewer.baseLayerPicker) && !viewer.baseLayerPicker.isDestroyed() && !val) {
        viewer.baseLayerPicker.destroy()
        viewer._baseLayerPicker = undefined
        viewer.imageryLayers.remove(viewer.imageryLayers.get(viewer.imageryLayers.length - 1))
      } else if (!Cesium.defined(viewer.baseLayerPicker) || viewer.baseLayerPicker.isDestroyed()) {
        let createBaseLayerPicker =
          (!Cesium.defined(viewer.globe) || this.globe !== false) &&
          (!Cesium.defined(viewer.baseLayerPicker) || this.baseLayerPicker !== false)

        if (createBaseLayerPicker && Cesium.defined(this.imageryProvider)) {
          throw new Cesium.DeveloperError(`options.imageryProvider is not available when using the BaseLayerPicker widget.
Either specify options.selectedImageryProviderViewModel instead or set options.baseLayerPicker to false.`)
        }
        if (!createBaseLayerPicker && Cesium.defined(this.selectedImageryProviderViewModel)) {
          throw new Cesium.DeveloperError(`options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget.
Either specify options.imageryProvider instead or set options.baseLayerPicker to true.`)
        }
        if (createBaseLayerPicker && Cesium.defined(this.terrainProvider)) {
          throw new Cesium.DeveloperError(`options.terrainProvider is not available when using the BaseLayerPicker widget.
Either specify options.selectedTerrainProviderViewModel instead or set options.baseLayerPicker to false.`)
        }
        if (!createBaseLayerPicker && Cesium.defined(this.selectedTerrainProviderViewModel)) {
          throw new Cesium.DeveloperError(`options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget.
Either specify options.terrainProvider instead or set options.baseLayerPicker to true.`)
        }
        if (createBaseLayerPicker) {
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
          viewer.imageryLayers.raiseToTop(viewer.imageryLayers.get(0))
          resizeToolbar(toolbar, baseLayerPicker)
        }
      }
      viewer.widgetResized.raiseEvent()
    },
    navigationHelpButton (val) {
      const { viewer, resizeToolbar } = this
      let toolbar = viewer._toolbar
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
      viewer.widgetResized.raiseEvent()
    },
    animation (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.animation) && !viewer.animation.isDestroyed() && !val) {
        let animationContainer = viewer.animation.container
        viewerContainer.removeChild(animationContainer)
        viewer.animation.destroy()
        viewer._animation = undefined
      } else if (!Cesium.defined(viewer.animation) || viewer.animation.isDestroyed()) {
        let animationContainer = document.createElement('div')
        animationContainer.className = 'cesium-viewer-animationContainer'
        this.viewerContainer.appendChild(animationContainer)
        let animation = new Cesium.Animation(animationContainer, new Cesium.AnimationViewModel(viewer.clockViewModel))
        animation.viewModel.dateFormatter = this.localeDateTimeFormatter
        animation.viewModel.timeFormatter = this.localeTimeFormatter
        viewer._animation = animation
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },

    timeline (val) {
      const { viewer, viewerContainer, onTimelineScrubfunction } = this
      if (Cesium.defined(viewer.timeline) && !viewer.timeline.isDestroyed() && !val) {
        let timelineContainer = viewer.timeline.container
        viewerContainer.removeChild(timelineContainer)
        viewer.timeline.destroy()
        viewer._timeline = undefined
      } else if (!Cesium.defined(viewer.timeline) || viewer.timeline.isDestroyed()) {
        let timelineContainer = document.createElement('div')
        timelineContainer.className = 'cesium-viewer-timelineContainer'
        viewerContainer.appendChild(timelineContainer)
        let timeline = new Cesium.Timeline(timelineContainer, viewer.clock)
        timeline.makeLabel = time => { return this.localeDateTimeFormatter(time) }
        timeline.addEventListener('settime', onTimelineScrubfunction, false)
        timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
        viewer._timeline = timeline
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },
    fullscreenButton (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.fullscreenButton) && !viewer.fullscreenButton.isDestroyed() && !val) {
        let fullscreenContainer = viewer.fullscreenButton.container
        viewerContainer.removeChild(fullscreenContainer)
        viewer.fullscreenButton.destroy()
        viewer._fullscreenButton = undefined
      } else if (!Cesium.defined(viewer.fullscreenButton) || viewer.fullscreenButton.isDestroyed()) {
        let fullscreenContainer = document.createElement('div')
        fullscreenContainer.className = 'cesium-viewer-fullscreenContainer'
        viewerContainer.appendChild(fullscreenContainer)
        let fullscreenButton = new Cesium.FullscreenButton(fullscreenContainer, this.$refs.viewer)
        viewer._fullscreenButton = fullscreenButton
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
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
      const { viewer, enableVRUI } = this
      if (Cesium.defined(viewer.vrButton) && !viewer.vrButton.isDestroyed() && !val) {
        let vrContainer = viewer.vrButton.container
        viewerContainer.removeChild(vrContainer)
        viewer.vrButton.destroy()
        viewer._vrButton = undefined
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
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },
    useDefaultRenderLoop (val) {
      this.viewer.useDefaultRenderLoop = val
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
        this.setCamera(val)
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
    init () {
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
      let viewer = {}
      if (!global.XE) {
        viewer = new Cesium.Viewer($el, options)
      } else {
        this.earth = new global.XE.Earth($el, options)
        viewer = this.earth.czm.viewer
      }
      this.viewer = viewer

      if (Cesium.defined(this.camera)) {
        this.setCamera(this.camera)
      }

      let _this = this
      viewer.camera.changed.addEventListener(() => {
        const listener = _this.$listeners['update:camera']
        const cartographic = viewer.camera.positionCartographic
        let camera
        if (this.camera.lng) {
          camera = {
            position: {
              lng: Cesium.Math.toDegrees(cartographic.longitude),
              lat: Cesium.Math.toDegrees(cartographic.latitude),
              height: cartographic.height
            },
            heading: Cesium.Math.toDegrees(viewer.camera.heading),
            pitch: Cesium.Math.toDegrees(viewer.camera.pitch),
            roll: Cesium.Math.toDegrees(viewer.camera.roll)
          }
        } else {
          camera = {
            position: {
              x: viewer.camera.position.x,
              y: viewer.camera.position.y,
              z: viewer.camera.position.z
            },
            heading: viewer.camera.heading,
            pitch: viewer.camera.pitch,
            roll: viewer.camera.roll
          }
        }

        if (listener) {
          this.$emit('update:camera', camera)
        }
      })
      if (Cesium.defined(viewer.animation)) {
        viewer.animation.viewModel.dateFormatter = this.localeDateTimeFormatter
        viewer.animation.viewModel.timeFormatter = this.localeTimeFormatter
      }
      if (Cesium.defined(viewer.timeline)) {
        viewer.timeline.makeLabel = time => { return this.localeDateTimeFormatter(time) }
        viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
      }
      this.viewerContainer = viewer._element
      if (Cesium.defined(Cesium.SuperMapImageryProvider) && !this.logo) {
        let credit = viewer.scene.frameState.creditDisplay
        credit.container.removeChild(credit._imageContainer)
      }
      if (!this.logo) {
        viewer.cesiumWidget.creditContainer.style.display = 'none'
      }
      viewer.widgetResized = new Cesium.Event()
      viewer.imageryLayers.layerAdded.addEventListener(this.layerAdded)
      registerEvents(true)
      global.XE ? this.$emit('ready', { Cesium, viewer, earth: this.earth }) : this.$emit('ready', { Cesium, viewer })
      this._mounted = true
      this._resolve({ Cesium, viewer })
      return { Cesium, viewer }
    },
    setCamera (val) {
      const { viewer } = this
      const position = val.position
      if (position.lng && position.lat) {
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(position.lng, position.lat, position.height || 0),
          orientation: {
            heading: Cesium.Math.toRadians(val.heading || 360),
            pitch: Cesium.Math.toRadians(val.pitch || -90),
            roll: Cesium.Math.toRadians(val.roll || 0)
          }
        })
      } else if (position.x && position.y && position.z) {
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(position.x, position.y, position.z),
          orientation: {
            heading: val.heading || 2 * Math.PI,
            pitch: val.pitch || -Math.PI / 2,
            roll: val.roll || 0
          }
        })
      }
    },
    layerAdded (layer) {
      const { viewer, autoSortImageryLayers } = this
      if (viewer.baseLayerPicker) {
        viewer.imageryLayers.raiseToTop(layer)
      }
      // 维护影像图层顺序
      if (autoSortImageryLayers) {
        layer.sortOrder = Cesium.defined(layer.sortOrder) ? layer.sortOrder : 9999
        viewer.imageryLayers._layers.sort((a, b) => (a.sortOrder - b.sortOrder))
        viewer.imageryLayers._update()
      }
    },
    localeDateTimeFormatter (datetime, viewModel, ignoredate) {
      if (this.UTCoffset) {
        datetime = Cesium.JulianDate.addMinutes(datetime, this.UTCoffset, {})
      }
      var gregorianDT = Cesium.JulianDate.toGregorianDate(datetime)
      var objDT
      if (ignoredate) {
        objDT = ''
      } else {
        objDT = new Date(gregorianDT.year, gregorianDT.month - 1, gregorianDT.day)
        if (this.$vc.lang.isoName === 'zh-hans') {
          objDT = gregorianDT.year + '年' + objDT.toLocaleString(this.$vc.lang.isoName, { month: 'short' }) + gregorianDT.day + '日'
        } else {
          objDT = gregorianDT.day + ' ' + objDT.toLocaleString(this.$vc.lang.isoName, { month: 'short' }) + ' ' + gregorianDT.year
        }
        if (viewModel || gregorianDT.hour + gregorianDT.minute === 0) {
          return objDT
        }
        objDT += ' '
      }
      return objDT + Cesium.sprintf('%02d:%02d:%02d ' + this.TZcode, gregorianDT.hour, gregorianDT.minute, gregorianDT.second)
    },
    localeTimeFormatter (time, viewModel) {
      return this.localeDateTimeFormatter(time, viewModel, true)
    },
    registerEvents (flag) {
      const { viewer } = this
      bindEvents.call(this, viewer, undefined, flag)
      Events['viewer-property-events'].forEach((eventName) => {
        const instance = isArray(eventName.name) && viewer[eventName.name[0]] ? viewer[eventName.name[0]][eventName.name[1]] : viewer[eventName.name]
        instance && bindEvents.call(this, instance, eventName.events, flag)
      })
      let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
      Events['viewer-mouse-events'].forEach((eventName) => {
        const listener = this.$listeners[eventName] || this.$listeners[eventName.toLowerCase()]
        if (flag) {
          listener && handler['setInputAction'](listener.fns, Cesium.ScreenSpaceEventType[eventName])
        } else {
          listener && handler['removeInputAction'](Cesium.ScreenSpaceEventType[eventName])
        }
      })
    },
    getServices () {
      const vm = this
      return mergeDescriptors(
        {},
        {
          get viewerContainer () {
            return vm
          },
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
          },
          get groundPrimitives () {
            return vm.groundPrimitives
          },
          get postProcessStages () {
            return vm.postProcessStages
          },
          get earth () {
            return vm.earth
          }
        }
      )
    },
    getCesiumScript () {
      if (!global.Cesium) {
        const cesiumPath = this.cesiumPath
          ? this.cesiumPath
          : typeof this._Cesium !== 'undefined' && this._Cesium().hasOwnProperty('cesiumPath')
            ? this._Cesium().cesiumPath
            : 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'

        let dirName = dirname(cesiumPath)
        // 引入样式 earthsdk 会自动引 不用引入了
        if (cesiumPath.indexOf('/XbsjEarth.js') === -1) {
          const $link = document.createElement('link')
          $link.rel = 'stylesheet'
          global.document.head.appendChild($link)
          $link.href = `${dirName}/Widgets/widgets.css`
        }

        const $script = document.createElement('script')
        global.document.body.appendChild($script)
        $script.src = cesiumPath
        return new Promise((resolve, reject) => {
          $script.onload = () => {
            if (global.Cesium) {
              // 超图WebGL3D需要引入zlib.min.js
              if (Cesium.SuperMapImageryProvider && Number(Cesium.VERSION) < 1.54) {
                const $scriptZlib = document.createElement('script')
                global.document.body.appendChild($scriptZlib)
                $scriptZlib.src = `${dirName}/Workers/zlib.min.js`
              }
              resolve(global.Cesium)
            } else if (global.XE) { // 兼容 cesiumlab earthsdk
              global.XE.ready().then(() => {
                resolve(global.Cesium)
              })
            } else {
              reject(new Error(`[C_PKG_FULLNAME] ERROR: ` + 'Error loading CesiumJS!'))
            }
          }
        })
      } else {
        return Promise.resolve(global.Cesium)
      }
    },
    async beforeInit () {
      // Make sure to add only one CesiumJS script tag
      // 保证只添加一个CesiumJS标签
      this.$vc.scriptPromise = this.$vc.scriptPromise || this.getCesiumScript()
      await this.$vc.scriptPromise
    }
  },
  mounted () {
    const { init, beforeInit } = this
    beforeInit()
      .then(() => {
        const listener = this.$listeners['cesiumReady']
        listener && this.$emit('cesiumReady', Cesium)
        this.$nextTick(() => {
          init()
        })
      })
    // .catch((e) => _reject(new Error(`[C_PKG_FULLNAME] ERROR: ` + 'An error occurred during the initialization of the Viewer!')))
  },
  created () {
    this._mounted = false
    // this._createPromise = Promise.resolve(this.beforeInit())
    // 注释上面方法，测试发现在切换路由时，实测 Vue 生命周期是先触发新组件的 created，再触发旧组件的 destroyed，再触发新组件的 mounted 。
    // 逻辑就是先创建新的 然后销毁旧的，但虽然销毁的是旧的 还是会把新的给影响。
    // 因此 viewer 组件的加载方式还是放 mounted，这样就先销毁旧的再加载新的。
    // 但为了外部能取得 createPromise，_createPromise的初始化还是要放created中。
    this._createPromise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })

    Object.defineProperties(this, {
      createPromise: {
        enumerable: true,
        get: () => this._createPromise
      },
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
      },
      groundPrimitives: {
        enumerable: true,
        get: () => this.viewer && this.viewer.scene.groundPrimitives
      },
      postProcessStages: {
        enumerable: true,
        get: () => this.viewer && this.viewer.scene.postProcessStages
      }
    })
  },
  destroyed () {
    const { viewer, removeCesiumScript, earth, registerEvents } = this
    registerEvents(false)
    this.$vc._screenSpaceEventHandler && this.$vc._screenSpaceEventHandler.destroy()
    global.XE ? earth && earth.destroy() : viewer && viewer.destroy()

    this.viewer = undefined
    this._mounted = false
    this.$vc._screenSpaceEventHandler = undefined

    if (removeCesiumScript && global.Cesium) {
      let scripts = document.getElementsByTagName('script')
      let removeScripts = []
      for (let script of scripts) {
        script.src.indexOf('/Cesium.js') > -1 && removeScripts.push(script)
        script.src.indexOf('/Workers/zlib.min.js') > -1 && removeScripts.push(script)
        if (global.XE) {
          script.src.indexOf('/rxjs.umd.min.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/XbsjCesium.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/viewerCesiumNavigationMixin.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/XbsjEarth.js') > -1 && removeScripts.push(script)
        }
      }
      removeScripts.forEach((script) => {
        script.parentNode.removeChild(script)
      })
      let links = document.getElementsByTagName('link')
      for (let link of links) {
        if (link.href.indexOf('Widgets/widgets.css') > -1) {
          document.getElementsByTagName('head')[0].removeChild(link)
        }
      }
      global.Cesium && (global.Cesium = undefined)
      global.XbsjCesium && (global.XbsjCesium = undefined)
      global.XbsjEarth && (global.XbsjEarth = undefined)
      global.XE && (global.XE = undefined)
      this.$vc.scriptPromise = undefined
    }
  }
}
</script>
