<script>
import primitiveCollectionItem from '../../mixins/primitiveCollectionItem'
export default {
  name: 'label-primitive',
  mixins: [primitiveCollectionItem],
  props: {
    backgroundColor: Object,
    backgroundPadding: Object,
    disableDepthTestDistance: {
      type: Number
    },
    distanceDisplayCondition: Object,
    eyeOffset: Object,
    fillColor: Object,
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
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    pixelOffset: Object,
    pixelOffsetScaleByDistance: Object,
    position: Object,
    scale: Number,
    scaleByDistance: Object,
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
    text: String,
    translucencyByDistance: Object,
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
        backgroundColor,
        backgroundPadding,
        disableDepthTestDistance,
        distanceDisplayCondition,
        eyeOffset,
        fillColor,
        font,
        heightReference,
        horizontalOrigin,
        id,
        outlineColor,
        outlineWidth,
        pixelOffset,
        pixelOffsetScaleByDistance,
        position,
        scale,
        scaleByDistance,
        show,
        showBackground,
        labelStyle,
        text,
        translucencyByDistance,
        verticalOrigin
      }
      this.removeNullItem(label)
      return primitiveCollection.add(label)
    }
  }
}
</script>
