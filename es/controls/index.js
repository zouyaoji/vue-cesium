import { ref, defineComponent, getCurrentInstance, reactive, watch, nextTick, computed, h, createCommentVNode, onMounted, onUnmounted, openBlock, createBlock, createVNode, toDisplayString, Fragment, renderList, createApp } from 'vue';
import usePosition, { positionProps } from '../composables/private/use-position';
import { $, getInstanceListener, getVcParentInstance } from '../utils/private/vm';
import { getDefaultOptionByProps, isFunction } from '../utils/util';
import { hMergeSlot } from '../utils/private/render';
import { VcBtn, VcIcon, VcTooltip, VcSpinnerTail, VcSpinnerPuff, VcSpinnerOval, VcSpinnerOrbit, VcSpinnerIos, VcSpinnerBars } from '../ui';
import { useCommon } from '../composables';
import { t } from '../locale';
import { flyToCamera, setViewerCamera, captureScreenshot, makeColor } from '../utils/cesium-helpers';
import AMapLoader from '@amap/amap-jsapi-loader';
import { gcj02towgs84 } from '../utils/coordtransform';
import { debounce } from 'lodash';
import proj4 from 'proj4';
import throttle from '../utils/private/throttle';

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

const defaultProps = Object.assign(Object.assign({ enableCompassOuterRing: {
        type: Boolean,
        default: true
    }, duration: {
        type: Number,
        default: 1.5
    } }, positionProps), { outerOptions: {
        type: Object,
        default: () => ({
            name: 'vc-icons-compass-outer',
            size: '96px',
            color: '#3f4854',
            background: 'transparent',
            tooltip: {
                delay: 1000,
                anchor: 'bottom middle',
                offset: [0, 20]
            }
        })
    }, innerOptions: {
        type: Object,
        default: () => ({
            name: 'vc-icons-compass-inner',
            size: '24px',
            color: '#3f4854',
            background: '#fff',
            tooltip: {
                delay: 1000,
                anchor: 'bottom middle',
                offset: [0, 20]
            }
        })
    }, markerOptions: {
        type: Object,
        default: () => ({
            name: 'vc-icons-compass-rotation-marker',
            size: '96px',
            color: '#1976D2'
        })
    } });
const defaultOptions = getDefaultOptionByProps(defaultProps);

class CameraFlightPath {
    static createTween(scene, options) {
        const { Cartesian2, Cartesian3, defaultValue, defined, DeveloperError, EasingFunction, Math: CesiumMath, SceneMode } = Cesium;
        options = defaultValue(options, {});
        let destination = options.destination;
        if (!defined(scene)) {
            throw new DeveloperError('scene is required.');
        }
        if (!defined(destination)) {
            throw new DeveloperError('destination is required.');
        }
        const mode = scene.mode;
        if (mode === SceneMode.MORPHING) {
            return emptyFlight();
        }
        const convert = defaultValue(options.convert, true);
        const projection = scene.mapProjection;
        const ellipsoid = projection.ellipsoid;
        const maximumHeight = options.maximumHeight;
        const flyOverLongitude = options.flyOverLongitude;
        const flyOverLongitudeWeight = options.flyOverLongitudeWeight;
        const pitchAdjustHeight = options.pitchAdjustHeight;
        let easingFunction = options.easingFunction;
        if (convert && mode !== SceneMode.SCENE3D) {
            ellipsoid.cartesianToCartographic(destination, scratchCartographic);
            destination = projection.project(scratchCartographic, scratchDestination);
        }
        const camera = scene.camera;
        const transform = options.endTransform;
        if (defined(transform)) {
            camera._setTransform(transform);
        }
        let duration = options.duration;
        if (!defined(duration)) {
            duration = Math.ceil(Cartesian3.distance(camera.position, destination) / 1000000.0) + 2.0;
            duration = Math.min(duration, 3.0);
        }
        const heading = defaultValue(options.heading, 0.0);
        const pitch = defaultValue(options.pitch, -CesiumMath.PI_OVER_TWO);
        const roll = defaultValue(options.roll, 0.0);
        const controller = scene.screenSpaceCameraController;
        controller.enableInputs = false;
        const complete = wrapCallback(controller, options.complete);
        const cancel = wrapCallback(controller, options.cancel);
        const frustum = camera.frustum;
        let empty = scene.mode === SceneMode.SCENE2D;
        empty = empty && Cartesian2.equalsEpsilon(camera.position, destination, CesiumMath.EPSILON6);
        empty =
            empty &&
                CesiumMath.equalsEpsilon(Math.max(frustum.right - frustum.left, frustum.top - frustum.bottom), destination.z, CesiumMath.EPSILON6);
        empty =
            empty || (scene.mode !== SceneMode.SCENE2D && Cartesian3.equalsEpsilon(destination, camera.position, CesiumMath.EPSILON10));
        empty =
            empty &&
                CesiumMath.equalsEpsilon(CesiumMath.negativePiToPi(heading), CesiumMath.negativePiToPi(camera.heading), CesiumMath.EPSILON10) &&
                CesiumMath.equalsEpsilon(CesiumMath.negativePiToPi(pitch), CesiumMath.negativePiToPi(camera.pitch), CesiumMath.EPSILON10) &&
                CesiumMath.equalsEpsilon(CesiumMath.negativePiToPi(roll), CesiumMath.negativePiToPi(camera.roll), CesiumMath.EPSILON10);
        if (empty) {
            return emptyFlight(complete, cancel);
        }
        const updateFunctions = new Array(4);
        updateFunctions[SceneMode.SCENE2D] = createUpdate2D;
        updateFunctions[SceneMode.SCENE3D] = createUpdate3D;
        updateFunctions[SceneMode.COLUMBUS_VIEW] = createUpdateCV;
        if (duration <= 0.0) {
            const newOnComplete = function () {
                const update = updateFunctions[mode](scene, 1.0, destination, heading, pitch, roll, maximumHeight, flyOverLongitude, flyOverLongitudeWeight, pitchAdjustHeight);
                update({ time: 1.0 });
                if (typeof complete === 'function') {
                    complete();
                }
            };
            return emptyFlight(newOnComplete, cancel);
        }
        const update = updateFunctions[mode](scene, duration, destination, heading, pitch, roll, maximumHeight, flyOverLongitude, flyOverLongitudeWeight, pitchAdjustHeight);
        if (!defined(easingFunction)) {
            const startHeight = camera.positionCartographic.height;
            const endHeight = mode === SceneMode.SCENE3D ? ellipsoid.cartesianToCartographic(destination).height : destination.z;
            if (startHeight > endHeight && startHeight > 11500.0) {
                easingFunction = EasingFunction.CUBIC_OUT;
            }
            else {
                easingFunction = EasingFunction.QUINTIC_IN_OUT;
            }
        }
        return {
            duration: duration,
            easingFunction: easingFunction,
            startObject: {
                time: 0.0
            },
            stopObject: {
                time: duration
            },
            update: update,
            complete: complete,
            cancel: cancel
        };
    }
}
function getAltitude(frustum, dx, dy) {
    const { PerspectiveFrustum, PerspectiveOffCenterFrustum } = Cesium;
    let near;
    let top;
    let right;
    if (frustum instanceof PerspectiveFrustum) {
        const tanTheta = Math.tan(0.5 * frustum.fovy);
        near = frustum.near;
        top = frustum.near * tanTheta;
        right = frustum.aspectRatio * top;
        return Math.max((dx * near) / right, (dy * near) / top);
    }
    else if (frustum instanceof PerspectiveOffCenterFrustum) {
        near = frustum.near;
        top = frustum.top;
        right = frustum.right;
        return Math.max((dx * near) / right, (dy * near) / top);
    }
    return Math.max(dx, dy);
}
const scratchCart = {};
const scratchCart2 = {};
function createPitchFunction(startPitch, endPitch, heightFunction, pitchAdjustHeight) {
    const { defined, Math: CesiumMath } = Cesium;
    if (defined(pitchAdjustHeight) && heightFunction(0.5) > pitchAdjustHeight) {
        const startHeight = heightFunction(0.0);
        const endHeight = heightFunction(1.0);
        const middleHeight = heightFunction(0.5);
        const d1 = middleHeight - startHeight;
        const d2 = middleHeight - endHeight;
        return function (time) {
            const altitude = heightFunction(time);
            if (time <= 0.5) {
                const t1 = (altitude - startHeight) / d1;
                return CesiumMath.lerp(startPitch, -CesiumMath.PI_OVER_TWO, t1);
            }
            const t2 = (altitude - endHeight) / d2;
            return CesiumMath.lerp(-CesiumMath.PI_OVER_TWO, endPitch, 1 - t2);
        };
    }
    return function (time) {
        return CesiumMath.lerp(startPitch, endPitch, time);
    };
}
function createHeightFunction(camera, destination, startHeight, endHeight, optionAltitude) {
    const { Cartesian3, defined, Math: CesiumMath } = Cesium;
    let altitude = optionAltitude;
    const maxHeight = Math.max(startHeight, endHeight);
    if (!defined(altitude)) {
        const start = camera.position;
        const end = destination;
        const up = camera.up;
        const right = camera.right;
        const frustum = camera.frustum;
        const diff = Cartesian3.subtract(start, end, scratchCart);
        const verticalDistance = Cartesian3.magnitude(Cartesian3.multiplyByScalar(up, Cartesian3.dot(diff, up), scratchCart2));
        const horizontalDistance = Cartesian3.magnitude(Cartesian3.multiplyByScalar(right, Cartesian3.dot(diff, right), scratchCart2));
        altitude = Math.min(getAltitude(frustum, verticalDistance, horizontalDistance) * 0.2, 1000000000.0);
    }
    if (maxHeight < altitude) {
        const power = 8.0;
        const factor = 1000000.0;
        const s = -Math.pow((altitude - startHeight) * factor, 1.0 / power);
        const e = Math.pow((altitude - endHeight) * factor, 1.0 / power);
        return function (t) {
            const x = t * (e - s) + s;
            return -Math.pow(x, power) / factor + altitude;
        };
    }
    return function (t) {
        return CesiumMath.lerp(startHeight, endHeight, t);
    };
}
function adjustAngleForLERP(startAngle, endAngle) {
    const { Math: CesiumMath } = Cesium;
    if (CesiumMath.equalsEpsilon(startAngle, CesiumMath.TWO_PI, CesiumMath.EPSILON11)) {
        startAngle = 0.0;
    }
    if (endAngle > startAngle + Math.PI) {
        startAngle += CesiumMath.TWO_PI;
    }
    else if (endAngle < startAngle - Math.PI) {
        startAngle -= CesiumMath.TWO_PI;
    }
    return startAngle;
}
const scratchStart = {};
function createUpdateCV(scene, duration, destination, heading, pitch, roll, optionAltitude) {
    const { Cartesian2, Cartesian3, Math: CesiumMath } = Cesium;
    const camera = scene.camera;
    const start = Cartesian3.clone(camera.position, scratchStart);
    const startPitch = camera.pitch;
    const startHeading = adjustAngleForLERP(camera.heading, heading);
    const startRoll = adjustAngleForLERP(camera.roll, roll);
    const heightFunction = createHeightFunction(camera, destination, start.z, destination.z, optionAltitude);
    function update(value) {
        const time = value.time / duration;
        camera.setView({
            orientation: {
                heading: CesiumMath.lerp(startHeading, heading, time),
                pitch: CesiumMath.lerp(startPitch, pitch, time),
                roll: CesiumMath.lerp(startRoll, roll, time)
            }
        });
        Cartesian2.lerp(start, destination, time, camera.position);
        camera.position.z = heightFunction(time);
    }
    return update;
}
function useLongestFlight(startCart, destCart) {
    const { Math: CesiumMath } = Cesium;
    if (startCart.longitude < destCart.longitude) {
        startCart.longitude += CesiumMath.TWO_PI;
    }
    else {
        destCart.longitude += CesiumMath.TWO_PI;
    }
}
function useShortestFlight(startCart, destCart) {
    const { Math: CesiumMath } = Cesium;
    const diff = startCart.longitude - destCart.longitude;
    if (diff < -CesiumMath.PI) {
        startCart.longitude += CesiumMath.TWO_PI;
    }
    else if (diff > CesiumMath.PI) {
        destCart.longitude += CesiumMath.TWO_PI;
    }
}
const scratchStartCart = {};
const scratchEndCart = {};
function createUpdate3D(scene, duration, destination, heading, pitch, roll, optionAltitude, optionFlyOverLongitude, optionFlyOverLongitudeWeight, optionPitchAdjustHeight) {
    const { Cartesian3, Cartographic, defined, Math: CesiumMath } = Cesium;
    const camera = scene.camera;
    const projection = scene.mapProjection;
    const ellipsoid = projection.ellipsoid;
    const startCart = Cartographic.clone(camera.positionCartographic, scratchStartCart);
    const startPitch = camera.pitch;
    const startHeading = adjustAngleForLERP(camera.heading, heading);
    const startRoll = adjustAngleForLERP(camera.roll, roll);
    const destCart = ellipsoid.cartesianToCartographic(destination, scratchEndCart);
    startCart.longitude = CesiumMath.zeroToTwoPi(startCart.longitude);
    destCart.longitude = CesiumMath.zeroToTwoPi(destCart.longitude);
    let useLongFlight = false;
    if (defined(optionFlyOverLongitude)) {
        const hitLon = CesiumMath.zeroToTwoPi(optionFlyOverLongitude);
        const lonMin = Math.min(startCart.longitude, destCart.longitude);
        const lonMax = Math.max(startCart.longitude, destCart.longitude);
        const hitInside = hitLon >= lonMin && hitLon <= lonMax;
        if (defined(optionFlyOverLongitudeWeight)) {
            const din = Math.abs(startCart.longitude - destCart.longitude);
            const dot = CesiumMath.TWO_PI - din;
            const hitDistance = hitInside ? din : dot;
            const offDistance = hitInside ? dot : din;
            if (hitDistance < offDistance * optionFlyOverLongitudeWeight && !hitInside) {
                useLongFlight = true;
            }
        }
        else if (!hitInside) {
            useLongFlight = true;
        }
    }
    if (useLongFlight) {
        useLongestFlight(startCart, destCart);
    }
    else {
        useShortestFlight(startCart, destCart);
    }
    const heightFunction = createHeightFunction(camera, destination, startCart.height, destCart.height, optionAltitude);
    const pitchFunction = createPitchFunction(startPitch, pitch, heightFunction, optionPitchAdjustHeight);
    function isolateUpdateFunction() {
        const startLongitude = startCart.longitude;
        const destLongitude = destCart.longitude;
        const startLatitude = startCart.latitude;
        const destLatitude = destCart.latitude;
        return function update(value) {
            const time = value.time / duration;
            const position = Cartesian3.fromRadians(CesiumMath.lerp(startLongitude, destLongitude, time), CesiumMath.lerp(startLatitude, destLatitude, time), heightFunction(time));
            camera.setView({
                destination: position,
                orientation: {
                    heading: CesiumMath.lerp(startHeading, heading, time),
                    pitch: pitchFunction(time),
                    roll: CesiumMath.lerp(startRoll, roll, time)
                }
            });
        };
    }
    return isolateUpdateFunction();
}
function createUpdate2D(scene, duration, destination, heading, pitch, roll, optionAltitude) {
    const { Cartesian2, Cartesian3, Math: CesiumMath } = Cesium;
    const camera = scene.camera;
    const start = Cartesian3.clone(camera.position, scratchStart);
    const startHeading = adjustAngleForLERP(camera.heading, heading);
    const startHeight = camera.frustum.right - camera.frustum.left;
    const heightFunction = createHeightFunction(camera, destination, startHeight, destination.z, optionAltitude);
    function update(value) {
        const time = value.time / duration;
        camera.setView({
            orientation: {
                heading: CesiumMath.lerp(startHeading, heading, time)
            }
        });
        Cartesian2.lerp(start, destination, time, camera.position);
        const zoom = heightFunction(time);
        const frustum = camera.frustum;
        const ratio = frustum.top / frustum.right;
        const incrementAmount = (zoom - (frustum.right - frustum.left)) * 0.5;
        frustum.right += incrementAmount;
        frustum.left -= incrementAmount;
        frustum.top = ratio * frustum.right;
        frustum.bottom = -frustum.top;
    }
    return update;
}
const scratchCartographic = {};
const scratchDestination = {};
function emptyFlight(complete, cancel) {
    return {
        startObject: {},
        stopObject: {},
        duration: 0.0,
        complete: complete,
        cancel: cancel
    };
}
function wrapCallback(controller, cb) {
    function wrapped() {
        if (typeof cb === 'function') {
            cb();
        }
        controller.enableInputs = true;
    }
    return wrapped;
}

