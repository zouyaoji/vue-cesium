const fullscreenVert = `
attribute vec3 position;
attribute vec2 st;

varying vec2 textureCoordinate;

void main() {
    textureCoordinate = st;
    gl_Position = vec4(position, 1.0);
}
`

const getWindFrag = `
// the size of UV textures: width = lon, height = lat*lev
uniform sampler2D U; // eastward wind
uniform sampler2D V; // northward wind

uniform sampler2D currentParticlesPosition; // (lon, lat, lev)

uniform vec3 dimension; // (lon, lat, lev)
uniform vec3 minimum; // minimum of each dimension
uniform vec3 maximum; // maximum of each dimension
uniform vec3 interval; // interval of each dimension

varying vec2 v_textureCoordinates;

vec2 mapPositionToNormalizedIndex2D(vec3 lonLatLev) {
    // ensure the range of longitude and latitude
    lonLatLev.x = mod(lonLatLev.x, 360.0);
    lonLatLev.y = clamp(lonLatLev.y, -90.0, 90.0);

    vec3 index3D = vec3(0.0);
    index3D.x = (lonLatLev.x - minimum.x) / interval.x;
    index3D.y = (lonLatLev.y - minimum.y) / interval.y;
    index3D.z = (lonLatLev.z - minimum.z) / interval.z;

    // the st texture coordinate corresponding to (col, row) index
    // example
    // data array is [0, 1, 2, 3, 4, 5], width = 3, height = 2
    // the content of texture will be
    // t 1.0
    //    |  3 4 5
    //    |
    //    |  0 1 2
    //   0.0------1.0 s

    vec2 index2D = vec2(index3D.x, index3D.z * dimension.y + index3D.y);
    vec2 normalizedIndex2D = vec2(index2D.x / dimension.x, index2D.y / (dimension.y * dimension.z));
    return normalizedIndex2D;
}

float getWind(sampler2D windTexture, vec3 lonLatLev) {
    vec2 normalizedIndex2D = mapPositionToNormalizedIndex2D(lonLatLev);
    float result = texture2D(windTexture, normalizedIndex2D).r;
    return result;
}

const mat4 kernelMatrix = mat4(
    0.0, -1.0, 2.0, -1.0, // first column
    2.0, 0.0, -5.0, 3.0, // second column
    0.0, 1.0, 4.0, -3.0, // third column
    0.0, 0.0, -1.0, 1.0 // fourth column
);
float oneDimensionInterpolation(float t, float p0, float p1, float p2, float p3) {
    vec4 tVec4 = vec4(1.0, t, t * t, t * t * t);
    tVec4 = tVec4 / 2.0;
    vec4 pVec4 = vec4(p0, p1, p2, p3);
    return dot((tVec4 * kernelMatrix), pVec4);
}

float calculateB(sampler2D windTexture, float t, float lon, float lat, float lev) {
    float lon0 = floor(lon) - 1.0 * interval.x;
    float lon1 = floor(lon);
    float lon2 = floor(lon) + 1.0 * interval.x;
    float lon3 = floor(lon) + 2.0 * interval.x;

    float p0 = getWind(windTexture, vec3(lon0, lat, lev));
    float p1 = getWind(windTexture, vec3(lon1, lat, lev));
    float p2 = getWind(windTexture, vec3(lon2, lat, lev));
    float p3 = getWind(windTexture, vec3(lon3, lat, lev));

    return oneDimensionInterpolation(t, p0, p1, p2, p3);
}

float interpolateOneTexture(sampler2D windTexture, vec3 lonLatLev) {
    float lon = lonLatLev.x;
    float lat = lonLatLev.y;
    float lev = lonLatLev.z;

    float lat0 = floor(lat) - 1.0 * interval.y;
    float lat1 = floor(lat);
    float lat2 = floor(lat) + 1.0 * interval.y;
    float lat3 = floor(lat) + 2.0 * interval.y;

    vec2 coef = lonLatLev.xy - floor(lonLatLev.xy);
    float b0 = calculateB(windTexture, coef.x, lon, lat0, lev);
    float b1 = calculateB(windTexture, coef.x, lon, lat1, lev);
    float b2 = calculateB(windTexture, coef.x, lon, lat2, lev);
    float b3 = calculateB(windTexture, coef.x, lon, lat3, lev);

    return oneDimensionInterpolation(coef.y, b0, b1, b2, b3);
}

vec3 bicubic(vec3 lonLatLev) {
    // https://en.wikipedia.org/wiki/Bicubic_interpolation#Bicubic_convolution_algorithm
    float u = interpolateOneTexture(U, lonLatLev);
    float v = interpolateOneTexture(V, lonLatLev);
    float w = 0.0;
    return vec3(u, v, w);
}

const float h = 1.0;
vec3 rungeKutta4(vec3 lonLatLev) {
    vec3 p1 = lonLatLev;
    vec3 k1 = bicubic(p1);

    vec3 p2 = p1;
    p2.xy = p2.xy + 0.5 * h * k1.xy;
    vec3 k2 = bicubic(p2);

    vec3 p3 = p1;
    p3.xy = p3.xy + 0.5 * h * k2.xy;
    vec3 k3 = bicubic(p3);

    vec3 p4 = p1;
    p4.xy = p4.xy + h * k3.xy;
    vec3 k4 = bicubic(p4);

    vec3 rk4 = (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0;
    return rk4;
}

void main() {
    // texture coordinate must be normalized
    vec3 lonLatLev = texture2D(currentParticlesPosition, v_textureCoordinates).rgb;
    vec3 windVector = rungeKutta4(lonLatLev);
    gl_FragColor = vec4(windVector, 0.0);
}
`

