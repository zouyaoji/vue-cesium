import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'
import cmp from '../virtualCmp'

const methods = {
  async mount () {
    const { viewer, terrainProvider } = this
    bindEvents.call(this, terrainProvider, Events['imagery-layer-events'], true)
    viewer.terrainProvider = terrainProvider
  },
  async unmount () {
    const { viewer, terrainProvider } = this
    bindEvents.call(this, terrainProvider, Events['imagery-layer-events'], false)
    viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider()
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
    Object.defineProperties(this, {
      terrainProvider: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