function useCompass (props, { emit }, vcInstance) {
    const vectorScratch = {};
    const oldTransformScratch = {};
    const newTransformScratch = {};
    const centerScratch = {};
    let unsubscribeFromPostRender = undefined;
    let unsubscribeFromClockTick = undefined;
    let orbitMouseMoveFunction = undefined;
    let orbitMouseUpFunction = undefined;
    let orbitTickFunction = undefined;
    const heading = ref(0);
    const orbitCursorAngle = ref(0);
    const orbitCursorOpacity = ref(0);
    let orbitLastTimestamp = 0;
    let orbitFrame = {};
    let orbitIsLook = false;
    let rotateMouseUpFunction = undefined;
    let rotateMouseMoveFunction = undefined;
    let rotateInitialCursorAngle = 0;
    let rotateFrame = {};
    let rotateInitialCameraAngle = 0;
    const iconOuterTooltipRef = ref(null);
    const iconInnerTooltipRef = ref(null);
    const handleMouseDown = (e) => {
        var _a, _b;
        if (e.stopPropagation)
            e.stopPropagation();
        if (e.preventDefault)
            e.preventDefault();
        (_a = $(iconOuterTooltipRef)) === null || _a === void 0 ? void 0 : _a.hide();
        (_b = $(iconInnerTooltipRef)) === null || _b === void 0 ? void 0 : _b.hide();
        const { SceneMode } = Cesium;
        const scene = vcInstance.viewer.scene;
        if (scene.mode === SceneMode.MORPHING) {
            return true;
        }
        const { Cartesian2 } = Cesium;
        const compassElement = e.currentTarget;
        const compassRectangle = e.currentTarget.getBoundingClientRect();
        const maxDistance = compassRectangle.width / 2.0;
        const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2.0, (compassRectangle.bottom - compassRectangle.top) / 2.0);
        let clickLocation;
        if (e instanceof MouseEvent) {
            clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top);
        }
        else if (e instanceof TouchEvent) {
            clickLocation = new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top);
        }
        const vector = Cartesian2.subtract(clickLocation, center, vectorScratch);
        const distanceFromCenter = Cartesian2.magnitude(vector);
        const distanceFraction = distanceFromCenter / maxDistance;
        const nominalTotalRadius = 145;
        const norminalGyroRadius = 50;
        if (distanceFraction < norminalGyroRadius / nominalTotalRadius) {
            orbit(vcInstance, compassElement, vector);
        }
        else if (distanceFraction < 1.0) {
            rotate(vcInstance, compassElement, vector);
        }
        else {
            return true;
        }
    };
    const handleDoubleClick = e => {
        const { Cartesian2, Cartesian3, defined, Ellipsoid, Matrix4, Ray, SceneMode, Transforms } = Cesium;
        const { viewer } = vcInstance;
        const scene = viewer.scene;
        const camera = scene.camera;
        const sscc = scene.screenSpaceCameraController;
        if (scene.mode === SceneMode.MORPHING || !sscc.enableInputs) {
            return true;
        }
        if (scene.mode === SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
            return;
        }
        if (scene.mode === SceneMode.SCENE3D || scene.mode === SceneMode.COLUMBUS_VIEW) {
            if (!sscc.enableLook) {
                return;
            }
            if (scene.mode === SceneMode.SCENE3D) {
                if (!sscc.enableRotate) {
                    return;
                }
            }
        }
        const windowPosition = new Cartesian2();
        windowPosition.x = scene.canvas.clientWidth / 2;
        windowPosition.y = scene.canvas.clientHeight / 2;
        const pickRayScratch = new Ray();
        const ray = camera.getPickRay(windowPosition, pickRayScratch);
        const center = scene.globe.pick(ray, scene, centerScratch);
        if (!defined(center)) {
            viewer.camera.flyHome();
            return;
        }
        const listener = getInstanceListener(vcInstance, 'compassEvt');
        listener && emit('compassEvt', {
            type: 'reset',
            camera: viewer.camera,
            status: 'start'
        });
        const rotateFrame = Transforms.eastNorthUpToFixedFrame(center, Ellipsoid.WGS84);
        const lookVector = Cartesian3.subtract(center, camera.position, new Cartesian3());
        const flight = CameraFlightPath.createTween(scene, {
            destination: Matrix4.multiplyByPoint(rotateFrame, new Cartesian3(0.0, 0.0, Cartesian3.magnitude(lookVector)), new Cartesian3()),
            direction: Matrix4.multiplyByPointAsVector(rotateFrame, new Cartesian3(0.0, 0.0, -1.0), new Cartesian3()),
            up: Matrix4.multiplyByPointAsVector(rotateFrame, new Cartesian3(0.0, 1.0, 0.0), new Cartesian3()),
            duration: props.duration,
            complete: () => {
                listener && emit('compassEvt', {
                    type: 'reset',
                    camera: viewer.camera,
                    status: 'complete'
                });
            },
            cancel: () => {
                listener && emit('compassEvt', {
                    type: 'reset',
                    camera: viewer.camera,
                    status: 'cancel'
                });
            }
        });
        scene.tweens.add(flight);
    };
    const resetRotater = () => {
        orbitCursorOpacity.value = 0;
        orbitCursorAngle.value = 0;
    };
    const viewerChange = (instance) => {
        const { defined } = Cesium;
        if (defined(instance.viewer)) {
            if (unsubscribeFromPostRender) {
                unsubscribeFromPostRender();
                unsubscribeFromPostRender = undefined;
            }
            unsubscribeFromPostRender = instance.viewer.scene.postRender.addEventListener(function () {
                if (heading.value !== instance.viewer.scene.camera.heading) {
                    heading.value = instance.viewer.scene.camera.heading;
                }
            });
        }
        else {
            if (unsubscribeFromPostRender) {
                unsubscribeFromPostRender();
                unsubscribeFromPostRender = undefined;
            }
        }
    };
    const orbit = (instance, compassElement, cursorVector) => {
        const { Cartesian2, Cartesian3, defined, getTimestamp, Math: CesiumMath, Matrix4, Ellipsoid, Ray, SceneMode, Transforms } = Cesium;
        let scene = instance.viewer.scene;
        let camera = scene.camera;
        const sscc = scene.screenSpaceCameraController;
        if (scene.mode === SceneMode.MORPHING || !sscc.enableInputs) {
            return;
        }
        switch (scene.mode) {
            case SceneMode.COLUMBUS_VIEW:
                if (sscc.enableLook) {
                    break;
                }
                if (!sscc.enableTranslate || !sscc.enableTilt) {
                    return;
                }
                break;
            case SceneMode.SCENE3D:
                if (sscc.enableLook) {
                    break;
                }
                if (!sscc.enableTilt || !sscc.enableRotate) {
                    return;
                }
                break;
            case Cesium.SceneMode.SCENE2D:
                if (!sscc.enableTranslate) {
                    return;
                }
                break;
        }
        const listener = getInstanceListener(vcInstance, 'compassEvt');
        listener && emit('compassEvt', {
            type: 'orbit',
            camera: scene.camera,
            status: 'start',
            target: compassElement
        });
        document.removeEventListener('mousemove', orbitMouseMoveFunction, false);
        document.removeEventListener('mouseup', orbitMouseUpFunction, false);
        document.removeEventListener('touchmove', orbitMouseMoveFunction, false);
        document.removeEventListener('touchend', orbitMouseUpFunction, false);
        if (defined(orbitTickFunction)) {
            instance.viewer.clock.onTick.removeEventListener(orbitTickFunction);
        }
        orbitMouseMoveFunction = undefined;
        orbitMouseUpFunction = undefined;
        orbitTickFunction = undefined;
        orbitLastTimestamp = getTimestamp();
        const windowPosition = new Cartesian2();
        windowPosition.x = scene.canvas.clientWidth / 2;
        windowPosition.y = scene.canvas.clientHeight / 2;
        const pickRayScratch = new Ray();
        const ray = camera.getPickRay(windowPosition, pickRayScratch);
        const center = scene.globe.pick(ray, scene, centerScratch);
        if (!defined(center)) {
            orbitFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, Ellipsoid.WGS84, newTransformScratch);
            orbitIsLook = true;
        }
        else {
            orbitFrame = Transforms.eastNorthUpToFixedFrame(center, Ellipsoid.WGS84, newTransformScratch);
            orbitIsLook = false;
        }
        orbitTickFunction = function (e) {
            const timestamp = getTimestamp();
            const deltaT = timestamp - orbitLastTimestamp;
            const rate = ((orbitCursorOpacity.value - 0.5) * 2.5) / 1000;
            const distance = deltaT * rate;
            const angle = orbitCursorAngle.value + CesiumMath.PI_OVER_TWO;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            scene = instance.viewer.scene;
            camera = scene.camera;
            const oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
            camera.lookAtTransform(orbitFrame);
            if (orbitIsLook) {
                camera.look(Cartesian3.UNIT_Z, -x);
                camera.look(camera.right, -y);
            }
            else {
                camera.rotateLeft(x);
                camera.rotateUp(y);
            }
            camera.lookAtTransform(oldTransform);
            orbitLastTimestamp = timestamp;
        };
        function updateAngleAndOpacity(vector, compassWidth) {
            const angle = Math.atan2(-vector.y, vector.x);
            orbitCursorAngle.value = CesiumMath.zeroToTwoPi(angle - CesiumMath.PI_OVER_TWO);
            const distance = Cartesian2.magnitude(vector);
            const maxDistance = compassWidth / 2.0;
            const distanceFraction = Math.min(distance / maxDistance, 1.0);
            const easedOpacity = 0.5 * distanceFraction * distanceFraction + 0.5;
            orbitCursorOpacity.value = easedOpacity;
        }
        orbitMouseMoveFunction = function (e) {
            const compassRectangle = compassElement.getBoundingClientRect();
            const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2.0, (compassRectangle.bottom - compassRectangle.top) / 2.0);
            const clickLocation = e.type === 'mousemove'
                ? new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top)
                : new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top);
            const vector = Cartesian2.subtract(clickLocation, center, vectorScratch);
            updateAngleAndOpacity(vector, compassRectangle.width);
            listener && emit('compassEvt', {
                type: 'orbit',
                camera: scene.camera,
                status: 'changing',
                target: compassElement
            });
        };
        orbitMouseUpFunction = function (e) {
            document.removeEventListener('mousemove', orbitMouseMoveFunction, false);
            document.removeEventListener('mouseup', orbitMouseUpFunction, false);
            document.removeEventListener('touchmove', orbitMouseMoveFunction, false);
            document.removeEventListener('touchend', orbitMouseUpFunction, false);
            if (defined(orbitTickFunction)) {
                instance.viewer.clock.onTick.removeEventListener(orbitTickFunction);
            }
            orbitMouseMoveFunction = undefined;
            orbitMouseUpFunction = undefined;
            orbitTickFunction = undefined;
            resetRotater();
            listener && emit('compassEvt', {
                type: 'orbit',
                camera: scene.camera,
                status: 'end',
                target: compassElement
            });
        };
        document.addEventListener('mousemove', orbitMouseMoveFunction, false);
        document.addEventListener('mouseup', orbitMouseUpFunction, false);
        document.addEventListener('touchmove', orbitMouseMoveFunction, false);
        document.addEventListener('touchend', orbitMouseUpFunction, false);
        unsubscribeFromClockTick = instance.viewer.clock.onTick.addEventListener(orbitTickFunction);
        updateAngleAndOpacity(cursorVector, compassElement.getBoundingClientRect().width);
    };
    const rotate = (instance, compassElement, cursorVector) => {
        if (!props.enableCompassOuterRing) {
            return;
        }
        const scene = instance.viewer.scene;
        let camera = scene.camera;
        const sscc = scene.screenSpaceCameraController;
        if (scene.mode === Cesium.SceneMode.MORPHING || scene.mode === Cesium.SceneMode.SCENE2D || !sscc.enableInputs) {
            return;
        }
        if (!sscc.enableLook &&
            (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW || (scene.mode === Cesium.SceneMode.SCENE3D && !sscc.enableRotate))) {
            return;
        }
        document.removeEventListener('mousemove', rotateMouseMoveFunction, false);
        document.removeEventListener('touchmove', rotateMouseMoveFunction, false);
        document.removeEventListener('mouseup', rotateMouseUpFunction, false);
        document.removeEventListener('touchend', rotateMouseUpFunction, false);
        const { Cartesian2, Cartesian3, defined, Math: CesiumMath, Matrix4, Ellipsoid, Ray, Transforms } = Cesium;
        rotateMouseMoveFunction = undefined;
        rotateMouseUpFunction = undefined;
        const listener = getInstanceListener(vcInstance, 'compassEvt');
        listener && emit('compassEvt', {
            type: 'rotate',
            camera: scene.camera,
            status: 'start',
            target: compassElement
        });
        rotateInitialCursorAngle = Math.atan2(-cursorVector.y, cursorVector.x);
        const windowPosition = new Cartesian2();
        windowPosition.x = scene.canvas.clientWidth / 2;
        windowPosition.y = scene.canvas.clientHeight / 2;
        const pickRayScratch = new Ray();
        const ray = camera.getPickRay(windowPosition, pickRayScratch);
        const viewCenter = scene.globe.pick(ray, scene, centerScratch);
        if (!defined(viewCenter)) {
            rotateFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, Ellipsoid.WGS84, newTransformScratch);
        }
        else {
            rotateFrame = Transforms.eastNorthUpToFixedFrame(viewCenter, Ellipsoid.WGS84, newTransformScratch);
        }
        let oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
        camera.lookAtTransform(rotateFrame);
        rotateInitialCameraAngle = Math.atan2(camera.position.y, camera.position.x);
        Cartesian3.magnitude(new Cartesian3(camera.position.x, camera.position.y, 0.0));
        camera.lookAtTransform(oldTransform);
        rotateMouseMoveFunction = function (e) {
            const compassRectangle = compassElement.getBoundingClientRect();
            const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2.0, (compassRectangle.bottom - compassRectangle.top) / 2.0);
            let clickLocation;
            if (e instanceof MouseEvent) {
                clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top);
            }
            else if (e instanceof TouchEvent) {
                clickLocation = new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top);
            }
            const vector = Cartesian2.subtract(clickLocation, center, vectorScratch);
            const angle = Math.atan2(-vector.y, vector.x);
            const angleDifference = angle - rotateInitialCursorAngle;
            const newCameraAngle = CesiumMath.zeroToTwoPi(rotateInitialCameraAngle - angleDifference);
            camera = instance.viewer.scene.camera;
            oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
            camera.lookAtTransform(rotateFrame);
            const currentCameraAngle = Math.atan2(camera.position.y, camera.position.x);
            camera.rotateRight(newCameraAngle - currentCameraAngle);
            camera.lookAtTransform(oldTransform);
            listener && emit('compassEvt', {
                type: 'rotate',
                camera: scene.camera,
                status: 'changing',
                target: compassElement
            });
        };
        rotateMouseUpFunction = function (e) {
            document.removeEventListener('mousemove', rotateMouseMoveFunction, false);
            document.removeEventListener('touchmove', rotateMouseMoveFunction, false);
            document.removeEventListener('mouseup', rotateMouseUpFunction, false);
            document.removeEventListener('touchend', rotateMouseUpFunction, false);
            rotateMouseMoveFunction = undefined;
            rotateMouseUpFunction = undefined;
            listener && emit('compassEvt', {
                type: 'rotate',
                camera: scene.camera,
                status: 'end',
                target: compassElement
            });
        };
        document.addEventListener('mousemove', rotateMouseMoveFunction, false);
        document.addEventListener('touchmove', rotateMouseMoveFunction, false);
        document.addEventListener('mouseup', rotateMouseUpFunction, false);
        document.addEventListener('touchend', rotateMouseUpFunction, false);
    };
    const onTooltipBeforeShow = e => {
        if (rotateMouseMoveFunction !== undefined || orbitMouseMoveFunction !== undefined) {
            e.cancel = true;
        }
    };
    const load = (viewer) => __awaiter(this, void 0, void 0, function* () {
        vcInstance.viewer = viewer;
        viewerChange(vcInstance);
        return true;
    });
    const unload = () => __awaiter(this, void 0, void 0, function* () {
        document.removeEventListener('mousemove', orbitMouseMoveFunction, false);
        document.removeEventListener('mouseup', orbitMouseUpFunction, false);
        document.removeEventListener('touchmove', orbitMouseMoveFunction, false);
        document.removeEventListener('touchend', orbitMouseUpFunction, false);
        unsubscribeFromClockTick && unsubscribeFromClockTick();
        unsubscribeFromPostRender && unsubscribeFromPostRender();
        return true;
    });
    return {
        heading,
        orbitCursorAngle,
        orbitCursorOpacity,
        handleDoubleClick,
        handleMouseDown,
        resetRotater,
        onTooltipBeforeShow,
        viewerChange,
        load,
        unload,
        iconOuterTooltipRef,
        iconInnerTooltipRef
    };
}

