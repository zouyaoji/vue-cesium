import { ExtractPropTypes, watch, ref, onMounted, onUnmounted, nextTick, reactive } from 'vue'
import mitt, { Emitter } from 'mitt'
import { t } from '@vue-cesium/locale'
import defaultProps from './defaultProps'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { dirname, removeEmpty, isEmptyObj } from '@vue-cesium/utils/util'
import { getInstanceListener, $ } from '@vue-cesium/utils/private/vm'
import {
  Cesium as CesiumNative,
  VcComponentInternalInstance,
  CameraObj,
  ReadyObj,
  VcComponentPublicInstance
} from '@vue-cesium/utils/types'
import { InstallOptions } from '@vue-cesium/utils/config'
import { useEvents } from '@vue-cesium/composables'
import { setViewerCamera } from '@vue-cesium/utils/cesium-helpers'

export default function(props: ExtractPropTypes<typeof defaultProps>, ctx, vcInstance: VcComponentInternalInstance) {
  console.log('viewer creating')
  // state
  let resolve, reject
  const createPromise = new Promise<ReadyObj>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })

  const viewerRef = ref<HTMLElement>(null)
  const isReady = ref(false)
  const $vc = vcInstance.appContext.config.globalProperties.$VueCesium as InstallOptions
  const vcMitt: Emitter = mitt()
  const { emit } = ctx

  vcInstance.mounted = false
  vcInstance.vcMitt = vcMitt
  vcInstance.cesiumClass = 'Viewer'
  vcInstance.children = []
  const eventsState = useEvents(props, vcInstance)

  const layout = reactive({
    toolbarContainerRC: undefined,
    timelineContainerRC: undefined,
    animationContainerRC: undefined,
    bottomContainerRC: undefined
  })

  // watch
  watch(
    () => props.selectionIndicator,
    val => {
      const { viewer, viewerElement } = vcInstance
      const { defined, SelectionIndicator } = Cesium
      let selectionIndicatorContainer
      if (defined(viewer.selectionIndicator) && !viewer.selectionIndicator.isDestroyed() && !val) {
        selectionIndicatorContainer = viewer.selectionIndicator.container
        viewerElement.removeChild(selectionIndicatorContainer)
        viewer.selectionIndicator.destroy()
        viewer._selectionIndicator = undefined
      } else if (!defined(viewer.selectionIndicator) || viewer.selectionIndicator.isDestroyed()) {
        selectionIndicatorContainer = document.createElement('div')
        selectionIndicatorContainer.className = 'cesium-viewer-selectionIndicatorContainer'
        viewerElement.appendChild(selectionIndicatorContainer)
        const selectionIndicator = new SelectionIndicator(selectionIndicatorContainer, viewer.scene)
        viewer._selectionIndicator = selectionIndicator
      }

      viewer.viewerWidgetResized.raiseEvent({
        type: 'selectionIndicator',
        status: val ? 'added' : 'removed',
        target: selectionIndicatorContainer
      })
    }
  )

  watch(
    () => props.infoBox,
    val => {
      const { viewer, viewerElement } = vcInstance
      const { defined, InfoBox } = Cesium
      const events = ['cameraClicked', 'closeClicked']
      let infoBoxContainer
      if (defined(viewer.infoBox) && !viewer.infoBox.isDestroyed() && !val) {
        const infoBoxViewModel = viewer.infoBox.viewModel
        infoBoxViewModel && eventsState.bindEvents(infoBoxViewModel, events, false)
        infoBoxContainer = viewer.infoBox.container
        viewerElement.removeChild(infoBoxContainer)
        viewer.infoBox.destroy()
        viewer._infoBox = undefined
      } else if (!defined(viewer.infoBox) || viewer.infoBox.isDestroyed()) {
        infoBoxContainer = document.createElement('div')
        infoBoxContainer.className = 'cesium-viewer-infoBoxContainer'
        viewerElement.appendChild(infoBoxContainer)
        const infoBox = new InfoBox(infoBoxContainer)
        const infoBoxViewModel = infoBox.viewModel
        viewer._eventHelper.add(infoBoxViewModel.cameraClicked, viewer._onInfoBoxCameraClicked, viewer)
        viewer._eventHelper.add(infoBoxViewModel.closeClicked, viewer._onInfoBoxClockClicked, viewer)
        infoBoxViewModel && eventsState.bindEvents(infoBoxViewModel, events, true)
        viewer._infoBox = infoBox
      }
      viewer.forceResize()
      viewer.viewerWidgetResized.raiseEvent({
        type: 'infoBox',
        status: val ? 'added' : 'removed',
        target: infoBoxContainer
      })
    }
  )

  watch(
    () => props.geocoder,
    val => {
      const { viewer } = vcInstance
      const toolbar = viewer._toolbar
      const { defined, Geocoder } = Cesium
      let geocoderContainer
      if (defined(viewer.geocoder) && !viewer.geocoder.isDestroyed() && !val) {
        geocoderContainer = viewer.geocoder.container
        toolbar.removeChild(geocoderContainer)
        viewer.geocoder.destroy()
        viewer._geocoder = undefined
      } else if (!defined(viewer.geocoder) || viewer.geocoder.isDestroyed()) {
        geocoderContainer = document.createElement('div')
        geocoderContainer.className = 'cesium-viewer-geocoderContainer'
        toolbar.appendChild(geocoderContainer)
        const geocoder = new Geocoder({
          container: geocoderContainer,
          geocoderServices:
            defined(props.geocoder) && typeof props.geocoder !== 'boolean'
              ? Array.isArray(props.geocoder)
                ? props.geocoder
                : [props.geocoder]
              : undefined,
          scene: viewer.scene
        })
        viewer._eventHelper.add(geocoder.viewModel.search.beforeExecute, viewer._clearObjects, viewer)
        viewer._geocoder = geocoder
        resizeToolbar(toolbar, geocoderContainer)
      }
      viewer.viewerWidgetResized.raiseEvent({
        type: 'geocoder',
        status: val ? 'added' : 'removed',
        target: geocoderContainer
      })
    }
  )

  watch(
    () => props.homeButton,
    val => {
      const { viewer } = vcInstance
      const toolbar = viewer._toolbar
      const { defined, HomeButton } = Cesium
      if (defined(viewer.homeButton) && !viewer.homeButton.isDestroyed() && !val) {
        viewer.homeButton.destroy()
        viewer._homeButton = undefined
      } else if (!defined(viewer.homeButton) || viewer.homeButton.isDestroyed()) {
        const homeButton = new HomeButton(toolbar, viewer.scene)
        if (defined(viewer.geocoder)) {
          viewer._eventHelper.add(homeButton.viewModel.command.afterExecute, function() {
            const viewModel = viewer.geocoder.viewModel
            viewModel.searchText = ''
            viewModel.isSearchInProgress && (viewModel as any).search()
          })
        }
        viewer._eventHelper.add(homeButton.viewModel.command.beforeExecute, viewer._clearTrackedObject, viewer)
        viewer._homeButton = homeButton
        resizeToolbar(toolbar, homeButton)
      }
      viewer.viewerWidgetResized.raiseEvent({
        type: 'homeButton',
        status: val ? 'added' : 'removed',
        target: toolbar
      })
    }
  )

  watch(
    () => props.sceneModePicker,
    val => {
      const { viewer } = vcInstance
      const toolbar = viewer._toolbar
      const { defined, DeveloperError, SceneModePicker } = Cesium
      if (defined(viewer.sceneModePicker) && !viewer.sceneModePicker.isDestroyed() && !val) {
        viewer.sceneModePicker.destroy()
        viewer._sceneModePicker = undefined
      } else if (!defined(viewer.sceneModePicker) || viewer.sceneModePicker.isDestroyed()) {
        if (props.sceneModePicker && props.scene3DOnly) {
          throw new DeveloperError('options.sceneModePicker is not available when options.scene3DOnly is set to true.')
        }
        if (!props.scene3DOnly && props.sceneModePicker) {
          const sceneModePicker = new SceneModePicker(toolbar, viewer.scene)
          viewer._sceneModePicker = sceneModePicker
          resizeToolbar(toolbar, sceneModePicker)
        }
      }
      viewer.viewerWidgetResized.raiseEvent({
        type: 'sceneModePicker',
        status: val ? 'added' : 'removed',
        target: toolbar
      })
    }
  )

  watch(
    () => props.projectionPicker,
    val => {
      const { viewer } = vcInstance
      const toolbar = viewer._toolbar
      const { defined, ProjectionPicker } = Cesium
      if (defined(viewer.projectionPicker) && !viewer.projectionPicker.isDestroyed() && !val) {
        viewer.projectionPicker.destroy()
        viewer._projectionPicker = undefined
      } else if (!defined(viewer.projectionPicker) || viewer.projectionPicker.isDestroyed()) {
        const projectionPicker = new ProjectionPicker(toolbar, viewer.scene)
        viewer._projectionPicker = projectionPicker
        resizeToolbar(toolbar, projectionPicker)
      }
      viewer.viewerWidgetResized.raiseEvent({
        type: 'projectionPicker',
        status: val ? 'added' : 'removed',
        target: toolbar
      })
    }
  )

  watch(
    () => props.baseLayerPicker,
    val => {
      const { viewer } = vcInstance
      const toolbar = viewer._toolbar
      const {
        defined,
        buildModuleUrl,
        DeveloperError,
        defaultValue,
        createDefaultImageryProviderViewModels,
        createDefaultTerrainProviderViewModels,
        BaseLayerPicker
      } = Cesium
      if (defined(viewer.baseLayerPicker) && !viewer.baseLayerPicker.isDestroyed() && !val) {
        viewer.baseLayerPicker.destroy()
        viewer._baseLayerPicker = undefined
        viewer.imageryLayers.remove(viewer.imageryLayers.get(viewer.imageryLayers.length - 1))
        const url = buildModuleUrl('Assets/Textures/NaturalEarthII')
        const baseLayer = viewer.imageryLayers.addImageryProvider(
          new Cesium.TileMapServiceImageryProvider({
            url
          })
        )
        viewer.imageryLayers.lowerToBottom(baseLayer)
      } else if (!defined(viewer.baseLayerPicker) || viewer.baseLayerPicker.isDestroyed()) {
        const createBaseLayerPicker = !defined(viewer.globe) && (!defined(viewer.baseLayerPicker) || props.baseLayerPicker !== false)

        if (createBaseLayerPicker && defined(props.imageryProvider)) {
          throw new DeveloperError(`options.imageryProvider is not available when using the BaseLayerPicker widget.
        Either specify options.selectedImageryProviderViewModel instead or set options.baseLayerPicker to false.`)
        }
        if (!createBaseLayerPicker && defined(props.selectedImageryProviderViewModel)) {
          throw new DeveloperError(`options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget.
        Either specify options.imageryProvider instead or set options.baseLayerPicker to true.`)
        }
        if (createBaseLayerPicker && defined(props.terrainProvider)) {
          throw new DeveloperError(`options.terrainProvider is not available when using the BaseLayerPicker widget.
        Either specify options.selectedTerrainProviderViewModel instead or set options.baseLayerPicker to false.`)
        }
        if (!createBaseLayerPicker && defined(props.selectedTerrainProviderViewModel)) {
          throw new DeveloperError(`options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget.
        Either specify options.terrainProvider instead or set options.baseLayerPicker to true.`)
        }
        if (createBaseLayerPicker) {
          const imageryProviderViewModels = defaultValue(props.imageryProviderViewModels, createDefaultImageryProviderViewModels())
          const terrainProviderViewModels = defaultValue(props.terrainProviderViewModels, createDefaultTerrainProviderViewModels())
          const baseLayerPicker = new BaseLayerPicker(toolbar, {
            globe: viewer.scene.globe,
            imageryProviderViewModels: imageryProviderViewModels,
            selectedImageryProviderViewModel: imageryProviderViewModels[0],
            terrainProviderViewModels: terrainProviderViewModels,
            selectedTerrainProviderViewModel: terrainProviderViewModels[0]
          })

          const elements = toolbar.getElementsByClassName('cesium-baseLayerPicker-dropDown')

          const baseLayerPickerDropDown = elements[0]
          viewer._baseLayerPickerDropDown = baseLayerPickerDropDown
          viewer._baseLayerPicker = baseLayerPicker
          viewer.imageryLayers.raiseToTop(viewer.imageryLayers.get(0))
          resizeToolbar(toolbar, baseLayerPicker)
        }
      }
      viewer.viewerWidgetResized.raiseEvent({
        type: 'baseLayerPicker',
        status: val ? 'added' : 'removed',
        target: toolbar
      })
    }
  )

  watch(
    () => props.navigationHelpButton,
    val => {
      const { viewer } = vcInstance
      const toolbar = viewer._toolbar
      const { defined, defaultValue, NavigationHelpButton } = Cesium
      if (defined(viewer.navigationHelpButton) && !viewer.navigationHelpButton.isDestroyed() && !val) {
        viewer.navigationHelpButton.destroy()
        viewer._navigationHelpButton = undefined
      } else if (!defined(viewer.navigationHelpButton) || viewer.navigationHelpButton.isDestroyed()) {
        let showNavHelp = true
        try {
          if (defined(window.localStorage)) {
            const hasSeenNavHelp = window.localStorage.getItem('cesium-hasSeenNavHelp')
            if (defined(hasSeenNavHelp) && Boolean(hasSeenNavHelp)) {
              showNavHelp = false
            } else {
              window.localStorage.setItem('cesium-hasSeenNavHelp', 'true')
            }
          }
        } catch (e) {}
        const navigationHelpButton = new NavigationHelpButton({
          container: toolbar,
          instructionsInitiallyVisible: defaultValue(props.navigationInstructionsInitiallyVisible, showNavHelp)
        })
        viewer._navigationHelpButton = navigationHelpButton
        resizeToolbar(toolbar, navigationHelpButton)
      }
      viewer.viewerWidgetResized.raiseEvent({
        type: 'navigationHelpButton',
        status: val ? 'added' : 'removed',
        target: toolbar
      })
    }
  )

  watch(
    () => props.animation,
    val => {
      const { viewer, viewerElement } = vcInstance
      const { defined, Animation, AnimationViewModel } = Cesium
      let animationContainer
      if (defined(viewer.animation) && !viewer.animation.isDestroyed() && !val) {
        animationContainer = viewer.animation.container
        viewerElement.removeChild(animationContainer)
        viewer.animation.destroy()
        viewer._animation = undefined
      } else if (!defined(viewer.animation) || viewer.animation.isDestroyed()) {
        animationContainer = document.createElement('div')
        animationContainer.className = 'cesium-viewer-animationContainer'
        viewerElement.appendChild(animationContainer)
        const animation = new Animation(animationContainer, new AnimationViewModel(viewer.clockViewModel))
        animation.viewModel.dateFormatter = localeDateTimeFormatter
        animation.viewModel.timeFormatter = localeTimeFormatter
        viewer._animation = animation
      }
      viewer.forceResize()
      viewer.viewerWidgetResized.raiseEvent({
        type: 'animation',
        status: val ? 'added' : 'removed',
        target: animationContainer
      })
    }
  )

  watch(
    () => props.timeline,
    val => {
      const { viewer, viewerElement } = vcInstance
      const { defined, Timeline } = Cesium
      let timelineContainer
      if (defined(viewer.timeline) && !viewer.timeline.isDestroyed() && !val) {
        timelineContainer = viewer.timeline.container
        viewerElement.removeChild(timelineContainer)
        viewer.timeline.destroy()
        viewer._timeline = undefined
      } else if (!defined(viewer.timeline) || viewer.timeline.isDestroyed()) {
        timelineContainer = document.createElement('div')
        timelineContainer.className = 'cesium-viewer-timelineContainer'
        viewerElement.appendChild(timelineContainer)
        const timeline = new Timeline(timelineContainer, viewer.clock)
        timeline.makeLabel = time => {
          return localeDateTimeFormatter(time)
        }
        timeline.addEventListener('settime', onTimelineScrubfunction, false)
        timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
        viewer._timeline = timeline
      }
      viewer.forceResize()
      viewer.viewerWidgetResized.raiseEvent({
        type: 'timeline',
        status: val ? 'added' : 'removed',
        target: timelineContainer
      })
    }
  )

  watch(
    () => props.fullscreenButton,
    val => {
      const { viewer, viewerElement } = vcInstance
      const { defined, FullscreenButton } = Cesium
      let fullscreenContainer
      if (defined(viewer.fullscreenButton) && !viewer.fullscreenButton.isDestroyed() && !val) {
        fullscreenContainer = viewer.fullscreenButton.container
        viewerElement.removeChild(fullscreenContainer)
        viewer.fullscreenButton.destroy()
        viewer._fullscreenButton = undefined
      } else if (!defined(viewer.fullscreenButton) || viewer.fullscreenButton.isDestroyed()) {
        fullscreenContainer = document.createElement('div')
        fullscreenContainer.className = 'cesium-viewer-fullscreenContainer'
        viewerElement.appendChild(fullscreenContainer)
        const fullscreenButton = new FullscreenButton(fullscreenContainer, viewerElement)
        viewer._fullscreenButton = fullscreenButton
      }
      viewer.forceResize()
      viewer.viewerWidgetResized.raiseEvent({
        type: 'fullscreenButton',
        status: val ? 'added' : 'removed',
        target: fullscreenContainer
      })
    }
  )

  watch(
    () => props.fullscreenElement,
    val => {
      const { viewer } = vcInstance
      const { defined } = Cesium
      if (!defined(viewer.fullscreenButton)) {
        return
      }
      if (defined(val)) {
        viewer.fullscreenButton.viewModel.fullscreenElement = val as Element
      }
    }
  )

  watch(
    () => props.vrButton,
    val => {
      const { viewer, viewerElement } = vcInstance
      const { defined, VRButton } = Cesium
      let vrContainer
      if (defined(viewer.vrButton) && !viewer.vrButton.isDestroyed() && !val) {
        vrContainer = viewer.vrButton.container
        viewerElement.removeChild(vrContainer)
        viewer.vrButton.destroy()
        viewer._vrButton = undefined
      } else if (!defined(viewer.vrButton) || viewer.vrButton.isDestroyed()) {
        vrContainer = document.createElement('div')
        vrContainer.className = 'cesium-viewer-vrContainer'
        viewerElement.appendChild(vrContainer)
        const vrButton = new VRButton(vrContainer, viewer.scene, viewerElement)
        const viewModelCommand = vrButton.viewModel.command as any
        ;(vrButton.viewModel as any)._command = function(VRButtonViewModel) {
          viewModelCommand()
          enableVRUI(viewer, VRButtonViewModel.isVRMode)
        }
        viewer._vrButton = vrButton
      }
      viewer.forceResize()
      viewer.viewerWidgetResized.raiseEvent({
        type: 'fullscreenButton',
        status: val ? 'added' : 'removed',
        target: vrContainer
      })
    }
  )

  watch(
    () => props.useDefaultRenderLoop,
    val => {
      vcInstance.viewer.useDefaultRenderLoop = val
    }
  )

  watch(
    () => props.sceneMode,
    val => {
      const { SceneMode } = Cesium
      if (SceneMode.COLUMBUS_VIEW === val || SceneMode.MORPHING === val || SceneMode.SCENE2D === val || SceneMode.SCENE3D === val) {
        vcInstance.viewer.scene.mode = val
      }
    }
  )

  watch(
    () => props.shouldAnimate,
    val => {
      vcInstance.viewer.clock.shouldAnimate = val
    }
  )

  watch(
    () => props.terrainExaggeration,
    val => {
      vcInstance.viewer._terrainExaggeration = val
    }
  )

  watch(
    () => props.shadows,
    val => {
      vcInstance.viewer.scene.shadowMap.enabled = val
    }
  )

  watch(
    () => props.terrainProvider,
    val => {
      vcInstance.viewer.terrainProvider = val
    }
  )

  watch(
    () => props.camera,
    val => {
      setViewerCamera(vcInstance.viewer, val)
    },
    { deep: true }
  )

  watch(
    () => props.imageryProvider,
    (val, oldVal) => {
      const { viewer } = vcInstance
      const { defined } = Cesium
      if (defined(val)) {
        for (let i = 0; i < viewer.imageryLayers.length; i++) {
          viewer.imageryLayers[i].imageryProvider === oldVal && viewer.imageryLayers.remove(viewer.imageryLayers[i])
        }
        viewer.imageryLayers.addImageryProvider(val)
      }
    }
  )

  watch(
    () => props.showCredit,
    val => {
      const { viewer } = vcInstance
      ;(viewer.cesiumWidget.creditContainer as HTMLElement).style.display = val ? 'inline' : 'none'
      viewer.viewerWidgetResized.raiseEvent({
        type: 'credit',
        status: val ? 'added' : 'removed',
        target: viewer.cesiumWidget.creditContainer
      })
    }
  )

  watch(
    () => props.debugShowFramesPerSecond,
    val => {
      const { viewer } = vcInstance
      viewer.scene.debugShowFramesPerSecond = val
    }
  )

  // methods

  /**
   * 检测是否引入 CesiumJS
   */
  const beforeLoad = async function(): Promise<void> {
    console.log('beforeLoad - viewer')
    const listener = getInstanceListener(vcInstance, 'beforeLoad')
    listener && emit('beforeLoad', vcInstance)
    $vc.scriptPromise = $vc.scriptPromise || getCesiumScript()
    await $vc.scriptPromise
  }
  /**
   * 初始化 Viewer，成功返回 {Cesium, viewer, instance}， 失败返回false。
   * @returns ReadyObj
   */
  const load = async function(): Promise<boolean | ReadyObj> {
    console.log('loading-viewer')
    if (vcInstance.mounted) {
      return false
    }

    await beforeLoad()

    const { Ion, buildModuleUrl, TileMapServiceImageryProvider, Viewer, defined, Math: CesiumMath, Event } = Cesium
    const accessToken = props.accessToken ? props.accessToken : $vc.accessToken
    Ion.defaultAccessToken = accessToken

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
      useBrowserRecommendedResolution,
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
      camera,
      navigation
    } = props

    const url = buildModuleUrl('Assets/Textures/NaturalEarthII')

    const options = {
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
      imageryProvider: isEmptyObj(imageryProvider)
        ? new TileMapServiceImageryProvider({
          url
        })
        : imageryProvider,
      terrainProvider,
      skyBox,
      skyAtmosphere,
      fullscreenElement: isEmptyObj(fullscreenElement) ? $(viewerRef) : fullscreenElement,
      useDefaultRenderLoop,
      targetFrameRate,
      showRenderLoopErrors,
      useBrowserRecommendedResolution,
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
    removeEmpty(options)

    let viewer: CesiumNative.Viewer

    if (!global.XE) {
      viewer = new Viewer($(viewerRef), options)
    } else {
      vcInstance.earth = new global.XE.Earth($(viewerRef), options)
      viewer = vcInstance.earth.czm.viewer
    }
    vcInstance.Cesium = Cesium
    vcInstance.viewer = viewer
    vcInstance.viewerElement = (viewer as any)._element
    vcInstance.mounted = true

    // vue-cesium 扩展补充
    defined(camera) && setViewerCamera(viewer, camera)

    const listener = getInstanceListener(vcInstance, 'update:camera')
    listener &&
      viewer.camera.changed.addEventListener(() => {
        const cartographic = viewer.camera.positionCartographic
        let cameraNew: CameraObj
        if (camera.position.lng) {
          cameraNew = {
            position: {
              lng: CesiumMath.toDegrees(cartographic.longitude),
              lat: CesiumMath.toDegrees(cartographic.latitude),
              height: cartographic.height
            },
            heading: CesiumMath.toDegrees(viewer.camera.heading || 360),
            pitch: CesiumMath.toDegrees(viewer.camera.pitch || -90),
            roll: CesiumMath.toDegrees(viewer.camera.roll || 0)
          }
        } else {
          cameraNew = {
            position: {
              x: viewer.camera.position.x,
              y: viewer.camera.position.y,
              z: viewer.camera.position.z
            },
            heading: viewer.camera.heading || 2 * Math.PI,
            pitch: viewer.camera.pitch || -Math.PI / 2,
            roll: viewer.camera.roll || 0
          }
        }

        emit('update:camera', cameraNew)
      })

    if (defined(viewer.animation)) {
      viewer.animation.viewModel.dateFormatter = localeDateTimeFormatter as CesiumNative.AnimationViewModel.DateFormatter
      viewer.animation.viewModel.timeFormatter = localeTimeFormatter as CesiumNative.AnimationViewModel.TimeFormatter
    }

    if (defined(viewer.timeline)) {
      viewer.timeline.makeLabel = time => {
        return localeDateTimeFormatter(time)
      }
      viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
    }

    !props.showCredit && ((viewer.cesiumWidget.creditContainer as HTMLElement).style.display = 'none')

    props.debugShowFramesPerSecond && (viewer.scene.debugShowFramesPerSecond = true)

    viewer.viewerWidgetResized = viewer.viewerWidgetResized || new Event()
    viewer.viewerWidgetResized.addEventListener(onViewerWidgetResized)
    viewer.imageryLayers.layerAdded.addEventListener(onImageryLayerAdded)
    eventsState.registerEvents(true)
    const readyObj: ReadyObj = global.XE
      ? {
        Cesium,
        viewer,
        earth: vcInstance.earth,
        vm: vcInstance.proxy
      }
      : {
        Cesium,
        viewer,
        vm: vcInstance.proxy
      }
    const listenerReady = getInstanceListener(vcInstance, 'ready')
    listenerReady && emit('ready', readyObj)
    vcMitt?.emit('ready', readyObj)
    nextTick(() => {
      viewer.resize()
      onViewerWidgetResized({
        type: 'viewer',
        status: 'added',
        target: viewer.container as HTMLElement
      })
      isReady.value = true
    })

    console.log('loaded-viewer')
    return readyObj
  }

  /**
   * Viewer 销毁方法。
   */
  const unload = async function() {
    if (!vcInstance.mounted) {
      return false
    }

    console.log('viewer---unloading')
    let unloadingResolve
    $vc.viewerUnloadingPromise = new Promise((resolve, reject) => {
      unloadingResolve = resolve
    })

    // If the component has subcomponents, you need to remove the subcomponents first. 如果该组件带有子组件，需要先移除子组件。
    for (let i = 0; i < vcInstance.children.length; i++) {
      const vcChildCmp = vcInstance.children[i].proxy as VcComponentPublicInstance
      await vcChildCmp.unload()
    }

    const { viewer, earth } = vcInstance
    if (global.Cesium) {
      viewer.imageryLayers.layerAdded.removeEventListener(onImageryLayerAdded)
      eventsState.registerEvents(false)
    }

    $vc.pickScreenSpaceEventHandler && $vc.pickScreenSpaceEventHandler.destroy()
    $vc.viewerScreenSpaceEventHandler && $vc.viewerScreenSpaceEventHandler.destroy()
    global.XE ? earth && earth.destroy() : viewer && viewer.destroy()

    $vc.pickScreenSpaceEventHandler = undefined
    $vc.viewerScreenSpaceEventHandler = undefined
    vcInstance.viewer = undefined
    vcInstance.mounted = false
    const { removeCesiumScript } = props
    if (removeCesiumScript && global.Cesium) {
      const scripts = document.getElementsByTagName('script')
      const removeScripts = []
      for (const script of scripts) {
        script.src.indexOf('/Cesium.js') > -1 && removeScripts.push(script)
        script.src.indexOf('/Workers/zlib.min.js') > -1 && removeScripts.push(script)
        if (global.XE) {
          script.src.indexOf('/rxjs.umd.min.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/XbsjCesium.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/viewerCesiumNavigationMixin.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/XbsjEarth.js') > -1 && removeScripts.push(script)
        }
      }
      removeScripts.forEach(script => {
        script.parentNode.removeChild(script)
      })
      const links = document.getElementsByTagName('link')
      for (const link of links) {
        if (link.href.indexOf('Widgets/widgets.css') > -1) {
          document.getElementsByTagName('head')[0].removeChild(link)
        }
      }
      global.Cesium && (global.Cesium = undefined)
      global.XbsjCesium && (global.XbsjCesium = undefined)
      global.XbsjEarth && (global.XbsjEarth = undefined)
      global.XE && (global.XE = undefined)
      $vc.scriptPromise = undefined
    }
    const listener = getInstanceListener(vcInstance, 'destroyed')
    listener && emit('destroyed', vcInstance)
    console.log('viewer---unloaded')
    unloadingResolve(true)
    $vc.viewerUnloadingPromise = undefined
    isReady.value = false
    return true
  }

  const reload = function() {
    return unload().then(() => {
      return load()
    })
  }

  /**
   * 动态引入 CesiumJS
   */
  const getCesiumScript = function(): Promise<typeof Cesium> {
    console.log('getCesiumScript')
    if (!global.Cesium) {
      // const $vc = useGlobalConfig()
      const cesiumPath = props.cesiumPath ? props.cesiumPath : $vc.cesiumPath

      const dirName = dirname(cesiumPath)
      // 引入样式 earthsdk 会自动引 不用引入了
      if (cesiumPath.indexOf('/XbsjEarth.js') === -1) {
        const $link = document.createElement('link')
        $link.rel = 'stylesheet'
        document.head.appendChild($link)
        $link.href = `${dirName}/Widgets/widgets.css`
      }

      const $script = document.createElement('script')
      document.body.appendChild($script)
      $script.src = cesiumPath
      return new Promise((resolve, reject) => {
        $script.onload = () => {
          if (global.Cesium) {
            resolve(global.Cesium)
          } else if (global.XE) {
            // 兼容 cesiumlab earthsdk
            global.XE.ready().then(() => {
              resolve(global.Cesium)
            })
            const listener = getInstanceListener(vcInstance, 'cesiumReady')
            listener && emit('cesiumReady', global.Cesium)
          } else {
            reject(new Error('VueCesium ERROR: ' + 'Error loading CesiumJS!'))
          }
        }
      })
    } else {
      return Promise.resolve(global.Cesium)
    }
  }

  const onViewerWidgetResized = (e?: {
    type: string
    status: string
    target: HTMLElement
  }) => {
    console.log('onViewerWidgetResized')
    const { viewer } = vcInstance
    const toolbarElement = viewer._toolbar as HTMLElement
    if (
      toolbarElement !== void 0 &&
      getComputedStyle(toolbarElement).visibility !== 'hidden' &&
      getComputedStyle(toolbarElement).display !== 'none'
    ) {
      layout.toolbarContainerRC = toolbarElement.getBoundingClientRect()
    } else {
      layout.toolbarContainerRC = undefined
    }

    const bottomContainer = viewer.bottomContainer as HTMLElement
    if (
      bottomContainer !== void 0 &&
      getComputedStyle(bottomContainer).visibility !== 'hidden' &&
      getComputedStyle(bottomContainer).display !== 'none'
    ) {
      layout.bottomContainerRC = bottomContainer.getBoundingClientRect()
    } else {
      layout.bottomContainerRC = undefined
    }

    const timelineContainer = viewer.timeline?.container as HTMLElement
    if (
      timelineContainer !== void 0 &&
      getComputedStyle(timelineContainer).visibility !== 'hidden' &&
      getComputedStyle(timelineContainer).display !== 'none'
    ) {
      layout.timelineContainerRC = timelineContainer.getBoundingClientRect()
    } else {
      layout.timelineContainerRC = undefined
    }

    const animationContainer = viewer.animation?.container as HTMLElement
    if (
      animationContainer !== void 0 &&
      getComputedStyle(animationContainer).visibility !== 'hidden' &&
      getComputedStyle(animationContainer).display !== 'none'
    ) {
      layout.animationContainerRC = animationContainer.getBoundingClientRect()
    } else {
      layout.animationContainerRC = undefined
    }

    viewer.resize()
    const listener = getInstanceListener(vcInstance, 'viewerWidgetResized')
    listener && emit('viewerWidgetResized', e)
  }

  /**
   * 添加影像图层事件回调方法，在此维护影像图层相对顺序。
   * @param layer 添加的图层。
   */
  const onImageryLayerAdded = (layer: CesiumNative.ImageryLayer) => {
    const viewer = vcInstance.viewer as CesiumNative.Viewer
    const { autoSortImageryLayers } = props

    if (viewer.baseLayerPicker) {
      viewer.imageryLayers.raiseToTop(layer)
    }
    const { defined } = Cesium
    if (autoSortImageryLayers) {
      layer.sortOrder = defined(layer.sortOrder) ? layer.sortOrder : 9999
      viewer.imageryLayers._layers.sort((a: CesiumNative.ImageryLayer, b: CesiumNative.ImageryLayer) => a.sortOrder - b.sortOrder)
      viewer.imageryLayers._update()
    }
  }
  /**
   * 本地日期和时间格式化函数。
   * @param date
   * @param viewModel
   * @param ignoredate
   */
  const localeDateTimeFormatter = function(
    date: CesiumNative.JulianDate,
    viewModel?: CesiumNative.AnimationViewModel,
    ignoredate?: boolean
  ): string {
    const { JulianDate } = Cesium
    if (props.UTCOffset) {
      date = JulianDate.addMinutes(date, props.UTCOffset, new JulianDate())
    }
    const jsDate = JulianDate.toDate(date)
    const timeString: string = jsDate
      .toLocaleString(t('name'), {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      })
      .replaceAll(',', '')
    const dateString: string = jsDate
      .toLocaleString(t('name'), {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
      .replaceAll(',', '')

    if (!ignoredate && (viewModel || jsDate.getHours() + jsDate.getMinutes() === 0)) {
      return dateString
    }

    return ignoredate ? `${timeString} ${props.TZCode}` : `${dateString} ${timeString} ${props.TZCode}`
  }

  /**
   * 本地时间格式化函数。
   * @param time
   * @param viewModel
   */
  const localeTimeFormatter = function(time: CesiumNative.JulianDate, viewModel: CesiumNative.AnimationViewModel): string {
    return localeDateTimeFormatter(time, viewModel, true)
  }

  const onTimelineScrubfunction = function(e) {
    const clock = e.clock
    clock.currentTime = e.timeJulian
    clock.shouldAnimate = false
  }

  const enableVRUI = function(viewer, enabled) {
    const geocoder = viewer._geocoder
    const homeButton = viewer._homeButton
    const sceneModePicker = viewer._sceneModePicker
    const projectionPicker = viewer._projectionPicker
    const baseLayerPicker = viewer._baseLayerPicker
    const animation = viewer._animation
    const timeline = viewer._timeline
    const fullscreenButton = viewer._fullscreenButton
    const infoBox = viewer._infoBox
    const selectionIndicator = viewer._selectionIndicator
    const visibility = enabled ? 'hidden' : 'visible'
    const { defined } = Cesium
    if (defined(geocoder)) {
      geocoder.container.style.visibility = visibility
    }
    if (defined(homeButton)) {
      homeButton.container.style.visibility = visibility
    }
    if (defined(sceneModePicker)) {
      sceneModePicker.container.style.visibility = visibility
    }
    if (defined(projectionPicker)) {
      projectionPicker.container.style.visibility = visibility
    }
    if (defined(baseLayerPicker)) {
      baseLayerPicker.container.style.visibility = visibility
    }
    if (defined(animation)) {
      animation.container.style.visibility = visibility
    }
    if (defined(timeline)) {
      timeline.container.style.visibility = visibility
    }
    if (defined(fullscreenButton) && fullscreenButton.viewModel.isFullscreenEnabled) {
      fullscreenButton.container.style.visibility = visibility
    }
    if (defined(infoBox)) {
      infoBox.container.style.visibility = visibility
    }
    if (defined(selectionIndicator)) {
      selectionIndicator.container.style.visibility = visibility
    }
    if (viewer._container) {
      const right = enabled || !defined(fullscreenButton) ? 0 : fullscreenButton.container.clientWidth
      viewer._vrButton.container.style.right = right + 'px'
      viewer.forceResize()
    }
  }

  const resizeToolbar = function(parent, child) {
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
    const arr = []
    Array.prototype.slice.call(parent.children).forEach(element => {
      arr.push(element)
    })
    arr.sort(function(a, b) {
      return a.customIndex - b.customIndex
    })
    for (let i = 0; i < arr.length; i++) {
      parent.appendChild(arr[i])
    }
  }

  const getServices = function() {
    return mergeDescriptors(
      {},
      {
        get layout() {
          return layout
        },
        get vm() {
          return vcInstance
        },
        get Cesium() {
          return vcInstance.Cesium
        },
        get viewer(): CesiumNative.Viewer {
          return vcInstance.viewer
        },
        get dataSources(): CesiumNative.DataSourceCollection {
          return vcInstance.viewer?.dataSources
        },
        get entities() {
          return vcInstance.viewer?.entities
        },
        get imageryLayers() {
          return vcInstance.viewer?.imageryLayers
        },
        get primitives() {
          return vcInstance.viewer?.scene.primitives
        },
        get groundPrimitives() {
          return vcInstance.viewer?.scene.groundPrimitives
        },
        get postProcessStages() {
          return vcInstance.viewer?.postProcessStages
        }
      }
    )
  }

  Object.defineProperties(vcInstance, {
    cesiumObject: {
      enumerable: true,
      get: () => vcInstance.viewer
    }
  })

  // lifecycle
  onMounted(async () => {
    try {
      console.log('viewer - onMounted')
      await $vc.viewerUnloadingPromise
      resolve(load())
    } catch (e) {
      reject(e)
    }
  })

  onUnmounted(() => {
    console.log('viewer - onUnmounted')
    unload().then(() => {
      vcMitt.all.clear()
    })
  })

  return {
    isReady,
    load,
    unload,
    reload,
    getServices,
    viewerRef,
    createPromise
  }
}
