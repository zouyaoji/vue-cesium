/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-28 11:13:56
 * @LastEditTime: 2022-03-11 10:46:42
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\cloud\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCartesian2,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcPosition,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import { color, position, show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'
import { makeCartesian2, makeCartesian3 } from '@vue-cesium/utils/cesium-helpers'

export const cumulusCloudProps = {
  brightness: {
    type: Number,
    default: 1.0
  },
  ...color,
  maximumSize: {
    type: Object as PropType<VcPosition>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  },
  ...position,
  scale: {
    type: Object as PropType<VcCartesian2>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  },
  ...show,
  slice: {
    type: Number,
    default: -1.0
  }
}
export default defineComponent({
  name: 'VcCumulusCloud',
  props: cumulusCloudProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CumulusCloud'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

// export type VcCumulusCloudProps = ExtractPropTypes<typeof cumulusCloudProps>
export type VcCumulusCloudProps = {
  /**
   * Specify the brightness of the cloud. This can be used to give clouds a darker, grayer appearance.
   */
  brightness?: number
  /**
   * Specify the color of the cloud.
   * Default Value: white
   */
  color?: VcColor
  /**
   * Specify the maximum size of the cumulus cloud rendered on the billboard. This defines a maximum ellipsoid volume that the cloud can appear in. Rather than guaranteeing a specific size, this specifies a boundary for the cloud to appear in, and changing it can affect the shape of the cloud.
   */
  maximumSize?: VcPosition
  /**
   * Specify the Cartesian position of this cumulus cloud.
   */
  position?: VcPosition
  /**
   * Specify the scale of the cumulus cloud billboard in meters. The scale property will affect the size of the billboard, but not the cloud's actual appearance.
   */
  scale?: VcCartesian2
  /**
   * Determines if this cumulus cloud will be shown. Use this to hide or show a cloud, instead of removing it and re-adding it to the collection.
   * Default Value: true
   */
  show?: boolean
  /**
   * If slice is set to a negative number, the cloud will not render a cross-section. Instead, it will render the outside of the ellipsoid that is visible. For clouds with small values of `maximumSize.z`, this can produce good-looking results, but for larger clouds, this can result in a cloud that is undesirably warped to the ellipsoid volume.
   * Default Value: -1.0
   */
  slice?: number
  /**
   * Triggers before the VcCumulusCloud is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcCumulusCloud is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcCumulusCloud is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcCumulusCloudRef = VcComponentPublicInstance<VcCumulusCloudProps>
