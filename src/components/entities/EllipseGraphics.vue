<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'ellipse-graphics',
  mixins: [entityGraphics],
  props: {
    semiMajorAxis: Number,
    semiMinorAxis: Number,
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
      default: 1.0
    },
    numberOfVerticalLines: {
      type: Number,
      default: 16
    },
    rotation: {
      type: Number,
      default: 0.0
    },
    stRotation: {
      type: Number,
      default: 0.0
    },
    granularity: {
      type: Number,
      default: 180.0 / Math.PI
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Number,
    classificationType: {
      type: Number,
      default: 2
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    semiMajorAxis (val) {
      this.graphics.semiMajorAxis = val
    },
    semiMinorAxis (val) {
      this.graphics.semiMinorAxis = val
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
    numberOfVerticalLines (val) {
      this.graphics.numberOfVerticalLines = val
    },
    rotation (val) {
      this.graphics.rotation = val
    },
    stRotation (val) {
      this.graphics.stRotation = val
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
      const { Cesium, semiMajorAxis, semiMinorAxis, height, heightReference, extrudedHeight, extrudedHeightReference, show, fill, material, outline, outlineColor,
        outlineWidth, numberOfVerticalLines, rotation, stRotation, granularity, shadows, distanceDisplayCondition, classificationType, zIndex } = this
      let ellipse = new Cesium.EllipseGraphics({
        semiMajorAxis: semiMajorAxis,
        semiMinorAxis: semiMinorAxis,
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
        numberOfVerticalLines: numberOfVerticalLines,
        rotation: rotation,
        stRotation: stRotation,
        granularity: granularity,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition,
        classificationType: classificationType,
        zIndex: zIndex
      })

      return ellipse
    }
  }
}
</script>
