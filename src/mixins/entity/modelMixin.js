import {
  show,
  distanceDisplayCondition,
  scale,
  minimumPixelSize,
  maximumScale,
  incrementallyLoadTextures,
  clampAnimations,
  shadows,
  heightReference,
  silhouetteColor,
  silhouetteSize,
  color,
  colorBlendMode,
  colorBlendAmount
} from '@/mixins/entity/allProps'

export default {
  mixins: [
    show,
    distanceDisplayCondition,
    scale,
    minimumPixelSize,
    maximumScale,
    incrementallyLoadTextures,
    clampAnimations,
    shadows,
    heightReference,
    silhouetteColor,
    silhouetteSize,
    color,
    colorBlendMode,
    colorBlendAmount
  ]
}
