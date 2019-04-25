attribute vec2 st;
// it is not normal itself, but used to control normal
attribute vec3 normal; // (point to use, offset sign, not used component)

uniform sampler2D currentParticlesRandomized;
uniform sampler2D nextParticlesRandomized;
uniform sampler2D particlesRelativeSpeed;

uniform float particleHeight;

uniform float aspect;
uniform float pixelSize;
uniform float lineWidth;

varying float relativeSpeed;

vec3 convertCoordinate(vec3 lonLatLev) {
    // WGS84 (lon, lat, lev) -> ECEF (x, y, z)
    // see https://en.wikipedia.org/wiki/Geographic_coordinate_conversion#From_geodetic_to_ECEF_coordinates for detail
	
    // WGS 84 geometric constants 
    float a = 6378137.0; // Semi-major axis 
    float b = 6356752.3142; // Semi-minor axis 
    float e2 = 6.69437999014e-3; // First eccentricity squared

    float latitude = radians(lonLatLev.y);
    float longitude = radians(lonLatLev.x);

    float cosLat = cos(latitude);
    float sinLat = sin(latitude);
    float cosLon = cos(longitude);
    float sinLon = sin(longitude);

    float N_Phi = a / sqrt(1.0 - e2 * sinLat * sinLat);
    float h = particleHeight; // it should be high enough otherwise the particle may not pass the terrain depth test

    vec3 cartesian = vec3(0.0);
    cartesian.x = (N_Phi + h) * cosLat * cosLon;
    cartesian.y = (N_Phi + h) * cosLat * sinLon;
    cartesian.z = ((b * b) / (a * a) * N_Phi + h) * sinLat;
    return cartesian;
}

vec4 calcProjectedCoord(vec3 lonLatLev) {
    // the range of longitude in Cesium is [-180, 180] but the range of longitude in the NetCDF file is [0, 360]
    // [0, 180] is corresponding to [0, 180] and [180, 360] is corresponding to [-180, 0]
    lonLatLev.x = mod(lonLatLev.x + 180.0, 360.0) - 180.0;
    vec3 particlePosition = convertCoordinate(lonLatLev);
    vec4 projectedCoord = czm_modelViewProjection * vec4(particlePosition, 1.0);
    return projectedCoord;
}

vec4 calcOffset(vec4 currentProjectedCoord, vec4 nextProjectedCoord, float offsetSign) {
    vec2 aspectVec2 = vec2(aspect, 1.0);
    vec2 currentXY = (currentProjectedCoord.xy / currentProjectedCoord.w) * aspectVec2;
    vec2 nextXY = (nextProjectedCoord.xy / nextProjectedCoord.w) * aspectVec2;

    float offsetLength = lineWidth / 2.0;
    vec2 direction = normalize(nextXY - currentXY);
    vec2 normalVector = vec2(-direction.y, direction.x);
	normalVector.x = normalVector.x / aspect;
    normalVector = offsetLength * normalVector;

    vec4 offset = vec4(offsetSign * normalVector, 0.0, 0.0);
    return offset;
}

void main() {
    vec2 particleIndex = st;

    vec4 currentProjectedCoord = calcProjectedCoord(texture2D(currentParticlesRandomized, particleIndex).rgb);
    vec4 nextProjectedCoord = calcProjectedCoord(texture2D(nextParticlesRandomized, particleIndex).rgb);
    
	float pointToUse = normal.x; // -1 is currentProjectedCoord and +1 is nextProjectedCoord
	float offsetSign = normal.y;
	
    vec4 offset = pixelSize * calcOffset(currentProjectedCoord, nextProjectedCoord, offsetSign);
    if (pointToUse < 0.0) {
        gl_Position = currentProjectedCoord + offset;
    } else {
        gl_Position = nextProjectedCoord + offset;
    }
	
    relativeSpeed = length(texture2D(particlesRelativeSpeed, particleIndex).rgb);
}