/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-27 16:43:45
 * @LastEditTime: 2022-03-24 22:29:53
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\post-processes\post-process-stage\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcBoundingRectangle, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables/index'
import { kebabCase } from '@vue-cesium/utils/util'
import defaultProps from './defaultProps'
import { commonEmits } from '@vue-cesium/utils/emits'

export const postProcessStageProps = defaultProps
export default defineComponent({
  name: 'VcPostProcessStage',
  props: postProcessStageProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PostProcessStage'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState

    // methods
    instance.mount = async () => {
      const { postProcessStages } = $services
      const stage = postProcessStages.add(instance.cesiumObject as Cesium.PostProcessStage)
      return postProcessStages.contains(stage)
    }

    instance.unmount = async () => {
      const { postProcessStages } = $services
      return postProcessStages?.remove(instance.cesiumObject as Cesium.PostProcessStage)
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPostProcessStageProps = {
  /**
   * The fragment shader to use. The default sampler2D uniforms are colorTexture and depthTexture. The color texture is the output of rendering the scene or the previous stage. The depth texture is the output from rendering the scene. The shader should contain one or both uniforms. There is also a vec2 varying named v_textureCoordinates that can be used to sample the textures.
   */
  fragmentShader: string
  /**
   * An object whose properties will be used to set the shaders uniforms. The properties can be constant values or a function. A constant value can also be a URI, data URI, or HTML element to use as a texture.
   */
  uniforms?: any
  /**
   * A number in the range (0.0, 1.0] used to scale the texture dimensions. A scale of 1.0 will render this post-process stage to a texture the size of the viewport.
   * Default value: 1.0
   */
  textureScale?: number
  /**
   * Whether or not to force the texture dimensions to be both equal powers of two. The power of two will be the next power of two of the minimum of the dimensions.
   * Default value: false
   */
  forcePowerOfTwo?: boolean
  /**
   * How to sample the input color texture.
   */
  sampleMode?: number | Cesium.PostProcessStageSampleMode
  /**
   * The color pixel format of the output texture.
   */
  pixelFormat?: number | Cesium.PixelFormat
  /**
   * The pixel data type of the output texture.
   */
  pixelDatatype?: number | Cesium.PixelDatatype
  /**
   * The color to clear the output texture to.
   */
  clearColor?: VcColor
  /**
   * The rectangle to use for the scissor test.
   */
  scissorRectangle?: VcBoundingRectangle
  /**
   * The unique name of this post-process stage for reference by other stages in a composite. If a name is not supplied, a GUID will be generated.
   */
  name?: string
  /**
   * Triggers before the component is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the component is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcPostProcessStageRef = VcComponentPublicInstance<VcPostProcessStageProps>
