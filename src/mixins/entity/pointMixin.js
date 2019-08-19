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
} from './allProps'

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
