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
    const { viewer, datasource } = this
    await viewer.dataSources.add(datasource)
    bindEvents.call(this, datasource, Events['datasource-events'])
  },
  async unload () {
    const { viewer, datasource } = this
    bindEvents.call(this, datasource, Events['datasource-events'])
    this.originInstance = undefined
    viewer.dataSources.remove(datasource)
  }
}
const watch = {
  changeProps: {
    handler () {
      this.reload()
    },
    deep: true
  },
  show (val) {
    this.cesiumObject.show = val
  }
}
export default {
  mixins: [cmp],
  computed,
  watch,
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
      }
    })
  }
}
