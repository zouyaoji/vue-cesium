<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events.js'

export default {
  name: 'entity',
  mixins: [cmp],
  props: {
    id: String,
    name: String,
    availability: Object,
    show: {
      type: Boolean,
      default: true
    },
    description: String,
    position: Object,
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
    position (val) {
      this.entity.position = val
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
        position,
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
      let entity = new Cesium.Entity(options)
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
      if (graphics instanceof Cesium.BillboardGraphics) {
        this.$emit('update:billboard', graphics)
      } else if (graphics instanceof Cesium.BoxGraphics) {
        this.$emit('update:box', graphics)
      } else if (graphics instanceof Cesium.CorridorGraphics) {
        this.$emit('update:corridor', graphics)
      } else if (graphics instanceof Cesium.CylinderGraphics) {
        this.$emit('update:cylinder', graphics)
      } else if (graphics instanceof Cesium.EllipseGraphics) {
        this.$emit('update:ellipse', graphics)
      } else if (graphics instanceof Cesium.EllipsoidGraphics) {
        this.$emit('update:ellipsoid', graphics)
      } else if (graphics instanceof Cesium.LabelGraphics) {
        this.$emit('update:label', graphics)
      } else if (graphics instanceof Cesium.ModelGraphics) {
        this.$emit('update:model', graphics)
      } else if (graphics instanceof Cesium.PathGraphics) {
        this.$emit('update:path', graphics)
      } else if (graphics instanceof Cesium.PlaneGraphics) {
        this.$emit('update:plane', graphics)
      } else if (graphics instanceof Cesium.PointGraphics) {
        this.$emit('update:point', graphics)
      } else if (graphics instanceof Cesium.PolygonGraphics) {
        this.$emit('update:polygon', graphics)
      } else if (graphics instanceof Cesium.PolylineGraphics) {
        this.$emit('update:polyline', graphics)
      } else if (graphics instanceof Cesium.PolylineVolumeGraphics) {
        this.$emit('update:polylineVolume', graphics)
      } else if (graphics instanceof Cesium.RectangleGraphics) {
        this.$emit('update:rectangle', graphics)
      } else if (graphics instanceof Cesium.WallGraphics) {
        this.$emit('update:wall', graphics)
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
