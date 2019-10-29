<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events'
import { position } from '../../mixins/entity/allProps'
const requireComponent = require.context(
  // 其组件目录的相对路径
  '../entities',
  // 是否查询其子目录
  true
  // 匹配基础组件文件名的正则表达式
  // /Base[A-Z]\w+\.(vue|js)$/
)
export default {
  name: 'vc-entity',
  mixins: [cmp, position],
  props: {
    id: String,
    name: String,
    availability: Object,
    show: {
      type: Boolean,
      default: true
    },
    description: String,
    orientation: Object,
    viewFrom: Object,
    parent: Object,
    billboard: Object,
    corridor: Object,
    cylinder: Object,
    ellipse: Object,
    ellipsoid: Object,
    box: Object,
    label: Object,
    model: Object,
    path: Object,
    plane: Object,
    point: Object,
    polygon: Object,
    polyline: Object,
    properties: Object,
    polylineVolume: Object,
    rectangle: Object,
    wall: Object
  },
  methods: {
    async createCesiumObject () {
      const { specialWatchers, $props } = this
      const specialWatcherKeys = Object.keys(this.specialWatchers)
      const options = {}
      Object.keys($props).forEach((prop) => {
        options[prop] = specialWatcherKeys.indexOf(prop) !== -1 ? specialWatchers[prop].handler.call(this, this[prop]) : this[prop]
      })
      this.removeNullItem(options)
      return new Cesium.Entity(options)
    },
    async mount () {
      const { viewer, entity } = this
      bindEvents.call(this, entity, Events['entity-events'])
      return viewer.entities.add(entity)
    },
    async unmount () {
      const { viewer, entity } = this
      bindEvents.call(this, entity, Events['entity-events'], false)
      return viewer.entities.remove(entity)
    },
    setGraphics (graphics, type) {
      const listener = this.$listeners['update:' + type]
      if (listener) { this.$emit('update:' + type, graphics) } else { this.entity[type] = graphics }
      return true
    },
    getServices () {
      const vm = this
      return mergeDescriptors(
        cmp.methods.getServices.call(this),
        {
          get entity () { return vm.entity },
          get graphicsContainer () { return vm }
        }
      )
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
    console.log(requireComponent.keys())

    requireComponent.keys().forEach(fileName => {
      console.log(fileName)
    })

    this.cesiumClass = 'Entity'
    Object.defineProperties(this, {
      entity: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
</script>
