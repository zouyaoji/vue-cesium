import { useRoute } from 'vitepress'
import { computed } from 'vue'
import { defaultLang } from '../constant'

export function useLang() {
  const route = useRoute()
  return computed(() => {
    // the first part of the first slash
    const path = route.data?.relativePath
    let lang: string

    if (path?.includes('/')) {
      lang = path.split('/').shift()! || defaultLang
    }
    else {
      lang = defaultLang
    }
    return lang
  })
}
