import bindEvents from '../util/bindEvent'
import { Events } from '../util/events.js'
import cmp from './virtualCmp'
import mergeDescriptors from '../util/mergeDescriptors'

const props = {
}
const computed = {
}
const methods = {
  mount () {
    const { imageryProvider, providerContainer } = this
    bindEvents.call(this, imageryProvider, Events['imagery-layer-events'])
    providerContainer && providerContainer.setProvider(imageryProvider)
  },
  unload () {
    const { providerContainer } = this
    providerContainer && providerContainer.setProvider(undefined)
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get imageryProvider () {
        return vm.imageryProvider
      }
    })
  }
}
const watch = {
}

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
      /**
         * @type {Geometry|undefined}
         */
      imageryProvider: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      providerContainer: {
        enumerable: true,
        get: () => this.$services && this.$services.providerContainer
      }
    })
  }
}
