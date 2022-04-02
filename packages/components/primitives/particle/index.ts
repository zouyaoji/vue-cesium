/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-02-22 00:17:33
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\particle\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import {
  show,
  modelMatrix,
  image,
  color,
  startColor,
  endColor,
  imageSize,
  minimumImageSize,
  maximumImageSize,
  sizeInMeters,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveEmits } from '@vue-cesium/utils/emits'

const emits = {
  ...primitiveEmits,
  complete: (evt: Cesium.ParticleSystem) => true
}
export const particlePrimitiveProps = {
  ...show,
  updateCallback: Function,
  emitter: Object as PropType<Cesium.ParticleEmitter>,
  ...modelMatrix,
  emitterModelMatrix: Object as PropType<Cesium.Matrix4>,
  emissionRate: {
    type: Number,
    default: 5
  },
  bursts: Array as PropType<Array<Cesium.ParticleBurst>>,
  loop: {
    type: Boolean,
    default: true
  },
  scale: {
    type: Number,
    default: 1.0
  },
  startScale: Number,
  endScale: Number,
  ...color,
  ...startColor,
  ...endColor,
  ...image,
  ...imageSize,
  ...minimumImageSize,
  ...maximumImageSize,
  ...sizeInMeters,
  speed: {
    type: Number,
    default: 1.0
  },
  minimumSpeed: Number,
  maximumSpeed: Number,
  lifetime: {
    type: Number,
    default: Number.MAX_VALUE
  },
  particleLife: {
    type: Number,
    default: 5.0
  },
  minimumParticleLife: Number,
  maximumParticleLife: Number,
  mass: {
    type: Number,
    default: 1.0
  },
  minimumMass: Number,
  maximumMass: Number,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveParticle',
  props: particlePrimitiveProps,
  emits: emits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ParticleSystem'
    instance.cesiumEvents = ['complete']
    usePrimitives(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveParticleProps = ExtractPropTypes<typeof particlePrimitiveProps>
export type VcPrimitiveParticleEmits = typeof emits
