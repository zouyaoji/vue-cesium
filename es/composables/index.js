import { inject, onUnmounted } from 'vue';
import mitt from 'mitt';
import { isArray, isFunction, getObjClassName, isEmptyObj, kebabCase } from '../utils/util';
import { getInstanceListener, getVcParentInstance } from '../utils/private/vm';
import * as cesiumProps from '../utils/cesium-props';
import { vcKey } from '../utils/config';
import { t } from '../locale';

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

function useEvents (props, vcInstance) {
    const $vc = vcInstance.appContext.config.globalProperties.$VueCesium;
    const bindEvents = (cesiumObject, cesiumEvents, register = true) => {
        const ev = cesiumEvents || vcInstance.cesiumEvents || [];
        ev &&
            ev.forEach(eventName => {
                if (cesiumObject[eventName]) {
                    const listener = getInstanceListener(vcInstance, eventName);
                    const methodName = register ? 'addEventListener' : 'removeEventListener';
                    listener && cesiumObject[eventName][methodName](listener);
                }
                else if (process.env.VUECESIUM_DEBUG) ;
            });
    };
    const registerEvents = register => {
        var _a;
        console.log(`registerEvents: ${vcInstance.cesiumClass}-${register}`);
        const { viewer, cesiumObject } = vcInstance;
        const { ScreenSpaceEventHandler, ScreenSpaceEventType } = Cesium;
        if (register && props.enableEvent) {
            if (!$vc.pickScreenSpaceEventHandler) {
                $vc.pickScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas);
                $vc.viewerScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas);
                viewerScreenSpaceEvents.forEach(type => {
                    const listener = getInstanceListener(vcInstance, type);
                    listener && $vc.viewerScreenSpaceEventHandler.setInputAction(listener, ScreenSpaceEventType[type]);
                    $vc.pickScreenSpaceEventHandler.setInputAction(pickedAction.bind({ eventName: type, viewer }), ScreenSpaceEventType[type]);
                });
            }
            bindEvents(cesiumObject, vcInstance.cesiumEvents || [], register);
            (_a = vcInstance.cesiumMembersEvents) === null || _a === void 0 ? void 0 : _a.forEach(eventName => {
                const cesiumIntanceMember = isArray(eventName.name) && eventName.name.length > 0
                    ? cesiumObject[eventName.name[0]][eventName.name[1]]
                    : cesiumObject[eventName.name];
                cesiumIntanceMember && bindEvents(cesiumIntanceMember, eventName.events, register);
            });
            pickEvents.forEach(eventName => {
                const listener = getInstanceListener(vcInstance, eventName);
                listener && (cesiumObject[eventName] = listener);
            });
        }
        else {
            pickEvents.forEach(eventName => {
                const listener = getInstanceListener(vcInstance, eventName);
                listener && delete cesiumObject[eventName];
            });
        }
    };
    function pickedAction(movement) {
        const { viewer, eventName } = this;
        const position = movement.position || movement.endPosition;
        if (!position) {
            return;
        }
        const pickedFeatureAndCallbackNames = [];
        let callbackName;
        if (eventName.indexOf('LEFT_DOUBLE_CLICK') !== -1) {
            callbackName = 'dblclick';
        }
        else if (eventName.indexOf('CLICK') !== -1) {
            callbackName = 'click';
        }
        else if (eventName.indexOf('DOWN') !== -1) {
            callbackName = 'mousedown';
        }
        else if (eventName.indexOf('UP') !== -1) {
            callbackName = 'mouseup';
        }
        else if (eventName.indexOf('MOUSE_MOVE') !== -1) {
            callbackName = 'mousemove';
        }
        let callbackNameOut;
        if (callbackName === 'mousemove') {
            callbackNameOut = 'mouseout';
        }
        else if (callbackName === 'click') {
            callbackNameOut = 'clickout';
        }
        const pickedFeature = viewer.scene.pick(position);
        if (!Cesium.defined(pickedFeature)) {
            if (this.pickedFeature) {
                pickedFeatureAndCallbackNames.push({
                    callbackName: callbackNameOut,
                    pickedFeature: this.pickedFeature,
                });
            }
            this.pickedFeature = undefined;
        }
        else {
            if (this.pickedFeature && this.pickedFeature !== pickedFeature) {
                pickedFeatureAndCallbackNames.push({
                    callbackName: callbackNameOut,
                    pickedFeature: this.pickedFeature,
                });
            }
            if (callbackName === 'mousemove' && (!this.pickedFeature || this.pickedFeature !== pickedFeature)) {
                pickedFeatureAndCallbackNames.push({
                    callbackName: 'mouseover',
                    pickedFeature,
                });
            }
            pickedFeatureAndCallbackNames.push({
                callbackName,
                pickedFeature,
            });
        }
        if (pickedFeatureAndCallbackNames.length === 0) {
            return;
        }
        let intersection;
        const scene = viewer.scene;
        if (scene.mode === Cesium.SceneMode.SCENE3D) {
            const ray = scene.camera.getPickRay(position);
            intersection = scene.globe.pick(ray, scene);
        }
        else {
            intersection = scene.camera.pickEllipsoid(position, Cesium.Ellipsoid.WGS84);
        }
        let button = -1;
        if (eventName.indexOf('LEFT') !== -1) {
            button = 0;
        }
        else if (eventName.indexOf('MIDDLE') !== -1) {
            button = 1;
        }
        else if (eventName.indexOf('RIGHT') !== -1) {
            button = 2;
        }
        const eventSourceList = [];
        pickedFeatureAndCallbackNames.forEach(item => {
            const callbackName = item.callbackName;
            const pickedFeature = item.pickedFeature;
            if (pickedFeature.id) {
                if (isArray(pickedFeature.id) && pickedFeature.id[0] instanceof Cesium.Entity) {
                    eventSourceList.push({
                        callbackName,
                        cesiumObject: pickedFeature.id[0].entityCollection.owner,
                        pickedFeature,
                    });
                }
                else if (pickedFeature.id instanceof Cesium.Entity) {
                    eventSourceList.push({
                        callbackName,
                        cesiumObject: pickedFeature.id,
                        pickedFeature,
                    });
                    eventSourceList.push({
                        callbackName,
                        cesiumObject: pickedFeature.id.entityCollection.owner,
                        pickedFeature,
                    });
                }
            }
            if (pickedFeature.primitive) {
                eventSourceList.push({
                    callbackName,
                    cesiumObject: pickedFeature.primitive,
                    pickedFeature,
                });
            }
            const getParentCollection = e => {
                eventSourceList.push({
                    callbackName,
                    cesiumObject: e,
                    pickedFeature,
                });
                if (e._vcParent) {
                    getParentCollection(e._vcParent);
                }
            };
            if (pickedFeature.collection) {
                eventSourceList.push({
                    callbackName,
                    cesiumObject: pickedFeature.collection,
                    pickedFeature,
                });
                if (pickedFeature.collection._vcParent) {
                    getParentCollection(pickedFeature.collection._vcParent);
                }
            }
        });
        eventSourceList.forEach(event => {
            event.cesiumObject[event.callbackName] &&
                event.cesiumObject[event.callbackName]({
                    type: `on${event.callbackName}`,
                    windowPosition: position,
                    surfacePosition: intersection,
                    pickedFeature: event.pickedFeature,
                    button,
                    cesiumObject: event.cesiumObject,
                });
        });
        this.pickedFeature = pickedFeature;
    }
    return {
        bindEvents,
        registerEvents,
    };
}
const viewerScreenSpaceEvents = [
    'LEFT_CLICK',
    'LEFT_DOUBLE_CLICK',
    'LEFT_DOWN',
    'LEFT_UP',
    'MIDDLE_CLICK',
    'MIDDLE_DOWN',
    'MIDDLE_UP',
    'MOUSE_MOVE',
    'PINCH_END',
    'PINCH_MOVE',
    'PINCH_START',
    'RIGHT_CLICK',
    'RIGHT_DOWN',
    'RIGHT_UP',
    'WHEEL',
];
const pickEvents = ['mousedown', 'mouseup', 'click', 'clickout', 'dblclick', 'mousemove', 'mouseover', 'mouseout'];

