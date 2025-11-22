
const DistanceUnits = Object.freeze({
  METERS: 'METERS',
  CENTIMETERS: 'CENTIMETERS',
  KILOMETERS: 'KILOMETERS',
  FEET: 'FEET',
  US_SURVEY_FEET: 'US_SURVEY_FEET',
  INCHES: 'INCHES',
  YARDS: 'YARDS',
  MILES: 'MILES'
})

const AreaUnits = Object.freeze({
  SQUARE_METERS: 'SQUARE_METERS',
  SQUARE_CENTIMETERS: 'SQUARE_CENTIMETERS',
  SQUARE_KILOMETERS: 'SQUARE_KILOMETERS',
  SQUARE_FEET: 'SQUARE_FEET',
  SQUARE_INCHES: 'SQUARE_INCHES',
  SQUARE_YARDS: 'SQUARE_YARDS',
  SQUARE_MILES: 'SQUARE_MILES',
  ACRES: 'ACRES',
  HECTARES: 'HECTARES'
})

const VolumeUnits = Object.freeze({
  CUBIC_METERS: 'CUBIC_METERS',
  CUBIC_CENTIMETERS: 'CUBIC_CENTIMETERS',
  CUBIC_KILOMETERS: 'CUBIC_KILOMETERS',
  CUBIC_FEET: 'CUBIC_FEET',
  CUBIC_INCHES: 'CUBIC_INCHES',
  CUBIC_YARDS: 'CUBIC_YARDS',
  CUBIC_MILES: 'CUBIC_MILES'
})

const AngleUnits = Object.freeze({
  DEGREES: 'DEGREES',
  RADIANS: 'RADIANS',
  DEGREES_MINUTES_SECONDS: 'DEGREES_MINUTES_SECONDS',
  GRADE: 'GRADE',
  RATIO: 'RATIO'
})

class MeasureUnits {
  distanceUnits: string
  areaUnits: string
  volumeUnits: string
  angleUnits: string
  slopeUnits: string

  constructor(options?) {
    options = options ?? {}
    this.distanceUnits = options.distanceUnits ?? DistanceUnits.METERS
    this.areaUnits = options.areaUnits ?? AreaUnits.SQUARE_METERS
    this.volumeUnits = options.volumeUnits ?? VolumeUnits.CUBIC_METERS
    this.angleUnits = options.angleUnits ?? AngleUnits.DEGREES
    this.slopeUnits = options.slopeUnits ?? AngleUnits.DEGREES
  }

  static numberToString = function (number, locale, decimals) {
    return numberToFormattedString(number, locale, decimals)
  }

  static distanceToString(distance: number, distanceUnits: string, locale?, decimals?) {
    distance = MeasureUnits.convertDistance(distance, DistanceUnits.METERS, distanceUnits)
    return (
      numberToFormattedString(distance, locale, decimals) +
      MeasureUnits.getDistanceUnitSpacing(distanceUnits) +
      MeasureUnits.getDistanceUnitSymbol(distanceUnits)
    )
  }

  static areaToString(area: number, areaUnits: string, locale?, decimals?) {
    area = MeasureUnits.convertArea(area, AreaUnits.SQUARE_METERS, areaUnits)
    return numberToFormattedString(area, locale, decimals) + MeasureUnits.getAreaUnitSpacing(areaUnits) + MeasureUnits.getAreaUnitSymbol(areaUnits)
  }

  static angleToString(angle: number, angleUnits: string, locale?, decimals?) {
    const { Math: CesiumMath } = Cesium
    if (angleUnits === AngleUnits.DEGREES || angleUnits === AngleUnits.RADIANS || angleUnits === AngleUnits.GRADE) {
      angle = convertAngleFromRadians(angle, angleUnits)

      return (
        numberToFormattedString(angle, locale, decimals) + MeasureUnits.getAngleUnitSpacing(angleUnits) + MeasureUnits.getAngleUnitSymbol(angleUnits)
      )
    }

    if (angleUnits === AngleUnits.DEGREES_MINUTES_SECONDS) {
      const angleDegrees = CesiumMath.toDegrees(angle)
      const prefix = angleDegrees < 0 ? '-' : ''
      const degrees = Math.floor(angleDegrees)
      const minutes = 60 * (angleDegrees - degrees)
      const seconds = Math.floor(minutes)
      return prefix + degrees + '° ' + seconds + "' " + numberToFormattedString(60 * (minutes - seconds), void 0, decimals) + '"'
    }
    if (angleUnits === AngleUnits.RATIO) {
      //
    }
  }

  static volumeToString(volume: number, volumeUnits: string, locale?, decimals?) {
    volume = MeasureUnits.convertArea(volume, VolumeUnits.CUBIC_METERS, volumeUnits)
    return (
      numberToFormattedString(volume, locale, decimals) +
      MeasureUnits.getVolumeUnitSpacing(volumeUnits) +
      MeasureUnits.getVolumeUnitSymbol(volumeUnits)
    )
  }

