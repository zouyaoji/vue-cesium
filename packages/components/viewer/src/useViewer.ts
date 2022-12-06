import { watch, ref, onMounted, onUnmounted, nextTick, reactive, VNode } from 'vue'
import mitt, { Emitter } from 'mitt'
import { useLocale } from '@vue-cesium/composables'
import defaultProps from './defaultProps'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { dirname, isEmptyObj, hasOwn } from '@vue-cesium/utils/util'
import { getInstanceListener, $ } from '@vue-cesium/utils/private/vm'
import type {
  VcComponentInternalInstance,
  VcCamera,
  VcReadyObject,
  VcComponentPublicInstance,
  AnyObject,
  VcMittEvents,
  VcTerrainProvider,
  VcDatasource,
  ViewerWidgetResizedEvent,
  VcContextOptions,
  VcViewerProvider,
  Mars3dConfig
} from '@vue-cesium/utils/types'
import { setViewerCamera } from '@vue-cesium/utils/cesium-helpers'
import useLog from '@vue-cesium/composables/private/use-log'
import { useEvents } from '@vue-cesium/composables'
import { getMars3dConfig as getDefaultMars3dConfig } from './loadUtil'
import { useGlobalConfig } from '@vue-cesium/composables/use-global-config'
import { VcSkeletonProps } from '../../ui/skeleton'
import useVcExtension from '@vue-cesium/composables/private/use-vc-extension'

export const viewerProps = defaultProps

