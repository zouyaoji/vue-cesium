import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events'
import cmp from '../virtualCmp'

const methods = {
  async mount () {
    console.log('m')
    const { graphics, graphicsContainer, $options } = this
    bindEvents.call(this, graphics, Events['entity-events'])
    let arr = $options.name.split('-')
    return graphicsContainer && graphicsContainer.setGraphics(graphics, arr.length === 2 ? arr[0] : 'polylineVolume')
  },
  async unmount () {
    console.log('n')
    const { graphics, graphicsContainer, $options } = this
    bindEvents.call(this, graphics, Events['entity-events'], false)
    let arr = $options.name.split('-')
    return graphicsContainer && graphicsContainer.setGraphics(undefined, arr.length === 2 ? arr[0] : 'polylineVolume')
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
