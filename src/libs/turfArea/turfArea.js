const wgs84 = {
  RADIUS: 6378137,
  FLATTENING: 1 / 298.257223563,
  POLAR_RADIUS: 6356752.3142
}
function geometryArea (_) {
  var area = 0
  var i
  switch (_.type) {
    case 'Polygon':
      return polygonArea(_.coordinates)
    case 'MultiPolygon':
      for (i = 0; i < _.coordinates.length; i++) {
        area += polygonArea(_.coordinates[i])
      }
      return area
    case 'Point':
    case 'MultiPoint':
    case 'LineString':
    case 'MultiLineString':
      return 0
    case 'GeometryCollection':
      for (i = 0; i < _.geometries.length; i++) {
        area += geometryArea(_.geometries[i])
      }
      return area
  }
}

function polygonArea (coords) {
  var area = 0
  if (coords && coords.length > 0) {
    area += Math.abs(ringArea(coords[0]))
    for (var i = 1; i < coords.length; i++) {
      area -= Math.abs(ringArea(coords[i]))
    }
  }
  return area
}

function ringArea (coords) {
  var p1; var p2; var p3; var lowerIndex; var middleIndex; var upperIndex
  var area = 0
  var coordsLength = coords.length
  if (coordsLength > 2) {
    for (let i = 0; i < coordsLength; i++) {
      if (i === coordsLength - 2) { // i = N-2
        lowerIndex = coordsLength - 2
        middleIndex = coordsLength - 1
        upperIndex = 0
      } else if (i === coordsLength - 1) { // i = N-1
        lowerIndex = coordsLength - 1
        middleIndex = 0
        upperIndex = 1
      } else { // i = 0 to N-3
        lowerIndex = i
        middleIndex = i + 1
        upperIndex = i + 2
      }
      p1 = coords[lowerIndex]
      p2 = coords[middleIndex]
      p3 = coords[upperIndex]
      area += (rad(p3[0]) - rad(p1[0])) * Math.sin(rad(p2[1]))
    }

    area = area * wgs84.RADIUS * wgs84.RADIUS / 2
  }

  return area
}

function rad (_) {
  return _ * Math.PI / 180
}

/**
 * Takes a one or more features and returns their area
 * in square meters.
 *
 * @param {(Feature|FeatureCollection)} input input features
 * @return {Number} area in square meters
 * @example
 * var polygons = {
 *   "type": "FeatureCollection",
 *   "features": [
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Polygon",
 *         "coordinates": [[
 *           [-67.031021, 10.458102],
 *           [-67.031021, 10.53372],
 *           [-66.929397, 10.53372],
 *           [-66.929397, 10.458102],
 *           [-67.031021, 10.458102]
 *         ]]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Polygon",
 *         "coordinates": [[
 *           [-66.919784, 10.397325],
 *           [-66.919784, 10.513467],
 *           [-66.805114, 10.513467],
 *           [-66.805114, 10.397325],
 *           [-66.919784, 10.397325]
 *         ]]
 *       }
 *     }
 *   ]
 * };
 *
 * var area = turf.area(polygons);
 *
 * //=area
 */
function area (input) {
  if (input.type === 'FeatureCollection') {
    for (var i = 0, sum = 0; i < input.features.length; i++) {
      if (input.features[i].geometry) {
        sum += geometryArea(input.features[i].geometry)
      }
    }
    return sum
  } else if (input.type === 'Feature') {
    return geometryArea(input.geometry)
  } else {
    return geometryArea(input)
  }
}
module.exports = area
