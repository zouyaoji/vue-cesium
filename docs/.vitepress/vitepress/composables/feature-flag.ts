import type { MaybeRef } from '@vueuse/core'
import { isClient, useBrowserLocation } from '@vueuse/core'
import { useData } from 'vitepress'

import { computed, unref } from 'vue'

const location = useBrowserLocation()

export function useFeatureFlag(flag: MaybeRef<string>) {
  const { theme } = useData()
  return computed(() => {
    const _flag = unref(flag)

    if (isClient) {
      const params = new URLSearchParams(location.value.search)
      if (params.get(`feature:${_flag}`)) {
        return true
      }
    }

    return theme.value.features[_flag]
  })
}
