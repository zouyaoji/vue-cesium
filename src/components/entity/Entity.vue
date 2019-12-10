<script>
import cmp from '../../mixins/virtualCmp'
import { position } from '../../mixins/mixinProps'
import mergeDescriptors from '../../utils/mergeDescriptors'
import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'

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
    description: String | Object,
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
    async mount () {
      const { entities, entity } = this
      bindEvents.call(this, entity, Events['entity-events'])
      return entities && entities.add(entity)
    },
    async unmount () {
      const { entities, entity } = this
      bindEvents.call(this, entity, Events['entity-events'], false)
      return entities && entities.remove(entity)
    },
    setGraphics (graphics, type) {
      const listener = this.$listeners['update:' + type]
      if (listener) {
        this.$emit('update:' + type, graphics)
      } else {
        this.entity[type] = graphics
      }
      return true
    },
    getServices () {
      const vm = this
      return mergeDescriptors(cmp.methods.getServices.call(this), {
        get entity () {
          return vm.entity
        },
        get graphicsContainer () {
          return vm
        }
      })
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
      entity: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      entities: {
        enumerable: true,
        get: () => this.$services && this.$services.entities
      }
    })
  }
}
</script>
