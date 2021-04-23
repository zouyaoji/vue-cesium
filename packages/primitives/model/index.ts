import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
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

export default defineComponent({
  name: 'VcPrimitiveModel',
  props: {
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
    ...enableMouseEvent
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Model'
    const primitivesState = usePrimitives(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      const options: any = primitivesState.transformProps(props)
      return Cesium.Model.fromGltf(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
