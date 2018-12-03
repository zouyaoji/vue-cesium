import { extractChildren } from '../util/vueHelpers'

/**
 * Renders stub VNode for component.
 */
export default {
  /**
   * @param {function} h
   * @returns {VNode}
   */
  render (h) {
    const options = this.$options.stubVNode || {}
    // render as HTML comment
    if (options.empty) {
      let vnode = h()
      if (typeof options.empty === 'string') {
        vnode.text = options.empty
      } else if (typeof options.empty === 'function') {
        vnode.text = options.empty.call(this)
      }

      return vnode
    }

    let children
    if (options.slots === false) {
      children = undefined
    } else {
      children = extractChildren(this.$slots, options.slots)
    }

    let attrs = typeof options.attrs === 'function'
      ? options.attrs.call(this)
      : options.attrs

    let data = {
      attrs,
      style: {
        display: 'none !important'
      }
    }

    return h(options.tag || 'i', data, children)
  }
}
