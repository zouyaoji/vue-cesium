import { computed } from 'vue'
import { useLang } from './lang'

export function useLocale(localeJson: Record<string, Record<string, string>>) {
  const lang = useLang()
  return computed(() => localeJson[lang.value])
}