var VcCompass = defineComponent({
    name: 'VcCompass',
    props: defaultProps,
    emits: ['beforeLoad', 'ready', 'destroyed', 'compassEvt'],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'VcCompass';
        const commonState = useCommon(props, ctx, instance);
        if (commonState === void 0) {
            return;
        }
        const parentInstance = getVcParentInstance(instance);
        const { $services } = commonState;
        const compassState = useCompass(props, ctx, instance);
        const positionState = usePosition(props, $services);
        const rootRef = ref(null);
        const outerRingRef = ref(null);
        const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation';
        const canRender = ref(hasVcNavigation);
        const rootStyle = reactive({});
        watch(() => props, val => {
            nextTick(() => {
                if (!instance.mounted) {
                    return;
                }
                updateRootStyle();
            });
        }, {
            deep: true
        });
        const innerOptions = computed(() => {
            return Object.assign({}, defaultOptions.innerOptions, props.innerOptions);
        });
        const outerOptions = computed(() => {
            return Object.assign({}, defaultOptions.outerOptions, props.outerOptions);
        });
        const markerOptions = computed(() => {
            return Object.assign({}, defaultOptions.markerOptions, props.markerOptions);
        });
        const outerCircleStyle = computed(() => {
            return {
                transform: 'translate(-50%,-50%) rotate(-' + compassState.heading.value + 'rad)',
                WebkitTransform: 'translate(-50%,-50%) rotate(-' + compassState.heading.value + 'rad)',
                opacity: undefined,
                background: outerOptions.value.background,
                color: outerOptions.value.color
            };
        });
        const rotationMarkerStyle = computed(() => {
            return {
                transform: 'rotate(-' + compassState.orbitCursorAngle.value + 'rad)',
                WebkitTransform: 'rotate(-' + compassState.orbitCursorAngle.value + 'rad)',
                opacity: compassState.orbitCursorOpacity.value,
                color: markerOptions.value.color
            };
        });
        const innerRingStyle = computed(() => {
            const css = {
                background: innerOptions.value.background,
                color: innerOptions.value.color
            };
            return css;
        });
        instance.createCesiumObject = () => __awaiter(this, void 0, void 0, function* () {
            canRender.value = true;
            const { viewer } = $services;
            return new Promise((resolve, reject) => {
                nextTick(() => {
                    if (!hasVcNavigation) {
                        const viewerElement = viewer._element;
                        viewerElement.appendChild($(rootRef));
                        resolve($(rootRef));
                    }
                    else {
                        resolve($(rootRef));
                    }
                });
            });
        });
        instance.mount = () => __awaiter(this, void 0, void 0, function* () {
            updateRootStyle();
            const { viewer } = $services;
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'mounted',
                target: $(rootRef)
            });
            return compassState.load($services.viewer);
        });
        instance.unmount = () => __awaiter(this, void 0, void 0, function* () {
            const { viewer } = $services;
            const viewerElement = viewer._element;
            if (!hasVcNavigation) {
                viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
            }
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'unmounted',
                target: $(rootRef)
            });
            return compassState.unload();
        });
        const updateRootStyle = () => {
            var _a;
            const css = positionState.style.value;
            rootStyle.left = css.left;
            rootStyle.top = css.top;
            rootStyle.transform = css.transform;
            const side = positionState.attach.value;
            const outerRingTarget = (_a = $(outerRingRef)) === null || _a === void 0 ? void 0 : _a.$el;
            if (outerRingTarget !== void 0) {
                const clientRect = outerRingTarget.getBoundingClientRect();
                css.width = `${clientRect.width}px`;
                css.height = `${clientRect.height}px`;
                if ((side.bottom || side.top) && !side.left && !side.right) {
                    css.left = '50%';
                    css.transform = 'translate(-50%, 0)';
                }
                if ((side.left || side.right) && !side.top && !side.bottom) {
                    css.top = '50%';
                    css.transform = 'translate(0, -50%)';
                }
            }
            Object.assign(rootStyle, css);
        };
        Object.assign(instance.proxy, {
            createPromise: commonState.createPromise,
            load: commonState.load,
            unload: commonState.unload,
            reload: commonState.reload,
            getCesiumObject: () => instance.cesiumObject
        });
        return () => {
            if (canRender.value) {
                let children = [];
                children = hMergeSlot(ctx.slots.default, children);
                children.push(h(VcBtn, {
                    ref: outerRingRef,
                    class: 'vc-compass-outerRing absolute-center',
                    style: outerCircleStyle.value,
                    size: outerOptions.value.size,
                    dense: true,
                    round: true,
                    disabled: !props.enableCompassOuterRing
                }, () => [
                    h(VcIcon, {
                        size: outerOptions.value.size,
                        name: outerOptions.value.name
                    }),
                    outerOptions.value.tooltip
                        ? h(VcTooltip, Object.assign(Object.assign({ ref: compassState.iconOuterTooltipRef }, outerOptions.value.tooltip), { onBeforeShow: compassState.onTooltipBeforeShow }), () => h('strong', {}, t('vc.navigation.compass.outerTip')))
                        : createCommentVNode('v-if')
                ]));
                children.push(h(VcBtn, {
                    class: 'vc-compass-innerRing absolute-center',
                    style: innerRingStyle.value,
                    size: innerOptions.value.size,
                    dense: true,
                    round: true
                }, () => [
                    h(VcIcon, {
                        size: innerOptions.value.size,
                        name: innerOptions.value.name
                    }),
                    innerOptions.value.tooltip
                        ? h(VcTooltip, Object.assign(Object.assign({ ref: compassState.iconInnerTooltipRef }, innerOptions.value.tooltip), { onBeforeShow: compassState.onTooltipBeforeShow }), () => h('strong', {}, t('vc.navigation.compass.innerTip')))
                        : createCommentVNode('v-if')
                ]));
                children.push(rotationMarkerStyle.value.opacity
                    ? h(VcBtn, {
                        class: 'vc-compass-rotation-marker absolute-center',
                        dense: true,
                        round: true
                    }, () => [
                        h(VcIcon, {
                            size: markerOptions.value.size,
                            name: markerOptions.value.name,
                            style: rotationMarkerStyle.value
                        })
                    ]) : createCommentVNode('v-if'));
                return h('div', {
                    ref: rootRef,
                    class: 'vc-compass ' + positionState.classes.value,
                    style: rootStyle,
                    onDblclick: compassState.handleDoubleClick,
                    onMousedown: compassState.handleMouseDown,
                    onMouseup: compassState.resetRotater,
                    onTouchend: compassState.resetRotater,
                    onTouchstart: compassState.handleMouseDown
                }, children);
            }
            else {
                return createCommentVNode('v-if');
            }
        };
    }
});

const defaultProps$1 = Object.assign(Object.assign({ enableResetButton: {
        type: Boolean,
        default: true
    }, zoomAmount: {
        type: Number,
        default: 2
    }, duration: {
        type: Number,
        default: 0.5
    }, durationReset: {
        type: Number
    }, defaultResetView: {
        type: Object,
        default: () => {
            return {
                position: {
                    lng: 105,
                    lat: 30,
                    height: 19059568.5
                }
            };
        }
    }, overrideViewerCamera: {
        type: Boolean,
        default: false
    } }, positionProps), { background: {
        type: String,
        default: '#3f4854'
    }, border: {
        type: String,
        default: 'solid 1px rgba(255, 255, 255, 0.2)'
    }, borderRadius: {
        type: String,
        default: '100px'
    }, direction: {
        type: String,
        default: 'vertical',
        validator: (v) => ['vertical', 'horizontal'].includes(v)
    }, zoomInOptions: {
        type: Object,
        default: () => ({
            name: 'vc-icons-zoom-in',
            size: '24px',
            color: '#fff',
            background: 'transparent',
            round: true,
            flat: true,
            label: undefined,
            stack: false,
            tooltip: {
                delay: 500,
                anchor: 'bottom middle',
                offset: [0, 20]
            }
        })
    }, zoomOutOptions: {
        type: Object,
        default: () => ({
            name: 'vc-icons-zoom-out',
            size: '24px',
            color: '#fff',
            background: 'transparent',
            round: true,
            flat: true,
            label: undefined,
            stack: false,
            tooltip: {
                delay: 500,
                anchor: 'bottom middle',
                offset: [0, 20]
            }
        })
    }, zoomResetOptions: {
        type: Object,
        default: () => ({
            name: 'vc-icons-reset',
            size: '24px',
            color: '#fff',
            background: 'transparent',
            round: true,
            flat: true,
            label: undefined,
            stack: false,
            tooltip: {
                delay: 500,
                anchor: 'bottom middle',
                offset: [0, 20]
            }
        })
    } });
const defaultOptions$1 = getDefaultOptionByProps(defaultProps$1);

function useZoomControl (props, { emit }, vcInstance, $services) {
    const zoomInTooltipRef = ref(null);
    const zoomOutTooltipRef = ref(null);
    const resetTooltipRef = ref(null);
    const zoomIn = () => {
        zoom(1 / props.zoomAmount);
    };
    const zoomOut = () => {
        zoom(props.zoomAmount);
    };
    const zoom = relativeAmount => {
        var _a, _b;
        (_a = $(zoomInTooltipRef)) === null || _a === void 0 ? void 0 : _a.hide();
        (_b = $(zoomOutTooltipRef)) === null || _b === void 0 ? void 0 : _b.hide();
        const { Cartesian3, defined, IntersectionTests, Ray, SceneMode } = Cesium;
        const { viewer } = $services;
        if (defined(viewer)) {
            const scene = viewer.scene;
            const sscc = scene.screenSpaceCameraController;
            if (!sscc.enableInputs || !sscc.enableZoom) {
                return;
            }
            if (scene.mode === SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
                return;
            }
            const camera = scene.camera;
            let orientation;
            switch (scene.mode) {
                case SceneMode.MORPHING: {
                    break;
                }
                case SceneMode.SCENE2D: {
                    camera.zoomIn(camera.positionCartographic.height * (1 - relativeAmount));
                    break;
                }
                default: {
                    let focus;
                    if (defined(viewer.trackedEntity)) {
                        focus = new Cesium.Cartesian3();
                    }
                    else {
                        focus = getCameraFocus(viewer);
                    }
                    if (!Cesium.defined(focus)) {
                        const ray = new Ray(camera.worldToCameraCoordinatesPoint(scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)), camera.directionWC);
                        focus = IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid);
                        orientation = {
                            heading: camera.heading,
                            pitch: camera.pitch,
                            roll: camera.roll
                        };
                    }
                    else {
                        orientation = {
                            direction: camera.direction,
                            up: camera.up
                        };
                    }
                    const cartesian3Scratch = new Cartesian3();
                    const direction = Cartesian3.subtract(camera.position, focus, cartesian3Scratch);
                    const movementVector = Cartesian3.multiplyByScalar(direction, relativeAmount, direction);
                    const endPosition = Cartesian3.add(focus, movementVector, focus);
                    const type = relativeAmount < 1 ? 'zoomIn' : 'zoomOut';
                    const listener = getInstanceListener(vcInstance, 'zoomEvt');
                    listener && emit('zoomEvt', {
                        type: type,
                        camera: viewer.camera,
                        status: 'start'
                    });
                    if (Cesium.defined(viewer.trackedEntity) || scene.mode === SceneMode.COLUMBUS_VIEW) {
                        camera.position = endPosition;
                    }
                    else {
                        camera.flyTo({
                            destination: endPosition,
                            orientation: orientation,
                            duration: props.duration,
                            convert: false,
                            complete: () => {
                                listener && emit('zoomEvt', {
                                    type: type,
                                    camera: viewer.camera,
                                    status: 'complete'
                                });
                            },
                            cancel: () => {
                                listener && emit('zoomEvt', {
                                    type: type,
                                    camera: viewer.camera,
                                    status: 'cancel'
                                });
                            }
                        });
                    }
                }
            }
        }
    };
    const zoomReset = () => {
        var _a;
        (_a = $(resetTooltipRef)) === null || _a === void 0 ? void 0 : _a.hide();
        const { viewer } = $services;
        const scene = viewer.scene;
        const sscc = scene.screenSpaceCameraController;
        if (!sscc.enableInputs) {
            return;
        }
        if (Cesium.defined(viewer.trackedEntity)) {
            const trackedEntity = viewer.trackedEntity;
            viewer.trackedEntity = undefined;
            viewer.trackedEntity = trackedEntity;
        }
        else {
            const listener = getInstanceListener(vcInstance, 'zoomEvt');
            listener && emit('zoomEvt', {
                type: 'zoomReset',
                camera: viewer.camera,
                status: 'start'
            });
            const complete = () => {
                listener && emit('zoomEvt', {
                    type: 'zoomReset',
                    camera: viewer.camera,
                    status: 'complete'
                });
            };
            const cancel = () => {
                listener && emit('zoomEvt', {
                    type: 'zoomReset',
                    camera: viewer.camera,
                    status: 'cancel'
                });
            };
            const resetView = props.defaultResetView;
            const options = {
                duration: props.durationReset,
                complete: complete,
                cancel: cancel
            };
            flyToCamera(viewer, resetView, options);
        }
    };
    const getCameraFocus = scene => {
        const { defined, Ellipsoid, IntersectionTests, Ray } = Cesium;
        const ray = new Ray(scene.camera.positionWC, scene.camera.directionWC);
        const intersections = IntersectionTests.rayEllipsoid(ray, Ellipsoid.WGS84);
        if (defined(intersections)) {
            return Ray.getPoint(ray, intersections.start);
        }
        return IntersectionTests.grazingAltitudeLocation(ray, Ellipsoid.WGS84);
    };
    return {
        zoomIn,
        zoomOut,
        zoomReset,
        zoomInTooltipRef,
        zoomOutTooltipRef,
        resetTooltipRef
    };
}

