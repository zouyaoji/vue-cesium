import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import { modelMatrix, customShader, clock, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveEmits } from '@vue-cesium/utils/emits'

export const voxelPromitiveProps = {
  provider: {
    type: Object as PropType<Cesium.VoxelProvider>
  },
  ...modelMatrix,
  ...customShader,
  ...clock,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveVoxel',
  props: voxelPromitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VoxelPrimitive'
    instance.cesiumEvents = ['allTilesLoaded', 'initialTilesLoaded', 'loadProgress', 'tileFailed', 'tileLoad', 'tileUnload', 'tileVisible']
    usePrimitives(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveVoxelProps = {
  /**
   * The voxel provider that supplies the primitive with tile data.
   */
  provider?: Cesium.VoxelProvider
  /**
   * The model matrix used to transform the primitive.
   */
  modelMatrix?: Cesium.Matrix4
  /**
   * The custom shader used to style the primitive.
   */
  customShader?: Cesium.CustomShader
  /**
   * The clock used to control time dynamic behavior.
   */
  clock?: Cesium.Clock
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
  onReadyPromise?: (primitive: Cesium.Primitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
}

export type VcPrimitiveVoxelPropsRef = VcComponentPublicInstance<VcPrimitiveVoxelProps>
