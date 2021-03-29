/// <reference path="../../../../../../typings/cesium-shim.d.ts" />
/// <reference types="cesium" />
declare const _default: import("vue").DefineComponent<{
    cesiumPath: StringConstructor;
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    baseLayerPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreenButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    vrButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    geocoder: {
        type: import("vue").PropType<boolean | import("cesium").GeocoderService[]>;
        default: boolean;
    };
    homeButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    infoBox: {
        type: BooleanConstructor;
        default: boolean;
    };
    sceneModePicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectionIndicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    timeline: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigationHelpButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigationInstructionsInitiallyVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    scene3DOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    shouldAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    clockViewModel: import("vue").PropType<import("cesium").ClockViewModel>;
    selectedImageryProviderViewModel: import("vue").PropType<import("cesium").ProviderViewModel>;
    imageryProviderViewModels: import("vue").PropType<import("cesium").ProviderViewModel[]>;
    selectedTerrainProviderViewModel: import("vue").PropType<import("cesium").ProviderViewModel>;
    terrainProviderViewModels: import("vue").PropType<import("cesium").ProviderViewModel[]>;
    imageryProvider: import("vue").PropType<import("cesium").ImageryProvider>;
    terrainProvider: import("vue").PropType<import("cesium").TerrainProvider>;
    skyBox: import("vue").PropType<import("cesium").SkyBox>;
    skyAtmosphere: import("vue").PropType<import("cesium").SkyAtmosphere>;
    fullscreenElement: {
        type: import("vue").PropType<string | Element>;
    };
    useDefaultRenderLoop: {
        type: BooleanConstructor;
        default: boolean;
    };
    targetFrameRate: NumberConstructor;
    showRenderLoopErrors: {
        type: BooleanConstructor;
        default: boolean;
    };
    useBrowserRecommendedResolution: {
        type: BooleanConstructor;
        default: boolean;
    };
    automaticallyTrackDataSourceClocks: {
        type: BooleanConstructor;
        default: boolean;
    };
    contextOptions: ObjectConstructor;
    sceneMode: {
        type: NumberConstructor;
        default: number;
    };
    mapProjection: import("vue").PropType<import("cesium").MapProjection>;
    globe: import("vue").PropType<import("cesium").Globe>;
    orderIndependentTranslucency: {
        type: BooleanConstructor;
        default: boolean;
    };
    creditContainer: StringConstructor;
    creditViewport: StringConstructor;
    dataSources: import("vue").PropType<import("cesium").DataSourceCollection>;
    terrainExaggeration: {
        type: NumberConstructor;
        default: number;
    };
    shadows: {
        type: BooleanConstructor;
        default: boolean;
    };
    terrainShadows: {
        type: NumberConstructor;
        default: number;
    };
    mapMode2D: {
        type: NumberConstructor;
        default: number;
    };
    projectionPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    requestRenderMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximumRenderTimeChange: {
        type: NumberConstructor;
        default: number;
    };
    debugShowFramesPerSecond: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    accessToken: StringConstructor;
    camera: {
        type: import("vue").PropType<import("../../vc-utils/types").CameraObj>;
        default: () => {
            position: {
                lng: number;
                lat: number;
                height: number;
            };
            heading: number;
            pitch: number;
            roll: number;
        };
    };
    navigation: {
        type: BooleanConstructor;
        default: boolean;
    };
    TZCode: {
        type: StringConstructor;
        default: string;
    };
    UTCOffset: {
        type: NumberConstructor;
        default: number;
    };
    removeCesiumScript: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSortImageryLayers: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    skeleton: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: {
            dark: boolean;
            animation: string;
            square: boolean;
            bordered: boolean;
            color: any;
        };
    };
}, () => any[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    camera: {
        position: {
            lng: number;
            lat: number;
            height: number;
        };
        heading: number;
        pitch: number;
        roll: number;
    };
    infoBox: boolean;
    animation: boolean;
    baseLayerPicker: boolean;
    fullscreenButton: boolean;
    vrButton: boolean;
    geocoder: boolean | import("cesium").GeocoderService[];
    homeButton: boolean;
    sceneModePicker: boolean;
    selectionIndicator: boolean;
    timeline: boolean;
    navigationHelpButton: boolean;
    navigationInstructionsInitiallyVisible: boolean;
    scene3DOnly: boolean;
    shouldAnimate: boolean;
    useDefaultRenderLoop: boolean;
    showRenderLoopErrors: boolean;
    useBrowserRecommendedResolution: boolean;
    automaticallyTrackDataSourceClocks: boolean;
    sceneMode: number;
    orderIndependentTranslucency: boolean;
    terrainExaggeration: number;
    shadows: boolean;
    terrainShadows: number;
    mapMode2D: number;
    projectionPicker: boolean;
    requestRenderMode: boolean;
    maximumRenderTimeChange: number;
    debugShowFramesPerSecond: boolean;
    showCredit: boolean;
    navigation: boolean;
    TZCode: string;
    UTCOffset: number;
    removeCesiumScript: boolean;
    autoSortImageryLayers: boolean;
    enableEvent: boolean;
    skeleton: {
        dark: boolean;
        animation: string;
        square: boolean;
        bordered: boolean;
        color: any;
    };
} & {
    dataSources?: import("cesium").DataSourceCollection;
    terrainProvider?: import("cesium").TerrainProvider;
    globe?: import("cesium").Globe;
    cesiumPath?: string;
    clockViewModel?: import("cesium").ClockViewModel;
    selectedImageryProviderViewModel?: import("cesium").ProviderViewModel;
    imageryProviderViewModels?: import("cesium").ProviderViewModel[];
    selectedTerrainProviderViewModel?: import("cesium").ProviderViewModel;
    terrainProviderViewModels?: import("cesium").ProviderViewModel[];
    imageryProvider?: import("cesium").ImageryProvider;
    skyBox?: import("cesium").SkyBox;
    skyAtmosphere?: import("cesium").SkyAtmosphere;
    fullscreenElement?: string | Element;
    targetFrameRate?: number;
    contextOptions?: Record<string, any>;
    mapProjection?: import("cesium").MapProjection;
    creditContainer?: string;
    creditViewport?: string;
    accessToken?: string;
}>, {
    camera: {
        position: {
            lng: number;
            lat: number;
            height: number;
        };
        heading: number;
        pitch: number;
        roll: number;
    };
    infoBox: boolean;
    animation: boolean;
    baseLayerPicker: boolean;
    fullscreenButton: boolean;
    vrButton: boolean;
    geocoder: boolean | import("cesium").GeocoderService[];
    homeButton: boolean;
    sceneModePicker: boolean;
    selectionIndicator: boolean;
    timeline: boolean;
    navigationHelpButton: boolean;
    navigationInstructionsInitiallyVisible: boolean;
    scene3DOnly: boolean;
    shouldAnimate: boolean;
    useDefaultRenderLoop: boolean;
    showRenderLoopErrors: boolean;
    useBrowserRecommendedResolution: boolean;
    automaticallyTrackDataSourceClocks: boolean;
    sceneMode: number;
    orderIndependentTranslucency: boolean;
    terrainExaggeration: number;
    shadows: boolean;
    terrainShadows: number;
    mapMode2D: number;
    projectionPicker: boolean;
    requestRenderMode: boolean;
    maximumRenderTimeChange: number;
    debugShowFramesPerSecond: boolean;
    showCredit: boolean;
    navigation: boolean;
    TZCode: string;
    UTCOffset: number;
    removeCesiumScript: boolean;
    autoSortImageryLayers: boolean;
    enableEvent: boolean;
    skeleton: {
        dark: boolean;
        animation: string;
        square: boolean;
        bordered: boolean;
        color: any;
    };
}>;
export default _default;
