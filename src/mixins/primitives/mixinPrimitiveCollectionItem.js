/**
 * Label
 * PointPrimitive
 * Polyline
 * Billboard
 */
import cmp from '../virtualCmp'
import mixinPickEvent from '../event/mixinPickEvent'
const methods = {
  /**
   * 重写 createCesiumObject 方法。
   */
  async createCesiumObject () {
    const { $props, transformProps, primitives } = this
    const options = transformProps($props)
    console.log(options)
    return primitives && primitives.add(options)
  },
  async mount () {
    const { primitives, primitive, registerEvents } = this
    registerEvents(true)
    return primitives && primitives.contains(primitive)
  },
  async unmount () {
    const { primitives, primitive, registerEvents } = this
    registerEvents(false)
    return primitives && !primitives.isDestroyed() && primitives.remove(primitive)
  }
}
export default {
  props: {
    enbaleEvent: {
      type: Boolean,
      default: true
    }
  },
  mixins: [cmp, mixinPickEvent],
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
