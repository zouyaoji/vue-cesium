/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-03-05 11:05:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\ui\skeleton\index.ts
 */
import { h, defineComponent, computed, VNode, ComponentPublicInstance } from 'vue'

import type { PropType } from 'vue'

import useDark, { useDarkProps } from '@vue-cesium/composables/private/use-dark'

import { hSlot } from '@vue-cesium/utils/private/render'

export const skeletonTypes = [
  'text',
  'rect',
  'circle',
  'VcBtn',
  'VcBadge',
  'VcChip',
  'VcToolbar',
  'VcCheckbox',
  'VcRadio',
  'VcToggle',
  'VcSlider',
  'VcRange',
  'VcInput',
  'VcAvatar'
]

export const skeletonAnimations = ['wave', 'pulse', 'pulse-x', 'pulse-y', 'fade', 'blink', 'none']
export const skeletonProps = {
  ...useDarkProps,

  tag: {
    type: String,
    default: 'div'
  },

  type: {
    type: String,
    validator: (v: string) => skeletonTypes.includes(v),
    default: 'rect'
  },

  animation: {
    type: String as PropType<'wave' | 'pulse' | 'pulse-x' | 'pulse-y' | 'fade' | 'blink' | 'none'>,
    validator: (v: string) => skeletonAnimations.includes(v),
    default: 'wave'
  },

  square: Boolean,
  bordered: Boolean,

  size: String as PropType<string>,
  width: String,
  height: String
}
export default defineComponent({
  name: 'VcSkeleton',

  props: skeletonProps,

  setup(props, { slots }) {
    const isDark = useDark(props)

    const style = computed(() => (props.size !== void 0 ? { width: props.size, height: props.size } : { width: props.width, height: props.height }))

    const classes = computed(
      () =>
        `vc-skeleton vc-skeleton--${isDark.value === true ? 'dark' : 'light'} vc-skeleton--type-${props.type}` +
        (props.animation !== 'none' ? ` vc-skeleton--anim vc-skeleton--anim-${props.animation}` : '') +
        (props.square === true ? ' vc-skeleton--square' : '') +
        (props.bordered === true ? ' vc-skeleton--bordered' : '')
    )

    return () =>
      h(
        props.tag,
        {
          class: classes.value,
          style: style.value
        },
        hSlot(slots.default)
      )
  }
})

// export type VcSkeletonProps = ExtractPropTypes<typeof skeletonProps>
export interface VcSkeletonProps {
  /**
   * Notify the component that the background is a dark color.
   */
  dark?: boolean | undefined
  /**
   * Type of skeleton placeholder.
   * Default value: rect
   */
  type?:
    | 'text'
    | 'rect'
    | 'circle'
    | 'VcBtn'
    | 'VcBadge'
    | 'VcChip'
    | 'VcToolbar'
    | 'VcCheckbox'
    | 'VcRadio'
    | 'VcToggle'
    | 'VcSlider'
    | 'VcRange'
    | 'VcInput'
    | 'VcAvatar'
    | undefined
  /**
   * The animation effect of the skeleton placeholder.
   * Default value: wave
   */
  animation?: 'wave' | 'pulse' | 'pulse-x' | 'pulse-y' | 'fade' | 'blink' | 'none' | undefined
  /**
   * Animation speed (in milliseconds, without unit).
   * Default value: 300
   */
  animationSpeed?: string | number | undefined
  /**
   * Removes border-radius so borders are squared.
   */
  square?: boolean | undefined
  /**
   * Applies a default border to the component.
   */
  bordered?: boolean | undefined
  /**
   * Size in CSS units, including unit name; Overrides 'height' and 'width' props and applies the value to both height and width.
   */
  size?: string | undefined
  /**
   * Width in CSS units, including unit name; Apply custom width; Use this prop or through CSS; Overridden by 'size' prop if used.
   */
  width?: string | undefined
  /**
   * Height in CSS units, including unit name; Apply custom height; Use this prop or through CSS; Overridden by 'size' prop if used.
   */
  height?: string | undefined
  /**
   * HTML tag to use.
   * Default value: div
   */
  tag?: string | undefined
  color?: string
}

export interface VcSkeletonSlots {
  /**
   * Default slot in the devland unslotted content of the component
   */
  default: () => VNode[]
}

export type VcSkeletonRef = ComponentPublicInstance<VcSkeletonProps>
