
/**
 * The Earth Gravity Model 1996 (EGM96) geoid.
 * @param {String} gridFileUrl The URL of the WW15MGH.DAC file.
 */
const EarthGravityModel1996 = function (gridFileUrl) {
  this.gridFileUrl = gridFileUrl
  this.data = undefined

  // These values were determined by inspecting the WW15MGH.DAC file.  We hard-code them here because
  // we need them available before that file finishes loading.
  this.minimumHeight = -106.99
  this.maximumHeight = 85.39
}

/**
 * Determines if this class will work in the current environment.  It will return false on older browsers without support
 * for typed arrays.
 * @return {Boolean} True if this class may be used in this environment; otherwise, false.
 */
EarthGravityModel1996.isSupported = function () {
  return typeof Int16Array !== 'undefined' && typeof Uint8Array !== 'undefined'
}

/**
 * Gets the height of EGM96 above the surface of the ellipsoid.
 * @param {String} baseUrl The base URL for TerriaJS resources.
 * @param {Number} longitude The longitude.
 * @param {Number} latitude The latitude
 * @return {Promise|Number} A promise, that, when it results The height of mean sea level above the ellipsoid at the specified location.  Negative numbers indicate that mean sea level
 *                  is below the ellipsoid.
 */
EarthGravityModel1996.prototype.getHeight = function (longitude, latitude) {
  return getHeightData(this).then(function (data) {
    return getHeightFromData(data, longitude, latitude)
  })
}

EarthGravityModel1996.prototype.getHeights = function (cartographicArray) {
  return getHeightData(this).then(function (data) {
    for (let i = 0; i < cartographicArray.length; ++i) {
      const cartographic = cartographicArray[i]
      cartographic.height = getHeightFromData(
        data,
        cartographic.longitude,
        cartographic.latitude
      )
    }
    return cartographicArray
  })
}

function getHeightData (model) {
  const { defined, when } = Cesium
  if (!defined(model.data)) {
    model.data = loadArrayBuffer(model.gridFileUrl)
  }

  return when(model.data, function (data) {
    if (!(model.data instanceof Int16Array)) {
      // Data file is big-endian, all relevant platforms are little endian, so swap the byte order.
      const byteView = new Uint8Array(data)
      for (let k = 0; k < byteView.length; k += 2) {
        const tmp = byteView[k]
        byteView[k] = byteView[k + 1]
        byteView[k + 1] = tmp
      }
      model.data = new Int16Array(data)
    }

    return model.data
  })
}

function getHeightFromData (data, longitude, latitude) {
  const { Math: CesiumMath } = Cesium
  let recordIndex = (720 * (CesiumMath.PI_OVER_TWO - latitude)) / Math.PI
  if (recordIndex < 0) {
    recordIndex = 0
  } else if (recordIndex > 720) {
    recordIndex = 720
  }

  longitude = CesiumMath.zeroToTwoPi(longitude)
  let heightIndex = (1440 * longitude) / CesiumMath.TWO_PI
  if (heightIndex < 0) {
    heightIndex = 0
  } else if (heightIndex > 1440) {
    heightIndex = 1440
  }

  const i = heightIndex | 0
  const j = recordIndex | 0

  const xMinusX1 = heightIndex - i
  const yMinusY1 = recordIndex - j
  const x2MinusX = 1.0 - xMinusX1
  const y2MinusY = 1.0 - yMinusY1

  const f11 = getHeightValue(data, j, i)
  const f21 = getHeightValue(data, j, i + 1)
  const f12 = getHeightValue(data, j + 1, i)
  const f22 = getHeightValue(data, j + 1, i + 1)

  return (
    (f11 * x2MinusX * y2MinusY +
      f21 * xMinusX1 * y2MinusY +
      f12 * x2MinusX * yMinusY1 +
      f22 * xMinusX1 * yMinusY1) /
    100.0
  )
}

// Heights returned by this function are in centimeters.
function getHeightValue (data, recordIndex, heightIndex) {
  if (recordIndex > 720) {
    recordIndex = 720
  } else if (recordIndex < 0) {
    recordIndex = 0
  }

  if (heightIndex > 1439) {
    heightIndex -= 1440
  } else if (heightIndex < 0) {
    heightIndex += 1440
  }

  return data[recordIndex * 1440 + heightIndex]
}

function loadArrayBuffer (urlOrResource) {
  const { Resource } = Cesium
  const resource = Resource.createIfNeeded(urlOrResource)
  return resource.fetchArrayBuffer()
}

// module.exports = EarthGravityModel1996
export default EarthGravityModel1996
