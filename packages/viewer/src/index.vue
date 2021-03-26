<template>
  <vc-skeleton
    v-if="skeleton && !isReady"
    :bordered="skeleton.bordered"
    :dark="skeleton.dark"
    :animation="skeleton.animation"
    :square="skeleton.square"
    :style="{ background: skeleton.color }"
    style="width: 100%; height: 100%"
  />
  <div id="cesiumContainer" ref="viewerRef" class="vc-viewer" style="width: 100%; height: 100%">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, getCurrentInstance } from 'vue'
import useViewer from './useViewer'
import defaultProps from './defaultProps'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { vcKey } from '@vue-cesium/utils/config'
import { viewerEvents, emits } from './events'
import { VcSkeleton } from '@vue-cesium/ui'

export default defineComponent({
  name: 'VcViewer',
  components: {
    VcSkeleton
  },
  props: defaultProps,
  emits: emits,
  setup(props, ctx) {
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumEvents = ['selectedEntityChanged', 'trackedEntityChanged']
    instance.cesiumMembersEvents = viewerEvents
    const viewerStates = useViewer(props, ctx, instance)

    // provide
    provide(vcKey, viewerStates.getServices())
    return {
      isReady: viewerStates.isReady,
      viewerRef: viewerStates.viewerRef,
      createPromise: viewerStates.createPromise,
      load: viewerStates.load,
      unload: viewerStates.unload,
      reload: viewerStates.reload,
      getCesiumObject: () => instance.cesiumObject
    }
  }
})
</script>