  static getDistanceUnitSpacing(distanceUnits: string) {
    return ' '
  }

  static getAreaUnitSpacing(distanceUnits: string) {
    return ' '
  }

  static getAngleUnitSpacing(angleUnits: string) {
    return angleUnits === AngleUnits.RADIANS ? ' ' : ''
  }

  static getVolumeUnitSpacing(distanceUnits: string) {
    return ' '
  }

  static getDistanceUnitSymbol(distanceUnits: string) {
    switch (distanceUnits) {
      case DistanceUnits.METERS:
        return 'm'
      case DistanceUnits.CENTIMETERS:
        return 'cm'
      case DistanceUnits.KILOMETERS:
        return 'km'
      case DistanceUnits.FEET:
      case DistanceUnits.US_SURVEY_FEET:
        return 'ft'
      case DistanceUnits.INCHES:
        return 'in'
      case DistanceUnits.YARDS:
        return 'yd'
      case DistanceUnits.MILES:
        return 'mi'
      default:
        return 'm'
    }
  }

  static getAreaUnitSymbol(areaUnits: string) {
    switch (areaUnits) {
      case AreaUnits.SQUARE_METERS:
        return 'm²'
      case AreaUnits.SQUARE_CENTIMETERS:
        return 'cm²'
      case AreaUnits.SQUARE_KILOMETERS:
        return 'km²'
      case AreaUnits.SQUARE_FEET:
        return 'sq ft'
      case AreaUnits.SQUARE_INCHES:
        return 'sq in'
      case AreaUnits.SQUARE_YARDS:
        return 'sq yd'
      case AreaUnits.SQUARE_MILES:
        return 'sq mi'
      case AreaUnits.ACRES:
        return 'ac'
      case AreaUnits.HECTARES:
        return 'ha'
      default:
        return 'm²'
    }
  }

  static getVolumeUnitSymbol(volumeUnits) {
    switch (volumeUnits) {
      case VolumeUnits.CUBIC_METERS:
        return 'm³'
      case VolumeUnits.CUBIC_CENTIMETERS:
        return 'cm³'
      case VolumeUnits.CUBIC_KILOMETERS:
        return 'km³'
      case VolumeUnits.CUBIC_FEET:
        return 'cu ft'
      case VolumeUnits.CUBIC_INCHES:
        return 'cu in'
      case VolumeUnits.CUBIC_YARDS:
        return 'cu yd'
      case VolumeUnits.CUBIC_MILES:
        return 'cu mi'
      default:
        return 'm³'
    }
  }

  static getAngleUnitSymbol(angleUnits) {
    return angleUnits === AngleUnits.DEGREES ? '°' : angleUnits === AngleUnits.RADIANS ? 'rad' : angleUnits === AngleUnits.GRADE ? '%' : void 0
  }

  static convertDistance(distance: number, distanceUnitsFrom: string, distanceUnitsTo: string) {
    return distanceUnitsFrom === distanceUnitsTo
      ? distance
      : distance * getDistanceUnitConversion(distanceUnitsFrom) * (1 / getDistanceUnitConversion(distanceUnitsTo))
  }

  static convertArea(area: number, areaUnitsFrom: string, areaUnitsTo: string) {
    return areaUnitsFrom === areaUnitsTo ? area : area * getAreaUnitConversion(areaUnitsFrom) * (1 / getAreaUnitConversion(areaUnitsTo))
  }

  static convertVolume(volume: number, volumeUnitsFrom: string, volumeUnitsTo: string) {
    return volumeUnitsFrom === volumeUnitsTo
      ? volume
      : volume * getVolumeUnitConversion(volumeUnitsFrom) * (1 / getVolumeUnitConversion(volumeUnitsTo))
  }

  static convertAngle(angle: number, angleUnitsFrom: string, angleUnitsTo: string) {
    return angleUnitsFrom === angleUnitsTo ? angle : convertAngleFromRadians(convertAngleToRadians(angle, angleUnitsFrom), angleUnitsTo)
  }

  static longitudeToString(longitude, angleUnits, locale, decimals) {
    return MeasureUnits.angleToString(Math.abs(longitude), angleUnits, locale, decimals) + ' ' + (longitude < 0 ? 'W' : 'E')
  }

  static latitudeToString(latitude, angleUnits, locale, decimals) {
    return MeasureUnits.angleToString(Math.abs(latitude), angleUnits, locale, decimals) + ' ' + (latitude < 0 ? 'S' : 'N')
  }
}

