import {
  image,
  scale,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  color,
  rotation,
  alignedAxis,
  sizeInMeters,
  width,
  height,
  scaleByDistance,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  disableDepthTestDistance,
  show,
  distanceDisplayCondition
} from '../mixinProps'

/**
 * vc-graphics-billbord or vc-billboard base props
 */
export default {
  mixins: [
    image,
    scale,
    pixelOffset,
    eyeOffset,
    horizontalOrigin,
    verticalOrigin,
    heightReference,
    color,
    rotation,
    alignedAxis,
    sizeInMeters,
    width,
    height,
    scaleByDistance,
    translucencyByDistance,
    pixelOffsetScaleByDistance,
    disableDepthTestDistance,
    show,
    distanceDisplayCondition
  ]
}
