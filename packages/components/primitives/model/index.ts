/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-17 00:04:10
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\model\index.ts
 */
import type { ExtractPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
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
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveModel',
  props: modelPrimitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Model'
    const primitivesState = usePrimitives(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      const options: any = primitivesState?.transformProps(props)
      return Cesium.Model.fromGltf(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveModelProps = ExtractPropTypes<typeof modelPrimitiveProps>
