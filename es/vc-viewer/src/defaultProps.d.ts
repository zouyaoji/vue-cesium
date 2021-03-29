import { CameraObj, Cesium } from '../../vc-utils/types';
import { PropType } from 'vue';
declare const _default: {
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
        type: PropType<boolean | Cesium.GeocoderService[]>;
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
    clockViewModel: PropType<Cesium.ClockViewModel>;
    selectedImageryProviderViewModel: PropType<Cesium.ProviderViewModel>;
    imageryProviderViewModels: PropType<Cesium.ProviderViewModel[]>;
    selectedTerrainProviderViewModel: PropType<Cesium.ProviderViewModel>;
    terrainProviderViewModels: PropType<Cesium.ProviderViewModel[]>;
    imageryProvider: PropType<Cesium.ImageryProvider>;
    terrainProvider: PropType<Cesium.TerrainProvider>;
    skyBox: PropType<Cesium.SkyBox>;
    skyAtmosphere: PropType<Cesium.SkyAtmosphere>;
    fullscreenElement: {
        type: PropType<string | Element>;
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
    mapProjection: PropType<Cesium.MapProjection>;
    globe: PropType<Cesium.Globe>;
    orderIndependentTranslucency: {
        type: BooleanConstructor;
        default: boolean;
    };
    creditContainer: StringConstructor;
    creditViewport: StringConstructor;
    dataSources: PropType<Cesium.DataSourceCollection>;
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
        type: PropType<CameraObj>;
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
};
export default _default;
