import bindEvents from '@/util/bindEvent'
import { Events } from '@/util/events'
import cmp from '@/mixins/virtualCmp'

const computed = {
  changeProps () {
    return this.makeOptions()
  }
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
  }
}
const watch = {
  changeProps: {
    handler () {
      this.reload()
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
