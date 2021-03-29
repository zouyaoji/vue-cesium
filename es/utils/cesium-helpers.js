import 'vue';
import { isPlainObject, hasOwn, isArray, isFunction, isString } from '@vue/shared';
import isUndefined from 'lodash/isUndefined';
import 'lodash';

function isEmptyObj(obj) {
    if (isUndefined(obj)) {
        return true;
    }
    if (obj instanceof Element) {
        return false;
    }
    const arr = Object.keys(obj);
    return arr.length === 0;
}
function getObjClassName(obj) {
    if (obj && obj.constructor) {
        const strFun = obj.constructor.toString();
        let className = strFun.substr(0, strFun.indexOf('('));
        className = className.replace('function', '');
        return className.replace(/(^\s*)|(\s*$)/gi, '');
    }
    return typeof obj;
}

function makeCartesian2(val, isConstant = false) {
    const { Cartesian2, CallbackProperty } = Cesium;
    if (val instanceof Cesium.Cartesian2 || val instanceof CallbackProperty) {
        return val;
    }
    if (isPlainObject(val)) {
        if (hasOwn(val, 'x') && hasOwn(val, 'y')) {
            const value = val;
            return new Cartesian2(value.x, value.y);
        }
    }
    if (isArray(val)) {
        return new Cartesian2(val[0], val[1]);
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makeCartesian3(val, isConstant = false) {
    const { CallbackProperty, Cartesian3 } = Cesium;
    if (val instanceof Cartesian3 || val instanceof CallbackProperty) {
        return val;
    }
    if (isPlainObject(val)) {
        if (hasOwn(val, 'x') && hasOwn(val, 'y') && hasOwn(val, 'z')) {
            const value = val;
            return new Cartesian3(value.x, value.y, value.z);
        }
        else if (hasOwn(val, 'lng') && hasOwn(val, 'lat')) {
            const value = val;
            return Cartesian3.fromDegrees(value.lng, value.lat, value.height || 0);
        }
    }
    if (isArray(val)) {
        return Cartesian3.fromDegrees(val[0], val[1], val[2] || 0);
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makeCartesian3Array(vals, isConstant = false) {
    const { CallbackProperty, Cartesian3 } = Cesium;
    if (vals instanceof CallbackProperty) {
        return vals;
    }
    if (isArray(vals)) {
        if (vals[0] instanceof Cartesian3) {
            return vals;
        }
        if (isArray(vals[0])) {
            const values = vals;
            const coordinates = [];
            values.forEach(item => {
                coordinates.push(item[0]);
                coordinates.push(item[1]);
                coordinates.push(item[2] || 0);
            });
            return Cartesian3.fromDegreesArrayHeights(coordinates);
        }
        else if (isPlainObject(vals[0])) {
            const coordinates = [];
            if (hasOwn(vals[0], 'lng') && hasOwn(vals[0], 'lat')) {
                const values = vals;
                values.forEach(item => {
                    coordinates.push(item.lng);
                    coordinates.push(item.lat);
                    coordinates.push(item.height || 0);
                });
                return Cartesian3.fromDegreesArrayHeights(coordinates);
            }
            else if (hasOwn(vals[0], 'x') && hasOwn(vals[0], 'y') && hasOwn(vals[0], 'z')) {
                const values = vals;
                values.forEach(item => {
                    coordinates.push(item.x);
                    coordinates.push(item.y);
                    coordinates.push(item.z || 0);
                });
                return Cartesian3.fromRadiansArrayHeights(coordinates);
            }
        }
        return Cartesian3.fromDegreesArrayHeights(vals);
    }
    if (isFunction(vals)) {
        return new CallbackProperty(vals, isConstant);
    }
    return undefined;
}
function makeCartesian2Array(vals, isConstant) {
    const { CallbackProperty, Cartesian2 } = Cesium;
    if (vals instanceof CallbackProperty) {
        return vals;
    }
    if (isArray(vals)) {
        if (vals[0] instanceof Cartesian2) {
            return vals;
        }
        const points = [];
        if (isArray(vals[0])) {
            const values = vals;
            values.forEach(item => {
                const point = new Cartesian2(item[0], item[1]);
                points.push(point);
            });
        }
        else if (isPlainObject(vals[0]) && hasOwn(vals[0], 'x') && hasOwn(vals[0], 'y')) {
            const values = vals;
            values.forEach(item => {
                points.push(new Cartesian2(item.x, item.y));
            });
        }
        return points;
    }
    if (isFunction(vals)) {
        return new CallbackProperty(vals, isConstant);
    }
    return undefined;
}
function makeQuaternion(val, isConstant = false) {
    const { CallbackProperty, Quaternion } = Cesium;
    if (val instanceof Quaternion || val instanceof CallbackProperty) {
        return val;
    }
    if (isPlainObject(val) && hasOwn(val, 'x') && hasOwn(val, 'y')) {
        const value = val;
        return new Quaternion(value.x, value.y, value.z, value.w);
    }
    if (isArray(val)) {
        return new Quaternion(val[0], val[1], val[2], val[3]);
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function parsePolygonHierarchyJson(val) {
    val.forEach(item => {
        item.positions = makeCartesian3Array(item.positions);
        if (item.holes) {
            parsePolygonHierarchyJson(item.holes);
        }
    });
}
function makePolygonHierarchy(val, isConstant = false) {
    const { PolygonHierarchy, CallbackProperty } = Cesium;
    if (val instanceof PolygonHierarchy || val instanceof CallbackProperty) {
        return val;
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    if (isArray(val) && val.length >= 3) {
        const points = makeCartesian3Array(val);
        return new PolygonHierarchy(points);
    }
    if (isPlainObject(val) && hasOwn(val, 'positions')) {
        const value = val;
        value.positions = makeCartesian3Array(value.positions);
        parsePolygonHierarchyJson(value.holes);
        return value;
    }
    return undefined;
}
function makeNearFarScalar(val, isConstant = false) {
    const { NearFarScalar, CallbackProperty } = Cesium;
    if (val instanceof NearFarScalar || val instanceof CallbackProperty) {
        return val;
    }
    if (isPlainObject(val) && hasOwn(val, 'near') && hasOwn(val, 'far')) {
        const value = val;
        return new NearFarScalar(value.near, value.nearValue || 0.0, value.far, value.farValue || 1.0);
    }
    if (isArray(val)) {
        return new NearFarScalar(val[0], val[1], val[2], val[3]);
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makeDistanceDisplayCondition(val, isConstant = false) {
    const { DistanceDisplayCondition, CallbackProperty } = Cesium;
    if (val instanceof DistanceDisplayCondition || val instanceof CallbackProperty) {
        return val;
    }
    if (isPlainObject(val) && hasOwn(val, 'near') && hasOwn(val, 'far')) {
        const value = val;
        return new DistanceDisplayCondition(value.near, value.far);
    }
    if (isArray(val)) {
        return new DistanceDisplayCondition(val[0], val[1]);
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makeColor(val, isConstant = false) {
    const { Color, CallbackProperty } = Cesium;
    if (val instanceof Color || val instanceof CallbackProperty) {
        return val;
    }
    if (isString(val)) {
        return Color.fromCssColorString(val);
    }
    if (isPlainObject(val)) {
        if (hasOwn(val, 'red')) {
            const value = val;
            return Color.fromBytes(value.red, value.green || 255, value.blue || 255, value.alpha || 255);
        }
        else if (hasOwn(val, 'x')) {
            const value = val;
            return new Color(value.x, value.y || 1, value.z || 1, value.w || 1);
        }
    }
    if (isArray(val)) {
        return Color.fromBytes(val[0], val[1], val[2], val[3] || 255);
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makeMaterialProperty(val, isConstant = false) {
    const { CallbackProperty, Color, CheckerboardMaterialProperty, ColorMaterialProperty, GridMaterialProperty, ImageMaterialProperty, PolylineArrowMaterialProperty, PolylineDashMaterialProperty, PolylineGlowMaterialProperty, PolylineOutlineMaterialProperty, StripeMaterialProperty, StripeOrientation } = Cesium;
    if (val instanceof CallbackProperty ||
        val instanceof Color ||
        val instanceof CheckerboardMaterialProperty ||
        val instanceof ColorMaterialProperty ||
        val instanceof ImageMaterialProperty ||
        val instanceof PolylineArrowMaterialProperty ||
        val instanceof PolylineDashMaterialProperty ||
        val instanceof PolylineGlowMaterialProperty ||
        val instanceof PolylineOutlineMaterialProperty ||
        val instanceof StripeMaterialProperty ||
        getObjClassName(val).indexOf('MaterialProperty') !== -1) {
        return val;
    }
    if ((isString(val) && /(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(val)) ||
        val instanceof HTMLImageElement ||
        val instanceof HTMLCanvasElement ||
        val instanceof HTMLVideoElement) {
        return new ImageMaterialProperty({
            image: val,
            repeat: makeCartesian2({ x: 1.0, y: 1.0 }),
            color: Color.WHITE,
            transparent: true
        });
    }
    if (isArray(val) || isString(val)) {
        return new ColorMaterialProperty(makeColor(val));
    }
    if (isPlainObject(val) && hasOwn(val, 'fabric')) {
        const value = val;
        switch (value.fabric.type) {
            case 'Image':
                return new ImageMaterialProperty({
                    image: value.fabric.uniforms.image,
                    repeat: makeCartesian2(value.fabric.uniforms.repeat || { x: 1.0, y: 1.0 }),
                    color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
                    transparent: value.fabric.uniforms.transparent || false
                });
            case 'Color':
                return new ColorMaterialProperty(makeColor(value.fabric.uniforms.color || Color.WHITE));
            case 'PolylineArrow':
                return new PolylineArrowMaterialProperty(makeColor(value.fabric.uniforms.color || Color.WHITE));
            case 'PolylineDash':
                return new PolylineDashMaterialProperty({
                    color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
                    gapColor: makeColor(value.fabric.uniforms.gapColor) || Color.TRANSPARENT,
                    dashLength: value.fabric.uniforms.taperPower || 16.0,
                    dashPattern: value.fabric.uniforms.taperPower || 255.0
                });
            case 'PolylineGlow':
                return new PolylineGlowMaterialProperty({
                    color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
                    glowPower: value.fabric.uniforms.glowPower || 0.25,
                    taperPower: value.fabric.uniforms.taperPower || 1.0
                });
            case 'PolylineOutline':
                return new PolylineOutlineMaterialProperty({
                    color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
                    outlineColor: makeColor(value.fabric.uniforms.outlineColor) || Color.BLACK,
                    outlineWidth: value.fabric.uniforms.outlineWidth || 1.0
                });
            case 'Checkerboard':
                return new CheckerboardMaterialProperty({
                    evenColor: makeColor(value.fabric.uniforms.evenColor) || Color.WHITE,
                    oddColor: makeColor(value.fabric.uniforms.oddColor) || Color.BLACK,
                    repeat: makeCartesian2(value.fabric.uniforms.repeat || { x: 2, y: 2 })
                });
            case 'Grid':
                return new GridMaterialProperty({
                    color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
                    cellAlpha: value.fabric.uniforms.cellAlpha || 0.1,
                    lineCount: makeCartesian2(value.fabric.uniforms.lineCount || { x: 8, y: 8 }),
                    lineThickness: makeCartesian2(value.fabric.uniforms.lineThickness || { x: 1, y: 1 }),
                    lineOffset: makeCartesian2(value.fabric.uniforms.lineOffset || { x: 0, y: 0 })
                });
            case 'Stripe':
                return new StripeMaterialProperty({
                    orientation: value.fabric.uniforms.orientation || StripeOrientation.HORIZONTAL,
                    evenColor: makeColor(value.fabric.uniforms.evenColor || 'white'),
                    oddColor: makeColor(value.fabric.uniforms.oddColor || 'black'),
                    offset: value.fabric.uniforms.offset || 0,
                    repeat: value.fabric.uniforms.repeat || 1
                });
        }
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return val;
}
function makeMaterial(val) {
    const vcInstance = this;
    const cmpName = vcInstance.proxy.$options.name;
    if (cmpName && (cmpName.indexOf('graphics') || cmpName.indexOf('datasource')) !== -1) {
        return makeMaterialProperty(val);
    }
    const { Material, combine } = Cesium;
    if (val instanceof Material) {
        return val;
    }
    if (isPlainObject(val) && hasOwn(val, 'fabric')) {
        const f = obj => {
            for (const i in obj) {
                if (!isArray(obj[i]) && isPlainObject(obj[i])) {
                    f(obj[i]);
                }
                else {
                    if (i.toLocaleLowerCase().indexOf('color') !== -1 && !isEmptyObj(obj[i])) {
                        const result = makeColor(obj[i]);
                        obj[i] = combine(result, result, true);
                    }
                }
            }
        };
        f(val);
        return new Material(val);
    }
    return val;
}
function makeRectangle(val, isConstant = false) {
    const { Rectangle, RectangleGraphics, CallbackProperty } = Cesium;
    if (val instanceof RectangleGraphics || val instanceof Rectangle || val instanceof CallbackProperty) {
        return val;
    }
    if (isArray(val)) {
        return Rectangle.fromDegrees(val[0], val[1], val[2], val[3]);
    }
    if (isPlainObject(val)) {
        if (hasOwn(val, 'west')) {
            const value = val;
            return Rectangle.fromDegrees(value.west, value.south, value.east, value.north);
        }
        else if (hasOwn(val, 'x')) {
            const value = val;
            return new Rectangle(value.x, value.y, value.z, value.w);
        }
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makeBoundingRectangle(val, isConstant = false) {
    const { BoundingRectangle, CallbackProperty } = Cesium;
    if (val instanceof BoundingRectangle || val instanceof CallbackProperty) {
        return val;
    }
    if (isPlainObject(val) && hasOwn(val, 'x')) {
        const value = val;
        return new BoundingRectangle(value.x, value.y, value.width, value.height);
    }
    if (isArray) {
        return new BoundingRectangle(val[0], val[1], val[2], val[3]);
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makePlane(val, isConstant = false) {
    const { Cartesian3, Plane, PlaneGraphics, CallbackProperty } = Cesium;
    if (val instanceof PlaneGraphics || val instanceof Plane || val instanceof CallbackProperty) {
        return val;
    }
    if (isPlainObject(val) && hasOwn(val, 'normal')) {
        const value = val;
        Cartesian3.normalize(makeCartesian3(value.normal), value.normal);
        return new Plane(value.normal, value.distance);
    }
    if (isArray(val)) {
        const point3D = makeCartesian3(val[0]);
        const normalizePoint3D = Cartesian3.normalize(point3D, new Cartesian3());
        return new Plane(normalizePoint3D, val[1]);
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makeTranslationRotationScale(val, isConstant = false) {
    const { TranslationRotationScale, CallbackProperty } = Cesium;
    if (val instanceof CallbackProperty || val instanceof TranslationRotationScale) {
        return val;
    }
    if (isPlainObject(val) && hasOwn(val, 'translation')) {
        const value = val;
        return new TranslationRotationScale(makeCartesian3(value.translation), makeQuaternion(value.rotation), makeCartesian3(value.scale));
    }
    if (isArray(val)) {
        return new TranslationRotationScale(makeCartesian3(val[0]), makeQuaternion(val[1]), makeCartesian3(val[2]));
    }
    if (isFunction(val)) {
        return new CallbackProperty(val, isConstant);
    }
    return undefined;
}
function makeOptions(val) {
    const vcInstance = this;
    const cmpName = vcInstance.proxy.$options.name;
    const result = {};
    switch (cmpName) {
        case 'vc-datasource-geojson':
            Object.assign(result, val);
            result && result.markerColor && (result.markerColor = makeColor(result.markerColor));
            result && result.stroke && (result.stroke = makeColor(result.stroke));
            result && result.fill && (result.fill = makeColor(result.fill));
            return result;
    }
    return val;
}
function captureScreenshot(viewer) {
    const scene = viewer.scene;
    const promise = new Promise((resolve, reject) => {
        const removeCallback = viewer.scene.postRender.addEventListener(() => {
            removeCallback();
            try {
                const cesiumCanvas = viewer.scene.canvas;
                const canvas = cesiumCanvas;
                resolve(canvas.toDataURL('image/png'));
            }
            catch (e) {
                reject(e);
            }
        });
    });
    scene.render(viewer.clock.currentTime);
    return promise;
}
function makeCameraOptions(camera) {
    const { Math: CesiumMath, Rectangle } = Cesium;
    let destination = undefined;
    let orientation = {};
    if (hasOwn(camera, 'position')) {
        const position = camera.position;
        destination = makeCartesian3(position);
        if (hasOwn(position, 'lng') && hasOwn(position, 'lat')) {
            orientation = {
                heading: CesiumMath.toRadians(camera.heading || 360),
                pitch: CesiumMath.toRadians(camera.pitch || -90),
                roll: CesiumMath.toRadians(camera.roll || 0)
            };
        }
        else {
            orientation = {
                heading: camera.heading || 2 * Math.PI,
                pitch: camera.pitch || -Math.PI / 2,
                roll: camera.roll || 0
            };
        }
    }
    else if (hasOwn(camera, 'rectangle')) {
        const rectangle = camera.retangle;
        destination = makeRectangle(rectangle);
        Rectangle.validate(destination);
        if (hasOwn(rectangle, 'west') && hasOwn(rectangle, 'south') && hasOwn(rectangle, 'east') && hasOwn(rectangle, 'north')) {
            orientation = {
                heading: CesiumMath.toRadians(camera.heading || 360),
                pitch: CesiumMath.toRadians(camera.pitch || -90),
                roll: CesiumMath.toRadians(camera.roll || 0)
            };
        }
        else {
            orientation = {
                heading: camera.heading || 2 * Math.PI,
                pitch: camera.pitch || -Math.PI / 2,
                roll: camera.roll || 0
            };
        }
    }
    return {
        destination,
        orientation
    };
}
function setViewerCamera(viewer, camera) {
    const { destination, orientation } = makeCameraOptions(camera);
    viewer.camera.setView({
        destination: destination,
        orientation: orientation
    });
}
function flyToCamera(viewer, camera, options) {
    const { destination, orientation } = makeCameraOptions(camera);
    viewer.camera.flyTo({
        destination: options.destination || destination,
        orientation: options.orientation || orientation,
        duration: options.duration,
        complete: options.complete,
        cancel: options.cancel
    });
}

export { captureScreenshot, flyToCamera, makeBoundingRectangle, makeCameraOptions, makeCartesian2, makeCartesian2Array, makeCartesian3, makeCartesian3Array, makeColor, makeDistanceDisplayCondition, makeMaterial, makeMaterialProperty, makeNearFarScalar, makeOptions, makePlane, makePolygonHierarchy, makeQuaternion, makeRectangle, makeTranslationRotationScale, setViewerCamera };
