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
} from '../mixinProps'

/**
 * vc-graphics-model base props mixins
 */
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
