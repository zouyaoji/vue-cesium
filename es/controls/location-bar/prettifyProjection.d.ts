declare function prettifyProjection(longitude: any, latitude: any, proj4Projection: any, proj4longlat: any, projectionUnits: any): {
    utmZone: string;
    north: any;
    east: any;
};
export default prettifyProjection;