var VcZoomControl = defineComponent({
    name: 'VcZoomControl',
    props: defaultProps$1,
    emits: ['beforeLoad', 'ready', 'destroyed', 'zoomEvt'],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'VcZoomControl';
        instance.cesiumEvents = [];
        const commonState = useCommon(props, ctx, instance);
        const { $services } = commonState;
        const zoomControlState = useZoomControl(props, ctx, instance, $services);
        const positionState = usePosition(props, $services);
        const rootRef = ref(null);
        const zoomInRef = ref(null);
        const zoomResetRef = ref(null);
        const zoomOutRef = ref(null);
        const parentInstance = getVcParentInstance(instance);
        const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation';
        const canRender = ref(hasVcNavigation);
        const rootStyle = reactive({});
        watch(() => props, val => {
            nextTick(() => {
                if (!instance.mounted) {
                    return;
                }
                updateRootStyle();
            });
        }, {
            deep: true
        });
        const zoomOutOptions = computed(() => Object.assign({}, defaultOptions$1.zoomOutOptions, props.zoomOutOptions));
        const zoomInOptions = computed(() => Object.assign({}, defaultOptions$1.zoomInOptions, props.zoomInOptions));
        const zoomResetOptions = computed(() => Object.assign({}, defaultOptions$1.zoomResetOptions, props.zoomResetOptions));
        instance.createCesiumObject = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                canRender.value = true;
                nextTick(() => {
                    const { viewer } = $services;
                    if (props.overrideViewerCamera) {
                        const resetView = props.defaultResetView;
                        setViewerCamera(viewer, resetView);
                    }
                    if (!hasVcNavigation) {
                        const viewerElement = viewer._element;
                        viewerElement.appendChild($(rootRef));
                        resolve($(rootRef));
                    }
                    else {
                        resolve($(rootRef));
                    }
                });
            });
        });
        instance.mount = () => __awaiter(this, void 0, void 0, function* () {
            updateRootStyle();
            const { viewer } = $services;
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'mounted',
                target: $(rootRef)
            });
            return true;
        });
        instance.unmount = () => __awaiter(this, void 0, void 0, function* () {
            const { viewer } = $services;
            if (!hasVcNavigation) {
                const viewerElement = viewer._element;
                viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
            }
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'unmounted',
                target: $(rootRef)
            });
            return true;
        });
        const updateRootStyle = () => {
            var _a, _b, _c;
            const css = positionState.style.value;
            rootStyle.left = css.left;
            rootStyle.top = css.top;
            rootStyle.transform = css.transform;
            css.flexDirection = props.direction === 'vertical' ? 'column' : 'row';
            css.background = props.background;
            css.borderRadius = props.borderRadius;
            css.border = props.border;
            if (!hasVcNavigation) {
                const zoomInTarget = (_a = $(zoomInRef)) === null || _a === void 0 ? void 0 : _a.$el;
                const zoomResetTarget = (_b = $(zoomResetRef)) === null || _b === void 0 ? void 0 : _b.$el;
                const zoomOutTarget = (_c = $(zoomOutRef)) === null || _c === void 0 ? void 0 : _c.$el;
                let width = 0;
                let height = 0;
                if (zoomInTarget !== void 0) {
                    const zoomInClientRect = zoomInTarget.getBoundingClientRect();
                    if (props.direction === 'horizontal') {
                        width += zoomInClientRect.width;
                        height = zoomInClientRect.height > height ? zoomInClientRect.height : height;
                    }
                    else {
                        height += zoomInClientRect.height;
                        width = zoomInClientRect.width > width ? zoomInClientRect.width : width;
                    }
                }
                if (zoomResetTarget !== void 0) {
                    const zoomResetClientRect = zoomResetTarget.getBoundingClientRect();
                    if (props.direction === 'horizontal') {
                        width += zoomResetClientRect.width;
                        height = zoomResetClientRect.height > height ? zoomResetClientRect.height : height;
                    }
                    else {
                        height += zoomResetClientRect.height;
                        width = zoomResetClientRect.width > width ? zoomResetClientRect.width : width;
                    }
                }
                if (zoomOutTarget !== void 0) {
                    const zoomOutClientRect = zoomOutTarget.getBoundingClientRect();
                    if (props.direction === 'horizontal') {
                        width += zoomOutClientRect.width;
                        height = zoomOutClientRect.height > height ? zoomOutClientRect.height : height;
                    }
                    else {
                        height += zoomOutClientRect.height;
                        width = zoomOutClientRect.width > width ? zoomOutClientRect.width : width;
                    }
                }
                css.width = `${width + 4}px`;
                css.height = `${height + 4}px`;
                const side = positionState.attach.value;
                if ((side.bottom || side.top) && !side.left && !side.right) {
                    css.left = '50%';
                    css.transform = 'translate(-50%, 0)';
                }
                if ((side.left || side.right) && !side.top && !side.bottom) {
                    css.top = '50%';
                    css.transform = 'translate(0, -50%)';
                }
            }
            Object.assign(rootStyle, css);
        };
        const getContent = (options, type) => {
            let btnRef = void 0;
            let tooltipRef = void 0;
            let tip = void 0;
            let onClick = void 0;
            if (type === 'zoomIn') {
                btnRef = zoomInRef;
                tooltipRef = zoomControlState.zoomInTooltipRef;
                tip = t('vc.navigation.zoomCotrol.zoomInTip');
                onClick = zoomControlState.zoomIn;
            }
            else if (type === 'zoomOut') {
                btnRef = zoomOutRef;
                tooltipRef = zoomControlState.zoomOutTooltipRef;
                tip = t('vc.navigation.zoomCotrol.zoomOutTip');
                onClick = zoomControlState.zoomOut;
            }
            else if (type === 'zoomReset') {
                btnRef = zoomResetRef;
                tooltipRef = zoomControlState.resetTooltipRef;
                tip = t('vc.navigation.zoomCotrol.zoomResetTip');
                onClick = zoomControlState.zoomReset;
            }
            const inner = [];
            inner.push(h(VcIcon, {
                name: options.name,
                size: options.size
            }));
            inner.push(h('div', null, options.label));
            if (options.tooltip) {
                inner.push(h(VcTooltip, Object.assign({ ref: tooltipRef }, options.tooltip), () => h('strong', null, tip)));
            }
            else {
                inner.push(createCommentVNode('v-if'));
            }
            const content = h(VcBtn, {
                ref: btnRef,
                size: options.size,
                flat: options.flat,
                stack: options.stack,
                round: options.round,
                dense: true,
                style: { color: options.color, background: options.background },
                onClick: onClick
            }, () => hMergeSlot(ctx.slots.default, inner));
            return content;
        };
        Object.assign(instance.proxy, {
            createPromise: commonState.createPromise,
            load: commonState.load,
            unload: commonState.unload,
            reload: commonState.reload,
            getCesiumObject: () => instance.cesiumObject
        });
        return () => {
            if (canRender.value) {
                const children = [];
                children.push(h('li', null, getContent(zoomInOptions.value, 'zoomIn')));
                if (props.enableResetButton) {
                    children.push(h('li', null, getContent(zoomResetOptions.value, 'zoomReset')));
                }
                else {
                    children.push(createCommentVNode('v-if'));
                }
                children.push(h('li', null, getContent(zoomOutOptions.value, 'zoomOut')));
                return h('div', {
                    ref: rootRef,
                    class: 'vc-zoom-control ' + positionState.classes.value,
                    style: rootStyle
                }, h('ul', {
                    class: 'vc-list'
                }, children));
            }
            else {
                return createCommentVNode('v-if');
            }
        };
    }
});

const VcPrintView = defineComponent({
    name: 'VcPrintView',
    props: {
        options: Object
    },
    setup(props) {
        const ready = ref(false);
        const printingStarted = ref(false);
        const instance = getCurrentInstance();
        instance.cesiumClass = 'VcPrintView';
        const checkForImagesReady = () => {
            if (ready.value) {
                return;
            }
            const imageTags = props.options.printWindow.document.getElementsByTagName('img');
            if (imageTags.length === 0) {
                return;
            }
            let allImagesReady = true;
            for (let i = 0; allImagesReady && i < imageTags.length; ++i) {
                allImagesReady = imageTags[i].complete;
            }
            if (allImagesReady) {
                stopCheckingForImages();
                ready.value = allImagesReady;
                if (ready.value && !printingStarted.value) {
                    if (props.options.readyCallback) {
                        props.options.readyCallback(props.options.printWindow);
                    }
                    printingStarted.value = true;
                }
            }
        };
        let _stopCheckingForImages = undefined;
        const stopCheckingForImages = () => {
            if (_stopCheckingForImages) {
                _stopCheckingForImages();
            }
        };
        onMounted(() => {
            const printWindow = props.options.printWindow;
            const mainWindow = window;
            const printWindowIntervalId = printWindow === null || printWindow === void 0 ? void 0 : printWindow.setInterval(checkForImagesReady, 200);
            const mainWindowIntervalId = mainWindow.setInterval(checkForImagesReady, 200);
            _stopCheckingForImages = () => {
                printWindow.clearInterval(printWindowIntervalId);
                mainWindow.clearInterval(mainWindowIntervalId);
                _stopCheckingForImages = undefined;
            };
        });
        onUnmounted(() => {
            stopCheckingForImages();
        });
        return {
            t
        };
    }
});

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, [
    createVNode("p", null, [
      createVNode("img", {
        src: _ctx.options?.image,
        alt: _ctx.t('vc.navigation.screenshot'),
        class: "vc-map-image"
      }, null, 8 /* PROPS */, ["src", "alt"])
    ]),
    (_ctx.options.credits.length && _ctx.options.showCredit)
      ? (openBlock(), createBlock("h1", _hoisted_1, toDisplayString(_ctx.t('vc.navigation.credit')), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    (_ctx.options.credits.length && _ctx.options.showCredit)
      ? (openBlock(), createBlock("ul", _hoisted_2, [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.credits, (credit, index) => {
            return (openBlock(), createBlock("li", {
              key: 'credit' + index,
              innerHTML: credit
            }, null, 8 /* PROPS */, ["innerHTML"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ]))
}

VcPrintView.render = render;
VcPrintView.__file = "packages/controls/print/print-view.vue";

const styles = `
  .background {
    width: 100%;
    fill: rgba(255, 255, 255, 1.0);
  }

  .map-image {
    max-width: 95vw;
    max-height: 95vh;
  }

  .layer-legends {
    display: inline;
    float: left;
    padding-left: 20px;
    padding-right: 20px;
  }

  .layer-title {
    font-weight: bold;
  }

  h1, h2, h3 {
    clear: both;
  }
`;
const createPrintView = options => {
    const { printWindow = window.open(), closeCallback } = options;
    if (closeCallback) {
        printWindow.addEventListener('unload', () => {
            console.log('unload');
            closeCallback(printWindow);
        });
    }
    printWindow.document.open();
    printWindow.document.close();
    printWindow.document.head.innerHTML = `
    <meta charset="UTF-8">
    <title>${t('vc.navigation.print.printViewTitle')}</title>
    <style>${styles}</style>
    `;
    printWindow.document.body.innerHTML = '<div id="print"></div>';
    options.printWindow = options.printWindow || printWindow;
    const printViewProps = {
        options
    };
    const app = createApp(VcPrintView, printViewProps);
    app.mount(printWindow.document.getElementById('print'));
};

var printDefaultProps = Object.assign(Object.assign({ showCredit: {
        type: Boolean,
        default: true
    }, printAutomatically: {
        type: Boolean,
        default: false
    }, showPrintView: {
        type: Boolean,
        default: true
    }, downloadAutomatically: {
        type: Boolean,
        default: false
    } }, positionProps), { name: {
        type: String,
        default: 'vc-icons-capture'
    }, size: {
        type: String,
        default: '24px'
    }, color: {
        type: String,
        default: '#3f4854'
    }, background: {
        type: String,
        default: '#fff'
    }, round: {
        type: Boolean,
        default: true
    }, flat: {
        type: Boolean,
        default: false
    }, label: String, stack: {
        type: Boolean,
        default: false
    }, tooltip: {
        type: [Boolean, Object],
        default: () => ({
            delay: 500,
            anchor: 'bottom middle',
            offset: [0, 20]
        })
    } });

function printWindow(windowToPrint) {
    const { when } = Cesium;
    const deferred = when.defer();
    let printInProgressCount = 0;
    const timeout = setTimeout(function () {
        deferred.reject(false);
    }, 10000);
    function cancelTimeout() {
        clearTimeout(timeout);
    }
    function resolveIfZero() {
        if (printInProgressCount <= 0) {
            deferred.resolve();
        }
    }
    if (windowToPrint.matchMedia) {
        windowToPrint.matchMedia('print').addListener(function (evt) {
            cancelTimeout();
            if (evt.matches) {
                ++printInProgressCount;
            }
            else {
                --printInProgressCount;
                resolveIfZero();
            }
        });
    }
    windowToPrint.onbeforeprint = function () {
        cancelTimeout();
        ++printInProgressCount;
    };
    windowToPrint.onafterprint = function () {
        cancelTimeout();
        --printInProgressCount;
        resolveIfZero();
    };
    const result = windowToPrint.document.execCommand('print', true, null);
    if (!result) {
        windowToPrint.print();
    }
    return deferred.promise;
}

var VcPrint = defineComponent({
    name: 'VcPrint',
    props: printDefaultProps,
    emits: ['beforeLoad', 'ready', 'destroyed', 'printEvt'],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'VcPrint';
        instance.cesiumEvents = [];
        const commonState = useCommon(props, ctx, instance);
        if (commonState === void 0) {
            return;
        }
        const { $services } = commonState;
        const rootRef = ref(null);
        const tooltipRef = ref(null);
        const btnRef = ref(null);
        const positionState = usePosition(props, $services);
        const creatingPrintView = ref(false);
        const parentInstance = getVcParentInstance(instance);
        const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation';
        const canRender = ref(hasVcNavigation);
        const rootStyle = reactive({});
        watch(() => props, val => {
            nextTick(() => {
                if (!instance.mounted) {
                    return;
                }
                updateRootStyle();
            });
        }, {
            deep: true
        });
        instance.createCesiumObject = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                canRender.value = true;
                nextTick(() => {
                    const { viewer } = $services;
                    if (!hasVcNavigation) {
                        const viewerElement = viewer._element;
                        viewerElement.appendChild($(rootRef));
                        resolve($(rootRef));
                    }
                    else {
                        resolve($(rootRef));
                    }
                });
            });
        });
        instance.mount = () => __awaiter(this, void 0, void 0, function* () {
            updateRootStyle();
            const { viewer } = $services;
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'mounted',
                target: $(rootRef)
            });
            return true;
        });
        instance.unmount = () => __awaiter(this, void 0, void 0, function* () {
            const viewerElement = $services.viewer._element;
            if (!hasVcNavigation) {
                viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
            }
            const { viewer } = $services;
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'unmounted',
                target: $(rootRef)
            });
            return true;
        });
        const updateRootStyle = () => {
            var _a;
            const css = positionState.style.value;
            rootStyle.left = css.left;
            rootStyle.top = css.top;
            rootStyle.transform = css.transform;
            if (!hasVcNavigation) {
                const side = positionState.attach.value;
                const btnTarget = (_a = $(btnRef)) === null || _a === void 0 ? void 0 : _a.$el;
                if (btnTarget !== void 0) {
                    if ((side.bottom || side.top) && !side.left && !side.right) {
                        css.left = '50%';
                        css.transform = 'translate(-50%, 0)';
                    }
                    if ((side.left || side.right) && !side.top && !side.bottom) {
                        css.top = '50%';
                        css.transform = 'translate(0, -50%)';
                    }
                }
            }
            Object.assign(rootStyle, css);
        };
        const onHandleClick = () => {
            var _a;
            (_a = $(tooltipRef)) === null || _a === void 0 ? void 0 : _a.hide();
            const { viewer } = $services;
            captureScreenshot(viewer).then(imgSrc => {
                if (props.downloadAutomatically) {
                    const link = document.createElement('a');
                    link.download = t('vc.navigation.screenshot') || '场景截图';
                    link.style.display = 'none';
                    link.href = imgSrc;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                if (props.printAutomatically || props.showPrintView) {
                    console.log(props.showPrintView, props.printAutomatically);
                    if (props.showPrintView) {
                        showPrintView(imgSrc);
                    }
                    else if (props.printAutomatically) {
                        print(imgSrc);
                    }
                }
                const listener = getInstanceListener(instance, 'printEvt');
                listener && ctx.emit('printEvt', {
                    type: 'capture',
                    image: imgSrc,
                    status: 'complete'
                });
            });
        };
        const print = image => {
            create(true, true, image);
        };
        const showPrintView = image => {
            create(false, false, image);
        };
        const create = (hidden, printAutomatically, image) => {
            creatingPrintView.value = true;
            let iframe;
            if (hidden) {
                iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
            }
            const { viewer } = $services;
            createPrintView({
                image,
                showCredit: props.showCredit,
                credits: getCredits(viewer),
                printWindow: iframe ? iframe.contentWindow : undefined,
                readyCallback: windowToPrint => {
                    if (printAutomatically) {
                        printWindow(windowToPrint)
                            .otherwise(e => {
                            console.log(e);
                        })
                            .always(() => {
                            if (iframe) {
                                document.body.removeChild(iframe);
                            }
                            if (hidden) {
                                creatingPrintView.value = false;
                            }
                        });
                    }
                },
                closeCallback: windowToPrint => {
                    if (hidden) {
                        creatingPrintView.value = false;
                    }
                }
            });
            if (!hidden) {
                creatingPrintView.value = false;
            }
        };
        const getCredits = viewer => {
            const credits = viewer.scene.frameState.creditDisplay._currentFrameCredits.screenCredits.values.concat(viewer.scene.frameState.creditDisplay._currentFrameCredits.lightboxCredits.values);
            return credits.map(credit => credit.html);
        };
        const onTooltipBeforeShow = e => {
            if (creatingPrintView.value) {
                e.cancel = true;
            }
        };
        Object.assign(instance.proxy, {
            createPromise: commonState.createPromise,
            load: commonState.load,
            unload: commonState.unload,
            reload: commonState.reload,
            getCesiumObject: () => instance.cesiumObject
        });
        return () => {
            if (canRender.value) {
                const inner = [];
                inner.push(h(VcIcon, {
                    name: props.name,
                    size: props.size
                }));
                inner.push(h('div', null, props.label));
                if (props.tooltip) {
                    inner.push(h(VcTooltip, Object.assign({ ref: tooltipRef, onBeforeShow: onTooltipBeforeShow }, props.tooltip), () => h('strong', null, t('vc.navigation.print.printTip'))));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                const child = [
                    h(VcBtn, {
                        ref: btnRef,
                        size: props.size,
                        disabled: creatingPrintView.value,
                        flat: props.flat,
                        stack: props.stack,
                        round: props.round,
                        style: { color: props.color, background: props.background },
                        dense: true,
                        onClick: onHandleClick
                    }, () => inner)
                ];
                return h('div', {
                    ref: rootRef,
                    class: 'vc-print ' + positionState.classes.value,
                    style: rootStyle
                }, child);
            }
            else {
                return createCommentVNode('v-if');
            }
        };
    }
});

