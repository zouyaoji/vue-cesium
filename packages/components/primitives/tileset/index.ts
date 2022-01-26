import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import {
  show,
  modelMatrix,
  shadows,
  maximumScreenSpaceError,
  clippingPlanes,
  classificationType,
  ellipsoid,
  imageBasedLightingFactor,
  lightColor2,
  luminanceAtZenith,
  sphericalHarmonicCoefficients,
  specularEnvironmentMaps,
  backFaceCulling,
  debugWireframe,
  debugShowBoundingVolume,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveEmits } from '@vue-cesium/utils/emits'

export const tilesetPrimitiveProps = {
  url: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
  ...show,
  ...modelMatrix,
  ...shadows,
  ...maximumScreenSpaceError,
  maximumMemoryUsage: {
    type: Number,
    default: 512
  },
  cullWithChildrenBounds: {
    type: Boolean,
    default: true
  },
  cullRequestsWhileMoving: {
    type: Boolean,
    default: true
  },
  cullRequestsWhileMovingMultiplier: {
    type: Number,
    default: 60.0
  },
  preloadWhenHidden: {
    type: Boolean,
    default: false
  },
  preloadFlightDestinations: {
    type: Boolean,
    default: true
  },
  preferLeaves: {
    type: Boolean,
    default: false
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
  progressiveResolutionHeightFraction: {
    type: Number,
    default: 0.3
  },
  foveatedScreenSpaceError: {
    type: Boolean,
    default: true
  },
  foveatedConeSize: {
    type: Number,
    default: 0.1
  },
  foveatedMinimumScreenSpaceErrorRelaxation: {
    type: Number,
    default: 0.0
  },
  foveatedInterpolationCallback: Function,
  foveatedTimeDelay: {
    type: Number,
    default: 0.2
  },
  skipLevelOfDetail: {
    type: Boolean,
    default: false
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
  ...clippingPlanes,
  ...classificationType,
  ...ellipsoid,
  pointCloudShading: Object,
  ...imageBasedLightingFactor,
  ...lightColor2,
  ...luminanceAtZenith,
  ...sphericalHarmonicCoefficients,
  ...specularEnvironmentMaps,
  ...backFaceCulling,
  showOutline: {
    type: Boolean,
    default: true
  },
  vectorClassificationOnly: {
    type: Boolean,
    default: false
  },
  vectorKeepDecodedPositions: {
    type: Boolean,
    default: false
  },
  debugHeatmapTilePropertyName: String,
  debugFreezeFrame: {
    type: Boolean,
    default: false
  },
  debugColorizeTiles: {
    type: Boolean,
    default: false
  },
  ...debugWireframe,
  ...debugShowBoundingVolume,
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
  },
  ...enableMouseEvent,
  enableModelExperimental: {
    type: Boolean,
    default: false
  },
  customShader: {
    type: Object as PropType<Cesium.CustomShader>
  }
}
export default defineComponent({
  name: 'VcPrimitiveTileset',
  props: tilesetPrimitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Cesium3DTileset'
    usePrimitives(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveTilesetProps = ExtractPropTypes<typeof tilesetPrimitiveProps>
