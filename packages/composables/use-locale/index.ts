/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-07 15:49:08
 * @LastEditTime: 2022-02-09 17:46:25
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-locale\index.ts
 */
import { computed, getCurrentInstance, inject, isRef, provide, ref, unref } from 'vue'
import Chinese from '@vue-cesium/locale/lang/zh-hans'
import { get } from 'lodash-unified'
import type { InjectionKey, PropType, Ref } from 'vue'
import type { Language } from '@vue-cesium/locale'
import { useGlobalConfig } from '../use-global-config'
import { MaybeRef } from '@vue-cesium/utils/types'

export type TranslatorOption = Record<string, string | number>
export type Translator = (path: string, option?: TranslatorOption) => string
export type LocaleContext = {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
  (path, option) =>
    translate(path, option, unref(locale))

export const translate = (path: string, option: undefined | TranslatorOption, locale: Language): string =>
  (get(locale, path, path) as string).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`)

export const buildLocaleContext = (locale: MaybeRef<Language>): LocaleContext => {
  const lang = computed(() => unref(locale).name)
  const localeRef = isRef(locale) ? locale : ref(locale)
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  }
}

export const useLocale = () => {
  const locale = useGlobalConfig('locale')
  return buildLocaleContext(computed(() => locale.value || Chinese))
}
