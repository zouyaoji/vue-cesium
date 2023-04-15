import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import { clock, show, modelMatrix, shadows, maximumMemoryUsage, tileStyle, clippingPlanes, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveEmits } from '@vue-cesium/utils/emits'

export const timeDynamicPointCloudProps = {
  ...clock,
  intervals: Object as PropType<Cesium.TimeIntervalCollection>,
  ...show,
  ...modelMatrix,
  ...shadows,
  ...maximumMemoryUsage,
  shading: Object,
  ...tileStyle,
  ...clippingPlanes,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveTimeDynamicPointCloud',
  props: timeDynamicPointCloudProps,
  emits: {
    ...primitiveEmits,
    frameChanged: (evt: Cesium.TimeDynamicPointCloud) => true,
    frameFailed: (evt: Error) => true
  },
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcPrimitiveTimeDynamicPointCloud'
    instance.cesiumEvents = ['frameChanged', 'frameFailed']
    const primitivesState = usePrimitives(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      const options: any = primitivesState?.transformProps(props)
      options.style = options.tileStyle
      delete options.tileStyle
      return new Cesium.TimeDynamicPointCloud(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveTimeDynamicPointCloudProps = {
  /**
   * A Clock instance that is used when determining the value for the time dimension.
   */
  clock: Cesium.Clock
  /**
   * A TimeIntervalCollection with its data property being an object containing a uri to a 3D Tiles Point Cloud tile and an optional transform.
   */
  intervals: Cesium.TimeIntervalCollection
  /**
   * Determines if the point cloud will be shown.
   * Default value: true
   */
  show?: boolean
  /**
   * A 4x4 transformation matrix that transforms the point cloud.
   */
  modelMatrix?: Cesium.Matrix4
  /**
   * Determines whether the point cloud casts or receives shadows from light sources.
   * Default value: Cesium.ShadowMode.ENABLED
   */
  shadows?: number | Cesium.ShadowMode
  /**
   * The maximum amount of memory in MB that can be used by the point cloud.
   * Default value: 256
   */
  maximumMemoryUsage?: number
  /**
   * Options for constructing a PointCloudShading object to control point attenuation and eye dome lighting.
   */
  shading?: any
  /**
   * The style, defined using the 3D Tiles Styling language, applied to each point in the point cloud.
   */
  tileStyle?: Cesium.Cesium3DTileStyle
  /**
   * The ClippingPlaneCollection used to selectively disable rendering the point cloud.
   */
  clippingPlanes?: Cesium.ClippingPlaneCollection
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
  /**
   * Triggers when a new frame was rendered.
   */
  frameChanged?: (evt: Cesium.TimeDynamicPointCloud) => void
  /**
   * Triggers when a frame failed to load.
   */
  frameFailed?: (evt: Error) => void
}

export type VcPrimitiveTimeDynamicPointCloudRef = VcComponentPublicInstance<VcPrimitiveTimeDynamicPointCloudProps>
