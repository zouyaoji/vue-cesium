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
    material: Object,
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
      default: 180.0 / Math.PI
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: {
      type: Number
    },
    classificationType: {
      type: Number,
      default: 2
    },
    zIndex: Number
  },
  watch: {
    positions () {
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
      let corridor = new Cesium.CorridorGraphics({
        positions: positions,
        width: width,
        cornerType: cornerType,
        height: height,
        heightReference: heightReference,
        extrudedHeight: extrudedHeight,
        extrudedHeightReference: extrudedHeightReference,
        show: show,
        fill: fill,
        material: material,
        outline: outline,
        outlineColor: outlineColor,
        outlineWidth: outlineWidth,
        granularity: granularity,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition,
        classificationType: classificationType,
        zIndex: zIndex
      })
      return corridor
    }
  }
}
</script>
