import cmp from '../virtualCmp'

const methods = {
  async mount () {
    const { geometry, geometryContainer } = this
    return geometryContainer.setGeometry(geometry)
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
    this.renderByParent = true
    Object.defineProperties(this, {
      geometry: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      geometryContainer: {
        enumerable: true,
        get: () => this.$services && this.$services.geometryContainer
      }
    })
  }
}
