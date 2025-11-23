import type { Ref } from 'vue'
import { isClient } from '@vueuse/core'

import { watch } from 'vue'

export function useToggleWidgets(watchSource: Ref<boolean>, handler: (e: Event) => void) {
  if (!isClient)
    return

  watch(
    () => watchSource.value,
    (val) => {
      if (val) {
        window.addEventListener('resize', handler)
      }
      else {
        window.removeEventListener('resize', handler)
      }
    }
  )
}
