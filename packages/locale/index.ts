/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-02-10 10:52:35
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\locale\index.ts
 */
import defaultLang from './lang/zh-cn'

export interface TranslatePair {
  [key: string]: string | string[] | TranslatePair
}

export interface Language {
  name: string
  nativeName: string
  vc: TranslatePair
}

let lang: Language = defaultLang as Language

function template(str: string, option) {
  if (!str || !option)
    return str

  return str.replace(/\{(\w+)\}/g, (match, key) => {
    return option[key]
  })
}

function defaultTranslator(...args: any[]) {
  const [path, option] = args
  let value
  const array = path.split('.')
  let current = lang
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property]
    if (i === j - 1)
      return template(value, option)
    if (!value)
      return ''
    current = value
  }
  return template(value, option)
}

export function t(...args: any[]): string {
  return defaultTranslator(...args)
}

export function use(l: Language): void {
  lang = l || lang
  if (lang.name) {
    // dayjs.locale(lang.name)
  }
}

export const setLocale = use
