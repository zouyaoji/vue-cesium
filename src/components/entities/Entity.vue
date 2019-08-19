<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events'
import { position } from '../../mixins/entity/allProps'
import { makeCartesian3 } from '../../util/util'

export default {
  name: 'entity',
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
  watch: {
    id (val) {
      this.entity.id = val
    },
    name (val) {
      this.entity.name = val
    },
    availability (val) {
      this.entity.availability = val
    },
    show (val) {
      this.entity.show = val
    },
    description (val) {
      this.entity.description = val
    },
    orientation (val) {
      this.entity.orientation = val
    },
    viewFrom (val) {
      this.entity.viewFrom = val
    },
    parent (val) {
      this.entity.viewFrom = val
    },
    billboard (val) {
      this.entity.billboard = val
    },
    corridor (val) {
      this.entity.corridor = val
    },
    cylinder (val) {
      this.entity.cylinder = val
    },
    ellipse (val) {
      this.entity.ellipse = val
    },
    ellipsoid (val) {
      this.entity.ellipsoid = val
    },
    box (val) {
      this.entity.box = val
    },
    label (val) {
      this.entity.label = val
    },
    model (val) {
      this.entity.model = val
    },
    path (val) {
      this.entity.path = val
    },
    plane (val) {
      this.entity.plane = val
    },
    point (val) {
      this.entity.point = val
    },
    polygon (val) {
      this.entity.polygon = val
    },
    polyline (val) {
      this.entity.polyline = val
    },
    properties (val) {
      this.entity.properties = val
    },
    polylineVolume (val) {
      this.entity.polylineVolume = val
    },
    rectangle (val) {
      this.entity.rectangle = val
    },
    wall (val) {
      this.entity.wall = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, id, name, availability, description, show, position, orientation, viewFrom, parent, billboard, corridor, cylinder,
        ellipse, ellipsoid, box, label, model, path, plane, point, polygon, polyline, properties, polylineVolume, rectangle, wall } = this
      let options = {
        id,
        name,
        availability,
        description,
        show,
        position: makeCartesian3(position),
        orientation,
        viewFrom,
        parent,
        billboard,
        corridor,
        cylinder,
        ellipse,
        ellipsoid,
        box,
        label,
        model,
        path,
        plane,
        point,
        polygon,
        polyline,
        properties,
        polylineVolume,
        rectangle,
        wall
      }
      this.removeNullItem(options)
      return new Cesium.Entity(options)
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
      if (graphics instanceof Cesium.BillboardGraphics) {
        const listener = this.$listeners['update:billboard']
        if (listener) { this.$emit('update:billboard', graphics) } else this.entity.billboard = graphics
      } else if (graphics instanceof Cesium.BoxGraphics) {
        const listener = this.$listeners['update:box']
        if (listener) { this.$emit('update:box', graphics) } else this.entity.box = graphics
      } else if (graphics instanceof Cesium.CorridorGraphics) {
        const listener = this.$listeners['update:corridor']
        if (listener) { this.$emit('update:corridor', graphics) } else this.entity.corridor = graphics
      } else if (graphics instanceof Cesium.CylinderGraphics) {
        const listener = this.$listeners['update:cylinder']
        if (listener) { this.$emit('update:cylinder', graphics) } else this.entity.cylinder = graphics
      } else if (graphics instanceof Cesium.EllipseGraphics) {
        const listener = this.$listeners['update:ellipse']
        if (listener) { this.$emit('update:ellipse', graphics) } else this.entity.ellipse = graphics
      } else if (graphics instanceof Cesium.EllipsoidGraphics) {
        const listener = this.$listeners['update:ellipsoid']
        if (listener) { this.$emit('update:ellipsoid', graphics) } else this.entity.ellipsoid = graphics
      } else if (graphics instanceof Cesium.LabelGraphics) {
        const listener = this.$listeners['update:label']
        if (listener) { this.$emit('update:label', graphics) } else this.entity.label = graphics
      } else if (graphics instanceof Cesium.ModelGraphics) {
        const listener = this.$listeners['update:model']
        if (listener) { this.$emit('update:model', graphics) } else this.entity.model = graphics
      } else if (graphics instanceof Cesium.PathGraphics) {
        const listener = this.$listeners['update:path']
        if (listener) { this.$emit('update:path', graphics) } else this.entity.path = graphics
      } else if (graphics instanceof Cesium.PlaneGraphics) {
        const listener = this.$listeners['update:plane']
        if (listener) { this.$emit('update:plane', graphics) } else this.entity.plane = graphics
      } else if (graphics instanceof Cesium.PointGraphics) {
        const listener = this.$listeners['update:point']
        if (listener) { this.$emit('update:point', graphics) } else this.entity.point = graphics
      } else if (graphics instanceof Cesium.PolygonGraphics) {
        const listener = this.$listeners['update:polygon']
        if (listener) { this.$emit('update:polygon', graphics) } else this.entity.polygon = graphics
      } else if (graphics instanceof Cesium.PolylineGraphics) {
        const listener = this.$listeners['update:polyline']
        if (listener) { this.$emit('update:polyline', graphics) } else this.entity.polyline = graphics
      } else if (graphics instanceof Cesium.PolylineVolumeGraphics) {
        const listener = this.$listeners['update:polylineVolume']
        if (listener) { this.$emit('update:polylineVolume', graphics) } else this.entity.polylineVolume = graphics
      } else if (graphics instanceof Cesium.RectangleGraphics) {
        const listener = this.$listeners['update:rectangle']
        if (listener) { this.$emit('update:rectangle', graphics) } else this.entity.rectangle = graphics
      } else if (graphics instanceof Cesium.WallGraphics) {
        const listener = this.$listeners['update:wall']
        if (listener) { this.$emit('update:wall', graphics) } else this.entity.wall = graphics
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
        get: () => this.cesiumObject
      }
    })
  }
}
</script>
