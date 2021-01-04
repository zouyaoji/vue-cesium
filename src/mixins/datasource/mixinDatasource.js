import { differenceBy } from 'lodash-es'
import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'
import cmp from '../virtualCmp'
import mixinPickEvent from '../event/mixinPickEvent'
import { show } from '../mixinProps'
import mergeDescriptors from '../../utils/mergeDescriptors'

const watch = {
  entities: {
    /**
     * https://cn.vuejs.org/v2/guide/reactivity.html#检测变化的注意事项
     */
    handler: function (newVal, oldVal) {
      if (!this.mounted) {
        return
      }
      const { transformProp, transformProps, datasource } = this
      if (newVal === oldVal) {
        if (newVal.length === datasource.entities.values.length) {
          // 认为是修改了某个对象
          for (let i = 0; i < newVal.length; i++) {
            const options = newVal[i]
            Object.keys(options).forEach(prop => {
              if (prop !== 'id') {
                datasource.entities.values[i][prop] = transformProp(prop, options[prop])
              }
            })
          }
        } else if (newVal.length > datasource.entities.values.length) {
          // 认为是插入了新对象 push unshift splice
          const addedEntities = differenceBy(newVal, datasource.entities.values, 'id')
          if (addedEntities.length === 0) {
            // warn 请使用唯一 id
          }
          for (let i = 0; i < addedEntities.length; i++) {
            const entityOptions = addedEntities[i]
            const entityOptionsTransform = transformProps(entityOptions)
            const entityAdded = datasource.entities.add(entityOptionsTransform)
            entityAdded.vcIndex = newVal.indexOf(entityOptions)
            entityAdded.id !== entityOptions.id && (entityOptions.id = entityAdded.id)
          }
        } else if (newVal.length < datasource.entities.values.length) {
          // 认为是删除了对象 pop splice shift
          const deletedEntities = differenceBy(datasource.entities.values, newVal, 'id')
          for (let i = 0; i < deletedEntities.length; i++) {
            const entity = deletedEntities[i]
            datasource.entities.remove(entity)
          }
          let iNull = 0
          for (let i = 0; i < datasource.entities.values.length; i++) {
            if (datasource.entities.values[i]) {
              datasource.entities.values[i].vcIndex = i - iNull
            } else {
              iNull++
            }
          }
        }
      } else {
        // 认为是赋新值
        this.reload()
      }
    },
    deep: true
  }
}
const methods = {
  async mount () {
    const { dataSources, datasource, registerEvents, entities, transformProps } = this
    bindEvents.call(this, datasource, Events['datasource-events'], true)
    Events['datasource-property-events'].forEach((eventName) => {
      datasource[eventName.name] && bindEvents.call(this, datasource[eventName.name], eventName.events, true)
    })
    datasource.show = this.show
    registerEvents(true)
    for (let i = 0; i < entities.length; i++) {
      const entityOptions = entities[i]
      const entityOptionsTransform = transformProps(entityOptions)
      const entity = datasource.entities.add(entityOptionsTransform)
      entity.vcIndex = i
      entityOptions.id !== entity.id && (entityOptions.id = entity.id)
    }

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
  watch,
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
