import cmp from '../virtualCmp'

const computed = {
  changeProps () {
    return this.makeOptions()
  }
}
const methods = {
  async mount () {
    const { geometry, geometryContainer } = this
    geometryContainer && geometryContainer.setGeometry(geometry)
  },
  async unload () {
    const { geometryContainer } = this
    geometryContainer && geometryContainer.unload()
  }
}
const watch = {
  changeProps: {
    handler () {
      this.geometryContainer.primitiveContainer.reload()
    },
    deep: true
  }
}
export default {
  mixins: [cmp],
  computed,
  watch,
  methods,
  stubVNode: {
    empty () {
      return this.$options.name
    }
  },
  created () {
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
