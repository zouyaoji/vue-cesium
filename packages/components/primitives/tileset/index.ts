import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCartesian2,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcImageBasedLighting,
  VcPickEvent,
  VcPosition,
  VcReadyObject
} from '@vue-cesium/utils/types'
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
  customShader,
  enableMouseEvent,
  imageBasedLighting,
  outlineColor
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
  modelUpAxis: {
    type: Number,
    // default: 1 // Cesium.Axis.Y
  },
  modelForwardAxis: {
    type: Number,
    // default: 0 // Cesium.Axis.X
  },
  ...shadows,
  ...maximumScreenSpaceError,
  // Deprecated
  maximumMemoryUsage: {
    type: Number,
    // default: 512
  },
  cacheBytes: {
    type: Number,
    default: 536870912
  },
  maximumCacheOverflowBytes: {
    type: Number,
    default: 536870912
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
  enableCollision: {
    type: Boolean,
    default: false
  },
  pointCloudShading: Object as PropType<Cesium.PointCloudShading>,
  ...imageBasedLightingFactor,
  ...lightColor2,
  ...luminanceAtZenith,
  ...sphericalHarmonicCoefficients,
  ...specularEnvironmentMaps,
  ...imageBasedLighting,
  ...backFaceCulling,
  enableShowOutline: {
    type: Boolean,
    default: true
  },
  showOutline: {
    type: Boolean,
    default: true
  },
  ...outlineColor,
  vectorClassificationOnly: {
    type: Boolean,
    default: false
  },
  vectorKeepDecodedPositions: {
    type: Boolean,
    default: false
  },
  featureIdIndex: {
    type: Number,
    default: 0
  },
  instanceFeatureIdIndex: {
    type: Number,
    default: 0
  },
  featureIdLabel: {
    type: [String, Number]
  },
  instanceFeatureIdLabel: {
    type: [String, Number]
  },
  splitDirection: {
    type: Number as PropType<Cesium.SplitDirection>,
    default: 0 //Cesium.SplitDirection.NONE
  },
  projectTo2D: {
    type: Boolean,
    default: false
  },
  showCreditsOnScreen: {
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
  ...customShader,
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
  replaceFS: Boolean,
  assetId: Number
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
    const primitivesStates = usePrimitives(props, ctx, instance)
      ; (instance.proxy as VcComponentPublicInstance).creatingPromise.then(obj => {
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
            const webgl2 = primitivesStates.$services.viewer.scene.context?.webgl2
            sourceShaders[program.fragmentShader] = oldFS.replace(
              `${webgl2 ? 'out_FragColor' : 'gl_FragColor'} = vec4(color, 1.0);\n}`,
              `${webgl2 ? 'out_FragColor' : 'gl_FragColor'}  = vec4(color, 1.0);
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

export type VcPrimitiveTilesetEmits = typeof emits
export type VcPrimitiveTilesetProps = {
  /**
   * The url to a tileset JSON file.
   */
  url: string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource
  /**
   * Determines if the tileset will be shown.
   * Default value: true
   */
  show?: boolean
  /**
   * A 4x4 transformation matrix that transforms the tileset's root tile.
   */
  modelMatrix?: Cesium.Matrix4
  /**
   * Which axis is considered up when loading models for tile contents.
   */
  modelUpAxis?: number | Cesium.Axis.Y
  /**
   * Which axis is considered forward when loading models for tile contents.
   */
  modelForwardAxis?: number | Cesium.Axis.X
  /**
   * Determines whether the tileset casts or receives shadows from light sources.
   */
  shadows?: number | Cesium.ShadowMode
  /**
   * The maximum screen space error used to drive level of detail refinement.
   * Default value: 16
   */
  maximumScreenSpaceError?: number
  /**
   * The maximum amount of memory in MB that can be used by the tileset.
   * Default value: 512
   */
  maximumMemoryUsage?: number
  /**
   * The size (in bytes) to which the tile cache will be trimmed, if the cache contains tiles not needed for the current view.
   */
  cacheBytes?: number
  /**
   * The maximum additional memory (in bytes) to allow for cache headroom, if more than Cesium3DTileset#cacheBytes are needed for the current view.
   */
  maximumCacheOverflowBytes?: number
  /**
   * Optimization option. Whether to cull tiles using the union of their children bounding volumes.
   * Default value: true
   */
  cullWithChildrenBounds?: boolean
  /**
   * Optimization option. Don't request tiles that will likely be unused when they come back because of the camera's movement. This optimization only applies to stationary tilesets.
   * Default value: true
   */
  cullRequestsWhileMoving?: boolean
  /**
   * Optimization option. Multiplier used in culling requests while moving. Larger is more aggressive culling, smaller less aggressive culling.
   * Default value: 60.0
   */
  cullRequestsWhileMovingMultiplier?: number
  /**
   * Preload tiles when tileset.show is false. Loads tiles as if the tileset is visible but does not render them.
   * Default value: false
   */
  preloadWhenHidden?: boolean
  /**
   * Optimization option. Preload tiles at the camera's flight destination while the camera is in flight.
   * Default value: true
   */
  preloadFlightDestinations?: boolean
  /**
   * Optimization option. Prefer loading of leaves first.
   * Default value: false
   */
  preferLeaves?: boolean
  /**
   * Optimization option. Reduce the screen space error for tiles that are further away from the camera.
   * Default value: false
   */
  dynamicScreenSpaceError?: boolean
  /**
   * Density used to adjust the dynamic screen space error, similar to fog density.
   * Default value: 0.00278
   */
  dynamicScreenSpaceErrorDensity?: number
  /**
   * A factor used to increase the computed dynamic screen space error.
   * Default value: 4.0
   */
  dynamicScreenSpaceErrorFactor?: number
  /**
   * A ratio of the tileset's height at which the density starts to falloff.
   * Default value: 0.25
   */
  dynamicScreenSpaceErrorHeightFalloff?: number
  /**
   * Optimization option. If between (0.0, 0.5], tiles at or above the screen space error for the reduced screen resolution of progressiveResolutionHeightFraction*screenHeight will be prioritized first. This can help get a quick layer of tiles down while full resolution tiles continue to load.
   * Default value: 0.3
   */
  progressiveResolutionHeightFraction?: number
  /**
   * Optimization option. Prioritize loading tiles in the center of the screen by temporarily raising the screen space error for tiles around the edge of the screen. Screen space error returns to normal once all the tiles in the center of the screen as determined by the Cesium3DTileset#foveatedConeSize are loaded.
   * Default value: true
   */
  foveatedScreenSpaceError?: boolean
  /**
   * Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the cone size that determines which tiles are deferred. Tiles that are inside this cone are loaded immediately. Tiles outside the cone are potentially deferred based on how far outside the cone they are and their screen space error. This is controlled by Cesium3DTileset#foveatedInterpolationCallback and Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation. Setting this to 0.0 means the cone will be the line formed by the camera position and its view direction. Setting this to 1.0 means the cone encompasses the entire field of view of the camera, disabling the effect.
   * Default value: 0.3
   */
  foveatedConeSize?: number
  /**
   * Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the starting screen space error relaxation for tiles outside the foveated cone. The screen space error will be raised starting with tileset value up to Cesium3DTileset#maximumScreenSpaceError based on the provided Cesium3DTileset#foveatedInterpolationCallback.
   * Default value: 0.0
   */
  foveatedMinimumScreenSpaceErrorRelaxation?: number
  /**
   * Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how much to raise the screen space error for tiles outside the foveated cone, interpolating between Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation and Cesium3DTileset#maximumScreenSpaceError
   * @param p The start value to interpolate.
   * @param q The end value to interpolate.
   * @param time The time of interpolation generally in the range [0.0, 1.0].
   * @returns The interpolated value.
   */
  foveatedInterpolationCallback?: (p: number, q: number, time: number) => number
  /**
   * Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how long in seconds to wait after the camera stops moving before deferred tiles start loading in. This time delay prevents requesting tiles around the edges of the screen when the camera is moving. Setting this to 0.0 will immediately request all tiles in any given view.
   * Default value: 0.2
   */
  foveatedTimeDelay?: number
  /**
   * Optimization option. Determines if level of detail skipping should be applied during the traversal.
   * Default value: false
   */
  skipLevelOfDetail?: boolean
  /**
   * When skipLevelOfDetail is true, the screen space error that must be reached before skipping levels of detail.
   * Default value: 1024
   */
  baseScreenSpaceError?: number
  /**
   * When skipLevelOfDetail is true, a multiplier defining the minimum screen space error to skip. Used in conjunction with skipLevels to determine which tiles to load.
   * Default value: 16
   */
  skipScreenSpaceErrorFactor?: number
  /**
   * When skipLevelOfDetail is true, a constant defining the minimum number of levels to skip when loading tiles. When it is 0, no levels are skipped. Used in conjunction with skipScreenSpaceErrorFactor to determine which tiles to load.
   * Default value: 1
   */
  skipLevels?: number
  /**
   * When skipLevelOfDetail is true, only tiles that meet the maximum screen space error will ever be downloaded. Skipping factors are ignored and just the desired tiles are loaded.
   * Default value: false
   */
  immediatelyLoadDesiredLevelOfDetail?: boolean
  /**
   * When skipLevelOfDetail is true, determines whether siblings of visible tiles are always downloaded during traversal.
   * Default value: false
   */
  loadSiblings?: boolean
  /**
   * The [ClippingPlaneCollection](https://cesium.com/learn/cesiumjs/ref-doc/ClippingPlaneCollection.html) used to selectively disable rendering the tileset.
   */
  clippingPlanes?: Cesium.ClippingPlaneCollection
  /**
   * Determines whether terrain, 3D Tiles or both will be classified by this tileset. See Cesium3DTileset#classificationType for details about restrictions and limitations.
   */
  classificationType?: number | Cesium.ClassificationType
  /**
   * The ellipsoid determining the size and shape of the globe.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * Gets an ellipsoid describing the shape of the globe.
   */
  enableCollision?: boolean
  /**
   * Options for constructing a PointCloudShading object to control point attenuation based on geometric error and lighting.
   */
  pointCloudShading?: Cesium.PointCloudShading
  /**
   * Scales the diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.
   */
  imageBasedLightingFactor?: VcCartesian2
  /**
   * The light color when shading models. When undefined the scene's light color is used instead.
   */
  lightColor?: VcPosition
  /**
   * The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map.
   * Default value: 0.2
   */
  luminanceAtZenith?: number
  /**
   * The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.
   */
  sphericalHarmonicCoefficient?: Array<VcPosition>
  /**
   * A URL to a KTX2 file that contains a cube map of the specular lighting and the convoluted specular mipmaps.
   */
  specularEnvironmentMaps?: string
  /**
   * The properties for managing image-based lighting for this tileset.
   */
  imageBasedLighting?: VcImageBasedLighting
  /**
   * Whether to cull back-facing geometry. When true, back face culling is determined by the glTF material's doubleSided property; when false, back face culling is disabled.
   * Default value: true
   */
  backFaceCulling?: boolean
  /**
   * Whether to enable outlines for models using the CESIUM_primitive_outline extension. This can be set to false to avoid the additional processing of geometry at load time. When false, the showOutlines and outlineColor options are ignored.
   */
  enableShowOutline?: boolean
  /**
   * Whether to display the outline for models using the CESIUM_primitive_outline extension. When true, outlines are displayed. When false, outlines are not displayed.
   * Default value: true
   */
  showOutline?: boolean
  /**
   * Indicates that only the tileset's vector tiles should be used for classification.
   * Default value: false
   */
  vectorClassificationOnly?: boolean
  /**
   * Whether vector tiles should keep decoded positions in memory. This is used with Cesium3DTileFeature.getPolylinePositions.
   * Default value: false
   */
  vectorKeepDecodedPositions?: boolean
  /**
   * The index into the list of primitive feature IDs used for picking and styling. For EXT_feature_metadata, feature ID attributes are listed before feature ID textures. If both per-primitive and per-instance feature IDs are present, the instance feature IDs take priority.
   * Default value: 0
   */
  featureIdIndex?: number
  /**
   * The index into the list of instance feature IDs used for picking and styling. If both per-primitive and per-instance feature IDs are present, the instance feature IDs take priority.
   * Default value: 0
   */
  instanceFeatureIdIndex?: number
  /**
   * Label of the feature ID set to use for picking and styling. For EXT_mesh_features, this is the feature ID's label property, or "featureId_N" (where N is the index in the featureIds array) when not specified. EXT_feature_metadata did not have a label field, so such feature ID sets are always labeled "featureId_N" where N is the index in the list of all feature Ids, where feature ID attributes are listed before feature ID textures. If featureIdLabel is an integer N, it is converted to the string "featureId_N" automatically. If both per-primitive and per-instance feature IDs are present, the instance feature IDs take priority.
   */
  featureIdLabel?: number | string
  /**
   * Label of the instance feature ID set used for picking and styling. If instanceFeatureIdLabel is set to an integer N, it is converted to the string "instanceFeatureId_N" automatically. If both per-primitive and per-instance feature IDs are present, the instance feature IDs take priority.
   */
  instanceFeatureIdLabel?: number | string
  /**
   * The SplitDirection split to apply to this tileset.
   */
  splitDirection?: number | Cesium.SplitDirection
  /**
   * Whether to accurately project the tileset to 2D. If this is true, the tileset will be projected accurately to 2D, but it will use more memory to do so. If this is false, the tileset will use less memory and will still render in 2D / CV mode, but its projected positions may be inaccurate. This cannot be set after the tileset has loaded.
   */
  projectTo2D?: boolean
  /**
   * Whether to display the credits of this tileset on screen.
   * Default value: false
   */
  showCreditsOnScreen?: boolean
  /**
   * The tile variable to colorize as a heatmap. All rendered tiles will be colorized relative to each other's specified variable value.
   */
  debugHeatmapTilePropertyName?: string
  /**
   * For debugging only. Determines if only the tiles from last frame should be used for rendering.
   * Default value: false
   */
  debugFreezeFrame?: boolean
  /**
   * For debugging only. When true, assigns a random color to each tile.
   * Default value: false
   */
  debugColorizeTiles?: boolean
  /**
   * For debugging only. When true, render's each tile's content as a wireframe.
   * Default value: false
   */
  debugWireframe?: boolean
  /**
   * For debugging only. When true, renders the bounding volume for each tile.
   * Default value: false
   */
  debugShowBoundingVolume?: boolean
  /**
   * For debugging only. When true, renders the bounding volume for each tile's content.
   * Default value: false
   */
  debugShowContentBoundingVolume?: boolean
  /**
   * For debugging only. When true, renders the viewer request volume for each tile.
   * Default value: false
   */
  debugShowViewerRequestVolume?: boolean
  /**
   * For debugging only. When true, draws labels to indicate the geometric error of each tile.
   * Default value: false
   */
  debugShowGeometricError?: boolean
  /**
   * For debugging only. When true, draws labels to indicate the number of commands, points, triangles and features for each tile.
   * Default value: false
   */
  debugShowRenderingStatistics?: boolean
  /**
   * For debugging only. When true, draws labels to indicate the texture and geometry memory in megabytes used by each tile.
   * Default value: false
   */
  debugShowMemoryUsage?: boolean
  /**
   * For debugging only. When true, draws labels to indicate the url of each tile.
   * Default value: false
   */
  debugShowUrl?: boolean
  /**
   * Specifies whether to respond to mouse pick events.
   * Default value: true
   */
  enableMouseEvent?: boolean
  /**
   * If true, ModelExperimental will be used instead of Model for each tile with a glTF or 3D Tiles 1.0 content (where applicable).
   * Default value: false
   */
  enableModelExperimental?: boolean
  /**
   * A custom shader to apply to all tiles in the tileset. Only used for contents that use ModelExperimental. Using custom shaders with a Cesium3DTileStyle may lead to undefined behavior.To enable ModelExperimental, set ExperimentalFeatures.enableModelExperimental or tileset.enableModelExperimental to true.
   */
  customShader?: Cesium.CustomShader
  /**
   * Hook up custom properties.
   */
  properties?: Array<{
    key: string
    keyValue: any
    propertyName: string
    propertyValue: any
  }>
  /**
   * A custom fragmentShader for models processed by CesiumLab.
   */
  fragmentShader?: string
  /**
   * Whether fragmentShader is directly replaced.
   */
  replaceFS?: boolean
  /**
   * The assetId to a tileset from a Cesium ion asset ID.
   */
  assetId?: number
  /**
   * Triggers before the component is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the component is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the component is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the mouse is pressed on this primitive.
   */
  onMousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this primitive.
   */
  onMouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this primitive.
   */
  onClick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this primitive.
   */
  onClickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this primitive.
   */
  onDblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this primitive.
   */
  onMousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this primitive.
   */
  onMouseover?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves out of this primitive.
   */
  onMouseout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the primitive is ready to render.
   */
  onReadyPromise?: (primitive: Cesium.Primitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
  /**
   * When true, all tiles that meet the screen space error this frame are loaded. The tileset is completely loaded for this view.
   */
  onAllTilesLoaded?: () => void
  /**
   * The event fired to indicate that all tiles that meet the screen space error this frame are loaded. This event is fired once when all tiles in the initial view are loaded.This event is fired at the end of the frame after the scene is rendered.
   */
  onInitialTilesLoaded?: () => void
  /**
   * The event fired to indicate progress of loading new tiles. This event is fired when a new tile is requested, when a requested tile is finished downloading, and when a downloaded tile has been processed and is ready to render.
   */
  onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => void
  /**
   * The event fired to indicate that a tile's content failed to load.
   */
  onTileFailed?: (url: string, errorMsg: string) => void
  /**
   * The event fired to indicate that a tile's content was loaded.
   */
  onTileLoad?: (tile: Cesium.Cesium3DTile) => void
  /**
   * The event fired to indicate that a tile's content was unloaded.
   */
  onTileUnload?: (tile: Cesium.Cesium3DTile) => void
  /**
   * This event fires once for each visible tile in a frame. This can be used to manually style a tileset.
   */
  onTileVisible?: (tile: Cesium.Cesium3DTile) => void
}

export type VcPrimitiveTilesetRef = VcComponentPublicInstance<VcPrimitiveTilesetProps>
