import { useSizeDefaults } from '@vue-cesium/composables/private/use-size'
import { computed } from 'vue'

export const useSpinnerProps = {
  size: {
    type: [Number, String],
    default: '1em'
  },
  color: String
}

export default function useSpinner(props) {
  return {
    cSize: computed(() => (props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size)),

    classes: computed(() => `vc-spinner${props.color ? ` text-${props.color}` : ''}`)
  }
}
