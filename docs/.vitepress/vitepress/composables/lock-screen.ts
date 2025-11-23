import type { CSSProperties } from 'vue'
import { isClient } from '@vueuse/core'
import { defaultNamespace } from 'element-plus'
import { camelize, onUnmounted } from 'vue'

export function useLockScreen() {
  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyPaddingRight = '0'
  let computedBodyPaddingRight = 0

  const cleanup = () => {
    if (!isClient)
      return
    removeClass(document.body, 'el-popup-parent--hidden')
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight
    }
  }

  const lock = () => {
    if (!isClient)
      return
    withoutHiddenClass = !hasClass(document.body, 'el-popup-parent--hidden')
    if (withoutHiddenClass) {
      bodyPaddingRight = document.body.style.paddingRight
      computedBodyPaddingRight = Number.parseInt(
        getStyle(document.body, 'paddingRight'),
        10
      )
    }
    scrollBarWidth = getScrollBarWidth(defaultNamespace)
    const bodyHasOverflow
      = document.documentElement.clientHeight < document.body.scrollHeight
    const bodyOverflowY = getStyle(document.body, 'overflowY')
    if (
      scrollBarWidth > 0
      && (bodyHasOverflow || bodyOverflowY === 'scroll')
      && withoutHiddenClass
    ) {
      document.body.style.paddingRight = `${
        computedBodyPaddingRight + scrollBarWidth
      }px`
    }
    addClass(document.body, 'el-popup-parent--hidden')
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    lock,
    cleanup
  }
}

export const classNameToArray = (cls = '') => cls.split(' ').filter(item => !!item.trim())

export function addClass(el: Element, cls: string) {
  if (!el || !cls.trim())
    return
  el.classList.add(...classNameToArray(cls))
}

export function getStyle(element: HTMLElement, styleName: keyof CSSProperties): string {
  if (!isClient || !element || !styleName)
    return ''

  let key = camelize(styleName)
  if (key === 'float')
    key = 'cssFloat'
  try {
    const style = (element.style as any)[key]
    if (style)
      return style
    const computed: any = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[key] : ''
  }
  catch {
    return (element.style as any)[key]
  }
}

export function hasClass(el: Element, cls: string): boolean {
  if (!el || !cls)
    return false
  if (cls.includes(' '))
    throw new Error('className should not contain space.')
  return el.classList.contains(cls)
}

export function removeClass(el: Element, cls: string) {
  if (!el || !cls.trim())
    return
  el.classList.remove(...classNameToArray(cls))
}

let scrollBarWidth: number
export function getScrollBarWidth(namespace: string): number {
  if (!isClient)
    return 0
  if (scrollBarWidth !== undefined)
    return scrollBarWidth

  const outer = document.createElement('div')
  outer.className = `${namespace}-scrollbar__wrap`
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode?.removeChild(outer)
  scrollBarWidth = widthNoScroll - widthWithScroll

  return scrollBarWidth
}