var locationDefaultProps = Object.assign(Object.assign({ geolocation: {
        type: Object,
        default: () => ({
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        })
    }, amap: Object, id: {
        type: String,
        default: t('vc.navigation.myLocation.centreMap')
    }, pointColor: {
        type: [Array, Object, String],
        default: '#08ABD5'
    }, pixelSize: {
        type: Number,
        default: 25 / 2
    }, outlineWidth: {
        type: Number,
        default: 3
    }, outlineColor: {
        type: [Array, Object, String],
        default: '#ffffff'
    }, level: {
        type: Number,
        default: 6
    }, duration: {
        type: Number,
        default: 3
    }, factor: {
        type: Number,
        default: 0.01
    }, customAPI: Function, description: Function }, positionProps), { name: {
        type: String,
        default: 'vc-icons-geolocation'
    }, size: {
        type: String,
        default: '24px'
    }, color: {
        type: String,
        default: '#3f4854'
    }, background: {
        type: String,
        default: '#fff'
    }, round: {
        type: Boolean,
        default: true
    }, flat: {
        type: Boolean,
        default: false
    }, label: String, stack: {
        type: Boolean,
        default: false
    }, tooltip: {
        type: [Boolean, Object],
        default: () => ({
            delay: 500,
            anchor: 'bottom middle',
            offset: [0, 20]
        })
    }, loadingType: {
        type: String,
        default: 'puff'
    } });

var VcMyLocation = defineComponent({
    name: 'VcMyLocation',
    props: locationDefaultProps,
    emits: ['beforeLoad', 'ready', 'destroyed', 'locationEvt'],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'VcMyLocation';
        instance.cesiumEvents = [];
        const commonState = useCommon(props, ctx, instance);
        if (commonState === void 0) {
            return;
        }
        const { $services } = commonState;
        const rootRef = ref(null);
        const tooltipRef = ref(null);
        const btnRef = ref(null);
        const positioning = ref(false);
        const positionState = usePosition(props, $services);
        const parentInstance = getVcParentInstance(instance);
        const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation';
        const canRender = ref(hasVcNavigation);
        const rootStyle = reactive({});
        let datasource = undefined;
        let amapGeolocation = undefined;
        watch(() => props, val => {
            nextTick(() => {
                if (!instance.mounted) {
                    return;
                }
                updateRootStyle();
            });
        }, {
            deep: true
        });
        const myLocationTip = computed(() => {
            return positioning.value ? t('vc.navigation.myLocation.positioning') : t('vc.navigation.myLocation.myLocationTip');
        });
        instance.createCesiumObject = () => __awaiter(this, void 0, void 0, function* () {
            canRender.value = true;
            const { viewer } = $services;
            const { CustomDataSource } = Cesium;
            const locationDsArray = viewer.dataSources.getByName('__vc-myLocation__');
            if (locationDsArray.length) {
                datasource = locationDsArray[0];
            }
            else {
                viewer.dataSources.add(new CustomDataSource('__vc-myLocation__')).then(ds => {
                    datasource = ds;
                });
            }
            let promiseLoadAmap = undefined;
            if (props.amap && props.amap.key) {
                const options = props.amap.options;
                promiseLoadAmap = new Promise((resolve, reject) => {
                    AMapLoader.load({
                        key: props.amap.key,
                        version: props.amap.version,
                        plugins: ['AMap.Geolocation']
                    })
                        .then(Amap => {
                        amapGeolocation = new Amap.Geolocation(options);
                        resolve(amapGeolocation);
                    })
                        .catch(e => {
                        reject(e);
                    });
                });
            }
            const promiseAppend = new Promise((resolve, reject) => {
                nextTick(() => {
                    if (!hasVcNavigation) {
                        const viewerElement = $services.viewer._element;
                        viewerElement.appendChild($(rootRef));
                        resolve($(rootRef));
                    }
                    else {
                        resolve($(rootRef));
                    }
                });
            });
            Promise.all([promiseAppend, promiseLoadAmap]).then(e => {
                return e[0];
            });
        });
        instance.mount = () => __awaiter(this, void 0, void 0, function* () {
            updateRootStyle();
            const { viewer } = $services;
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'mounted',
                target: $(rootRef)
            });
            return true;
        });
        instance.unmount = () => __awaiter(this, void 0, void 0, function* () {
            const { viewer } = $services;
            if (amapGeolocation) {
                const scripts = document.getElementsByTagName('script');
                const removeScripts = [];
                for (const script of scripts) {
                    if (script.src.indexOf('/webapi.amap.com/maps') > -1) {
                        removeScripts.push(script);
                    }
                }
                removeScripts.forEach(script => {
                    document.getElementsByTagName('body')[0].removeChild(script);
                });
            }
            const viewerElement = $services.viewer._element;
            if (!hasVcNavigation) {
                viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
            }
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'unmounted',
                target: $(rootRef)
            });
            return viewer.dataSources.remove(datasource, true);
        });
        const updateRootStyle = () => {
            var _a;
            const css = positionState.style.value;
            rootStyle.left = css.left;
            rootStyle.top = css.top;
            rootStyle.transform = css.transform;
            if (!hasVcNavigation) {
                const side = positionState.attach.value;
                const btnTarget = (_a = $(btnRef)) === null || _a === void 0 ? void 0 : _a.$el;
                if (btnTarget !== void 0) {
                    btnTarget.getBoundingClientRect();
                    if ((side.bottom || side.top) && !side.left && !side.right) {
                        css.left = '50%';
                        css.transform = 'translate(-50%, 0)';
                    }
                    if ((side.left || side.right) && !side.top && !side.bottom) {
                        css.top = '50%';
                        css.transform = 'translate(0, -50%)';
                    }
                }
            }
            Object.assign(rootStyle, css);
        };
        const onHandleClick = () => {
            var _a;
            (_a = $(tooltipRef)) === null || _a === void 0 ? void 0 : _a.hide();
            positioning.value = true;
            if (isFunction(props.customAPI)) {
                const position = props.customAPI(handleLocationError);
                zoomToMyLocation(position);
            }
            else if (amapGeolocation && props.amap && props.amap.key) {
                amapGeolocation.getCurrentPosition((status, result) => {
                    if (status === 'complete') {
                        let position = [result.position.lng, result.position.lat];
                        if (props.amap.transformToWGS84) {
                            position = gcj02towgs84(position[0], position[1]);
                        }
                        zoomToMyLocation({
                            lng: position[0],
                            lat: position[1],
                            address: result.formattedAddress
                        }, result);
                    }
                    else {
                        handleLocationError(t('vc.navigation.myLocation.fail'));
                    }
                });
            }
            else if (props.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    zoomToMyLocation({
                        lng: position.coords.longitude,
                        lat: position.coords.latitude
                    }, position);
                }, handleLocationError, {
                    enableHighAccuracy: props.geolocation.enableHighAccuracy,
                    timeout: props.geolocation.timeout,
                    maximumAge: props.geolocation.maximumAge
                });
            }
            else {
                handleLocationError(t('vc.navigation.myLocation.fail'));
            }
        };
        const zoomToMyLocation = (position, detail) => {
            var _a;
            const longitude = position.lng;
            const latitude = position.lat;
            const address = position.address;
            const { Cartesian3, Rectangle, Ellipsoid, sampleTerrain } = Cesium;
            const { viewer } = $services;
            datasource.entities.removeAll();
            const myPositionEntity = datasource.entities.add({
                id: props.id,
                position: Cartesian3.fromDegrees(longitude, latitude),
                point: {
                    color: makeColor(props.pointColor),
                    pixelSize: props.pixelSize,
                    outlineWidth: props.outlineWidth,
                    outlineColor: makeColor(props.outlineColor)
                },
                properties: Object.assign({}, detail),
                description: ((_a = props.description) === null || _a === void 0 ? void 0 : _a.call(position, detail)) ||
                    describeWithoutUnderscores({
                        [t('vc.navigation.myLocation.lng')]: longitude,
                        [t('vc.navigation.myLocation.lat')]: latitude,
                        [t('vc.navigation.myLocation.address')]: address
                    })
            });
            const listener = getInstanceListener(instance, 'locationEvt');
            listener &&
                ctx.emit('locationEvt', {
                    type: 'myLocation',
                    position,
                    detail,
                    entity: myPositionEntity
                });
            const factor = props.factor;
            const rectangle = Rectangle.fromDegrees(longitude - factor, latitude - factor, longitude + factor, latitude + factor);
            const camera = viewer.scene.camera;
            const destinationCartesian = camera.getRectangleCameraCoordinates(rectangle);
            const destination = Ellipsoid.WGS84.cartesianToCartographic(destinationCartesian);
            const terrainProvider = viewer.scene.globe.terrainProvider;
            const level = props.level;
            const positions = [Rectangle.center(rectangle)];
            return sampleTerrain(terrainProvider, level, positions).then(function (results) {
                const finalDestinationCartographic = {
                    longitude: destination.longitude,
                    latitude: destination.latitude,
                    height: destination.height + results[0].height
                };
                const finalDestination = Ellipsoid.WGS84.cartographicToCartesian(finalDestinationCartographic);
                listener &&
                    ctx.emit('locationEvt', {
                        type: 'zoomIn',
                        camera: viewer.camera,
                        status: 'start'
                    });
                camera.flyTo({
                    duration: props.duration,
                    destination: finalDestination,
                    complete: () => {
                        positioning.value = false;
                        listener &&
                            ctx.emit('locationEvt', {
                                type: 'zoomIn',
                                camera: viewer.camera,
                                status: 'complete'
                            });
                    },
                    cancel: () => {
                        positioning.value = false;
                        listener &&
                            ctx.emit('locationEvt', {
                                type: 'zoomIn',
                                camera: viewer.camera,
                                status: 'cancel'
                            });
                    }
                });
            });
        };
        const describeWithoutUnderscores = (properties, nameProperty) => {
            let html = '';
            if (properties instanceof Cesium.PropertyBag) {
                properties = properties.getValue(Cesium.JulianDate.now());
            }
            for (let key in properties) {
                if (Object.prototype.hasOwnProperty.call(properties, key)) {
                    if (key === nameProperty) {
                        continue;
                    }
                    let value = properties[key];
                    if (typeof value === 'object') {
                        value = describeWithoutUnderscores(value);
                    }
                    key = key.replace(/_/g, ' ');
                    if (Cesium.defined(value)) {
                        html += '<tr><th>' + key + '</th><td>' + value + '</td></tr>';
                    }
                }
            }
            if (html.length > 0) {
                html = '<table class="cesium-infoBox-defaultTable"><tbody>' + html + '</tbody></table>';
            }
            return html;
        };
        const handleLocationError = err => {
            positioning.value = false;
        };
        const getLoadingCmp = () => {
            switch (props.loadingType) {
                case 'bars':
                    return VcSpinnerBars;
                case 'ios':
                    return VcSpinnerIos;
                case 'orbit':
                    return VcSpinnerOrbit;
                case 'oval':
                    return VcSpinnerOval;
                case 'puff':
                    return VcSpinnerPuff;
                case 'tail':
                    return VcSpinnerTail;
            }
        };
        Object.assign(instance.proxy, {
            createPromise: commonState.createPromise,
            load: commonState.load,
            unload: commonState.unload,
            reload: commonState.reload,
            getCesiumObject: () => instance.cesiumObject
        });
        return () => {
            if (canRender.value) {
                const inner = [];
                inner.push(h(VcIcon, {
                    name: props.name,
                    size: props.size
                }));
                inner.push(h('div', null, props.label));
                if (props.tooltip) {
                    inner.push(h(VcTooltip, Object.assign({ ref: tooltipRef }, props.tooltip), () => h('strong', null, myLocationTip.value)));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                return h('div', {
                    ref: rootRef,
                    class: 'vc-my-location ' + positionState.classes.value,
                    style: rootStyle
                }, [
                    h(VcBtn, {
                        ref: btnRef,
                        size: props.size,
                        flat: props.flat,
                        stack: props.stack,
                        round: props.round,
                        loading: positioning.value,
                        dense: true,
                        style: { color: props.color, background: props.background },
                        onClick: onHandleClick
                    }, {
                        default: () => inner,
                        loading: () => h(getLoadingCmp())
                    })
                ]);
            }
            else {
                return createCommentVNode('v-if');
            }
        };
    }
});

