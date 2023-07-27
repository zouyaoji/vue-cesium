/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2023-07-28 00:41:06
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\model\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, PropType, VNode } from 'vue'
import type {
  VcCartesian2,
  VcCartesian3Array,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcPickEvent,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import {
  url,
  show,
  modelMatrix,
  scale,
  minimumPixelSize,
  maximumScale,
  id,
  allowPicking,
  incrementallyLoadTextures,
  asynchronous,
  clampAnimations,
  shadows,
  debugShowBoundingVolume,
  debugWireframe,
  heightReference,
  scene,
  distanceDisplayCondition,
  color,
  colorBlendMode,
  colorBlendAmount,
  silhouetteColor,
  silhouetteSize,
  clippingPlanes,
  imageBasedLightingFactor,
  lightColor,
  luminanceAtZenith,
  sphericalHarmonicCoefficients,
  specularEnvironmentMaps,
  credit,
  backFaceCulling,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveEmits } from '@vue-cesium/utils/emits'
import { compareCesiumVersion } from '@vue-cesium/utils/cesium-helpers'

export const modelPrimitiveProps = {
  ...url,
  basePath: String as PropType<string | Cesium.Resource>,
  ...show,
  ...modelMatrix,
  ...scale,
  ...minimumPixelSize,
  ...maximumScale,
  ...id,
  ...allowPicking,
  ...incrementallyLoadTextures,
  ...asynchronous,
  ...clampAnimations,
  ...shadows,
  ...debugShowBoundingVolume,
  ...debugWireframe,
  ...heightReference,
  ...scene,
  ...distanceDisplayCondition,
  ...color,
  ...colorBlendMode,
  ...colorBlendAmount,
  ...silhouetteColor,
  ...silhouetteSize,
  ...clippingPlanes,
  dequantizeInShader: {
    type: Boolean,
    default: true
  },
  ...imageBasedLightingFactor,
  ...lightColor,
  ...luminanceAtZenith,
  ...sphericalHarmonicCoefficients,
  ...specularEnvironmentMaps,
  ...credit,
  ...backFaceCulling,
  showOutline: {
    type: Boolean,
    default: true
  },
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveModel',
  props: modelPrimitiveProps,
  emits: {
    ...primitiveEmits,
    readyEvent: (evt: Cesium.Model) => true,
    texturesReadyEvent: (evt: Cesium.Model) => true,
    errorEvent: (evt: Error) => true
  },
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Model'
    instance.cesiumEvents = ['readyEvent', 'texturesReadyEvent', 'errorEvent']
    const primitivesState = usePrimitives(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      const options: any = primitivesState?.transformProps(props)

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return compareCesiumVersion(Cesium.VERSION, '1.104') ? await Cesium.Model.fromGltfAsync(options) : Cesium.Model.fromGltf(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveModelProps = {
  /**
   * The url to the .gltf file.
   */
  url: string | Cesium.Resource
  /**
   * The base path that paths in the glTF JSON are relative to.
   */
  basePath?: string | Cesium.Resource
  /**
   * Determines if the model primitive will be shown.
   * Default value: true
   */
  show?: boolean
  /**
   * The 4x4 transformation matrix that transforms the model from model to world coordinates.
   */
  modelMatrix: Cesium.Matrix4
  /**
   * A uniform scale applied to this model.
   * Default value: 1.0
   */
  scale?: number
  /**
   * The approximate minimum pixel size of the model regardless of zoom.
   * Default value: 0.0
   */
  minimumPixelSize?: number
  /**
   * The maximum scale for the model.
   */
  maximumScale?: number
  /**
   * A user-defined object to return when the model is picked with Scene#pick.
   */
  id?: any
  /**
   * When true, each glTF mesh and primitive is pickable with Scene#pick.
   * Default value: true
   */
  allowPicking?: boolean
  /**
   * Determine if textures may continue to stream in after the model is loaded.
   * Default value: true
   */
  incrementallyLoadTextures?: boolean
  /**
   * Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded.
   * Default value: true
   */
  asynchronous?: boolean
  /**
   * Determines if the model's animations should hold a pose over frames where no keyframes are specified.
   * Default value: true
   */
  clampAnimations?: boolean
  /**
   * Determines whether the model casts or receives shadows from light sources.
   */
  shadows?: number | Cesium.ShadowMode
  /**
   * For debugging only. Draws the bounding sphere for each draw command in the model.
   * Default value: false
   */
  debugShowBoundingVolume?: boolean
  /**
   * For debugging only. Draws the model in wireframe.
   * Default value: false
   */
  debugWireframe?: boolean
  /**
   * Determines how the model is drawn relative to terrain.
   */
  heightReference?: number | Cesium.HeightReference
  /**
   * Must be passed in for models that use the height reference property.
   */
  scene?: Cesium.Scene
  /**
   * The condition specifying at what distance from the camera that this model will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * A color that blends with the model's rendered color.
   * Default value: white
   */
  color?: VcColor
  /**
   * Defines how the color blends with the model.
   */
  colorBlendMode?: number | Cesium.ColorBlendMode
  /**
   * Value used to determine the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.
   * Default value: 0.5
   */
  colorBlendAmount?: number
  /**
   * The silhouette color. If more than 256 models have silhouettes enabled, there is a small chance that overlapping models will have minor artifacts.
   */
  silhouetteColor?: VcColor
  /**
   * The size of the silhouette in pixels.
   * Default value: 0.0
   */
  silhouetteSize?: number
  /**
   * The ClippingPlaneCollection used to selectively disable rendering the model.
   */
  clippingPlanes?: Cesium.ClippingPlaneCollection
  /**
   * Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models.
   * Default value: true
   */
  dequantizeInShader?: boolean
  /**
   * Scales diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.
   * Default value: { x: 1.0, y: 1.0 }
   */
  imageBasedLightingFactor?: VcCartesian2
  /**
   * The light color when shading the model. When undefined the scene's light color is used instead.
   */
  lightColor?: VcColor
  /**
   * The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map.
   * Default value: 0.2
   */
  luminanceAtZenith?: number
  /**
   * The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.
   */
  sphericalHarmonicCoefficients?: VcCartesian3Array
  /**
   * A URL to a KTX2 file that contains a cube map of the specular lighting and the convoluted specular mipmaps.
   */
  specularEnvironmentMaps?: string
  /**
   * A credit for the model, which is displayed on the canvas.
   */
  credit?: string | Cesium.Credit
  /**
   * Whether to cull back-facing geometry. When true, back face culling is determined by the material's doubleSided property; when false, back face culling is disabled. Back faces are not culled if Model#color is translucent or Model#silhouetteSize is greater than 0.0.
   * Default value: true
   */
  backFaceCulling?: boolean
  /**
   * Whether to display the outline for models using the CESIUM_primitive_outline extension. When true, outlines are displayed. When false, outlines are not displayed.
   * Default value: true
   */
  showOutline?: boolean
  /**
   * Specifies whether to respond to mouse pick events.
   * Default Value: true
   */
  enableMouseEvent?: boolean
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
  onReadyPromise?: (primitive: Cesium.ClassificationPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
  /**
   * Triggers when the model is loaded and ready for rendering.
   */
  onReadyEvent?: (evt: Cesium.Model) => void
  /**
   * Triggers when the model textures are loaded and ready for rendering.
   */
  onTexturesReadyEvent?: (evt: Cesium.Model) => void
  /**
   * Triggers when the model encounters an asynchronous rendering error.
   */
  onErrorEvent?: (evt: Error) => void
}

export type VcPrimitiveModelRef = VcComponentPublicInstance<VcPrimitiveModelProps>

export interface VcPrimitiveModelSlots {
  /**
   * Slot for vc-geometry-instance.
   */
  default: () => VNode[]
}
