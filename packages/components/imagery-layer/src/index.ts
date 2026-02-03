/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2026-01-20 21:28:35
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\components\imagery-layer\src\index.ts
 */

import type {
  AnyFunction,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcImageryProvider,
  VcReadyObject,
  VcRectangle
} from '@vue-cesium/utils/types'
import type { VNode } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import { compareCesiumVersion } from '@vue-cesium/utils/cesium-helpers'
import { commonEmits } from '@vue-cesium/utils/emits'
import { hSlot } from '@vue-cesium/utils/private/render'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'
import { isUndefined, kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import defaultProps from './defaultProps'

const emits = {
  ...commonEmits,
  'update:imageryProvider': (payload: VcImageryProvider) => true,
  'readyEvent': (payload: VcImageryProvider) => true,
  'errorEvent': (payload: Error) => true
}
export const imageryLayerProps = defaultProps
export default defineComponent({
  name: 'VcLayerImagery',
  props: imageryLayerProps,
  emits,
  setup(props: VcLayerImageryProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ImageryLayer'
    instance.cesiumEvents = ['readyEvent', 'errorEvent']
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx
    // methods
    instance.createCesiumObject = async () => {
      const options = commonState.transformProps(props)

      if (compareCesiumVersion(Cesium.VERSION, '1.104')) {
        const imageryProvider = (props.imageryProvider
          || Cesium.BingMapsImageryProvider.fromUrl(undefined, {
            key: ''
          })) as Cesium.ImageryProvider

        const imageryLayer = Cesium.ImageryLayer.fromProviderAsync(imageryProvider as any, options as any)
        // const imageryLayer = Cesium.ImageryLayer.fromWorldImagery(options as any)
        // eslint-disable-next-line node/handle-callback-err
        imageryLayer.errorEvent.addEventListener((error) => {
          // console.error(error)
        })

        return imageryLayer
      }
      else {
        const imageryProvider = (props.imageryProvider || {}) as Cesium.ImageryProvider
        return new Cesium.ImageryLayer(imageryProvider, options as any)
      }
    }

    instance.mount = async () => {
      const { viewer } = $services
      const imageryLayer = instance.cesiumObject as Cesium.ImageryLayer
      imageryLayer.sortOrder = props.sortOrder
      imageryLayer.vcId = props.vcId || Cesium.createGuid()
      viewer.imageryLayers.add(imageryLayer)
      return !viewer.isDestroyed() && viewer.imageryLayers.contains(imageryLayer)
    }

    instance.unmount = async () => {
      const { viewer } = $services
      const imageryLayer = instance.cesiumObject as Cesium.ImageryLayer
      return !viewer.isDestroyed() && viewer.imageryLayers.remove(imageryLayer)
    }

    const updateProvider = (provider: VcImageryProvider) => {
      if (isUndefined(provider)) {
        return instance.unmount?.()
      }
      else {
        const imageryLayer = instance.cesiumObject as Cesium.ImageryLayer
        ;(imageryLayer as any)._imageryProvider = provider
        const listener = getInstanceListener(instance, 'update:imageryProvider')
        if (listener)
          emit('update:imageryProvider', provider)
      }

      return true
    }

    // expose public methods
    Object.assign(instance.proxy, {
      // private but needed by VcProviderXXX
      __updateProvider: updateProvider
    })

    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(instance.proxy?.$options.name || ''),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type LayerPropCallback = (frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => number
export type VcLayerImageryEmits = typeof emits
export interface VcLayerImageryProps {
  /**
   * The imagery provider to use.
   */
  'imageryProvider'?: VcImageryProvider
  /**
   * The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.
   */
  'rectangle'?: VcRectangle
  /**
   * The alpha blending value of this layer, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile.
   * Default value: 1.0
   */
  'alpha'?: number | LayerPropCallback
  /**
   * The alpha blending value of this layer on the night side of the globe, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile. This only takes effect when enableLighting is true.
   * Default value: 1.0
   */
  'nightAlpha'?: number | LayerPropCallback
  /**
   * The alpha blending value of this layer on the day side of the globe, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile. This only takes effect when enableLighting is true.
   * Default value: 1.0
   */
  'dayAlpha'?: number | LayerPropCallback
  /**
   * The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the brightness is required, and it is expected to return the brightness value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
   * Default value: 1.0
   */
  'brightness'?: number | LayerPropCallback
  /**
   * The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the contrast is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
   * Default value: 1.0
   */
  'contrast'?: number | LayerPropCallback
  /**
   * The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the hue is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
   * Default value: 0.0
   */
  'hue'?: number | LayerPropCallback
  /**
   * The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the saturation is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
   * Default value: 1.0
   */
  'saturation'?: number | LayerPropCallback
  /**
   * The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
   * Default value: 1.0
   */
  'gamma'?: number | LayerPropCallback
  /**
   * The SplitDirection split to apply to this layer.
   */
  'splitDirection'?: number | Cesium.SplitDirection | AnyFunction<number | Cesium.SplitDirection>
  /**
   * The texture minification filter to apply to this layer. Possible values are TextureMinificationFilter.LINEAR and TextureMinificationFilter.NEAREST.
   */
  'minificationFilter'?: number | Cesium.TextureMinificationFilter
  /**
   * The texture minification filter to apply to this layer. Possible values are TextureMagnificationFilter.LINEAR and TextureMagnificationFilter.NEAREST.
   */
  'magnificationFilter'?: number | Cesium.TextureMagnificationFilter
  /**
   * True if the layer is shown; otherwise, false.
   * Default value: true
   */
  'show'?: boolean
  /**
   * The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.
   */
  'maximumAnisotropy'?: number
  /**
   * The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.
   */
  'minimumTerrainLevel'?: number
  /**
   * The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.
   */
  'maximumTerrainLevel'?: number
  /**
   * Cartographic rectangle for cutting out a portion of this ImageryLayer.
   */
  'cutoutRectangle'?: VcRectangle
  /**
   * Color to be used as alpha.
   */
  'colorToAlpha'?: VcColor
  /**
   * Threshold for color-to-alpha.
   * Default value: 0.004
   */
  'colorToAlphaThreshold'?: number
  /**
   * Specify the relative order of the layer.
   */
  'sortOrder'?: number
  /**
   * Specify vcId of the layer.
   */
  'vcId'?: string
  /**
   * Triggers before the VcLayerImagery is loaded.
   */
  'onBeforeLoad'?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcLayerImagery is successfully loaded.
   */
  'onReady'?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  'onUnready'?: (e: any) => void
  /**
   * Triggers when the VcLayerImagery is destroyed.
   */
  'onDestroyed'?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when imageryProvider is updated.
   */
  'onUpdate:imageryProvider'?: (payload: VcImageryProvider) => void
}

export interface VcLayerImageryRef extends VcComponentPublicInstance<VcLayerImageryProps> {
  /**
   * private but needed by VcProviderXXX
   * @param provider
   */
  __updateProvider?: (provider: VcImageryProvider | undefined) => boolean
}

export interface VcLayerImagerySlots {
  /**
   * Slot for vc-imagery-provider-xxx.
   */
  default: () => VNode[]
}
