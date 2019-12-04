import {
  makeDistanceDisplayCondition,
  makeCartesian2,
  makeCartesian3,
  makeColor,
  makeNearFarScalar,
  makeMaterial,
  makeCartesian3Array,
  makeRectangle,
  makeBoundingRectangle,
  makePlane,
  makePolygonHierarchy,
  makeCartesian2Array,
  makeTranslationRotationScale
} from './util'

/**
 * 特殊的 Props, 需要用 util 中提供的方法转换。
 */
const specialProps = {
  distanceDisplayCondition: {
    handler: makeDistanceDisplayCondition
  },
  pixelOffset: {
    handler: makeCartesian2,
    deep: true
  },
  showBackground: {
    handler: makeCartesian2,
    deep: true
  },
  imageBasedLightingFactor: {
    handler: makeCartesian2
  },
  position: {
    handler: makeCartesian3
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
    handler: makeCartesian3
  },
  radii: {
    handler: makeCartesian3
  },
  positions: {
    handler: makeCartesian3Array,
    exclude: '_callback'
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
  lightColor: {
    handler: makeColor
  },
  glowColor: {
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
  depthFailMaterial: {
    handler: makeMaterial
  },
  cutoutRectangle: {
    handler: makeRectangle
  },
  coordinates: {
    handler: makeRectangle
  },
  rectangle: {
    handler: makeRectangle
  },
  imageSubRegion: {
    handler: makeBoundingRectangle
  },
  colorToAlpha: {
    handler: makeColor
  },
  plane: {
    handler: makePlane
  },
  hierarchy: {
    handler: makePolygonHierarchy,
    exclude: '_callback'
  },
  polygonHierarchy: {
    handler: makePolygonHierarchy
  },
  shape: {
    handler: makeCartesian2Array
  },
  nodeTransformations: {
    handler: makeTranslationRotationScale
  }
}

export default specialProps
