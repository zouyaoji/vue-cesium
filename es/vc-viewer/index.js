import { ref, reactive, watch, onMounted, onUnmounted, nextTick, defineComponent, getCurrentInstance, provide, h, createCommentVNode } from 'vue';
import mitt from 'mitt';
import { t } from '../locale';
import { mergeDescriptors } from '../utils/merge-descriptors';
import { isEmptyObj, removeEmpty, dirname, camelCase } from '../utils/util';
import { getInstanceListener, $ } from '../utils/private/vm';
import { useEvents } from '../composables';
import { setViewerCamera } from '../utils/cesium-helpers';
import { vcKey } from '../utils/config';
import { viewerScreenSpaceEvents, pickEvents } from '../composables/use-events';
import { VcSkeleton } from '../ui';
import { hSlot } from '../utils/private/render';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function useViewer (props, ctx, vcInstance) {
    console.log('viewer creating');
    let resolve, reject;
    const createPromise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });
    const viewerRef = ref(null);
    const isReady = ref(false);
    const $vc = vcInstance.appContext.config.globalProperties.$VueCesium;
    const vcMitt = mitt();
    const { emit } = ctx;
    vcInstance.mounted = false;
    vcInstance.vcMitt = vcMitt;
    vcInstance.cesiumClass = 'Viewer';
    vcInstance.children = [];
    const eventsState = useEvents(props, vcInstance);
    const layout = reactive({
        toolbarContainerRC: undefined,
        timelineContainerRC: undefined,
        animationContainerRC: undefined,
        bottomContainerRC: undefined
    });
    watch(() => props.selectionIndicator, val => {
        const { viewer, viewerElement } = vcInstance;
        const { defined, SelectionIndicator } = Cesium;
        let selectionIndicatorContainer;
        if (defined(viewer.selectionIndicator) && !viewer.selectionIndicator.isDestroyed() && !val) {
            selectionIndicatorContainer = viewer.selectionIndicator.container;
            viewerElement.removeChild(selectionIndicatorContainer);
            viewer.selectionIndicator.destroy();
            viewer._selectionIndicator = undefined;
        }
        else if (!defined(viewer.selectionIndicator) || viewer.selectionIndicator.isDestroyed()) {
            selectionIndicatorContainer = document.createElement('div');
            selectionIndicatorContainer.className = 'cesium-viewer-selectionIndicatorContainer';
            viewerElement.appendChild(selectionIndicatorContainer);
            const selectionIndicator = new SelectionIndicator(selectionIndicatorContainer, viewer.scene);
            viewer._selectionIndicator = selectionIndicator;
        }
        viewer.viewerWidgetResized.raiseEvent({
            type: 'selectionIndicator',
            status: val ? 'added' : 'removed',
            target: selectionIndicatorContainer
        });
    });
    watch(() => props.infoBox, val => {
        const { viewer, viewerElement } = vcInstance;
        const { defined, InfoBox } = Cesium;
        const events = ['cameraClicked', 'closeClicked'];
        let infoBoxContainer;
        if (defined(viewer.infoBox) && !viewer.infoBox.isDestroyed() && !val) {
            const infoBoxViewModel = viewer.infoBox.viewModel;
            infoBoxViewModel && eventsState.bindEvents(infoBoxViewModel, events, false);
            infoBoxContainer = viewer.infoBox.container;
            viewerElement.removeChild(infoBoxContainer);
            viewer.infoBox.destroy();
            viewer._infoBox = undefined;
        }
        else if (!defined(viewer.infoBox) || viewer.infoBox.isDestroyed()) {
            infoBoxContainer = document.createElement('div');
            infoBoxContainer.className = 'cesium-viewer-infoBoxContainer';
            viewerElement.appendChild(infoBoxContainer);
            const infoBox = new InfoBox(infoBoxContainer);
            const infoBoxViewModel = infoBox.viewModel;
            viewer._eventHelper.add(infoBoxViewModel.cameraClicked, viewer._onInfoBoxCameraClicked, viewer);
            viewer._eventHelper.add(infoBoxViewModel.closeClicked, viewer._onInfoBoxClockClicked, viewer);
            infoBoxViewModel && eventsState.bindEvents(infoBoxViewModel, events, true);
            viewer._infoBox = infoBox;
        }
        viewer.forceResize();
        viewer.viewerWidgetResized.raiseEvent({
            type: 'infoBox',
            status: val ? 'added' : 'removed',
            target: infoBoxContainer
        });
    });
    watch(() => props.geocoder, val => {
        const { viewer } = vcInstance;
        const toolbar = viewer._toolbar;
        const { defined, Geocoder } = Cesium;
        let geocoderContainer;
        if (defined(viewer.geocoder) && !viewer.geocoder.isDestroyed() && !val) {
            geocoderContainer = viewer.geocoder.container;
            toolbar.removeChild(geocoderContainer);
            viewer.geocoder.destroy();
            viewer._geocoder = undefined;
        }
        else if (!defined(viewer.geocoder) || viewer.geocoder.isDestroyed()) {
            geocoderContainer = document.createElement('div');
            geocoderContainer.className = 'cesium-viewer-geocoderContainer';
            toolbar.appendChild(geocoderContainer);
            const geocoder = new Geocoder({
                container: geocoderContainer,
                geocoderServices: defined(props.geocoder) && typeof props.geocoder !== 'boolean'
                    ? Array.isArray(props.geocoder)
                        ? props.geocoder
                        : [props.geocoder]
                    : undefined,
                scene: viewer.scene
            });
            viewer._eventHelper.add(geocoder.viewModel.search.beforeExecute, viewer._clearObjects, viewer);
            viewer._geocoder = geocoder;
            resizeToolbar(toolbar);
        }
        viewer.viewerWidgetResized.raiseEvent({
            type: 'geocoder',
            status: val ? 'added' : 'removed',
            target: geocoderContainer
        });
    });
    watch(() => props.homeButton, val => {
        const { viewer } = vcInstance;
        const toolbar = viewer._toolbar;
        const { defined, HomeButton } = Cesium;
        if (defined(viewer.homeButton) && !viewer.homeButton.isDestroyed() && !val) {
            viewer.homeButton.destroy();
            viewer._homeButton = undefined;
        }
        else if (!defined(viewer.homeButton) || viewer.homeButton.isDestroyed()) {
            const homeButton = new HomeButton(toolbar, viewer.scene);
            if (defined(viewer.geocoder)) {
                viewer._eventHelper.add(homeButton.viewModel.command.afterExecute, function () {
                    const viewModel = viewer.geocoder.viewModel;
                    viewModel.searchText = '';
                    viewModel.isSearchInProgress && viewModel.search();
                });
            }
            viewer._eventHelper.add(homeButton.viewModel.command.beforeExecute, viewer._clearTrackedObject, viewer);
            viewer._homeButton = homeButton;
            resizeToolbar(toolbar);
        }
        viewer.viewerWidgetResized.raiseEvent({
            type: 'homeButton',
            status: val ? 'added' : 'removed',
            target: toolbar
        });
    });
    watch(() => props.sceneModePicker, val => {
        const { viewer } = vcInstance;
        const toolbar = viewer._toolbar;
        const { defined, DeveloperError, SceneModePicker } = Cesium;
        if (defined(viewer.sceneModePicker) && !viewer.sceneModePicker.isDestroyed() && !val) {
            viewer.sceneModePicker.destroy();
            viewer._sceneModePicker = undefined;
        }
        else if (!defined(viewer.sceneModePicker) || viewer.sceneModePicker.isDestroyed()) {
            if (props.sceneModePicker && props.scene3DOnly) {
                throw new DeveloperError('options.sceneModePicker is not available when options.scene3DOnly is set to true.');
            }
            if (!props.scene3DOnly && props.sceneModePicker) {
                const sceneModePicker = new SceneModePicker(toolbar, viewer.scene);
                viewer._sceneModePicker = sceneModePicker;
                resizeToolbar(toolbar);
            }
        }
        viewer.viewerWidgetResized.raiseEvent({
            type: 'sceneModePicker',
            status: val ? 'added' : 'removed',
            target: toolbar
        });
    });
    watch(() => props.projectionPicker, val => {
        const { viewer } = vcInstance;
        const toolbar = viewer._toolbar;
        const { defined, ProjectionPicker } = Cesium;
        if (defined(viewer.projectionPicker) && !viewer.projectionPicker.isDestroyed() && !val) {
            viewer.projectionPicker.destroy();
            viewer._projectionPicker = undefined;
        }
        else if (!defined(viewer.projectionPicker) || viewer.projectionPicker.isDestroyed()) {
            const projectionPicker = new ProjectionPicker(toolbar, viewer.scene);
            viewer._projectionPicker = projectionPicker;
            resizeToolbar(toolbar);
        }
        viewer.viewerWidgetResized.raiseEvent({
            type: 'projectionPicker',
            status: val ? 'added' : 'removed',
            target: toolbar
        });
    });
    watch(() => props.baseLayerPicker, val => {
        const { viewer } = vcInstance;
        const toolbar = viewer._toolbar;
        const { defined, buildModuleUrl, DeveloperError, defaultValue, createDefaultImageryProviderViewModels, createDefaultTerrainProviderViewModels, BaseLayerPicker } = Cesium;
        if (defined(viewer.baseLayerPicker) && !viewer.baseLayerPicker.isDestroyed() && !val) {
            viewer.baseLayerPicker.destroy();
            viewer._baseLayerPicker = undefined;
            viewer.imageryLayers.remove(viewer.imageryLayers.get(viewer.imageryLayers.length - 1));
            const url = buildModuleUrl('Assets/Textures/NaturalEarthII');
            const baseLayer = viewer.imageryLayers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
                url
            }));
            viewer.imageryLayers.lowerToBottom(baseLayer);
        }
        else if (!defined(viewer.baseLayerPicker) || viewer.baseLayerPicker.isDestroyed()) {
            const createBaseLayerPicker = !defined(viewer.globe) && (!defined(viewer.baseLayerPicker) || props.baseLayerPicker !== false);
            if (createBaseLayerPicker && defined(props.imageryProvider)) {
                throw new DeveloperError(`options.imageryProvider is not available when using the BaseLayerPicker widget.
        Either specify options.selectedImageryProviderViewModel instead or set options.baseLayerPicker to false.`);
            }
            if (!createBaseLayerPicker && defined(props.selectedImageryProviderViewModel)) {
                throw new DeveloperError(`options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget.
        Either specify options.imageryProvider instead or set options.baseLayerPicker to true.`);
            }
            if (createBaseLayerPicker && defined(props.terrainProvider)) {
                throw new DeveloperError(`options.terrainProvider is not available when using the BaseLayerPicker widget.
        Either specify options.selectedTerrainProviderViewModel instead or set options.baseLayerPicker to false.`);
            }
            if (!createBaseLayerPicker && defined(props.selectedTerrainProviderViewModel)) {
                throw new DeveloperError(`options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget.
        Either specify options.terrainProvider instead or set options.baseLayerPicker to true.`);
            }
            if (createBaseLayerPicker) {
                const imageryProviderViewModels = defaultValue(props.imageryProviderViewModels, createDefaultImageryProviderViewModels());
                const terrainProviderViewModels = defaultValue(props.terrainProviderViewModels, createDefaultTerrainProviderViewModels());
                const baseLayerPicker = new BaseLayerPicker(toolbar, {
                    globe: viewer.scene.globe,
                    imageryProviderViewModels: imageryProviderViewModels,
                    selectedImageryProviderViewModel: imageryProviderViewModels[0],
                    terrainProviderViewModels: terrainProviderViewModels,
                    selectedTerrainProviderViewModel: terrainProviderViewModels[0]
                });
                const elements = toolbar.getElementsByClassName('cesium-baseLayerPicker-dropDown');
                const baseLayerPickerDropDown = elements[0];
                viewer._baseLayerPickerDropDown = baseLayerPickerDropDown;
                viewer._baseLayerPicker = baseLayerPicker;
                viewer.imageryLayers.raiseToTop(viewer.imageryLayers.get(0));
                resizeToolbar(toolbar);
            }
        }
        viewer.viewerWidgetResized.raiseEvent({
            type: 'baseLayerPicker',
            status: val ? 'added' : 'removed',
            target: toolbar
        });
    });
    watch(() => props.navigationHelpButton, val => {
        const { viewer } = vcInstance;
        const toolbar = viewer._toolbar;
        const { defined, defaultValue, NavigationHelpButton } = Cesium;
        if (defined(viewer.navigationHelpButton) && !viewer.navigationHelpButton.isDestroyed() && !val) {
            viewer.navigationHelpButton.destroy();
            viewer._navigationHelpButton = undefined;
        }
        else if (!defined(viewer.navigationHelpButton) || viewer.navigationHelpButton.isDestroyed()) {
            let showNavHelp = true;
            try {
                if (defined(window.localStorage)) {
                    const hasSeenNavHelp = window.localStorage.getItem('cesium-hasSeenNavHelp');
                    if (defined(hasSeenNavHelp) && Boolean(hasSeenNavHelp)) {
                        showNavHelp = false;
                    }
                    else {
                        window.localStorage.setItem('cesium-hasSeenNavHelp', 'true');
                    }
                }
            }
            catch (e) { }
            const navigationHelpButton = new NavigationHelpButton({
                container: toolbar,
                instructionsInitiallyVisible: defaultValue(props.navigationInstructionsInitiallyVisible, showNavHelp)
            });
            viewer._navigationHelpButton = navigationHelpButton;
            resizeToolbar(toolbar);
        }
        viewer.viewerWidgetResized.raiseEvent({
            type: 'navigationHelpButton',
            status: val ? 'added' : 'removed',
            target: toolbar
        });
    });
    watch(() => props.animation, val => {
        const { viewer, viewerElement } = vcInstance;
        const { defined, Animation, AnimationViewModel } = Cesium;
        let animationContainer;
        if (defined(viewer.animation) && !viewer.animation.isDestroyed() && !val) {
            animationContainer = viewer.animation.container;
            viewerElement.removeChild(animationContainer);
            viewer.animation.destroy();
            viewer._animation = undefined;
        }
        else if (!defined(viewer.animation) || viewer.animation.isDestroyed()) {
            animationContainer = document.createElement('div');
            animationContainer.className = 'cesium-viewer-animationContainer';
            viewerElement.appendChild(animationContainer);
            const animation = new Animation(animationContainer, new AnimationViewModel(viewer.clockViewModel));
            animation.viewModel.dateFormatter = localeDateTimeFormatter;
            animation.viewModel.timeFormatter = localeTimeFormatter;
            viewer._animation = animation;
        }
        viewer.forceResize();
        viewer.viewerWidgetResized.raiseEvent({
            type: 'animation',
            status: val ? 'added' : 'removed',
            target: animationContainer
        });
    });
    watch(() => props.timeline, val => {
        const { viewer, viewerElement } = vcInstance;
        const { defined, Timeline } = Cesium;
        let timelineContainer;
        if (defined(viewer.timeline) && !viewer.timeline.isDestroyed() && !val) {
            timelineContainer = viewer.timeline.container;
            viewerElement.removeChild(timelineContainer);
            viewer.timeline.destroy();
            viewer._timeline = undefined;
        }
        else if (!defined(viewer.timeline) || viewer.timeline.isDestroyed()) {
            timelineContainer = document.createElement('div');
            timelineContainer.className = 'cesium-viewer-timelineContainer';
            viewerElement.appendChild(timelineContainer);
            const timeline = new Timeline(timelineContainer, viewer.clock);
            timeline.makeLabel = time => {
                return localeDateTimeFormatter(time);
            };
            timeline.addEventListener('settime', onTimelineScrubfunction, false);
            timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime);
            viewer._timeline = timeline;
        }
        viewer.forceResize();
        viewer.viewerWidgetResized.raiseEvent({
            type: 'timeline',
            status: val ? 'added' : 'removed',
            target: timelineContainer
        });
    });
    watch(() => props.fullscreenButton, val => {
        const { viewer, viewerElement } = vcInstance;
        const { defined, FullscreenButton } = Cesium;
        let fullscreenContainer;
        if (defined(viewer.fullscreenButton) && !viewer.fullscreenButton.isDestroyed() && !val) {
            fullscreenContainer = viewer.fullscreenButton.container;
            viewerElement.removeChild(fullscreenContainer);
            viewer.fullscreenButton.destroy();
            viewer._fullscreenButton = undefined;
        }
        else if (!defined(viewer.fullscreenButton) || viewer.fullscreenButton.isDestroyed()) {
            fullscreenContainer = document.createElement('div');
            fullscreenContainer.className = 'cesium-viewer-fullscreenContainer';
            viewerElement.appendChild(fullscreenContainer);
            const fullscreenButton = new FullscreenButton(fullscreenContainer, viewerElement);
            viewer._fullscreenButton = fullscreenButton;
        }
        viewer.forceResize();
        viewer.viewerWidgetResized.raiseEvent({
            type: 'fullscreenButton',
            status: val ? 'added' : 'removed',
            target: fullscreenContainer
        });
    });
    watch(() => props.fullscreenElement, val => {
        const { viewer } = vcInstance;
        const { defined } = Cesium;
        if (!defined(viewer.fullscreenButton)) {
            return;
        }
        if (defined(val)) {
            viewer.fullscreenButton.viewModel.fullscreenElement = val;
        }
    });
    watch(() => props.vrButton, val => {
        const { viewer, viewerElement } = vcInstance;
        const { defined, VRButton } = Cesium;
        let vrContainer;
        if (defined(viewer.vrButton) && !viewer.vrButton.isDestroyed() && !val) {
            vrContainer = viewer.vrButton.container;
            viewerElement.removeChild(vrContainer);
            viewer.vrButton.destroy();
            viewer._vrButton = undefined;
        }
        else if (!defined(viewer.vrButton) || viewer.vrButton.isDestroyed()) {
            vrContainer = document.createElement('div');
            vrContainer.className = 'cesium-viewer-vrContainer';
            viewerElement.appendChild(vrContainer);
            const vrButton = new VRButton(vrContainer, viewer.scene, viewerElement);
            const viewModelCommand = vrButton.viewModel.command;
            vrButton.viewModel._command = function (VRButtonViewModel) {
                viewModelCommand();
                enableVRUI(viewer, VRButtonViewModel.isVRMode);
            };
            viewer._vrButton = vrButton;
        }
        viewer.forceResize();
        viewer.viewerWidgetResized.raiseEvent({
            type: 'fullscreenButton',
            status: val ? 'added' : 'removed',
            target: vrContainer
        });
    });
    watch(() => props.useDefaultRenderLoop, val => {
        vcInstance.viewer.useDefaultRenderLoop = val;
    });
    watch(() => props.sceneMode, val => {
        const { SceneMode } = Cesium;
        if (SceneMode.COLUMBUS_VIEW === val || SceneMode.MORPHING === val || SceneMode.SCENE2D === val || SceneMode.SCENE3D === val) {
            vcInstance.viewer.scene.mode = val;
        }
    });
    watch(() => props.shouldAnimate, val => {
        vcInstance.viewer.clock.shouldAnimate = val;
    });
    watch(() => props.terrainExaggeration, val => {
        vcInstance.viewer._terrainExaggeration = val;
    });
    watch(() => props.shadows, val => {
        vcInstance.viewer.scene.shadowMap.enabled = val;
    });
    watch(() => props.terrainProvider, val => {
        vcInstance.viewer.terrainProvider = val;
    });
    watch(() => props.camera, val => {
        setViewerCamera(vcInstance.viewer, val);
    }, { deep: true });
    watch(() => props.imageryProvider, (val, oldVal) => {
        const { viewer } = vcInstance;
        const { defined } = Cesium;
        if (defined(val)) {
            for (let i = 0; i < viewer.imageryLayers.length; i++) {
                viewer.imageryLayers[i].imageryProvider === oldVal && viewer.imageryLayers.remove(viewer.imageryLayers[i]);
            }
            viewer.imageryLayers.addImageryProvider(val);
        }
    });
    watch(() => props.showCredit, val => {
        const { viewer } = vcInstance;
        viewer.cesiumWidget.creditContainer.style.display = val ? 'inline' : 'none';
        viewer.viewerWidgetResized.raiseEvent({
            type: 'credit',
            status: val ? 'added' : 'removed',
            target: viewer.cesiumWidget.creditContainer
        });
    });
    watch(() => props.debugShowFramesPerSecond, val => {
        const { viewer } = vcInstance;
        viewer.scene.debugShowFramesPerSecond = val;
    });
    const beforeLoad = function () {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('beforeLoad - viewer');
            const listener = getInstanceListener(vcInstance, 'beforeLoad');
            listener && emit('beforeLoad', vcInstance);
            $vc.scriptPromise = $vc.scriptPromise || getCesiumScript();
            yield $vc.scriptPromise;
        });
    };
    const load = function () {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('loading-viewer');
            if (vcInstance.mounted) {
                return false;
            }
            yield beforeLoad();
            const { Ion, buildModuleUrl, TileMapServiceImageryProvider, Viewer, defined, Math: CesiumMath, Event } = Cesium;
            const accessToken = props.accessToken ? props.accessToken : $vc.accessToken;
            Ion.defaultAccessToken = accessToken;
            const { animation, baseLayerPicker, fullscreenButton, vrButton, geocoder, homeButton, infoBox, sceneModePicker, selectionIndicator, timeline, navigationHelpButton, navigationInstructionsInitiallyVisible, scene3DOnly, shouldAnimate, clockViewModel, selectedImageryProviderViewModel, imageryProviderViewModels, selectedTerrainProviderViewModel, terrainProviderViewModels, imageryProvider, terrainProvider, skyBox, skyAtmosphere, fullscreenElement, useDefaultRenderLoop, targetFrameRate, showRenderLoopErrors, useBrowserRecommendedResolution, automaticallyTrackDataSourceClocks, contextOptions, sceneMode, mapProjection, globe, orderIndependentTranslucency, creditContainer, creditViewport, dataSources, terrainExaggeration, shadows, terrainShadows, mapMode2D, projectionPicker, requestRenderMode, maximumRenderTimeChange, camera, navigation } = props;
            const url = buildModuleUrl('Assets/Textures/NaturalEarthII');
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
            };
            removeEmpty(options);
            let viewer;
            if (!global.XE) {
                viewer = new Viewer($(viewerRef), options);
            }
            else {
                vcInstance.earth = new global.XE.Earth($(viewerRef), options);
                viewer = vcInstance.earth.czm.viewer;
            }
            vcInstance.Cesium = Cesium;
            vcInstance.viewer = viewer;
            vcInstance.viewerElement = viewer._element;
            vcInstance.mounted = true;
            defined(camera) && setViewerCamera(viewer, camera);
            const listener = getInstanceListener(vcInstance, 'update:camera');
            listener &&
                viewer.camera.changed.addEventListener(() => {
                    const cartographic = viewer.camera.positionCartographic;
                    let cameraNew;
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
                        };
                    }
                    else {
                        cameraNew = {
                            position: {
                                x: viewer.camera.position.x,
                                y: viewer.camera.position.y,
                                z: viewer.camera.position.z
                            },
                            heading: viewer.camera.heading || 2 * Math.PI,
                            pitch: viewer.camera.pitch || -Math.PI / 2,
                            roll: viewer.camera.roll || 0
                        };
                    }
                    emit('update:camera', cameraNew);
                });
            if (defined(viewer.animation)) {
                viewer.animation.viewModel.dateFormatter = localeDateTimeFormatter;
                viewer.animation.viewModel.timeFormatter = localeTimeFormatter;
            }
            if (defined(viewer.timeline)) {
                viewer.timeline.makeLabel = time => {
                    return localeDateTimeFormatter(time);
                };
                viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime);
            }
            !props.showCredit && (viewer.cesiumWidget.creditContainer.style.display = 'none');
            props.debugShowFramesPerSecond && (viewer.scene.debugShowFramesPerSecond = true);
            viewer.viewerWidgetResized = viewer.viewerWidgetResized || new Event();
            viewer.viewerWidgetResized.addEventListener(onViewerWidgetResized);
            viewer.imageryLayers.layerAdded.addEventListener(onImageryLayerAdded);
            eventsState.registerEvents(true);
            const readyObj = global.XE
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
                };
            const listenerReady = getInstanceListener(vcInstance, 'ready');
            listenerReady && emit('ready', readyObj);
            vcMitt === null || vcMitt === void 0 ? void 0 : vcMitt.emit('ready', readyObj);
            nextTick(() => {
                onViewerWidgetResized({
                    type: 'viewer',
                    status: 'added',
                    target: viewer.container
                });
                isReady.value = true;
            });
            console.log('loaded-viewer');
            return readyObj;
        });
    };
    const unload = function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (!vcInstance.mounted) {
                return false;
            }
            console.log('viewer---unloading');
            let unloadingResolve;
            $vc.viewerUnloadingPromise = new Promise((resolve, reject) => {
                unloadingResolve = resolve;
            });
            for (let i = 0; i < vcInstance.children.length; i++) {
                const vcChildCmp = vcInstance.children[i].proxy;
                yield vcChildCmp.unload();
            }
            const { viewer, earth } = vcInstance;
            if (global.Cesium) {
                viewer.imageryLayers.layerAdded.removeEventListener(onImageryLayerAdded);
                eventsState.registerEvents(false);
            }
            $vc.pickScreenSpaceEventHandler && $vc.pickScreenSpaceEventHandler.destroy();
            $vc.viewerScreenSpaceEventHandler && $vc.viewerScreenSpaceEventHandler.destroy();
            global.XE ? earth && earth.destroy() : viewer && viewer.destroy();
            $vc.pickScreenSpaceEventHandler = undefined;
            $vc.viewerScreenSpaceEventHandler = undefined;
            vcInstance.viewer = undefined;
            vcInstance.mounted = false;
            const { removeCesiumScript } = props;
            if (removeCesiumScript && global.Cesium) {
                const scripts = document.getElementsByTagName('script');
                const removeScripts = [];
                for (const script of scripts) {
                    script.src.indexOf('/Cesium.js') > -1 && removeScripts.push(script);
                    script.src.indexOf('/Workers/zlib.min.js') > -1 && removeScripts.push(script);
                    if (global.XE) {
                        script.src.indexOf('/rxjs.umd.min.js') > -1 && removeScripts.push(script);
                        script.src.indexOf('/XbsjCesium.js') > -1 && removeScripts.push(script);
                        script.src.indexOf('/viewerCesiumNavigationMixin.js') > -1 && removeScripts.push(script);
                        script.src.indexOf('/XbsjEarth.js') > -1 && removeScripts.push(script);
                    }
                }
                removeScripts.forEach(script => {
                    script.parentNode.removeChild(script);
                });
                const links = document.getElementsByTagName('link');
                for (const link of links) {
                    if (link.href.indexOf('Widgets/widgets.css') > -1) {
                        document.getElementsByTagName('head')[0].removeChild(link);
                    }
                }
                global.Cesium && (global.Cesium = undefined);
                global.XbsjCesium && (global.XbsjCesium = undefined);
                global.XbsjEarth && (global.XbsjEarth = undefined);
                global.XE && (global.XE = undefined);
                $vc.scriptPromise = undefined;
            }
            const listener = getInstanceListener(vcInstance, 'destroyed');
            listener && emit('destroyed', vcInstance);
            console.log('viewer---unloaded');
            unloadingResolve(true);
            $vc.viewerUnloadingPromise = undefined;
            nextTick(() => {
                viewer.resize();
            });
            isReady.value = false;
            return true;
        });
    };
    const reload = function () {
        return unload().then(() => {
            return load();
        });
    };
    const getCesiumScript = function () {
        console.log('getCesiumScript');
        if (!global.Cesium) {
            const cesiumPath = props.cesiumPath ? props.cesiumPath : $vc.cesiumPath;
            const dirName = dirname(cesiumPath);
            if (cesiumPath.indexOf('/XbsjEarth.js') === -1) {
                const $link = document.createElement('link');
                $link.rel = 'stylesheet';
                document.head.appendChild($link);
                $link.href = `${dirName}/Widgets/widgets.css`;
            }
            const $script = document.createElement('script');
            document.body.appendChild($script);
            $script.src = cesiumPath;
            return new Promise((resolve, reject) => {
                $script.onload = () => {
                    if (global.Cesium) {
                        resolve(global.Cesium);
                    }
                    else if (global.XE) {
                        global.XE.ready().then(() => {
                            resolve(global.Cesium);
                        });
                        const listener = getInstanceListener(vcInstance, 'cesiumReady');
                        listener && emit('cesiumReady', global.Cesium);
                    }
                    else {
                        reject(new Error('VueCesium ERROR: ' + 'Error loading CesiumJS!'));
                    }
                };
            });
        }
        else {
            return Promise.resolve(global.Cesium);
        }
    };
    const onViewerWidgetResized = (e) => {
        var _a, _b;
        console.log('onViewerWidgetResized');
        const { viewer } = vcInstance;
        const toolbarElement = viewer._toolbar;
        if (toolbarElement !== void 0 &&
            getComputedStyle(toolbarElement).visibility !== 'hidden' &&
            getComputedStyle(toolbarElement).display !== 'none') {
            layout.toolbarContainerRC = toolbarElement.getBoundingClientRect();
        }
        else {
            layout.toolbarContainerRC = undefined;
        }
        const bottomContainer = viewer.bottomContainer;
        if (bottomContainer !== void 0 &&
            getComputedStyle(bottomContainer).visibility !== 'hidden' &&
            getComputedStyle(bottomContainer).display !== 'none') {
            layout.bottomContainerRC = bottomContainer.getBoundingClientRect();
        }
        else {
            layout.bottomContainerRC = undefined;
        }
        const timelineContainer = (_a = viewer.timeline) === null || _a === void 0 ? void 0 : _a.container;
        if (timelineContainer !== void 0 &&
            getComputedStyle(timelineContainer).visibility !== 'hidden' &&
            getComputedStyle(timelineContainer).display !== 'none') {
            layout.timelineContainerRC = timelineContainer.getBoundingClientRect();
        }
        else {
            layout.timelineContainerRC = undefined;
        }
        const animationContainer = (_b = viewer.animation) === null || _b === void 0 ? void 0 : _b.container;
        if (animationContainer !== void 0 &&
            getComputedStyle(animationContainer).visibility !== 'hidden' &&
            getComputedStyle(animationContainer).display !== 'none') {
            layout.animationContainerRC = animationContainer.getBoundingClientRect();
        }
        else {
            layout.animationContainerRC = undefined;
        }
        viewer.resize();
        const listener = getInstanceListener(vcInstance, 'viewerWidgetResized');
        listener && emit('viewerWidgetResized', e);
    };
    const onImageryLayerAdded = (layer) => {
        const viewer = vcInstance.viewer;
        const { autoSortImageryLayers } = props;
        if (viewer.baseLayerPicker) {
            viewer.imageryLayers.raiseToTop(layer);
        }
        const { defined } = Cesium;
        if (autoSortImageryLayers) {
            layer.sortOrder = defined(layer.sortOrder) ? layer.sortOrder : 9999;
            viewer.imageryLayers._layers.sort((a, b) => a.sortOrder - b.sortOrder);
            viewer.imageryLayers._update();
        }
    };
    const localeDateTimeFormatter = function (date, viewModel, ignoredate) {
        const { JulianDate } = Cesium;
        if (props.UTCOffset) {
            date = JulianDate.addMinutes(date, props.UTCOffset, new JulianDate());
        }
        const jsDate = JulianDate.toDate(date);
        const timeString = jsDate
            .toLocaleString(t('name'), {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        })
            .replaceAll(',', '');
        const dateString = jsDate
            .toLocaleString(t('name'), {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
            .replaceAll(',', '');
        if (!ignoredate && (viewModel || jsDate.getHours() + jsDate.getMinutes() === 0)) {
            return dateString;
        }
        return ignoredate ? `${timeString} ${props.TZCode}` : `${dateString} ${timeString} ${props.TZCode}`;
    };
    const localeTimeFormatter = function (time, viewModel) {
        return localeDateTimeFormatter(time, viewModel, true);
    };
    const onTimelineScrubfunction = function (e) {
        const clock = e.clock;
        clock.currentTime = e.timeJulian;
        clock.shouldAnimate = false;
    };
    const enableVRUI = function (viewer, enabled) {
        const geocoder = viewer._geocoder;
        const homeButton = viewer._homeButton;
        const sceneModePicker = viewer._sceneModePicker;
        const projectionPicker = viewer._projectionPicker;
        const baseLayerPicker = viewer._baseLayerPicker;
        const animation = viewer._animation;
        const timeline = viewer._timeline;
        const fullscreenButton = viewer._fullscreenButton;
        const infoBox = viewer._infoBox;
        const selectionIndicator = viewer._selectionIndicator;
        const visibility = enabled ? 'hidden' : 'visible';
        const { defined } = Cesium;
        if (defined(geocoder)) {
            geocoder.container.style.visibility = visibility;
        }
        if (defined(homeButton)) {
            homeButton.container.style.visibility = visibility;
        }
        if (defined(sceneModePicker)) {
            sceneModePicker.container.style.visibility = visibility;
        }
        if (defined(projectionPicker)) {
            projectionPicker.container.style.visibility = visibility;
        }
        if (defined(baseLayerPicker)) {
            baseLayerPicker.container.style.visibility = visibility;
        }
        if (defined(animation)) {
            animation.container.style.visibility = visibility;
        }
        if (defined(timeline)) {
            timeline.container.style.visibility = visibility;
        }
        if (defined(fullscreenButton) && fullscreenButton.viewModel.isFullscreenEnabled) {
            fullscreenButton.container.style.visibility = visibility;
        }
        if (defined(infoBox)) {
            infoBox.container.style.visibility = visibility;
        }
        if (defined(selectionIndicator)) {
            selectionIndicator.container.style.visibility = visibility;
        }
        if (viewer._container) {
            const right = enabled || !defined(fullscreenButton) ? 0 : fullscreenButton.container.clientWidth;
            viewer._vrButton.container.style.right = right + 'px';
            viewer.forceResize();
        }
    };
    const resizeToolbar = function (parent, child) {
        Array.prototype.slice.call(parent.children).forEach(element => {
            switch (element.className) {
                case 'cesium-viewer-geocoderContainer':
                    element.customIndex = 1;
                    break;
                case 'cesium-button cesium-toolbar-button cesium-home-button':
                    element.customIndex = 2;
                    break;
                case 'cesium-sceneModePicker-wrapper cesium-toolbar-button':
                    element.customIndex = 3;
                    break;
                case 'cesium-projectionPicker-wrapper cesium-toolbar-button':
                    element.customIndex = 4;
                    break;
                case 'cesium-button cesium-toolbar-button':
                case 'cesium-baseLayerPicker-dropDown':
                    element.customIndex = 5;
                    break;
                case 'cesium-navigationHelpButton-wrapper':
                    element.customIndex = 6;
                    break;
            }
        });
        const arr = [];
        Array.prototype.slice.call(parent.children).forEach(element => {
            arr.push(element);
        });
        arr.sort(function (a, b) {
            return a.customIndex - b.customIndex;
        });
        for (let i = 0; i < arr.length; i++) {
            parent.appendChild(arr[i]);
        }
    };
    const getServices = function () {
        return mergeDescriptors({}, {
            get layout() {
                return layout;
            },
            get vm() {
                return vcInstance;
            },
            get Cesium() {
                return vcInstance.Cesium;
            },
            get viewer() {
                return vcInstance.viewer;
            },
            get dataSources() {
                var _a;
                return (_a = vcInstance.viewer) === null || _a === void 0 ? void 0 : _a.dataSources;
            },
            get entities() {
                var _a;
                return (_a = vcInstance.viewer) === null || _a === void 0 ? void 0 : _a.entities;
            },
            get imageryLayers() {
                var _a;
                return (_a = vcInstance.viewer) === null || _a === void 0 ? void 0 : _a.imageryLayers;
            },
            get primitives() {
                var _a;
                return (_a = vcInstance.viewer) === null || _a === void 0 ? void 0 : _a.scene.primitives;
            },
            get groundPrimitives() {
                var _a;
                return (_a = vcInstance.viewer) === null || _a === void 0 ? void 0 : _a.scene.groundPrimitives;
            },
            get postProcessStages() {
                var _a;
                return (_a = vcInstance.viewer) === null || _a === void 0 ? void 0 : _a.postProcessStages;
            }
        });
    };
    Object.defineProperties(vcInstance, {
        cesiumObject: {
            enumerable: true,
            get: () => vcInstance.viewer
        }
    });
    onMounted(() => __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('viewer - onMounted');
            yield $vc.viewerUnloadingPromise;
            resolve(load());
        }
        catch (e) {
            reject(e);
        }
    }));
    onUnmounted(() => {
        console.log('viewer - onUnmounted');
        unload().then(() => {
            vcMitt.all.clear();
        });
    });
    return {
        isReady,
        load,
        unload,
        reload,
        getServices,
        viewerRef,
        createPromise
    };
}

