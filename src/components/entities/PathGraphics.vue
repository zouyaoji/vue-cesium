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
    material: [Object, String],
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
      let options = {
        leadTime,
        trailTime,
        show,
        width,
        material,
        resolution,
        distanceDisplayCondition
      }
      this.removeNullItem(options)
      let path = new Cesium.PathGraphics(options)

      return path
    }
  }
}
</script>
