<script>
import {
  show,
  modelMatrix,
  shadows,
  clippingPlanes,
  debugShowBoundingVolume,
  debugWireframe
} from '../../../mixins/mixinProps'
import mixinPrimitive from '../../../mixins/primitives/mixinPrimitive'
export default {
  name: 'vc-primitive-3dtileset',
  mixins: [
    show,
    modelMatrix,
    shadows,
    clippingPlanes,
    debugShowBoundingVolume,
    debugWireframe,
    mixinPrimitive
  ],
  props: {
    url: String | Object,
    maximumScreenSpaceError: {
      type: Number,
      default: 16
    },
    maximumMemoryUsage: {
      type: Number,
      default: 512
    },
    cullWithChildrenBounds: {
      type: Boolean,
      default: true
    },
    dynamicScreenSpaceError: {
      type: Boolean,
      default: false
    },
    dynamicScreenSpaceErrorDensity: {
      type: Number,
      default: 0.00278
    },
    dynamicScreenSpaceErrorFactor: {
      type: Number,
      default: 4.0
    },
    dynamicScreenSpaceErrorHeightFalloff: {
      type: Number,
      default: 0.25
    },
    skipLevelOfDetail: {
      type: Boolean,
      default: true
    },
    baseScreenSpaceError: {
      type: Number,
      default: 1024
    },
    skipScreenSpaceErrorFactor: {
      type: Number,
      default: 16
    },
    skipLevels: {
      type: Number,
      default: 1
    },
    immediatelyLoadDesiredLevelOfDetail: {
      type: Boolean,
      default: false
    },
    loadSiblings: {
      type: Boolean,
      default: false
    },
    classificationType: Number,
    ellipsoid: Object,
    pointCloudShading: Object,
    imageBasedLightingFactor: Object,
    lightColor: Object,
    debugFreezeFrame: {
      type: Boolean,
      default: false
    },
    debugColorizeTiles: {
      type: Boolean,
      default: false
    },
    debugShowContentBoundingVolume: {
      type: Boolean,
      default: false
    },
    debugShowViewerRequestVolume: {
      type: Boolean,
      default: false
    },
    debugShowGeometricError: {
      type: Boolean,
      default: false
    },
    debugShowRenderingStatistics: {
      type: Boolean,
      default: false
    },
    debugShowMemoryUsage: {
      type: Boolean,
      default: false
    },
    debugShowUrl: {
      type: Boolean,
      default: false
    }
  }
}
</script>
