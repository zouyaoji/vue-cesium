import { defineComponent } from 'vue'

import { useLocaleProps, useLocale } from '@vue-cesium/composables/use-locale'

export default defineComponent({
  name: 'VcConfigProvider',
  props: {
    ...useLocaleProps
    // Add more configs
  },

  setup(_, { slots }) {
    useLocale()

    return () => slots.default?.()
  }
})
