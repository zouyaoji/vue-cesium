import 'vue';
import { isPlainObject, hasOwn, isArray, isFunction, isString, isObject } from '@vue/shared';
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
function lnglatValidator(longitude, latitude) {
    const longreg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/;
    if (!longreg.test(longitude.toString())) {
        return false;
    }
    const latreg = /^(-|\+)?([0-8]?\d{1}\.\d{0,15}|90\.0{0,15}|[0-8]?\d{1}|90)$/;
    if (!latreg.test(latitude.toString())) {
        return false;
    }
    return true;
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

const position = {
    position: {
        type: [Object, Array, Function],
        validator: val => {
            return val && Object.prototype.hasOwnProperty.call(val, 'lng') ? lnglatValidator(val.lng, val.lat) : true;
        },
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const orientation = {
    orientation: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeQuaternion,
        },
    },
};
const alignedAxis = {
    alignedAxis: {
        type: [Object, Array, Function],
        default: () => {
            return {
                x: 0,
                y: 0,
                z: 0,
            };
        },
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const color = {
    color: {
        type: [Object, String, Array, Function],
        default: 'white',
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const disableDepthTestDistance = {
    disableDepthTestDistance: [Number, Object, Function],
};
const distanceDisplayCondition = {
    distanceDisplayCondition: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeDistanceDisplayCondition,
        },
    },
};
const eyeOffset = {
    eyeOffset: {
        type: [Object, Array, Function],
        default: () => {
            return {
                x: 0,
                y: 0,
                z: 0,
            };
        },
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const height = {
    height: [Number, Object, Function],
};
const heightReference = {
    heightReference: {
        type: [Number, Object, Function],
        default: 0,
    },
};
const horizontalOrigin = {
    horizontalOrigin: {
        type: [Number, Object, Function],
        default: 0,
    },
};
const image = {
    image: [String, Object, HTMLCanvasElement, Function],
};
const imageSubRegion = {
    imageSubRegion: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeBoundingRectangle,
        },
    },
};
const pixelOffset = {
    pixelOffset: {
        type: [Object, Array, Function],
        default: () => {
            return {
                x: 0,
                y: 0,
            };
        },
        validator: v => {
            if (isArray(v)) {
                return v.length === 2;
            }
            if (isObject(v)) {
                return hasOwn(v, 'x') && hasOwn(v, 'y');
            }
            if (isFunction(v)) {
                return true;
            }
            return false;
        },
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian2,
        },
    },
};
const pixelOffsetScaleByDistance = {
    pixelOffsetScaleByDistance: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeNearFarScalar,
        },
    },
};
const rotation = {
    rotation: {
        type: [Number, Object, Function],
        default: 0,
    },
};
const scale = {
    scale: {
        type: [Number, Object, Function],
        default: 1.0,
    },
};
const scaleByDistance = {
    scaleByDistance: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeNearFarScalar,
        },
    },
};
const show = {
    show: {
        type: [Boolean, Object, Function],
        default: true,
    },
};
const sizeInMeters = {
    sizeInMeters: {
        type: [Boolean, Object, Function],
        default: false,
    },
};
const translucencyByDistance = {
    translucencyByDistance: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeNearFarScalar,
        },
    },
};
const verticalOrigin = {
    verticalOrigin: {
        type: [Number, Object, Function],
        default: 0,
    },
};
const width = {
    width: [Number, Object, Function],
};
const dimensions = {
    dimensions: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const fill = {
    fill: {
        type: [Boolean, Object, Function],
        default: true,
    },
};
const material = {
    material: {
        type: [Object, String, Array, Function],
        default: 'white',
        watcherOptions: {
            cesiumObjectBuilder: makeMaterial,
        },
    },
};
const outline = {
    outline: {
        type: [Boolean, Object, Function],
        default: false,
    },
};
const outlineColor = {
    outlineColor: {
        type: [Object, String, Array, Function],
        default: 'black',
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const outlineWidth = {
    outlineWidth: {
        type: [Number, Object, Function],
        default: 1.0,
    },
};
const shadows = {
    shadows: [Number, Object, Function],
};
const positions = {
    type: [Array, Object, Function],
    positions: {
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3Array,
            exclude: '_callback',
        },
    },
};
const extrudedHeight = {
    extrudedHeight: [Number, Object, Function],
};
const extrudedHeightReference = {
    extrudedHeightReference: [Number, Object, Function],
};
const cornerType = {
    cornerType: {
        type: [Number, Object, Function],
        default: 0,
    },
};
const granularity = {
    granularity: [Number, Object, Function],
};
const classificationType = {
    classificationType: {
        type: [Number, Object, Function],
    },
};
const zIndex = {
    zIndex: [Number, Object, Function],
};
const length = {
    length: [Number, Object, Function],
};
const topRadius = {
    topRadius: [Number, Object, Function],
};
const bottomRadius = {
    bottomRadius: [Number, Object, Function],
};
const numberOfVerticalLines = {
    numberOfVerticalLines: {
        type: [Number, Object, Function],
        default: 16,
    },
};
const slices = {
    slices: {
        type: [Number, Object, Function],
        default: 128,
    },
};
const semiMajorAxis = {
    semiMajorAxis: [Number, Object, Function],
};
const semiMinorAxis = {
    semiMinorAxis: [Number, Object, Function],
};
const stRotation = {
    stRotation: {
        type: [Number, Object, Function],
        default: 0.0,
    },
};
const radii = {
    radii: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const innerRadii = {
    innerRadii: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const minimumClock = {
    minimumClock: {
        type: [Number, Object, Function],
        default: 0.0,
    },
};
const maximumClock = {
    maximumClock: {
        type: [Number, Object, Function],
        default: 2 * Math.PI,
    },
};
const minimumCone = {
    minimumCone: {
        type: [Number, Object, Function],
        default: 0.0,
    },
};
const maximumCone = {
    maximumCone: {
        type: [Number, Object, Function],
        default: Math.PI,
    },
};
const stackPartitions = {
    stackPartitions: {
        type: [Number, Object, Function],
        default: 64,
    },
};
const slicePartitions = {
    slicePartitions: {
        type: [Number, Object, Function],
        default: 64,
    },
};
const subdivisions = {
    subdivisions: {
        type: [Number, Object, Function],
        default: 128,
    },
};
const text = {
    text: [String, Object, Function],
};
const font = {
    font: {
        type: [String, Object, Function],
        default: '30px sans-serif',
    },
};
const labelStyle = {
    labelStyle: {
        type: [Number, Object, Function],
        default: 0,
    },
};
const showBackground = {
    showBackground: {
        type: [Boolean, Object, Function],
        default: false,
    },
};
const backgroundColor = {
    backgroundColor: {
        type: [Object, String, Array, Function],
        default: () => {
            return [0.165, 0.165, 0.165, 0.8];
        },
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const backgroundPadding = {
    backgroundPadding: {
        type: [Object, Array, Function],
        default: () => {
            return { x: 7, y: 5 };
        },
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian2,
        },
    },
};
const fillColor = {
    fillColor: {
        type: [Object, String, Array, Function],
        default: 'white',
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const uri = {
    uri: [String, Object, Function],
};
const minimumPixelSize = {
    minimumPixelSize: {
        type: [Number, Object, Function],
        default: 0.0,
    },
};
const maximumScale = {
    maximumScale: [Number, Object, Function],
};
const incrementallyLoadTextures = {
    incrementallyLoadTextures: {
        type: [Boolean, Object, Function],
        default: true,
    },
};
const runAnimations = {
    clampAnimations: {
        type: [Boolean, Object, Function],
        default: true,
    },
};
const clampAnimations = {
    clampAnimations: {
        type: [Boolean, Object, Function],
        default: true,
    },
};
const silhouetteColor = {
    silhouetteColor: {
        typy: [Object, String, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const silhouetteSize = {
    silhouetteSize: {
        type: [Number, Object, Function],
        default: 0.0,
    },
};
const colorBlendMode = {
    colorBlendMode: {
        type: [Number, Object, Function],
        default: 0,
    },
};
const colorBlendAmount = {
    colorBlendAmount: {
        type: [Number, Object, Function],
        default: 0.5,
    },
};
const imageBasedLightingFactor = {
    imageBasedLightingFactor: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian2,
        },
    },
};
const lightColor = {
    lightColor: {
        typy: [Object, String, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const nodeTransformations = {
    nodeTransformations: {
        type: [Object, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeTranslationRotationScale,
        },
    },
};
const articulations = {
    articulations: [Object, Function],
};
const clippingPlanes = {
    clippingPlanes: Object,
};
const plane = {
    plane: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makePlane,
        },
    },
};
const pixelSize = {
    pixelSize: {
        type: [Number, Object, Function],
        default: 1,
    },
};
const hierarchy = {
    hierarchy: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makePolygonHierarchy,
            exclude: '_callback',
        },
    },
};
const perPositionHeight = {
    perPositionHeight: {
        type: [Boolean, Object, Function],
        default: false,
    },
};
const closeTop = {
    closeTop: {
        type: [Boolean, Object, Function],
        default: true,
    },
};
const closeBottom = {
    closeBottom: {
        type: [Boolean, Object, Function],
        default: true,
    },
};
const arcType = {
    arcType: {
        type: [Number, Object, Function],
        default: 1,
    },
};
const depthFailMaterial = {
    depthFailMaterial: {
        type: [Object, String, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeMaterial,
        },
    },
};
const clampToGround = {
    clampToGround: {
        type: [Boolean, Object, Function],
        default: false,
    },
};
const shape = {
    shape: {
        type: [Array, Object, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian2Array,
        },
    },
};
const coordinates = {
    coordinates: {
        type: [Object, Array, Function],
        watcherOptions: {
            cesiumObjectBuilder: makeRectangle,
        },
    },
};
const maximumScreenSpaceError = {
    maximumScreenSpaceError: {
        type: [Number, Object, Function],
        default: 16,
    },
};
const minimumHeights = {
    minimumHeights: [Array, Object, Function],
};
const maximumHeights = {
    maximumHeights: [Array, Object, Function],
};
const cutoutRectangle = {
    cutoutRectangle: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeRectangle,
        },
    },
};
const colorToAlpha = {
    colorToAlpha: {
        type: [Object, String, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const url = {
    url: [String, Object],
};
const token = {
    token: String,
};
const tileDiscardPolicy = {
    tileDiscardPolicy: Object,
};
const layers = {
    layers: String,
};
const enablePickFeatures = {
    enablePickFeatures: {
        type: Boolean,
        default: true,
    },
};
const rectangle = {
    rectangle: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeRectangle,
        },
    },
};
const tilingScheme = {
    tilingScheme: Object,
};
const ellipsoid = {
    ellipsoid: Object,
};
const credit = {
    credit: {
        type: [String, Object],
        default: '',
    },
};
const tileWidth = {
    tileWidth: {
        type: Number,
        default: 256,
    },
};
const tileHeight = {
    tileHeight: {
        type: Number,
        default: 256,
    },
};
const maximumLevel = {
    maximumLevel: Number,
};
const minimumLevel = {
    minimumLevel: {
        type: Number,
        default: 0,
    },
};
const fileExtension = {
    fileExtension: {
        type: String,
        default: 'png',
    },
};
const accessToken = {
    accessToken: String,
};
const format = {
    format: {
        type: String,
        default: 'png',
    },
};
const subdomains = {
    subdomains: [String, Array],
};
const getFeatureInfoFormats = {
    getFeatureInfoFormats: Array,
};
const clock = {
    clock: Object,
};
const times = {
    times: Object,
};
const aaMixin = {
    allowPicking: {
        type: Boolean,
        default: true,
    },
    asynchronous: {
        type: Boolean,
        default: true,
    },
};
const debugShowShadowVolume = {
    debugShowShadowVolume: {
        type: Boolean,
        default: false,
    },
};
const releaseGeometryInstances = {
    releaseGeometryInstances: {
        type: Boolean,
        default: true,
    },
};
const interleave = {
    interleave: {
        type: Boolean,
        default: false,
    },
};
const appearance = {
    appearance: Object,
};
const geometryInstances = {
    geometryInstances: [Array, Object],
};
const vcMixin = {
    vertexCacheOptimize: {
        type: Boolean,
        default: false,
    },
    compressVertices: {
        type: Boolean,
        default: true,
    },
};
const modelMatrix = {
    modelMatrix: Object,
};
const debugShowBoundingVolume = {
    debugShowBoundingVolume: {
        tyep: Boolean,
        default: false,
    },
};
const scene = {
    scene: Object,
};
const blendOption = {
    blendOption: {
        type: Number,
        default: 2,
    },
};
const id = {
    id: null,
};
const loop = {
    loop: {
        type: Boolean,
        default: false,
    },
};
const debugWireframe = {
    debugWireframe: {
        type: Boolean,
        default: false,
    },
};
const vertexFormat = {
    vertexFormat: Object,
};
const center = {
    center: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const radius = {
    radius: Number,
};
const frustum = {
    frustum: Object,
};
const origin = {
    origin: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const polygonHierarchy = {
    polygonHierarchy: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makePolygonHierarchy,
        },
    },
};
const startColor = {
    startColor: {
        type: [Object, String, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const endColor = {
    endColor: {
        type: [Object, String, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const minimumImageSize = {
    minimumImageSize: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian2,
        },
    },
};
const maximumImageSize = {
    maximumImageSize: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian2,
        },
    },
};
const imageSize = {
    imageSize: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian2,
        },
    },
};
const shapePositions = {
    shapePositions: {
        type: Array,
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian2Array,
        },
    },
};
const polylinePositions = {
    polylinePositions: {
        type: Array,
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3Array,
        },
    },
};
const lightColor2 = {
    lightColor: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3,
        },
    },
};
const luminanceAtZenith = {
    luminanceAtZenith: {
        type: Number,
        default: 0.2,
    },
};
const sphericalHarmonicCoefficients = {
    sphericalHarmonicCoefficients: {
        type: [Array, Object],
        watcherOptions: {
            cesiumObjectBuilder: makeCartesian3Array,
        },
    },
};
const specularEnvironmentMaps = {
    specularEnvironmentMaps: String,
};
const backFaceCulling = {
    backFaceCulling: {
        type: Boolean,
        default: true,
    },
};
const data = {
    data: {
        type: [String, Object],
        required: true,
    },
};
const options = {
    options: {
        type: Object,
        watcherOptions: {
            cesiumObjectBuilder: makeOptions,
            deep: true,
        },
    },
};
const glowColor = {
    glowColor: {
        type: [String, Array, Object],
        default: () => [0.0, 1.0, 0.0, 0.05],
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const clearColor = {
    clearColor: {
        type: [String, Array, Object],
        watcherOptions: {
            cesiumObjectBuilder: makeColor,
        },
    },
};
const scissorRectangle = {
    scissorRectangle: {
        type: [Object, Array],
        watcherOptions: {
            cesiumObjectBuilder: makeBoundingRectangle,
        },
    },
};

export { aaMixin, accessToken, alignedAxis, appearance, arcType, articulations, backFaceCulling, backgroundColor, backgroundPadding, blendOption, bottomRadius, center, clampAnimations, clampToGround, classificationType, clearColor, clippingPlanes, clock, closeBottom, closeTop, color, colorBlendAmount, colorBlendMode, colorToAlpha, coordinates, cornerType, credit, cutoutRectangle, data, debugShowBoundingVolume, debugShowShadowVolume, debugWireframe, depthFailMaterial, dimensions, disableDepthTestDistance, distanceDisplayCondition, ellipsoid, enablePickFeatures, endColor, extrudedHeight, extrudedHeightReference, eyeOffset, fileExtension, fill, fillColor, font, format, frustum, geometryInstances, getFeatureInfoFormats, glowColor, granularity, height, heightReference, hierarchy, horizontalOrigin, id, image, imageBasedLightingFactor, imageSize, imageSubRegion, incrementallyLoadTextures, innerRadii, interleave, labelStyle, layers, length, lightColor, lightColor2, loop, luminanceAtZenith, material, maximumClock, maximumCone, maximumHeights, maximumImageSize, maximumLevel, maximumScale, maximumScreenSpaceError, minimumClock, minimumCone, minimumHeights, minimumImageSize, minimumLevel, minimumPixelSize, modelMatrix, nodeTransformations, numberOfVerticalLines, options, orientation, origin, outline, outlineColor, outlineWidth, perPositionHeight, pixelOffset, pixelOffsetScaleByDistance, pixelSize, plane, polygonHierarchy, polylinePositions, position, positions, radii, radius, rectangle, releaseGeometryInstances, rotation, runAnimations, scale, scaleByDistance, scene, scissorRectangle, semiMajorAxis, semiMinorAxis, shadows, shape, shapePositions, show, showBackground, silhouetteColor, silhouetteSize, sizeInMeters, slicePartitions, slices, specularEnvironmentMaps, sphericalHarmonicCoefficients, stRotation, stackPartitions, startColor, subdivisions, subdomains, text, tileDiscardPolicy, tileHeight, tileWidth, tilingScheme, times, token, topRadius, translucencyByDistance, uri, url, vcMixin, vertexFormat, verticalOrigin, width, zIndex };
