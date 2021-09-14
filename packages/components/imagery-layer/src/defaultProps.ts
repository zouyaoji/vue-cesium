import { rectangle, colorToAlpha, cutoutRectangle } from '@vue-cesium/utils/cesium-props'
export default {
  imageryProvider: Object,
  ...rectangle,
  alpha: {
    type: Number,
    default: 1.0
  },
  nightAlpha: {
    type: Number,
    default: 1.0
  },
  dayAlpha: {
    type: Number,
    default: 1.0
  },
  brightness: {
    type: Number,
    default: 1.0
  },
  contrast: {
    type: Number,
    default: 1.0
  },
  hue: {
    type: Number,
    default: 0.0
  },
  saturation: {
    type: Number,
    default: 1.0
  },
  gamma: {
    type: Number,
    default: 1.0
  },
  splitDirection: Number,
  minificationFilter: Number,
  magnificationFilter: Number,
  show: {
    type: Boolean,
    default: true
  },
  maximumAnisotropy: Number,
  minimumTerrainLevel: Number,
  maximumTerrainLevel: Number,
  ...cutoutRectangle,
  ...colorToAlpha,
  colorToAlphaThreshold: {
    type: Number,
    default: 0.004
  },
  sortOrder: Number
}
