<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'corridor-graphics',
  mixins: [entityGraphics],
  props: {
    positions: Array,
    width: Number,
    cornerType: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    heightReference: Number,
    extrudedHeight: Number,
    extrudedHeightReference: Number,
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: [Object, String],
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 1
    },
    granularity: {
      type: Number,
      default: Math.PI / 180.0
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Object,
    classificationType: {
      type: Number,
      default: 2
    },
    zIndex: Number
  },
  watch: {
    positions (val) {
      this.graphics.positions = val
    },
    width (val) {
      this.graphics.width = val
    },
    cornerType (val) {
      this.graphics.cornerType = val
    },
    height (val) {
      this.graphics.height = val
    },
    heightReference (val) {
      this.graphics.heightReference = val
    },
    extrudedHeight (val) {
      this.graphics.extrudedHeight = val
    },
    extrudedHeightReference (val) {
      this.graphics.extrudedHeightReference = val
    },
    show (val) {
      this.graphics.show = val
    },
    fill (val) {
      this.graphics.fill = val
    },
    material (val) {
      this.graphics.material = val
    },
    outline (val) {
      this.graphics.outline = val
    },
    outlineColor (val) {
      this.graphics.outlineColor = val
    },
    outlineWidth (val) {
      this.graphics.outlineWidth = val
    },
    granularity (val) {
      this.graphics.granularity = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    },
    classificationType (val) {
      this.graphics.classificationType = val
    },
    zIndex (val) {
      this.graphics.zIndex = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, positions, width, cornerType, height, heightReference, extrudedHeight, extrudedHeightReference, show, fill, material,
        outline, outlineColor, outlineWidth, granularity, shadows, distanceDisplayCondition, classificationType, zIndex } = this
      let options = {
        positions,
        width,
        cornerType,
        height,
        heightReference,
        extrudedHeight,
        extrudedHeightReference,
        show,
        fill,
        material,
        outline,
        outlineColor,
        outlineWidth,
        granularity,
        shadows,
        distanceDisplayCondition,
        classificationType,
        zIndex
      }
      this.removeNullItem(options)
      let corridor = new Cesium.CorridorGraphics(options)
      return corridor
    }
  }
}
</script>
