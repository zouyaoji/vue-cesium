/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 00:53:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\imagery-layer\src\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, h, provide } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance, VcImageryProvider } from '@vue-cesium/utils/types'
import { hSlot } from '@vue-cesium/utils/private/render'
import { useCommon } from '@vue-cesium/composables'
import defaultProps from './defaultProps'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'
import { isUndefined, kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'

const emits = {
  ...commonEmits,
  'update:imageryProvider': (payload: VcImageryProvider) => true
}
export const imageryLayerProps = defaultProps
export default defineComponent({
  name: 'VcLayerImagery',
  props: imageryLayerProps,
  emits: emits,
  setup(props: VcLayerImageryProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ImageryLayer'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx
    // methods
    instance.createCesiumObject = async () => {
      const options = commonState.transformProps(props)
      const imageryProvider = (props.imageryProvider || {}) as Cesium.ImageryProvider
      return new Cesium.ImageryLayer(imageryProvider, options as any)
    }
    instance.mount = async () => {
      const { viewer } = $services
      const imageryLayer = instance.cesiumObject as Cesium.ImageryLayer
      imageryLayer.sortOrder = props.sortOrder
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
      } else {
        const imageryLayer = instance.cesiumObject as Cesium.ImageryLayer
        ;(imageryLayer as any)._imageryProvider = provider
        const listener = getInstanceListener(instance, 'update:imageryProvider')
        if (listener) emit('update:imageryProvider', provider)
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

export type VcLayerImageryProps = ExtractPropTypes<typeof imageryLayerProps>
export type VcLayerImageryEmits = typeof emits
