<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'wall-graphics',
  mixins: [entityGraphics],
  props: {
    positions: Array,
    maximumHeights: Array,
    minimumHeights: Array,
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
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    granularity: {
      type: Number,
      default: Math.PI / 180.0
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Number
  },
  watch: {
    positions (val) {
      this.graphics.positions = val
    },
    maximumHeights (val) {
      this.graphics.maximumHeights = val
    },
    minimumHeights (val) {
      this.graphics.minimumHeights = val
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
    granularity (val) {
      this.graphics.granularity = val
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
      const { Cesium, positions, maximumHeights, minimumHeights, show, fill, material, outline, outlineColor,
        outlineWidth, granularity, shadows, distanceDisplayCondition } = this
      let options = {
        positions: positions,
        maximumHeights: maximumHeights,
        minimumHeights: minimumHeights,
        show: show,
        fill: fill,
        material: material,
        outline: outline,
        outlineColor: outlineColor,
        outlineWidth: outlineWidth,
        granularity: granularity,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition
      }
      this.removeNullItem(options)
      let wall = new Cesium.WallGraphics(options)
      return wall
    }
  }
}
</script>