function prettifyCoordinates(longitude, latitude, options) {
    const result = {
        latitude: '',
        longitude: '',
        elevation: ''
    };
    const { defaultValue, defined } = Cesium;
    const optionsDefaulted = defaultValue(options, {});
    const digits = defaultValue(optionsDefaulted.digits, 5);
    result.latitude = Math.abs(latitude).toFixed(digits) + '°' + (latitude < 0.0 ? 'S' : 'N');
    result.longitude = Math.abs(longitude).toFixed(digits) + '°' + (longitude < 0.0 ? 'W' : 'E');
    if (defined(optionsDefaulted.height)) {
        result.elevation =
            Math.round(optionsDefaulted.height) +
                (defined(optionsDefaulted.errorBar) ? '±' + Math.round(optionsDefaulted.errorBar) : '') +
                'm';
    }
    else {
        result.elevation = undefined;
    }
    return result;
}

function prettifyProjection(longitude, latitude, proj4Projection, proj4longlat, projectionUnits) {
    const zone = 1 + Math.floor((longitude + 180) / 6);
    const projection = proj4Projection + ' +zone=' + zone + (latitude < 0 ? ' +south' : '');
    const projPoint = proj4(proj4longlat, projection, [longitude, latitude]);
    return {
        utmZone: zone + (latitude < 0.0 ? 'S' : 'N'),
        north: projPoint[1].toFixed(2) + projectionUnits,
        east: projPoint[0].toFixed(2) + projectionUnits
    };
}

class EarthGravityModel1996 {
    constructor(gridFileUrl) {
        this.gridFileUrl = gridFileUrl;
        this.data = undefined;
        this.minimumHeight = -106.99;
        this.maximumHeight = 85.39;
    }
    isSupported() {
        return typeof Int16Array !== 'undefined' && typeof Uint8Array !== 'undefined';
    }
    getHeight(longitude, latitude) {
        return getHeightData(this).then(function (data) {
            return getHeightFromData(data, longitude, latitude);
        });
    }
    getHeights(cartographicArray) {
        return getHeightData(this).then(function (data) {
            for (let i = 0; i < cartographicArray.length; ++i) {
                const cartographic = cartographicArray[i];
                cartographic.height = getHeightFromData(data, cartographic.longitude, cartographic.latitude);
            }
            return cartographicArray;
        });
    }
}
function getHeightData(model) {
    const { defined, when } = Cesium;
    if (!defined(model.data)) {
        model.data = loadArrayBuffer(model.gridFileUrl);
    }
    return when(model.data, function (data) {
        if (!(model.data instanceof Int16Array)) {
            const byteView = new Uint8Array(data);
            for (let k = 0; k < byteView.length; k += 2) {
                const tmp = byteView[k];
                byteView[k] = byteView[k + 1];
                byteView[k + 1] = tmp;
            }
            model.data = new Int16Array(data);
        }
        return model.data;
    });
}
function getHeightFromData(data, longitude, latitude) {
    const { Math: CesiumMath } = Cesium;
    let recordIndex = (720 * (CesiumMath.PI_OVER_TWO - latitude)) / Math.PI;
    if (recordIndex < 0) {
        recordIndex = 0;
    }
    else if (recordIndex > 720) {
        recordIndex = 720;
    }
    longitude = CesiumMath.zeroToTwoPi(longitude);
    let heightIndex = (1440 * longitude) / CesiumMath.TWO_PI;
    if (heightIndex < 0) {
        heightIndex = 0;
    }
    else if (heightIndex > 1440) {
        heightIndex = 1440;
    }
    const i = heightIndex | 0;
    const j = recordIndex | 0;
    const xMinusX1 = heightIndex - i;
    const yMinusY1 = recordIndex - j;
    const x2MinusX = 1.0 - xMinusX1;
    const y2MinusY = 1.0 - yMinusY1;
    const f11 = getHeightValue(data, j, i);
    const f21 = getHeightValue(data, j, i + 1);
    const f12 = getHeightValue(data, j + 1, i);
    const f22 = getHeightValue(data, j + 1, i + 1);
    return (f11 * x2MinusX * y2MinusY + f21 * xMinusX1 * y2MinusY + f12 * x2MinusX * yMinusY1 + f22 * xMinusX1 * yMinusY1) / 100.0;
}
function getHeightValue(data, recordIndex, heightIndex) {
    if (recordIndex > 720) {
        recordIndex = 720;
    }
    else if (recordIndex < 0) {
        recordIndex = 0;
    }
    if (heightIndex > 1439) {
        heightIndex -= 1440;
    }
    else if (heightIndex < 0) {
        heightIndex += 1440;
    }
    return data[recordIndex * 1440 + heightIndex];
}
function loadArrayBuffer(urlOrResource) {
    const { Resource } = Cesium;
    const resource = Resource.createIfNeeded(urlOrResource);
    return resource.fetchArrayBuffer();
}

class MouseCoords {
    constructor(options) {
        const { Cartographic, knockout } = Cesium;
        const gridFileUrl = options.gridFileUrl;
        gridFileUrl && (this.geoidModel = new EarthGravityModel1996(gridFileUrl));
        this.proj4Projection = '+proj=utm +ellps=GRS80 +units=m +no_defs';
        this.projectionUnits = 'm';
        this.proj4longlat = '+proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees +no_defs';
        this.lastHeightSamplePosition = new Cartographic();
        this.accurateSamplingDebounceTime = 250;
        this.tileRequestInFlight = undefined;
        this.elevation = undefined;
        this.utmZone = undefined;
        this.latitude = undefined;
        this.longitude = undefined;
        this.north = undefined;
        this.east = undefined;
        this.useProjection = false;
        this.debounceSampleAccurateHeight = debounce(this.sampleAccurateHeight, this.accurateSamplingDebounceTime);
        knockout.track(this, ['elevation', 'utmZone', 'latitude', 'longitude', 'north', 'east', 'useProjection']);
    }
    toggleUseProjection() {
        this.useProjection = !this.useProjection;
    }
    updateCoordinatesFromCesium(viewer, position) {
        const { Cartographic, defined, EllipsoidTerrainProvider, Intersections2D, SceneMode } = Cesium;
        const scene = viewer.scene;
        const camera = scene.camera;
        const pickRay = camera.getPickRay(position);
        const globe = scene.globe;
        const pickedTriangle = globe.pickTriangle(pickRay, scene);
        if (defined(pickedTriangle)) {
            const ellipsoid = globe.ellipsoid;
            const v0 = ellipsoid.cartesianToCartographic(pickedTriangle.v0);
            const v1 = ellipsoid.cartesianToCartographic(pickedTriangle.v1);
            const v2 = ellipsoid.cartesianToCartographic(pickedTriangle.v2);
            const intersection = ellipsoid.cartesianToCartographic(scene.mode === SceneMode.SCENE3D ? pickedTriangle.intersection : scene.globe.pick(pickRay, scene));
            let errorBar;
            if (globe.terrainProvider instanceof EllipsoidTerrainProvider) {
                intersection.height = undefined;
            }
            else {
                const barycentric = Intersections2D.computeBarycentricCoordinates(intersection.longitude, intersection.latitude, v0.longitude, v0.latitude, v1.longitude, v1.latitude, v2.longitude, v2.latitude);
                if (barycentric.x >= -1e-15 && barycentric.y >= -1e-15 && barycentric.z >= -1e-15) {
                    const height = barycentric.x * v0.height + barycentric.y * v1.height + barycentric.z * v2.height;
                    intersection.height = height;
                }
                const geometricError = globe.terrainProvider.getLevelMaximumGeometricError(pickedTriangle.tile.level);
                const approximateHeight = intersection.height;
                const minHeight = Math.max(pickedTriangle.tile.data.tileBoundingRegion.minimumHeight, approximateHeight - geometricError);
                const maxHeight = Math.min(pickedTriangle.tile.data.tileBoundingRegion.maximumHeight, approximateHeight + geometricError);
                const minHeightGeoid = minHeight - (this.geoidModel ? this.geoidModel.minimumHeight : 0.0);
                const maxHeightGeoid = maxHeight + (this.geoidModel ? this.geoidModel.maximumHeight : 0.0);
                errorBar = Math.max(Math.abs(approximateHeight - minHeightGeoid), Math.abs(maxHeightGeoid - approximateHeight));
            }
            Cartographic.clone(intersection, this.lastHeightSamplePosition);
            const terrainProvider = globe.terrainProvider;
            this.cartographicToFields(intersection, errorBar);
            if (!(terrainProvider instanceof EllipsoidTerrainProvider)) {
                this.debounceSampleAccurateHeight(terrainProvider, intersection);
            }
        }
        else {
            this.elevation = undefined;
            this.utmZone = undefined;
            this.latitude = undefined;
            this.longitude = undefined;
            this.north = undefined;
            this.east = undefined;
        }
    }
    cartographicToFields(coordinates, errorBar) {
        const { Math: CesiumMath } = Cesium;
        const latitude = CesiumMath.toDegrees(coordinates.latitude);
        const longitude = CesiumMath.toDegrees(coordinates.longitude);
        if (this.useProjection) {
            const prettyProjection = prettifyProjection(longitude, latitude, this.proj4Projection, this.proj4longlat, this.projectionUnits);
            this.utmZone = prettyProjection.utmZone;
            this.north = prettyProjection.north;
            this.east = prettyProjection.east;
        }
        const prettyCoordinate = prettifyCoordinates(longitude, latitude, {
            height: coordinates.height,
            errorBar: errorBar
        });
        this.latitude = prettyCoordinate.latitude;
        this.longitude = prettyCoordinate.longitude;
        this.elevation = prettyCoordinate.elevation;
    }
    sampleAccurateHeight(terrainProvider, position) {
        const { Cartographic, sampleTerrainMostDetailed, when } = Cesium;
        if (this.tileRequestInFlight) {
            this.debounceSampleAccurateHeight.cancel();
            this.debounceSampleAccurateHeight(terrainProvider, position);
            return;
        }
        const positionWithHeight = Cartographic.clone(position);
        const geoidHeightPromise = this.geoidModel ? this.geoidModel.getHeight(position.longitude, position.latitude) : undefined;
        const terrainPromise = sampleTerrainMostDetailed(terrainProvider, [positionWithHeight]);
        this.tileRequestInFlight = when.all([geoidHeightPromise, terrainPromise], result => {
            const geoidHeight = result[0] || 0.0;
            this.tileRequestInFlight = undefined;
            if (Cartographic.equals(position, this.lastHeightSamplePosition)) {
                position.height = positionWithHeight.height - geoidHeight;
                this.cartographicToFields(position);
            }
        }, () => {
            this.tileRequestInFlight = undefined;
        });
    }
}
const scratchArray = [];
const scratchSphereIntersectionResult = {
    start: 0.0,
    stop: 0.0
};
const scratchV0 = {};
const scratchV1 = {};
const scratchV2 = {};
function extendForMouseCoords() {
    const { Globe, GlobeSurfaceTile, BoundingSphere, defaultValue, Cartesian3, defined, DeveloperError, IntersectionTests, SceneMode } = Cesium;
    Globe.prototype.pickTriangle =
        Globe.prototype.pickTriangle ||
            function (ray, scene, cullBackFaces, result) {
                if (!defined(ray)) {
                    throw new DeveloperError('ray is required');
                }
                if (!defined(scene)) {
                    throw new DeveloperError('scene is required');
                }
                cullBackFaces = defaultValue(cullBackFaces, true);
                const mode = scene.mode;
                const projection = scene.mapProjection;
                const sphereIntersections = scratchArray;
                sphereIntersections.length = 0;
                const tilesToRender = this._surface._tilesToRender;
                let length = tilesToRender.length;
                let tile;
                let i;
                for (i = 0; i < length; ++i) {
                    tile = tilesToRender[i];
                    const surfaceTile = tile.data;
                    if (!defined(surfaceTile)) {
                        continue;
                    }
                    const boundingVolume = surfaceTile.pickBoundingSphere;
                    if (mode !== SceneMode.SCENE3D) {
                        BoundingSphere.fromRectangleWithHeights2D(tile.rectangle, projection, surfaceTile.minimumHeight, surfaceTile.maximumHeight, boundingVolume);
                        Cartesian3.fromElements(boundingVolume.center.z, boundingVolume.center.x, boundingVolume.center.y, boundingVolume.center);
                    }
                    else {
                        BoundingSphere.clone(surfaceTile.boundingSphere3D, boundingVolume);
                    }
                    const boundingSphereIntersection = IntersectionTests.raySphere(ray, boundingVolume, scratchSphereIntersectionResult);
                    if (defined(boundingSphereIntersection)) {
                        sphereIntersections.push(tile);
                    }
                }
                sphereIntersections.sort(createComparePickTileFunction(ray.origin));
                let intersection;
                length = sphereIntersections.length;
                for (i = 0; i < length; ++i) {
                    intersection = sphereIntersections[i].data.pickTriangle(ray, scene.mode, scene.mapProjection, cullBackFaces, result);
                    if (defined(intersection)) {
                        intersection.tile = sphereIntersections[i];
                        break;
                    }
                }
                return intersection;
            };
    GlobeSurfaceTile.prototype.pickTriangle =
        GlobeSurfaceTile.prototype.pickTriangle ||
            function (ray, mode, projection, cullBackFaces) {
                const mesh = this.renderedMesh;
                if (!defined(mesh)) {
                    return undefined;
                }
                const vertices = mesh.vertices;
                const indices = mesh.indices;
                const encoding = mesh.encoding;
                const length = indices.length;
                for (let i = 0; i < length; i += 3) {
                    const i0 = indices[i];
                    const i1 = indices[i + 1];
                    const i2 = indices[i + 2];
                    const v0 = getPosition(encoding, mode, projection, vertices, i0, scratchV0);
                    const v1 = getPosition(encoding, mode, projection, vertices, i1, scratchV1);
                    const v2 = getPosition(encoding, mode, projection, vertices, i2, scratchV2);
                    const intersection = IntersectionTests.rayTriangle(ray, v0, v1, v2, cullBackFaces, new Cartesian3());
                    if (defined(intersection)) {
                        return {
                            intersection: intersection,
                            v0: v0,
                            v1: v1,
                            v2: v2
                        };
                    }
                }
                return undefined;
            };
}
function createComparePickTileFunction(rayOrigin) {
    const { BoundingSphere } = Cesium;
    return function (a, b) {
        const aDist = BoundingSphere.distanceSquaredTo(a.data.pickBoundingSphere, rayOrigin);
        const bDist = BoundingSphere.distanceSquaredTo(b.data.pickBoundingSphere, rayOrigin);
        return aDist - bDist;
    };
}
function getPosition(encoding, mode, projection, vertices, index, result) {
    encoding.decodePosition(vertices, index, result);
    const { Cartesian3, defined, SceneMode } = Cesium;
    if (defined(mode) && mode !== SceneMode.SCENE3D) {
        const ellipsoid = projection.ellipsoid;
        const positionCart = ellipsoid.cartesianToCartographic(result);
        projection.project(positionCart, result);
        Cartesian3.fromElements(result.z, result.x, result.y, result);
    }
    return result;
}

