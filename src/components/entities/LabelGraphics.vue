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
    style: {
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
    translucencyByDistance: {
      type: Object
    },
    pixelOffsetScaleByDistance: {
      type: Object
    },
    scaleByDistance: {
      type: Object
    },
    heightReference: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: {
      type: Number
    },
    disableDepthTestDistance: {
      type: Number
    }
  },
  watch: {
    text (val) {
      this.graphics.text = val
    },
    font (val) {
      this.graphics.font = val
    },
    style (val) {
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
      const { Cesium, text, font, style, fillColor, outlineColor, outlineWidth, show, showBackground, backgroundColor, backgroundPadding, scale,
        horizontalOrigin, verticalOrigin, eyeOffset, pixelOffset, translucencyByDistance, pixelOffsetScaleByDistance, scaleByDistance, heightReference,
        distanceDisplayCondition, disableDepthTestDistance } = this
      let label = new Cesium.LabelGraphics({
        text: text,
        font: font,
        style: style,
        fillColor: fillColor,
        outlineColor: outlineColor,
        outlineWidth: outlineWidth,
        show: show,
        showBackground: showBackground,
        backgroundColor: backgroundColor,
        backgroundPadding: backgroundPadding,
        scale: scale,
        horizontalOrigin: horizontalOrigin,
        verticalOrigin: verticalOrigin,
        eyeOffset: eyeOffset,
        pixelOffset: pixelOffset,
        translucencyByDistance: translucencyByDistance,
        pixelOffsetScaleByDistance: pixelOffsetScaleByDistance,
        scaleByDistance: scaleByDistance,
        heightReference: heightReference,
        distanceDisplayCondition: distanceDisplayCondition,
        disableDepthTestDistance: disableDepthTestDistance
      })

      return label
    }
  }
}
</script>
