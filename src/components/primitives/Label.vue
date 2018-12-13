<script>
import primitiveCollectionItem from '../../mixins/primitiveCollectionItem'
export default {
  name: 'label-primitive',
  mixins: [primitiveCollectionItem],
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
      type: Number,
      default: 0
    },
    horizontalOrigin: {
      type: Number,
      default: 1
    },
    id: null,
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
    pixelOffsetScaleByDistance: Object,
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
      this.primitive.backgroundColor = val
    },
    backgroundPadding (val) {
      this.primitive.backgroundPadding = val
    },
    disableDepthTestDistance (val) {
      this.primitive.disableDepthTestDistance = val
    },
    distanceDisplayCondition (val) {
      this.primitive.distanceDisplayCondition = val
    },
    eyeOffset (val) {
      this.primitive.eyeOffset = val
    },
    fillColor (val) {
      this.primitive.fillColor = val
    },
    font (val) {
      this.primitive.font = val
    },
    heightReference (val) {
      this.primitive.heightReference = val
    },
    horizontalOrigin (val) {
      this.primitive.horizontalOrigin = val
    },
    id (val) {
      this.primitive.id = val
    },
    outlineColor (val) {
      this.primitive.outlineColor = val
    },
    outlineWidth (val) {
      this.primitive.outlineWidth = val
    },
    pixelOffset (val) {
      this.primitive.pixelOffset = val
    },
    pixelOffsetScaleByDistance (val) {
      this.primitive.pixelOffsetScaleByDistance = val
    },
    position (val) {
      this.primitive.position = val
    },
    scale (val) {
      this.primitive.scale = val
    },
    scaleByDistance (val) {
      this.primitive.scaleByDistance = val
    },
    show (val) {
      this.primitive.show = val
    },
    showBackground (val) {
      this.primitive.showBackground = val
    },
    labelStyle (val) {
      this.primitive.labelStyle = val
    },
    text (val) {
      this.primitive.text = val
    },
    translucencyByDistance (val) {
      this.primitive.translucencyByDistance = val
    },
    verticalOrigin (val) {
      this.primitive.verticalOrigin = val
    }
  },
  methods: {
    createCesiumObject () {
      const { primitiveCollection, backgroundColor, backgroundPadding, disableDepthTestDistance, distanceDisplayCondition, eyeOffset, fillColor, font, heightReference,
        horizontalOrigin, id, outlineColor, outlineWidth, pixelOffset, pixelOffsetScaleByDistance, position, scale, scaleByDistance,
        show, showBackground, labelStyle, text, translucencyByDistance, verticalOrigin } = this
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
        pixelOffsetScaleByDistance: pixelOffsetScaleByDistance,
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
      return primitiveCollection.add(label)
    }
  }
}
</script>
