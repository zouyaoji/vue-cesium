<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'polyline-graphics',
  mixins: [entityGraphics],
  props: {
    positions: Array,
    arcType: {
      type: Number,
      default: 1
    },
    clampToGround: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 1.0
    },
    show: {
      type: Boolean,
      default: true
    },
    material: Object,
    depthFailMaterial: Object,
    granularity: {
      type: Number,
      default: Math.PI / 180.0
    },
    shadows: Number,
    distanceDisplayCondition: Object,
    zIndex: Number
  },
  watch: {
    positions () {
    },
    arcType (val) {
      this.graphics.arcType = val
    },
    clampToGround (val) {
      this.graphics.clampToGround = val
    },
    width (val) {
      this.graphics.width = val
    },
    show (val) {
      this.graphics.show = val
    },
    material (val) {
      this.graphics.material = val
    },
    depthFailMaterial (val) {
      this.graphics.depthFailMaterial = val
    },
    granularity (val) {
      this.graphics.granularity = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    },
    zIndex (val) {
      this.graphics.zIndex = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, positions, arcType, clampToGround, width, show, material, depthFailMaterial,
        granularity, shadows, distanceDisplayCondition, zIndex } = this
      let options = {
        positions,
        arcType,
        clampToGround,
        width,
        show,
        material,
        depthFailMaterial,
        granularity,
        shadows,
        distanceDisplayCondition,
        zIndex
      }
      this.removeNullItem(options)
      let polyline = new Cesium.PolylineGraphics(options)
      polyline.positions = new Cesium.CallbackProperty(() => this.positions, false)
      return polyline
    }
  }
}
</script>
