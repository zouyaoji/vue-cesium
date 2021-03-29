interface EarthGravityModel1996 {
    gridFileUrl: string;
    data: unknown;
    minimumHeight: number;
    maximumHeight: number;
}
declare class EarthGravityModel1996 {
    constructor(gridFileUrl: any);
    isSupported(): boolean;
    getHeight(longitude: any, latitude: any): any;
    getHeights(cartographicArray: any): any;
}
export default EarthGravityModel1996;
