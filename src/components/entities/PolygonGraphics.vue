<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'polygon-graphics',
  mixins: [entityGraphics],
  props: {
    hierarchy: {
      type: Array
    },
    height: {
      type: Number
    },
    heightReference: {
      type: Number
    },
    extrudedHeight: {
      type: Number
    },
    extrudedHeightReference: {
      type: Number
    },
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: {
      type: Object
    },
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: {
      type: Object
    },
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    stRotation: {
      type: Number,
      default: 0.0
    },
    granularity: {
      type: Number,
      default: 0.017453292519943295
    },
    perPositionHeight: {
      type: Boolean,
      default: false
    },
    closeTop: {
      type: Boolean,
      default: true
    },
    closeBottom: {
      type: Boolean,
      default: true
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: {
      type: Number
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    hierarchy () {
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
    stRotation (val) {
      this.graphics.stRotation = val
    },
    granularity (val) {
      this.graphics.granularity = val
    },
    perPositionHeight (val) {
      this.graphics.perPositionHeight = val
    },
    closeTop (val) {
      this.graphics.closeTop = val
    },
    closeBottom (val) {
      this.graphics.closeBottom = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    },
    zIndex (val) {
      this.graphics.zIndex = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, hierarchy, height, heightReference, extrudedHeight, extrudedHeightReference, show, fill, material, outline, outlineColor,
        outlineWidth, stRotation, granularity, perPositionHeight, closeTop, closeBottom, shadows, distanceDisplayCondition, zIndex } = this
      let polygon = {
        hierarchy: hierarchy,
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
        stRotation: stRotation,
        granularity: granularity,
        perPositionHeight: perPositionHeight,
        closeTop: closeTop,
        closeBottom: closeBottom,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition,
        zIndex: zIndex
      }

      polygon.hierarchy = new Cesium.CallbackProperty(() => this.hierarchy, false)
      return polygon
    }
  }
}
</script>