var locationbarDefaultProps = {
    gridFileUrl: {
        type: String,
        default: 'https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC'
    },
    position: {
        type: String,
        default: 'bottom-right',
        validator: (v) => ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'].includes(v)
    },
    offset: {
        type: Array,
        validator: v => v.length === 2
    },
    color: {
        type: String,
        default: '#fff'
    },
    background: {
        type: String,
        default: '#3f4854'
    },
    showCameraInfo: {
        type: Boolean,
        default: true
    },
    showMouseInfo: {
        type: Boolean,
        default: true
    },
    showPerformanceInfo: {
        type: Boolean,
        default: true
    },
    tooltip: {
        type: [Boolean, Object],
        default: () => ({
            delay: 1000,
            anchor: 'bottom middle',
            offset: [0, 20]
        })
    }
};

var VcLocationBar = defineComponent({
    name: 'VcLocationBar',
    props: locationbarDefaultProps,
    emits: ['beforeLoad', 'ready', 'destroyed', 'locationBarEvt'],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'VcLocationBar';
        instance.cesiumEvents = [];
        const commonState = useCommon(props, ctx, instance);
        if (commonState === void 0) {
            return;
        }
        const parentInstance = getVcParentInstance(instance);
        const { $services } = commonState;
        const rootRef = ref(null);
        const tooltipRef = ref(null);
        let lastMouseX = -1;
        let lastMouseY = -1;
        const cameraInfo = reactive({
            heading: 'NaN',
            pitch: 'NaN',
            roll: 'NaN',
            height: 'NaN',
            level: 'NaN'
        });
        const performanceInfo = reactive({
            fps: 'NaN',
            ms: 'NaN'
        });
        const mouseCoordsInfo = ref(null);
        const positionState = usePosition(props, $services);
        const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation';
        const canRender = ref(hasVcNavigation);
        const rootStyle = reactive({});
        watch(() => props, val => {
            nextTick(() => {
                if (!instance.mounted) {
                    return;
                }
                updateRootStyle();
            });
        }, {
            deep: true
        });
        instance.createCesiumObject = () => __awaiter(this, void 0, void 0, function* () {
            canRender.value = true;
            const { viewer } = $services;
            const viewerElement = viewer._element;
            if (props.showMouseInfo) {
                mouseCoordsInfo.value = new MouseCoords({ gridFileUrl: props.gridFileUrl });
                viewerElement.addEventListener('wheel', onMouseMove, false);
                viewerElement.addEventListener('mousemove', onMouseMove, false);
                viewerElement.addEventListener('touchmove', onMouseMove, false);
                extendForMouseCoords();
            }
            if (props.showCameraInfo) {
                viewer.camera.changed.addEventListener(onCameraChanged);
                onCameraChanged();
            }
            if (props.showPerformanceInfo) {
                viewer.scene.debugShowFramesPerSecond = true;
                viewer.scene.postRender.addEventListener(onScenePostRender);
            }
            return new Promise((resolve, reject) => {
                nextTick(() => {
                    var _a, _b, _c;
                    if (!hasVcNavigation) {
                        const viewerElement = viewer._element;
                        viewerElement.appendChild((_a = $(rootRef)) === null || _a === void 0 ? void 0 : _a.$el);
                        resolve((_b = $(rootRef)) === null || _b === void 0 ? void 0 : _b.$el);
                    }
                    else {
                        resolve((_c = $(rootRef)) === null || _c === void 0 ? void 0 : _c.$el);
                    }
                });
            });
        });
        instance.mount = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            updateRootStyle();
            const { viewer } = $services;
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'mounted',
                target: (_a = $(rootRef)) === null || _a === void 0 ? void 0 : _a.$el
            });
            return true;
        });
        instance.unmount = () => __awaiter(this, void 0, void 0, function* () {
            var _b, _c, _d;
            const { viewer } = $services;
            const viewerElement = viewer._element;
            if (props.showMouseInfo) {
                mouseCoordsInfo.value = undefined;
                viewerElement.removeEventListener('wheel', onMouseMove);
                viewerElement.removeEventListener('mousemove', onMouseMove);
                viewerElement.removeEventListener('touchmove', onMouseMove);
            }
            if (props.showCameraInfo) {
                viewer.camera.changed.removeEventListener(onCameraChanged);
            }
            if (props.showPerformanceInfo) {
                viewer.scene._performanceDisplay._container.style.display = 'block';
                viewer.scene.postRender.removeEventListener(onScenePostRender);
            }
            if (!hasVcNavigation) {
                viewerElement.contains((_b = $(rootRef)) === null || _b === void 0 ? void 0 : _b.$el) && viewerElement.removeChild((_c = $(rootRef)) === null || _c === void 0 ? void 0 : _c.$el);
            }
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'unmounted',
                target: (_d = $(rootRef)) === null || _d === void 0 ? void 0 : _d.$el
            });
            return true;
        });
        const updateRootStyle = () => {
            const css = positionState.style.value;
            rootStyle.left = css.left;
            rootStyle.top = css.top;
            rootStyle.transform = css.transform;
            css.background = props.background;
            css.color = props.color;
            const side = positionState.attach.value;
            if ((side.bottom || side.top) && !side.left && !side.right) {
                css.left = '50%';
                css.transform = 'translate(-50%, 0)';
            }
            if ((side.left || side.right) && !side.top && !side.bottom) {
                css.top = '50%';
                css.transform = 'translate(0, -50%)';
            }
            Object.assign(rootStyle, css);
        };
        const onScenePostRender = throttle(scene => {
            var _a, _b;
            performanceInfo.fps = (_a = scene._performanceDisplay) === null || _a === void 0 ? void 0 : _a._fpsText.nodeValue;
            performanceInfo.ms = (_b = scene._performanceDisplay) === null || _b === void 0 ? void 0 : _b._msText.nodeValue;
            scene._performanceDisplay._container.style.display = 'none';
        }, 500);
        const heightToLevel = altitude => {
            const A = 40487.57;
            const B = 0.00007096758;
            const C = 91610.74;
            const D = -40467.74;
            return Math.round(D + (A - D) / (1 + Math.pow(altitude / C, B)));
        };
        const onCameraChanged = () => {
            const { viewer } = $services;
            const { Math: CesiumMath } = Cesium;
            cameraInfo.heading = CesiumMath.toDegrees(viewer.camera.heading).toFixed(1);
            cameraInfo.pitch = CesiumMath.toDegrees(viewer.camera.pitch).toFixed(1);
            cameraInfo.roll = CesiumMath.toDegrees(viewer.camera.roll).toFixed(1);
            cameraInfo.height = viewer.camera.positionCartographic.height.toFixed(2);
            cameraInfo.level = heightToLevel(cameraInfo.height).toFixed(0);
        };
        const onMouseMove = e => {
            const { Cartesian2 } = Cesium;
            const { viewer } = $services;
            const clientX = e.type === 'mousemove' || e.type === 'wheel' ? e.clientX : e.changedTouches[0].clientX;
            const clientY = e.type === 'mousemove' || e.type === 'wheel' ? e.clientY : e.changedTouches[0].clientY;
            if (clientX === lastMouseX && clientY === lastMouseY) {
                return;
            }
            lastMouseX = clientX;
            lastMouseY = clientY;
            const viewerElement = viewer._element;
            if (viewer) {
                if (props.showMouseInfo) {
                    const rect = viewerElement.getBoundingClientRect();
                    const position = new Cartesian2(clientX - rect.left, clientY - rect.top);
                    mouseCoordsInfo.value.updateCoordinatesFromCesium(viewer, position);
                }
                const listener = getInstanceListener(instance, 'locationBarEvt');
                listener &&
                    ctx.emit('locationBarEvt', {
                        type: 'locationBar',
                        mouseCoordsInfo: mouseCoordsInfo.value,
                        cameraInfo: cameraInfo,
                        performanceInfo: performanceInfo,
                        statue: 'complete'
                    });
            }
        };
        const toggleUseProjection = () => {
            var _a;
            (_a = $(tooltipRef)) === null || _a === void 0 ? void 0 : _a.hide();
            if (props.showMouseInfo) {
                mouseCoordsInfo.value.toggleUseProjection();
            }
        };
        Object.assign(instance.proxy, {
            createPromise: commonState.createPromise,
            load: commonState.load,
            unload: commonState.unload,
            reload: commonState.reload,
            getCesiumObject: () => instance.cesiumObject
        });
        return () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (canRender.value) {
                const inner = [];
                if (props.showMouseInfo) {
                    if (!((_a = mouseCoordsInfo.value) === null || _a === void 0 ? void 0 : _a.useProjection)) {
                        inner.push(h('div', {
                            class: 'vc-section ellipsis'
                        }, [
                            h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.lng')),
                            h('span', {}, (_b = mouseCoordsInfo.value) === null || _b === void 0 ? void 0 : _b.longitude)
                        ]), h('div', {
                            class: 'vc-section ellipsis'
                        }, [
                            h('span', {}, t('vc.navigation.locationbar.lat')),
                            h('span', {}, (_c = mouseCoordsInfo.value) === null || _c === void 0 ? void 0 : _c.latitude)
                        ]));
                    }
                    else {
                        inner.push(h('div', {
                            class: 'vc-section-short ellipsis'
                        }, [
                            h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.zone')),
                            h('span', null, (_d = mouseCoordsInfo.value) === null || _d === void 0 ? void 0 : _d.utmZone)
                        ]), h('div', {
                            class: 'vc-section ellipsis'
                        }, [
                            h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.e')),
                            h('span', null, (_e = mouseCoordsInfo.value) === null || _e === void 0 ? void 0 : _e.east)
                        ]), h('div', {
                            class: 'vc-section ellipsis'
                        }, [
                            h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.n')),
                            h('span', null, (_f = mouseCoordsInfo.value) === null || _f === void 0 ? void 0 : _f.north)
                        ]));
                    }
                    if ((_g = mouseCoordsInfo.value) === null || _g === void 0 ? void 0 : _g.elevation) {
                        inner.push(h('div', {
                            class: 'vc-section ellipsis'
                        }, [
                            h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.elev')),
                            h('span', {}, (_h = mouseCoordsInfo.value) === null || _h === void 0 ? void 0 : _h.elevation)
                        ]));
                    }
                    else {
                        inner.push(createCommentVNode('v-if'));
                    }
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                if (props.showCameraInfo) {
                    inner.push(h('div', {
                        class: 'vc-section-short-mini ellipsis'
                    }, [
                        h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.level')),
                        h('span', null, cameraInfo.level)
                    ]), h('div', {
                        class: 'vc-section-short ellipsis'
                    }, [
                        h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.heading')),
                        h('span', null, `${cameraInfo.heading}°`)
                    ]), h('div', {
                        class: 'vc-section-short ellipsis'
                    }, [
                        h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.pitch')),
                        h('span', null, `${cameraInfo.pitch}°`)
                    ]), h('div', {
                        class: 'vc-section-short ellipsis'
                    }, [
                        h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.roll')),
                        h('span', null, `${cameraInfo.roll}°`)
                    ]), h('div', {
                        class: 'vc-section ellipsis'
                    }, [
                        h('span', Object.assign({}, ctx.attrs), t('vc.navigation.locationbar.cameraHeight')),
                        h('span', null, `${cameraInfo.height}m`)
                    ]));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                if (props.showPerformanceInfo) {
                    inner.push(h('div', {
                        class: 'vc-section-short-mini ellipsis'
                    }, [
                        h('span', null, performanceInfo.ms)
                    ]), h('div', {
                        class: 'vc-section-short-mini ellipsis'
                    }, [
                        h('span', null, performanceInfo.fps)
                    ]));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                if (props.tooltip && props.showMouseInfo) {
                    inner.push(h(VcTooltip, Object.assign({ ref: tooltipRef }, props.tooltip), () => h('strong', null, t('vc.navigation.locationbar.tip'))));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                return h(VcBtn, {
                    ref: rootRef,
                    class: 'vc-location-bar ' + positionState.classes.value,
                    style: rootStyle,
                    noCaps: true,
                    onClick: toggleUseProjection
                }, () => inner);
            }
            else {
                return createCommentVNode('v-if');
            }
        };
    }
});

var distancelegendDefaultProps = {
    position: {
        type: String,
        default: 'bottom-right',
        validator: (v) => ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'].includes(v)
    },
    offset: {
        type: Array,
        validator: v => v.length === 2
    },
    color: {
        type: String,
        default: '#fff'
    },
    background: {
        type: String,
        default: '#3f4854'
    },
    width: {
        type: Number,
        default: 100
    },
    barBackground: {
        type: String,
        default: '#fff'
    }
};

