/**
 * Label
 * PointPrimitive
 * Polyline
 * Billboard
 */
import cmp from '../virtualCmp'

const methods = {
  /**
   * 重写 createCesiumObject 方法。
   */
  async createCesiumObject () {
    const { $props, transformProps, primitives } = this
    const options = transformProps($props)
    return primitives && primitives.add(options)
  },
  async mount () {
    const { primitives, primitive } = this
    return primitives && primitives.contains(primitive)
  },
  async unmount () {
    const { primitives, primitive } = this
    return primitives && primitives.remove(primitive)
  }
}
export default {
  mixins: [cmp],
  methods,
  stubVNode: {
    empty () {
      return this.$options.name
    }
  },
  created () {
    this.index = 0
    Object.defineProperties(this, {
      primitive: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      primitives: {
        enumerable: true,
        get: () => this.$services && this.$services.primitives
      }
    })
  }
}
