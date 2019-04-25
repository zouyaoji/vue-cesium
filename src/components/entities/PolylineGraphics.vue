<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'polyline-graphics',
  mixins: [entityGraphics],
  props: {
    positions: {
      type: Array
    },
    followSurface: {
      type: Boolean,
      default: true
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
    material: {
      type: Object
    },
    depthFailMaterial: {
      type: Object
    },
    granularity: {
      type: Number,
      default: Math.PI / 180.0
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: {
      type: Number
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    positions () {
    },
    followSurface (val) {
      this.graphics.followSurface = val
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
      const { Cesium, positions, followSurface, clampToGround, width, show, material, depthFailMaterial,
        granularity, shadows, distanceDisplayCondition, zIndex } = this
      let options = {
        positions: positions,
        followSurface: followSurface,
        clampToGround: clampToGround,
        width: width,
        show: show,
        material: material,
        depthFailMaterial: depthFailMaterial,
        granularity: granularity,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition,
        zIndex: zIndex
      }
      this.removeNullItem(options)
      let polyline = new Cesium.PolylineGraphics(options)
      polyline.positions = new Cesium.CallbackProperty(() => this.positions, false)
      return polyline
    }
  }
}
</script>
