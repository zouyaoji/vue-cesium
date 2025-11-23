import type { Language } from '@vue-cesium/locale'
import type { MaybeRef } from '@vue-cesium/utils/types'
import type { Ref } from 'vue'
import Chinese from '@vue-cesium/locale/lang/zh-hans'
import { get } from 'lodash-unified'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-07 15:49:08
 * @LastEditTime: 2022-08-03 14:02:17
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-locale\index.ts
 */
import { computed, isRef, ref, unref } from 'vue'
import { useGlobalConfig } from '../use-global-config'

export type TranslatorOption = Record<string, string | number>
export type Translator = (path: string, option?: TranslatorOption) => string
export interface LocaleContext {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export function buildTranslator(locale: MaybeRef<Language>): Translator {
  return (path, option) =>
    translate(path, option, unref(locale))
}

export function translate(path: string, option: undefined | TranslatorOption, locale: Language): string {
  return (get(locale, path, path) as string).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`)
}

export function buildLocaleContext(locale: MaybeRef<Language>): LocaleContext {
  const lang = computed(() => unref(locale).name)
  const localeRef = isRef(locale) ? locale : ref(locale)
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  }
}

export function useLocale() {
  const locale = useGlobalConfig('locale')
  return buildLocaleContext(computed(() => locale.value || Chinese))
}