export default function (props: VcViewerProps, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  let createResolve, reject
  const creatingPromise = new Promise<VcReadyObject>((_resolve, _reject) => {
    createResolve = _resolve
    reject = _reject
  })

  const viewerRef = ref<HTMLElement>(null)
  const isReady = ref(false)
  const vcMitt: Emitter<VcMittEvents> = mitt()
  const { emit } = ctx

  const globalConfig = useGlobalConfig()

  const logger = useLog(vcInstance)

  vcInstance.mounted = false
  vcInstance.vcMitt = vcMitt
  vcInstance.cesiumClass = 'Viewer'
  vcInstance.children = []
  const eventsState = useEvents(props, vcInstance, logger)

  const layout = reactive({
    toolbarContainerRC: undefined,
    timelineContainerRC: undefined,
    animationContainerRC: undefined,
    bottomContainerRC: undefined
  })

  let loadLibs: Array<string> = []

  logger.debug('viewer creating')

  const { t } = useLocale()

  const { invokeExtensions, revokeExtensions } = useVcExtension()

  // watch
  watch(
    () => props.selectionIndicator,
    val => {
      const { viewer, viewerElement } = vcInstance
      const { defined, SelectionIndicator } = Cesium
      let selectionIndicatorContainer
      if (defined(viewer.selectionIndicator) && !viewer.selectionIndicator.isDestroyed() && !val) {
        selectionIndicatorContainer = viewer.selectionIndicator.container
        viewerElement?.removeChild(selectionIndicatorContainer)
        viewer.selectionIndicator.destroy()
        viewer._selectionIndicator = undefined
      } else if (!defined(viewer.selectionIndicator) || viewer.selectionIndicator.isDestroyed()) {
        selectionIndicatorContainer = document.createElement('div')
        selectionIndicatorContainer.className = 'cesium-viewer-selectionIndicatorContainer'
        viewerElement?.appendChild(selectionIndicatorContainer)
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
        viewerElement?.removeChild(infoBoxContainer)
        viewer.infoBox.destroy()
        viewer._infoBox = undefined
      } else if (!defined(viewer.infoBox) || viewer.infoBox.isDestroyed()) {
        infoBoxContainer = document.createElement('div')
        infoBoxContainer.className = 'cesium-viewer-infoBoxContainer'
        viewerElement?.appendChild(infoBoxContainer)
        const infoBox = new InfoBox(infoBoxContainer)
        const infoBoxViewModel = infoBox.viewModel
        viewer._onInfoBoxCameraClicked && viewer._eventHelper?.add(infoBoxViewModel.cameraClicked, viewer._onInfoBoxCameraClicked, viewer)
        viewer._onInfoBoxClockClicked && viewer._eventHelper?.add(infoBoxViewModel.closeClicked, viewer._onInfoBoxClockClicked, viewer)
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
        toolbar?.removeChild(geocoderContainer)
        viewer.geocoder.destroy()
        viewer._geocoder = undefined
      } else if (!defined(viewer.geocoder) || viewer.geocoder.isDestroyed()) {
        geocoderContainer = document.createElement('div')
        geocoderContainer.className = 'cesium-viewer-geocoderContainer'
        toolbar?.appendChild(geocoderContainer)
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
        viewer._clearObjects && viewer._eventHelper?.add(geocoder.viewModel.search.beforeExecute, viewer._clearObjects, viewer)
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
        const homeButton = new HomeButton(toolbar!, viewer.scene)
        if (defined(viewer.geocoder)) {
          viewer._eventHelper?.add(homeButton.viewModel.command.afterExecute, function () {
            const viewModel = viewer.geocoder.viewModel
            viewModel.searchText = ''
            viewModel.isSearchInProgress && (viewModel as any).search()
          })
        }
        viewer._clearTrackedObject && viewer._eventHelper?.add(homeButton.viewModel.command.beforeExecute, viewer._clearTrackedObject, viewer)
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
          const sceneModePicker = new SceneModePicker(toolbar!, viewer.scene)
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
        const projectionPicker = new ProjectionPicker(toolbar!, viewer.scene)
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
        const createBaseLayerPicker =
          (!Cesium.defined(viewer.scene.globe) || props.globe !== false) &&
          (!Cesium.defined(viewer.baseLayerPicker) || props.baseLayerPicker !== false)

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
          const baseLayerPicker = new BaseLayerPicker(toolbar!, {
            globe: viewer.scene.globe,
            imageryProviderViewModels: imageryProviderViewModels,
            selectedImageryProviderViewModel: imageryProviderViewModels[0],
            terrainProviderViewModels: terrainProviderViewModels,
            selectedTerrainProviderViewModel: terrainProviderViewModels[0]
          })

          const elements = toolbar?.getElementsByClassName('cesium-baseLayerPicker-dropDown')

          const baseLayerPickerDropDown = elements?.[0]
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
        } catch (e) {
          //
        }
        const navigationHelpButton = new NavigationHelpButton({
          container: toolbar!,
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
        viewerElement?.removeChild(animationContainer)
        viewer.animation.destroy()
        viewer._animation = undefined
      } else if (!defined(viewer.animation) || viewer.animation.isDestroyed()) {
        animationContainer = document.createElement('div')
        animationContainer.className = 'cesium-viewer-animationContainer'
        viewerElement?.appendChild(animationContainer)
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
        viewerElement?.removeChild(timelineContainer)
        viewer.timeline.destroy()
        viewer._timeline = undefined
      } else if (!defined(viewer.timeline) || viewer.timeline.isDestroyed()) {
        timelineContainer = document.createElement('div')
        timelineContainer.className = 'cesium-viewer-timelineContainer'
        viewerElement?.appendChild(timelineContainer)
        const timeline = new Timeline(timelineContainer, viewer.clock)
        timeline.makeLabel = time => {
          return localeDateTimeFormatter(time)
        }
        timeline.addEventListener?.('settime', onTimelineScrubfunction, false)
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
        viewerElement?.removeChild(fullscreenContainer)
        viewer.fullscreenButton.destroy()
        viewer._fullscreenButton = undefined
      } else if (!defined(viewer.fullscreenButton) || viewer.fullscreenButton.isDestroyed()) {
        fullscreenContainer = document.createElement('div')
        fullscreenContainer.className = 'cesium-viewer-fullscreenContainer'
        viewerElement?.appendChild(fullscreenContainer)
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
        viewerElement?.removeChild(vrContainer)
        viewer.vrButton.destroy()
        viewer._vrButton = undefined
      } else if (!defined(viewer.vrButton) || viewer.vrButton.isDestroyed()) {
        vrContainer = document.createElement('div')
        vrContainer.className = 'cesium-viewer-vrContainer'
        viewerElement?.appendChild(vrContainer)
        const vrButton = new VRButton(vrContainer, viewer.scene, viewerElement)
        const viewModelCommand = vrButton.viewModel.command as any
        ;(vrButton.viewModel as any)._command = function (VRButtonViewModel) {
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
      val && (vcInstance.viewer.terrainProvider = val)
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
          viewer.imageryLayers.get(i).imageryProvider === oldVal && viewer.imageryLayers.remove(viewer.imageryLayers[i])
        }
        val && viewer.imageryLayers.addImageryProvider(val)
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
  const beforeLoad = async function (): Promise<void> {
    logger.debug('beforeLoad - viewer')
    const listener = getInstanceListener(vcInstance, 'beforeLoad')
    listener && emit('beforeLoad', vcInstance)
    globalConfig.value.__scriptPromise = globalConfig.value.__scriptPromise || getCesiumScript()
    await globalConfig.value.__scriptPromise
  }
  /**
   * 初始化 Viewer，成功返回 {Cesium, viewer, instance}， 失败返回false。
   * @returns VcReadyObject
   */
  const load = async function (): Promise<boolean | VcReadyObject> {
    logger.debug('loading-viewer')
    if (vcInstance.mounted) {
      return false
    }

    await beforeLoad()

    if (typeof Cesium === 'undefined') {
      return false
    }

    const { Ion, buildModuleUrl, TileMapServiceImageryProvider, Viewer, defined, Math: CesiumMath, Event } = Cesium
    const accessToken = props.accessToken ? props.accessToken : globalConfig.value.accessToken
    Ion.defaultAccessToken = accessToken

    const url = buildModuleUrl('Assets/Textures/NaturalEarthII')
    const options: AnyObject = {}
    props &&
      Object.keys(props).forEach(vueProp => {
        if (props[vueProp] === undefined || props[vueProp] === null) {
          return
        }
        options[vueProp] = props[vueProp]
      })

    options.imageryProvider = isEmptyObj(options.imageryProvider) ? new TileMapServiceImageryProvider({ url }) : options.imageryProvider
    options.fullscreenElement = isEmptyObj(options.fullscreenElement) ? $(viewerRef) : options.fullscreenElement

    // if (Cesium.VERSION >= '1.83') {
    //   delete options.terrainExaggeration
    // }

    let viewer: Cesium.Viewer

    if (props.viewerCreator) {
      viewer = props.viewerCreator(vcInstance, $(viewerRef), options)
    } else {
      if (globalThis.mars3d) {
        vcInstance.map = new mars3d.Map($(viewerRef).id, {
          scene: options,
          control: options
        })
        viewer = vcInstance.map?._viewer
      } else if (globalThis.DC) {
        vcInstance.dcViewer = new DC.Viewer($(viewerRef).id, options)
        viewer = vcInstance.dcViewer?.delegate
      } else if (globalThis.XE) {
        vcInstance.earth = new globalThis.XE.Earth($(viewerRef), options)
        viewer = vcInstance.earth?.czm.viewer
      } else {
        viewer = new Viewer($(viewerRef), options)
      }
    }

    // 扩展
    invokeExtensions(viewer)

    vcInstance.Cesium = Cesium
    vcInstance.viewer = viewer
    vcInstance.viewerElement = (viewer as any)._element
    vcInstance.mounted = true

    if (Cesium.VERSION >= '1.83') {
      viewer.scene.globe.terrainExaggeration = options.terrainExaggeration
    }

    // vue-cesium 扩展补充
    // vue-cesium extension
    defined(options.camera) && setViewerCamera(viewer, options.camera)

    const listener = getInstanceListener(vcInstance, 'update:camera')
    listener &&
      viewer.camera.changed.addEventListener(() => {
        const cartographic = viewer.camera.positionCartographic
        let cameraNew: VcCamera
        if (hasOwn(options.camera.position, 'lng')) {
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
      viewer.animation.viewModel.dateFormatter = localeDateTimeFormatter as Cesium.AnimationViewModel.DateFormatter
      viewer.animation.viewModel.timeFormatter = localeTimeFormatter as Cesium.AnimationViewModel.TimeFormatter
    }

    if (defined(viewer.timeline)) {
      viewer.timeline.makeLabel = time => {
        return localeDateTimeFormatter(time)
      }
      viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
    }

    if (process.env.NODE_ENV !== 'production') {
      if ((props as any).logo) {
        logger.warn("'logo' is deprecated. Use `showCredit` prop instead. ")
      }
    }

    !props.showCredit && ((viewer.cesiumWidget.creditContainer as HTMLElement).style.display = 'none')

    props.debugShowFramesPerSecond && (viewer.scene.debugShowFramesPerSecond = true)

    viewer.viewerWidgetResized = viewer.viewerWidgetResized || new Event()
    viewer.viewerWidgetResized.addEventListener(onViewerWidgetResized)
    viewer.imageryLayers.layerAdded.addEventListener(onImageryLayerAdded)
    eventsState.registerEvents(true)
    const readyObj: VcReadyObject = {
      Cesium,
      viewer,
      vm: vcInstance.proxy as VcViewerRef
    }
    if (globalThis.XE) {
      Object.assign(readyObj, {
        earth: vcInstance.earth
      })
    } else if (globalThis.mars3d) {
      Object.assign(readyObj, {
        map: vcInstance.map
      })
    } else if (globalThis.DC) {
      Object.assign(readyObj, {
        dcViewer: vcInstance.dcViewer
      })
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

    logger.debug('loaded-viewer')

    Object.assign(vcInstance.proxy, {
      cesiumObject: viewer
    })
    return readyObj
  }

  /**
   * Viewer 销毁方法。
   */
  const unload = async function () {
    if (!vcInstance.mounted) {
      return false
    }

    logger.debug('viewer---unloading')
    let unloadingResolve
    globalConfig.value.__viewerUnloadingPromise = new Promise((resolve, reject) => {
      unloadingResolve = resolve
    })

    // If the component has subcomponents, you need to remove the subcomponents first. 如果该组件带有子组件，需要先移除子组件。
    for (let i = 0; i < vcInstance.children.length; i++) {
      const vcChildCmp = vcInstance.children[i].proxy as VcComponentPublicInstance
      await vcChildCmp.unload()
    }

    vcInstance.children.length = 0

    const { viewer, earth, map, dcViewer } = vcInstance
    if (globalThis.Cesium) {
      viewer.imageryLayers.layerAdded.removeEventListener(onImageryLayerAdded)
      eventsState.registerEvents(false)
    }

    const { removeCesiumScript } = props

    viewer._vcPickScreenSpaceEventHandler && viewer._vcPickScreenSpaceEventHandler.destroy()
    viewer._vcViewerScreenSpaceEventHandler && viewer._vcViewerScreenSpaceEventHandler.destroy()
    viewer._vcPickScreenSpaceEventHandler = undefined
    viewer._vcViewerScreenSpaceEventHandler = undefined

    removeCesiumScript && revokeExtensions(viewer)

    delete vcInstance.appContext.config.globalProperties.$VueCesium[viewer.container.id]

    if (globalThis.XE) {
      earth && earth.destroy()
    } else if (globalThis.mars3d) {
      map && map.destroy()
    } else if (globalThis.DC) {
      dcViewer && dcViewer.destroy()
    } else {
      viewer && viewer.destroy()
    }

    vcInstance.viewer = undefined
    vcInstance.mounted = false
    if (removeCesiumScript && globalThis.Cesium) {
      const scripts = document.getElementsByTagName('script')
      const removeScripts: Array<HTMLScriptElement | HTMLLinkElement> = []
      for (const script of scripts) {
        script.src.indexOf('/Cesium.js') > -1 && removeScripts.push(script)
        script.src.indexOf('/Workers/zlib.min.js') > -1 && removeScripts.push(script)
        if (globalThis.XE) {
          script.src.indexOf('/rxjs.umd.min.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/XbsjCesium.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/viewerCesiumNavigationMixin.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/XbsjEarth.js') > -1 && removeScripts.push(script)
        }

        loadLibs.includes(script.src) && !removeScripts.includes(script) && removeScripts.push(script)
      }

      const links = document.getElementsByTagName('link')
      for (const link of links) {
        link.href.includes('Widgets/widgets.css') && !removeScripts.includes(link) && removeScripts.push(link)
        loadLibs.includes(link.href) && !removeScripts.includes(link) && removeScripts.push(link)
      }
      removeScripts.forEach(script => {
        script.parentNode && script.parentNode.removeChild(script)
      })
      globalThis.Cesium && (globalThis.Cesium = undefined!)
      globalThis.XbsjCesium && (globalThis.XbsjCesium = undefined)
      globalThis.XbsjEarth && (globalThis.XbsjEarth = undefined)
      globalThis.XE && (globalThis.XE = undefined)
      globalThis.mars3d && (globalThis.mars3d = undefined)
      globalThis.DC && (globalThis.DC = undefined)
      globalThis.DcCore && (globalThis.DcCore = undefined)
      globalConfig.value.__scriptPromise = undefined
      loadLibs = []
    }
    const listener = getInstanceListener(vcInstance, 'destroyed')
    listener && emit('destroyed', vcInstance)
    logger.debug('viewer---unloaded')
    unloadingResolve(true)
    globalConfig.value.__viewerUnloadingPromise = undefined
    isReady.value = false
    return true
  }

  const reload = function () {
    return unload().then(() => {
      return load()
    })
  }

  /**
   * 动态引入 CesiumJS
   */
  const getCesiumScript = async function (): Promise<typeof Cesium> {
    logger.debug('getCesiumScript')
    if (!globalThis.Cesium) {
      const cesiumPath = props.cesiumPath ? props.cesiumPath : globalConfig.value.cesiumPath
      const dirName = dirname(cesiumPath)
      const mars3dConfig = globalConfig.value.mars3dConfig || props.mars3dConfig
      if (mars3dConfig) {
        // 引入 mars3d
        const libsConfig = mars3dConfig.libs || getDefaultMars3dConfig()
        const include = mars3dConfig.include || 'mars3d'
        const arrInclude = include.trim().split(',')
        const keys = {}
        for (let i = 0, len = arrInclude.length; i < len; i++) {
          const key = arrInclude[i]
          if (keys[key]) {
            //规避重复引入lib
            continue
          }
          keys[key] = true
          loadLibs.push(...libsConfig[key])
        }
      } else if (cesiumPath.includes('/dc.base.min.js')) {
        loadLibs.push(cesiumPath)
        loadLibs.push(cesiumPath.replace('/dc.base.min.js', '/dc.core.min.js'))
        loadLibs.push(cesiumPath.replace('/dc.base.min.js', '/dc.core.min.js').replace('/dc.core.min.js', '/dc.core.min.css'))
      } else if (cesiumPath.includes('/XbsjEarth.js')) {
        loadLibs.push(cesiumPath)
      } else {
        loadLibs.push(cesiumPath)
        loadLibs.push(`${dirName}/Widgets/widgets.css`)
      }

      const secondaryLibs = loadLibs
      if (mars3dConfig) {
        // mars3d 必须要等 Cesium 先初始化
        const primaryLib = loadLibs.find(v => v.includes('Cesium.js'))
        await loadScript(primaryLib)
        secondaryLibs.splice(secondaryLibs.indexOf(primaryLib), 1)
      }

      const scriptLoadPromises: Array<Promise<unknown>> = []
      secondaryLibs.forEach(url => {
        const cssExpr = new RegExp('\\.css')
        if (cssExpr.test(url)) {
          scriptLoadPromises.push(loadLink(url))
        } else {
          scriptLoadPromises.push(loadScript(url))
        }
      })

      return Promise.all(scriptLoadPromises).then(() => {
        if (globalThis.Cesium) {
          const listener = getInstanceListener(vcInstance, 'cesiumReady')
          listener && emit('cesiumReady', globalThis.Cesium)
          return globalThis.Cesium
        } else if (globalThis.XE) {
          // 兼容 cesiumlab earthsdk
          return globalThis.XE.ready().then(() => {
            // resolve(globalThis.Cesium)
            const listener = getInstanceListener(vcInstance, 'cesiumReady')
            listener && emit('cesiumReady', globalThis.Cesium)
            return globalThis.Cesium
          })
        } else if (globalThis.DC) {
          // 兼容  dc-sdk
          globalThis.DC.use(globalThis.DcCore.default || globalThis.DcCore)
          globalThis.DC.baseUrl = `${dirName}/resources/`
          globalThis.DC.ready(() => {
            globalThis.Cesium = DC.Namespace.Cesium

            const listener = getInstanceListener(vcInstance, 'cesiumReady')
            listener && emit('cesiumReady', globalThis.DC)
            return globalThis.Cesium
          })
          return globalThis.Cesium
        } else {
          reject(new Error('VueCesium ERROR: ' + 'Error loading CesiumJS!'))
        }
      })
    } else {
      return Promise.resolve(globalThis.Cesium)
    }
  }

  const loadScript = src => {
    const $script = document.createElement('script')
    $script.async = true
    $script.src = src
    document.body.appendChild($script)
    return new Promise((resolve, reject) => {
      $script.onload = () => {
        resolve(true)
      }
    })
  }

  const loadLink = src => {
    const $link = document.createElement('link')
    $link.rel = 'stylesheet'
    $link.href = src
    document.head.appendChild($link)
    return new Promise((resolve, reject) => {
      $link.onload = () => {
        resolve(true)
      }
    })
  }

  const onViewerWidgetResized = e => {
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
  const onImageryLayerAdded = (layer: Cesium.ImageryLayer) => {
    const viewer = vcInstance.viewer as Cesium.Viewer
    const { autoSortImageryLayers } = props

    if (viewer.baseLayerPicker) {
      viewer.imageryLayers.raiseToTop(layer)
    }
    const { defined } = Cesium
    if (autoSortImageryLayers) {
      layer.sortOrder = defined(layer.sortOrder) ? layer.sortOrder : 9999
      viewer.imageryLayers._layers.sort((a: Cesium.ImageryLayer, b: Cesium.ImageryLayer) => a.sortOrder! - b.sortOrder!)
      viewer.imageryLayers._update()
    }
  }
  /**
   * 本地日期和时间格式化函数。
   * @param date
   * @param viewModel
   * @param ignoredate
   */
  const localeDateTimeFormatter = function (date: Cesium.JulianDate, viewModel?: Cesium.AnimationViewModel, ignoredate?: boolean): string {
    const { JulianDate } = Cesium
    let TZCode

    if (props.UTCOffset) {
      date = JulianDate.addMinutes(date, props.UTCOffset, new JulianDate())
      const offset = new Date().getTimezoneOffset() - props.UTCOffset
      TZCode = offset === 0 ? 'UTC' : 'UTC' + '+' + -(offset / 60)
    } else {
      TZCode = new Date().getTimezoneOffset() === 0 ? 'UTC' : 'UTC' + '+' + -(new Date().getTimezoneOffset() / 60)
    }
    const jsDate = JulianDate.toDate(date)
    const timeString: string = jsDate
      .toLocaleString(t('name'), {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      })
      .replace(/,/g, '')
    const dateString: string = jsDate
      .toLocaleString(t('name'), {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
      .replace(/,/g, '')

    if (!ignoredate && (viewModel || jsDate.getHours() + jsDate.getMinutes() === 0)) {
      return dateString
    }

    props.TZCode && (TZCode = props.TZCode)
    return ignoredate ? `${timeString} ${TZCode}` : `${dateString} ${timeString} ${TZCode}`
  }

  /**
   * 本地时间格式化函数。
   * @param time
   * @param viewModel
   */
  const localeTimeFormatter = function (time: Cesium.JulianDate, viewModel: Cesium.AnimationViewModel): string {
    return localeDateTimeFormatter(time, viewModel, true)
  }

  const onTimelineScrubfunction = function (e) {
    const clock = e.clock
    clock.currentTime = e.timeJulian
    clock.shouldAnimate = false
  }

  const enableVRUI = function (viewer, enabled) {
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

  const resizeToolbar = function (parent, child) {
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
    const arr: any[] = []
    Array.prototype.slice.call(parent.children).forEach(element => {
      arr.push(element)
    })
    arr.sort(function (a, b) {
      return a.customIndex - b.customIndex
    })
    for (let i = 0; i < arr.length; i++) {
      parent.appendChild(arr[i])
    }
  }

  const getServices = function (): VcViewerProvider {
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
        get viewer(): Cesium.Viewer {
          return vcInstance.viewer
        },
        get dataSources(): Cesium.DataSourceCollection {
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
        },
        get creatingPromise() {
          return creatingPromise
        },
        /**
         * for mars3d only
         */
        get mars3dMap() {
          return vcInstance.map
        },
        /**
         * for dc-sdk only
         */
        get dcViewer() {
          return vcInstance.dcViewer
        },
        /**
         * for earth-sdk only
         */
        get earth() {
          return vcInstance.earth
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
      logger.debug('viewer - onMounted')
      await globalConfig.value?.__viewerUnloadingPromise
      load()
        .then(e => {
          createResolve(e)
        })
        .catch(e => {
          emit('unready', e)
          reject(e)
        })
    } catch (e) {
      emit('unready', e)
      reject(e)
    }
  })

  onUnmounted(() => {
    logger.debug('viewer - onUnmounted')
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
    creatingPromise
  }
}

export interface VcViewerProps {
  /**
   * If set to false, the Animation widget will not be created.
   * Default value: false
   */
  animation?: boolean
  /**
   * If set to false, the BaseLayerPicker widget will not be created.
   * Default value: false
   */
  baseLayerPicker?: boolean
  /**
   * 	If set to false, the FullscreenButton widget will not be created.
   * Default value: false
   */
  fullscreenButton?: boolean
  /**
   * If set to true, the VRButton widget will be created.
   * Default value: false
   */
  vrButton?: boolean
  /**
   * If set to false, the Geocoder widget will not be created.
   * Default value: false
   */
  geocoder?: boolean | Array<Cesium.GeocoderService>
  /**
   * If set to false, the HomeButton widget will not be created.
   * Default value: false
   */
  homeButton?: boolean
  /**
   * If set to false, the InfoBox widget will not be created.
   * Default value: false
   */
  infoBox?: boolean
  /**
   * If set to false, the SceneModePicker widget will not be created.
   * Default value: false
   */
  sceneModePicker?: boolean
  /**
   * If set to false, the SelectionIndicator widget will not be created.
   * Default value: false
   */
  selectionIndicator?: boolean
  /**
   * If set to false, the Timeline widget will not be created.
   * Default value: false
   */
  timeline?: boolean
  /**
   * If set to false, the navigation help button will not be created.
   * Default value: false
   */
  navigationHelpButton?: boolean
  /**
   * True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.
   * Default value: false
   */
  navigationInstructionsInitiallyVisible?: boolean
  /**
   * When true, each geometry instance will only be rendered in 3D to save GPU memory.
   * Default value: false
   */
  scene3DOnly?: boolean
  /**
   * true if the clock should attempt to advance simulation time by default, false otherwise. This option takes precedence over setting clockViewModel.
   * Default value: false
   */
  shouldAnimate?: boolean
  /**
   * The clock view model to use to control current time.
   */
  clockViewModel?: Cesium.ClockViewModel
  /**
   * The view model for the current base imagery layer, if not supplied the first available base layer is used. This value is only valid if `baseLayerPicker` is set to true.
   */
  selectedImageryProviderViewModel?: Cesium.ProviderViewModel
  /**
   * The array of ProviderViewModels to be selectable from the BaseLayerPicker. This value is only valid if `baseLayerPicker` is set to true.
   */
  imageryProviderViewModels?: Array<Cesium.ProviderViewModel>
  /**
   * The view model for the current base terrain layer, if not supplied the first available base layer is used. This value is only valid if `baseLayerPicker` is set to true.
   */
  selectedTerrainProviderViewModel?: Cesium.ProviderViewModel
  /**
   * The array of ProviderViewModels to be selectable from the BaseLayerPicker. This value is only valid if `baseLayerPicker` is set to true.
   */
  terrainProviderViewModels?: Array<Cesium.ProviderViewModel>
  /**
   * The imagery provider to use. This value is only valid if `baseLayerPicker` is set to false.
   */
  imageryProvider?: Cesium.ImageryProvider
  /**
   * The terrain provider to use
   */
  terrainProvider?: Cesium.TerrainProvider
  /**
   * The skybox used to render the stars. When undefined, the default stars are used. If set to false, no skyBox, Sun, or Moon will be added.
   * Default value: undefined
   */
  skyBox?: Cesium.SkyBox | false
  /**
   * Blue sky, and the glow around the Earth's limb. Set to false to turn it off.
   */
  skyAtmosphere?: Cesium.SkyAtmosphere | false
  /**
   * The element or id to be placed into fullscreen mode when the full screen button is pressed.
   */
  fullscreenElement?: string | Element
  /**
   * True if this widget should control the render loop, false otherwise.
   * Default value: true
   */
  useDefaultRenderLoop?: boolean
  /**
   * The target frame rate when using the default render loop.
   */
  targetFrameRate?: number
  /**
   * If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.
   * Default value: true
   */
  showRenderLoopErrors?: boolean
  /**
   * If true, render at the browser's recommended resolution and ignore window.devicePixelRatio.
   * Default value: true
   */
  useBrowserRecommendedResolution?: boolean
  /**
   * If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently.
   * Default value: true
   */
  automaticallyTrackDataSourceClocks?: boolean
  /**
   * Context and WebGL creation properties corresponding to options passed to Scene.
   */
  contextOptions?: VcContextOptions
  /**
   * The initial scene mode.
   * Default value: 3
   */
  sceneMode?: Cesium.SceneMode
  /**
   * The map projection to use in 2D and Columbus View modes.
   */
  mapProjection?: Cesium.MapProjection
  /**
   * The globe to use in the scene. If set to false, no globe will be added.
   */
  globe?: Cesium.Globe | false
  /**
   * If true and the configuration supports it, use order independent translucency.
   * Default value: true
   */
  orderIndependentTranslucency?: boolean
  /**
   * The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.
   */
  creditContainer?: string | Element
  /**
   * The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.
   */
  creditViewport?: string | Element
  /**
   * The collection of data sources visualized by the widget. If this parameter is provided, the instance is assumed to be owned by the caller and will not be destroyed when the viewer is destroyed.
   */
  dataSources?: Cesium.DataSourceCollection
  /**
   * A scalar used to exaggerate the terrain. Defaults to 1.0 (no exaggeration). A value of 2.0 scales the terrain by 2x. A value of 0.0 makes the terrain completely flat. Note that terrain exaggeration will not modify any other primitive as they are positioned relative to the ellipsoid.
   * Default value: 1.0
   */
  terrainExaggeration?: number
  /**
   * Determines if shadows are cast by light sources.
   * Default value: false
   */
  shadows?: boolean
  /**
   * Determines if the terrain casts or receives shadows from light sources.
   * Default value: 3
   */
  terrainShadows?: Cesium.ShadowMode
  /**
   * Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction.
   * Default value: 1
   */
  mapMode2D?: Cesium.MapMode2D
  /**
   * If set to true, the ProjectionPicker widget will be created.
   * Default value: false
   */
  projectionPicker?: boolean
  /**
   * If true, rendering a frame will only occur when needed as determined by changes within the scene. Enabling reduces the CPU/GPU usage of your application and uses less battery on mobile, but requires using Scene#requestRender to render a new frame explicitly in this mode. This will be necessary in many cases after making changes to the scene in other parts of the API. See Improving Performance with Explicit Rendering.
   * Default value: false
   */
  requestRenderMode?: boolean
  /**
   * If requestRenderMode is true, this value defines the maximum change in simulation time allowed before a render is requested. See Improving Performance with Explicit Rendering.
   * Default value: 0.0
   */
  maximumRenderTimeChange?: number
  /**
   * Specify the web service address of the CesiumJS library used to initialize the `vc-viewer` component.
   */
  cesiumPath?: string
  /**
   * Specify the default [Cesium ion](https://cesium.com/ion/) access token.
   */
  accessToken?: string
  /**
   * Specify the viewer camera
   */
  camera?: VcCamera
  /**
   * Specify whether to display the default Logo and loading data copyright information.
   * Default value: true
   */
  showCredit?: boolean
  /**
   * Specify whether to display frames per second and time between frames.This property is for debugging only; it is not for production use.
   * Default value: false
   */
  debugShowFramesPerSecond?: boolean
  /**
   * Specify whether to display navigation control. for supermap webgl iclient only.
   * Default value: false
   */
  navigation?: boolean
  /**
   * The time zone code used for timeline date formatting. By default, it is formatted as local time. If you want to display it as UTC universal time, set `UTCoffset` to `new Date().getTimezoneOffset()`
   */
  TZCode?: string
  /**
   * The time difference (minutes) between local time and UTC time.
   */
  UTCOffset?: number
  /**
   * Specify whether to remove the CesiumJS script tag when `vc-viewer` is destroyed.
   * Default value: true
   */
  removeCesiumScript?: boolean
  /**
   * Specify whether to automatically sort imageLayers according to the layer's `sortOrder` property when adding imagelayer.
   * Default value: true
   */
  autoSortImageryLayers?: boolean
  /**
   * Specifiy whether to trigger mouse events.
   * Default value: true
   */
  enableMouseEvent?: boolean
  /**
   * Specify whether to show the skeleton background during `vc-viewer` initialization.
   * Default value: true
   */
  skeleton?: boolean | VcSkeletonProps
  /**
   * x:y:z, where x is the amount of time to wait (in milliseconds), y is the touch event sensitivity (in pixels) and z is the mouse event sensitivity (in pixels).
   * Default value: 1000
   */
  touchHoldArg?: string
  /**
   * for mars3d only.
   */
  mars3dConfig?: Mars3dConfig
  /**
   * Specifies the container id of the viewer.
   */
  containerId?: string
  /**
   * Specify the initialization method of the viewer when loading non-standard third-party Cesium libraries.
   */
  viewerCreator?: VcViewerCreatorFunction
  /**
   * Triggers before the VcViewer is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcViewer is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcViewer is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when CesiumJS is successfully loaded.
   */
  onCesiumReady?: (payload: typeof Cesium) => void
  /**
   * Triggers when a component changes on vc-viewer.
   */
  onViewerWidgetResized?: (payload: ViewerWidgetResizedEvent) => void
  /**
   * Triggers when the selected entity changes.
   */
  onSelectedEntityChanged?: (entity: Cesium.Entity) => void
  /**
   * Triggers when the tracked entity changes.
   */
  onTrackedEntityChanged?: (entity: Cesium.Entity) => void
  /**
   * Triggers when a layer is added to the collection. Event handlers are passed the layer that was added and the index at which it was added.
   */
  onLayerAdded?: (imageryLayer: Cesium.ImageryLayer, index: number) => void
  /**
   * Triggers when a layer changes position in the collection. Event handlers are passed the layer that was moved, its new index after the move, and its old index prior to the move.
   */
  onLayerMoved?: (imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number) => void
  /**
   * Triggers when a layer is removed from the collection. Event handlers are passed the layer that was removed and the index from which it was removed.
   */
  onLayerRemoved?: (imageryLayer: Cesium.ImageryLayer, index: number) => void
  /**
   * Triggers when a layer is shown or hidden by setting the ImageryLayer#show property. Event handlers are passed a reference to this layer, the index of the layer in the collection, and a flag that is true if the layer is now shown or false if it is now hidden.
   */
  onLayerShownOrHidden?: (imageryLayer: Cesium.ImageryLayer, index: number, show: boolean) => void
  /**
   * Triggers when a data source is added to the collection. Event handlers are passed the data source that was added.
   */
  onDataSourceAdded?: (collection: Cesium.DataSourceCollection, dataSource: VcDatasource) => void
  /**
   * Triggers when a data source changes position in the collection. Event handlers are passed the data source that was moved, its new index after the move, and its old index prior to the move.
   */
  onDataSourceMoved?: (dataSource: VcDatasource, newIndex: number, oldIndex: number) => void
  /**
   * Triggers when a data source is removed from the collection. Event handlers are passed the data source that was removed.
   */
  onDataSourceRemoved?: (collection: Cesium.DataSourceCollection, dataSource: VcDatasource) => void
  /**
   * Triggers when when entities are added or removed from the collection. The generated event is a EntityCollection.collectionChangedEventCallback.
   */
  onCollectionChanged?: (
    collection: Cesium.EntityCollection,
    addedArray: Array<Cesium.Entity>,
    removedArray: Array<Cesium.Entity>,
    changedArray: Array<Cesium.Entity>
  ) => void
  /**
   * Triggers at the completion of a scene transition.
   */
  onMorphComplete?: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => void
  /**
   * Triggers at the beginning of a scene transition.
   */
  onMorphStart?: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => void
  /**
   * Triggers immediately after the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.
   */
  onPostRender?: (scene: Cesium.Scene, time: Cesium.JulianDate) => void
  /**
   * Triggers after the scene is updated and immediately before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.
   */
  onPreRender?: (scene: Cesium.Scene, time: Cesium.JulianDate) => void
  /**
   * Triggers immediately after the scene is updated and before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.
   */
  onPostUpdate?: (scene: Cesium.Scene, time: Cesium.JulianDate) => void
  /**
   * Triggers before the scene is updated or rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.
   */
  onPreUpdate?: (scene: Cesium.Scene, time: Cesium.JulianDate) => void
  /**
   * Triggers when an error is thrown inside the render function. The Scene instance and the thrown error are the only two parameters passed to the event handler. By default, errors are not rethrown after this event is raised, but that can be changed by setting the rethrowRenderErrors property.
   */
  onRenderError?: (scene: Cesium.Scene, error: any) => void
  /**
   * Triggers when the terrain provider is changed.
   */
  onTerrainProviderChanged?: (provider: VcTerrainProvider) => void
  /**
   * Triggers when the camera has changed by percentageChanged.
   */
  onChanged?: (percent: number) => void
  /**
   * Triggers when the camera has stopped moving.
   */
  onMoveEnd?: () => void
  /**
   * Triggers when the camera starts to move.
   */
  onMoveStart?: () => void
  /**
   * Triggers when Clock#stopTime is reached.
   */
  onOnStop?: (clock: Cesium.Clock) => void
  /**
   * Triggers when Clock#tick is called.
   */
  onOnTick?: (clock: Cesium.Clock) => void
  /**
   * Triggers when the terrain provider encounters an asynchronous error. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.
   */
  onErrorEvent?: (tileProviderError: any) => void
  /**
   * Triggers when the user clicks the camera icon.
   */
  onCameraClicked?: (viewModel: Cesium.InfoBoxViewModel) => void
  /**
   * Triggers when the user closes the info box.
   */
  onCloseClicked?: (viewModel: Cesium.InfoBoxViewModel) => void
  /**
   * Triggers when the mouse left button clicked.
   */
  onLeftClick?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggered when the mouse left button double clicked.
   */
  onLeftDoubleClick?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggered when the mouse left button down.
   */
  onLeftDown?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggered when the mouse left button up.
   */
  onLeftUp?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggers when the mouse middle button clicked.
   */
  onMiddleClick?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggers when the mouse middle button down.
   */
  onMiddleDown?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggers when the mouse middle button up.
   */
  onMiddleUp?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggers when the mouse move.
   */
  onMouseMove?: (mouseClickEvent: { startPosition: Cesium.Cartesian2; endPosition: Cesium.Cartesian2 }) => void
  /**
   * Triggers when the start of a two-finger on a touch surface.
   */
  onPinchStart?: (touch2StartEvent: { position1: Cesium.Cartesian2; position2: Cesium.Cartesian2 }) => void
  /**
   * Triggers when a change of a two-finger on a touch surface.
   */
  onPinchMove?: (touchPinchMovementEvent: {
    distance: {
      startPosition: Cesium.Cartesian2
      endPosition: Cesium.Cartesian2
    }
    angleAndHeight: {
      startPosition: Cesium.Cartesian2
      endPosition: Cesium.Cartesian2
    }
  }) => void
  /**
   * Triggers when end of a two-finger on a touch surface.
   */
  onPinchEnd?: () => void
  /**
   * Triggers when the mouse right click.
   */
  onRightClick?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggers when the mouse right button down.
   */
  onRightDown?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggers when the mouse right button up.
   */
  onRightUp?: (mouseClickEvent: { position: Cesium.Cartesian2 }) => void
  /**
   * Triggers when the mouse wheel.
   */
  onWheel?: (delta: number) => void
  /**
   * Triggers when an imagery layer is added, shown, hidden, moved, or removed.
   */
  onImageryLayersUpdatedEvent?: () => void
  /**
   * 	Triggers when the length of the tile load queue has changed since the last render frame. When the load queue is empty, all terrain and imagery for the current view have been loaded. The event passes the new length of the tile load queue.
   */
  onTileLoadProgressEvent?: (length: number) => void
  onTouchEnd?: (evt: any) => void
}

export interface VcViewerSlots {
  /**
   * Default slot content of the component
   */
  default: () => VNode[]
}

export type VcViewerRef = VcComponentPublicInstance<VcViewerProps>

export type VcViewerCreatorFunction<T = Cesium.Viewer> = (instance: VcComponentInternalInstance, el: HTMLElement, options: VcViewerProps) => T
