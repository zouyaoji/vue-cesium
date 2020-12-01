import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'
import cmp from '../virtualCmp'
import mixinPickEvent from '../event/mixinPickEvent'
import { show } from '../mixinProps'
import mergeDescriptors from '../../utils/mergeDescriptors'

const methods = {
  async mount () {
    const { dataSources, datasource, registerEvents, entities, transformProps } = this
    bindEvents.call(this, datasource, Events['datasource-events'], true)
    Events['datasource-property-events'].forEach((eventName) => {
      datasource[eventName.name] && bindEvents.call(this, datasource[eventName.name], eventName.events, true)
    })
    datasource.show = this.show
    registerEvents(true)
    entities.forEach(entity => {
      const entityOptions = transformProps(entity)
      datasource.entities.add(entityOptions)
    })
    return dataSources && dataSources.add(datasource)
  },
  async unmount () {
    const { dataSources, datasource, registerEvents } = this
    bindEvents.call(this, datasource, Events['datasource-events'], false)
    Events['datasource-property-events'].forEach((eventName) => {
      datasource[eventName.name] && bindEvents.call(this, datasource[eventName.name], eventName.events, false)
    })
    registerEvents(false)
    return dataSources && dataSources.remove(datasource)
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
  mixins: [cmp, show, mixinPickEvent],
  methods,
  props: {
    enbaleEvent: {
      type: Boolean,
      default: true
    },
    entities: {
      type: Array,
      default: () => []
    }
  },
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
