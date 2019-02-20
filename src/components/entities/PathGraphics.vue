<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'path-graphics',
  mixins: [entityGraphics],
  props: {
    leadTime: Number,
    trailTime: Number,
    show: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 1.0
    },
    material: Object,
    resolution: {
      type: Number,
      default: 60
    },
    distanceDisplayCondition: Object
  },
  watch: {
    leadTime (val) {
      this.graphics.leadTime = val
    },
    trailTime (val) {
      this.graphics.trailTime = val
    },
    show (val) {
      this.graphics.show = val
    },
    width (val) {
      this.graphics.width = val
    },
    material (val) {
      this.graphics.material = val
    },
    resolution (val) {
      this.graphics.resolution = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, leadTime, trailTime, show, width, material, resolution, distanceDisplayCondition } = this
      let path = new Cesium.ModelGraphics({
        leadTime: leadTime,
        trailTime: trailTime,
        show: show,
        width: width,
        material: material,
        resolution: resolution,
        distanceDisplayCondition: distanceDisplayCondition
      })

      return path
    }
  }
}
</script>
