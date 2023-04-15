import { createCommentVNode, defineComponent, getCurrentInstance, PropType, VNode } from 'vue'
import type {
  VcCartesian2,
  VcCartesian3Array,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcPickEvent,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import { defaultColor, tileStyle, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveEmits } from '@vue-cesium/utils/emits'
import { compareCesiumVersion } from '@vue-cesium/utils/cesium-helpers'

export const osmBuildingsProps = {
  ...defaultColor,
  ...tileStyle,
  enableShowOutline: {
    type: Boolean,
    default: true
  },
  showOutline: {
    type: Boolean,
    default: true
  },
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveOsmBuildings',
  props: osmBuildingsProps,
  emits: {
    ...primitiveEmits
  },
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcPrimitiveOsmBuildings'
    const primitivesState = usePrimitives(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      const options: any = primitivesState?.transformProps(props)
      options.style = options.tileStyle
      delete options.tileStyle
      return compareCesiumVersion(Cesium.VERSION, '1.104') ? await Cesium.createOsmBuildingsAsync(options) : Cesium.createOsmBuildings(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveOsmBuildingsProps = {
  /**
   * The default color to use for buildings that do not have a color. This parameter is ignored if options.style is specified.
   * Default value: white
   */
  defaultColor?: VcColor
  /**
   * The style to use with the tileset. If not specified, a default style is used which gives each building or building part a color inferred from its OpenStreetMap tags. If no color can be inferred, options.defaultColor is used.
   */
  tileStyle?: Cesium.Cesium3DTileStyle
  /**
   * If true, enable rendering outlines. This can be set to false to avoid the additional processing of geometry at load time.
   * Default value: true
   */
  enableShowOutline?: boolean
  /**
   * Whether to show outlines around buildings. When true, outlines are displayed. When false, outlines are not displayed.
   * Default value: true
   */
  showOutline?: boolean
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

export type VcPrimitiveOsmBuildingsRef = VcComponentPublicInstance<VcPrimitiveOsmBuildingsProps>
