import {
  makeDistanceDisplayCondition,
  makeCartesian2,
  makeCartesian3,
  makeColor,
  makeNearFarScalar,
  makeMaterial,
  makeCartesian3Array,
  makeRectangle
} from './util'

/**
 * 特殊的 watch 项
 */
const specialWatchers = {
  distanceDisplayCondition: {
    handler: makeDistanceDisplayCondition,
    deep: false
  },
  pixelOffset: {
    handler: makeCartesian2,
    deep: true
  },
  showBackground: {
    handler: makeCartesian2,
    deep: true
  },
  position: {
    handler: makeCartesian3,
    deep: true
  },
  eyeOffset: {
    handler: makeCartesian3,
    deep: true
  },
  alignedAxis: {
    handler: makeCartesian3,
    deep: true
  },
  dimensions: {
    handler: makeCartesian3,
    deep: true
  },
  radii: {
    handler: makeCartesian3
  },
  positions: {
    handler: makeCartesian3Array
  },
  color: {
    handler: makeColor
  },
  outlineColor: {
    handler: makeColor
  },
  backgroundColor: {
    handler: makeColor
  },
  fillColor: {
    handler: makeColor
  },
  silhouetteColor: {
    handler: makeColor
  },
  scaleByDistance: {
    handler: makeNearFarScalar
  },
  translucencyByDistance: {
    handler: makeNearFarScalar
  },
  pixelOffsetScaleByDistance: {
    handler: makeNearFarScalar
  },
  material: {
    handler: makeMaterial
  },
  cutoutRectangle: {
    handler: makeRectangle
  },
  imageSubRegion: {
    handler: makeRectangle
  },
  colorToAlpha: {
    handler: makeColor
  }
}

export default specialWatchers
