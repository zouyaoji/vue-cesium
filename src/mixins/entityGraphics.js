import bindEvents from '../util/bindEvent'
import { Events } from '../util/events.js'
import cmp from './virtualCmp'
// import mergeDescriptors from '../util/mergeDescriptors'

const props = {}
const computed = {}
const methods = {
  mount () {
    const { graphics, graphicsContainer } = this
    bindEvents.call(this, graphics, Events['entity-events'])
    graphicsContainer && graphicsContainer.setGraphics(graphics)
  },
  unload () {
    const { graphicsContainer } = this
    graphicsContainer && graphicsContainer.setGraphics(undefined)
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
