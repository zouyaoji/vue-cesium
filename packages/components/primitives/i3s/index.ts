import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import { url, show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveEmits } from '@vue-cesium/utils/emits'
import { VcPrimitiveTilesetProps } from '../tileset'

export const i3sDataProviderProps = {
  ...url,
  name: String,
  ...show,
  geoidTiledTerrainProvider: {
    type: Object as PropType<Cesium.ArcGISTiledElevationTerrainProvider | Promise<Cesium.ArcGISTiledElevationTerrainProvider>>
  },
  traceFetches: {
    type: Boolean,
    default: false
  },
  cesium3dTilesetOptions: {
    type: Object as PropType<VcPrimitiveTilesetProps>
  },
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveI3sDataProvider',
  props: i3sDataProviderProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'I3SDataProvider'
    usePrimitives(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveI3sDataProviderProps = {
  /**
   * The url of the I3S dataset.
   */
  url?: string | Cesium.Resource
  /**
   * The name of the I3S dataset.
   */
  name?: string
  /**
   * Determines if the dataset will be shown.
   * Default value: true
   */
  show?: boolean
  /**
   * Tiled elevation provider describing an Earth Gravitational Model. If defined, geometry will be shifted based on the offsets given by this provider. Required to position I3S data sets with gravity-related height at the correct location.
   */
  geoidTiledTerrainProvider?: Cesium.ArcGISTiledElevationTerrainProvider | Promise<Cesium.ArcGISTiledElevationTerrainProvider>
  /**
   * Debug option. When true, log a message whenever an I3S tile is fetched.
   * Default value: false
   */
  traceFetches?: boolean
  /**
   * Object containing options to pass to an internally created Cesium3DTileset.
   * Default value: 256
   */
  cesium3dTilesetOptions?: VcPrimitiveTilesetProps
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

export type VcPrimitiveI3sDataProviderRef = VcComponentPublicInstance<VcPrimitiveI3sDataProviderProps>