var VcDistanceLegend = defineComponent({
    name: 'VcDistanceLegend',
    components: { VcBtn },
    props: distancelegendDefaultProps,
    emits: ['beforeLoad', 'ready', 'destroyed', 'distanceLegendEvt'],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'VcDistanceLegend';
        instance.cesiumEvents = [];
        const commonState = useCommon(props, ctx, instance);
        if (commonState === void 0) {
            return;
        }
        const parentInstance = getVcParentInstance(instance);
        const { $services } = commonState;
        const rootRef = ref(null);
        const distanceLabel = ref(undefined);
        const positionState = usePosition(props, $services);
        const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation';
        const canRender = ref(hasVcNavigation);
        const rootStyle = reactive({});
        let lastLegendUpdate = 0;
        const barWidth = ref(0);
        let distance = 0;
        watch(() => props, val => {
            nextTick(() => {
                if (!instance.mounted) {
                    return;
                }
                updateRootStyle();
            });
        }, {
            deep: true
        });
        const barStyle = computed(() => {
            return {
                width: `${barWidth.value}px`,
                left: `${5 + (props.width + 15 - barWidth.value) / 2}px`,
                height: '2px',
                background: props.barBackground
            };
        });
        instance.createCesiumObject = () => __awaiter(this, void 0, void 0, function* () {
            canRender.value = true;
            distanceLabel.value = '';
            return new Promise((resolve, reject) => {
                nextTick(() => {
                    var _a, _b, _c;
                    const { viewer } = $services;
                    viewer._element;
                    if (!hasVcNavigation) {
                        const viewerElement = viewer._element;
                        viewerElement.appendChild((_a = $(rootRef)) === null || _a === void 0 ? void 0 : _a.$el);
                        resolve((_b = $(rootRef)) === null || _b === void 0 ? void 0 : _b.$el);
                    }
                    else {
                        resolve((_c = $(rootRef)) === null || _c === void 0 ? void 0 : _c.$el);
                    }
                    viewer.scene.postRender.addEventListener(onScenePostRender);
                });
            });
        });
        instance.mount = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            updateRootStyle();
            const { viewer } = $services;
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'mounted',
                target: (_a = $(rootRef)) === null || _a === void 0 ? void 0 : _a.$el
            });
            return true;
        });
        instance.unmount = () => __awaiter(this, void 0, void 0, function* () {
            var _b, _c, _d;
            const { viewer } = $services;
            viewer.scene.postRender.removeEventListener(onScenePostRender);
            const viewerElement = viewer._element;
            if (!hasVcNavigation) {
                viewerElement.contains((_b = $(rootRef)) === null || _b === void 0 ? void 0 : _b.$el) && viewerElement.removeChild((_c = $(rootRef)) === null || _c === void 0 ? void 0 : _c.$el);
            }
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'unmounted',
                target: (_d = $(rootRef)) === null || _d === void 0 ? void 0 : _d.$el
            });
            return true;
        });
        const updateRootStyle = () => {
            const css = positionState.style.value;
            rootStyle.left = css.left;
            rootStyle.top = css.top;
            rootStyle.transform = css.transform;
            css.background = props.background;
            css.color = props.color;
            const side = positionState.attach.value;
            if ((side.bottom || side.top) && !side.left && !side.right) {
                css.left = '50%';
                css.transform = 'translate(-50%, 0)';
            }
            if ((side.left || side.right) && !side.top && !side.bottom) {
                css.top = '50%';
                css.transform = 'translate(0, -50%)';
            }
            css.width = `${props.width}px`;
            Object.assign(rootStyle, css);
        };
        const onScenePostRender = throttle(scene => {
            const { Cartesian2, defined, getTimestamp, EllipsoidGeodesic } = Cesium;
            const now = getTimestamp();
            if (now < lastLegendUpdate + 250) {
                return;
            }
            lastLegendUpdate = now;
            const geodesic = new EllipsoidGeodesic();
            const width = scene.canvas.clientWidth;
            const height = scene.canvas.clientHeight;
            const left = scene.camera.getPickRay(new Cartesian2((width / 2) | 0, height - 1));
            const right = scene.camera.getPickRay(new Cartesian2((1 + width / 2) | 0, height - 1));
            const globe = scene.globe;
            const leftPosition = globe.pick(left, scene);
            const rightPosition = globe.pick(right, scene);
            if (!defined(leftPosition) || !defined(rightPosition)) {
                barWidth.value = 0;
                distanceLabel.value = undefined;
                return;
            }
            const leftCartographic = globe.ellipsoid.cartesianToCartographic(leftPosition);
            const rightCartographic = globe.ellipsoid.cartesianToCartographic(rightPosition);
            geodesic.setEndPoints(leftCartographic, rightCartographic);
            const pixelDistance = geodesic.surfaceDistance;
            const maxBarWidth = props.width - 10;
            let _distance;
            for (let i = distances.length - 1; !defined(_distance) && i >= 0; --i) {
                if (distances[i] / pixelDistance < maxBarWidth) {
                    _distance = distances[i];
                    if (distance !== _distance) {
                        distance = _distance;
                        const listener = getInstanceListener(instance, 'distanceLegendEvt');
                        listener &&
                            ctx.emit('distanceLegendEvt', {
                                type: 'distanceLegend',
                                distance,
                                statue: 'legendChanged'
                            });
                    }
                }
            }
            if (defined(_distance)) {
                let label;
                if (distance >= 1000) {
                    label = (_distance / 1000).toString() + ' km';
                }
                else {
                    label = _distance.toString() + ' m';
                }
                barWidth.value = (_distance / pixelDistance) | 0;
                distanceLabel.value = label;
            }
            else {
                barWidth.value = 0;
                distanceLabel.value = undefined;
            }
        }, 500);
        Object.assign(instance.proxy, {
            createPromise: commonState.createPromise,
            load: commonState.load,
            unload: commonState.unload,
            reload: commonState.reload,
            getCesiumObject: () => instance.cesiumObject
        });
        return () => {
            if (canRender.value && distanceLabel.value !== void 0) {
                return h(VcBtn, {
                    ref: rootRef,
                    class: 'vc-distance-legend ' + positionState.classes.value,
                    style: rootStyle,
                    stack: true,
                    noCaps: true
                }, () => [
                    h('label', null, distanceLabel.value),
                    h('div', {
                        style: barStyle.value,
                        class: 'vc-bar'
                    })
                ]);
            }
            else {
                return createCommentVNode('v-if');
            }
        };
    }
});
const distances = [
    1,
    2,
    3,
    5,
    10,
    20,
    30,
    50,
    100,
    200,
    300,
    500,
    1000,
    2000,
    3000,
    5000,
    10000,
    20000,
    30000,
    50000,
    100000,
    200000,
    300000,
    500000,
    1000000,
    2000000,
    3000000,
    5000000,
    10000000,
    20000000,
    30000000,
    50000000
];

const defaultProps$2 = Object.assign(Object.assign({}, positionProps), { compassOpts: {
        type: [Object, Boolean],
        default: () => getDefaultOptionByProps(defaultProps, ['position', 'offset'])
    }, zoomOpts: {
        type: [Object, Boolean],
        default: () => getDefaultOptionByProps(defaultProps$1, ['position', 'offset'])
    }, printOpts: {
        type: [Object, Boolean],
        default: () => getDefaultOptionByProps(printDefaultProps, ['position', 'offset'])
    }, locationOpts: {
        type: [Object, Boolean],
        default: () => getDefaultOptionByProps(locationDefaultProps, ['position', 'offset'])
    }, otherOpts: {
        type: [Object, Boolean],
        default: () => ({
            position: 'bottom-right',
            offset: [2, 3],
            locationbarOpts: getDefaultOptionByProps(locationbarDefaultProps, ['position', 'offset']),
            distancelegendOpts: getDefaultOptionByProps(distancelegendDefaultProps, ['position', 'offset'])
        })
    } });
const defaultOptions$2 = getDefaultOptionByProps(defaultProps$2);

var VcNavigation = defineComponent({
    name: 'VcNavigation',
    inheritAttrs: false,
    props: defaultProps$2,
    emits: ['beforeLoad', 'ready', 'destroyed', 'zoomEvt', 'compassEvt', 'locationEvt', 'printEvt', 'locationBarEvt', 'distanceLegendEvt'],
    setup(props, ctx) {
        const instance = getCurrentInstance();
        instance.cesiumClass = 'VcNavigation';
        const commonState = useCommon(props, ctx, instance);
        if (commonState === void 0) {
            return;
        }
        const canRender = ref(false);
        const { $services } = commonState;
        const positionState = usePosition(props, $services);
        const positionStateOther = usePosition(props.otherOpts || { position: 'bottom-right' }, $services);
        const rootRef = ref(null);
        const secondRootRef = ref(null);
        const compassRef = ref(null);
        const zoomControlRef = ref(null);
        const printRef = ref(null);
        const myLocationRef = ref(null);
        const locationBarRef = ref(null);
        const distanceLegendRef = ref(null);
        const rootStyle = reactive({});
        const secondRootStyle = reactive({});
        const { emit } = ctx;
        watch(() => props, () => {
            nextTick(() => {
                var _a, _b, _c, _d, _e, _f;
                updateRootStyle();
                (_a = $(compassRef)) === null || _a === void 0 ? void 0 : _a.reload();
                (_b = $(zoomControlRef)) === null || _b === void 0 ? void 0 : _b.reload();
                (_c = $(myLocationRef)) === null || _c === void 0 ? void 0 : _c.reload();
                (_d = $(printRef)) === null || _d === void 0 ? void 0 : _d.reload();
                (_e = $(locationBarRef)) === null || _e === void 0 ? void 0 : _e.reload();
                (_f = $(distanceLegendRef)) === null || _f === void 0 ? void 0 : _f.reload();
            });
        }, {
            deep: true
        });
        const compassOptions = computed(() => Object.assign({}, defaultOptions$2.compassOpts, props.compassOpts));
        const zoomControlOptions = computed(() => Object.assign({}, defaultOptions$2.zoomOpts, props.zoomOpts));
        const printViewOptions = computed(() => Object.assign({}, defaultOptions$2.printOpts, props.printOpts));
        const myLocationOptions = computed(() => Object.assign({}, defaultOptions$2.locationOpts, props.locationOpts));
        const otherControlOptions = computed(() => Object.assign({}, defaultOptions$2.otherOpts, props.otherOpts));
        const onCompassEvt = e => {
            const listener = getInstanceListener(instance, 'compassEvt');
            listener && emit('compassEvt', e);
        };
        const onZoomEvt = e => {
            const listener = getInstanceListener(instance, 'zoomEvt');
            listener && emit('zoomEvt', e);
        };
        const onPrintEvt = e => {
            const listener = getInstanceListener(instance, 'printEvt');
            listener && emit('printEvt', e);
        };
        const onLocationEvt = e => {
            const listener = getInstanceListener(instance, 'locationEvt');
            listener && emit('locationEvt', e);
        };
        const onLocationBarEvt = e => {
            const listener = getInstanceListener(instance, 'locationBarEvt');
            listener && emit('locationEvt', e);
        };
        const onDistanceLegendEvt = e => {
            const listener = getInstanceListener(instance, 'distanceLegendEvt');
            listener && emit('locationEvt', e);
        };
        instance.createCesiumObject = () => __awaiter(this, void 0, void 0, function* () {
            canRender.value = true;
            const { viewer } = $services;
            viewer.viewerWidgetResized.addEventListener(onViewerWidgetResized);
            return new Promise((resolve, reject) => {
                nextTick(() => {
                    const viewerElement = viewer._element;
                    viewerElement.appendChild($(rootRef));
                    $(secondRootRef) && viewerElement.appendChild($(secondRootRef));
                    resolve([$(rootRef), $(secondRootRef)]);
                });
            });
        });
        instance.mount = () => __awaiter(this, void 0, void 0, function* () {
            updateRootStyle();
            const { viewer } = $services;
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'mounted',
                target: $(rootRef)
            });
            return true;
        });
        instance.unmount = () => __awaiter(this, void 0, void 0, function* () {
            const { viewer } = $services;
            const viewerElement = viewer._element;
            viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
            viewerElement.contains($(secondRootRef)) && viewerElement.removeChild($(secondRootRef));
            viewer.viewerWidgetResized.removeEventListener(onViewerWidgetResized);
            viewer.viewerWidgetResized.raiseEvent({
                type: instance.cesiumClass,
                status: 'unmounted',
                target: $(rootRef)
            });
            return true;
        });
        const onViewerWidgetResized = () => {
            nextTick(() => {
                updateRootStyle();
            });
        };
        const updateRootStyle = () => {
            var _a, _b, _c, _d, _e;
            const compassTarget = (_a = $(compassRef)) === null || _a === void 0 ? void 0 : _a.$el;
            let height = 0;
            let marginX = 0;
            if (compassTarget !== void 0) {
                const margin = getComputedStyle(compassTarget.parentNode).margin;
                marginX = parseInt(margin);
                height += compassTarget.getBoundingClientRect().height + marginX * 2;
            }
            const zoomControlTarget = (_b = $(zoomControlRef)) === null || _b === void 0 ? void 0 : _b.$el;
            if (zoomControlTarget !== void 0) {
                height += zoomControlTarget.getBoundingClientRect().height + marginX * 2;
            }
            const printTarget = (_c = $(printRef)) === null || _c === void 0 ? void 0 : _c.$el;
            if (printTarget !== void 0) {
                height += printTarget.getBoundingClientRect().height + marginX * 2;
            }
            const myLocationTarget = (_d = $(myLocationRef)) === null || _d === void 0 ? void 0 : _d.$el;
            if (myLocationTarget !== void 0) {
                height += myLocationTarget.getBoundingClientRect().height + marginX * 2;
            }
            const css = positionState.style.value;
            const side = positionState.attach.value;
            rootStyle.left = css.left;
            rootStyle.top = css.top;
            rootStyle.transform = css.transform;
            if ((side.bottom || side.top) && !side.left && !side.right) {
                css.left = '50%';
                css.transform = 'translate(-50%, 0)';
            }
            if ((side.left || side.right) && !side.top && !side.bottom) {
                css.top = '50%';
                css.transform = 'translate(0, -50%)';
            }
            Object.assign(rootStyle, css, { height: `${height}px` });
            const cssSecondRoot = positionStateOther.style.value;
            const sideSecondRoot = positionStateOther.attach.value;
            secondRootStyle.left = cssSecondRoot.left;
            secondRootStyle.top = cssSecondRoot.top;
            secondRootStyle.transform = cssSecondRoot.transform;
            if ((sideSecondRoot.bottom || sideSecondRoot.top) && !sideSecondRoot.left && !sideSecondRoot.right) {
                cssSecondRoot.left = '50%';
                cssSecondRoot.transform = 'translate(-50%, 0)';
            }
            if ((sideSecondRoot.left || sideSecondRoot.right) && !sideSecondRoot.top && !sideSecondRoot.bottom) {
                cssSecondRoot.top = '50%';
                cssSecondRoot.transform = 'translate(0, -50%)';
            }
            let height2 = 0;
            const locationBarRefTarget = (_e = $(locationBarRef)) === null || _e === void 0 ? void 0 : _e.$el;
            if (locationBarRefTarget !== void 0) {
                height2 += locationBarRefTarget.getBoundingClientRect().height;
            }
            Object.assign(secondRootStyle, cssSecondRoot, { height: `${height2}px` });
        };
        Object.assign(instance.proxy, {
            createPromise: commonState.createPromise,
            load: commonState.load,
            unload: commonState.unload,
            reload: commonState.reload,
            getCesiumObject: () => instance.cesiumObject
        });
        return () => {
            if (canRender.value) {
                const inner = [];
                if (compassOptions.value && props.compassOpts !== false) {
                    inner.push(h('div', {
                        class: 'vc-navigation-control'
                    }, [
                        h(VcCompass, Object.assign(Object.assign({ ref: compassRef }, compassOptions.value), { onCompassEvt }))
                    ]));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                if (zoomControlOptions.value && props.zoomOpts !== false) {
                    inner.push(h('div', {
                        class: 'vc-navigation-control'
                    }, [
                        h(VcZoomControl, Object.assign(Object.assign({ ref: zoomControlRef }, zoomControlOptions.value), { onZoomEvt }))
                    ]));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                if (printViewOptions.value && props.printOpts !== false) {
                    inner.push(h('div', {
                        class: 'vc-navigation-control'
                    }, [
                        h(VcPrint, Object.assign(Object.assign({ ref: printRef }, printViewOptions.value), { onPrintEvt }))
                    ]));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                if (myLocationOptions.value && props.locationOpts !== false) {
                    inner.push(h('div', {
                        class: 'vc-navigation-control'
                    }, [
                        h(VcMyLocation, Object.assign(Object.assign({ ref: myLocationRef }, myLocationOptions.value), { onLocationEvt }))
                    ]));
                }
                else {
                    inner.push(createCommentVNode('v-if'));
                }
                let children = [h('div', { class: 'vc-navigation-controls' }, inner)];
                children = hMergeSlot(ctx.slots.default, children);
                const root = [];
                root.push(h('div', {
                    ref: rootRef,
                    class: 'vc-navigation ' + positionState.classes.value,
                    style: rootStyle
                }, children));
                if (props.otherOpts !== false) {
                    root.push(h('div', {
                        ref: secondRootRef,
                        class: 'vc-location-other-controls ' + positionStateOther.classes.value,
                        style: secondRootStyle
                    }, [
                        h(VcLocationBar, Object.assign(Object.assign({ ref: locationBarRef }, otherControlOptions.value.locationbarOpts), { onLocationBarEvt })),
                        h(VcDistanceLegend, Object.assign(Object.assign({ ref: distanceLegendRef }, otherControlOptions.value.distancelegendOpts), { onDistanceLegendEvt }))
                    ]));
                }
                return root;
            }
            else {
                return createCommentVNode('v-if');
            }
        };
    }
});

const components = [VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcLocationBar, VcDistanceLegend, VcNavigation];
const install = (app) => {
    components.forEach(cmp => {
        app.component(cmp.name, cmp);
    });
};
var index = {
    install
};

export default index;
export { VcCompass, VcDistanceLegend, VcLocationBar, VcMyLocation, VcNavigation, VcPrint, VcZoomControl };
