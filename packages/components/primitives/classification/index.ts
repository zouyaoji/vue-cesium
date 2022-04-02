/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-28 09:13:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\classification\index.ts
 */
import type { ExtractPropTypes, Ref, VNode } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type {
  VcAppearance,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcPickEvent,
  VcPrimitive,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import {
  geometryInstances,
  appearance,
  show,
  vertexCacheOptimize,
  interleave,
  compressVertices,
  releaseGeometryInstances,
  allowPicking,
  asynchronous,
  classificationType,
  debugShowBoundingVolume,
  debugShowShadowVolume,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { primitiveEmits } from '@vue-cesium/utils/emits'

export const classificationPrimitiveProps = {
  ...geometryInstances,
  ...appearance,
  ...show,
  ...vertexCacheOptimize,
  ...interleave,
  ...compressVertices,
  ...releaseGeometryInstances,
  ...allowPicking,
  ...asynchronous,
  ...classificationType,
  ...debugShowBoundingVolume,
  ...debugShowShadowVolume,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveClassification',
  props: classificationPrimitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ClassificationPrimitive'
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
        : createCommentVNode(kebabCase(name))
  }
})

export type VcPrimitiveClassificationProps = {
  /**
   * The geometry instances - or a single geometry instance - to render.
   */
  geometryInstances?: Cesium.GeometryInstance | Array<Cesium.GeometryInstance>
  /**
   * The appearance used to render the primitive.
   */
  appearance?: VcAppearance
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
   * Determines if the primitive will be created asynchronously or block until ready.
   * Default value: true
   */
  asynchronous?: boolean
  /**
   * Determines whether terrain, 3D Tiles or both will be classified.
   */
  classificationType?: Cesium.ClassificationType | number
  /**
   * For debugging only. Determines if this primitive's commands' bounding spheres are shown.
   * Default value: false
   */
  debugShowBoundingVolume?: boolean
  /**
   * For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false.
   * Default value: false
   */
  debugShowShadowVolume?: boolean
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
   * 	Triggers when the mouse moves out of this primitive.
   */
  onMouseout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the primitive is ready to render.
   */
  onReadyPromise?: (primitive: Cesium.ClassificationPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
  'onUpdate:geometryInstances'?: (instances: Array<Cesium.GeometryInstance>) => void
}

export interface VcPrimitiveClassificationRef extends VcComponentPublicInstance<VcPrimitiveClassificationProps> {
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

export interface VcPrimitiveClassificationSlots {
  /**
   * Slot for vc-geometry-instance.
   */
  default: () => VNode[]
}
