/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-08-03 13:30:02
 * @LastEditTime: 2023-04-15 16:27:26
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\utils\objects.ts
 */
import { get, set } from 'lodash-unified'
import type { Entries } from 'type-fest'
import { Arrayable } from './types'

export const keysOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>
export const entriesOf = <T>(arr: T) => Object.entries(arr) as Entries<T>
export { hasOwn } from './util'

export const getProp = <T = any>(obj: Record<string, any>, path: Arrayable<string>, defaultValue?: any): { value: T } => {
  return {
    get value() {
      return get(obj, path, defaultValue)
    },
    set value(val: any) {
      set(obj, path, val)
    }
  }
}
