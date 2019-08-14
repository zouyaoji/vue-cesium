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
} from '@/mixins/entity/allProps'

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
