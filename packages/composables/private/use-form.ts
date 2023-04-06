/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-03-28 10:20:47
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-03-29 16:01:06
 * @FilePath: \vue-cesium@next\packages\composables\private\use-form.ts
 */
import { h, computed } from 'vue'

export const useFormProps = {
  name: String
}

export function useFormAttrs(props) {
  return computed(() => ({
    type: 'hidden',
    name: props.name,
    value: props.modelValue
  }))
}

export function useFormInject(formAttrs: any = {}) {
  return (child, action, className?: string) => {
    child[action](
      h('input', {
        class: 'hidden' + (className || ''),
        ...formAttrs.value
      })
    )
  }
}

export function useFormInputNameAttr(props) {
  return computed(() => props.name || props.for)
}
