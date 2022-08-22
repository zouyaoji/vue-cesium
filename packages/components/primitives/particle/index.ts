/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-23 10:29:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\particle\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCartesian2,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcPickEvent,
  VcReadyObject
} from '@vue-cesium/utils/types'
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

export type VcPrimitiveParticleEmits = typeof emits
export type VcPrimitiveParticleProps = {
  /**
   * Whether to display the particle system.
   * Default value: true
   */
  show?: boolean
  /**
   * The callback function to be called each frame to update a particle.
   */
  updateCallback?: (particle: Cesium.Particle, dt: number) => void
  /**
   * The particle emitter for this system.
   */
  emitter?: Cesium.ParticleEmitter
  /**
   * The 4x4 transformation matrix that transforms the particle system from model to world coordinates.
   */
  modelMatrix?: Cesium.Matrix4
  /**
   * The 4x4 transformation matrix that transforms the particle system emitter within the particle systems local coordinate system.
   */
  emitterModelMatrix?: Cesium.Matrix4
  /**
   * The number of particles to emit per second.
   * Default value: 5.0
   */
  emissionRate?: number
  /**
   * An array of ParticleBurst, emitting bursts of particles at periodic times.
   */
  bursts?: Array<Cesium.ParticleBurst>
  /**
   * Whether the particle system should loop its bursts when it is complete.
   * Default: true
   */
  loop?: boolean
  /**
   * Sets the scale to apply to the image of the particle for the duration of its particleLife.
   * Default value: 1.0
   */
  scale?: number
  /**
   * The initial scale to apply to the image of the particle at the beginning of its life.
   */
  startScale?: number
  /**
   * The final scale to apply to the image of the particle at the end of its life.
   */
  endScale?: number
  /**
   * Sets the color of a particle for the duration of its particleLife.
   * Default value: white
   */
  color?: VcColor
  /**
   * The color of the particle at the beginning of its life.
   */
  startColor?: VcColor
  /**
   * The color of the particle at the end of its life.
   */
  endColor?: VcColor
  /**
   * The URI, HTMLImageElement, or HTMLCanvasElement to use for the billboard.
   */
  image?: string | HTMLImageElement | HTMLCanvasElement
  /**
   * If set, overrides the minimumImageSize and maximumImageSize inputs that scale the particle image's dimensions in pixels.
   */
  imageSize?: VcCartesian2
  /**
   * Sets the minimum bound, width by height, above which to randomly scale the particle image's dimensions in pixels.
   */
  minimumImageSize?: VcCartesian2
  /**
   * Sets the maximum bound, width by height, below which to randomly scale the particle image's dimensions in pixels.
   */
  maximumImageSize?: VcCartesian2
  /**
   * Sets if the size of particles is in meters or pixels. true to size the particles in meters; otherwise, the size is in pixels.
   */
  sizeInMeters?: boolean
  /**
   * If set, overrides the minimumSpeed and maximumSpeed inputs with this value.
   * Default value: 1.0
   */
  speed?: number
  /**
   * Sets the minimum bound in meters per second above which a particle's actual speed will be randomly chosen.
   */
  minimumSpeed?: number
  /**
   * Sets the maximum bound in meters per second below which a particle's actual speed will be randomly chosen.
   */
  maximumSpeed?: number
  /**
   * How long the particle system will emit particles, in seconds.
   * Default value: Number.MAX_VALUE
   */
  lifetime?: number
  /**
   * If set, overrides the minimumParticleLife and maximumParticleLife inputs with this value.
   * Default value: 5.0
   */
  particleLife?: number
  /**
   * Sets the minimum bound in seconds for the possible duration of a particle's life above which a particle's actual life will be randomly chosen.
   */
  minimumParticleLife?: number
  /**
   * Sets the maximum bound in seconds for the possible duration of a particle's life below which a particle's actual life will be randomly chosen.
   */
  maximumParticleLife?: number
  /**
   * Sets the minimum and maximum mass of particles in kilograms.
   * Default value: 1.0
   */
  mass?: number
  /**
   * Sets the minimum bound for the mass of a particle in kilograms. A particle's actual mass will be chosen as a random amount above this value.
   */
  minimumMass?: number
  /**
   * Sets the maximum mass of particles in kilograms. A particle's actual mass will be chosen as a random amount below this value.
   */
  maximumMass?: number
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
}

export type VcPrimitiveParticleRef = VcComponentPublicInstance<VcPrimitiveParticleProps>
