import {
  show,
  distanceDisplayCondition,
  pixelSize,
  color,
  outlineColor,
  outlineWidth,
  scaleByDistance,
  translucencyByDistance,
  disableDepthTestDistance
} from '../mixinProps'

/**
 * vc-graphics-point base props mixins
 */
export default {
  mixins: [
    show,
    distanceDisplayCondition,
    pixelSize,
    color,
    outlineColor,
    outlineWidth,
    scaleByDistance,
    translucencyByDistance,
    disableDepthTestDistance
  ]
}
