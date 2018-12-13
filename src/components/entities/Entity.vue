<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events.js'

export default {
  name: 'entity',
  mixins: [cmp],
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    availability: {
      type: Object
    },
    show: {
      type: Boolean,
      default: true
    },
    description: {
      type: String
    },
    position: {
      type: Object
    },
    orientation: {
      type: Object
    },
    viewFrom: {
      type: Object
    },
    parent: {
      type: Object
    },
    billboard: {
      type: Object
    },
    corridor: {
      type: Object
    },
    cylinder: {
      type: Object
    },
    ellipse: {
      type: Object
    },
    ellipsoid: {
      type: Object
    },
    box: {
      type: Object
    },
    label: {
      type: Object
    },
    model: {
      type: Object
    },
    path: {
      type: Object
    },
    plane: {
      type: Object
    },
    point: {
      type: Object
    },
    polygon: {
      type: Object
    },
    polyline: {
      type: Object
    },
    properties: {
      type: Object
    },
    polylineVolume: {
      type: Object
    },
    rectangle: {
      type: Object
    },
    wall: {
      type: Object
    }
  },
  watch: {
    id () {
      this.reload()
    },
    name (val) {
      this.entity.name = val
    },
    availability () {
      this.reload()
    },
    show (val) {
      this.entity.show = val
    },
    description (val) {
      this.entity.description = val
    },
    position (val) {
      this.entity.position = val
    },
    orientation (val) {
      this.entity.orientation = val
    },
    viewFrom (val) {
      this.entity.viewFrom = val
    },
    parent () {
      this.reload()
    },
    billboard () {
      this.reload()
    },
    corridor () {
      this.reload()
    },
    cylinder () {
      this.reload()
    },
    ellipse () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    },
    box () {
      this.reload()
    },
    label () {
      this.reload()
    },
    model () {
      this.reload()
    },
    path () {
      this.reload()
    },
    plane () {
      this.reload()
    },
    point () {
      this.reload()
    },
    polygon () {
      this.reload()
    },
    polyline () {
      this.reload()
    },
    properties () {
      this.reload()
    },
    polylineVolume () {
      this.reload()
    },
    rectangle () {
      this.reload()
    },
    wall () {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, id, name, availability, description, show, position, orientation, viewFrom, parent, billboard, corridor, cylinder,
        ellipse, ellipsoid, box, label, model, path, plane, point, polygon, polyline, properties, polylineVolume, rectangle, wall } = this
      let entity = new Cesium.Entity({
        id: id,
        name: name,
        availability: availability,
        show: show,
        description: description,
        position: position,
        orientation: orientation,
        viewFrom: viewFrom,
        parent: parent,
        billboard: billboard,
        corridor: corridor,
        cylinder: cylinder,
        ellipse: ellipse,
        ellipsoid: ellipsoid,
        box: box,
        label: label,
        model: model,
        path: path,
        plane: plane,
        point: point,
        polygon: polygon,
        polyline: polyline,
        properties: properties,
        polylineVolume: polylineVolume,
        rectangle: rectangle,
        wall: wall
      })
      return entity
    },
    mount () {
      const { viewer, entity } = this
      bindEvents.call(this, entity, Events['entity-events'])
      viewer.entities.add(entity)
    },
    unload () {
      const { viewer, entity } = this
      viewer.entities.remove(entity)
    },
    setGraphics (graphics) {
      const { entity } = this
      if (graphics instanceof Cesium.BillboardGraphics) {
        entity.billboard = graphics
      } else if (graphics instanceof Cesium.PolylineGraphics) {
        entity.polyline = graphics
      }
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
    Object.defineProperties(this, {
      entity: {
        enumerable: true,
        get: () => this.$services && this.cesiumObject
      }
    })
  }
}
</script>
