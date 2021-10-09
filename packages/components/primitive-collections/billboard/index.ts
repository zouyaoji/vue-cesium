/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-30 22:42:53
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\billboard\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import {
  alignedAxis,
  color,
  disableDepthTestDistance,
  distanceDisplayCondition,
  eyeOffset,
  height,
  heightReference,
  horizontalOrigin,
  id,
  image,
  pixelOffset,
  pixelOffsetScaleByDistance,
  position,
  rotation,
  scale,
  scaleByDistance,
  show,
  sizeInMeters,
  translucencyByDistance,
  verticalOrigin,
  width,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcBillboard',
  props: {
    ...alignedAxis,
    ...color,
    ...disableDepthTestDistance,
    ...distanceDisplayCondition,
    ...eyeOffset,
    ...height,
    ...heightReference,
    ...horizontalOrigin,
    ...id,
    ...image,
    ...pixelOffset,
    ...pixelOffsetScaleByDistance,
    ...position,
    ...rotation,
    ...scale,
    ...scaleByDistance,
    ...show,
    ...sizeInMeters,
    ...translucencyByDistance,
    ...verticalOrigin,
    ...width,
    ...enableMouseEvent
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Billboard'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})
