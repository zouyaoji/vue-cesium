import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
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
const emits = {
  ...primitiveEmits,
  allTilesLoaded: () => true,
  initialTilesLoaded: () => true,
  loadProgress: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => true,
  tileFailed: (url: string, errorMsg: string) => true,
  tileLoad: (tile: Cesium.Cesium3DTile) => true,
  tileUnload: (tile: Cesium.Cesium3DTile) => true,
  tileVisible: (tile: Cesium.Cesium3DTile) => true
}

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
  },
  properties: {
    type: Array as PropType<
      Array<{
        key: string
        keyValue: any
        propertyName: string
        propertyValue: any
      }>
    >
  },
  fragmentShader: String,
  replaceFS: Boolean
}
export default defineComponent({
  name: 'VcPrimitiveTileset',
  props: tilesetPrimitiveProps,
  emits: emits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Cesium3DTileset'
    instance.cesiumEvents = ['allTilesLoaded', 'initialTilesLoaded', 'loadProgress', 'tileFailed', 'tileLoad', 'tileUnload', 'tileVisible']
    usePrimitives(props, ctx, instance)
    ;(instance.proxy as VcComponentPublicInstance).createPromise.then(obj => {
      const tileset = obj.cesiumObject as Cesium.Cesium3DTileset
      instance.removeCallbacks.push(tileset.tileVisible.addEventListener(updateTile))
    })

    const updateTile = (tile: Cesium.Cesium3DTile) => {
      const content = tile.content
      const model = (content as any)._model
      // sets properties
      for (let i = 0; i < content.featuresLength; i++) {
        const feature = content.getFeature(i)
        if (props.properties && props.properties.length) {
          props.properties.forEach(property => {
            if (feature.hasProperty(property['key']) && feature.getProperty(property['key']) === property['keyValue']) {
              feature.setProperty(property['propertyName'], property['propertyValue'])
            }
          })
        }
      }
      // sets fragmentShader
      if (props.fragmentShader && model && model._sourcePrograms && model._rendererResources) {
        Object.keys(model._sourcePrograms).forEach(key => {
          const program = model._sourcePrograms[key]
          const sourceShaders = model._rendererResources.sourceShaders
          if (props.replaceFS) {
            sourceShaders[program.fragmentShader] = props.fragmentShader
          } else {
            const oldFS = sourceShaders[program.fragmentShader]
            sourceShaders[program.fragmentShader] = oldFS.replace(
              'gl_FragColor = vec4(color, 1.0);\n}',
              `gl_FragColor = vec4(color, 1.0);
             ${props.fragmentShader}\n}
            `
            )
          }
        })
        model._shouldRegenerateShaders = true
      }
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveTilesetProps = ExtractPropTypes<typeof tilesetPrimitiveProps>
export type VcPrimitiveTilesetEmits = typeof emits
