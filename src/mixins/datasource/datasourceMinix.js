import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events'
import cmp from '../virtualCmp'

const computed = {
  changeProps () {
    return this.makeOptions()
  }
}
const methods = {
  mount () {
    const { viewer, datasource } = this
    viewer.dataSources.add(datasource).then(ds => {
      this.originInstance = ds
      bindEvents.call(this, ds, Events['datasource-events'])
    })
  },
  unload () {
    const { viewer, datasource } = this
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
