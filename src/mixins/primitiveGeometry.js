// import bindEvents from '../util/bindEvent'
// import { Events } from '../util/events.js'
import cmp from './virtualCmp'
import mergeDescriptors from '../util/mergeDescriptors'

const props = {}
const computed = {}
const methods = {
  mount () {
    const { geometry, geometryContainer } = this
    // bindEvents.call(this, graphics, Events['entity-events'])
    geometryContainer && geometryContainer.setGraphics(geometry)
  },
  unload () {
    const { geometryContainer } = this
    geometryContainer && geometryContainer.setGraphics(undefined)
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get geometry () {
        return vm.geometry
      }
    })
  }
}
const watch = {}

export default {
  mixins: [cmp],
  props,
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
      graphics: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      graphicsContainer: {
        enumerable: true,
        get: () => this.$services && this.$services.graphicsContainer
      }
    })
  }
}
