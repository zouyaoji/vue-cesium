import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'
import cmp from '../virtualCmp'
import { show } from '../mixinProps'
import mergeDescriptors from '../../utils/mergeDescriptors'

const methods = {
  async mount () {
    const { dataSources, datasource } = this
    bindEvents.call(this, datasource, Events['datasource-events'], true)
    return dataSources.add(datasource)
  },
  async unmount () {
    const { dataSources, datasource } = this
    bindEvents.call(this, datasource, Events['datasource-events'], false)
    return dataSources.remove(datasource)
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get datasource () {
        return vm.datasource
      },
      get entities () {
        return vm.datasource.entities
      }
    })
  }
}
export default {
  mixins: [cmp, show],
  methods,
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      datasource: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      dataSources: {
        enumerable: true,
        get: () => this.$services && this.$services.dataSources
      }
    })
  }
}
