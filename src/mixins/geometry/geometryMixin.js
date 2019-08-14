import cmp from '@/mixins/virtualCmp'
import mergeDescriptors from '@/util/mergeDescriptors'

const computed = {
  changeProps () {
    return this.makeOptions()
  }
}
const methods = {
  mount () {
    const { geometry, geometryContainer } = this
    geometryContainer && geometryContainer.setGeometry(geometry)
  },
  unload () {
    const { geometryContainer } = this
    geometryContainer && geometryContainer.unload()
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get primitive () {
        return vm.primitive
      }
    })
  }
}
const watch = {
  changeProps: {
    handler () {
      this.geometryContainer.geometryInstancesContainer.reload()
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
