import { h, defineComponent, computed, getCurrentInstance, PropType } from 'vue'

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

export default defineComponent({
  name: 'VcSkeleton',

  props: {
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
      type: String,
      validator: (v: string) => skeletonAnimations.includes(v),
      default: 'wave'
    },

    square: Boolean,
    bordered: Boolean,

    size: String as PropType<string>,
    width: String,
    height: String
  },

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
