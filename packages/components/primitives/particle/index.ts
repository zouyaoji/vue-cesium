import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
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

export default defineComponent({
  name: 'VcPrimitiveParticle',
  props: {
    ...show,
    updateCallback: Function,
    emitter: Object,
    ...modelMatrix,
    emitterModelMatrix: Object,
    emissionRate: Number,
    bursts: Array,
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
    speed: Number,
    minimumSpeed: Number,
    maximumSpeed: Number,
    lifetime: Number,
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
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ParticleSystem'
    instance.cesiumEvents = ['complete']
    usePrimitives(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
