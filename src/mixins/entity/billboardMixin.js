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
} from '@/mixins/entity/allProps'

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
