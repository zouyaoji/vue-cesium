<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'plane-graphics',
  mixins: [entityGraphics],
  props: {
    plane: Object,
    dimensions: Object,
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: [Object, String],
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: Object,
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Object
  },
  watch: {
    plane (val) {
      this.graphics.plane = val
    },
    dimensions (val) {
      this.graphics.dimensions = val
    },
    show (val) {
      this.graphics.show = val
    },
    fill (val) {
      this.graphics.fill = val
    },
    material (val) {
      this.graphics.material = val
    },
    outline (val) {
      this.graphics.outline = val
    },
    outlineColor (val) {
      this.graphics.outlineColor = val
    },
    outlineWidth (val) {
      this.graphics.outlineWidth = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, plane, dimensions, show, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition } = this
      let planeGraphics = new Cesium.PlaneGraphics({
        plane,
        dimensions,
        show,
        fill,
        material,
        outline,
        outlineColor,
        outlineWidth,
        shadows,
        distanceDisplayCondition
      })

      return planeGraphics
    }
  }
}
</script>
