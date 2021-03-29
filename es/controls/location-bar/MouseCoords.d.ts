import EarthGravityModel1996 from './EarthGravityModel1996';
import { Cesium as CesiumNative } from '@vue-cesium/utils/types';
interface MouseCoords {
    proj4Projection: string;
    projectionUnits: string;
    proj4longlat: string;
    lastHeightSamplePosition: CesiumNative.Cartographic;
    accurateSamplingDebounceTime: number;
    tileRequestInFlight: Promise<any>;
    elevation: string;
    utmZone: string;
    latitude: string;
    longitude: string;
    north: string;
    east: string;
    geoidModel: EarthGravityModel1996;
    useProjection: boolean;
    debounceSampleAccurateHeight: any;
}
interface MouseCoordsOption {
    gridFileUrl: string;
}
declare class MouseCoords {
    constructor(options: MouseCoordsOption);
    toggleUseProjection(): void;
    updateCoordinatesFromCesium(viewer: any, position: any): void;
    cartographicToFields(coordinates: any, errorBar?: any): void;
    sampleAccurateHeight(terrainProvider: any, position: any): void;
}
export declare function extendForMouseCoords(): void;
export default MouseCoords;