var defaultProps = {
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
        type: [Boolean, Array],
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
    imageryProviderViewModels: Array,
    selectedTerrainProviderViewModel: Object,
    terrainProviderViewModels: Array,
    imageryProvider: Object,
    terrainProvider: Object,
    skyBox: Object,
    skyAtmosphere: Object,
    fullscreenElement: {
        type: [String, Element]
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
    useBrowserRecommendedResolution: {
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
    debugShowFramesPerSecond: {
        type: Boolean,
        default: false
    },
    showCredit: {
        type: Boolean,
        default: true
    },
    accessToken: String,
    camera: {
        type: Object,
        default: () => ({
            position: {
                lng: 105,
                lat: 29.999999999999993,
                height: 19059568.497290563
            },
            heading: 360,
            pitch: -90,
            roll: 0
        })
    },
    navigation: {
        type: Boolean,
        default: false
    },
    TZCode: {
        type: String,
        default: new Date().getTimezoneOffset() === 0 ? 'UTC' : 'UTC' + '+' + -(new Date().getTimezoneOffset() / 60)
    },
    UTCOffset: {
        type: Number,
        default: -new Date().getTimezoneOffset()
    },
    removeCesiumScript: {
        type: Boolean,
        default: true
    },
    autoSortImageryLayers: {
        type: Boolean,
        default: true
    },
    enableEvent: {
        type: Boolean,
        default: true
    },
    skeleton: {
        type: [Boolean, Object],
        default: {
            dark: false,
            animation: 'wave',
            square: true,
            bordered: true,
            color: undefined
        }
    }
};

const viewerEvents = [
    {
        name: 'imageryLayers',
        events: ['layerAdded', 'layerMoved', 'layerRemoved', 'layerShownOrHidden']
    },
    {
        name: 'dataSources',
        events: ['dataSourceAdded', 'dataSourceMoved', 'dataSourceRemoved']
    },
    {
        name: 'entities',
        events: ['collectionChanged']
    },
    {
        name: 'scene',
        events: ['morphComplete', 'morphStart', 'postRender', 'postUpdate', 'preRender', 'preUpdate', 'renderError', 'terrainProviderChanged']
    },
    {
        name: 'camera',
        events: ['changed', 'moveEnd', 'moveStart']
    },
    {
        name: 'clock',
        events: ['onStop', 'onTick']
    },
    {
        name: 'terrainProvider',
        events: ['errorEvent']
    },
    {
        name: ['infoBox', 'viewModel'],
        events: ['cameraClicked', 'closeClicked']
    },
    {
        name: ['scene', 'globe'],
        events: ['imageryLayersUpdatedEvent', 'terrainProviderChanged', 'tileLoadProgressEvent']
    }
];
const viewerScreenSpaceEventsCamel = viewerScreenSpaceEvents.map(v => camelCase(v));
const cmpEvents = [
    'beforeLoad',
    'cesiumReady',
    'ready',
    'destroyed',
    'update:camera',
    'viewerWidgetResized',
    ...viewerScreenSpaceEvents,
    ...viewerScreenSpaceEventsCamel,
    ...pickEvents
];
const emits = viewerEvents.reduce((pre, cur) => {
    return pre.concat(cur.events);
}, cmpEvents);

var Viewer = defineComponent({
    name: 'VcViewer',
    props: defaultProps,
    emits: emits,
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumEvents = ['selectedEntityChanged', 'trackedEntityChanged'];
        instance.cesiumMembersEvents = viewerEvents;
        const viewerStates = useViewer(props, ctx, instance);
        provide(vcKey, viewerStates.getServices());
        Object.assign(instance.proxy, {
            createPromise: viewerStates.createPromise,
            load: viewerStates.load,
            unload: viewerStates.unload,
            reload: viewerStates.reload,
            getCesiumObject: () => instance.cesiumObject
        });
        return () => {
            const children = [];
            if (props.skeleton && !viewerStates.isReady.value) {
                children.push(h(VcSkeleton, Object.assign(Object.assign({}, props.skeleton), { style: { background: props.skeleton.color, width: '100%', height: '100%' } })));
            }
            else {
                children.push(createCommentVNode('v-if'));
            }
            children.push(createCommentVNode('vc-viewer'), h('div', {
                ref: viewerStates.viewerRef,
                class: 'VcViewer',
                id: 'cesiumContainer',
                style: { width: '100%', height: '100%' }
            }, hSlot(ctx.slots.default)));
            return children;
        };
    }
});

Viewer.install = (app) => {
    app.component(Viewer.name, Viewer);
};

export default Viewer;