function getDistanceUnitConversion(distanceUnits: string) {
  switch (distanceUnits) {
    case DistanceUnits.METERS:
      return 1
    case DistanceUnits.CENTIMETERS:
      return 0.01
    case DistanceUnits.KILOMETERS:
      return 1000
    case DistanceUnits.FEET:
      return 0.3048
    case DistanceUnits.US_SURVEY_FEET:
      return 1200 / 3937
    case DistanceUnits.INCHES:
      return 0.254
    case DistanceUnits.YARDS:
      return 0.9144
    case DistanceUnits.MILES:
      return 1609.344
    default:
      return 1
  }
}

function getAreaUnitConversion(areaUnits: string) {
  switch (areaUnits) {
    case AreaUnits.SQUARE_METERS:
      return 1
    case AreaUnits.SQUARE_CENTIMETERS:
      return 0.0001
    case AreaUnits.SQUARE_KILOMETERS:
      return 1000000
    case AreaUnits.SQUARE_FEET:
      return 0.09290304
    case AreaUnits.SQUARE_INCHES:
      return 64516e-8
    case AreaUnits.SQUARE_YARDS:
      return 0.83612736
    case AreaUnits.SQUARE_MILES:
      return 2589988.110336
    case AreaUnits.ACRES:
      return 4046.85642232
    case AreaUnits.HECTARES:
      return 10000
    default:
      return 1
  }
}

function getVolumeUnitConversion(volumeUnits: string) {
  switch (volumeUnits) {
    case VolumeUnits.CUBIC_METERS:
      return 1
    case VolumeUnits.CUBIC_CENTIMETERS:
      return 1e-6
    case VolumeUnits.CUBIC_KILOMETERS:
      return 1e9
    case VolumeUnits.CUBIC_FEET:
      return 0.09290304 * 0.3048
    case VolumeUnits.CUBIC_INCHES:
      return 16387064e-12
    case VolumeUnits.CUBIC_YARDS:
      return 0.764554857984
    case VolumeUnits.CUBIC_MILES:
      return 4168181825.44058
    default:
      return 1
  }
}

function convertAngleToRadians(angle, angleUnits) {
  const { defined, Math: CesiumMath, RuntimeError } = Cesium
  if (angleUnits === AngleUnits.RADIANS) return angle
  if (angleUnits === AngleUnits.DEGREES) return CesiumMath.toRadians(angle)
  if (angleUnits === AngleUnits.GRADE) return angle === Number.POSITIVE_INFINITY ? CesiumMath.PI_OVER_TWO : Math.atan(angle / 100)
  if (angleUnits === AngleUnits.RATIO) return Math.atan(angle)
  if (angleUnits === AngleUnits.DEGREES_MINUTES_SECONDS) {
    const degreesMinutesSecondsRegex = /(-?)(\d+)\s*°\s*(\d+)\s*'\s*([\d.,]+)"\s*([WENS]?)/i
    const result = degreesMinutesSecondsRegex.exec(angle) || []
    if (!defined(result)) throw new RuntimeError('Could not convert angle to radians: ' + angle)
    let r = 0 < result[1].length ? -1 : 1
    const degrees = parseInt(result[2])
    const minutes = parseInt(result[3])
    const seconds = parseFloat(result[4])
    let s = result[5]
    1 === s.length && (('W' !== (s = s.toUpperCase()) && 'S' !== s) || (r *= -1))
    const l = r * (degrees + minutes / 60 + seconds / 3600)
    return CesiumMath.toRadians(l)
  }
}

function convertAngleFromRadians(angle, angleUnits) {
  const { Math: CesiumMath } = Cesium
  if (angleUnits === AngleUnits.RADIANS) {
    return angle
  } else if (angleUnits === AngleUnits.DEGREES) {
    return CesiumMath.toDegrees(angle)
  } else if (angleUnits === AngleUnits.GRADE) {
    if (CesiumMath.clamp(angle, 0, CesiumMath.PI_OVER_TWO) === CesiumMath.PI_OVER_TWO) {
      return Number.POSITIVE_INFINITY
    } else {
      return 100 * Math.tan(angle)
    }
  } else if (angleUnits === AngleUnits.RATIO) {
    return Math.sin(angle) / Math.cos(angle)
  }

  return void 0
}

function numberToFormattedString(number, locale, decimals) {
  const options = getLocaleFormatStringOptions(decimals, number, locale)
  const strLocale = number.toLocaleString(locale, options)
  const negativeZero = -0
  const positiveZero = 0
  return strLocale === negativeZero.toLocaleString(locale, options) ? positiveZero.toLocaleString(locale, options) : strLocale
}

function getLocaleFormatStringOptions(decimals, number?, locale?) {
  let numberFormatter = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }
  decimals = decimals ?? 2
  if (typeof decimals === 'number') {
    numberFormatter.minimumFractionDigits = decimals
    numberFormatter.maximumFractionDigits = decimals
  } else {
    numberFormatter = typeof decimals === 'function' ? decimals(number, locale) : decimals
  }
  return numberFormatter
}

export default MeasureUnits

export { DistanceUnits, AreaUnits, VolumeUnits, AngleUnits }
