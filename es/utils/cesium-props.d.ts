import { makeDistanceDisplayCondition, makeCartesian2, makeCartesian2Array, makeCartesian3, makeColor, makeNearFarScalar, makeMaterial, makeCartesian3Array, makeRectangle, makeBoundingRectangle, makePlane, makePolygonHierarchy, makeTranslationRotationScale, makeQuaternion, makeOptions } from './cesium-helpers';
declare const position: {
    position: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        validator: (val: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const orientation: {
    orientation: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeQuaternion;
        };
    };
};
declare const alignedAxis: {
    alignedAxis: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const color: {
    color: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor | StringConstructor)[];
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const disableDepthTestDistance: {
    disableDepthTestDistance: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const distanceDisplayCondition: {
    distanceDisplayCondition: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeDistanceDisplayCondition;
        };
    };
};
declare const eyeOffset: {
    eyeOffset: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const height: {
    height: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const heightReference: {
    heightReference: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const horizontalOrigin: {
    horizontalOrigin: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const image: {
    image: (ObjectConstructor | FunctionConstructor | StringConstructor | {
        new (): HTMLCanvasElement;
        prototype: HTMLCanvasElement;
    })[];
};
declare const imageSubRegion: {
    imageSubRegion: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeBoundingRectangle;
        };
    };
};
declare const pixelOffset: {
    pixelOffset: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
declare const pixelOffsetScaleByDistance: {
    pixelOffsetScaleByDistance: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeNearFarScalar;
        };
    };
};
declare const rotation: {
    rotation: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const scale: {
    scale: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const scaleByDistance: {
    scaleByDistance: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeNearFarScalar;
        };
    };
};
declare const show: {
    show: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const sizeInMeters: {
    sizeInMeters: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const translucencyByDistance: {
    translucencyByDistance: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeNearFarScalar;
        };
    };
};
declare const verticalOrigin: {
    verticalOrigin: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const width: {
    width: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const dimensions: {
    dimensions: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const fill: {
    fill: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const material: {
    material: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor | StringConstructor)[];
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeMaterial;
        };
    };
};
declare const outline: {
    outline: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const outlineColor: {
    outlineColor: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor | StringConstructor)[];
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const outlineWidth: {
    outlineWidth: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const shadows: {
    shadows: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const positions: {
    type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
    positions: {
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
            exclude: string;
        };
    };
};
declare const extrudedHeight: {
    extrudedHeight: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const extrudedHeightReference: {
    extrudedHeightReference: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const cornerType: {
    cornerType: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const granularity: {
    granularity: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const classificationType: {
    classificationType: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    };
};
declare const zIndex: {
    zIndex: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const length: {
    length: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const topRadius: {
    topRadius: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const bottomRadius: {
    bottomRadius: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const numberOfVerticalLines: {
    numberOfVerticalLines: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const slices: {
    slices: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const semiMajorAxis: {
    semiMajorAxis: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const semiMinorAxis: {
    semiMinorAxis: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const stRotation: {
    stRotation: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const radii: {
    radii: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const innerRadii: {
    innerRadii: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const minimumClock: {
    minimumClock: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const maximumClock: {
    maximumClock: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const minimumCone: {
    minimumCone: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const maximumCone: {
    maximumCone: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const stackPartitions: {
    stackPartitions: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const slicePartitions: {
    slicePartitions: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const subdivisions: {
    subdivisions: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const text: {
    text: (ObjectConstructor | FunctionConstructor | StringConstructor)[];
};
declare const font: {
    font: {
        type: (ObjectConstructor | FunctionConstructor | StringConstructor)[];
        default: string;
    };
};
declare const labelStyle: {
    labelStyle: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const showBackground: {
    showBackground: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const backgroundColor: {
    backgroundColor: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor | StringConstructor)[];
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const backgroundPadding: {
    backgroundPadding: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        default: () => {
            x: number;
            y: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
declare const fillColor: {
    fillColor: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor | StringConstructor)[];
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const uri: {
    uri: (ObjectConstructor | FunctionConstructor | StringConstructor)[];
};
declare const minimumPixelSize: {
    minimumPixelSize: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const maximumScale: {
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
declare const incrementallyLoadTextures: {
    incrementallyLoadTextures: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const runAnimations: {
    clampAnimations: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const clampAnimations: {
    clampAnimations: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const silhouetteColor: {
    silhouetteColor: {
        typy: (ObjectConstructor | ArrayConstructor | FunctionConstructor | StringConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const silhouetteSize: {
    silhouetteSize: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const colorBlendMode: {
    colorBlendMode: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const colorBlendAmount: {
    colorBlendAmount: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const imageBasedLightingFactor: {
    imageBasedLightingFactor: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
declare const lightColor: {
    lightColor: {
        typy: (ObjectConstructor | ArrayConstructor | FunctionConstructor | StringConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const nodeTransformations: {
    nodeTransformations: {
        type: (ObjectConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeTranslationRotationScale;
        };
    };
};
declare const articulations: {
    articulations: (ObjectConstructor | FunctionConstructor)[];
};
declare const clippingPlanes: {
    clippingPlanes: ObjectConstructor;
};
declare const plane: {
    plane: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makePlane;
        };
    };
};
declare const pixelSize: {
    pixelSize: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const hierarchy: {
    hierarchy: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makePolygonHierarchy;
            exclude: string;
        };
    };
};
declare const perPositionHeight: {
    perPositionHeight: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const closeTop: {
    closeTop: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const closeBottom: {
    closeBottom: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const arcType: {
    arcType: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const depthFailMaterial: {
    depthFailMaterial: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor | StringConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeMaterial;
        };
    };
};
declare const clampToGround: {
    clampToGround: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
declare const shape: {
    shape: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2Array;
        };
    };
};
declare const coordinates: {
    coordinates: {
        type: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
};
declare const maximumScreenSpaceError: {
    maximumScreenSpaceError: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
};
declare const minimumHeights: {
    minimumHeights: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
};
declare const maximumHeights: {
    maximumHeights: (ObjectConstructor | ArrayConstructor | FunctionConstructor)[];
};
declare const cutoutRectangle: {
    cutoutRectangle: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
};
declare const colorToAlpha: {
    colorToAlpha: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const url: {
    url: (ObjectConstructor | StringConstructor)[];
};
declare const token: {
    token: StringConstructor;
};
declare const tileDiscardPolicy: {
    tileDiscardPolicy: ObjectConstructor;
};
declare const layers: {
    layers: StringConstructor;
};
declare const enablePickFeatures: {
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const rectangle: {
    rectangle: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
};
declare const tilingScheme: {
    tilingScheme: ObjectConstructor;
};
declare const ellipsoid: {
    ellipsoid: ObjectConstructor;
};
declare const credit: {
    credit: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
};
declare const tileWidth: {
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
};
declare const tileHeight: {
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
};
declare const maximumLevel: {
    maximumLevel: NumberConstructor;
};
declare const minimumLevel: {
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
};
declare const fileExtension: {
    fileExtension: {
        type: StringConstructor;
        default: string;
    };
};
declare const accessToken: {
    accessToken: StringConstructor;
};
declare const format: {
    format: {
        type: StringConstructor;
        default: string;
    };
};
declare const subdomains: {
    subdomains: (ArrayConstructor | StringConstructor)[];
};
declare const getFeatureInfoFormats: {
    getFeatureInfoFormats: ArrayConstructor;
};
declare const clock: {
    clock: ObjectConstructor;
};
declare const times: {
    times: ObjectConstructor;
};
declare const aaMixin: {
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const debugShowShadowVolume: {
    debugShowShadowVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const releaseGeometryInstances: {
    releaseGeometryInstances: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const interleave: {
    interleave: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const appearance: {
    appearance: ObjectConstructor;
};
declare const geometryInstances: {
    geometryInstances: (ObjectConstructor | ArrayConstructor)[];
};
declare const vcMixin: {
    vertexCacheOptimize: {
        type: BooleanConstructor;
        default: boolean;
    };
    compressVertices: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const modelMatrix: {
    modelMatrix: ObjectConstructor;
};
declare const debugShowBoundingVolume: {
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
};
declare const scene: {
    scene: ObjectConstructor;
};
declare const blendOption: {
    blendOption: {
        type: NumberConstructor;
        default: number;
    };
};
declare const id: {
    id: any;
};
declare const loop: {
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const debugWireframe: {
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const vertexFormat: {
    vertexFormat: ObjectConstructor;
};
declare const center: {
    center: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const radius: {
    radius: NumberConstructor;
};
declare const frustum: {
    frustum: ObjectConstructor;
};
declare const origin: {
    origin: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const polygonHierarchy: {
    polygonHierarchy: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makePolygonHierarchy;
        };
    };
};
declare const startColor: {
    startColor: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const endColor: {
    endColor: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const minimumImageSize: {
    minimumImageSize: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
declare const maximumImageSize: {
    maximumImageSize: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
declare const imageSize: {
    imageSize: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
declare const shapePositions: {
    shapePositions: {
        type: ArrayConstructor;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2Array;
        };
    };
};
declare const polylinePositions: {
    polylinePositions: {
        type: ArrayConstructor;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
        };
    };
};
declare const lightColor2: {
    lightColor: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
declare const luminanceAtZenith: {
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
};
declare const sphericalHarmonicCoefficients: {
    sphericalHarmonicCoefficients: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
        };
    };
};
declare const specularEnvironmentMaps: {
    specularEnvironmentMaps: StringConstructor;
};
declare const backFaceCulling: {
    backFaceCulling: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const data: {
    data: {
        type: (ObjectConstructor | StringConstructor)[];
        required: boolean;
    };
};
declare const options: {
    options: {
        type: ObjectConstructor;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeOptions;
            deep: boolean;
        };
    };
};
declare const glowColor: {
    glowColor: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const clearColor: {
    clearColor: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const scissorRectangle: {
    scissorRectangle: {
        type: (ObjectConstructor | ArrayConstructor)[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeBoundingRectangle;
        };
    };
};
export { backFaceCulling, specularEnvironmentMaps, sphericalHarmonicCoefficients, luminanceAtZenith, maximumScreenSpaceError, runAnimations, articulations, scissorRectangle, clearColor, glowColor, options, data, imageSubRegion, coordinates, nodeTransformations, hierarchy, plane, colorToAlpha, cutoutRectangle, polylinePositions, shapePositions, imageSize, maximumImageSize, minimumImageSize, endColor, startColor, shape, lightColor, lightColor2, imageBasedLightingFactor, polygonHierarchy, orientation, origin, frustum, maximumCone, minimumCone, maximumClock, minimumClock, innerRadii, radius, center, debugWireframe, vertexFormat, position, loop, geometryInstances, appearance, interleave, releaseGeometryInstances, debugShowShadowVolume, id, aaMixin, vcMixin, modelMatrix, debugShowBoundingVolume, scene, blendOption, maximumHeights, minimumHeights, arcType, clampToGround, closeBottom, closeTop, perPositionHeight, pixelSize, clippingPlanes, colorBlendAmount, colorBlendMode, silhouetteSize, silhouetteColor, clampAnimations, incrementallyLoadTextures, maximumScale, minimumPixelSize, uri, fillColor, backgroundPadding, backgroundColor, showBackground, labelStyle, font, text, subdivisions, slicePartitions, stackPartitions, radii, stRotation, semiMinorAxis, semiMajorAxis, slices, numberOfVerticalLines, bottomRadius, topRadius, length, zIndex, classificationType, granularity, cornerType, extrudedHeightReference, extrudedHeight, positions, image, scale, pixelOffset, eyeOffset, horizontalOrigin, verticalOrigin, heightReference, color, rotation, alignedAxis, sizeInMeters, width, height, scaleByDistance, translucencyByDistance, pixelOffsetScaleByDistance, disableDepthTestDistance, dimensions, fill, depthFailMaterial, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition, show, times, clock, getFeatureInfoFormats, subdomains, format, accessToken, fileExtension, minimumLevel, maximumLevel, tileHeight, url, token, tileDiscardPolicy, layers, enablePickFeatures, rectangle, tilingScheme, ellipsoid, credit, tileWidth, };
