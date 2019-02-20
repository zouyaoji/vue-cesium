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
    eyeOffset: {
      type: Object
    },
    pixelOffset: {
      type: Object
    },
    rotation: {
      type: Number,
      default: 0
    },
    alignedAxis: {
      type: Object
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    color: {
      type: Object
    },
    scaleByDistance: {
      type: Object
    },
    translucencyByDistance: {
      type: Object
    },
    pixelOffsetScaleByDistance: {
      type: Object
    },
    imageSubRegion: {
      type: Object
    },
    sizeInMeters: {
      type: Boolean
    },
    heightReference: {
      type: Number
    },
    distanceDisplayCondition: {
      type: Number
    },
    disableDepthTestDistance: {
      type: Number
    }
  },
  watch: {
    image () {
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
      let billboard = new Cesium.BillboardGraphics({
        image: image,
        show: show,
        scale: scale,
        horizontalOrigin: horizontalOrigin,
        verticalOrigin: verticalOrigin,
        eyeOffset: eyeOffset,
        pixelOffset: pixelOffset,
        rotation: rotation,
        alignedAxis: alignedAxis,
        width: width,
        height: height,
        color: color,
        scaleByDistance: scaleByDistance,
        translucencyByDistance: translucencyByDistance,
        pixelOffsetScaleByDistance: pixelOffsetScaleByDistance,
        imageSubRegion: imageSubRegion,
        sizeInMeters: sizeInMeters,
        heightReference: heightReference,
        distanceDisplayCondition: distanceDisplayCondition,
        disableDepthTestDistance: disableDepthTestDistance
      })

      return billboard
    }
  }
}
</script>
