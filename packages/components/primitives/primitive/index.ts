/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-28 09:46:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\primitive\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, h, Ref, VNode } from 'vue'
import type { VcAppearance, VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import {
  geometryInstances,
  appearance,
  depthFailAppearance,
  show,
  modelMatrix,
  vertexCacheOptimize,
  interleave,
  compressVertices,
  releaseGeometryInstances,
  allowPicking,
  asynchronous,
  debugShowBoundingVolume,
  shadows,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { primitiveEmits } from '@vue-cesium/utils/emits'

export const primitiveProps = {
  ...geometryInstances,
  ...appearance,
  ...depthFailAppearance,
  ...show,
  ...modelMatrix,
  ...vertexCacheOptimize,
  ...interleave,
  ...compressVertices,
  ...releaseGeometryInstances,
  ...allowPicking,
  cull: {
    type: Boolean,
    default: true
  },
  ...asynchronous,
  ...debugShowBoundingVolume,
  ...shadows,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitive',
  props: primitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Primitive'
    usePrimitives(props, ctx, instance)

    const name = instance.proxy?.$options.name || ''
    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(name),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveProps = {
  /**
   * The geometry instances - or a single geometry instance - to render.
   */
  geometryInstances?: Cesium.GeometryInstance | Array<Cesium.GeometryInstance>
  /**
   * The appearance used to render the primitive.
   */
  appearance?: VcAppearance
  /**
   * The appearance used to shade this primitive when it fails the depth test.
   */
  depthFailAppearance?: VcAppearance
  /**
   * Determines if this primitive will be shown.
   * Default value: true
   */
  show?: boolean
  /**
   * The 4x4 transformation matrix that transforms the primitive (all geometry instances) from model to world coordinates.
   */
  modelMatrix?: Cesium.Matrix4
  /**
   * When true, geometry vertices are optimized for the pre and post-vertex-shader caches.
   * Default value: false
   */
  vertexCacheOptimize?: boolean
  /**
   * When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.
   * Default value: false
   */
  interleave?: boolean
  /**
   * When true, the geometry vertices are compressed, which will save memory.
   * Default value: true
   */
  compressVertices?: boolean
  /**
   * When true, the primitive does not keep a reference to the input geometryInstances to save memory.
   * Default value: true
   */
  releaseGeometryInstances?: boolean
  /**
   * When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.
   * Default value: true
   */
  allowPicking?: boolean
  /**
   * When true, the renderer frustum culls and horizon culls the primitive's commands based on their bounding volume. Set this to false for a small performance gain if you are manually culling the primitive.
   * Default value: true
   */
  cull?: boolean
  /**
   * Determines if the primitive will be created asynchronously or block until ready.
   * Default value: true
   */
  asynchronous?: boolean
  /**
   * For debugging only. Determines if this primitive's commands' bounding spheres are shown.
   */
  debugShowBoundingVolume?: boolean
  /**
   * Determines whether this primitive casts or receives shadows from light sources.
   */
  shadows?: number
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
  'onUpdate:geometryInstances'?: (instances: Array<Cesium.GeometryInstance>) => void
}

export interface VcPrimitiveRef extends VcComponentPublicInstance<VcPrimitiveProps> {
  /**
   * private but needed by VcGeometryInstance
   * @param geometryInstance
   * @param index
   */
  __updateGeometryInstances?(geometryInstance: Cesium.GeometryInstance, index: number): boolean
  /**
   * private but needed by VcGeometryInstance
   * @param geometryInstance
   */
  __removeGeometryInstances?(geometryInstance: Cesium.GeometryInstance): boolean
  /**
   * private but needed by VcGeometryInstance
   */
  __childCount?: Ref<number>
}

export interface VcPrimitiveSlots {
  /**
   * Slot for vc-geometry-instance.
   */
  default: () => VNode[]
}
