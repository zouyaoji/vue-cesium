<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'label-graphics',
  mixins: [entityGraphics],
  props: {
    text: String,
    font: {
      type: String,
      default: '30px sans-serif'
    },
    labelStyle: {
      type: Number,
      default: 0
    },
    fillColor: Object,
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    show: {
      type: Boolean,
      default: true
    },
    showBackground: {
      type: Boolean,
      default: false
    },
    backgroundColor: Object,
    backgroundPadding: Object,
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
    translucencyByDistance: Object,
    pixelOffsetScaleByDistance: Object,
    scaleByDistance: Object,
    heightReference: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Object,
    disableDepthTestDistance: [Object, Number]
  },
  watch: {
    text (val) {
      this.graphics.text = val
    },
    font (val) {
      this.graphics.font = val
    },
    labelStyle (val) {
      this.graphics.style = val
    },
    fillColor (val) {
      this.graphics.fillColor = val
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
    showBackground (val) {
      this.graphics.showBackground = val
    },
    backgroundColor (val) {
      this.graphics.backgroundColor = val
    },
    backgroundPadding (val) {
      this.graphics.backgroundPadding = val
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
    translucencyByDistance (val) {
      this.graphics.translucencyByDistance = val
    },
    pixelOffsetScaleByDistance (val) {
      this.graphics.pixelOffsetScaleByDistance = val
    },
    scaleByDistance (val) {
      this.graphics.scaleByDistance = val
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
      const { Cesium, text, font, labelStyle, fillColor, outlineColor, outlineWidth, show, showBackground, backgroundColor, backgroundPadding, scale,
        horizontalOrigin, verticalOrigin, eyeOffset, pixelOffset, translucencyByDistance, pixelOffsetScaleByDistance, scaleByDistance, heightReference,
        distanceDisplayCondition, disableDepthTestDistance } = this
      let options = {
        text,
        font,
        labelStyle,
        fillColor,
        outlineColor,
        outlineWidth,
        show,
        showBackground,
        backgroundColor,
        backgroundPadding,
        scale,
        horizontalOrigin,
        verticalOrigin,
        eyeOffset,
        pixelOffset,
        translucencyByDistance,
        pixelOffsetScaleByDistance,
        scaleByDistance,
        heightReference,
        distanceDisplayCondition,
        disableDepthTestDistance
      }
      this.removeNullItem(options)
      let label = new Cesium.LabelGraphics(options)

      return label
    }
  }
}
</script>