function useCommon (props, { emit }, vcInstance) {
    let unwatchFns = [];
    vcInstance.mounted = false;
    const vcMitt = mitt();
    vcInstance.vcMitt = vcMitt;
    const $services = inject(vcKey);
    if ($services === void 0) {
        console.error(`${vcInstance.cesiumClass} ${t('vc.loadError')}`);
        return;
    }
    const parentVcInstance = getVcParentInstance(vcInstance);
    const eventsState = useEvents(props, vcInstance);
    vcInstance.children = [];
    const entityGraphics = [
        'billboard',
        'box',
        'corridor',
        'cylinder',
        'ellipse',
        'ellipsoid',
        'label',
        'model',
        'tileset',
        'path',
        'plane',
        'point',
        'polygon',
        'polyline',
        'polylineVolume',
        'rectangle',
        'wall'
    ];
    const beforeLoad = () => __awaiter(this, void 0, void 0, function* () {
        emit('beforeLoad', vcInstance);
        if (parentVcInstance.nowaiting) {
            return true;
        }
        else {
            yield parentVcInstance.proxy.createPromise;
        }
    });
    const load = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (vcInstance.mounted) {
            return false;
        }
        console.log(`${vcInstance.cesiumClass}---load`);
        yield beforeLoad();
        const { Cesium, viewer } = $services;
        vcInstance.viewer = viewer;
        vcInstance.Cesium = Cesium;
        if (!parentVcInstance.cesiumObject) {
            console.log('load parent');
            return yield ((_a = vcInstance.proxy) === null || _a === void 0 ? void 0 : _a.load());
        }
        setPropsWatcher(true);
        return createCesiumObject().then((cesiumObject) => __awaiter(this, void 0, void 0, function* () {
            vcInstance.cesiumObject = cesiumObject;
            return mount().then(() => {
                vcInstance.mounted = true;
                parentVcInstance.children.push(vcInstance);
                const readyObj = { Cesium, viewer, cesiumObject, vm: vcInstance.proxy };
                emit('ready', readyObj);
                vcMitt.emit('ready', readyObj);
                console.log(`${vcInstance.cesiumClass}---loaded`);
                return readyObj;
            });
        }));
    });
    const beforeUnload = () => __awaiter(this, void 0, void 0, function* () {
        yield vcInstance.unloadingPromise;
    });
    const unload = () => __awaiter(this, void 0, void 0, function* () {
        yield beforeUnload();
        if (!vcInstance.mounted) {
            return false;
        }
        console.log(`${vcInstance.cesiumClass}---unload`);
        for (let i = 0; i < vcInstance.children.length; i++) {
            const vcChildCmp = vcInstance.children[i].proxy;
            yield vcChildCmp.unload();
        }
        return unmount().then(() => __awaiter(this, void 0, void 0, function* () {
            setPropsWatcher(false);
            vcInstance.cesiumObject = undefined;
            vcInstance.mounted = false;
            emit('destroyed', vcInstance);
            console.log(`${vcInstance.cesiumClass}---unloaded`);
            return vcInstance.renderByParent ? parentVcInstance.proxy.unload() : true;
        }));
    });
    const reload = () => __awaiter(this, void 0, void 0, function* () {
        return unload().then(() => {
            return load();
        });
    });
    const mount = () => __awaiter(this, void 0, void 0, function* () {
        var _b;
        eventsState.registerEvents(true);
        return ((_b = vcInstance.mount) === null || _b === void 0 ? void 0 : _b.call(vcInstance)) || true;
    });
    const unmount = () => __awaiter(this, void 0, void 0, function* () {
        var _c;
        eventsState.registerEvents(false);
        return ((_c = vcInstance.unmount) === null || _c === void 0 ? void 0 : _c.call(vcInstance)) || true;
    });
    const createCesiumObject = () => __awaiter(this, void 0, void 0, function* () {
        console.log('do createCesiumObject');
        if (isFunction(vcInstance.createCesiumObject)) {
            return vcInstance.createCesiumObject();
        }
        else {
            const options = transformProps(props);
            return new Cesium[vcInstance.cesiumClass](options);
        }
    });
    const setPropsWatcher = register => {
        if (register) {
            if (!vcInstance.cesiumClass || !Cesium[vcInstance.cesiumClass]) {
                return;
            }
            props &&
                Object.keys(props).forEach(vueProp => {
                    var _a;
                    let cesiumProp = vueProp;
                    if (vueProp === 'labelStyle' || vueProp === 'wmtsStyle') {
                        cesiumProp = 'style';
                    }
                    else if (vueProp === 'bmKey') {
                        cesiumProp = 'key';
                    }
                    if ((_a = vcInstance.proxy.$options.watch) === null || _a === void 0 ? void 0 : _a[vueProp]) {
                        return;
                    }
                    const watcherOptions = vcInstance.proxy.$options.props[vueProp].watcherOptions;
                    const unwatch = vcInstance.proxy.$watch(vueProp, (val) => __awaiter(this, void 0, void 0, function* () {
                        yield vcInstance.proxy.createPromise;
                        const { cesiumObject } = vcInstance;
                        const pd = cesiumObject && Object.getOwnPropertyDescriptor(cesiumObject, cesiumProp);
                        const pdProto = cesiumObject && Object.getOwnPropertyDescriptor(Object.getPrototypeOf(cesiumObject), cesiumProp);
                        const hasSetter = (pd && (pd.writable || pd.set)) || (pdProto && (pdProto.writable || pdProto.set));
                        if (hasSetter) {
                            if (watcherOptions && watcherOptions.cesiumObjectBuilder) {
                                const newVal = watcherOptions.cesiumObjectBuilder.call(vcInstance, val);
                                if (!(Cesium.defined(cesiumObject[cesiumProp]) && Cesium.defined(cesiumObject[cesiumProp]._callback))) {
                                    cesiumObject[cesiumProp] = newVal;
                                }
                            }
                            else {
                                cesiumObject[cesiumProp] = transformProp(cesiumProp, val);
                            }
                            return true;
                        }
                        else {
                            return vcInstance.proxy.reload();
                        }
                    }), {
                        deep: watcherOptions === null || watcherOptions === void 0 ? void 0 : watcherOptions.deep
                    });
                    unwatchFns.push(unwatch);
                });
        }
        else {
            unwatchFns.forEach(item => item());
            unwatchFns = [];
        }
    };
    const transformProps = props => {
        const options = {};
        props &&
            Object.keys(props).forEach(vueProp => {
                let cesiumProp = vueProp;
                if (vueProp === 'labelStyle' || vueProp === 'wmtsStyle') {
                    cesiumProp = 'style';
                }
                else if (vueProp === 'bmKey') {
                    cesiumProp = 'key';
                }
                const className = getObjClassName(props[vueProp]);
                if (className &&
                    className.indexOf('Graphics') === -1 &&
                    entityGraphics.indexOf(cesiumProp) !== -1 &&
                    (vcInstance.cesiumClass === 'Entity' || vcInstance.cesiumClass.indexOf('DataSource') > 0)) {
                    options[cesiumProp] = transformProps(props[vueProp]);
                }
                else {
                    options[cesiumProp] = transformProp(vueProp, props[vueProp]);
                }
            });
        return options;
    };
    const transformProp = (prop, value) => {
        const className = getObjClassName(value);
        if (className &&
            className.indexOf('Graphics') === -1 &&
            entityGraphics.indexOf(prop) !== -1 &&
            (vcInstance.cesiumClass === 'Entity' || vcInstance.cesiumClass.indexOf('DataSource') > 0)) {
            return transformProps(value);
        }
        else {
            const cmpName = vcInstance.proxy.$options.name;
            const propOption = cesiumProps[prop] && cesiumProps[prop][prop];
            return propOption && propOption.watcherOptions && !isEmptyObj(value)
                ? propOption.watcherOptions.cesiumObjectBuilder.call(this, value)
                : isFunction(value) && cmpName && (cmpName.indexOf('graphics') !== -1 || cmpName === 'vc-entity')
                    ? new Cesium.CallbackProperty(value, false)
                    : value;
        }
    };
    const createPromise = new Promise((resolve, reject) => {
        try {
            let isLoad = false;
            if ($services.viewer) {
                isLoad = true;
                load().then(e => {
                    resolve(e);
                    isLoad = false;
                });
            }
            parentVcInstance.vcMitt.on('ready', () => {
                if (!isLoad) {
                    resolve(load());
                }
            });
        }
        catch (e) {
            reject(e);
        }
    });
    console.log(`${vcInstance.cesiumClass}---onCreated`);
    onUnmounted(() => {
        console.log(`${vcInstance.cesiumClass}---onUnmounted`);
        vcInstance.unloadingPromise = new Promise((reslove, reject) => {
            unload().then(() => {
                reslove(true);
                vcInstance.unloadingPromise = undefined;
                vcMitt.all.clear();
            });
        });
    });
    return {
        $services,
        load,
        unload,
        reload,
        createPromise
    };
}

function index (props, ctx, vcInstance) {
    const commonState = useCommon(props, ctx, vcInstance);
    const { $services } = commonState;
    vcInstance.mount = () => __awaiter(this, void 0, void 0, function* () {
        const { cesiumObject } = vcInstance;
        const { entityViewModel } = $services;
        const cmpNameArr = kebabCase(vcInstance.proxy.$options.name).split('-');
        const emitType = (cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : 'update:polylineVolume');
        return entityViewModel && entityViewModel.__updateGraphics(cesiumObject, emitType);
    });
    vcInstance.unmount = () => __awaiter(this, void 0, void 0, function* () {
        const { entityViewModel } = $services;
        const cmpNameArr = kebabCase(vcInstance.proxy.$options.name).split('-');
        const emitType = (cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : 'update:polylineVolume');
        return (entityViewModel && entityViewModel.__updateGraphics(undefined, emitType));
    });
    return {
        createPromise: commonState.createPromise,
        load: commonState.load,
        unload: commonState.unload,
        reload: commonState.reload,
        getCesiumObject: () => vcInstance.cesiumObject,
    };
}

function useVueCesium() {
    return inject(vcKey);
}

export { useCommon, useEvents, index as useGraphics, useVueCesium };
