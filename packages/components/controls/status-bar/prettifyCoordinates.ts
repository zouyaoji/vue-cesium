/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-05-06 13:58:28
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\status-bar\prettifyCoordinates.ts
 */
/**
 * Turns the longitude / latitude in degrees into a human readable pretty strings.
 *
 * @param {Number} longitude The longitude to format.
 * @param {Number} latitude The latitude to format.
 * @param {Object} options Object with the following properties:
 * @param {Number} options.height The height.
 * @param {Number} options.errorBar The error +/- for the height.
 * @param {Number} options.digits The number of digits to fix the lat / lon to.
 */
function prettifyCoordinates(longitude, latitude, options) {
  const result = {
    latitude: '',
    longitude: '',
    elevation: ''
  }
  const { defaultValue, defined } = Cesium
  const optionsDefaulted = defaultValue(options, {})
  const decimal = defaultValue(optionsDefaulted.decimal, 5)

  if (optionsDefaulted.rangeType === 0) {
    result.latitude = Math.abs(latitude).toFixed(decimal) + '°' + (latitude < 0.0 ? 'S' : 'N')
    result.longitude = Math.abs(longitude).toFixed(decimal) + '°' + (longitude < 0.0 ? 'W' : 'E')
  } else if (optionsDefaulted.rangeType === 1) {
    result.latitude = latitude.toFixed(decimal) + '°'
    result.longitude = longitude.toFixed(decimal) + '°'
  } else if (optionsDefaulted.rangeType === 2) {
    result.latitude = latitude.toFixed(decimal) + '°'
    result.longitude = (longitude < 0 ? 360 + longitude : longitude).toFixed(decimal) + '°'
  }

  if (defined(optionsDefaulted.height)) {
    result.elevation =
      Math.round(optionsDefaulted.height) + (defined(optionsDefaulted.errorBar) ? '±' + Math.round(optionsDefaulted.errorBar) : '') + 'm'
  } else {
    result.elevation = ''
  }

  return result
}

export default prettifyCoordinates
