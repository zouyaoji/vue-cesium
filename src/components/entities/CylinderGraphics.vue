<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'cylinder-graphics',
  mixins: [entityGraphics],
  props: {
    heightReference: Number,
    length: Number,
    topRadius: Number,
    bottomRadius: Number,
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
    numberOfVerticalLines: {
      type: Number,
      default: 16
    },
    slices: {
      type: Number,
      default: 128
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Object
  },
  watch: {
    heightReference (val) {
      this.graphics.heightReference = val
    },
    length (val) {
      this.graphics.length = val
    },
    topRadius (val) {
      this.graphics.topRadius = val
    },
    bottomRadius (val) {
      this.graphics.bottomRadius = val
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
    slices (val) {
      this.graphics.slices = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, heightReference, length, topRadius, bottomRadius, show, fill, material,
        outline, outlineColor, outlineWidth, numberOfVerticalLines, slices, shadows, distanceDisplayCondition } = this
      let options = {
        heightReference,
        length,
        topRadius,
        bottomRadius,
        show,
        fill,
        material,
        outline,
        outlineColor,
        outlineWidth,
        numberOfVerticalLines,
        slices,
        shadows,
        distanceDisplayCondition
      }
      this.removeNullItem(options)
      let cylinder = new Cesium.CylinderGraphics(options)
      return cylinder
    }
  }
}
</script>