const postProcessingPositionFrag = `
uniform sampler2D nextParticlesPosition;
uniform sampler2D nextParticlesSpeed; // (u, v, w, normalization)

// range (min, max)
uniform vec2 lonRange;
uniform vec2 latRange;
uniform vec2 lonDataRange;
uniform vec2 latDataRange;

uniform float randomCoef; // use to improve the pseudo-random generator
uniform float dropRate; // drop rate is a chance a particle will restart at random position to avoid degeneration
uniform float dropRateBump;

varying vec2 v_textureCoordinates;

// pseudo-random generator
const vec3 randomConstants = vec3(12.9898, 78.233, 4375.85453);
const vec2 normalRange = vec2(0.0, 1.0);
float rand(vec2 seed, vec2 range) {
    vec2 randomSeed = randomCoef * seed;
    float temp = dot(randomConstants.xy, randomSeed);
    temp = fract(sin(temp) * (randomConstants.z + temp));
    return temp * (range.y - range.x) + range.x;
}

vec3 generateRandomParticle(vec2 seed, float lev) {
    // ensure the longitude is in [0, 360]
    float randomLon = mod(rand(seed, lonRange), 360.0);
    float randomLat = rand(-seed, latRange);

    return vec3(randomLon, randomLat, lev);
}

bool particleOutbound(vec3 particle) {
    return particle.y < -90.0 || particle.y > 90.0 || particle.y < latDataRange.x || particle.y > latDataRange.y || particle.x < lonDataRange.x || particle.x > lonDataRange.y;
}

void main() {
    vec3 nextParticle = texture2D(nextParticlesPosition, v_textureCoordinates).rgb;
    vec4 nextSpeed = texture2D(nextParticlesSpeed, v_textureCoordinates);
    float particleDropRate = dropRate + dropRateBump * nextSpeed.a;

    vec2 seed1 = nextParticle.xy + v_textureCoordinates;
    vec2 seed2 = nextSpeed.xy + v_textureCoordinates;
    vec3 randomParticle = generateRandomParticle(seed1, nextParticle.z);
    float randomNumber = rand(seed2, normalRange);

    if (randomNumber < particleDropRate || particleOutbound(nextParticle)) {
        gl_FragColor = vec4(randomParticle, 1.0); // 1.0 means this is a random particle
    } else {
        gl_FragColor = vec4(nextParticle, 0.0);
    }
}
`
const postProcessingSpeedFrag = `
uniform sampler2D postProcessingPosition;
uniform sampler2D nextParticlesSpeed;

varying vec2 v_textureCoordinates;

void main() {
    vec4 randomParticle = texture2D(postProcessingPosition, v_textureCoordinates);
    vec4 particleSpeed = texture2D(nextParticlesSpeed, v_textureCoordinates);

    if (randomParticle.a > 0.0) {
        gl_FragColor = vec4(0.0);
    } else {
        gl_FragColor = particleSpeed;
    }
}
`

