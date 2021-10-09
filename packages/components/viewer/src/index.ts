/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-01 23:32:51
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\viewer\src\index.ts
 */
import { defineComponent, provide, getCurrentInstance, h, createCommentVNode, ExtractPropTypes, VNode } from 'vue'
import useViewer from './useViewer'
import defaultProps from './defaultProps'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { vcKey } from '@vue-cesium/utils/config'
import { viewerEvents, emits } from './events'
import { VcSkeleton } from '@vue-cesium/components/ui'
import { hSlot } from '@vue-cesium/utils/private/render'
import { isPlainObject, kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcViewer',
  props: defaultProps,
  emits: emits,
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumEvents = ['selectedEntityChanged', 'trackedEntityChanged']
    instance.cesiumMembersEvents = viewerEvents
    const viewerStates = useViewer(props, ctx, instance)

    // provide
    provide(vcKey, viewerStates.getServices())
    // expose public methods
    Object.assign(instance.proxy, {
      createPromise: viewerStates.createPromise,
      load: viewerStates.load,
      unload: viewerStates.unload,
      reload: viewerStates.reload,
      cesiumObject: instance.cesiumObject,
      getCesiumObject: () => instance.cesiumObject
    })

    return () => {
      const children: Array<VNode> = []
      if (isPlainObject(props.skeleton) && !viewerStates.isReady.value) {
        children.push(
          h(VcSkeleton, {
            ...props.skeleton,
            style: { background: props.skeleton.color, width: '100%', height: '100%' }
          })
        )
      } else {
        children.push(createCommentVNode('v-if'))
      }
      children.push(
        createCommentVNode('vc-viewer'),
        h(
          'div',
          {
            ref: viewerStates.viewerRef,
            class: kebabCase(instance.proxy?.$options.name || ''),
            id: ctx.attrs.id || 'cesiumContainer',
            style: ctx.attrs.style || { width: '100%', height: '100%' }
          },
          hSlot(ctx.slots.default)
        )
      )
      return children
    }
  }
})
