import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events'
import cmp from '../virtualCmp'

const computed = {
  changeProps () {
    return this.makeOptions()
  }
}
const methods = {
  async mount () {
    const { imageryProvider, providerContainer } = this
    imageryProvider.readyPromise
      .then(() => {
        const listener = this.$listeners['readyPromise']
        listener && this.$emit('readyPromise', imageryProvider)
      })
      .otherwise(error => {
        throw new Cesium.DeveloperError(error)
      })
    bindEvents.call(this, imageryProvider, Events['imagery-layer-events'])
    return providerContainer && providerContainer.setProvider(imageryProvider)
  },
  async unmount () {
    const { imageryProvider } = this
    bindEvents.call(this, imageryProvider, Events['imagery-layer-events'], false)
    return true
  }
}
export default {
  mixins: [cmp],
  computed,
  // watch,
  methods,
  stubVNode: {
    empty () {
      return this.$options.name
    }
  },
  data () {
    return {
      renderByParent: true
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
