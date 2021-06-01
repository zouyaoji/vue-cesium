import { computed } from 'vue'

const labelPositions = ['top', 'right', 'bottom', 'left']

export const useFabProps = {
  type: {
    type: String,
    default: 'a'
  },

  outline: Boolean,
  push: Boolean,
  flat: Boolean,
  unelevated: Boolean,

  color: String,
  textColor: String,
  glossy: Boolean,

  square: Boolean,
  padding: String,
  size: String,

  label: {
    type: [String, Number],
    default: ''
  },
  labelPosition: {
    type: String,
    default: 'right',
    validator: v => labelPositions.includes(v)
  },
  externalLabel: Boolean,
  hideLabel: {
    type: Boolean
  },
  labelClass: [Array, String, Object],
  labelStyle: [Array, String, Object],

  disable: Boolean,

  tabindex: [Number, String]
}

export default function (props, showing) {
  return {
    formClass: computed(() =>
      `vc-fab--form-${props.square === true ? 'square' : 'rounded'}`
    ),

    stacked: computed(() =>
      props.externalLabel === false
      && ['top', 'bottom'].includes(props.labelPosition)
    ),

    labelProps: computed(() => {
      if (props.externalLabel === true) {
        const hideLabel = props.hideLabel === null
          ? showing.value === false
          : props.hideLabel

        return {
          action: 'push',
          data: {
            class: [
              props.labelClass,
              'vc-fab__label vc-tooltip--style vc-fab__label--external'
              + ` vc-fab__label--external-${props.labelPosition}`
              + (hideLabel === true ? ' vc-fab__label--external-hidden' : '')
            ],
            style: props.labelStyle
          }
        }
      }

      return {
        action: ['left', 'top'].includes(props.labelPosition)
          ? 'unshift'
          : 'push',
        data: {
          class: [
            props.labelClass,
            `vc-fab__label vc-fab__label--internal vc-fab__label--internal-${props.labelPosition}`
            + (props.hideLabel === true ? ' vc-fab__label--internal-hidden' : '')
          ],
          style: props.labelStyle
        }
      }
    })
  }
}
