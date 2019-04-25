<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'billboard-graphics',
  mixins: [entityGraphics],
  props: {
    image: [String, Object],
    show: {
      type: Boolean,
      default: true
    },
    scale: {
      type: Number,
      default: 1.0
    },
    horizontalOrigin: {
      type: Number,
      default: 0
    },
    verticalOrigin: {
      type: Number,
      default: 0
    },
    eyeOffset: Object,
    pixelOffset: Object,
    rotation: {
      type: [Number, Object],
      default: 0
    },
    alignedAxis: Object,
    width: Number,
    height: Number,
    color: Object,
    scaleByDistance: Object,
    translucencyByDistance: Object,
    pixelOffsetScaleByDistance: Object,
    imageSubRegion: Object,
    sizeInMeters: Boolean,
    heightReference: Number,
    distanceDisplayCondition: Object,
    disableDepthTestDistance: Object
  },
  watch: {
    image (val) {
      this.graphics.image = val
    },
    show (val) {
      this.graphics.show = val
    },
    scale (val) {
      this.graphics.scale = val
    },
    horizontalOrigin (val) {
      this.graphics.horizontalOrigin = val
    },
    verticalOrigin (val) {
      this.graphics.verticalOrigin = val
    },
    eyeOffset (val) {
      this.graphics.eyeOffset = val
    },
    pixelOffset (val) {
      this.graphics.pixelOffset = val
    },
    rotation (val) {
      this.graphics.rotation = val
    },
    alignedAxis (val) {
      this.graphics.alignedAxis = val
    },
    width (val) {
      this.graphics.width = val
    },
    height (val) {
      this.graphics.height = val
    },
    color (val) {
      this.graphics.color = val
    },
    scaleByDistance (val) {
      this.graphics.scaleByDistance = val
    },
    translucencyByDistance (val) {
      this.graphics.translucencyByDistance = val
    },
    pixelOffsetScaleByDistance (val) {
      this.graphics.pixelOffsetScaleByDistance = val
    },
    imageSubRegion (val) {
      this.graphics.imageSubRegion = val
    },
    sizeInMeters (val) {
      this.graphics.sizeInMeters = val
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
      const { Cesium, image, show, scale, horizontalOrigin, verticalOrigin, eyeOffset, pixelOffset, rotation, alignedAxis, width, height,
        color, scaleByDistance, translucencyByDistance, pixelOffsetScaleByDistance, imageSubRegion, sizeInMeters, heightReference, distanceDisplayCondition,
        disableDepthTestDistance } = this
      let options = {
        image,
        show,
        scale,
        horizontalOrigin,
        verticalOrigin,
        eyeOffset,
        pixelOffset,
        rotation,
        alignedAxis,
        width,
        height,
        color,
        scaleByDistance,
        translucencyByDistance,
        pixelOffsetScaleByDistance,
        imageSubRegion,
        sizeInMeters,
        heightReference,
        distanceDisplayCondition,
        disableDepthTestDistance
      }
      this.removeNullItem(options)
      let billboard = new Cesium.BillboardGraphics(options)
      return billboard
    }
  }
}
</script>
