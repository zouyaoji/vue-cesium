import { computed } from 'vue'

export const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
}

export default function (props) {
  // return isDark
  return computed(() => props.dark)
}