const screenDrawFrag = `
uniform sampler2D trailsColorTexture;
uniform sampler2D trailsDepthTexture;

varying vec2 textureCoordinate;

void main() {
    vec4 trailsColor = texture2D(trailsColorTexture, textureCoordinate);
    float trailsDepth = texture2D(trailsDepthTexture, textureCoordinate).r;
    float globeDepth = czm_unpackDepth(texture2D(czm_globeDepthTexture, textureCoordinate));

    if (trailsDepth < globeDepth) {
        gl_FragColor = trailsColor;
    } else {
        gl_FragColor = vec4(0.0);
    }
}
`

const segmentDrawFrag = `
uniform sampler2D colorTable;

varying float speedNormalization;

void main() {
    gl_FragColor = texture2D(colorTable, vec2(speedNormalization, 0.0));
}
`

const segmentDrawVert = `
attribute vec2 st;
// it is not normal itself, but used to control normal
attribute vec3 normal; // (point to use, offset sign, not used component)

uniform sampler2D currentParticlesPosition;
uniform sampler2D postProcessingPosition;
uniform sampler2D postProcessingSpeed;

uniform float particleHeight;

uniform float aspect;
uniform float pixelSize;
uniform float lineWidth;

varying float speedNormalization;

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

    vec3 currentPosition = texture2D(currentParticlesPosition, particleIndex).rgb;
    vec4 nextPosition = texture2D(postProcessingPosition, particleIndex);

    vec4 currentProjectedCoord = vec4(0.0);
    vec4 nextProjectedCoord = vec4(0.0);
    if (nextPosition.w > 0.0) {
      currentProjectedCoord = calcProjectedCoord(currentPosition);
      nextProjectedCoord = calcProjectedCoord(currentPosition);
    } else {
        currentProjectedCoord = calcProjectedCoord(currentPosition);
      nextProjectedCoord = calcProjectedCoord(nextPosition.xyz);
    }

    float pointToUse = normal.x; // -1 is currentProjectedCoord and +1 is nextProjectedCoord
    float offsetSign = normal.y;

    vec4 offset = pixelSize * calcOffset(currentProjectedCoord, nextProjectedCoord, offsetSign);
    if (pointToUse < 0.0) {
        gl_Position = currentProjectedCoord + offset;
    } else {
        gl_Position = nextProjectedCoord + offset;
    }

    speedNormalization = texture2D(postProcessingSpeed, particleIndex).a;
}
`

const trailDrawFrag = `
uniform sampler2D segmentsColorTexture;
uniform sampler2D segmentsDepthTexture;

uniform sampler2D currentTrailsColor;
uniform sampler2D trailsDepthTexture;

uniform float fadeOpacity;

varying vec2 textureCoordinate;

void main() {
    vec4 pointsColor = texture2D(segmentsColorTexture, textureCoordinate);
    vec4 trailsColor = texture2D(currentTrailsColor, textureCoordinate);

    trailsColor = floor(fadeOpacity * 255.0 * trailsColor) / 255.0; // make sure the trailsColor will be strictly decreased

    float pointsDepth = texture2D(segmentsDepthTexture, textureCoordinate).r;
    float trailsDepth = texture2D(trailsDepthTexture, textureCoordinate).r;
    float globeDepth = czm_unpackDepth(texture2D(czm_globeDepthTexture, textureCoordinate));

    gl_FragColor = vec4(0.0);
    if (pointsDepth < globeDepth) {
      gl_FragColor = gl_FragColor + pointsColor;
    }
    if (trailsDepth < globeDepth) {
      gl_FragColor = gl_FragColor + trailsColor;
    }
    gl_FragDepthEXT = min(pointsDepth, trailsDepth);
}
`

