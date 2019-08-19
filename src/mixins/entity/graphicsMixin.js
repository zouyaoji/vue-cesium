import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events'
import cmp from '../virtualCmp'

const methods = {
  mount () {
    const { graphics, graphicsContainer } = this
    bindEvents.call(this, graphics, Events['entity-events'])
    graphicsContainer && graphicsContainer.setGraphics(graphics)
  },
  unload () {
    const { graphicsContainer } = this
    graphicsContainer && graphicsContainer.unload()
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
