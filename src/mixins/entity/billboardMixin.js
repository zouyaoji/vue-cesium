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
} from './allProps'

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