const updatePositionFrag = `
uniform sampler2D currentParticlesPosition; // (lon, lat, lev)
uniform sampler2D currentParticlesSpeed; // (u, v, w, normalization)

varying vec2 v_textureCoordinates;

vec2 lengthOfLonLat(vec3 lonLatLev) {
    // unit conversion: meters -> longitude latitude degrees
    // see https://en.wikipedia.org/wiki/Geographic_coordinate_system#Length_of_a_degree for detail

    // Calculate the length of a degree of latitude and longitude in meters
    float latitude = radians(lonLatLev.y);

    float term1 = 111132.92;
    float term2 = 559.82 * cos(2.0 * latitude);
    float term3 = 1.175 * cos(4.0 * latitude);
    float term4 = 0.0023 * cos(6.0 * latitude);
    float latLength = term1 - term2 + term3 - term4;

    float term5 = 111412.84 * cos(latitude);
    float term6 = 93.5 * cos(3.0 * latitude);
    float term7 = 0.118 * cos(5.0 * latitude);
    float longLength = term5 - term6 + term7;

    return vec2(longLength, latLength);
}

void updatePosition(vec3 lonLatLev, vec3 speed) {
    vec2 lonlatLengthgth = lengthOfLonLat(lonLatLev);
    float u = speed.x / lonlatLengthgth.x;
    float v = speed.y / lonlatLengthgth.y;
    float w = 0.0;
    vec3 windVectorInLonLatLev = vec3(u, v, w);

    vec3 nextParticle = lonLatLev + windVectorInLonLatLev;

    gl_FragColor = vec4(nextParticle, 0.0);
}

void main() {
    // texture coordinate must be normalized
    vec3 lonLatLev = texture2D(currentParticlesPosition, v_textureCoordinates).rgb;
    vec3 speed = texture2D(currentParticlesSpeed, v_textureCoordinates).rgb;

    updatePosition(lonLatLev, speed);
}
`
const updateSpeedFrag = `
uniform sampler2D currentParticlesSpeed; // (u, v, w, normalization)
uniform sampler2D particlesWind;

// use to calculate the relative speed
uniform vec2 uSpeedRange; // (min, max);
uniform vec2 vSpeedRange;
uniform float pixelSize;
uniform float speedFactor;

varying vec2 v_textureCoordinates;

vec4 calcRelativeSpeed(vec3 speed) {
    vec3 percent = vec3(0.0);
    percent.x = (speed.x - uSpeedRange.x) / (uSpeedRange.y - uSpeedRange.x);
    percent.y = (speed.y - vSpeedRange.x) / (vSpeedRange.y - vSpeedRange.x);
    float normalization = length(percent);

    float minRelativeSpeed = -speedFactor * pixelSize;
    float maxRelativeSpeed = speedFactor * pixelSize;

    vec3 relativeSpeed = vec3(0.0);
    relativeSpeed.x = mix(minRelativeSpeed, maxRelativeSpeed, percent.x);
    relativeSpeed.y = mix(minRelativeSpeed, maxRelativeSpeed, percent.y);

    return vec4(relativeSpeed, normalization);
}

void main() {
    // texture coordinate must be normalized
    vec3 currentSpeed = texture2D(currentParticlesSpeed, v_textureCoordinates).rgb;
    vec3 windVector = texture2D(particlesWind, v_textureCoordinates).rgb;

    vec4 nextSpeed = calcRelativeSpeed(windVector);
    gl_FragColor = nextSpeed;
}
`

export {
  fullscreenVert,
  getWindFrag,
  postProcessingPositionFrag,
  postProcessingSpeedFrag,
  screenDrawFrag,
  segmentDrawFrag,
  segmentDrawVert,
  trailDrawFrag,
  updatePositionFrag,
  updateSpeedFrag
}
