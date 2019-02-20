<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'polyline-volume-graphics',
  mixins: [entityGraphics],
  props: {
    positions: Array,
    shape: Array,
    cornerType: {
      type: Number,
      default: 0
    },
    extrudedHeight: Number,
    extrudedHeightReference: Number,
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: Object,
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
      default: 180.0 / Math.PI
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
    shape (val) {
      this.graphics.shape = val
    },
    cornerType (val) {
      this.graphics.cornerType = val
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
      const { Cesium, positions, shape, cornerType, show, fill, material, outline, outlineColor,
        outlineWidth, granularity, shadows, distanceDisplayCondition } = this
      let polylineVolume = new Cesium.PolylineVolumeGraphics({
        positions: positions,
        shape: shape,
        cornerType: cornerType,
        show: show,
        fill: fill,
        material: material,
        outline: outline,
        outlineColor: outlineColor,
        outlineWidth: outlineWidth,
        granularity: granularity,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition
      })

      return polylineVolume
    }
  }
}
</script>
