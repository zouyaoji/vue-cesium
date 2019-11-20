import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'
import cmp from '../virtualCmp'

const methods = {
  /**
   * 用异步方式的将 graphics 挂载到 entity。
   */
  async mount () {
    const { graphics, graphicsContainer, $options } = this
    bindEvents.call(this, graphics, Events['entity-events'])
    const arr = $options.name.split('-')
    return graphicsContainer && graphicsContainer.setGraphics(graphics, arr.length === 3 ? arr[2] : 'polylineVolume')
  },
  /**
   * 用异步方的式将 graphics 从 entity 卸载。
   */
  async unmount () {
    const { graphics, graphicsContainer, $options } = this
    bindEvents.call(this, graphics, Events['entity-events'], false)
    const arr = $options.name.split('-')
    return graphicsContainer && graphicsContainer.setGraphics(undefined, arr.length === 3 ? arr[2] : 'polylineVolume')
  }
}
/**
 * 与 vc-entity 组件关联的各 graphics 子组件基础混入方法。
 */
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
