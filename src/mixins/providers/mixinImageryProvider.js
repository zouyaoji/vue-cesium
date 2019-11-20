import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'
import cmp from '../virtualCmp'

const methods = {
  async mount () {
    const { imageryProvider, providerContainer } = this
    imageryProvider.readyPromise.then(() => {
      const listener = this.$listeners['readyPromise']
      listener && this.$emit('readyPromise', imageryProvider)
    }).otherwise(error => {
      throw new Cesium.DeveloperError(error)
    })
    bindEvents.call(this, imageryProvider, Events['imagery-layer-events'], true)
    return providerContainer && providerContainer.setProvider(imageryProvider)
  },
  async unmount () {
    const { imageryProvider, providerContainer } = this
    bindEvents.call(this, imageryProvider, Events['imagery-layer-events'], false)
    return providerContainer && providerContainer.setProvider(undefined)
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
