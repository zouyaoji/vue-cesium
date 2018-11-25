<script>
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'label-primitive',
  render (h) {},
  mixins: [commonMixin('label-primitive')],
  props: {
    backgroundColor: {
      type: Object
    },
    backgroundPadding: {
      type: Object
    },
    disableDepthTestDistance: {
      type: Number
    },
    distanceDisplayCondition: {
      type: Object
    },
    eyeOffset: {
      type: Object
    },
    fillColor: {
      type: Object
    },
    font: {
      type: String,
      default: '30px sans-serif'
    },
    heightReference: {
      type: Number
    },
    horizontalOrigin: {
      type: Number
    },
    id: {
      type: Object
    },
    outlineColor: {
      type: Object
    },
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    pixelOffset: {
      type: Object
    },
    position: {
      type: Object
    },
    scale: {
      type: Number
    },
    scaleByDistance: {
      type: Object
    },
    show: {
      type: Boolean,
      default: true
    },
    showBackground: {
      type: Boolean,
      default: false
    },
    labelStyle: {
      type: Number,
      default: 2
    },
    text: {
      type: String
    },
    translucencyByDistance: {
      type: Object
    },
    verticalOrigin: {
      type: Number,
      default: 2
    }
  },
  watch: {
    backgroundColor (val) {
      this.originInstance.backgroundColor = val
    },
    backgroundPadding (val) {
      this.originInstance.backgroundPadding = val
    },
    disableDepthTestDistance (val) {
      this.originInstance.disableDepthTestDistance = val
    },
    distanceDisplayCondition (val) {
      this.originInstance.distanceDisplayCondition = val
    },
    eyeOffset (val) {
      this.originInstance.eyeOffset = val
    },
    fillColor (val) {
      this.originInstance.fillColor = val
    },
    font (val) {
      this.originInstance.font = val
    },
    heightReference (val) {
      this.originInstance.heightReference = val
    },
    horizontalOrigin (val) {
      this.originInstance.horizontalOrigin = val
    },
    id (val) {
      this.originInstance.id = val
    },
    outlineColor (val) {
      this.originInstance.outlineColor = val
    },
    outlineWidth (val) {
      this.originInstance.outlineWidth = val
    },
    pixelOffset (val) {
      this.originInstance.pixelOffset = val
    },
    position (val) {
      this.originInstance.position = val
    },
    scale (val) {
      this.originInstance.scale = val
    },
    scaleByDistance (val) {
      this.originInstance.scaleByDistance = val
    },
    show (val) {
      this.originInstance.show = val
    },
    showBackground (val) {
      this.originInstance.showBackground = val
    },
    labelStyle (val) {
      this.originInstance.labelStyle = val
    },
    text (val) {
      this.originInstance.text = val
    },
    translucencyByDistance (val) {
      this.originInstance.translucencyByDistance = val
    },
    verticalOrigin (val) {
      this.originInstance.verticalOrigin = val
    }
  },
  methods: {
    load () {
      const { backgroundColor, backgroundPadding, disableDepthTestDistance, distanceDisplayCondition, eyeOffset, fillColor, font, heightReference, horizontalOrigin,
        id, outlineColor, outlineWidth, pixelOffset, position, scale, scaleByDistance, show, showBackground, labelStyle, text, translucencyByDistance, verticalOrigin } = this
      let label = {
        backgroundColor: backgroundColor,
        backgroundPadding: backgroundPadding,
        disableDepthTestDistance: disableDepthTestDistance,
        distanceDisplayCondition: distanceDisplayCondition,
        eyeOffset: eyeOffset,
        fillColor: fillColor,
        font: font,
        heightReference: heightReference,
        horizontalOrigin: horizontalOrigin,
        id: id,
        outlineColor: outlineColor,
        outlineWidth: outlineWidth,
        pixelOffset: pixelOffset,
        position: position,
        scale: scale,
        scaleByDistance: scaleByDistance,
        show: show,
        showBackground: showBackground,
        style: labelStyle,
        text: text,
        translucencyByDistance: translucencyByDistance,
        verticalOrigin: verticalOrigin
      }
      this.originInstance = this.$parent.originInstance.add(label)
    }
  }
}
</script>
