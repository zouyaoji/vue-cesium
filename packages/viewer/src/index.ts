
import { defineComponent, provide, getCurrentInstance, h, createCommentVNode, ExtractPropTypes } from 'vue'
import useViewer from './useViewer'
import defaultProps from './defaultProps'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { vcKey } from '@vue-cesium/utils/config'
import { viewerEvents, emits } from './events'
import { VcSkeleton } from '@vue-cesium/ui'
import { hSlot } from '@vue-cesium/utils/private/render'
import { kebabCase } from '@vue-cesium/utils/util'

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
      const children = []
      if (props.skeleton && !viewerStates.isReady.value){
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
        h('div', {
          ref: viewerStates.viewerRef,
          class: kebabCase(instance.proxy.$options.name),
          id: 'cesiumContainer',
          style: { width: '100%', height: '100%' }
        }, hSlot(ctx.slots.default))
      )
      return children
    }
  }
})
