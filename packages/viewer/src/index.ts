
import { defineComponent, provide, getCurrentInstance, h, createCommentVNode } from 'vue'
import useViewer from './useViewer'
import defaultProps from './defaultProps'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { vcKey } from '@vue-cesium/utils/config'
import { viewerEvents, emits } from './events'
import { VcSkeleton } from '@vue-cesium/ui'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcViewer',
  props: defaultProps,
  emits: emits,
  setup(props, ctx) {
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumEvents = ['selectedEntityChanged', 'trackedEntityChanged']
    instance.cesiumMembersEvents = viewerEvents
    const viewerStates = useViewer(props, ctx, instance)
    // debug only
    const tags = [
      ...Object.keys(instance.props),
      ...instance.proxy.$options.emits
    ]
    console.log(tags)

    // provide
    provide(vcKey, viewerStates.getServices())

    // expose public methods
    Object.assign(instance.proxy, {
      createPromise: viewerStates.createPromise,
      load: viewerStates.load,
      unload: viewerStates.unload,
      reload: viewerStates.reload,
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
          class: 'VcViewer',
          id: 'cesiumContainer',
          style: { width: '100%', height: '100%' }
        }, hSlot(ctx.slots.default))
      )
      return children
    }
  }
})
