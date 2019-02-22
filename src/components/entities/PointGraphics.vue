<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'point-graphics',
  mixins: [entityGraphics],
  props: {
    color: Object,
    pixelSize: {
      type: Number,
      default: 1
    },
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: true
    },
    scaleByDistance: Object,
    heightReference: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Object,
    disableDepthTestDistance: Object
  },
  watch: {
    color (val) {
      this.graphics.color = val
    },
    pixelSize (val) {
      this.graphics.pixelSize = val
    },
    outlineColor (val) {
      this.graphics.outlineColor = val
    },
    outlineWidth (val) {
      this.graphics.outlineWidth = val
    },
    show (val) {
      this.graphics.show = val
    },
    scaleByDistance (val) {
      this.graphics.scaleByDistance = val
    },
    translucencyByDistance (val) {
      this.graphics.translucencyByDistance = val
    },
    heightReference (val) {
      this.graphics.heightReference = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    },
    disableDepthTestDistance (val) {
      this.graphics.disableDepthTestDistance = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, color, pixelSize, outlineColor, outlineWidth, show, scaleByDistance, translucencyByDistance, heightReference,
        distanceDisplayCondition, disableDepthTestDistance } = this
      let point = new Cesium.PointGraphics({
        color,
        pixelSize,
        outlineColor,
        outlineWidth,
        show,
        scaleByDistance,
        translucencyByDistance,
        heightReference,
        distanceDisplayCondition,
        disableDepthTestDistance
      })

      return point
    }
  }
}
</script>
